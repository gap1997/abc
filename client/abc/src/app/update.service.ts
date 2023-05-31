import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  updateURL = 'http://localhost:5100/api/users';

  constructor(private http: HttpClient) {}

  updateUser(userId: string, updateData: any): Observable<any> {
    const updateURL = `${this.updateURL}/${userId}`;
    return this.http.put<any>(updateURL, updateData);
  }
}
