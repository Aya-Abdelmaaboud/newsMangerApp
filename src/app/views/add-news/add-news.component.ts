import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],
})
export class AddNewsComponent implements OnInit {
  constructor(private newsServices: NewsService, private router: Router) {}

  ngOnInit(): void {}
  addNews(data: any) {
    this.newsServices.addNews(data).subscribe({
      next: () => {
        this.router.navigateByUrl('news');
      },
      error: (httpError) => {
        console.log(httpError);
      },
    });
  }
}
