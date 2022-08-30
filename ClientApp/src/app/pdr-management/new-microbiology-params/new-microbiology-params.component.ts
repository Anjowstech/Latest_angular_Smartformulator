
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddMicrobiologyComponent } from 'src/app/pdr-management/new-microbiology-params/add-microbiology/add-microbiology.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';


@Component({
  selector: 'app-new-microbiology-params',
  templateUrl: './new-microbiology-params.component.html',
  styleUrls: ['./new-microbiology-params.component.css']
})
export class NewMicrobiologyParamsComponent implements OnInit {
 
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent; datamicro: any;
  loadpdrno: string;
  microdlt_data: any;
  testdlt: string;
  selectedRowIndex = -1; constructor(public dialog: MatDialog, private http: HttpClient, public datashare: DataShareServiceService) { }
  openaddmicrobiology(): void {
    const dialogRef = this.dialog.open(AddMicrobiologyComponent, {
      width: '30%', height: '30%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadpdrno = this.datashare.getpdrno();
      this.loadmicrobiology(this.loadpdrno).subscribe((loadmicrobiologydata) => {
        console.warn("loadmicrobiologydata", loadmicrobiologydata)
        this.datamicro = loadmicrobiologydata
      })
    });
  }
  loadmicrobiology(Pdrno) {
    var pdr: string = Pdrno;
    let params1 = new HttpParams().set('pdrno', pdr);
    return this.http.get("https://smartformulatorpdrwebservice4.azurewebsites.net/FillPDRCOAMicrobiology", { params: params1 })
  } setmicrovalues(microbio_load) {
    this.testdlt = microbio_load.Test
  }
  selectedChanged(e) {
    this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
    var testvalue: string = this.dataGrid.instance.cellValue(this.selectedRowIndex, "Test");
  }
  SaveProperty() {
    this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'parameter saved Successfully' } });
  }
  microbioparamdelete() {
    this.micro_delete().subscribe((dlt_microbio) => {
      console.warn("dlt_microbio", dlt_microbio)
      this.microdlt_data = dlt_microbio
      if (this.microdlt_data == "Parameter is deleted successfully.") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Parameter is deleted successfully.' } });
      }
    })
    this.loadmicrobiology(this.loadpdrno).subscribe((loadmicrobiologydata) => {
      console.warn("loadmicrobiologydata", loadmicrobiologydata)
      this.datamicro = loadmicrobiologydata
    })
  }
  micro_delete() {
    var testvalue: string = this.dataGrid.instance.cellValue(this.selectedRowIndex, "Test");
    var Test = testvalue;
    let params1 = new HttpParams().set('test', Test);
    return this.http.get("https://smartformulatorpdrwebservice4.azurewebsites.net/deletemicroparams", { params: params1, responseType: 'text'})
  }
  ngOnInit() {
    this.loadpdrno = this.datashare.getpdrno();
    this.loadmicrobiology(this.loadpdrno).subscribe((loadmicrobiologydata) => {
      console.warn("loadmicrobiologydata", loadmicrobiologydata)
      this.datamicro = loadmicrobiologydata
    })
  }


}
