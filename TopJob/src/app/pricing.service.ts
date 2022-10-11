import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pricing } from './pricing';
@Injectable({
  providedIn: 'root'
})
export class PricingService {

pricing:Pricing;
  // GetJobs():Observable<Job_Elements[]>{
  //   return this.http.get<Job_Elements[]>(this.baseurl);
  //   }

  constructor(private http:HttpClient) { }
  GetStatusByEmployerId(id:number):Observable<any>{
   return this.http.get('https://localhost:44338/api/Membership/GetMembershipStatusByEmployerId?EmpId='+id,{responseType: 'text'});
  }
  PostMemberShip(pricing:Pricing):Observable<any>{
    return this.http.post('https://localhost:44338/api/Membership/AddSubscription',pricing,{responseType: 'text'});
  }
}
