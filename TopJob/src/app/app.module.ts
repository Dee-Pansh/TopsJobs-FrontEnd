import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginJobseekerComponent } from './login-jobseeker/login-jobseeker.component';
import { LoginEmployerComponent } from './login-employer/login-employer.component';
import { SignupJobseekerComponent } from './signup-jobseeker/signup-jobseeker.component';
import { SignupEmployerComponent } from './signup-employer/signup-employer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { EmpdashComponent } from './empdash/empdash.component';
import { JsdashComponent } from './jsdash/jsdash.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { SearchComponent } from './search/search.component';
import { ApplicationComponent } from './application/application.component';
import { PricingComponent } from './pricing/pricing.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { ResumeComponent } from './resume/resume.component';
import { ViewAppliedJobsAndTheirStatusComponent } from './view-applied-jobs-and-their-status/view-applied-jobs-and-their-status.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewAndUpdateResumeComponent } from './view-and-update-resume/view-and-update-resume.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginJobseekerComponent,
    LoginEmployerComponent,
    SignupJobseekerComponent,
    SignupEmployerComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    EmpdashComponent,
    JsdashComponent,
    AboutUsComponent,
    TermsAndConditionsComponent,
    SearchComponent,
    ApplicationComponent,
    PricingComponent,
    ResumeComponent,
    ViewAppliedJobsAndTheirStatusComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    ViewAndUpdateResumeComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
