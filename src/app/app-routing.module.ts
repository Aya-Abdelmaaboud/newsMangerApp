import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AddNewsComponent } from './views/add-news/add-news.component';
import { EditNewsComponent } from './views/edit-news/edit-news.component';
import { LoginComponent } from './views/login/login.component';
import { NewsComponent } from './views/news/news.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignupComponent } from './views/signup/signup.component';
import { UpdateReporterComponent } from './views/update-reporter/update-reporter.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'addNews',
    component: AddNewsComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'news', component: NewsComponent, canActivate: [AuthGuardService] },
  {
    path: 'editNews/:id',
    component: EditNewsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'updateReporter',
    component: UpdateReporterComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
