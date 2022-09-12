import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';

import { DataShareServiceService } from 'src/app/data-share-service.service';

import { DatagridcomponentComponent } from 'src/app/formula-lookup/customer-details/datagridcomponent/datagridcomponent.component';
import { NgModule } from '@angular/core';
import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";

import { MessageBoxComponent } from 'src/app/message-box/message-box.component';


@Component({
  selector: 'app-add-componentcategory',
  templateUrl: './add-componentcategory.component.html',
  styleUrls: ['./add-componentcategory.component.css']
})
export class AddComponentcategoryComponent implements OnInit {


  componentcategory: any;
  componentcategorydata: any = [];
  componentcategorydata1: any = [];
  componentcategorydata2: any = [];
  componentcategory_save_data: any;

  loadcomponentcategory: any;
  componentcategory_delete_data: any;
  id: any;
  Categorytype: any;
  Description: any;
  Categorytypes: any;
  Descriptions: any;
  componentcategory_update_data: any;

  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService) { }


  componentcategory_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadComponentcat")
  }

  setvalues(details_cattype) {
    this.id = details_cattype.categoryid
    this.Categorytypes = details_cattype.categorytype
    this.Descriptions = details_cattype.description

  }
  savecomponentcategory() {
    this.componentcategorydata[0] = ([{

      CategoryID: '',
      CategoryType: this.Categorytypes,
      Description: this.Descriptions,
      OldCategoryType: '',
      Procedurestatus: ''


    }])
    this.componentcategorysave().subscribe((componentcategorysave) => {
      console.warn("componentcategorysave", componentcategorysave)
      this.componentcategory_save_data = componentcategorysave

      if (this.componentcategory_save_data == "success") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Saved successfully' } });
      }
      this.componentcategory_load().subscribe((componentcategory_load) => {
        console.warn("componentcategory_load", componentcategory_load)
        this.loadcomponentcategory = componentcategory_load
      })
    })
  }
  componentcategorysave() {
    var jsonprams: any = JSON.stringify(this.componentcategorydata);
    //JSON.stringify(this.FormulagridList);
    var spsname = "[dbo].[sp_InsertUpdateComponentCategory]";

    let params1 = new HttpParams().set('JSONFileparams', jsonprams).set('spname', spsname);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLEXEC", { params: params1, responseType: 'text' })
  }
  updatecomponentcategory() {
    this.componentcategorydata2[0] = ([{

      CategoryID: this.id,
      CategoryType: this.Categorytypes,
      Description: this.Descriptions,
      OldCategoryType: this.Categorytypes,
      Procedurestatus: ''


    }])
    this.componentcategoryupdate().subscribe((componentcategoryupdate) => {
      console.warn("componentcategoryupdate", componentcategoryupdate)
      this.componentcategory_update_data = componentcategoryupdate

      if (this.componentcategory_update_data == "success") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'updated successfully' } });
      }
      this.componentcategory_load().subscribe((componentcategory_load) => {
        console.warn("componentcategory_load", componentcategory_load)
        this.loadcomponentcategory = componentcategory_load
      })
    })
  }
  componentcategoryupdate() {
    var jsonprams: any = JSON.stringify(this.componentcategorydata2);
    //JSON.stringify(this.FormulagridList);
    var spsname = "[dbo].[sp_InsertUpdateComponentCategory]";

    let params1 = new HttpParams().set('JSONFileparams', jsonprams).set('spname', spsname);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLEXEC", { params: params1, responseType: 'text' })
  }


  deletecomponentcategory() {
    this.componentcategorydata1[0] = ([{

      CategoryID: this.id,
      CategoryType: this.Categorytypes,
      Procedurestatus: ''


    }])
    this.componentcategorydelete().subscribe((componentcategorydelete) => {
      console.warn("componentcategorydelete", componentcategorydelete)
      this.componentcategory_delete_data = componentcategorydelete

      if (this.componentcategory_delete_data == "success") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'deleted successfully' } });
      }
      this.componentcategory_load().subscribe((componentcategory_load) => {
        console.warn("componentcategory_load", componentcategory_load)
        this.loadcomponentcategory = componentcategory_load
      })
    })
  }
  componentcategorydelete() {
    var jsonprams: any = JSON.stringify(this.componentcategorydata1);
    //JSON.stringify(this.FormulagridList);
    var spsname = "[dbo].[deleteComponentCategory]";

    let params1 = new HttpParams().set('JSONFileparams', jsonprams).set('spname', spsname);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLEXEC", { params: params1, responseType: 'text' })
  }












  ngOnInit() {
    this.componentcategory_load().subscribe((componentcategory_load) => {
      console.warn("componentcategory_load", componentcategory_load)
      this.loadcomponentcategory = componentcategory_load
    })
  }

}
