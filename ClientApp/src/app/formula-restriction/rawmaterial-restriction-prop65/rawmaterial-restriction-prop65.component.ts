import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-rawmaterial-restriction-prop65',
  templateUrl: './rawmaterial-restriction-prop65.component.html',
  styleUrls: ['./rawmaterial-restriction-prop65.component.css']
})
export class RawmaterialRestrictionProp65Component implements OnInit {
  restrictioncountryname: string = '';
  Restrictiondatalist: RestrictionData[][] = [];
  restriction_save_up_data: any;
  Oper: string = '';
  cadirectdetails: string[] = [];
  basedetails: string[] = [];
  inciid: string;
  inciname: string;
  toxicity: string;
  listing: string;
  cadate: string;
  nsdl: string;
  internalcomments: string;
  username: string;
  operation: string;
  country: string;
  IngredientCodedata: string;
  sourceinfo: string;
  internalreg: string;
  sourceregdoc: string;
  restrictionformulaname: string;
  isChanged: string;
  constructor(private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }



  Restriction_SaveUpdate() {
    // this.Oper = this.data.displaydata1;
    this.Restrictiondatalist[0] = ([{

      txtInciid: this.inciid,
      txtPercentage: '',
      txtCountry: this.operation,
      txtFieldofAppln: '',
      txtInciName: this.restrictionformulaname,
      IngredientCode: this.IngredientCodedata,
      username: '',
      txtJournal: '',
      txtIngredientCode: this.IngredientCodedata,
      txtMaximum: '',
      txtOtherLimitations: '',
      txtConditions: '',
      txtSourceinfo: this.sourceinfo,  //
      txtmaxpercentage: '',
      txtRegNotes: '',
      txtDocument: '',
      txtInternalComments: '',
      txtTypeofToxicity: this.toxicity,
      txtNSRL: this.nsdl,
      txtListingMechanism: this.listing,
      ChkSafeIn: '',
      ChkSafeQualifi: '',
      ChkInsufficient: '',
      ChkUnSafe: '',
      txtChinestInciName: '',
      txtMinPercent: '',
      txtppm: '',
      isChanged: this.isChanged,
    }]);

    this.Restriction_saveupdateup().subscribe((restriction_save_up) => {
      console.warn("restriction_save_up", restriction_save_up)
      this.restriction_save_up_data = restriction_save_up

      //if (this.rawmaterial_save_data == "Inserted") {
      //  this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "RawMaterial:" + " " + this.inciname + " is " + this.rawmaterial_save_data + " " + "Successfully" } });
      //  this.rawmaterial_save_data = ""
      //}
    })
  }
  Restriction_saveupdateup() {

    var datalistrestriction: any = JSON.stringify(this.Restrictiondatalist);
    var operation: string = "CA_PROP_65 Direct";
    let params1 = new HttpParams().set('Rawmaterialrestrctnjson', datalistrestriction).set('operation', operation);
    return this.http.get("https://smartformulatorformulalookupwebservice5.azurewebsites.net/RawMtrlRestrictionBtnSave", { params: params1, responseType: 'text' })
  }


  ngOnInit() {
    this.isChanged = '1';
    var countryname: string = '';
    countryname = this.data.displaydata1;
    this.cadirectdetails = this.data.displaydata2;
    this.basedetails = this.data.displaydata0;
    this.country = this.basedetails[2];
    this.IngredientCodedata = this.basedetails[3];
    this.operation = countryname;
    this.inciid = this.cadirectdetails[0];
    if (this.inciid == undefined) {
      this.inciid = '0';
      this.isChanged = '0';
      this.IngredientCodedata = this.basedetails[3];

      this.restrictionformulaname = this.basedetails[1];
    }
    this.IngredientCodedata = this.basedetails[3];
    this.restrictionformulaname = this.basedetails[1];
    //this.restrictionformulaname = this.cadirectdetails[10];
    this.toxicity = this.cadirectdetails[1];
    this.listing = this.cadirectdetails[2];
    this.cadate = this.cadirectdetails[3];
    this.nsdl = this.cadirectdetails[4];
    this.sourceinfo = this.cadirectdetails[5];
    this.internalreg = this.cadirectdetails[6];
    this.username = this.cadirectdetails[7];
    this.sourceregdoc = this.cadirectdetails[8];
    this.IngredientCodedata = this.basedetails[3];
    this.data.displaydata1 = "";
    this.data.displaydata2 = "";
    this.data.displaydata0 = "";
  }

}
export class RestrictionData {
  txtInciid: string;
  txtPercentage: string;
  txtCountry: string;
  txtFieldofAppln: string;
  txtInciName: string;
  IngredientCode: string;
  username: string;
  txtJournal: string;
  txtIngredientCode: string;
  txtMaximum: string;
  txtOtherLimitations: string;
  txtConditions: string;
  txtSourceinfo: string;
  txtmaxpercentage: string;
  txtRegNotes: string;
  txtDocument: string;
  txtInternalComments: string;
  txtTypeofToxicity: string;
  txtNSRL: string;
  txtListingMechanism: string;
  ChkSafeIn: string;
  ChkSafeQualifi: string;
  ChkInsufficient: string;
  ChkUnSafe: string;
  txtChinestInciName: string;
  txtMinPercent: string;
  txtppm: string;
  isChanged: string;
}
