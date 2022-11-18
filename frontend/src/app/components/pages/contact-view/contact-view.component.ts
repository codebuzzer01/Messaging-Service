import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactInfoService } from 'src/app/services/contact-info.service';
import { contact } from 'src/app/shared/model/contacts';


@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
  lists: contact[] =[]
  constructor(private c_service: ContactInfoService, activatedRoute: ActivatedRoute ) {
    activatedRoute.params.subscribe((params)=>{
      if(params['userName'])
         this.lists = this.c_service.getInfo(params['userName'])
    
    })
   }

  ngOnInit(): void {
  }

}
