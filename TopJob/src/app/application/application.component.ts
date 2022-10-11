import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applications } from '../applications';
import { ApplicationserviceService } from '../applicationservice.service';
import { PricingService } from '../pricing.service';
import { ResumeService } from '../resume.service';
import { Resume } from '../resume';
import { UpdateApplicationStatus } from '../update-application-status';
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
applications:Applications[];
resumes:Resume[];
updateApplication:UpdateApplicationStatus;
  constructor(private services:ApplicationserviceService,private subs:PricingService,private router:Router,private resumeservice:ResumeService) {
    this.updateApplication=new UpdateApplicationStatus();
   }
   status:string;
  ngOnInit(): void {
    console.log(localStorage['EmployerId'])
    this.subs.GetStatusByEmployerId(localStorage['EmployerId']).subscribe(Response=>{
      console.log(Response);
      this.status=Response;
    })
   
    // this.services.GetAppInfo(localStorage['jobbid']).subscribe(Response=>{
    //   console.log(localStorage['jobbid']);
    //   this.applications=Response;
    // })

    //Get all the resumes associated with particular job job
     this.resumeservice.AllResumesForParticularJobId(localStorage['jobbid']).subscribe(Response=>{
      this.resumes=Response;
      console.log(this.resumes);
     })
  }
  Reject(applicantId:number,jobId:number){
    this.updateApplication.applicantId=applicantId;
    this.updateApplication.jobId=jobId;
    this.updateApplication.status="Rejected";
    this.services.UpdateApplicationStatus(this.updateApplication).subscribe(Response=>{
      console.log(Response);
      alert(Response);
    })
    
  }
  Accept(applicantId:number,jobId:number){
    console.log(applicantId);
    console.log(jobId);
    this.updateApplication.applicantId=applicantId;
    this.updateApplication.jobId=jobId;
    this.updateApplication.status="Shortlisted";
    this.services.UpdateApplicationStatus(this.updateApplication).subscribe(Response=>{
      console.log(Response);
      alert(Response);
    })
  }
  NavToPricing(){
      this.router.navigateByUrl('/Pricing');
  }
  


}
