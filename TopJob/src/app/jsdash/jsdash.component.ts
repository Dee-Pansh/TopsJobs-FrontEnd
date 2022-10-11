import { Component, OnInit } from '@angular/core';
import { Job_Elements } from '../JSEMPR';
import { JsempdashService } from '../jsempdash.service';
import { ApplicationserviceService } from '../applicationservice.service';
import { Router } from '@angular/router';
import { ResumeService } from '../resume.service';
import { Resume } from '../resume';
@Component({
  selector: 'app-jsdash',
  templateUrl: './jsdash.component.html',
  styleUrls: ['./jsdash.component.css']
})
export class JsdashComponent implements OnInit  {
resume:Resume;
name:string=localStorage['nameOfJobSeeker'];
jobs:Job_Elements[];
constructor(private jsemp:JsempdashService,private application:ApplicationserviceService,private resumeserivce:ResumeService,private router:Router){
  this.resume=new Resume();
}

// NavToResumesPage()
// {
//   this.router.navigateByUrl('/')
// }

apply(input:number)
{ localStorage['JOBidFromJsDash']=input

  this.router.navigateByUrl('/app-resume');

}
Logout()
  {
this.router.navigateByUrl('/signup');
  }

ngOnInit(): void {
  this.jsemp.GetJobs()
.subscribe(Response => {	
console.log(Response)
this.jobs=Response;

});


}


}
