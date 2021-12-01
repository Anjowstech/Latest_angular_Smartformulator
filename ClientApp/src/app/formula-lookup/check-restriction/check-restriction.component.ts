import { Component, OnInit } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-check-restriction',
  templateUrl: './check-restriction.component.html',
  styleUrls: ['./check-restriction.component.css']
})
export class CheckRestrictionComponent implements OnInit {
  formuldetails: string[];
  formulaname: string = '';
  formulacode: string = '';
  PDRNo: string = '';
  username: string = "admin";
  cusvalue: string;
  cusco: string;
  checkrestrictionloadvalue: any;
  restrictionprojectload: any;
  check1: any;
  restrcheckre: any;
  constructor(private Datashare: DataShareServiceService, private http: HttpClient) { }
  formularestrictionopen():void {
    window.open(
      "/formularestriction", "_blank");

  }
  projectrestrictionload(formulcode: string) {
    var formulcod: string = formulcode;

    let params1 = new HttpParams().set('FormulaCode', formulcod);

    return this.http.get("http://24.187.220.60/Formularestriction_webservice2/Loadprojectdetailsinrestriction", { params: params1 })
  }
  simpleformulprocessload(formulacodevalue: string) {
    var formulcod: string = formulacodevalue;
    let params1 = new HttpParams().set('FormulaCode', formulcod);

    return this.http.get("http://24.187.220.60/Formularestriction_webservice2/loadsimpletempformulaprocess", { params: params1 })
  }
  custcomethod(cusval: any) {

    for (let item of cusval) {
      this.cusco = item.cuscode
    }

  }
  checkrestrictionload(formulcode: string,username: string, cuscode: string) {
    var formulcod: string = formulcode;
   
    var user: string = username;
    var cus: string = cuscode;
    let params1 = new HttpParams().set('FormulaCode', formulcod)
      .set('username', user)
      
      .set('Customername', cus);
    return this.http.get("http://24.187.220.60/Formularestriction_webservice2/showRestricitonMsgNew", { params: params1, responseType: 'text' })
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

    this.simpleformulprocessload(this.formulacode).subscribe((simpleformulprocessload) => {

      console.warn("simpleformulprocessload", simpleformulprocessload)
      var simpledata = simpleformulprocessload
    })
    this.checkrestrictionload(this.formulacode, this.username, this.cusco).subscribe((checkrestrictionload) => {
      
      console.warn("checkrestrictionload", checkrestrictionload)
    
      this.check1 = checkrestrictionload
      this.restrcheckre = this.check1.split('break').join('\n')
    }) 
  }

}
