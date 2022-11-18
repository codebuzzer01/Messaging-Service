import { Component, OnInit } from '@angular/core';
import { contact } from 'src/app/shared/model/contacts';
import { ContactInfoService } from 'src/app/services/contact-info.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  submitted = false
  lists: contact[] =[]
  constructor(private c_service: ContactInfoService, activatedRoute: ActivatedRoute ) {
    activatedRoute.params.subscribe((params)=>{
      if(params['userName'])
         this.lists = this.c_service.getInfo(params['userName'])
         
    
    })
   }

  ngOnInit(): void {
  }
  //otp = Math.floor(100000 + Math.random() * 900000)
  msgInfo(info:any){
    this.submitted=true
    this.c_service.sendMessage(info).subscribe(
      data => console.log("Success !", data),
      error => console.log("Error", error)
      
    )

    

  }

  

 

}
