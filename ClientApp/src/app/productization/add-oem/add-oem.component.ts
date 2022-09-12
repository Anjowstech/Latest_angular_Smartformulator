import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
@Component({
  selector: 'app-add-oem',
  templateUrl: './add-oem.component.html',
  styleUrls: ['./add-oem.component.css']
})
export class AddOemComponent implements OnInit {
  oem: any;
  oemdata: any = [];
  oem_save_data: any;
  loadoem: any;
  oem_delete_data: any;
  id: any;

  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService) { }



  saveoem() {
    this.oemdata[0] = ([{
      Procedurestatus: '',
      ID: '',
      ProductLine: this.oem,


    }])
    this.oemsave().subscribe((oemsave) => {
      console.warn("oemsave", oemsave)
      this.oem_save_data = oemsave

      if (this.oem_save_data == "success") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Saved successfully' } });
      }
      this.oem_load().subscribe((oem_load) => {
        console.warn("oem_load", oem_load)
        this.loadoem = oem_load
      })
    })
  }

  oemsave() {
    var jsonprams: any = JSON.stringify(this.oemdata);
    //JSON.stringify(this.FormulagridList);
    var spsname = "[dbo].[sp_InsertUpdate_ProductOEMMST]";

    let params1 = new HttpParams().set('JSONFileparams', jsonprams).set('spname', spsname);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLEXEC", { params: params1, responseType: 'text' })
  }

  oem_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadOEM")
  }


  setvalues(oem_Details) {

    this.oem = oem_Details.OEM1
    this.id = oem_Details.ID

  }
  deleteoem() {
    this.oemdata[0] = ([{
      Procedurestatus: '',
      ID: this.id



    }])
    this.oemdelete().subscribe((oem_delete) => {
      console.warn("oem_delete", oem_delete)
      this.oem_delete_data = oem_delete

      if (this.oem_delete_data == "success") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Deleted successfully' } });
      }
      this.oem_load().subscribe((oem_load) => {
        console.warn("oem_load", oem_load)
        this.loadoem = oem_load
      })

    })

  }

  oemdelete() {
    var jsonprams: any = JSON.stringify(this.oemdata);
    //JSON.stringify(this.FormulagridList);
    var spsname = "[dbo].[sp_Delete_ProductOEMMST]";

    let params1 = new HttpParams().set('JSONFileparams', jsonprams).set('spname', spsname);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLEXEC", { params: params1, responseType: 'text' })
  }



  ngOnInit() {

    this.oem_load().subscribe((oem_load) => {
      console.warn("oem_load", oem_load)
      this.loadoem = oem_load
    })
  }

}
