import { Component, OnInit } from '@angular/core';
import { ReportersService } from 'src/app/services/reporters.service';
import { Ireporter } from 'src/app/interfaces/reporterInterface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  reporter: Ireporter = {};
  constructor(private reportersService: ReportersService) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.reportersService.getProfile().subscribe({
      next: (res: any) => {
        console.log(res);
        this.reporter = res;
      },
      error: (httpError: any) => {
        console.log(httpError);
      },
    });
  }
}
