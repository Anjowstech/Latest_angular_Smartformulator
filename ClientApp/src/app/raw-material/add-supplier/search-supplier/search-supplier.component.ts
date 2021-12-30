import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-search-supplier',
  templateUrl: './search-supplier.component.html',
  styleUrls: ['./search-supplier.component.css']
})
export class SearchSupplierComponent implements OnInit {


  supplier_searchdata: any;
  searchitems: any = [];
  SupplierName: string;
  SupplierKey: string;
  SupplierCode: string;
  Case: string='All';
  isLoading = true;

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<SearchSupplierComponent>) { }
  Supplier_search() {
    var operate = this.Case;
    let params1 = new HttpParams().set('Operation', operate);
    return this.http.get("https://smartformulatorsupplierwebservice.azurewebsites.net/SearchSuppliers", { params: params1, })



  }
  setvalues(supplier_search) {
    this.SupplierKey = supplier_search.SupplierKey;
    this.SupplierName = supplier_search.SupplierName;
    this.SupplierCode = supplier_search.SupplierCode;
   
    this.searchitems = [this.SupplierKey, this.SupplierName, this.SupplierCode];
  }

  close() {
    this.searchitems = [this.SupplierKey, this.SupplierName, this.SupplierCode];
    this.dialogRef.close(this.searchitems);

  }
  
  changeappr(event) {
    this.Case = event.target.value
    



      this.Supplier_search().subscribe((cus_search) => {
        console.warn("cus_search", cus_search)
        this.supplier_searchdata = cus_search
      })
    
   }
  applyFilter(filterValue: string) {
    let filterValueLower = filterValue.toLowerCase();
    if (filterValue === '') {
      this.supplier_searchdata 
    } else {
          this.supplier_searchdata = this.supplier_searchdata .filter((customer) =>

        customer.Description.toLowerCase().startwith(filterValueLower));

    }
  }
  ngOnInit() {

    this.Supplier_search().subscribe((cus_search) => {
      this.isLoading = false;
      console.warn("cus_search", cus_search)
      this.supplier_searchdata = cus_search
    })
  }

}
