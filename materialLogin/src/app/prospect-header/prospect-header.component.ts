import { Component, OnInit } from '@angular/core';

import { ProspectService } from '../prospect.service';

@Component({
  selector: 'app-prospect-header',
  templateUrl: './prospect-header.component.html',
  styleUrls: ['./prospect-header.component.css']
})
export class ProspectHeaderComponent implements OnInit {
  name: String = "";
  version: String = "";
  industry: String = "";
  constructor(private prospectService: ProspectService) { }

  ngOnInit() {
    // this.name = this.prospectService.getName();
    // this.version = this.prospectService.getVersion();
    // this.industry = this.prospectService.getIndustry();
    this.name = this.prospectService.getName();
    this.version = this.prospectService.getVersion();
    this.industry = this.prospectService.getIndustry();
  }

}
