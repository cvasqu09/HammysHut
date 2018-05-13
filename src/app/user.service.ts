import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  public getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/post/')
      .map((response: Response) => {
        return response;
      })
      .catch((error: Response) => {
        return Observable.throw(error.json());
      });
  }
}
