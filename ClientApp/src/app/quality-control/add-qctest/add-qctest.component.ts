import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';

@Component({
  selector: 'app-add-qctest',
  templateUrl: './add-qctest.component.html',
  styleUrls: ['./add-qctest.component.css']
})
export class AddQctestComponent implements OnInit {
  isLoading = true;
  loadqcunits: any;
  loadqctest: any;
  test_save_data: string;
  qctestcode: string = '';
  testname: string = '';
  Defaultqcunit: string;
  Datashare: any;

  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService) { }

  QCUnits_load() {
    return this.http.get("https://formulalookupwebservice11.azurewebsites.net/loadqcunit")
  }

  savettest(qtc: string, qtn: string, def: string) {

    if (this.qctestcode == "") {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter QC test code' } });
    }

    else if (this.testname == "") {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter QC test name' } });
    }

    this.testsave(qtc, qtn, def).subscribe((QCTestsave) => {
      console.warn("QCTestsave", QCTestsave)
      this.test_save_data = QCTestsave


      if (this.test_save_data == "QC test code already exists. Choose another one.") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'QC test code already exists. Choose another one.' } });
      }
      else if (this.test_save_data == "QC test name already exists. Choose another one") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'QC test name already exists. Choose another one' } });
      }
      else if (this.test_save_data == "Inserted") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'saved successfully' } });
      }
    })
  }
  testsave(qtc: any, qtn: any, def: any) {
    var testcode = qtc;
    var testname = qtn;
    var defaultuni = def;
    let params1 = new HttpParams().set('TestCode', testcode).set('Description', testname).set('QCTestUnit', defaultuni);
    return this.http.get("https://formulalookupwebservice11.azurewebsites.net/saveqctest", { params: params1, responseType: 'text' })
  }
  clearTEST() {
    this.qctestcode = '';
    this.testname = '';
    this.Defaultqcunit = 'sec';

  }


  ngOnInit() {
    this.QCUnits_load().subscribe((QCUnits_load) => {
      this.isLoading = false;
      console.warn("QCUnits_load", QCUnits_load)
      this.loadqcunits = QCUnits_load

    })

  }

}
