import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DeleteService {
  backendURL = 'http://localhost:5100/api/users';
  constructor(private http: HttpClient) { }

  deleteUser(userId: string): Observable<any>{
    const deleteURl = `${this.backendURL}/${userId}`;
    return this.http.delete<any>(deleteURl)
  }
}
