import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
@Component({
  selector: 'app-add-microbiology',
  templateUrl: './add-microbiology.component.html',
  styleUrls: ['./add-microbiology.component.css']
})
export class AddMicrobiologyComponent implements OnInit {

  constructor(public dialog: MatDialog, private http: HttpClient) { }



  microbiologyparamsave: any;
  Claim: string = "";
  Method: string = "";
  Clear() {
    this.Claim = '';
    this.Method = '';
  }
  Addmicrobioparams(tst: string, mthd: string) {
    if (tst == "") {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter parameter' } });
    }
    this.microparamsave(tst, mthd).subscribe((microbiologyparam) => {
      console.warn("microbiologyparam", microbiologyparam)
      this.microbiologyparamsave = microbiologyparam
      if (this.microbiologyparamsave == "Inserted") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'parameter ' + this.Claim + " " + "added" + " " + "Successfully" } });
      }
    })
  }
  microparamsave(test, method) {
    var Test: string = test;
    var Method: string = method;
    let params1 = new HttpParams().set('txtTest', Test).set('txtMethod', Method);
    return this.http.get("https://smartformulatorpdrwebservice4.azurewebsites.net/addmicrobio", { params: params1,responseType: 'text'  })
  }

  ngOnInit() {
  }

}
