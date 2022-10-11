import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myimage:string="/assets/images/hp.jpg";
  
  companies= [
    {'id':1,'image':"/assets/images/wipro.jpg"},
    {'id':2,'image':'/assets/images/infosys.jpg'},
    {'id':3,'image':'/assets/images/tcs.jpg'},
    {'id':4,'image':'/assets/images/Mindtree.jpg'},
  ]
}
