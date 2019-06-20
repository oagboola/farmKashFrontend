import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";
import { Http,Headers,RequestOptions, Response,URLSearchParams } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  // link to connect to db 
  uri =  'https://farmkash-be.azurewebsites.net';

  constructor(private http: HttpClient, private router: Router ) { }
  
  getApplicants() {
   
    return this.http.get(this.uri + '/applications').toPromise()
  
  }

   //to fetch each applicants data by Id
   getApplicantsId(id) {
    return this
            .http
            .get(this.uri + `/applications/${id}`).toPromise();
    }



}   
