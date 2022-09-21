import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { QualityControlComponent } from '../../quality-control/quality-control.component';
import { formatDate } from '@angular/common';



@Component({
  selector: 'app-add-qc',
  templateUrl: './add-qc.component.html',
  styleUrls: ['./add-qc.component.css']
})
export class AddQCComponent implements OnInit {
  formulacode: string;
  formulaname: string;
  isLoading = true;
  loadqcunits: any;
  loadqctests: any;
  TESTNAME: string = "";
  testunit: string = "";
  QCTestUnit1: any;
  TestCode1: string;
  qc_save_data: any;
  TestCode: string;
  noofday: string = "";
  remark: string = "";
  note: string = "";
  enddate: string = "";
  startdate: string = "MM/dd/yyyy";
  addfile: string = "";
  Results: string = "";
  approve: string;
  loadqccode: any;
  loadcode: string;
  loadqcunit: string;
  qcdataload: any;
  loadqctest: any;

  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService, @Inject(MAT_DIALOG_DATA) public data: any) { }


  handleFileInput3(files: FileList) {
    var filebrowse = files.item.length;
    this.addfile = files.item(0).name;



  }

  addqc() {
    const dialogRef = this.dialog.open(QualityControlComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      this.QCtest_load().subscribe((QCtest_load) => {
        this.isLoading = false;
        console.warn("QCtest_load", QCtest_load)
        this.loadqctest = QCtest_load
      })
      this.QCtests_load(this.TESTNAME).subscribe((QCtests_load) => {
        this.isLoading = false;
        console.warn("QCtest_load", QCtests_load)
        this.loadqctests = QCtests_load
      })
      
    });




  }

  QCtest_load() {
    return this.http.get("https://formulalookupwebservice11.azurewebsites.net/loadqctest")
  }

  QCtests_load(TESTNAME: string) {
    var catenam: string = TESTNAME;
    let params1 = new HttpParams().set('Description', catenam);
    return this.http.get("https://formulalookupwebservice11.azurewebsites.net/loadqctest", { params: params1 })
  }

  //var val = this.dynamicForm.get('datePicker').value;
  //val = formatDate(val, 'yyyy/MM/dd', 'en');
  //this.dynamicForm.controls['datePicker'].setValue(val);

  //loadunits(event: any) {
  //  this.TESTNAME = event.target.value;

  //}
  clear() {
    this.TESTNAME = "Viscosity ZAHN #3@25C";
    this.unitload(this.TESTNAME).subscribe((loadqcunit) => {
      console.warn("loadqcunit", loadqcunit)
      this.loadqcunits = loadqcunit

      this.loadqcunit = this.loadqcunits[0].QCTestUnit

      this.loadqcunits.forEach(item => {
        if (item.QCTestUnit == this.QCTestUnit1) {
          this.testunit = item.QCTestUnit;

        }
      })

    })



    this.testunit = "Sec";
    this.startdate = new Date().toISOString().substring(0, 10);
    this.enddate = new Date().toISOString().substring(0, 10);
    this.noofday = "1";
    this.Results = "";
    this.remark = "";
    this.note = "";
    this.addfile = "";


  }
  loadunits(event: any) {
    this.TESTNAME = event.target.value;

    this.unitload(this.TESTNAME).subscribe((loadqcunit) => {
      console.warn("loadqcunit", loadqcunit)
      this.loadqcunits = loadqcunit

      this.loadqcunit = this.loadqcunits[0].QCTestUnit

      this.loadqcunits.forEach(item => {
        if (item.QCTestUnit == this.QCTestUnit1) {
          this.testunit = item.QCTestUnit;

        }
      })

    })

    this.codeload(this.TESTNAME).subscribe((loadcode) => {
      console.warn("loadcode", loadcode)
      this.loadqccode = loadcode


      this.loadcode = this.loadqccode[0].TestCode

      this.loadqccode.forEach(item => {
        if (item.TestCode == this.TestCode1) {
          this.TestCode = item.TestCode;

        }
      })

    })

  }

  codeload(TESTNAME: string) {
    var catena: string = TESTNAME;
    let params1 = new HttpParams().set('Description', catena);
    return this.http.get("https://formulalookupwebservice15.azurewebsites.net/loadqcCODE", { params: params1 })
  }



  unitload(TESTNAME: string) {
    var catename: string = TESTNAME;
    let params1 = new HttpParams().set('Description', catename);
    return this.http.get("https://formulalookupwebservice11.azurewebsites.net/loadqcSELECT", { params: params1 })
  }

  Saveqc() {
    if (this.TESTNAME == "" ||this.TESTNAME == "N/A" || this.TESTNAME == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter Test Name' } });

    }

    else if (this.startdate == "" || this.startdate == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter Start Date' } });

    }
    else if (this.enddate == "" || this.enddate == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter End Date' } });

    }
    else if (this.noofday == "" || this.noofday == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter Number Of Days' } });

    }
    else if (this.noofday == "0") {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Number Of Days cannot be 0' } });

    }
    else if (this.startdate>this.enddate) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Start Date should be less than End Date' } });

    }

    else {

      this.saveqcload().subscribe((QCsave) => {
        console.warn("QCsave", QCsave)
        this.qc_save_data = QCsave

        if (this.qc_save_data == "Quality control standards saved successfully.") {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'saved successfully' } });

        }
      })
    }


  }

  //Clearload() {

  //  this.qctabload(this.formulacode).subscribe((qcdetailslload) => {
  //    console.warn("qcdetailslload", qcdetailslload)
  //    this.qcdataload = qcdetailslload

  //  })
  //}
  //qctabload(formulacode: string) {
  //  var Formula = formulacode;
  //  let params1 = new HttpParams().set('FormulaCode', Formula);
  //  return this.http.get("https://formulalookupwebservice15.azurewebsites.net/loadQCTABLE", { params: params1, })

  //}

  saveqcload() {
    var operat: string = "save";
    var formulacodes: string = this.formulacode;
    var sqqno: string = "";
    var updtedby: string = "";
    var testcode = this.loadcode;
    var addedby: string = "admin";
    var unit: string = this.loadqcunit;
    var result: string = this.Results;
    var remark: string = this.remark;
    var notes: string = this.note;
    var numbrofdays: string = this.noofday;
    var start: string = this.startdate;
    var end: string = this.enddate;
    var files: string = this.addfile;
    var tsetname: string = this.TESTNAME;
    var usrname: string = "Admin";

    let params1 = new HttpParams().set('operation', operat).set('FormulaCode', formulacodes).set('SeqNo', sqqno).set('QCTest', testcode).set('UpdatedBy', updtedby).set('AddedBy', addedby).set('Unit', unit).set('Results', result).set('Remarks', remark).set('Note', notes).set('noOfDays', numbrofdays).set('StartDate', start).set('EndDate', end).set('SOPFile', files).set('testname', tsetname).set('username', usrname);
    return this.http.get("https://formulalookupwebservice11.azurewebsites.net/Saveupdate", { params: params1, responseType: 'text' })


  }




  ngOnInit() {
    this.formulacode = this.data.displaydata[0];
    this.formulaname = this.data.displaydata[1];

    this.startdate = new Date().toISOString().substring(0, 10);
    this.enddate = new Date().toISOString().substring(0, 10);
    this.noofday = "1";

  

    this.QCtests_load(this.TESTNAME).subscribe((QCtests_load) => {
      this.isLoading = false;
      console.warn("QCtest_load", QCtests_load)
      this.loadqctests = QCtests_load
    })
  }





    //this.formulacode = this.data.displaydata1[0];
    //this.formulaname = this.data.displaydata1[1];
    //this.TESTNAME = this.data.displaydata1[2];
    //this.startdate = this.data.displaydata1[3];
    //this.startdate = this.data.displaydata1[4];
    //this.noofday = this.data.displaydata1[5];
    //this.enddate = this.data.displaydata1[6];
    //this.Results = this.data.displaydata1[7];
    //this.approve = this.data.displaydata1[8];


}
