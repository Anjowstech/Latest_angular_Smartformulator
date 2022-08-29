import { Component, Inject, OnInit } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-rawmaterial-restriction-us',
  templateUrl: './rawmaterial-restriction-us.component.html',
  styleUrls: ['./rawmaterial-restriction-us.component.css']
})
export class RawmaterialRestrictionUsComponent implements OnInit {
  AssigineduserdataList: any;
  restrictionformulaname: string;
  Maximumusedforconclusion: string;
  concentrationconclusion: string;
  maximumconclusion: string;
  safetuconclusion: string;
  conditionconclusion: string;
  journalconclusion: string;
  internalconclusion: string;
  internalSource: string;
  username: string;
  fieldname: string = '';
  inciname: string;

  restrictionload: any;
  SourceRegulationconclusion: string;
  dataList1: any = [];
  Restrictiondatalist: RestrictionData[][] = [];
  restriction_save_up_data: any;
  Conditionsdata: string = "";
  Countrydata: string;
  FieldofApplndata: string = '';
  INCINamedata: string;
  Inciiddata: string;
  IngredientCodedata: string;
  Maximumdata: string = "";
  OtherLimitationsdata: string = "";
  Percentagedata: string;
  Sourceinfodata: string = "";
  maxpercentagedata: string = "0";
  journal: string = "";
  internalReg: string = "";
  percentage: string = "";
  inciid: string = "0";
  operation: string = '';
  Oper: string = '';
  country: string = "";
  safetyconcern: string = "";
  sourceofinfo: string = "";
  journalcitation: string = "";
  internalcomments: string = "";
  S: string = "";
  SQ: string = "";
  U: string = "";
  I: string = "";
  basedetails: string[];
  usdetails: string[];
  constructor(private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  pdrupdatemain() {
    this.dataList1[0] = ([{



    }]);
  }
  restrictionloadpopup(username: string, fieldname: string, inciname: string, operation: string) {
    var user: string = username;
    var field: string = fieldname;
    var inci: string = inciname
    var operat: string = operation;


    let params1 = new HttpParams().set('username', user)
      .set('FieldOfAppln', field)
      .set('INCIName', inci)
      .set('operation', operat);
    return this.http.get("https://formularestrictionwebservice.azurewebsites.net/RestrictionDoubleClick", { params: params1 })
  }

  restrictiondata(restrictdata: any) {

    for (let item of restrictdata) {


      this.conditionconclusion = item.Conditions
      this.Countrydata = item.Country
      this.restrictionformulaname = item.INCIName
      this.inciid = item.Inciid
      this.IngredientCodedata = item.IngredientCode
      this.journalconclusion = item.Journal
      this.Maximumusedforconclusion = item.Maximum
      this.concentrationconclusion = item.OtherLimitations
      this.maximumconclusion = item.maxpercentage
      this.S = item.S
      this.SQ = item.SQ
      this.I = item.I
      this.U = item.U
      this.safetuconclusion = item.Safetyconcerns
      this.internalSource = item.Sourceinfo
      this.internalconclusion = item.internalcomments
      this.SourceRegulationconclusion = item.doclink
      this.username = item.username
    }
  }

  Restriction_SaveUpdateUS() {
    this.Oper = this.country;
    this.Restrictiondatalist[0] = ([{

      txtInciid: this.inciid,
      txtPercentage: this.maximumconclusion,
      txtCountry: this.country,
      txtFieldofAppln: '',
      txtInciName: this.restrictionformulaname,
      IngredientCode: this.IngredientCodedata,
      username: this.username,
      txtJournal: this.journalconclusion,           //
      txtIngredientCode: this.IngredientCodedata,
      txtMaximum: this.Maximumusedforconclusion,       //
      txtOtherLimitations: this.concentrationconclusion,       //
      txtConditions: this.safetuconclusion,
      txtSourceinfo: this.internalSource,        //
      txtmaxpercentage: this.maximumconclusion,      //
      txtRegNotes: '',
      txtDocument: this.SourceRegulationconclusion,      //
      txtInternalComments: this.internalconclusion,     //
      txtTypeofToxicity: '',
      txtNSRL: '',
      txtListingMechanism: '',
      ChkSafeIn: "false",
      ChkSafeQualifi: "false",
      ChkInsufficient: "false",
      ChkUnSafe: "false",

    }]);

    this.Restrictionus_saveupdateup().subscribe((restriction_save_up) => {
      console.warn("restriction_save_up", restriction_save_up)
      this.restriction_save_up_data = restriction_save_up

      //if (this.rawmaterial_save_data == "Inserted") {
      //  this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "RawMaterial:" + " " + this.inciname + " is " + this.rawmaterial_save_data + " " + "Successfully" } });
      //  this.rawmaterial_save_data = ""
      //}
    })
  }
  Restrictionus_saveupdateup() {

    var datalistrestriction: any = JSON.stringify(this.Restrictiondatalist);
    var operation: string = 'US';
    let params1 = new HttpParams().set('Rawmaterialrestrctnjson', datalistrestriction).set('operation', operation);
    return this.http.get("https://smartformulatorformulalookupwebservice5.azurewebsites.net/RawMtrlRestrictionBtnSave", { params: params1, responseType: 'text' })
  }



  ngOnInit() {

    var countryname = this.data.displaydata1;
    if (countryname == "tab1") {
      this.country = "US";
    }
    var usdetails: any = [] = this.data.displaydata2;
    var basedetails: any = [] = this.data.displaydata0;
    // this.country = this.data.displaydata0[2];
    //  this.inciname = basedetails[1];
    //this.inciid = usdetails[0];
    this.inciid = usdetails[0];
    if (this.inciid == undefined || this.inciid == null || this.inciid == "" || this.inciid == "0") {
      this.inciid = '0';

    }

    this.restrictionformulaname = usdetails[1];
    //this.FieldofApplndata = this.usdetails[2];
    this.Maximumusedforconclusion = usdetails[2];
    if (this.Maximumdata == undefined) {
      this.Maximumdata = '';
    }
    this.maximumconclusion = usdetails[3];
    this.maximumconclusion = usdetails[4];
    this.concentrationconclusion = usdetails[5];
    this.S = usdetails[6];
    this.SourceRegulationconclusion = usdetails[7]; //sq
    this.safetuconclusion = usdetails[8];
    this.U = usdetails[9];
    this.internalSource = usdetails[10];

    this.journalconclusion = usdetails[11];
    this.internalconclusion = usdetails[12];
    this.username = usdetails[13];

    this.inciname = basedetails[1];
    this.restrictionformulaname = this.inciname

    if (this.inciid == '0') {
      this.INCINamedata = this.inciname;
      this.Inciiddata = this.inciid;
      this.IngredientCodedata = basedetails[3];
      this.Percentagedata = '0';
      this.username = 'admin'
    }

    else {
      if (this.fieldname == undefined || this.fieldname == "") {
        this.fieldname = '';
      }
      this.restrictionloadpopup(this.username, this.fieldname, this.inciname, 'US').subscribe((restrictionload) => {

        console.warn("restrictionload", restrictionload)
        this.restrictionload = restrictionload
        this.restrictiondata(this.restrictionload)
      })

    }


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


}
