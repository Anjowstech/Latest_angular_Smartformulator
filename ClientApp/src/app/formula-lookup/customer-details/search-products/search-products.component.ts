import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {
  dataloadsearchproducts: any;
  filterMetadata = { count: 0 };
  Productno: string = '';
  ProductName: string = '';
  Fillsize: string = '';
  Formulano: string = '';
  Formulaname: string = '';
  ProductCode: string = '';
  prod: string;
  formu: string;
  produname: string;
  formuname: string;
  searchitems: any = [];
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<SearchProductsComponent>) { }
  setvalues(raw_cate_search) {
    this.ProductCode = raw_cate_search.ProductCode;
    this.Productno = raw_cate_search.Productno;
    this.ProductName = raw_cate_search.ProductName;
    this.Fillsize = raw_cate_search.Fillsize;
    this.Formulano = raw_cate_search.Formulano;
    this.Formulaname = raw_cate_search.Formulaname;

    this.searchitems = [this.ProductCode, this.Productno, this.ProductName, this.Fillsize, this.Formulano, this.Formulaname];
    // declare variable in component.
  }
  close() {
    this.searchitems = [this.ProductCode, this.Productno, this.ProductName, this.Fillsize, this.Formulano, this.Formulaname];
    //var selectedfunctionListdata: [string, string] = [finalcode, finalname];
    this.dialogRef.close(this.searchitems)



  }
  loadfunction() {
    return this.http.get("https://smartformulatorpdrwebservice5.azurewebsites.net/loadproductsearch");
  }
  ngOnInit() {
    this.loadfunction().subscribe((loadfuncsearch) => {
      console.warn("loadproductsearch", loadfuncsearch)
      this.dataloadsearchproducts = loadfuncsearch
    })


  }

}
