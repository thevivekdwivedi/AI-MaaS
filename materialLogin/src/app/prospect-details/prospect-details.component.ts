import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

import { IndustryTypeService } from '../industry-type.service';
import { ProspectService } from '../prospect.service';
import { TaskService } from '../task.service';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

const typesAPI = 'http://localhost:4000/industryTypes/allTypes';
const uploadAPI = 'http://localhost:4000/uploadFile/';
const prospectAPI = 'http://localhost:4000/prospectsMeta/';
const rAPI = 'http://localhost:4000/runR';
const prospectSpendLimitedAPI = 'http://localhost:4000/prosepectSpendLimited/';

@Component({
  selector: 'app-prospect-details',
  templateUrl: './prospect-details.component.html',
  styleUrls: ['./prospect-details.component.css']
})
export class ProspectDetailsComponent implements OnInit {
  prospectName: String = "";
  industryTypes: String[] = [];
  radio: number = 0;
  industryType: String = "";
  subscription: String = "";
  file: File;
  prospect_id: number;
  showLimited: boolean = false;
  spendAmount: number = 0;
  poCount: number = 0;
  invoiceCount: number = 0;
  showLoader: boolean;


  constructor(
    private industryTypeService: IndustryTypeService,
    private http: Http,
    private router: Router,
    private prospectService: ProspectService,
    private taskService: TaskService) { }

  ngOnInit() {
    this.showLoader = false;
    this.getAllIndutryTypes();
  }

  getAllIndutryTypes(): void {
    this.http.get(typesAPI)
      .subscribe(types => {
        var inTypes = types.json();
        this.industryTypes.push("Select Industry");
        for (let type of inTypes) {
          this.industryTypes.push(type.Prospect_Industry);
        }
      });
  }

  submit(): void {
    console.log(this.prospectName);
    if (this.prospectName == "") {

    } else {
      this.prospectService.setName(this.prospectName);
      console.log('calling getPid');
      this.prospectService.getProspectListing();
      console.log('called getPid');
      if (this.radio == 1) {
        this.prospectService.setVersion("Limited");
      } else {
        this.prospectService.setVersion("Advanced");
      }
      this.prospectService.setIndustry(this.industryType);
      // console.log("the industry type:" +this.industryType);
      console.log(this.file);
      this.showLoader = true;
    }
    this.updateProspect();

  }

  updateProspectLimited(): void {
    var prospect = {
      Prospect_ID: this.prospectService.getId(),
      Spend_USD: this.spendAmount,
      PO_Count: this.poCount,
      Invoice_Count: this.invoiceCount
    };
    var body = JSON.stringify(prospect);
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(prospectSpendLimitedAPI, body, options)
      .subscribe(data => {
        console.log(data.json());
        this.showLoader = false;
        this.router.navigate(['prospectSummaryLimited']);
      })
  }

  updateProspect(): void {
    var prospect = {
      Prospect_Name: this.prospectService.getName(),
      Version: this.prospectService.getVersion(),
      Industry: this.prospectService.getIndustry()
    };
    var body = JSON.stringify(prospect);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(prospectAPI + 'insert', body, options)
      .subscribe(data => {
        this.prospectService.setId(data.json().Prospect_ID);
        this.uploadFile();
      },
      error => {
        console.log(error);
      },
      () => {
        this.uploadFile();
      }
      );
  }

  uploadFile(): void {
    let formData: FormData = new FormData();
    formData.append('file', this.file, this.file.name);
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    this.http.post(uploadAPI + this.prospectService.getId(), formData, options)
      .subscribe(data => {
        if (this.showLimited) {
          this.updateProspectLimited();
        } else {
          console.log("Calling R")
          this.callR();
        }
      },
      error => {
        console.log(error);
      }
      );
  }

  callR(): void {
    var rParams = { pid: this.prospectService.getId().toString(), file: this.file.name };
    var body = JSON.stringify(rParams);
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    this.http.post(rAPI, body, options)
      .subscribe(data => {
        console.log("Data from r: " + data.json());
        var count = 60;
        var pid = this.prospectService.getId;
        while (!this.taskService.getTaskStatus(pid) && count != 0) {
          setTimeout(() => this.taskService.getTaskStatus(pid), 5000);
        }
        if (this.taskService.getTaskStatus(pid)) {
          this.router.navigate(['prospectSummary']);
        } else {
          this.router.navigate(['error']);//errorPage.
        }
        //introduce a while loop to checl the status of the task table adn if successful navigate to prospect summary
        // setTimeout(() => this.router.navigate(['prospectSummary']), 60000);
      },
      error => {
        console.log(error);
      }
      );
  }


  setLimited(): void {
    if (this.radio == 1) {
      this.showLimited = true;
    } else if (this.radio == 2) {
      this.showLimited = false;
    }
  }

  onChange(event): void {
    this.file = event.target.files[0];
  }

}
