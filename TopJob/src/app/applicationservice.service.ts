import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Applications } from './applications';
import { UpdateApplicationStatus } from './update-application-status';
@Injectable({
  providedIn: 'root'
})
export class ApplicationserviceService {
  constructor(private http:HttpClient) { }
  PostJobsApplied(data:any):Observable<any>{
    return this.http.post('https://localhost:44346/api/Application/PostApplication',data,{responseType: 'text'});
  }
   GetAppInfo(id:number):Observable<Applications[]>{
    return this.http.get<Applications[]>('https://localhost:44346/api/Application/ViewAllApplicationsByJobId?jobid='+id);
   }
   IsGivenJobIdExist(jobId:number):Observable<any>
   {
    return this.http.get('https://localhost:44346/api/Application/IsGivenJobIdExist?id='+jobId,{responseType: 'text'})
   }
   UpdateApplicationStatus(updateApplication:UpdateApplicationStatus):Observable<any>
   {
    return this.http.put('https://localhost:44346/api/Application/UpdateApplicationStatus',updateApplication,{responseType: 'text'})
   }
   GetApplicationsInfoForParticularJobSeeker(applicantId:number):Observable<Applications[]>
   {
    return this.http.get<Applications[]>('https://localhost:44346/api/Application/GetApplicationsInfoForParticularJobSeeker?applicantId='+applicantId)
   }     
   CountNoOFApplicantsForParticularJobId(jobId:number):Observable<any>
   {
    return this.http.get('https://localhost:44346/api/Application/CountNoOFApplicantsForParticularJobId?jobId='+jobId,{responseType: 'text'});
   }
}