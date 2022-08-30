import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-function-search',
  templateUrl: './function-search.component.html',
  styleUrls: ['./function-search.component.css']
})
export class FunctionSearchComponent implements OnInit {
  function_searchdata: any;
  FunctionCode: string;
  FunctionName: string;
  searchitems: any = [];



  constructor(private http: HttpClient, public dialogRef: MatDialogRef<FunctionSearchComponent>) { }



  Function_search() {



    return this.http.get("https://smartformulatorrawmaterialwebservice4.azurewebsites.net/loadFunction")



  }
  setvalues(functionsearch) {
    this.FunctionCode = functionsearch.FunctionCode;
    this.FunctionName = functionsearch.FunctionName;



    this.searchitems = [this.FunctionCode, this.FunctionName];
  }



  close() {
    this.searchitems = [this.FunctionCode, this.FunctionName];
    this.dialogRef.close(this.searchitems);



  }
  ngOnInit() {



    this.Function_search().subscribe((Fun_search) => {
      console.warn("Fun_search", Fun_search)
      this.function_searchdata = Fun_search
    })
  }
}
