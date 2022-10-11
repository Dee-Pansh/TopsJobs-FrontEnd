import { Injectable } from '@angular/core';
import { Job_Elements } from './JSEMPR';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  // GetJobs():Observable<Job_Elements[]>{
  //   return this.http.get<Job_Elements[]>(this.baseurl);
  //   }
  GetJobsByCategory(category:string):Observable<Job_Elements[]>{
    return this.http.get<Job_Elements[]>('https://localhost:44312/api/JobServices/GetJobsByCategory?category='+category)
  }
}
