import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

const criticalIndsUrl = 'http://localhost:4000/industryTypes/criticalInds/';
const pListAPIUrl = 'http://localhost:4000/prospectListing/';

export class pList {
  ID: number;
  Prospect: String;
}

@Injectable()
export class ProspectService {
  id: number;
  name: String;
  Version: String;
  Industry: String;
  CriticalIndustries: String[] = [];
  cInds: any;
  prospects: pList[] = [];

  constructor(private http: Http) { }

  setId(id: number): void {
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  setName(name: String): void {
    this.name = name;
  }

  getName(): String {
    return this.name;
  }

  setVersion(version: String): void {
    this.Version = version;
  }

  getVersion(): String {
    return this.Version;
  }

  setIndustry(type: String): void {
    this.Industry = type;
  }

  getIndustry(): String {
    return this.Industry;
  }

  getCriticalIndustries(): void {
    // var params = {ProspectInd: this.Industry};
    var params = {ProspectInd: "Consumer Staples"};
    var body = JSON.stringify(params);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    this.http.post(criticalIndsUrl, body, options)
      .subscribe(criticalInds => {
        this.cInds = criticalInds.json();
        console.log(this.cInds);
      });
  }

  getProspectListing(): void {
    this.http.get(pListAPIUrl)
      .subscribe(data => {
        for(let p of data.json()) {
          this.prospects.push(p);
          console.log(this.prospects);
        }
        this.getPid();
      });
  }

  getPid(): void {
    // this.getProspectListing();
    for(let p of this.prospects) {
      console.log(p);
      console.log(this.name);
      if(p.Prospect == this.name) {
        this.id = p.ID;
        console.log(this.id);
        break;
      }
    }
  }

}
