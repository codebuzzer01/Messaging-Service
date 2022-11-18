import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactInfoService } from 'src/app/services/contact-info.service';
import { contact } from 'src/app/shared/model/contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  lists: contact[] =[]

  constructor(private c_service: ContactInfoService, activatedRoute: ActivatedRoute ) {
    
    this.lists = this.c_service.getAll()
   }

  ngOnInit(){
   
  }

}
