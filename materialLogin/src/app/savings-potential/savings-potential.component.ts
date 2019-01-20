import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { ProspectService } from '../prospect.service';
import { RequestOptions, Http, Headers } from "@angular/http/";

const savingsUrl = "http://localhost:4000/prospectSavingsAggregate/";

const criticalIndsUrl = 'http://localhost:4000/industryTypes/criticalInds/';
const prospectSpendUrl = 'http://localhost:4000/prospectSpend/getMatch/';



@Component({
  selector: 'app-savings-potential',
  templateUrl: './savings-potential.component.html',
  styleUrls: ['./savings-potential.component.css']
})
export class SavingsPotentialComponent implements OnInit {
  Supplier_Compliance_Savings: number = 0;
  Invoice_Error_Reductions_Savings: number = 0;
  PO_Requisition_Transmission_Savings: number = 0;
  Invoice_Receipt_Processing_Savings: number = 0;
  id: number = 0;
  matchPercentage: number;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Supplier Complinace', 'Invoice Error Reduction', 'PO Processing', 'Invoice Receipt'];
  public barChartType:string = 'horizontalBar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {
      data: [0,0,0,0], label: 'Savings'
    }
  ];


  constructor(private prospectService: ProspectService, private http: Http) { }

  ngOnInit() {
    this.id = this.prospectService.getId();
    console.log(this.id);
    this.getSavings();
  }

  getMatchPercentage(): void {
    var params = {id: this.id};
    var body = JSON.stringify(params);
    console.log("mathc % :" + body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    this.http.post(prospectSpendUrl, body, options)
      .subscribe(match => {
        console.log(match.json());
        this.matchPercentage = Math.floor(match.json()[0].count*100/(match.json()[0].count +match.json()[1].count));
      });
  };

  getSavings(): void {
    var params = {id: this.id};
    var body = JSON.stringify(params);
    console.log(body)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    this.http.post(savingsUrl, body, options)
      .subscribe(savings => {
        var actSavings = savings.json()[0];
        this.Supplier_Compliance_Savings = actSavings.Supplier_Compliance_Savings;
        console.log(this.Supplier_Compliance_Savings);
        this.Invoice_Error_Reductions_Savings = actSavings.Invoice_Error_Reductions_Savings;
        console.log(this.Invoice_Error_Reductions_Savings);
        this.PO_Requisition_Transmission_Savings = actSavings.PO_Requisition_Transmission_Savings;
        console.log(this.PO_Requisition_Transmission_Savings);
        this.Invoice_Receipt_Processing_Savings = actSavings.Invoice_Receipt_Processing_Savings;
        console.log(this.Invoice_Receipt_Processing_Savings);
        this.barChartData = [
                              {data: [this.Supplier_Compliance_Savings/1000000, this.Invoice_Error_Reductions_Savings/1000000, this.PO_Requisition_Transmission_Savings/1000000, this.Invoice_Receipt_Processing_Savings/1000000], label: 'Savings in Millions (USD)'}
                            ];
      },
                        error => {

                        },
                      () => {
                        this.getMatchPercentage();
                      })
  }


}
