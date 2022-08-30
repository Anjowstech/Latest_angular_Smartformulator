import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-addnew-param',
  templateUrl: './addnew-param.component.html',
  styleUrls: ['./addnew-param.component.css']
})
export class AddnewParamComponent implements OnInit {
  savepecparam: any;
  Description: string;
  constructor(public dialog: MatDialog, private http: HttpClient) { }
  openaddspec(spe: string) {

    this.Addspecificationparams(spe).subscribe((loadspecs) => {
      console.warn("addspec", loadspecs)
      this.savepecparam = loadspecs



    });
  }
  Addspecificationparams(Descrptionparam: string) {
    var Description = Descrptionparam;
    let params1 = new HttpParams().set('Description', Description);
    return this.http.get("https://smartformulatorpdrwebservice5.azurewebsites.net/Addspeparams", { params: params1 })
  }



  ngOnInit() {
  }
}
