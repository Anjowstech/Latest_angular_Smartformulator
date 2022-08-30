import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
@Component({
  selector: 'app-add-chemistry',
  templateUrl: './add-chemistry.component.html',
  styleUrls: ['./add-chemistry.component.css']
})
export class AddChemistryComponent implements OnInit {

  constructor(public dialog: MatDialog, private http: HttpClient,) { }



  chemistryparamsave: any;
  Claim: any;






  Addchemistryparams(clmdata: string, mthddata: string) {
    this.chemparamsave(clmdata, mthddata).subscribe((chemistryparam) => {
      console.warn("chemistryparam", chemistryparam)
      this.chemistryparamsave = chemistryparam
      if (this.chemistryparamsave == "inserted") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'parameter ' + this.Claim + " " + "added" + " " + "Successfully" } });
      }
    })
  }
  chemparamsave(claim, method) {
    var Claim: string = claim;
    var Method: string = method;
    let params1 = new HttpParams().set('txtClaim', Claim).set('txtMethod', Method);
    return this.http.get("https://smartformulatorpdrwebservice4.azurewebsites.net/addchemistryparams", { params: params1, responseType: 'text' })
  }



  ngOnInit() {
  }

}
