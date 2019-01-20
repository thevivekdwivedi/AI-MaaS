import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { ProspectService } from '../prospect.service';
import { Http, RequestOptions, Headers} from "@angular/http";

const spendAPIUrl = 'http://localhost:4000/prospectSpendSummary/';
const spendUrl = 'http://localhost:4000/prospectSpend/match';

export class spendTrend {
  EnablementStrategy: String;
  Spend: number;
  PO_Count: number;
  Invoice_Count: number;
  count: number;
}

@Component({
  selector: 'app-supplier-trends',
  templateUrl: './supplier-trends.component.html',
  styleUrls: ['./supplier-trends.component.css']
})
export class SupplierTrendsComponent implements OnInit {
  important: spendTrend;
  medium: spendTrend;
  quickWin: spendTrend;
  small: spendTrend;
  id: number;
  count: number[] = [];

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Important', 'Medium', 'Quick Win', 'Small'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {
      data: [0,0,0,0], label: 'Savings'
    }
  ];

  public barChartData2:any[] = [
    {
      data: [0,0,0,0], label: 'Savings'
    }
  ];

  public lineChartData:Array<any> = [];
  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // ariba gold
      backgroundColor: 'rgba(240,171,0,0.2)',
      borderColor: 'rgba(240,171,0,1)',
      pointBackgroundColor: 'rgba(240,171,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(240,171,0,1)'
    },
    { // sap blue
      backgroundColor: 'rgba(111,160,237,0.2)',
      borderColor: 'rgba(111,160,237,1)',
      pointBackgroundColor: 'rgba(111,160,237,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(111,160,2377,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor(private prospectService: ProspectService, private http: Http) { }

  ngOnInit() {
    this.id = this.prospectService.getId();
    // this.id = 1;
    this.getSpend();
    this.getCounts();
    console.log(this.count);

  }

  getCounts() {
    var params = {id: this.id};
    var body = JSON.stringify(params);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    this.http.post(spendUrl, body, options)
      .subscribe(data => {
        for(let a of data.json()) {
          this.count.push(a.count);
        }
      })
  }

  getSpend() {
    var params = {id: this.id};
    var body = JSON.stringify(params);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    this.http.post(spendAPIUrl, body, options)
      .subscribe(spends => {
        this.important = spends.json()[0];
        this.medium = spends.json()[1];
        this.quickWin = spends.json()[2];
        this.small = spends.json()[3];
        this.lineChartLabels = ['Important', 'Medium', 'Quick Win', 'Small'];
        this.lineChartData  = [
          {data: [this.important.PO_Count/1000, this.medium.PO_Count/1000, this.quickWin.PO_Count/1000, this.small.PO_Count/1000], label: 'PO Count (K)'},
          {data: [this.important.Invoice_Count/1000, this.medium.Invoice_Count/1000, this.quickWin.Invoice_Count/1000, this.small.Invoice_Count/1000], label: 'Invoice Count (K)'}
        ];
        this.barChartData = [
                              {data: [this.important.Spend/1000000, this.medium.Spend/1000000, this.quickWin.Spend/1000000, this.small.Spend/1000000], label: 'Spend in Millions (USD)'}
                            ];
      });
  }

}
