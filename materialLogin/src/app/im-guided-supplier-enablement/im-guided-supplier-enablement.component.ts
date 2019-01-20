import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

const oEnablementAPIUrl = 'http://localhost:4000/overallEnablement/';
const pListAPIUrl = 'http://localhost:4000/prospectListing/';
const sEnablementAPIUrl ='http://localhost:4000/supplierEnablement/';

export class overallEnablement {
  Supplier: String;
  SMP: number;
  Strategy: String;
  Prospects: number;
}

export class pList {
  ID: number;
  Prospect: String;
}

@Component({
  selector: 'app-im-guided-supplier-enablement',
  templateUrl: './im-guided-supplier-enablement.component.html',
  styleUrls: ['./im-guided-supplier-enablement.component.css']
})
export class ImGuidedSupplierEnablementComponent implements OnInit {
  enablements: overallEnablement[] = [];
  prospects: pList[] = [];
  plisting: String[] = [];
  prospect: String = "";
  pid: number = 0;
  usingSpecific: boolean = false;

  constructor(private http: Http) { }

  ngOnInit() {
    this.getProspectListing();
    console.log(this.plisting);
    this.getOverallEnablement();
    
  }

  getOverallEnablement(): void {
    this.http.get(oEnablementAPIUrl)
      .subscribe(data => {
        for(let e of data.json()) {
          this.enablements.push(e);
        }
      });
  }

  getProspectListing(): void {
    this.http.get(pListAPIUrl)
      .subscribe(data => {
        this.plisting.push("All");
        for(let p of data.json()) {
          this.prospects.push(p);
          this.plisting.push(p.Prospect);
        }
      });
  }

  refreshEnablement(): void {
    this.enablements = [];
    if(this.prospect == "All") {
      this.getOverallEnablement();
      this.usingSpecific = false;
    } else {
      this.usingSpecific = true;
      this.getPid();
      this.getSupplierEnablement();
    }
  }

  getSupplierEnablement(): void {
    var params = {id: this.pid};
    var body = JSON.stringify(params);
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    this.http.post(sEnablementAPIUrl, body, options)
      .subscribe(data => {
        if(data.json().length==0) {
          alert(this.prospect+" is a limited customer. Data unavailable.")
        }
        for(let e of data.json()) {
          this.enablements.push(e);
        }
      })
  }

  getPid(): void {
    for(let p of this.prospects) {
      if(p.Prospect == this.prospect) {
        this.pid = p.ID;
        break;
      }
    }
  }


}
