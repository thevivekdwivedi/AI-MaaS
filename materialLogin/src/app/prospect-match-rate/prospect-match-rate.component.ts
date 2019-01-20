import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

const oEnablementAPIUrl = 'http://localhost:4000/overallEnablement/';
const pListAPIUrl = 'http://localhost:4000/prospectListing/';
const pMatchAPIUrl = 'http://localhost:4000/unmatchedSuppliers/smo';
const sMatchAPIUrl = 'http://localhost:4000/supplierMatch/';

export class proMatch {
  Prospect_ID: number;
  tSpend: number = 0;
  tPO: number = 0;
  tInvoice: number = 0;
  Month: String = "";
  Year: number = 0;
  ySpend: number = 0;
  yPO: number = 0;
  yInvoice: number = 0;
  count: number = 0;
  yCount: number = 0;
}

export class sMatchList {
  Supplier: String;
  Match_Current_Status: String;
}

export class pList {
  ID: number;
  Prospect: String;
}

@Component({
  selector: 'app-prospect-match-rate',
  templateUrl: './prospect-match-rate.component.html',
  styleUrls: ['./prospect-match-rate.component.css']
})
export class ProspectMatchRateComponent implements OnInit {
  prospects: pList[] = [];
  plisting: String[] = [];
  supplierList: sMatchList[] = [];

  prospect: String = "";
  pid: number;
  matchDetails: proMatch;
  showPanel: boolean = false;
  poI: number = 0;
  invoiceI: number = 0;
  spendI: number = 0;
  countI: number = 0;

  showTable: boolean;

  // Pie
  public pieChartLabels:string[] = ['Covered', 'Out of Coverage'];
  public pieChartData:number[] = [300, 500];
  public supplierCoverageData:number[] = [10,10];
  public spendCoverageData:number[] = [10,10];
  public poCoverageData:number[] = [10,10];
  public invoiceCoverageData:number[] = [10,10];
  public pieChartType:string = 'pie';

  constructor(private http: Http) { }

  ngOnInit() {
    this.matchDetails = new proMatch();
    this.showTable = false;
    this.getProspectListing();
  }

  getProspectListing(): void {
    this.plisting.push("Select Prospect");
    this.http.get(pListAPIUrl)
      .subscribe(data => {
        for(let p of data.json()) {
          this.prospects.push(p);
          this.plisting.push(p.Prospect);
        }
      });
  }

  reset(): void {
    this.matchDetails = new proMatch();
  }
  
  getProspectMatch(): void {
    this.reset();
    var params = {id: this.pid};
    var body = JSON.stringify(params);
    console.log("body"+body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    this.http.post(pMatchAPIUrl, body, options)
      .subscribe(data => {
        if(data.json().length==0) {
          this.showPanel =false;
          this.showTable = false;
          alert(this.prospect+" is a limited customer. Data unavailable.")
        }
        for(let a of data.json()) {
          this.matchDetails.count += a.Count;
          this.matchDetails.tInvoice += parseInt(a.Invoice);
          this.matchDetails.tPO += parseInt(a.PO);
          this.matchDetails.tSpend += a.Spend;
          this.matchDetails.Month = a.Month;
          this.matchDetails.Year = a.Year;
          if(a.Matched == "Y") {
            this.matchDetails.yCount += a.Count;
            this.matchDetails.yInvoice += parseInt(a.Invoice);
            this.matchDetails.yPO += parseInt(a.PO);
            this.matchDetails.ySpend += a.Spend;
          }
        }
        console.log(this.matchDetails);
        this.poI = Math.floor(this.matchDetails.yPO*100/this.matchDetails.tPO);
        this.poCoverageData = [this.poI, 100 - this.poI];
        this.spendI = Math.floor(this.matchDetails.ySpend*100/this.matchDetails.tSpend);
        this.spendCoverageData = [this.spendI, 100 - this.spendI];
        console.log(this.spendI);
        this.invoiceI = Math.floor(this.matchDetails.yInvoice*100/this.matchDetails.tInvoice);
        this.invoiceCoverageData = [this.invoiceI, 100 - this.invoiceI];
        console.log(this.invoiceI);
        this.countI = Math.floor(this.matchDetails.yCount*100/this.matchDetails.count);
        this.supplierCoverageData = [this.countI, 100 - this.countI];
        console.log(this.countI);
      })
  }

  getPOImprovement(): number {
    return Math.floor(this.matchDetails.yPO*100/this.matchDetails.tPO);
  }

  getPid(): void {
    for(let p of this.prospects) {
      if(p.Prospect == this.prospect) {
        this.pid = p.ID;
        console.log(this.pid);
        break;
      }
    }
  }

  getAllProspectMatch(): void {
    this.supplierList = [];
    var params = {id: this.pid};
    var body = JSON.stringify(params);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    this.http.post(sMatchAPIUrl, body, options)
      .subscribe(data => {
        for(let d of data.json()) {
          this.supplierList.push(d);
        }
      })
  }

  refreshEnablement(): void {
    this.supplierList = [];
    if(this.prospect == "Select Prospect") {
      this.showTable = false;
      this.showPanel = false;
    } else {
      this.getPid();
      this.getProspectMatch();
      this.getAllProspectMatch();
      this.showTable =true;
    }
  }
  
}
