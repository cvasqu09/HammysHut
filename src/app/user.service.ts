import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  public getUser(userId: string): Observable<any> {
    return this.http.get('http://localhost:3000/api/users/' + userId)
      .map((response: Response) => {
        return response;
      })
      .catch((error: Response) => {
        return Observable.throw(error.json());
      });
  }
}
