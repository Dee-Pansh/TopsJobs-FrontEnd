import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Job_Elements } from '../JSEMPR';
import {JsempdashService} from './../jsempdash.service'
import { JobPosting } from '../job-posting';
import { ApplicationserviceService } from '../applicationservice.service';
@Component({
  selector: 'app-empdash',
  templateUrl: './empdash.component.html',
  styleUrls: ['./empdash.component.css']
})
export class EmpdashComponent implements OnInit {
jobs:Job_Elements[]
job:Job_Elements;
jobPosting:JobPosting;
viewss:string;
name=localStorage['name'];
  constructor(private jsemp:JsempdashService,private http:HttpClient,private Router:Router,private appserv:ApplicationserviceService) { 
   this.job=new Job_Elements();
    this.jobPosting=new JobPosting();
  }
  ngOnInit(): void { 
    console.log(localStorage['CompanyName']);
    
    this.jsemp.GetJobsByEmployerId(localStorage['EmployerId'])
    .subscribe(Response => {	
    console.log(Response)
    this.jobs=Response;
     
    });
   }
       onSubmit(data:any) {
        this.jobPosting.postedBy=localStorage['PostedBy'];
        this.jobPosting.companyName=localStorage['CompanyName'];
        this.jobPosting.employerId=localStorage['EmployerId'];
        this.jobPosting.jobCategory=data.jobCategory;
        this.jobPosting.jobDescription=data.jobDescription;
        this.jobPosting.lastDateToApply=data.lastDateToApply;
        this.jobPosting.noOfVacancies=data.noOfVacancies;
        console.log(this.jobPosting);
        console.log("krdi")
   this.http.post('https://localhost:44312/api/JobServices/AddJob',this.jobPosting)
   .subscribe((result)=>{
    console.log(result)
   })
     window.location.reload();
     alert('job added successfully')
   }
    
        deleteJob(idata:number){
    this.http.delete('https://localhost:44312/api/JobServices/DeleteJob?j='+idata).subscribe((result)=>
    {console.log(result);
        })
        alert("Deleted Successfully");
       window.location.reload();
}
Logout()
{
this.Router.navigateByUrl('/loginemp');
  }
ViewApps(id:number)
{
  localStorage['jobbid']=id;
  console.log(localStorage['jobbid'])
  this.appserv.IsGivenJobIdExist(localStorage['jobbid']).subscribe(Response=>{
    console.log(Response)
    if(Response=="true")
    {
      this.Router.navigateByUrl('/app-application')
    }
    else
    {
      alert('Sorry No One Has Applied For The Given Job');
    }
})
}
}