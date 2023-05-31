import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IData } from 'data';

@Injectable({
  providedIn: 'root',
})
export class SerService {

  Serverurl = 'http://localhost:5100';

  constructor(public http: HttpClient) { }
  getDetails(): Observable<IData[]>{
    return this.http.get<IData[]>(this.Serverurl)
}

}
