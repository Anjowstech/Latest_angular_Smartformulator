import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
@Component({
  selector: 'app-add-classification',
  templateUrl: './add-classification.component.html',
  styleUrls: ['./add-classification.component.css']
})
export class AddClassificationComponent implements OnInit {

  classification: any;
  classificationdata: any = [];
  classification_save_data: any;
  loadclassification: any;
  classification_delete_data: any;
  id: any;




  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService) { }

  saveclassification() {
    this.classificationdata[0] = ([{
      Procedurestatus: '',
      ID: '',
      ProductLine: this.classification,


    }])
    this.classificationsave().subscribe((classificationsave) => {
      console.warn("classificationsave", classificationsave)
      this.classification_save_data = classificationsave

      if (this.classification_save_data == "success") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Saved successfully' } });
      }
      this.classification_load().subscribe((classification_load) => {
        console.warn("classification_load", classification_load)
        this.loadclassification = classification_load
      })
    })
  }

  classificationsave() {
    var jsonprams: any = JSON.stringify(this.classificationdata);
    //JSON.stringify(this.FormulagridList);
    var spsname = "[dbo].[sp_InsertUpdate_ProductClassificationMST]";

    let params1 = new HttpParams().set('JSONFileparams', jsonprams).set('spname', spsname);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLEXEC", { params: params1, responseType: 'text' })
  }

  classification_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadclassification")
  }


  setvalues(classification_Details) {

    this.classification = classification_Details.classification1
    this.id = classification_Details.ID

  }
  deleteclassification() {
    this.classificationdata[0] = ([{
      Procedurestatus: '',
      ID: this.id



    }])
    this.classificationdelete().subscribe((classification_delete) => {
      console.warn("classification_delete", classification_delete)
      this.classification_delete_data = classification_delete

      if (this.classification_delete_data == "success") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Deleted successfully' } });
      }
      this.classification_load().subscribe((classification_load) => {
        console.warn("classification_load", classification_load)
        this.loadclassification = classification_load
      })

    })

  }

  classificationdelete() {
    var jsonprams: any = JSON.stringify(this.classificationdata);
    //JSON.stringify(this.FormulagridList);
    var spsname = "[dbo].[sp_Delete_ProductClassificationMST]";

    let params1 = new HttpParams().set('JSONFileparams', jsonprams).set('spname', spsname);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLEXEC", { params: params1, responseType: 'text' })
  }



  ngOnInit() {

    this.classification_load().subscribe((classification_load) => {
      console.warn("classification_load", classification_load)
      this.loadclassification = classification_load
    })
  }

}
