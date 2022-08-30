import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { QualityControlComponent } from '../../quality-control/quality-control.component';
import { AddQCComponent } from '../add-qc/add-qc.component';
import { MessageBoxYesnoComponent } from '../../message-box-yesno/message-box-yesno.component';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-update-qc',
  templateUrl: './update-qc.component.html',
  styleUrls: ['./update-qc.component.css']
})
export class UpdateQcComponent implements OnInit {
  formulacode: string;
  formulaname: string;
  isLoading = true;
  loadqcunits: any;
  loadqctests: any;
  TESTNAME: string;
  testunit: string;
  QCTestUnit1: any;
  TestCode1: string;
  qc_save_data: any;
  TestCode: string;
  noofday: string = "";
  remark: string = "";
  note: string = "";
  enddate: string = "";
  startdate: string;
  addfile: string = "";
  Results: string = "";
  approve: string;
  loadqccode: any;
  loadcode: string;
  loadqcunit: string;
  qcdataload: any;
  qc_update_data: any;
  qc_Delete_data: any;
  deletedata: any;

  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  addqc() {
    const dialogRef = this.dialog.open(QualityControlComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    });
  }

  //openapprove(): void {
  //  const dialogRef = this.dialog.open(ApproveQcComponent, {
  //    width: '60%', height: '80%', disableClose: true
  //  });
  //}
  Updateqc() {

    this.updateqcload().subscribe((QCupdate) => {
      console.warn("QCupdate", QCupdate)
      this.qc_update_data = QCupdate

      if (this.qc_update_data == "Quality control standards updated successfully.") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Updated successfully' } });

      }
    })


  }

  updateqcload() {
    var operat: string = "update";
    var formulacodes: string = this.formulacode;
    var sqqno: string = this.data.displaydata[7];
    var updtedby: string = "admin";
    var result: string = this.Results;
    var remark: string = this.remark;
    var notes: string = this.note;
    var numbrofdays: string = this.noofday;
    var start: string = this.startdate;
    var end: string = this.enddate;
    var files: string = this.addfile;
    var tsetname: string = this.data.displaydata[2];
    var usrname: string = "Admin";

    let params1 = new HttpParams().set('operation', operat).set('FormulaCode', formulacodes).set('SeqNo', sqqno).set('UpdatedBy', updtedby).set('Results', result).set('Remarks', remark).set('Note', notes).set('noOfDays', numbrofdays).set('StartDate', start).set('EndDate', end).set('SOPFile', files).set('testname', tsetname).set('username', usrname);
    return this.http.get("https://formulalookupwebservice11.azurewebsites.net/Saveupdate", { params: params1, responseType: 'text' })
  }

  DELETEqc() {
    let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '30%', height: '15%', data: { displaydatagrid: 'This will delete the quality control standard. Do you really want to delete this quality control standard?' } });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ${result}');
      this.deletedata = result;

      if (this.deletedata == "false") { }

      else {

        this.deleteqcload().subscribe((QCdelete) => {
          console.warn("QCdelete", QCdelete)
          this.qc_Delete_data = QCdelete

          if (this.qc_Delete_data == "Quality control standards deleted successfully.") {
            this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Deleted successfully' } });

          }
        })

      }
    });

  }
  deleteqcload() {
    var formulacodesD: string = this.formulacode;
    var sqqnoD: string = this.data.displaydata[7];
    var desctask: string = this.data.displaydata[2];
    var tstname: string = this.data.displaydata[2];
    var usrnam: string = "Admin";

    let params1 = new HttpParams().set('FormulaCode', formulacodesD).set('seqNo', sqqnoD).set('DescriptionTask', desctask).set('testname', tstname).set('username', usrnam);
    return this.http.get("https://formulalookupwebservice15.azurewebsites.net/DELETEQCTAB", { params: params1, responseType: 'text' })

  }





  opensave(): void {
    var billdata: any = [this.formulacode, this.formulaname]
    const dialogRef = this.dialog.open(AddQCComponent, {
      width: '80%', height: '90%', data: { displaydata: billdata }, disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);


      this.qctabload(this.formulacode).subscribe((qcdetailslload) => {
        console.warn("qcdetailslload", qcdetailslload)
        this.qcdataload = qcdetailslload
      })

    });
  }
  qctabload(formulacode: string) {
    var Formula = formulacode;
    let params1 = new HttpParams().set('FormulaCode', Formula);
    return this.http.get("https://formulalookupwebservice15.azurewebsites.net/loadQCTABLE", { params: params1, })

  }

  ngOnInit() {
    this.formulacode = this.data.displaydata[0];
    this.formulaname = this.data.displaydata[1];
    this.TESTNAME = this.data.displaydata[2];
    this.noofday = this.data.displaydata[3];
    this.startdate = this.data.displaydata[4];
    this.startdate = formatDate(new Date(this.startdate), 'yyyy-MM-dd', 'en-US');
    this.enddate = this.data.displaydata[5];
    this.enddate = formatDate(new Date(this.enddate), 'yyyy-MM-dd', 'en-US');
    this.Results = this.data.displaydata[6];
    this.testunit = this.data.displaydata[8];
    this.remark = this.data.displaydata[13];
    this.note = this.data.displaydata[14];
    this.addfile = this.data.displaydata[16];



  }

}
