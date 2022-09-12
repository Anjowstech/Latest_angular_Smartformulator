import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';

@Component({
  selector: 'app-add-function',
  templateUrl: './add-function.component.html',
  styleUrls: ['./add-function.component.css']
})
export class AddFunctionComponent implements OnInit {
  Function_save_data: any;
  functioncodes: string = '';
  functiondiscriptions: string = '';
  Datashare: any;


  constructor(private http: HttpClient, public dialogRef: MatDialogRef<AddFunctionComponent>, public dialog: MatDialog) { }
  
 

  Functionsave(fun: string, des: string) {
    if (fun == '') {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter Function name' } });
    }

    this.funsaveup(fun, des).subscribe((Blenddatasaveup) => {
      console.warn("Blenddatasaveup", Blenddatasaveup)
      this.Function_save_data = Blenddatasaveup
    })
    this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Function is saved successfully.' } });
  }
  clearfunc() {
    this.functioncodes = '';
    this.functiondiscriptions = '';
    this.Datashare.senditemtoraw(null);
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
