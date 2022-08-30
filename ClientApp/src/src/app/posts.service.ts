import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { AdminWorkComponent } from './admin-work/admin-work.component';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
 
 // url = "http://localhost/SmartFormulator_Webservice/";
  constructor(private http: HttpClient) { }
  user: string;
  getPosts() {
    return this.http.get("http://localhost/SmartFormulator_Webservice/formula");
  }
  
}
