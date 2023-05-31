import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:5100/api/users';
  backendURL = 'http://localhost:5100/api/users';
  constructor(private http: HttpClient) { }

  submitUserData(userData: any) {
    console.log(userData)

    return this.http.post(this.apiUrl, userData)
  }

  deleteUser(userId: string): Observable<any> {
    const deleteURl = '${backendURL}/${userId}';
    return this.http.delete<any>(deleteURl)
  }
}
