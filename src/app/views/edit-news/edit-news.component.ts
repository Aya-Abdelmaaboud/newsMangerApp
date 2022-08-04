import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inews } from 'src/app/interfaces/newsInterface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css'],
})
export class EditNewsComponent implements OnInit {
  news: Inews = {};
  id: string = this.route.snapshot.params['id'];
  file: any;
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getSingleNew();
  }
  getSingleNew() {
    this.newsService.getNewsById(this.id).subscribe({
      next: (res: any) => {
        this.news = res;
      },
      error: (httpError: any) => {
        console.log(httpError);
      },
    });
  }
  editNews(data: any) {
    console.log(data);
    this.newsService.editNews(this.id, data).subscribe({
      next: () => {
        this.uploadFile();
        this.router.navigateByUrl('news');
      },
      error: (httpError: any) => {
        console.log(httpError);
      },
    });
  }
  handleUpload(event: any) {
    this.file = event.target.files;
  }
  uploadFile() {
    if (this.file) {
      const myData = new FormData();
      myData.append('image', this.file[0]);
      this.newsService.addImage(this.id, myData).subscribe();
    }
  }
}
