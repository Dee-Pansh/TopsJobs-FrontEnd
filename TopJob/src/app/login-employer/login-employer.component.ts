import { JsempdashService } from './../jsempdash.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthForEmployer } from '../auth-for-employer';
@Component({
  selector: 'app-login-employer',
  templateUrl: './login-employer.component.html',
  styleUrls: ['./login-employer.component.css']
})
export class LoginEmployerComponent implements OnInit {
 authuser:AuthForEmployer;
 errMsg:string;
  constructor(private router : Router,private service :JsempdashService) {  }
  ngOnInit(): void {  }
     onSubmit(data:any) {
      this.service.PostLoginEMP(data).subscribe(response=>{
       this.authuser=response;
       if(this.authuser!=null){
        console.log(this.authuser);
         localStorage['token']=this.authuser.token;
         if(this.authuser.role=="Employer")
         {
          localStorage['authuser']=this.authuser;
           localStorage['EmployerId']=this.authuser.userId;
           localStorage['name']=this.authuser.name;
           localStorage['PostedBy']=this.authuser.name;
           localStorage['CompanyName']=this.authuser.companyName;
           this.router.navigateByUrl('/empdash');
         }
       }
       else{
         this.errMsg='Invalid Credentials';
         alert(this.errMsg);
       }
      })
            
       
     }

}



