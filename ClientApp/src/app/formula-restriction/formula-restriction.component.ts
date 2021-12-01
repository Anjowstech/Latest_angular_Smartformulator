import { Component, OnInit } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RawmaterialRestrictionComponent } from 'src/app/formula-restriction/rawmaterial-restriction/rawmaterial-restriction.component';
import { RawmaterialRestrictionUsComponent } from 'src/app/formula-restriction/rawmaterial-restriction-us/rawmaterial-restriction-us.component';
import { RawmaterialRestrictionProp65Component } from 'src/app/formula-restriction/rawmaterial-restriction-prop65/rawmaterial-restriction-prop65.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-formula-restriction',
  templateUrl: './formula-restriction.component.html',
  styleUrls: ['./formula-restriction.component.css']
})
export class FormulaRestrictionComponent implements OnInit {
  formuldetails: string[];
  formulaname: string = '';
  formulacode: string = '';
  PDRNo: string = '';
  active: any;
  tabid: string = '';
  cusvalue: string;
  formuladelete: any;
  operation: string = 'Ingredients Details in Percentage';
  username: string = "admin";
  backtoformul: string[];
  restrictionload: any;
  isLoading: boolean = true;
  isLoadingrestrict: boolean = true;
  isLoadingcheck: boolean = true;
  restcountryname: string = '';
  formularestrictiondetails: string[];
  restrictionprojectload: any;
  restrictionloadcheck: any;
  cusc: string = '';
  cusco: string;
  check1: any;
  restrcheck: any;
  
  constructor(public dialog: MatDialog,private Datashare: DataShareServiceService, private http: HttpClient) { }
  backtorestrictiongrid(): void {
    this.active = "1";
    this.isLoading = true;
    this.fetchtabid(this.active);
  }
  backtorestrictioneu(): void {
   
    this.active = "2";
    this.isLoading = true;
    this.isLoadingrestrict = true;
    this.fetchtabid(this.active);
  }
  backtorestrictionus(): void {
    this.active = "3";
    this.isLoading = true;
    this.fetchtabid(this.active);
  }
  backtorestrictioncan(): void {
    this.active = "4";
    this.isLoading = true;
    this.fetchtabid(this.active);
  }
  backtorestrictionjpn(): void {
    this.active = "5";
    this.isLoading = true;
    this.fetchtabid(this.active);
  }
  backtorestrictionaus(): void {
    this.active = "6";
    this.isLoading = true;
    this.fetchtabid(this.active);
  }
  backtorestrictionca(): void {
    this.active = "7";
    this.isLoading = true;
    this.fetchtabid(this.active);
  }
  backtorestrictioncaprop65(): void {
    this.active = "8";
    this.isLoading = true;
    this.fetchtabid(this.active);
  }
  backtorestrictionifra(): void {
    this.active = "9";
    this.isLoading = true;
    this.fetchtabid(this.active);
  }
  backtorestrictionimpurities(): void {
    this.active = "10";
    this.isLoading = true;
    this.fetchtabid(this.active);
  }
  backtoformulation(): void {
    this.backtoformul = [this.PDRNo, this.formulacode, this.formulaname];
    this.Datashare.backtoformuladetails(this.backtoformul);

  }
  calcStyles(colorEU, colorUS, colorCAN, colorJP, colorAU, colorCN, colorCA,colorCP) {
    if (colorEU == "X" || colorUS == "X" || colorCAN == "X" || colorJP == "X" || colorAU == "X" || colorCN == "X" || colorCA == "X" || colorCP=="X") {
      return { color: 'red' }
    }

    return { color: 'black' }
  }
  calcStylesEU(percentallow, percentuse) {
    if (percentallow < percentuse) {
      return {color:'red'}
    }
    return { color:'black'}
  }
  fetchtabid(id: string) {
    this.tabid = id;
   
    switch (this.tabid) {
    case "1": {
        this.operation = "Ingredients Details in Percentage";
      // this.restcountryname = "EU";
        //statements; 
        break;
      }
      case "2": {
        this.operation = "EU";
        this.restcountryname = "EU";
       
        //statements; 
        break;
      }
      case "3": {
        this.operation = "US";
        //statements;
        
        break;
      }
      case "4": {
        this.operation = "CAN";
        this.restcountryname = "CAN";
       
        //statements; 
        break;
      }
      case "5": {
        this.operation = "JPN";
        this.restcountryname = "JPN";
       
        //statements; 
        break;
      }
      case "6": {
        this.operation = "AUS";
        this.restcountryname = "AUS";
        //statements;
        
        break;
      }
      case "7": {
        this.operation = "CA";
        this.restcountryname = "CHINA"
        //statements;
        

        
        break;
      }
      case "8": {
        this.operation = "CA_PROP";
        //statements; 
        break;
      }
      case "9": {
        this.operation = "CustomerPreference";
        //statements; 
        break;
      }
      case "10": {
        this.operation = "IFRA";
        //statements; 
        break;
      }
      case "11": {
        this.operation = "Impurities";
        //statements; 
        break;
      }
      default: {
        //statements; 
        break;
      }
    }

    this.formulationrestrictionload(this.formulacode, this.operation, this.username, this.cusco).subscribe((formularestrictionload) => {
      this.isLoading = false;
      console.warn("formularestrictionload", formularestrictionload)
      this.restrictionload = formularestrictionload
    })
    
    this.formulationrestrictionloadcheck(this.formulacode, this.operation, this.username, this.cusco).subscribe((formularestrictionloadcheck) => {
      this.isLoadingrestrict = false;
      console.warn("formularestrictionloadcheck", formularestrictionloadcheck)
      this.check1 = formularestrictionloadcheck
      this.restrcheck = this.check1.split('break').join('\n')
      
    })
  }
  deletetempprocess()
  {
    this.deletetemp(this.formulacode,this.username).subscribe((deletemp) => {

      console.warn("delete formula", deletemp)
      this.formuladelete = deletemp
    })
  }
 
  deletetemp(formulacode: string, username: string) {
    var formulcod: string = formulacode;
    var user: string = username;
    let params1 = new HttpParams().set('FormulaCode', formulcod)
      .set('username', user);
    return this.http.get("https://formularestrictionwebservice2.azurewebsites.net/deletetempformulaprocess", { params: params1 })
  }
  formulationrestrictionload(formulcode: string, operation: string, username: string,cuscode:string) {
    var formulcod: string = formulcode;
    var operat: string = operation;
    var user: string = username;
    var cus: string = cuscode;
    let params1 = new HttpParams().set('FormulaCode', formulcod)
      .set('username', user)
      .set('Operation', operat)
      .set('CusCode', cus);
    return this.http.get("https://formularestrictionwebservice2.azurewebsites.net/LoadFormulaRestrictions", { params: params1 })
  }
  projectrestrictionload(formulcode: string) {
    var formulcod: string = formulcode;
   
    let params1 = new HttpParams().set('FormulaCode', formulcod);
    
    return this.http.get("https://formularestrictionwebservice2.azurewebsites.net/Loadprojectdetailsinrestriction", { params: params1})
  }
  
  formulationrestrictionloadcheck(formulcode: string, operation: string, username: string, cuscode: string) {
    var formulcod: string = formulcode;
    var operat: string = operation;
    var user: string = username;
    var cus: string = cuscode;
    let params1 = new HttpParams().set('FormulaCode', formulcod)
      .set('username', user)
      .set('Operation', operat)
      .set('CusCode', cus);
    return this.http.get("https://formularestrictionwebservice2.azurewebsites.net/LoadFormulaRestrictionscheck", { params: params1, responseType: 'text'})
  }
 //simpleformulprocessload(formulacodevalue: string)
 //{
 //  var formulcod: string = formulacodevalue;
 // let params1 = new HttpParams().set('FormulaCode', formulcod);
  
 //  return this.http.get("http://24.187.220.60/Formularestriction_webservice2/loadsimpletempformulaprocess", { params: params1 })
 //}
  Rawmaterialrestriction(foa:string,perallowed:string,inciname:string): void {
    this.formularestrictiondetails = [this.restcountryname, this.formulaname, foa, perallowed, inciname, this.operation];
    this.Datashare.sendrestrictiondetails(this.formularestrictiondetails);
    const dialogRef = this.dialog.open(RawmaterialRestrictionComponent, {
      width: '70%', height: '80%', disableClose: true
    });
  }
  Rawmaterialrestrictionus(): void {
    this.formularestrictiondetails = [this.restcountryname, this.formulaname];
    this.Datashare.sendrestrictiondetails(this.formularestrictiondetails);
    const dialogRef = this.dialog.open(RawmaterialRestrictionUsComponent, {
      width: '70%', height: '80%', disableClose: true
    });
  }
  Rawmaterialrestrictionprop65(): void {
    this.formularestrictiondetails = [this.restcountryname, this.formulaname];
    this.Datashare.sendrestrictiondetails(this.formularestrictiondetails);
    const dialogRef = this.dialog.open(RawmaterialRestrictionProp65Component, {
      width: '70%', height: '70%', disableClose: true
    });
  }
  custcomethod(cusval: any) {

    for (let item of cusval) {
      this.cusco = item.cuscode
    }
  }
  
  ngOnInit() {
    this.formuldetails = this.Datashare.getformuladetails()
    this.PDRNo = this.formuldetails[0];
    this.formulacode = this.formuldetails[1];
    this.formulaname = this.formuldetails[2];
    this.projectrestrictionload(this.formulacode).subscribe((formulaprojectrestrictionload) => {
   
      console.warn("formulaprojectrestrictionload", formulaprojectrestrictionload)
      this.restrictionprojectload = formulaprojectrestrictionload
      this.custcomethod(this.restrictionprojectload)
    })
 
   
    this.formulationrestrictionload(this.formulacode, this.operation, this.username,this.cusvalue).subscribe((formularestrictionload) => {
      this.isLoading = false;
      console.warn("formularestrictionload", formularestrictionload)
      this.restrictionload = formularestrictionload
     
    })  

   
  }

}
