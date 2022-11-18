import { Injectable } from '@angular/core';
import { sampleData } from '../data';
import { contact } from '../shared/model/contacts';
import { HttpClient } from '@angular/common/http';

import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  constructor(private _http: HttpClient) { }
  getAll():contact[] {
    return sampleData
  }
  getInfo(userName:string){
    return this.getAll().filter(item=>item.fName.toLowerCase().includes(userName.toLowerCase()))
  }
 

  
  sendMessage(data: contact[]) {
    return this._http.post(`http://localhost:5000/sendOTP`,data).
        pipe(
            map((data: any) => {
              return data;
            }), catchError( error => {
              return throwError( 'Something went wrong!' );
            })
        )
    }

    getSms(){
      return this._http.get<[]>(`http://localhost:5000/getMsg`)
    }

   
  

  
}
