import { Component, OnInit } from '@angular/core';
import { Job_Elements } from '../JSEMPR';
import { HttpClient } from '@angular/common/http';
import { JsempdashService } from '../jsempdash.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
jobs:Job_Elements[];
admin=localStorage['admin']
  constructor(private http:HttpClient,private jsemp:JsempdashService,private router:Router) { }
   
  ngOnInit(): void {
    this.jsemp.GetJobs()
    .subscribe(Response => {	
    console.log(Response)
    this.jobs=Response;
    
  })}

  Delete(jobId:number)
  {
    this.http.delete('https://localhost:44312/api/JobServices/DeleteJob?j='+jobId).subscribe((result)=>
    {console.log(result);
        })
       window.location.reload();
  }
  Logout()
  {
    localStorage.clear()
this.router.navigateByUrl('/app-admin-login');
  }
}
