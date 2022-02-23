import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-function',
  templateUrl: './add-function.component.html',
  styleUrls: ['./add-function.component.css']
})
export class AddFunctionComponent implements OnInit {
  Function_save_data: any;
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<AddFunctionComponent>) { }



  Functionsave(fun: string, des: string) {

    this.funsaveup(fun, des).subscribe((Blenddatasaveup) => {
      console.warn("Blenddatasaveup", Blenddatasaveup)
      this.Function_save_data = Blenddatasaveup
    })

  }



  funsaveup(fun: any, des: any) {
    var funcode = fun;
    var funname = des;

    let params1 = new HttpParams().set('Code', funcode).set('name', funname);
    return this.http.get("https://smartformulatorrawmaterialwebservice4.azurewebsites.net/SaveFunctions", { params: params1, responseType: 'text' })
  }



  ngOnInit() {
  }
}
