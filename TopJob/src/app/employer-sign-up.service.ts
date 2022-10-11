import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employer } from './employer';
@Injectable({
  providedIn: 'root'
})
export class EmployerSignUpService {
  employer:Employer;
  constructor(private http:HttpClient) { }
  RegisterEmployer(employer:Employer):Observable<any>
  {
    return this.http.post('https://localhost:44386/api/Details/RegisterForEmployer',employer,{responseType: 'text'});
  }

}
