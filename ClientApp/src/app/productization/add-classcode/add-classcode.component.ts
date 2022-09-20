import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';

@Component({
  selector: 'app-add-classcode',
  templateUrl: './add-classcode.component.html',
  styleUrls: ['./add-classcode.component.css']
})
export class AddClasscodeComponent implements OnInit {
  class: any;
  classdata: any = [];
 class_save_data: any;
  loadclass: any;
  class_delete_data: any;
  id: any;
  isproductsave: boolean = false;
  isproductupdate: boolean = true;
    class_update_data: any;
    count: any;



  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService) { }

  updateclass() {
    this.classdata[0] = ([{
      Procedurestatus: '',
      ID: this.id,
      ProductLine: this.class,


    }])
    this.classsave().subscribe((classupdate) => {
      console.warn("classupdate", classupdate)
      this.class_update_data = classupdate

      if (this.class_save_data == "success") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Updated successfully' } });
      }
      this.class_load().subscribe((product_load) => {
        console.warn("product_load", product_load)
        this.loadclass = product_load
      })
    })
  }

  saveclass() {
    if (this.class == "" || this.class == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter ClassCode' } });
    }
    else {
      this.classdata[0] = ([{
        Procedurestatus: '',
        ID: '',
        ProductLine: this.class,


      }])
      this.classsave().subscribe((classsave) => {
        console.warn("classsave", classsave)
        this.class_save_data = classsave

        if (this.class_save_data == "success") {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Saved successfully' } });
        }
        this.class_load().subscribe((product_load) => {
          console.warn("product_load", product_load)
          this.loadclass = product_load
        })
      })
    }
  }

 classsave() {
    var jsonprams: any = JSON.stringify(this.classdata);
    //JSON.stringify(this.FormulagridList);
   var spsname = "[dbo].[sp_InsertUpdate_ProductClassMST]";

    let params1 = new HttpParams().set('JSONFileparams', jsonprams).set('spname', spsname);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLEXEC", { params: params1, responseType: 'text' })
  }

class_load() {
  return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadclasscode")
  }


  setvalues(class_Details) {

    this.class = class_Details.classcode1
    this.id = class_Details.ID

  }
  deleteclass() {

    if (this.class == "" || this.class == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter ClassCode' } });
    }
    this.classdata[0] = ([{
      Procedurestatus: '',
      ID: this.id



    }])
    this.classdelete().subscribe((class_delete) => {
      console.warn("class_delete", class_delete)
      this.class_delete_data = class_delete

      if (this.class_delete_data == "success") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Deleted successfully' } });
      }
      this.class_load().subscribe((class_load) => {
        console.warn("class_load", class_load)
        this.loadclass = class_load
      })

    })

  }

  classdelete() {
    var jsonprams: any = JSON.stringify(this.classdata);
    //JSON.stringify(this.FormulagridList);
    var spsname = "[dbo].[sp_Delete_ProductClassMST]";

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
    this.class = "";


  }

  ngOnInit() {

    this.class_load().subscribe((class_load) => {
      console.warn("class_load", class_load)
      this.loadclass = class_load
      this.count = this.loadclass.length
    })

    this.isproductsave = false;
    this.isproductupdate = true;
  }

}
