import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { ContactListComponent } from './components/pages/contact-list/contact-list.component';
import { ContactViewComponent } from './components/pages/contact-view/contact-view.component';
import { SendMessageComponent } from './components/pages/send-message/send-message.component';
import { ViewMessagesComponent } from './components/pages/view-messages/view-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactListComponent,
    ContactViewComponent,
    SendMessageComponent,
    ViewMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
