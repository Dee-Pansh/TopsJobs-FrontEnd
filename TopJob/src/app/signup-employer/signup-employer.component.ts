import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Employer } from '../employer';
import { EmployerSignUpService } from '../employer-sign-up.service';
@Component({
  selector: 'app-signup-employer',
  templateUrl: './signup-employer.component.html',
  styleUrls: ['./signup-employer.component.css']
})
export class SignupEmployerComponent implements OnInit {
  addsignupjobs : FormGroup;
  employer:Employer;
  constructor(private router : Router,private service:EmployerSignUpService) { }

  ngOnInit(): void { }
  onSubmit(data:any) {
    console.log(data);
    this.employer=data;
this.service.RegisterEmployer(this.employer).subscribe((Response:any)=>{
  alert(Response);
  console.log(Response);
  this.router.navigateByUrl('/loginemp');
})

}
 
}
