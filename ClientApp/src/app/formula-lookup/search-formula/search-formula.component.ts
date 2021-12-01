import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/formula-lookup/formula-lookup.component';
import { Inject } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';

@Component({
  selector: 'app-search-formula',
  templateUrl: './search-formula.component.html',
  styleUrls: ['./search-formula.component.css']
})
export class SearchFormulaComponent implements OnInit {
  dataraw_search: any;
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
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<SearchFormulaComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private Datashare: DataShareServiceService) { }

  Loadsearchformula() {

    return this.http.get("https://searchformulawebservice.azurewebsites.net/Searchformula");
  }
 
  setvaluessingle(raw_search) {
    
      this.formulacodedataval = raw_search.FormulaCode;
      this.formulanamedataval = raw_search.Description;
      this.lbnotedataval = raw_search.LabRefNo;
    this.Pdrdata = raw_search.PDRNo;
      this.searchitems = [this.formulacodedata, this.formulanamedata, this.lbnotedata]
  }
  setvalues(raw_search) {
    this.formulacodedata = raw_search.FormulaCode;
    this.formulanamedata = raw_search.Description;
    this.lbnotedata = raw_search.LabRefNo;
    this.Pdrdata = raw_search.PDRNo;
    this.searchitems = [this.formulacodedata, this.formulanamedata, this.lbnotedata, this.Pdrdata]
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
