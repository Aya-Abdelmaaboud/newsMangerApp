import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ireporter } from 'src/app/interfaces/reporterInterface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  invalidAge: boolean = false;
  invalidEmail: boolean = false;
  invalidPassword: boolean = false;
  invalidNumber: boolean = false;
  ageMsg: string = '';
  passwordMsg: string = '';
  numberMsg: string = '';
  uniqueNumber:boolean=false
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  signUp(reporterData: Ireporter) {
    this.authService.signup(reporterData).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('profile');
      },
      error: (httpError: any) => {
        console.log(httpError);
        if (httpError.error.errors?.age) {
          this.invalidAge = true;
          this.ageMsg = httpError.error.errors.age.message;
        }
        if (httpError.error?.keyPattern.email) {
          this.invalidEmail = true;
        }
        if (httpError.error.errors?.password) {
          this.invalidPassword = true;
          this.passwordMsg = httpError.error.errors.password.message;
        }
        if (httpError.error?.keyPattern.phoneNumber) {
          this.uniqueNumber = true;
        }
        if (httpError.error.errors?.phoneNumber) {
          this.invalidNumber = true;
          this.numberMsg = httpError.error.errors.phoneNumber.message;
        }
      },
    });
  }
}
