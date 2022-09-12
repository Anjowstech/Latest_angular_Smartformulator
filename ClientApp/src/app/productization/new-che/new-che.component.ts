import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';

import { HttpClient, HttpParams } from '@angular/common/http';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
import { AddcheComponent } from './addche/addche.component';


@Component({
  selector: 'app-new-che',
  templateUrl: './new-che.component.html',
  styleUrls: ['./new-che.component.css']
})
export class NewCheComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  selectedRowIndex = -1;
  loadpdrno: string;
  datachem: any;
  claimdlt: string;
  chemdlt_data: any;
  Claim: string;
  Method: string;
  username: string;
  constructor(public dialog: MatDialog, private http: HttpClient, public datashare: DataShareServiceService) { }



  openaddchemistry(): void {
    const dialogRef = this.dialog.open(AddcheComponent, {
      width: '30%', height: '30%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadpdrno = this.datashare.getpdrno();
      this.loadchemistry(this.loadpdrno).subscribe((loadchemdata) => {
        console.warn("loadchemdata", loadchemdata)
        this.datachem = loadchemdata

      })
    });
  }

  loadchemistry(Pdrno) {
    var pdr: string = Pdrno;
    let params1 = new HttpParams().set('pdrno', pdr);
    return this.http.get("https://smartformulatorpdrwebservice4.azurewebsites.net/FillPDRCOAChemistry", { params: params1 })
  }
  setchemvalues(chem_load) {
    this.claimdlt = chem_load.Claim

  }
  selectedChanged(e) {
    this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
    var clmvalue: string = this.dataGrid.instance.cellValue(this.selectedRowIndex, "Claim");
  }



  chemparamdelete() {
    this.Chem_delete().subscribe((dlt_chem) => {
      console.warn("dlt_chem", dlt_chem)
      this.chemdlt_data = dlt_chem
    })
    this.loadchemistry(this.loadpdrno).subscribe((loadchemdata) => {
      console.warn("loadchemdata", loadchemdata)
      this.datachem = loadchemdata



    })



  }
  Chem_delete() {
    var clmvalue: string = this.dataGrid.instance.cellValue(this.selectedRowIndex, "Claim");
    var CLaim = clmvalue;
    let params1 = new HttpParams().set('claim', CLaim);
    return this.http.get("https://smartformulatorpdrwebservice4.azurewebsites.net/deletechemistryparams", { params: params1 })
  }



  ngOnInit() {
    this.loadpdrno = this.datashare.getpdrno();
    this.loadchemistry(this.loadpdrno).subscribe((loadchemdata) => {
      console.warn("loadchemdata", loadchemdata)
      this.datachem = loadchemdata

    })
  }
}
