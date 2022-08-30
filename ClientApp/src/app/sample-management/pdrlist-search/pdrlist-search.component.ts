import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DialogData } from 'src/app/formula-lookup/formula-lookup.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-pdrlist-search',
  templateUrl: './pdrlist-search.component.html',
  styleUrls: ['./pdrlist-search.component.css']
})
export class PDRListSearchComponent implements OnInit {
  dataresultSearchProductListing: any;
  filterMetadata = { count: 0 };

  Pdrdata: string = ''; 
  Project: string = '';
  CusNamedata: string = '';
  CustomerCode: string = '';
  PDRdt: string = '';
  searchitems: any = [];
  isLoading = true;
    countrecords: any;
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<PDRListSearchComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  setvalues(ProductList_search) {
    this.Pdrdata = ProductList_search.PDRNo;
    this.Project = ProductList_search.ProjectName;
    this.CusNamedata =  ProductList_search.CusName;
    this.CustomerCode = ProductList_search.CusCode;
    this.PDRdt = ProductList_search.PDRDate;
    this.searchitems = [this.Pdrdata, this.Project, this.CusNamedata, this.CustomerCode, this.PDRdt]
  }
  close() {

    this.dialogRef.close(this.searchitems);

  }
  applyFilter(filterValue: string) {
    let filterValueLower = filterValue.toLowerCase();
    if (filterValue === '') {
      this.dataresultSearchProductListing
    } else {
      this.dataresultSearchProductListing = this.dataresultSearchProductListing.filter((product) =>

        product.Description.toLowerCase().includes(filterValueLower));

    }
  }
  LoadsearchProductListing() {

    return this.http.get("https://samplemanagementloadwebservice.azurewebsites.net/SearchProductListing");
  }
  ngOnInit() {
    this.LoadsearchProductListing().subscribe((resultSearchProductListing) => {
      this.isLoading = false;
      console.warn("resultSearchProductListing", resultSearchProductListing)
      this.dataresultSearchProductListing = resultSearchProductListing
      this.countrecords = this.dataresultSearchProductListing.length

    })
  }

}


