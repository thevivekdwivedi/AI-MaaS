import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

const tasksAPI = 'http://localhost:4000/tasks/';

@Injectable()
export class TaskService {

  constructor(private http: Http) { }

  getTaskStatus(pid): boolean {
    var api = tasksAPI + pid;
    var bool = true;
    this.http.get(api)
      .map(task => task.json())
      .subscribe(task => {
        if (task.isDone) {
          bool = true;
        } else {
          bool = false;
        }
      })
    return
  }

}
