import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/pages/contact-list/contact-list.component';
import { ContactViewComponent } from './components/pages/contact-view/contact-view.component';
import { SendMessageComponent } from './components/pages/send-message/send-message.component';
import { ViewMessagesComponent } from './components/pages/view-messages/view-messages.component';

const routes: Routes = [
  {path:'contacts', component:ContactListComponent},
  {path:'contacts/view/:userName', component:ContactViewComponent},
  {path: 'message/to/:userName', component: SendMessageComponent},
  {path: 'In-Box', component: ViewMessagesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
