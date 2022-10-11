import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import {Router } from '@angular/router';
@Component({
  selector: 'app-signup-jobseeker',
  templateUrl: './signup-jobseeker.component.html',
  styleUrls: ['./signup-jobseeker.component.css']
})
export class SignupJobseekerComponent implements OnInit {
  IsSubmitted:boolean=false;
  
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    
  }
  onSubmit(data:any) {
    this.IsSubmitted=true;
    this.http.post('https://localhost:44386/api/Details/RegisterForJobSeeker',data,{responseType: 'text'})
    .subscribe((result)=>{
      console.log(result);
      alert("Registered Successfully");
      this.router.navigateByUrl('/loginjs');
    })
   
         }

}
