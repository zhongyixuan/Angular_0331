import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Http, RequestOptions, Headers } from "@angular/http";

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  getData() {
    return this._http.get("https://angular-c8184.firebaseio.com/school.json").map(res => res.json());
  }
  postData() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post("https://angular-c8184.firebaseio.com/school.json", { "id": "aaa" }, options).map(res => res.json());
  }

}
