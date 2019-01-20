import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

const typesAPI = 'localhost:4000/industryTypes/allTypes';

@Injectable()
export class IndustryTypeService {
  types: String[];

  constructor(private http: Http) { }

  getAllIndutryTypes(): void {
    this.http.get(typesAPI)
      .map(types => types.json())
      .subscribe(type => this.types.concat(type));
    console.log(this.types);
  }

}
