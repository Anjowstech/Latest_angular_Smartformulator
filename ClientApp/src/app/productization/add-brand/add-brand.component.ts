import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  brand: any;
  branddata: any = [];
  brand_save_data: any;
  loadbrand: any;
  brand_delete_data: any;
  id: any;
  isproductsave: boolean = false;
  isproductupdate: boolean = true;
    count: any;

  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService) { }

  updatebrand() {
    this.branddata[0] = ([{
      Procedurestatus: '',
      ID: this.id,
      ProductLine: this.brand,


    }])
    this.brandsave().subscribe((brandupdate) => {
      console.warn("brandupdate", brandupdate)
      this.brand_save_data = brandupdate

      if (this.brand_save_data == "success") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'updated successfully' } });
      }
      this.brand_load().subscribe((brand_load) => {
        console.warn("brand_load", brand_load)
        this.loadbrand = brand_load
      })
    })
  }

  savebrand() {
    if (this.brand == "" || this.brand == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter Brand' } });
    }
    else {

      this.branddata[0] = ([{
        Procedurestatus: '',
        ID: '',
        ProductLine: this.brand,


      }])
      this.brandsave().subscribe((brandsave) => {
        console.warn("brandsave", brandsave)
        this.brand_save_data = brandsave

        if (this.brand_save_data == "success") {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Saved successfully' } });
        }
        this.brand_load().subscribe((brand_load) => {
          console.warn("brand_load", brand_load)
          this.loadbrand = brand_load
        })
      })
    }
  }

  brandsave() {
    var jsonprams: any = JSON.stringify(this.branddata);
    //JSON.stringify(this.FormulagridList);
    var spsname = "[dbo].[sp_InsertUpdate_ProductBrandMST]";

    let params1 = new HttpParams().set('JSONFileparams', jsonprams).set('spname', spsname);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLEXEC", { params: params1, responseType: 'text' })
  }

  brand_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadbrand")
  }


  setvalues(brand_Details) {

    this.brand = brand_Details.brand1
    this.id = brand_Details.ID

  }
  deletebrand() {
    if (this.brand == "" || this.brand == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter Brand' } });
    }
    this.branddata[0] = ([{
      Procedurestatus: '',
      ID: this.id



    }])
    this.branddelete().subscribe((brand_delete) => {
      console.warn("brand_delete", brand_delete)
      this.brand_delete_data = brand_delete

      if (this.brand_delete_data == "success") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Deleted successfully' } });
      }
      this.brand_load().subscribe((brand_load) => {
        console.warn("brand_load", brand_load)
        this.loadbrand = brand_load
      })

    })

  }

  branddelete() {
    var jsonprams: any = JSON.stringify(this.branddata);
    //JSON.stringify(this.FormulagridList);
    var spsname = "[dbo].[sp_Delete_ProductBrandMST]";

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
    this.brand = "";


  }

  ngOnInit() {

    this.brand_load().subscribe((brand_load) => {
      console.warn("brand_load", brand_load)
      this.loadbrand = brand_load
      this.count = this.loadbrand.length

    })

    this.isproductsave = false;
    this.isproductupdate = true;
  }

}

