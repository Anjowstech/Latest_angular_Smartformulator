import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchSupplierComponent } from './search-supplier/search-supplier.component';
import { TermsMasterComponent } from './terms-master/terms-master.component';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  //Searchsupplierpopup() {
  //  //width: '940px', height: '850px', disableClose: true
  //  const dialogConfig = new MatDialogConfig();
  //  dialogConfig.disableClose = true;
  //  dialogConfig.width = '1900%';
  //  const dialogRef = this.dialog.open(SearchSupplierComponent)
  //}
  Searchsupplierpopup(): void {
    
    const dialogRef = this.dialog.open(SearchSupplierComponent, {
      width: '940px', height: '650px', disableClose: true,
    });
  }
  OpenTermsMaster(): void {
    const dialogRef = this.dialog.open(TermsMasterComponent, {
      width: '60%', height: '70%', disableClose: true
    });
  }
  updatesupplier(supplierkey: string, suppliername: string, supplieraddress: string) {
    var a = supplierkey;
    var b = suppliername;
    var c = supplieraddress;

  }
  ngOnInit() {
  }

}
