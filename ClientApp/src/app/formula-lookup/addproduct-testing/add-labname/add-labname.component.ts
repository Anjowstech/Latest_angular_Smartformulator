import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MessageBoxComponent } from '../../../message-box/message-box.component';

@Component({
  selector: 'app-add-labname',
  templateUrl: './add-labname.component.html',
  styleUrls: ['./add-labname.component.css']
})
export class AddLabnameComponent implements OnInit {
  labame_data: any;
  labname: any;
  constructor(public dialog: MatDialog, private http: HttpClient) { }

  labnamesave() {
    this.labnamesaveup().subscribe((Savelabname) => {
      console.warn("Savelabname", Savelabname)
      this.labame_data = Savelabname

      if (this.labame_data == "Inserted") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Labname' + this.labame_data + ' is saved successfully.' } });
      }

      else {
        (this.labame_data == "labname")
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'lab name already exists!' } });
      }


    })
  }

  labnamesaveup() {
    var lab: string = this.labname;
    let params1 = new HttpParams().set('labname', lab);
    return this.http.get("https://formulalookupwebservice9.azurewebsites.net/BtnLabsave", { params: params1, responseType: 'text' })
  }

  cleardata() {
    this.labname = '';
  }

  ngOnInit() {
  }

}
