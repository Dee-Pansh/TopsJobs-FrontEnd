import { AuthForEmployer } from './auth-for-employer';
import { AuthForJobSeeker } from './auth-for-job-seeker';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job_Elements } from './JSEMPR';
@Injectable({
  providedIn: 'root'
})
export class JsempdashService {
 
  constructor(private http : HttpClient) { }
  baseurl='https://localhost:44312/api/JobServices/GetAllJob';
  baseurl2='https://localhost:44312/api/JobServices/AddJob';

  GetJobs():Observable<Job_Elements[]>{
  return this.http.get<Job_Elements[]>(this.baseurl);
  }
  GetJobsByEmployerId(employerId:number):Observable<Job_Elements[]>{
    return this.http.get<Job_Elements[]>('https://localhost:44312/api/JobServices/GetJobsByEmployerId?EmployerId='+employerId);
    }
  PostLoginJS(data:any):Observable<AuthForJobSeeker>{
    return this.http.post<AuthForJobSeeker>('https://localhost:44386/api/Details/LoginJobSeeker',data);
  }
  PostLoginEMP(data:any):Observable<AuthForEmployer>{
    return this.http.post<AuthForEmployer>('https://localhost:44386/api/Details/LoginEmployer',data);
  }
}
