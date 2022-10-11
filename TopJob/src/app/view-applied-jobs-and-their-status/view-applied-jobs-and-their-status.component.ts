import { Component, OnInit } from '@angular/core';
import { ApplicationserviceService } from '../applicationservice.service';
import { Applications } from '../applications';
@Component({
  selector: 'app-view-applied-jobs-and-their-status',
  templateUrl: './view-applied-jobs-and-their-status.component.html',
  styleUrls: ['./view-applied-jobs-and-their-status.component.css']
})
export class ViewAppliedJobsAndTheirStatusComponent implements OnInit {
  applications:Applications[];
  constructor(private serv:ApplicationserviceService) { }
  applicantId=localStorage['userIdOfJobSeeker'];
  ngOnInit(): void {
   
    this.serv.GetApplicationsInfoForParticularJobSeeker(this.applicantId).subscribe(Response=>{
      console.log(Response);
      this.applications=Response;
    })
  }
}
