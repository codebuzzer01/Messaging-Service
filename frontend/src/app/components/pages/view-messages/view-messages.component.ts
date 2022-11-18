import { Component, OnInit } from '@angular/core';
import { dm } from 'src/app/shared/model/sms';
import { ContactInfoService } from 'src/app/services/contact-info.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-messages',
  templateUrl: './view-messages.component.html',
  styleUrls: ['./view-messages.component.css']
})
export class ViewMessagesComponent implements OnInit {

   msgs: dm[] =[]
  constructor(private _http: HttpClient,private c_service: ContactInfoService) { }

  ngOnInit(): void {
  }
  submitted= false

 

  viewMessage(){
    this.submitted=true
  this.c_service.getSms().subscribe(
      response=>{
        console.log(response)
        this.msgs = response
        this.msgs = this.msgs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
      },
      err => console.log("Error", err)
    )



  }
  

}
