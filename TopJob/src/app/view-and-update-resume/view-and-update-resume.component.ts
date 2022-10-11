import { Component, OnInit } from '@angular/core';
import { Resume } from '../resume';
import { ResumeService } from '../resume.service';
@Component({
  selector: 'app-view-and-update-resume',
  templateUrl: './view-and-update-resume.component.html',
  styleUrls: ['./view-and-update-resume.component.css']
})
export class ViewAndUpdateResumeComponent implements OnInit {
resume:Resume
  constructor(private res:ResumeService) { }
  
  ngOnInit(): void {
    this.res.GetResumeByApplicantId(localStorage['userIdOfJobSeeker']).subscribe(Response=>{
      this.resume=Response;
    })
  }
}
