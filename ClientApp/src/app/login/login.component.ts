import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  connection: any;
  connectionstr: string;
  user: string;
  scrHeight: any;
  scrWidth: any;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    console.log(this.scrHeight, this.scrWidth);
  }

  constructor(private router: Router, private http: HttpClient) { this.getScreenSize(); }
  userdata(username: string,password:string) {
    var usern: string = username;
    var passw: string = password;

    let params1 = new HttpParams().set('Userid', usern).set('Password', passw);
    return this.http.get("https://multitenancyloginwebservice.azurewebsites.net/Loadarlsdetails", { params: params1, })
  }
  ngOnInit() {
  }
  login(): void {
    this.userdata(this.username, this.password).subscribe((userdetails) => {
      console.warn("userdetails", userdetails)
      this.connection = userdetails

      for (let item of this.connection) {
        this.connectionstr = item.databaseconnection;
        this.user = item.username;

      }
      if (this.username != null && this.connectionstr  !=null && this.username==this.user) {
        this.router.navigate(['/Home']);
      } else {
        alert("Invalid credentials");
      }
    })
   
  }
}
