import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  url: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  addNews(data: any) {
    return this.http.post(this.url + 'addNew', data);
  }
  getNews() {
    return this.http.get(this.url + 'news');
  }
  deleteNews(id: any) {
    return this.http.delete(this.url + 'deleteNew/' + id);
  }
  getNewsById(id: any) {
    return this.http.get(this.url + 'news/' + id);
  }
  editNews(id: any, data: any) {
    return this.http.patch(this.url + 'updateNew/' + id, data);
  }
  addImage(id: any, image: any) {
    return this.http.post(this.url + 'newPicture/' + id, image);
  }
}
