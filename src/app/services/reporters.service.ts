import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReportersService {
  url: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  getProfile() {
    return this.http.get(this.url + 'profile');
  }
  editReporter(data: any) {
    return this.http.patch(this.url + 'updateReporter', data);
  }
  addImage(image: any) {
    return this.http.post(this.url + 'profilePicture', image);
  }
}
