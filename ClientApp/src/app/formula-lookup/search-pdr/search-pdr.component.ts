import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DialogData } from 'src/app/formula-lookup/formula-lookup.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-search-pdr',
  templateUrl: './search-pdr.component.html',
  styleUrls: ['./search-pdr.component.css']
})
export class SearchPdrComponent implements OnInit {
  dataresultsearchpdr: any;
  formulacodedata: string = '';
  Pdrdata: string = '';
  Formulaname: string = '';
  searchitems: any = [];
  isLoading = true;
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<SearchPdrComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  setvalues(pdr_search) {
    this.formulacodedata = pdr_search.FormulaCode;
    this.Pdrdata = pdr_search.PDRNo;
    this.Formulaname = pdr_search.FormulaName;

    this.searchitems = [this.formulacodedata, this.Pdrdata, this.Formulaname]
  }
  close() {
    // this.searchitems = [this.formulacodedata, this.formulanamedata, this.lbnotedata]
    this.dialogRef.close(this.searchitems);

  }
  Loadsearchpdr() {

    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/SearchPDR");
  }
  ngOnInit() {
    this.Loadsearchpdr().subscribe((resultsearchpdr) => {
      this.isLoading = false;
      console.warn("resultsearchpdr", resultsearchpdr)
      this.dataresultsearchpdr = resultsearchpdr
    })
  }

}
