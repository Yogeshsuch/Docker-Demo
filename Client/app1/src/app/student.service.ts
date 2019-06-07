import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url : string = 'http://192.168.43.69:3000/student'
  constructor(private http:Http) { }

  get(){
    return this.http.get(this.url);
  }

  post(rollNo,name,mark){
    const body = {
      rollNo : rollNo,
      name : name,
      mark : mark
    }
    const headers = new Headers({'content-type':'application/json'});
    const requestOption = new RequestOptions({headers: headers });
    return this.http.post(this.url,body,requestOption)
  }

}
