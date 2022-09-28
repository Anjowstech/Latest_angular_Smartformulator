import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddFunctionComponent } from '../add-function/add-function.component';
import { SearchCASComponent } from './search-cas/search-cas.component';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DialogData } from 'src/app/raw-material/raw-material.component';
import { MessageBoxComponent } from '../../message-box/message-box.component';
@Component({
  selector: 'app-add-cas-details',
  templateUrl: './add-cas-details.component.html',
  styleUrls: ['./add-cas-details.component.css']
})
export class AddCASDetailsComponent implements OnInit {
  asdetailsdataload: string[];
  casno: string;
  description: string;
  einecs: string;
  operate: string;
  CAS_Data: any;
  loaditemcode: string;
  constructor(public dialog: MatDialog, private http: HttpClient, private datashare: DataShareServiceService, public dialogRef: MatDialogRef<AddCASDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }



  OpenSearchCAS(): void {
    const dialogRef = this.dialog.open(SearchCASComponent, {
      width: '60%', height: '70%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.casno = result[0];
      this.description = result[1];
      this.einecs = result[2];

    });

  }
  blurcasno(event: any) {
    this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Search the value from database using the search button.' } });
    this.casno = '';
  }
  blurdescription(event: any) {
    this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Search the value from database using the search button.' } });
    this.description = '';
  }
  CASsave(casnumber: string, einecno: string) {
    this.loaditemcode = this.datashare.getitemcode();
    this.CASaveup(casnumber, einecno).subscribe((cas_Details) => {
      console.warn("cas_Details", cas_Details)
      this.CAS_Data = cas_Details

      if (this.CAS_Data == "inserted") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'CAS details saved successfully.' } });
      }
    })
  }

  CASaveup(casno, einecs) {
    var itemcode = this.loaditemcode;
    var Casno = casno;
    var Einecs = einecs;
    let params1 = new HttpParams().set('ItemCode', itemcode).set('CASNo', Casno).set('EINECSNo', Einecs);
    return this.http.get("https://smartformulatorrawmaterialwebservice4.azurewebsites.net/CASsave", { params: params1, responseType: 'text' })
  }
  close() {
    this.dialogRef.close();
  }



  //CASsaveupdate(casnumber: string, einecno: string) {
  // this.loaditemcode = this.datashare.getitemcode();
  // var itemcode = this.loaditemcode;
  // this.operate = "update";
  // this.CASaveup(itemcode, casnumber, einecno).subscribe((cas_Details) => {
  // console.warn("cas_Details", cas_Details)
  // this.CAS_Data = cas_Details
  // })
  //}
  ngOnInit() {

    this.loaditemcode = this.datashare.getitemcode();

  }
}
