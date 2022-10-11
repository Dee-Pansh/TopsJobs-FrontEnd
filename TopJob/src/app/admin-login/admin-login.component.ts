import { Component, DebugElement, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Admin } from '../admin';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
admins:Admin[];
adminnn:Admin;
  constructor(private router:Router) {
    this.adminnn=new Admin();
    this.admins=[
      {
        username:'Deepansh Johri',
        emailId:'deepansh@gmail.com',
        Password:'deep@123'
      },
      {
        username:'Kerelly Reddy',
        emailId:'balwanth@gmail.com',
        Password:'balwanth@123'
      },
      {
        username:'Mohammad Ali Beg Mirza',
        emailId:'abrar@gmail.com',
        Password:'abrar@123'
      },
      {
        username:'Varun Guleria',
        emailId:'varun@gmail.com',
        Password:'varun@123'
      },
    ]
   }

  

  onSubmit(data:any) {
 console.log(data)
     this.adminnn=this.admins.find(t=>t.emailId==data.Email && t.Password==data.Password)
    console.log(this.adminnn)
    if(this.adminnn!=null)
    {
    
      localStorage['admin']=this.adminnn.username
      this.router.navigateByUrl('/app-admin-dashboard')
    }
    else
    {
      alert('Invalid Credentials')
    }}
  ngOnInit(): void {
  }
  }
