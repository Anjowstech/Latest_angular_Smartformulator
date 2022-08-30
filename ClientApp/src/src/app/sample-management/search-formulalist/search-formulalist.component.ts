import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/formula-lookup/formula-lookup.component';
import { Inject } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';

@Component({
  selector: 'app-search-formulalist',
  templateUrl: './search-formulalist.component.html',
  styleUrls: ['./search-formulalist.component.css']
})
export class SearchFormulalistComponent implements OnInit {
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
  PDRno: string = '';
  isLoading = true;
  PDRNo: string = '';
  displaydata: any;


  constructor(private http: HttpClient, public dialogRef: MatDialogRef<SearchFormulalistComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private Datashare: DataShareServiceService, public dialog: MatDialog,private datashare: DataShareServiceService) { }

  Loadsearchformula(PDRno:string) {
   // "2011-1112"

    var Pdrdata: string = this.PDRno;
    let params1 = new HttpParams().set('PDRNo', Pdrdata);

    return this.http.get("https://samplemanagementloadwebservice.azurewebsites.net/SearchFormulaListing", { params: params1 });
  }
 

  setvalues(raw_search) {
    this.formulacodedata = raw_search.FormulaCode;
    this.formulanamedata = raw_search.Description;
    this.lbnotedata = raw_search.LabRefNo;
   // this.Pdrdata = raw_search.PDRno;
    this.searchitems = [this.formulacodedata, this.formulanamedata, this.lbnotedata ]
  }
  close() {
   
    this.dialogRef.close(this.searchitems);

  }

  ngOnInit() {
    this.PDRno = this.data.displaydata[0];
    this.Loadsearchformula(this.PDRno).subscribe((resultraw_search) => {
      this.isLoading = false;
      console.warn("resultraw_search", resultraw_search)
      this.dataraw_search = resultraw_search
    })
  }

}
