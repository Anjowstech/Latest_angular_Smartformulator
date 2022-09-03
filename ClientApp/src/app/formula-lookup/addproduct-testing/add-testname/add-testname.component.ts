import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
//import { AddTestnameComponent } from 'src/app/formula-lookup/addproduct-testing/add-testname/add-testname.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageBoxComponent } from '../../../message-box/message-box.component';
@Component({
  selector: 'app-add-testname',
  templateUrl: './add-testname.component.html',
  styleUrls: ['./add-testname.component.css']
})
export class AddTestnameComponent implements OnInit {
  testname_data: any;
  testname: string;

  test_data_load: any;
  constructor(public dialog: MatDialog, private http: HttpClient) { }
  //testnamesave(): void {
  //  const dialogRef = this.dialog.open(AddTestnameComponent, {
  //    width: '80%', height: '90%', disableClose: true
  //  });
  //}

  testnamesave() {
    this.testnamesaveup().subscribe((Savetestname) => {
      console.warn("Savetestname", Savetestname)
      this.testname_data = Savetestname

      if (this.testname_data == "Inserted") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Testname' + this.testname + ' is saved successfully.' } });
      }

      else {
        (this.testname_data == "testname")
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Test name already exists!' } });
      }

    })
  }

  testnamesaveup() {
    var test: string = this.testname;
    let params1 = new HttpParams().set('testname', test);
    return this.http.get("https://formulalookupwebservice9.azurewebsites.net/BtnTestsave", { params: params1, responseType: 'text' })
  }

  cleardata() {
    this.testname = '';
  }
  ngOnInit() {
  }

}
