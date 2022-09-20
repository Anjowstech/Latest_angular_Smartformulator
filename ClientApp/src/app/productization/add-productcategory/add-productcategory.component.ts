import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
@Component({
  selector: 'app-add-productcategory',
  templateUrl: './add-productcategory.component.html',
  styleUrls: ['./add-productcategory.component.css']
})
export class AddProductcategoryComponent implements OnInit {

  category: any;
  categorydata: any = [];
  category_save_data: any;
  loadcategory: any;
  category_delete_data: any;
  id: any;
  isproductsave: boolean = false;
  isproductupdate: boolean = true;
    category_update_data: any;
    count: any;



  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService) { }

  updatecategory() {
    this.categorydata[0] = ([{
      Procedurestatus: '',
      ID: this.id,
      ProductLine: this.category,


    }])
    this.categorysave().subscribe((categoryupdate) => {
      console.warn("categoryupdate", categoryupdate)
      this.category_update_data = categoryupdate

      if (this.category_save_data == "success") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Updated Successfully' } });
      }
      this.category_load().subscribe((category_load) => {
        console.warn("category_load", category_load)
        this.loadcategory = category_load
      })
    })
  }
  savecategory() {

    if (this.category == "" || this.category == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter Product Category' } });
    }
    else {
      this.categorydata[0] = ([{
        Procedurestatus: '',
        ID: '',
        ProductLine: this.category,


      }])
      this.categorysave().subscribe((categorysave) => {
        console.warn("categorysave", categorysave)
        this.category_save_data = categorysave

        if (this.category_save_data == "success") {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Saved successfully' } });
        }
        this.category_load().subscribe((category_load) => {
          console.warn("category_load", category_load)
          this.loadcategory = category_load
        })
      })
    }
  }

  categorysave() {
    var jsonprams: any = JSON.stringify(this.categorydata);
    //JSON.stringify(this.FormulagridList);
    var spsname = "[dbo].[sp_InsertUpdate_ProductCatMST]";

    let params1 = new HttpParams().set('JSONFileparams', jsonprams).set('spname', spsname);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLEXEC", { params: params1, responseType: 'text' })
  }

  category_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadcat")
  }


  setvalues(category_Details) {

    this.category = category_Details.cat1
    this.id = category_Details.ID

  }
  deletecategory() {
    if (this.category == "" || this.category == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter Product Category' } });
    }
    else {
      this.categorydata[0] = ([{
        Procedurestatus: '',
        ID: this.id



      }])
      this.categorydelete().subscribe((category_delete) => {
        console.warn("category_delete", category_delete)
        this.category_delete_data = category_delete

        if (this.category_delete_data == "success") {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Deleted successfully' } });
        }
        this.category_load().subscribe((category_load) => {
          console.warn("category_load", category_load)
          this.loadcategory = category_load
        })

      })
    }

  }

  categorydelete() {
    var jsonprams: any = JSON.stringify(this.categorydata);
    //JSON.stringify(this.FormulagridList);
    var spsname = "[dbo].[sp_Delete_ProductCatMST]";

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
    this.category = "";


  }

  ngOnInit() {

    this.category_load().subscribe((category_load) => {
      console.warn("category_load", category_load)
      this.loadcategory = category_load
      this.count = this.loadcategory.length
    })
    this.isproductsave = false;
    this.isproductupdate = true;
  }

}
