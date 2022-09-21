import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';

import { DataShareServiceService } from 'src/app/data-share-service.service';

import { DatagridcomponentComponent } from 'src/app/formula-lookup/customer-details/datagridcomponent/datagridcomponent.component';
import { NgModule } from '@angular/core';
import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";

import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { SearchCmoComponent } from './search-cmo/search-cmo.component';

@Component({
  selector: 'app-cmo',
  templateUrl: './cmo.component.html',
  styleUrls: ['./cmo.component.css']
})
export class CmoComponent implements OnInit {
  isproductsave: boolean = false;
  isproductupdate: boolean = true;
  cmodata: any = [];
  cmodata2: any = [];
  cmodata3: any = [];

  cmo_save_data: any;
  CMOname: any = "";
  street1: any = "";
  street2: any = "";
  city: any = "";
  state: any = "";
  country: any = "";
  zip: any = "";
  email: any = "";
  phonenumber: any = "";
  notes: any = "";
  cmo_update_data: any;
  cmo_delete_data: any;
  CMOnumber: any;
    cmo_number_data: any;

  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder) { }



  searchcmo(): void {
    const dialogRef = this.dialog.open(SearchCmoComponent, {
      width: '60%', height: '70%', disableClose: true
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {
        this.CMOname = result[0];
        this.CMOnumber = result[1];

        
        this.street1 = result[2];
        this.street2 = result[3];
        this.city = result[4]; 
        this.country = result[5];
        this.state = result[6];
      
        this.zip = result[7];
        this.phonenumber = result[8];
        this.email = result[9];
        this.notes = result[10];
        this.isproductsave = true;
        this.isproductupdate = false;

    



      }

    });

  }



  update() {
    if (this.CMOname == "") {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter CMO Name' } });

    }
    else {



      this.cmodata2[0] = ([{
        ProcedureStatus: '',
        oldkey: this.CMOnumber,
        CMOName: this.CMOname,
        CMONumber: this.CMOnumber,
        Street1: this.street1,
        Street2: this.street2,
        City: this.city,
        State: this.state,
        Country: this.country,
        Zip: this.zip,
        ContactNo: this.phonenumber,
        Email: this.email,
        Notes: this.notes,
        



      }])
      this.cmoupdate().subscribe((cmoupdate) => {
        console.warn("cmoupdate", cmoupdate)
        this.cmo_update_data = cmoupdate

        if (this.cmo_update_data == "success") {

          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Updated successfully' } });
        }


      })
    }
  }
  cmoupdate() {
    var jsonprams: any = JSON.stringify(this.cmodata2);

    var spsname = "[dbo].[sp_UpdateCMO_MASTER]";

    let params1 = new HttpParams().set('JSONFileparams', jsonprams).set('spname', spsname);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLEXEC", { params: params1, responseType: 'text' })
  }
  target() {
    this.isproductsave = true;
    this.isproductupdate = false;

  }
  target2() {
    this.isproductsave = false;
    this.isproductupdate = true;

  }
  clear() {
   
   this.CMOname=""
    this.CMOnumber = ""
    this.street1 = ""
    this.street2 = ""
    this.city = ""
    this.state = ""
    this.country = ""
    this.zip = ""
    this.phonenumber = ""
    this.email = ""
    this.notes = ""



  }
  deletecmo() {
    if (this.CMOname == "") {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Select  CMO ' } });
    }
    else {
      this.cmodata3[0] = ([{


        CMONumber: this.CMOnumber,
        ProcedureStatus: '',

      }])


      this.cmodelete().subscribe((cmodelete) => {
        console.warn("cmodelete", cmodelete)
        this.cmo_delete_data = cmodelete

        if (this.cmo_delete_data == "success") {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Deleted' + this.CMOname + 'successfully' } });
        }

      })
    }
  }
  cmodelete() {
    var jsonprams: any = JSON.stringify(this.cmodata3);

    var spsname = "[dbo].[deleteCMO_MASTER]";

    let params1 = new HttpParams().set('JSONFileparams', jsonprams).set('spname', spsname);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLEXEC", { params: params1, responseType: 'text' })
  }
  cmonumbergenerate() {
    let params1 = new HttpParams();
    return this.http.get("https://formulaproductization4.azurewebsites.net/cmonumbergenerate", { params: params1, responseType: 'text' })
  }

  savecmo() {
    if ( this.CMOname == "") {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter CMO Name' } });
    }
    else {

      this.cmonumbergenerate().subscribe((cmonumbergenerate) => {
        console.warn("cmonumbergenerate", cmonumbergenerate)
        this.cmo_number_data = cmonumbergenerate
        this.CMOnumber = cmonumbergenerate
      })

      this.cmodata[0] = ([{
        ProcedureStatus: '',
        CMOName: this.CMOname,
        CMONumber: this.CMOnumber,
        Street1: this.street1,
        Street2: this.street2,
        City: this.city,
        State: this.state,
        Country: this.country,
        Zip: this.zip,
        ContactNo: this.phonenumber,
        Email: this.email,
        Notes: this.notes,
       



      }])
      this.cmosave().subscribe((cmosave) => {
        console.warn("cmosave", cmosave)
        this.cmo_save_data = cmosave

        if (this.cmo_save_data == "success") {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Saved successfully' } });
        }

      })
    }
  }
  cmosave() {
    var jsonprams: any = JSON.stringify(this.cmodata);

    var spsname = "[dbo].[sp_InsertCMO_MASTER]";

    let params1 = new HttpParams().set('JSONFileparams', jsonprams).set('spname', spsname);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLEXEC", { params: params1, responseType: 'text' })
  }





  ngOnInit() {
    this.isproductsave = false;
    this.isproductupdate = true;
  }

}
