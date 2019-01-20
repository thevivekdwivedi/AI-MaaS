import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ProspectService } from '../prospect.service';
import { RequestOptions, Http, Headers } from "@angular/http";

import Chart from 'chart.js';

const criticalIndsUrl = 'http://localhost:4000/industryTypes/criticalInds/';
const prospectSpendUrl = 'http://localhost:4000/prospectSpend/';

export class criticalMatch {
  industry: String;
  match: number;
  noMatch: number;
  matchPercentage: number;
}

@Component({
  selector: 'app-critical-supplier-dossier',
  templateUrl: './critical-supplier-dossier.component.html',
  styleUrls: ['./critical-supplier-dossier.component.css']
})
export class CriticalSupplierDossierComponent implements OnInit {
  myChart: Chart;
  cInds: any;
  id: number = 0;
  name: String = "";
  version: String = "";
  industry: String = "";
  criticalIndustries: String[] = [];
  criticalMatch: criticalMatch = {
    industry: "",
    match: 0,
    noMatch: 0,
    matchPercentage: 0
  };
  criticalMatches: criticalMatch[] = [];
  totalCritical: number = 0;
  totalCriticalMatch: number = 0;
  matchPercentage: number = 0;

  public polarAreaChartLabels:string[] = [];
  public polarAreaChartData:number[] = [];
  public polarAreaLegend:boolean = false;
  public polarAreaOptions: {
    responsive: true
  };
  public polarAreaChartType:string = 'polarArea';

  @ViewChild('barChart') bar: ElementRef;

  constructor(private prospectService: ProspectService, private http: Http) { }

  ngOnInit() {
    this.id = this.prospectService.getId();
    this.name = this.prospectService.getName();
    this.version = this.prospectService.getVersion();
    this.industry = this.prospectService.getIndustry();
    // this.id = 1;
    // this.name = "Pepsi";
    // this.version = "Advanced"
    // this.industry = "Consumer Staples";
    if (this.version == "Advanced") {
      this.getCriticalIndustries();
    }
    // while(this.criticalIndustries.length == 0) {
    //   if(this.criticalIndustries.length > 0) {
    //     break;
    //   }
    // }
  }

  getCriticalIndustries(): void {
    var params = {ProspectInd: this.industry};
    // var params = {ProspectInd: "Consumer Staples"}; //using this for just verification purpose.
    var body = JSON.stringify(params);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    this.http.post(criticalIndsUrl, body, options)
      .subscribe(criticalInds => {
        this.criticalIndustries = criticalInds.json().Critical_Industries.split(",");
      },
      error => {
        // 
      },
      () => {
        this.getMatch();
      }
    );
  }

  getMatch(): void {
    var params = {id: this.id, industry: this.criticalIndustries};
    var body = JSON.stringify(params);
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    this.http.post(prospectSpendUrl, body, options)
    .subscribe(matcher => {
      var matches = matcher.json();
      console.log(matches);
      for(let match of matches) {
        let cMatch: criticalMatch = new criticalMatch();
          cMatch.industry = match.Capiq_Industry;
        if(match.Match_Status == "Match") {
          cMatch.match = match.Count;
        } else {
          cMatch.noMatch = match.Count;
        }
        this.criticalMatches.push(cMatch);
      }
      console.log(this.criticalMatches);
      var length = this.criticalMatches.length;
      console.log(length);
      for(var i =0; i<length/2; i++) {
        this.criticalMatches[i].noMatch = this.criticalMatches[i+length/2].noMatch;
        this.totalCritical += this.criticalMatches[i].match + this.criticalMatches[i].noMatch;
        this.totalCriticalMatch += this.criticalMatches[i].match;
        this.criticalMatches[i].matchPercentage = Math.floor(this.criticalMatches[i].match*100/(this.criticalMatches[i].match+this.criticalMatches[i].noMatch));
        this.polarAreaChartData.push(this.criticalMatches[i].matchPercentage);
        this.polarAreaChartLabels.push(this.criticalMatches[i].industry.toString());
      }
      this.polarAreaChartType = 'polarArea';
      this.polarAreaLegend = true;

      console.log(this.criticalMatches);
      this.criticalMatches.splice(length/2, length/2);
      this.matchPercentage = Math.floor(this.totalCriticalMatch/this.totalCritical*100);
      console.log(this.criticalMatches);
      console.log(this.totalCritical);
      console.log(this.totalCriticalMatch);
    });
  }


}
