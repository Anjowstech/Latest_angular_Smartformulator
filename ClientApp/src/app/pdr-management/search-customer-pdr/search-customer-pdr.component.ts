import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-search-customer-pdr',
  templateUrl: './search-customer-pdr.component.html',
  styleUrls: ['./search-customer-pdr.component.css']
})
export class SearchCustomerPdrComponent implements OnInit {
  search_cust_pdr_data: any;
  customerkey: string;
  customername: string;
  customercode: string;
  searchitems_pdr: any = [];
  constructor(public dialogRef: MatDialogRef<SearchCustomerPdrComponent>, private http: HttpClient) { }
  search_customer_pdr(){
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/SearchCustomer");
  }
  setvalues(customer_search_pdr) {
    this.customerkey = customer_search_pdr.CustomerKey;
    this.customername = customer_search_pdr.CustomerName;
    this.customercode = customer_search_pdr.CustomerCode;
    this.searchitems_pdr = [this.customerkey, this.customername, this.customercode];
  }
  close() {

    this.dialogRef.close(this.searchitems_pdr);

  }
  ngOnInit() {
    this.search_customer_pdr().subscribe((search_cust_pdr) => {
      console.warn("search_cust_pdr", search_cust_pdr)
      this.search_cust_pdr_data = search_cust_pdr
    })
  }

}
