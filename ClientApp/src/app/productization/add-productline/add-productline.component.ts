import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
@Component({
  selector: 'app-add-productline',
  templateUrl: './add-productline.component.html',
  styleUrls: ['./add-productline.component.css']
})
export class AddProductlineComponent implements OnInit {
  productline: any;
  productdata: any = [];
  product_save_data: any;
  loadproduct: any;
  product_delete_data: any;
  id: any;




  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService) { }

  saveproduct() {
    this.productdata[0] = ([{
      Procedurestatus: '',
      ID: '',
      ProductLine: this.productline,


    }])
    this.productsave().subscribe((productsave) => {
      console.warn("productsave", productsave)
      this.product_save_data = productsave

      if (this.product_save_data == "success") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Saved successfully' } });
      }
      this.product_load().subscribe((product_load) => {
        console.warn("product_load", product_load)
        this.loadproduct = product_load
      })
    })
  }

  productsave() {
    var jsonprams: any = JSON.stringify(this.productdata);
    //JSON.stringify(this.FormulagridList);
    var spsname = "[dbo].[sp_InsertUpdate_ProductLineMST]";

    let params1 = new HttpParams().set('JSONFileparams', jsonprams).set('spname', spsname);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLEXEC", { params: params1, responseType: 'text' })
  }

  product_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadproductline")
  }


  setvalues(product_Details) {

    this.productline = product_Details.ProductLine1
    this.id = product_Details.ID

  }
  deleteproduct() {
    this.productdata[0] = ([{
      Procedurestatus: '',
      ID: this.id



    }])
    this.productdelete().subscribe((product_delete) => {
      console.warn("product_delete", product_delete)
      this.product_delete_data = product_delete

      if (this.product_delete_data == "success") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Deleted successfully' } });
      }
      this.product_load().subscribe((product_load) => {
        console.warn("product_load", product_load)
        this.loadproduct = product_load
      })

    })

  }

  productdelete() {
    var jsonprams: any = JSON.stringify(this.productdata);
    //JSON.stringify(this.FormulagridList);
    var spsname = "[dbo].[sp_Delete_ProductLineMST]";

    let params1 = new HttpParams().set('JSONFileparams', jsonprams).set('spname', spsname);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLEXEC", { params: params1, responseType: 'text' })
  }



  ngOnInit() {

    this.product_load().subscribe((product_load) => {
      console.warn("product_load", product_load)
      this.loadproduct = product_load
    })
  }

}
