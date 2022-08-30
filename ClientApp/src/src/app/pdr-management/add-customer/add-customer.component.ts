import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchCustomerCustComponent } from 'src/app/pdr-management/add-customer/search-customer-cust/search-customer-cust.component';
import { TermMasterCustComponent } from 'src/app/pdr-management/add-customer/term-master-cust/term-master-cust.component';
import { SalesPersonCustComponent } from 'src/app/pdr-management/add-customer/sales-person-cust/sales-person-cust.component';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  ngOnInit() {
  }
  searchcustomer1(): void {
    const dialogRef = this.dialog.open(SearchCustomerCustComponent, {
      width: '900px', height: '840px', disableClose: true
    });
  }
  termcustomer(): void {
    const dialogRef = this.dialog.open(TermMasterCustComponent, {
      width: '900px', height: '840px', disableClose: true
    });
  }
  salesperson(): void {
    const dialogRef = this.dialog.open(SalesPersonCustComponent , {
      width: '900px', height: '840px', disableClose: true
    });
  }
}
