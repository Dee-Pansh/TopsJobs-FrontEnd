import { ApplicationComponent } from './application/application.component';
import { SearchComponent } from './search/search.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { LoginJobseekerComponent } from './login-jobseeker/login-jobseeker.component';
import { LoginEmployerComponent } from './login-employer/login-employer.component';
import { SignupEmployerComponent } from './signup-employer/signup-employer.component';
import { SignupJobseekerComponent } from './signup-jobseeker/signup-jobseeker.component';
import { EmpdashComponent } from './empdash/empdash.component';
import { JsdashComponent } from './jsdash/jsdash.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { PricingComponent } from './pricing/pricing.component';
import { ResumeComponent } from './resume/resume.component';
import { ViewAppliedJobsAndTheirStatusComponent } from './view-applied-jobs-and-their-status/view-applied-jobs-and-their-status.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
const routes: Routes = [
  {path:'home',component:HomeComponent  },
  {path:'jsdash',component:JsdashComponent  },
  {path:'empdash',component:EmpdashComponent},
  {path:'signup',component:SignupJobseekerComponent},
  {path:'signupemp',component:SignupEmployerComponent},
  {path:'loginemp',component:LoginEmployerComponent},
  {path:'loginjs',component:LoginJobseekerComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'tc',component:TermsAndConditionsComponent},
  {path:'search',component:SearchComponent},
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'app-application',component:ApplicationComponent},
  {path:'Pricing',component:PricingComponent},
  {path:'app-resume',component:ResumeComponent},
  {path:'app-view-applied-jobs-and-their-status',component:ViewAppliedJobsAndTheirStatusComponent},
  {path:'app-admin-dashboard',component:AdminDashboardComponent},
  {path:'app-admin-login',component:AdminLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
