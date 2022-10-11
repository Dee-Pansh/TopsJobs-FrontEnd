import { Component, OnInit } from '@angular/core';
import { PricingService } from '../pricing.service';
import { Pricing } from '../pricing';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
    pricing:Pricing;

  constructor(private subs:PricingService,private route:Router) {
    this.pricing = new Pricing();
   }
  
    WhichPlan(data:string)
    {
      this.pricing.Plan=data;
      this.pricing.Status="Paid";
      this.pricing.EmployerId=localStorage['EmployerId'];
      console.log(this.pricing);
      this.subs.PostMemberShip(this.pricing).subscribe(Response=>{
        console.log(Response);
        alert(Response);
        this.route.navigateByUrl('/app-application')
      })
    }
  ngOnInit(): void {
     
  }
  myimage:string="/assets/images/a.jpg";
}
