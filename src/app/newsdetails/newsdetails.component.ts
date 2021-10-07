import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
  styleUrls: ['./newsdetails.component.css']
})
export class NewsdetailsComponent implements OnInit {

  public MyId:any;
  constructor(private activateRout:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    let id=this.activateRout.snapshot.paramMap.get('id');
   this.MyId=id;
  }

}
