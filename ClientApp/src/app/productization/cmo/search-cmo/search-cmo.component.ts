import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/formula-lookup/formula-lookup.component';
import { Inject } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';

@Component({
  selector: 'app-search-cmo',
  templateUrl: './search-cmo.component.html',
  styleUrls: ['./search-cmo.component.css']
})
export class SearchCmoComponent implements OnInit {
  loadcmo: any;
  cmoname: any='';
  cmostate: any='';
  cmonumber: any = '';
  street1: any = '';
  street2: any = '';
  city: any = '';
  country: any = '';
  zip: any = '';
  contactnumber: any = '';
  email: any = '';
  notes: any = '';
  searchitems: any = [];
  filterMetadata = { count: 0 };

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<SearchCmoComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private Datashare: DataShareServiceService) { }





  cmo_load() {
    return this.http.get("https://formulaproductization3.azurewebsites.net/loadcmo")
  }

  setvalues(cmo_Details) {

    this.cmoname = cmo_Details.CMOName;
    this.cmonumber = cmo_Details.CMONumber
    this.street1 = cmo_Details.Street1
    this.street2 = cmo_Details.Street2
    this.city = cmo_Details.City
    this.country = cmo_Details.Country
    this.cmostate = cmo_Details.State;
    this.zip = cmo_Details.Zip
    this.contactnumber = cmo_Details.ContactNo
    this.email = cmo_Details.Email
    this.notes = cmo_Details.Notes

    this.searchitems = [
      this.cmoname,
      this.cmonumber,
      this.street1,
      this.street2,
      this.city,
      this.country,
      this.cmostate,
      this.zip,
      this.contactnumber,
      this.email,
      this.notes,
      

    ]

      



  }

  Close() {
    // this.searchitems = [this.formulacodedata, this.formulanamedata, this.lbnotedata]
    this.dialogRef.close(this.searchitems);

  }

  ngOnInit() {
    this.cmo_load().subscribe((cmo_load) => {
      console.warn("cmo_load", cmo_load)
      this.loadcmo = cmo_load
    })
  }

}
