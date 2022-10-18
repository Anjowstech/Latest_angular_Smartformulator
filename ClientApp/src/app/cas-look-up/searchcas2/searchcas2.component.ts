import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataShareServiceService } from 'src/app/data-share-service.service';

@Component({
  selector: 'app-searchcas2',
  templateUrl: './searchcas2.component.html',
  styleUrls: ['./searchcas2.component.css']
})
export class Searchcas2Component implements OnInit {
  cassearchdata: any;
  filterMetadata = { count: 0 };
  casno: string;
  descrption: string;
  einecs: string;
  searchcasitems: any;
  cassearchLength: any;
  synonym: string;
  synonym1: string;
  synonym2: string;
  synonym3: string;
  synonym4: string;
  synonym5: string;
  constructor(private http: HttpClient, public datashare: DataShareServiceService, public dialogRef: MatDialogRef<Searchcas2Component>,) { }

  CASsearchload() {
    return this.http.get("https://smartformulatorrawmaterialvolumepricingwebservice.azurewebsites.net/cassearch2");
  }
  setcasdetails(cas_detail) {
    this.casno = cas_detail.CASNo;
    this.descrption = cas_detail.Description;
    this.einecs = cas_detail.EINECSNo;
    this.synonym = cas_detail.synonyms;
    this.synonym1 = cas_detail.synonyms1;
    this.synonym2 = cas_detail.synonyms2;
    this.synonym3 = cas_detail.synonyms3;
    this.synonym4 = cas_detail.synonyms4;
    this.synonym5 = cas_detail.synonyms5;
    this.searchcasitems = [this.casno, this.descrption, this.einecs, this.synonym, this.synonym1, this.synonym2, this.synonym3, this.synonym4, this.synonym5];
    this.datashare.sendcasdata(this.searchcasitems);
    this.close();
  }
  close() {
    this.searchcasitems = [this.casno, this.descrption, this.einecs, this.synonym, this.synonym1, this.synonym2, this.synonym3, this.synonym4, this.synonym5];
    //var selectedfunctionListdata: [string, string] = [finalcode, finalname];
    this.dialogRef.close(this.searchcasitems);
  }



  ngOnInit() {
    this.CASsearchload().subscribe((casserachload) => {
      console.warn("casload", casserachload)
      this.cassearchdata = casserachload
      this.cassearchLength = this.cassearchdata.length
    })
  }


}
