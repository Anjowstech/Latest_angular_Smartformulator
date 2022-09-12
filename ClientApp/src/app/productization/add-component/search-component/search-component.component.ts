import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/formula-lookup/formula-lookup.component';
import { Inject } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { SearchSupplierComponent } from '../../../raw-material/add-supplier/search-supplier/search-supplier.component';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
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

  constructor(public dialog: MatDialog, private http: HttpClient, public dialogRef: MatDialogRef<SearchComponentComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private Datashare: DataShareServiceService) { }


  componentdata_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadComponentDATA")
  }
  componentcategory_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadComponentcat")
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




  searchhsupplier(): void {
    const dialogRef = this.dialog.open(SearchSupplierComponent, {
      width: '60%', height: '70%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {
        this.supplierse = result[1];
      }

    });
  }



  ngOnInit() {
    this.componentdata_load().subscribe((componentdata_load) => {
      console.warn("componentdata_load", componentdata_load)
      this.loadcomponentdata = componentdata_load
    })
    this.componentcategory_load().subscribe((componentcategory_load) => {
      console.warn("componentcategory_load", componentcategory_load)
      this.loadcomponentcategory = componentcategory_load
    })
  }

}
