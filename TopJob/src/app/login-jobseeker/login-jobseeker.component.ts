
import { JsempdashService } from './../jsempdash.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthForJobSeeker } from '../auth-for-job-seeker';
@Component({
  selector: 'app-login-jobseeker',
  templateUrl: './login-jobseeker.component.html',
  styleUrls: ['./login-jobseeker.component.css']
})
export class LoginJobseekerComponent implements OnInit {
 authuser:AuthForJobSeeker;
 errMsg:String;
  constructor(private router:Router,private service :JsempdashService) { }

  ngOnInit(): void {  }
  onSubmit(data:any) {
    
   this.service.PostLoginJS(data).subscribe(response=>{
    this.authuser=response;
    if(this.authuser!=null){
      localStorage['token']=this.authuser.token;
      if(this.authuser.role=="JobSeeker")
      {
        localStorage['userIdOfJobSeeker']=this.authuser.userId;
        localStorage['nameOfJobSeeker']=this.authuser.name;
        localStorage['emailAddressOfJobSeeker']=this.authuser.emailAddress;
        localStorage['PhoneNumberOfJobSeeker']=this.authuser.phoneNumber;
        console.log(localStorage['emailAddress'])
        this.router.navigateByUrl('/jsdash');
      }
    }
    else{
      this.errMsg='Invalid Credentials';
      alert(this.errMsg);
    }
   })
         
    
  }
     }

   //  let email=this.loginForm.controls["email"].value;
   //  let password=this.loginForm.controls["password"].value;
   //  this.userServie.login(email,password).subscribe((data:any)=>{
    //     if(data.responseCode ==1)
   //      {
   //     localStorage.setItem("userInfo",JSON.stringify(data.dateSet));
   //     this.router.navigate(["/user-management"]);
   //      }
   //   console.log("response",data);
   //  },error=>{
   //    console.log("error",error)
   //  })