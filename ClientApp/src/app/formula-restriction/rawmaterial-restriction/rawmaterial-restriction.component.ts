import { Component, Inject, OnInit } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-rawmaterial-restriction',
  templateUrl: './rawmaterial-restriction.component.html',
  styleUrls: ['./rawmaterial-restriction.component.css']
})
export class RawmaterialRestrictionComponent implements OnInit {
  restrictiondetails: string[];
  restrictioncountryname: string = '';
  restrictionformulaname: string = '';
  percentageallowed: string = '';
  fieldname: string = '';
  username: string = 'admin'
  inciname: string = '';
  operation: string = ''
  restrictionload: any;
  Conditionsdata: string = "";
  Countrydata: string;
  FieldofApplndata: string = "";
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
  Restrictiondatalist: RestrictionData[][] = [];
  restriction_save_up_data: any;
  Oper: string = '';
  Eudetails: string[];
  basedetails: string[];
  inciid: string = "0";
  internalcomm: string = "";
  country: string = "";
  ifchina: boolean = true;
  ifCArestriction: boolean = true;
  ifchinamax: boolean = false;
  chineseinci: string = "";
  minpercent: string = "";
  ppm: string = "";
  doclink: string = "";
  sourceregulation: string = "";

  oldmaxperc: string;
  constructor(private Datashare: DataShareServiceService, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog,) { }

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
  handleFileInput(files: FileList) {
    var filebrowse = files.item.length;
    this.sourceregulation = files.item(0).name;
  }
  blurmaxpercentage(event: any) {
    this.maxpercentagedata = event.target.value;
    if (this.INCINamedata == "" || this.INCINamedata == undefined) {
      if (Number(this.maxpercentagedata) < 0.00000 || isNaN(Number(this.maxpercentagedata))) {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter only numbers or Integers.' } });
        this.maxpercentagedata = '0';
      }
    }
    else {
      if (Number(this.maxpercentagedata) < 0.00000 || isNaN(Number(this.maxpercentagedata))) {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter only numbers or Integers.' } });
        this.maxpercentagedata = this.oldmaxperc;
      }
    }


  }
  restrictiondata(restrictdata: any) {

    for (let item of restrictdata) {


      this.Conditionsdata = item.Conditions
      this.Countrydata = item.Country
      this.FieldofApplndata = item.FieldofAppln
      this.INCINamedata = item.INCIName
      this.Inciiddata = item.Inciid
      this.IngredientCodedata = item.IngredientCode
      this.Maximumdata = item.Maximum
      this.OtherLimitationsdata = item.OtherLimitations
      this.Percentagedata = item.Percentage
      this.Sourceinfodata = item.Sourceinfo
      this.maxpercentagedata = item.maxpercentage
      this.oldmaxperc = item.maxpercentage
      this.ppm = item.ppm
      this.sourceregulation = item.DocLink
      this.internalcomm = item.internalcomments
    }
  }

  Restriction_SaveUpdate() {
    this.Oper = this.data.displaydata1;
    
    if (this.Oper == "CA_PROP_65 Restriction") {
      if (this.ppm == "0") {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Enter ppm" } });
      }
      else {
        if (this.ppm == "" || this.ppm == undefined) {
          var perc: string = "0";
        }
        else {
          var perc: string = (Number(this.ppm) / 1000).toString()
        }
        this.Restrictiondatalist[0] = ([{

          txtInciid: this.inciid,

          txtCountry: this.country,
          txtFieldofAppln: this.FieldofApplndata,
          txtInciName: this.inciname,
          IngredientCode: this.IngredientCodedata,
          username: this.username,
          txtJournal: this.journal,
          txtIngredientCode: this.IngredientCodedata,
          txtMaximum: this.Maximumdata,
          txtOtherLimitations: this.OtherLimitationsdata,
          txtConditions: this.Conditionsdata,
          txtSourceinfo: this.Sourceinfodata,
          txtmaxpercentage: this.maxpercentagedata,
          txtRegNotes: this.internalReg,
          txtDocument: this.sourceregulation,
          txtInternalComments: this.internalcomm,
          txtTypeofToxicity: '',
          txtNSRL: '',
          txtListingMechanism: '',
          ChkSafeIn: '',
          ChkSafeQualifi: '',
          ChkInsufficient: '',
          ChkUnSafe: '',
          txtChinestInciName: this.chineseinci,
          txtMinPercent: this.minpercent,
          txtppm: this.ppm,
          txtPercentage: perc,
          isChanged: '1',
        }]);

        this.Restriction_saveupdateup().subscribe((restriction_save_up) => {
          console.warn("restriction_save_up", restriction_save_up)
          this.restriction_save_up_data = restriction_save_up

          if (this.restriction_save_up_data == "Inserted") {
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "RawMaterial Regulatoryrestriction details saved Successfully" } });
            this.restriction_save_up_data = ""
          }
          else if (this.restriction_save_up_data == "Updated") {
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "RawMaterial Regulatoryrestriction Details saved Successfully" } });
            this.restriction_save_up_data = ""
          }
        })
      }
    }
    else {
      if ((this.FieldofApplndata == "" || this.FieldofApplndata == undefined) && (this.Maximumdata == "" || this.Maximumdata == undefined) && (this.OtherLimitationsdata == "" || this.OtherLimitationsdata == undefined) && (this.Conditionsdata == "" || this.Conditionsdata == undefined)) {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Enter atleast one restriction" } });
      }
      else {
        if (this.minpercent > this.maxpercentagedata) {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Min percentage should be less than max percentage" } });
        }
        else {

          if (this.ppm == "" || this.ppm == undefined) {
            var perc: string = "0";
          }
          else {
            var perc: string = (Number(this.ppm) / 1000).toString()
          }
          this.Restrictiondatalist[0] = ([{

            txtInciid: this.inciid,

            txtCountry: this.country,
            txtFieldofAppln: this.FieldofApplndata,
            txtInciName: this.inciname,
            IngredientCode: this.IngredientCodedata,
            username: this.username,
            txtJournal: this.journal,
            txtIngredientCode: this.IngredientCodedata,
            txtMaximum: this.Maximumdata,
            txtOtherLimitations: this.OtherLimitationsdata,
            txtConditions: this.Conditionsdata,
            txtSourceinfo: this.Sourceinfodata,
            txtmaxpercentage: this.maxpercentagedata,
            txtRegNotes: this.internalReg,
            txtDocument: this.sourceregulation,
            txtInternalComments: this.internalcomm,
            txtTypeofToxicity: '',
            txtNSRL: '',
            txtListingMechanism: '',
            ChkSafeIn: '',
            ChkSafeQualifi: '',
            ChkInsufficient: '',
            ChkUnSafe: '',
            txtChinestInciName: this.chineseinci,
            txtMinPercent: this.minpercent,
            txtppm: this.ppm,
            txtPercentage: perc,
            isChanged: '1',
          }]);

          this.Restriction_saveupdateup().subscribe((restriction_save_up) => {
            console.warn("restriction_save_up", restriction_save_up)
            this.restriction_save_up_data = restriction_save_up

            if (this.restriction_save_up_data == "Inserted") {
              this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "RawMaterial Regulatoryrestriction details saved Successfully" } });
              this.restriction_save_up_data = ""
            }
            else if (this.restriction_save_up_data == "Updated") {
              this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "RawMaterial Regulatoryrestriction Details saved Successfully" } });
              this.restriction_save_up_data = ""
            }
          })
        }
      }
     
      
    }
  }
  Restriction_saveupdateup() {

    var datalistrestriction: any = JSON.stringify(this.Restrictiondatalist);
    var operation: string = this.Oper;
    let params1 = new HttpParams().set('Rawmaterialrestrctnjson', datalistrestriction).set('operation', operation);
    return this.http.get("https://smartformulatorformulalookupwebservice5.azurewebsites.net/RawMtrlRestrictionBtnSave", { params: params1, responseType: 'text' })
  }
  Cleardata() {
    this.country = '';
    this.FieldofApplndata = '';
    this.inciname = '';
    this.IngredientCodedata = '';
    this.username = '';
    this.journal = '';
    this.IngredientCodedata = '';
    this.Maximumdata = '';
    this.OtherLimitationsdata = '';
    this.Conditionsdata = '';
    this.Sourceinfodata = '';
    this.maxpercentagedata = '0';
    this.internalReg = '';
    this.sourceregulation = '';
    this.internalcomm = '';
//txtTypeofToxicity: '',
//txtNSRL: '',
//txtListingMechanism: '',
//ChkSafeIn: '',
//ChkSafeQualifi: '',
//ChkInsufficient: '',
//  ChkUnSafe: '',
    this.chineseinci = '';
    this.minpercent = '';
    this.ppm = '';

  }

  ngOnInit() {
    var countryname = this.data.displaydata1;
    this.Eudetails = this.data.displaydata2;
    this.basedetails = this.data.displaydata0;
    this.country = countryname;
    //this.country = this.basedetails[2];

    this.inciid = this.Eudetails[0];
    if (this.inciid == undefined) {
      this.inciid = '0';

    }
    if (countryname == "CHINA") {
      this.ifchina = false;
    }
    else {
      this.ifchina = true;
    }
    if (countryname == "CA_PROP_65 Restriction") {
      this.ifCArestriction = false;
      this.ifchinamax = true;
      this.country = "Impurity";
    }
    else {
      this.ifCArestriction = true;
      this.ifchinamax = false;
    }
    if (this.minpercent == undefined) {
      this.minpercent = '';
    }
    if (this.chineseinci == undefined) {
      this.chineseinci = '';
    }
    this.minpercent = this.Eudetails[10];

    this.chineseinci = this.Eudetails[11];
    if (this.chineseinci == "" || this.chineseinci == undefined) {
      this.chineseinci = "";
    }
    this.INCINamedata = this.Eudetails[1];
    this.FieldofApplndata = this.Eudetails[2];
    if (this.FieldofApplndata == "" || this.FieldofApplndata == undefined) {
      this.FieldofApplndata = "";
    }
    this.Maximumdata = this.Eudetails[3];
    if (this.Maximumdata == undefined) {
      this.Maximumdata = '';

    }
    this.maxpercentagedata = this.Eudetails[4];
    if (this.maxpercentagedata == "" || this.maxpercentagedata == undefined) {
      this.maxpercentagedata = "0";
    }
    this.OtherLimitationsdata = this.Eudetails[5];
    if (this.OtherLimitationsdata == undefined || this.OtherLimitationsdata == "") {
      this.OtherLimitationsdata = "";
    }
    else {
      this.OtherLimitationsdata = this.Eudetails[5];
    }
    this.Conditionsdata = this.Eudetails[6];
    if (this.Conditionsdata == "" || this.Conditionsdata == undefined) {
      this.Conditionsdata = "";
    }
    else {
      this.Conditionsdata = this.Eudetails[6];
    }
    this.Sourceinfodata = this.Eudetails[7];
    if (this.Sourceinfodata == "" || this.Sourceinfodata == undefined) {
      this.Sourceinfodata = "";
    }
    else {
      this.Sourceinfodata = this.Eudetails[7];
    }
    this.journal = this.Eudetails[8];
    if (this.journal == "" || this.journal == undefined) {
      this.journal = "";
    }
    else {
      this.journal = this.Eudetails[8];
    }
    this.internalReg = this.Eudetails[9];
    if (this.internalReg == "" || this.internalReg == undefined) {
      this.internalReg = "";
    }   
    this.username = this.Eudetails[10];
    if (this.ppm == undefined) {
      this.ppm = '';
    }
    if (this.doclink == undefined) {
      this.doclink = '';
    }
    this.ppm = this.Eudetails[11];
    if (this.ppm == "" || this.ppm == undefined) {
      this.ppm = "0";
    }
    this.doclink = this.Eudetails[12];
    if (this.doclink == "" || this.doclink == undefined) {
      this.doclink = "";
    }
    this.restrictiondetails = this.Datashare.getrestrictiondetails()
    //this.restrictioncountryname = this.restrictiondetails[0];
    //this.restrictioncountryname = countryname;
    //this.restrictionformulaname = this.restrictiondetails[1];
    this.fieldname = this.Eudetails[2];
    //this.percentageallowed = this.restrictiondetails[3];
    this.inciname = this.basedetails[1];
    this.IngredientCodedata = this.basedetails[3];
    this.restrictioncountryname = countryname;
    this.operation = countryname;
    if (this.inciid == '0') {
      this.INCINamedata = this.inciname;
      this.Inciiddata = this.inciid;
      this.IngredientCodedata = this.basedetails[3];
      this.Percentagedata = '0';
      this.username = 'admin'
    }
    else {
      this.restrictionloadpopup(this.username, this.fieldname, this.inciname, this.operation).subscribe((restrictionload) => {

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
  txtChinestInciName: string;
  txtMinPercent: string;
  txtppm: string;
  isChanged: string;
}
