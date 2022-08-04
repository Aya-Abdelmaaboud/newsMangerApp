import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SignupComponent } from './views/signup/signup.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { AddNewsComponent } from './views/add-news/add-news.component';
import { NewsComponent } from './views/news/news.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { NewsService } from './services/news.service';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportersService } from './services/reporters.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { EditNewsComponent } from './views/edit-news/edit-news.component';
import { UpdateReporterComponent } from './views/update-reporter/update-reporter.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    AddNewsComponent,
    NewsComponent,
    EditNewsComponent,
    UpdateReporterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    NewsService,
    ReportersService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
