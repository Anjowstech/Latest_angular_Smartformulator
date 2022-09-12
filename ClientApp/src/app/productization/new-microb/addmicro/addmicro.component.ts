import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-addmicro',
  templateUrl: './addmicro.component.html',
  styleUrls: ['./addmicro.component.css']
})
export class AddmicroComponent implements OnInit {
  constructor(public dialog: MatDialog, private http: HttpClient) { }



  microbiologyparamsave: any;



  Addmicrobioparams(tst: string, mthd: string) {
    this.microparamsave(tst, mthd).subscribe((microbiologyparam) => {
      console.warn("microbiologyparam", microbiologyparam)
      this.microbiologyparamsave = microbiologyparam
    })
  }
  microparamsave(test, method) {
    var Test: string = test;
    var Method: string = method;
    let params1 = new HttpParams().set('txtTest', Test).set('txtMethod', Method);
    return this.http.get("https://smartformulatorpdrwebservice4.azurewebsites.net/addmicrobio", { params: params1 })
  }

  ngOnInit() {
  }

}
