import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ireporter } from 'src/app/interfaces/reporterInterface';
import { ReportersService } from 'src/app/services/reporters.service';

@Component({
  selector: 'app-update-reporter',
  templateUrl: './update-reporter.component.html',
  styleUrls: ['./update-reporter.component.css'],
})
export class UpdateReporterComponent implements OnInit {
  constructor(
    private reportersService: ReportersService,
    private router: Router
  ) {}
  invalidPassword: boolean = false;
  passwordMsg: string = '';
  invalidNumber: boolean = false;
  numberMsg: string = '';
  reporter: Ireporter = {};
  file: any;
  ngOnInit(): void {
    this.getProfile();
  }
  updateReporter(data: any) {
    console.log(data);
    this.reportersService.editReporter(data).subscribe({
      next: () => {
        this.uploadFiles();
        this.router.navigateByUrl('profile');
      },
      error: (httpError: any) => {
        if (httpError.error.errors?.password) {
          this.invalidPassword = true;
          this.passwordMsg = httpError.error.errors.password.message;
          console.log('p');
        }
        if (httpError.error.errors?.phoneNumber) {
          this.invalidNumber = true;
          this.numberMsg = httpError.error.errors.phoneNumber.message;
          console.log('n');
        }
      },
    });
  }
  getProfile() {
    this.reportersService.getProfile().subscribe({
      next: (res: any) => {
        this.reporter = res;
      },
      error: (httpError: any) => {
        console.log(httpError);
      },
    });
  }
  handleUpload(event: any) {
    this.file = event.target.files;
  }
  uploadFiles() {
    if (this.file) {
      const myData = new FormData();
      myData.append('image', this.file[0]);
      this.reportersService.addImage(myData).subscribe();
    }
  }
}
