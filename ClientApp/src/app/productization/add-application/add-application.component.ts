import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent implements OnInit {

  application: any;
  applicationdata: any = [];
  application_save_data: any;
  loadapplication: any;
  application_delete_data: any;
  id: any;

  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService) { }



  saveapplication() {
    this.applicationdata[0] = ([{
      Procedurestatus: '',
      ID: '',
      ProductLine: this.application,


    }])
    this.applicationsave().subscribe((applicationsave) => {
      console.warn("applicationsave", applicationsave)
      this.application_save_data = applicationsave

      if (this.application_save_data == "success") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Saved successfully' } });
      }
      this.application_load().subscribe((application_load) => {
        console.warn("application_load", application_load)
        this.loadapplication = application_load
      })
    })
  }

  applicationsave() {
    var jsonprams: any = JSON.stringify(this.applicationdata);
    //JSON.stringify(this.FormulagridList);
    var spsname = "[dbo].[sp_InsertUpdate_ProductApplicationMST]";

    let params1 = new HttpParams().set('JSONFileparams', jsonprams).set('spname', spsname);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLEXEC", { params: params1, responseType: 'text' })
  }

  application_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadapplication")
  }


  setvalues(application_Details) {

    this.application = application_Details.application1
    this.id = application_Details.ID

  }
  deleteapplication() {
    this.applicationdata[0] = ([{
      Procedurestatus: '',
      ID: this.id



    }])
    this.applicationdelete().subscribe((application_delete) => {
      console.warn("application_delete", application_delete)
      this.application_delete_data = application_delete

      if (this.application_delete_data == "success") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Deleted successfully' } });
      }
      this.application_load().subscribe((application_load) => {
        console.warn("application_load", application_load)
        this.loadapplication = application_load
      })

    })

  }

  applicationdelete() {
    var jsonprams: any = JSON.stringify(this.applicationdata);
    //JSON.stringify(this.FormulagridList);
    var spsname = "[dbo].[sp_Delete_ProductApplicationMST]";

    let params1 = new HttpParams().set('JSONFileparams', jsonprams).set('spname', spsname);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLEXEC", { params: params1, responseType: 'text' })
  }



  ngOnInit() {

    this.application_load().subscribe((application_load) => {
      console.warn("application_load", application_load)
      this.loadapplication = application_load
    })
  }

}
