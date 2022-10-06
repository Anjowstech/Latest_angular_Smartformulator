
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/formula-lookup/formula-lookup.component';
import { Inject } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';

import { MessageBoxComponent } from 'src/app/message-box/message-box.component';


@Component({
  selector: 'app-componentlisting',
  templateUrl: './componentlisting.component.html',
  styleUrls: ['./componentlisting.component.css']
})
export class ComponentlistingComponent implements OnInit {
  filterMetadata = { count: 0 };
  loadcomponentdata: any;
  loadcomponentcategory: any;
  supplierse: any;
  componentitemno: any;
  componentname: any;
  suppliercode: string = "";
  fillablecomp: string = "";
  compsize: any = '';
  searchitems: any[];
  componentitemno1: string = "";
  componentname1: string = "";
  specification: string = "";
  unitcost: any = "";
  ItemNo: string = "";
  count: any;
  categorytype: any;
  quick_savedata: any;
  fillablecomponent: string = 'No';

  constructor(public dialog: MatDialog, private http: HttpClient, public dialogRef: MatDialogRef<ComponentlistingComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private Datashare: DataShareServiceService) { }


  componentdata_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadComponentDATA")
  }
  componentcategory_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadComponentcat")
  }
  radioChangefillablecomponent(event) {
    this.fillablecomponent = event.value;

  }
  //setvalues(details_comp) {
  //  this.componentitemno = details_comp.componentitemno;
  //  this.componentname = details_comp.componentname;
  //  this.supplierse = details_comp.supplier


  //}

  setvalues(details_comp) {
    this.componentitemno1 = details_comp.componentitemno;
    this.componentname1 = details_comp.componentname;
    this.suppliercode = details_comp.supplier;
    this.fillablecomp = details_comp.fillablecomp;
    this.compsize = details_comp.size;
    this.specification = details_comp.Specification;
    this.unitcost = details_comp.UnitCost;
    this.ItemNo = details_comp.ItemNo;
    this.searchitems = [this.componentitemno1, this.componentname1, this.suppliercode, this.fillablecomp, this.compsize, this.specification, this.unitcost, this.ItemNo]

  }
  Close() {

    this.dialogRef.close(this.searchitems);

  }
  clear() {
    this.componentitemno = "";
    this.componentname = "";
    this.supplierse = "";
    this.categorytype = "";

  }

  quicksave() {
    this.quick_save().subscribe((quick_save) => {
      console.warn("quicksavedata", quick_save)
      this.quick_savedata = quick_save

      if (this.quick_savedata == "Component details saved successfully.") {

        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'Component details saved successfully.' } });

      }
      else if (this.quick_savedata == "Component item # already exists. Choose another one.") {

        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'Component item # already exists. Choose another one.' } });

      }
      this.componentdata_load().subscribe((componentdata_load) => {
        console.warn("componentdata_load", componentdata_load)
        this.loadcomponentdata = componentdata_load
        this.count = this.loadcomponentdata.length
      })
    })
  }

  quick_save() {
    var sup: string = this.supplierse
    var compitemno: string = this.componentitemno
    var cat: string = this.categorytype
    var compnam: string = this.componentname
    var user: string = "admin"
    var fill: string = this.fillablecomponent


    let params1 = new HttpParams().set('suppliername', sup).set('ComponentItemNo', compitemno).set('CategoryType', cat).set('ComponentName', compnam).set('username', user).set('FillableComponent', fill);
    return this.http.get("https://formulaproductization4.azurewebsites.net/Quicksavecomponent", { params: params1, responseType: 'text' })

  }





  

  ngOnInit() {
    this.componentdata_load().subscribe((componentdata_load) => {
      console.warn("componentdata_load", componentdata_load)
      this.loadcomponentdata = componentdata_load
      this.count = this.loadcomponentdata.length
    })
    this.componentcategory_load().subscribe((componentcategory_load) => {
      console.warn("componentcategory_load", componentcategory_load)
      this.loadcomponentcategory = componentcategory_load
    })
  }

}
