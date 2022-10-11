import { ApplicationComponent } from './../application/application.component';
//import { Job_Elements } from './../JSEMPR';
/*import { Component, OnInit } from '@angular/core';
import { Job_Elements } from '../JSEMPR';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
input:string
  jobs: Job_Elements[] = [];

  constructor(private http: HttpClient) {
  }
  clic(term:any)
  {
   
   console.log(term);
    this.http.get<Job_Elements[]>('https://localhost:44312/api/JobServices/GetJobsByCategory?category='+term).subscribe(res=>{
      console.log(res);
      this.jobs=res;
     }); 
  }
    
  ngOnInit(): void {
  //  this.http.get<Job_Elements[]>('https://localhost:44312/api/JobServices/GetAllJob')
   // .subscribe((data: Job_Elements[]) => {
    //  this.jobs = data;
   // });
      }
  //    onSubmit(data:string){
        
    //   
   
 //  }    

}*/
import { Component, OnInit } from '@angular/core';
import { Job_Elements } from '../JSEMPR';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../search.service';
import { ResumeService } from '../resume.service';
import { Router } from '@angular/router';
import { ApplicationserviceService } from '../applicationservice.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 input:string;
 //job:Job;
 Jobs:Job_Elements[];
  constructor(private service:SearchService,private resumeserivce: ResumeService,private router : Router,private application: ApplicationserviceService) { }
    

	// this.jsemp.GetJobs()
	// .subscribe(Response => {	
	// console.log(Response)
	// this.jobs=Response;
	// });


  ngOnInit(): void {
      
      
      }
OnSubmit(data:string){
  console.log(data)
     this.service.GetJobsByCategory(data).subscribe(Response=>{
      console.log(Response);
       this.Jobs=Response;
     })

      }
      apply(input:number)
{ localStorage['JOBidFromJsDash']=input
// this.application.PostJobsApplied({resume:localStorage['emailAddress'],applicantId:localStorage['userId'],applicationStatus:"in-progress",jobId:localStorage['id'],status:"Applied"}).subscribe(Response=>{
//   console.log(Response);
// })

this.resumeserivce.JobSeekerRegisteredConfirmation(localStorage['userIdOfJobSeeker']).subscribe(Response=>{
  if(Response=="true")
  {
    this.application.PostJobsApplied({resume:localStorage['emailAddressOfJobSeeker'],applicantId:localStorage['userIdOfJobSeeker'],applicationStatus:"in-progress",jobId:localStorage['JOBidFromJsDash'],status:"Applied"}).subscribe(Response=>{
  console.log(Response);
  alert('Applied Successfully on jobId= '+ localStorage['JOBidFromJsDash']);
})
  }
  else{
  this.router.navigateByUrl('/app-resume');
  }

})

}
   
}      
