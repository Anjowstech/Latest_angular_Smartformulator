import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
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
  cadate: string = new Date().toISOString().split('T')[0];
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
  constructor(private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  dateChange(event) {
    this.cadate = event.target.value;

  }
  Restriction_SaveUpdate() {
    // this.Oper = this.data.displaydata1;
    if ((this.toxicity == "" || this.toxicity == undefined) && (this.listing == "" || this.listing == undefined) && (this.nsdl == "" || this.nsdl == undefined)) {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Enter atleast one restriction." } });
    }
    else {
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

        if (this.restriction_save_up_data == "Inserted") {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "RawMaterial Regulatory restriction details saved Successfully" } });
          this.restriction_save_up_data = ""
        }
        else if (this.restriction_save_up_data == "Updated") {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "RawMaterial Regulatory restriction Details Updated Successfully" } });
          this.restriction_save_up_data = ""
        }
      })
    }
  }
  handleFileInput(files: FileList) {
    var filebrowse = files.item.length;
    this.sourceregdoc = files.item(0).name;
  }
  Restriction_saveupdateup() {

    var datalistrestriction: any = JSON.stringify(this.Restrictiondatalist);
    var operation: string = "CA_PROP_65 Direct";
    let params1 = new HttpParams().set('Rawmaterialrestrctnjson', datalistrestriction).set('operation', operation);
    return this.http.get("https://smartformulatorformulalookupwebservice5.azurewebsites.net/RawMtrlRestrictionBtnSave", { params: params1, responseType: 'text' })
  }
  Cleardata() {
    this.country = '';
    this.inciname = '';
    this.IngredientCodedata = '';
    this.username = '';
    this.toxicity = '';
    this.IngredientCodedata = '';
    this.listing = '';
    this.cadate = '';
    this.nsdl = '';
    this.sourceinfo = '';
    this.sourceregdoc = '';
    this.internalreg = '';
   
    //txtTypeofToxicity: '',
    //txtNSRL: '',
    //txtListingMechanism: '',
    //ChkSafeIn: '',
    //ChkSafeQualifi: '',
    //ChkInsufficient: '',
    //  ChkUnSafe: '',
    
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
    if (this.toxicity == "" || this.toxicity == undefined) {
      this.toxicity = "";
    }
    this.listing = this.cadirectdetails[2];
    if (this.listing == "" || this.listing == undefined) {
      this.listing = "";
    }
    this.cadate = this.cadirectdetails[3];
    if (this.cadate == "" || this.cadate == undefined) {
      this.cadate = new Date().toISOString().split('T')[0];
    }
    else {
      this.nsdl = this.cadirectdetails[4];
    }
    if (this.nsdl == "" || this.nsdl == undefined) {
      this.nsdl = "";
    }
    this.sourceinfo = this.cadirectdetails[5];
    if (this.sourceinfo == "" || this.sourceinfo == undefined) {
      this.sourceinfo = "";
    }
    this.internalreg = this.cadirectdetails[6];
    if (this.internalreg == "" || this.internalreg == undefined) {
      this.internalreg = "";
    }
    this.username = this.cadirectdetails[7];
    this.sourceregdoc = this.cadirectdetails[8];
    if (this.sourceregdoc == "" || this.sourceregdoc == undefined) {
      this.sourceregdoc = "";
    }
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
