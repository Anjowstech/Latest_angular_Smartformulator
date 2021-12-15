import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})

export class SearchCustomerComponent implements OnInit {

  customer_searchdata: any;
  customersearchdata: string;
  searchitems: any = [];
  customerkey: string;
  customername: string;
  customercode: string;
  Customer_quicksave_data: any;
  private dataList: Data[] = [];
 
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<SearchCustomerComponent>) { }
  Customer_search() {

    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/SearchCustomer");
  }
  setvalues(customer_search) {
    this.customerkey = customer_search.CustomerKey;
    this.customername = customer_search.CustomerName;
    this.customercode = customer_search.CustomerCode;
    this.searchitems = [this.customerkey, this.customername, this.customercode];
  }
  setvalues2(customer_searchdata2:any) {
    for (let search of customer_searchdata2) {
      this.dataList.push({
        cust1 : search.customerkey,
        custname1: search.CustomerName,
       
      
      });
    }
   // this.searchitems = [this.customerkey, this.customername, this.customercode];
  }
  close() {

    this.dialogRef.close(this.searchitems);

  }
  applyFilter(filterValue: string) {
    let filterValueLower = filterValue.toLowerCase();
    if (filterValue === '') {
      this.customer_searchdata
    } else {
      this.customer_searchdata = this.customer_searchdata.filter((customer) =>

        customer.Description.toLowerCase().includes(filterValueLower));

    }
  }

  Customer_Quicksave(custkey: string, custnam: string) {
    this.Customer_saveup(custkey, custnam).subscribe((Customer_quicksave) => {
      console.warn("Customer_save", Customer_quicksave)
      this.Customer_quicksave_data = Customer_quicksave
    })
  }
  Customer_saveup(custkey, custnam) {
    var custcode: string = "";
    var cstmrcode: string = custcode;
    var cstmrkey: string = custkey;
    var cstmrname: string = custnam;
    let params1 = new HttpParams().set('CusCode', cstmrcode).set('CusName', cstmrname).set('CustomerKey', cstmrkey).set('operation', "Save");
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/update_save_customer", { params: params1 })
  }

  ngOnInit() {
    this.Customer_search().subscribe((cus_search) => {
      console.warn("cus_search", cus_search)
      this.customer_searchdata = cus_search
      this.setvalues2(this.customer_searchdata);
    })
   
  }
}
export class Data {
  cust1: string;
  custname1: string;


}
