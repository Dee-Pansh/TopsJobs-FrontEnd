import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Resume } from './resume';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  constructor(private http:HttpClient) { }
  JobSeekerRegisteredConfirmation(applicantId:number):Observable<any>
  {
   return this.http.get('https://localhost:44333/api/Resume/JobSeekerRegisteredConfirmation?applicantId='+applicantId,{responseType: 'text'})
  }
  PostResume(resume:Resume):Observable<any>{
    return this.http.post('https://localhost:44333/api/Resume/AddResume',resume,{responseType: 'text'})
  }
  AllResumesForParticularJobId(jobId:number):Observable<Resume[]>
  {
  return this.http.get<Resume[]>('https://localhost:44333/api/Resume/ViewResumes?jobId='+jobId);
  }
  GetResumeByApplicantId(applicantId:number):Observable<Resume>
  {
    return this.http.get<Resume>('https://localhost:44333/api/Resume/GetResumeByApplicantId?applicantId='+applicantId);
  }
}
