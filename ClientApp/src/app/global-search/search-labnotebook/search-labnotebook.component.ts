import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-search-labnotebook',
  templateUrl: './search-labnotebook.component.html',
  styleUrls: ['./search-labnotebook.component.css']
})
export class SearchLabnotebookComponent implements OnInit {

  dataraw_search: any;
  filterMetadata = { count: 0 };
  formulacodedata: string = '';
  formulanamedata: string = '';
  lbnotedata: string = '';
  formulacodedataval: string = '';
  formulanamedataval: string = '';
  lbnotedataval: string = '';
  getformcod: string = "";
  searchitems: any = [];
  Pdrdata: string = '';
  isLoading = true;
  submissionno: any;
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<SearchLabnotebookComponent>,) { }

  Loadsearchformula() {

    return this.http.get("https://formulalookupwebservice16.azurewebsites.net/Searchformulaload");
  }

  setvaluessingle(raw_search) {

    this.formulacodedataval = raw_search.FormulaCode;
    this.formulanamedataval = raw_search.Description;
    this.lbnotedataval = raw_search.LabRefNo;
    this.Pdrdata = raw_search.PDRNo;
    this.submissionno = raw_search.SubmissionNo;

    this.searchitems = [this.formulacodedata, this.formulanamedata, this.lbnotedata]
  }
  setvalues(raw_search) {
    this.formulacodedata = raw_search.FormulaCode;
    this.formulanamedata = raw_search.Description;
    this.lbnotedata = raw_search.LabRefNo;
    this.Pdrdata = raw_search.PDRNo;
    this.submissionno = raw_search.SubmissionNo;

    this.searchitems = [this.formulacodedata, this.formulanamedata, this.lbnotedata, this.Pdrdata, this.submissionno]
  }
  close() {
    // this.searchitems = [this.formulacodedata, this.formulanamedata, this.lbnotedata]
    this.dialogRef.close(this.searchitems);

  }
  applyFilter(filterValue: string) {
    let filterValueLower = filterValue.toLowerCase();
    if (filterValue === '') {
      this.dataraw_search
    } else {
      this.dataraw_search = this.dataraw_search.filter((formula) =>

        formula.Description.toLowerCase().includes(filterValueLower));

    }
  }

  ngOnInit() {

    this.Loadsearchformula().subscribe((resultraw_search) => {
      this.isLoading = false;
      console.warn("resultraw_search", resultraw_search)
      this.dataraw_search = resultraw_search
    })
  }

}
