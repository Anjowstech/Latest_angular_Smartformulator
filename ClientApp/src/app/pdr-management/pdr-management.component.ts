import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchProjectPdrComponent } from 'src/app/pdr-management/search-project-pdr/search-project-pdr.component';
import { SearchCustomerPdrComponent } from 'src/app/pdr-management/search-customer-pdr/search-customer-pdr.component';
@Component({
  selector: 'app-pdr-management',
  templateUrl: './pdr-management.component.html',
  styleUrls: ['./pdr-management.component.css']
})
export class PdrManagementComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  opensearchprojectpdr(): void {
    const dialogRef = this.dialog.open(SearchProjectPdrComponent , {
      width: '900px', height: '840px', disableClose: true
    });
  }
  opencustomersearchpdr(): void {
    const dialogRef = this.dialog.open(SearchCustomerPdrComponent, {
      width: '900px', height: '840px', disableClose: true
    });
  }
  //openDialogpdr() {
  //  const dialogConfig = new MatDialogConfig();
  //  dialogConfig.disableClose = true;
  //  dialogConfig.width = '900%';

  //  const dialogRef = this.dialog.open(SearchProjectPdrComponent )
  //}
  //openDialogpdr() {

  //  const dialogConfig = new MatDialogConfig();

  //  dialogConfig.disableClose = true;
  //  dialogConfig.autoFocus = true;

  //  this.dialog.open(SearchProjectPdrComponent, dialogConfig);
  //}
  ngOnInit() {
  }
}

