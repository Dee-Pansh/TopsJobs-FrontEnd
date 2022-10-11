import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationserviceService } from '../applicationservice.service';
import { Router } from '@angular/router';
import { ResumeService } from '../resume.service';
import { Resume } from '../resume';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  successMessage:string =""
resume:Resume;
  regForm!:FormGroup

  constructor(private fb: FormBuilder,private appservice:ApplicationserviceService,private router:Router,private res:ResumeService) {
    this.resume=new Resume();
   }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      skills:['',Validators.required],
      majorProject:['',Validators.required],
      experience:['',Validators.required],
      achievements:['',Validators.required]
    })
  }
  Move(){
    this.router.navigateByUrl('/jsdash')
  }
  register(regForm:any){
    console.log(regForm)
    this.resume.name=localStorage['nameOfJobSeeker'];
    this.resume.achievements=regForm.value['achievements'];
    this.resume.applicantId=localStorage['userIdOfJobSeeker']
    this.resume.experience=regForm.value['experience'];
    this.resume.jobId=localStorage['JOBidFromJsDash'];
    this.resume.majorProject=regForm.value['majorProject'];
    this.resume.skills=regForm.value['skills'];
    console.log(this.resume)
    this.res.PostResume(this.resume).subscribe(Response=>{
      console.log(Response);
    })
    this.successMessage = `Thank You For Showing Your Interest . We are sending your resume to Employer. Shortly You will be updated about your application status.`
    this.appservice.PostJobsApplied({resume:localStorage['emailAddressOfJobSeeker'],applicantId:localStorage['userIdOfJobSeeker'],applicationStatus:"in-progress",jobId:localStorage['JOBidFromJsDash'],status:"Applied"}).subscribe(Response=>{
  console.log(Response);
   alert(this.successMessage)
    })
  }

}