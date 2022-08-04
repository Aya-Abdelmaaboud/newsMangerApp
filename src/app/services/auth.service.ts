import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  signup(data: any) {
    return this.http.post(this.url + 'signup', data);
  }
  login(data: any) {
    return this.http.post(this.url + 'login', data);
  }
  logout() {
    return this.http.delete(this.url + 'logout');
  }
}
