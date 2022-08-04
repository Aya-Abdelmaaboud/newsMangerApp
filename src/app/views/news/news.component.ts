import { Component, OnInit } from '@angular/core';
import { Inews } from 'src/app/interfaces/newsInterface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news: Inews[] = [];
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }
  getNews() {
    this.newsService.getNews().subscribe({
      next: (res: any) => {
        this.news = res;
      },
      error: (httpError: any) => {
        console.log(httpError);
      },
    });
  }
  deleteNews(id: any, i: number) {
    this.newsService.deleteNews(id).subscribe({
      next: () => {
        this.news.splice(i, 1);
      },
      error: (httpError: any) => {
        console.log(httpError);
      },
    });
  }
}
