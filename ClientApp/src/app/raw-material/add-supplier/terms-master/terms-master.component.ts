import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-terms-master',
  templateUrl: './terms-master.component.html',
  styleUrls: ['./terms-master.component.css']
})
export class TermsMasterComponent implements OnInit {
  Termsdata: any;
  TermCode: string;
  Terms: string;
  searchitems: any = [];
  Term_Data: any;
  operate: string;
  oldTerms: string;
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<TermsMasterComponent>) { }
  Salespersondata() {



    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/loadterms");
  }

  setvalues(Termmastersdata) {



    this.TermCode = Termmastersdata.TermCode;
    this.Terms = Termmastersdata.Terms;
    this.oldTerms = Termmastersdata.Terms;



    this.searchitems = [this.TermCode, this.Terms];




  }
  close() {



    this.dialogRef.close(this.searchitems);



  }



  Termsmastersave(termcode: string, termsdata: string) {
    this.operate = "Save";
    this.Terms_saveup(termcode, termsdata, this.operate).subscribe((Term_Details) => {
      console.warn("Term_Details", Term_Details)
      this.Term_Data = Term_Details
    })



  }
  Termsmasterupdate(termcode: string, termsdata: string) {
    this.operate = "Update";
    this.Terms_saveup(termcode, termsdata, this.operate).subscribe((Term_Details) => {
      console.warn("Term_Details", Term_Details)
      this.Term_Data = Term_Details
    })



  }



  Terms_saveup(termcode, termsdata, operate) {



    var Termcode = termcode;
    var Terms = termsdata;
    var oldterms = this.oldTerms;



    let params1 = new HttpParams().set('TermCode', Termcode).set('Terms', Terms).set('oldTerms', oldterms).set('Operation', operate);
    return this.http.get("https://smartformulatorsupplierwebservice.azurewebsites.net/SaveTerms", { params: params1 })
  }



  Termsmasterdelete(termsdata: string) {
    this.Terms_delete(termsdata).subscribe((Term_Details) => {
      console.warn("Term_Details", Term_Details)
      this.Term_Data = Term_Details
    })



  }



  Terms_delete(termsdata) {
    var Terms = termsdata;
    let params1 = new HttpParams().set('Terms', Terms);
    return this.http.get("https://smartformulatorsupplierwebservice.azurewebsites.net/DeleteTerms", { params: params1 })
  }








  ngOnInit() {
    this.Salespersondata().subscribe((Terms_Details) => {
      console.warn("cus_search", Terms_Details)
      this.Termsdata = Terms_Details



    })
  }



}

