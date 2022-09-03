import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { DialogData } from 'src/app/raw-material/raw-material.component';
@Component({
  selector: 'app-search-cas',
  templateUrl: './search-cas.component.html',
  styleUrls: ['./search-cas.component.css']
})
export class SearchCASComponent implements OnInit {
  cassearchdata: any;
  filterMetadata = { count: 0 };
  casno: string;
  descrption: string;
  einecs: string;
  searchcasitems: any;
  cassearchLength: any;
  constructor(private http: HttpClient, public datashare: DataShareServiceService, public dialogRef: MatDialogRef<SearchCASComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }



  CASsearchload() {
    return this.http.get("https://smarformulatorrawmaterialswebservice2.azurewebsites.net/SearchCASdetails");
  }
  setcasdetails(cas_detail) {
    this.casno = cas_detail.CASNo;
    this.descrption = cas_detail.Description;
    this.einecs = cas_detail.EINECSNo;
    this.searchcasitems = [this.casno, this.descrption, this.einecs];
    this.datashare.sendcasdata(this.searchcasitems);
    this.close();
  }
  close() {
    this.searchcasitems = [this.casno, this.descrption, this.einecs];
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
