import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { User } from '../models/User';

import { UserLoginService } from '../user-login.service';

const loginAPI = 'http://localhost:4000/users/authenticate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId: String;
  password: String;
  userType: String;
  exists: number;


  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }

  authenticate(): void {
    var user = {userId: this.userId, password: this.password};
    var bodyParam = JSON.stringify(user);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 
    this.http.post(loginAPI, bodyParam, options).subscribe(data => {
      this.exists = data.json()[0].EXISTS;
      if(this.exists == 1) {
        // console.log(data.json()[0].userType);
        this.userType = data.json()[0].userType;
        console.log(this.userType);
        localStorage.setItem('currentUser', JSON.stringify(this.userId));
        localStorage.setItem('currentUserType', JSON.stringify(this.userType));
        console.log(this.userType);
        if(this.userType.toLowerCase() == "sales") {
          this.router.navigate(['prospectDetails']);
        } else {
          this.router.navigate(['smoLanding']);
        }
      } else {
        alert('Incorrect Credentials');
      }
    })
  }

}
