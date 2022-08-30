import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddQctestComponent } from './add-qctest/add-qctest.component';
import { AddQcunitComponent } from './add-qcunit/add-qcunit.component';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { MessageBoxYesnoComponent } from '../message-box-yesno/message-box-yesno.component';

@Component({
  selector: 'app-quality-control',
  templateUrl: './quality-control.component.html',
  styleUrls: ['./quality-control.component.css']
})
export class QualityControlComponent implements OnInit {

  isLoading = true;
  loadqcunits: any;
  loadqctest: any;
  unitname: any;
  unit_delete_data: string;
  qcunit: any;
  qctest: any;
  test_delete_data: string;
  lookupdate4data: string;
  unitdata: any;
  testdata: any;


  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService) { }


  QCUnits_load() {
    return this.http.get("https://formulalookupwebservice11.azurewebsites.net/loadqcunit")
  }


  QCtest_load() {
    return this.http.get("https://formulalookupwebservice11.azurewebsites.net/loadqctest")
  }

  deleteUNIT(qcunit_Details) {
    let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '20%', height: '15%', data: { displaydatagrid: 'Delete QC Unit?' } });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ${result}');
      this.unitdata = result;

      if (this.unitdata == "false") { }

      else {
        this.qcunit = qcunit_Details.QCUnitName
        this.unitdelete().subscribe((QCUnitDelete) => {
          console.warn("QCUnitDelete", QCUnitDelete)
          this.unit_delete_data = QCUnitDelete

          if (this.unit_delete_data == "QC Unit is assigned to a QC Test. So cannot be deleted") {
            this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'QC Unit is assigned to a QC Test. So cannot be deleted' } });
          }
          else if (this.unit_delete_data == "QC Unit is deleted successfully.") {
            this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'QC Unit is deleted successfully.' } });
          }

          this.QCUnits_load().subscribe((QCUnits_load) => {
            this.isLoading = false;
            console.warn("QCUnits_load", QCUnits_load)
            this.loadqcunits = QCUnits_load

          })
        })
      }
    });


  }

  deleteTEST(qctest_Details) {
    let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '20%', height: '15%', data: { displaydatagrid: 'Delete QC Test?' } });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ${result}');
      this.testdata = result;

      if (this.testdata == "false") { }

      else {


        this.qctest = qctest_Details.TestCode
        this.testdelete().subscribe((QCTestDelete) => {
          console.warn("QCTestDelete", QCTestDelete)
          this.test_delete_data = QCTestDelete

          if (this.test_delete_data == "QC Test is used in QC Standards in Formula Lookup. So cannot be Deleted") {
            this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'QC Test is used in QC Standards in Formula Lookup. So cannot be Deleted' } });
          }

          else if (this.test_delete_data == "QC Test is deleted successfully") {
            this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'QC Test is deleted successfully' } });
          }

          this.QCtest_load().subscribe((QCtest_load) => {
            this.isLoading = false;
            console.warn("QCtest_load", QCtest_load)
            this.loadqctest = QCtest_load
          })
        })
      }
    });

  }
  testdelete() {
    var testsname = this.qctest;

    let params1 = new HttpParams().set('TestCode', testsname);
    return this.http.get("https://formulalookupwebservice11.azurewebsites.net/Deleteqctest", { params: params1, responseType: 'text' })
  }


  setvaluesform(qcunit_Details) {
    this.qcunit = qcunit_Details.QCUnitName

  }


  unitdelete() {
    var unitsname = this.qcunit;

    let params1 = new HttpParams().set('QCUnitName', unitsname);
    return this.http.get("https://formulalookupwebservice11.azurewebsites.net/Deleteqcunit", { params: params1, responseType: 'text' })
  }

  addQCtest(): void {
    const dialogRef = this.dialog.open(AddQctestComponent, {
      width: '60%', height: '40%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);


      this.QCtest_load().subscribe((QCtest_load) => {
        this.isLoading = false;
        console.warn("QCtest_load", QCtest_load)
        this.loadqctest = QCtest_load
      })

    });
  }
  addQCunit(): void {
    const dialogRef = this.dialog.open(AddQcunitComponent, {
      width: '50%', height: '30%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);


      this.QCUnits_load().subscribe((QCUnits_load) => {
        this.isLoading = false;
        console.warn("QCUnits_load", QCUnits_load)
        this.loadqcunits = QCUnits_load

      })
    });
  }

  ngOnInit() {
    this.QCUnits_load().subscribe((QCUnits_load) => {
      this.isLoading = false;
      console.warn("QCUnits_load", QCUnits_load)
      this.loadqcunits = QCUnits_load

    })


    this.QCtest_load().subscribe((QCtest_load) => {
      this.isLoading = false;
      console.warn("QCtest_load", QCtest_load)
      this.loadqctest = QCtest_load
    })
  }

}
