import { Component, OnInit } from '@angular/core';
import {  PostsService } from '../posts.service';
import { JsonServiceClient } from '@servicestack/client';

var client = new JsonServiceClient("http://localhost/SmartFormulator_Webservice/");
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent {
  articles;
  HighlightRow: Number;
  Employee: any;
  ClickedRow: any;  
  datatrue: any;
  datafalse: any;
  data1: any;
  defaultdata: any;
  userid: any;
  datasaveabb: any;
  datasaveabbraw: any;
  datasaveabbsup: any;
  datasaveabbcust: any;

  selectedUserfalse: string = '';
  selectedUsertrue: string = '';
  clearLoc: string = '';

  formulacode: string = '';
  formulaname: string = '';
  projectname: string = '';
  username: string = '';
  companyname: string = '';
  abb: string = '';
  abbdescription: string = '';
  formname: string;
  dataval: string = '';
  globalapplistval: any;
  selectedabb: string = '';
  selectedadddescription: string = '';
  deleteprefi: any;

  currentYear: number = new Date().getFullYear();
  clearLock() {
    this.clearLoc = '';

  }
  abbclickform(itemdataabb:string,itemdatadesc:string) {
    this.selectedabb = itemdataabb;
    this.selectedadddescription = itemdatadesc;

  }
  RowSelectedfalse(itemfalse: string) {
    this.selectedUserfalse = itemfalse;   // declare variable in component.
  }
  RowSelectedtrue(itemTrue: string) {
    this.selectedUsertrue = itemTrue;   // declare variable in component.
  }
  constructor(private postData: PostsService, private http: HttpClient) {
    this.ClickedRow = function (index) {
      this.HighlightRow = index;
    }  
  }


  getPostslocktrue() {

    let paramstrue = new HttpParams().set('locked', "true");

    return this.http.get("http://localhost/SmartFormulator_Webservice/formula", { params: paramstrue });
  }
  getPostslockfalse() {
    let paramsfalse = new HttpParams().set('locked', "false");
    return this.http.get("http://localhost/SmartFormulator_Webservice/formula", { params: paramsfalse });
  }
  getwithparam() {
    let params1 = new HttpParams().set('UserId', "admin").
      set('ProjectName', "Project WorkFlow Test");

    return this.http.get("http://localhost/SmartFormulator_Webservice/Task", { params: params1 });
  }
  Datalock(formulacode: string, formulaname: string, projectname: string, username: string) {
    var formulacodelock: string = formulacode;
    var formulanamelock: string = formulaname;
    var projectnamelock: string = projectname;
    var usernamelock: string = username;
    let params1 = new HttpParams().set('formulacode', formulacodelock).
      set('formulaname', formulanamelock).
      set('username', projectnamelock).
      set('ProjectName', usernamelock);

    this.http.post("http://localhost/SmartFormulator_Webservice/Locked", { params: params1 });
    
  }
  Datalockclick(formulacode, formulaname, projectname, username) {
    this.Datalock(formulacode, formulaname, projectname, username);
    this.getPostslockfalse().subscribe((result3) => {
      console.warn("resulttolock", result3)
      this.datafalse = result3
    })
  }

  defaultsettingdata() {


    return this.http.get("http://localhost/SmartFormulator_Webservice/defaultsettingsdata");
  }
  public saveprefix(abbform, abbdescriptionform) {

    this.abb = abbform;
    this.abbdescription = abbdescriptionform;
    //  this.saveabbformulation();
  }
  public deleteprefix() {
    this.deleteprefixdata(this.selectedabb, this.selectedadddescription).subscribe((resultdeletepre) => {
      console.warn("resultdeletepre", resultdeletepre)
      this.deleteprefi = resultdeletepre
      this.saveformformulationprefix(this.abb, this.abbdescription)
      this.saverawprefix(this.abb, this.abbdescription) 
      this.savesuppliers(this.abb, this.abbdescription)
      this.savecustomer(this.abb, this.abbdescription)
    })
  }
  public deleteprefixdata(delabbreviation: string, deladddescription: string) {

    var abbdelprefix: string = delabbreviation;
    var abbdeldescription: string = deladddescription;
    let params1 = new HttpParams().set('abbdel', abbdelprefix).
      set('formnamedel', abbdeldescription);
   
    return this.http.get("http://localhost/SmartFormulator_Webservice/deleteabbreviation", { params: params1 });
  }


  saveabbformulation(abbform1: string, abbdescriptionform1: string) {
    var abbfo: string = abbform1;
    var descfor: string = abbdescriptionform1;
    var formula: string = "Formulation LookUp";
    let paramsform = new HttpParams().set("abb", abbfo).
      set("formname", formula).
      set("abbdescription", descfor);

    return this.http.get("http://localhost/SmartFormulator_Webservice/saveabbreviation", { params: paramsform });

  }
  saveformformulationprefix(abbform, abbdescriptionform) {
    return this.saveabbformulation(abbform, abbdescriptionform).subscribe((result5) => {
      console.warn("result5", result5)
      this.datasaveabb = result5
    })

  }
  saveabbrawmaterials(abbrawmat: string, abbrawdescription: string) {
    var abbraw: string = abbrawmat;
    var descraw: string = abbrawdescription;
    let params1 = new HttpParams().set('abb', abbraw).
      set('formname', "Raw Materials").
      set('abbdescription', descraw);
    return this.http.get("http://localhost/SmartFormulator_Webservice/saveabbreviation", { params: params1 });

  }
  saverawprefix(abbrawform, abbdescriptionrawform) {

    return this.saveabbrawmaterials(abbrawform, abbdescriptionrawform).subscribe((result6) => {
      console.warn("resultsaveraw", result6)
      this.datasaveabbraw = result6
    })

  }
  saveabbsuppliers(abbsuppliers: string, abbdescriptionsuppliers: string) {
    var abbsuppl: string = abbsuppliers;
    var descsuppl: string = abbdescriptionsuppliers;
    let params1 = new HttpParams().set('abb', abbsuppl).
      set('formname', "Suppliers").
      set('abbdescription', descsuppl);
    return this.http.get("http://localhost/SmartFormulator_Webservice/saveabbreviation", { params: params1 });

  }
  savesuppliers(abbsuppl, abbdescriptionsupp) {
    this.saveabbsuppliers(abbsuppl, abbdescriptionsupp).subscribe((result7) => {
      console.warn("resultsavesup", result7)
      this.datasaveabbsup = result7
    })
  }

  saveabbcust(abbcustomer: string, abbdescriptioncusto: string) {
    var abbcust: string = abbcustomer;
    var abbdescriptioncus: string = abbdescriptioncusto;
    let params1 = new HttpParams().set('abb', abbcust).
      set('formname', "Customer").
      set('abbdescription', abbdescriptioncus);
    return this.http.get("http://localhost/SmartFormulator_Webservice/saveabbreviation", { params: params1 });

  }
  savecustomer(abbcust, abbdescriptioncust) {
    this.saveabbcust(abbcust, abbdescriptioncust).subscribe((result8) => {
      console.warn("resultsavecust", result8)
      this.datasaveabbcust = result8
    })

  }
  globalapplist() {
    return this.http.get("http://localhost/SmartFormulator_Webservice/GlobalApproverList");
  }

  ngOnInit() {

    this.saveabbformulation(this.abb, this.abbdescription).subscribe((result5) => {
      console.warn("result5", result5)
      this.datasaveabb = result5
    })
    this.deleteprefixdata(this.selectedabb, this.selectedadddescription).subscribe((resultdeletepre) => {
      console.warn("resultdeletepre", resultdeletepre)
      this.deleteprefi = resultdeletepre
    })

    this.getwithparam().subscribe((result1) => {
      console.warn("result1", result1)
      this.data1 = result1
    })

    this.saveabbrawmaterials(this.abb, this.abbdescription).subscribe((result6) => {
      console.warn("resultsaveraw", result6)
      this.datasaveabbraw = result6
    })
    this.saveabbsuppliers(this.abb, this.abbdescription).subscribe((result7) => {
      console.warn("resultsavesup", result7)
      this.datasaveabbsup = result7
    })
    this.saveabbcust(this.abb, this.abbdescription).subscribe((result8) => {
      console.warn("resultsavecust", result8)
      this.datasaveabbcust = result8
    })


    this.getPostslocktrue().subscribe((result2) => {
      console.warn("resulttounlock", result2)
      this.datatrue = result2
    })
    this.getPostslockfalse().subscribe((result3) => {
      console.warn("resulttolock", result3)
      this.datafalse = result3
    })
    this.defaultsettingdata().subscribe((result4) => {
      console.warn("result", result4)
      this.defaultdata = result4



    })

    this.globalapplist().subscribe((resultgblapplist) => {
      console.warn("resultgblapplist", resultgblapplist)
      this.globalapplistval = resultgblapplist
    })

  }
}
//interface Formulamain1 {
//  FormulaCode: string;
//  Description: string;
//  PDRNo: string;
//  Status: string;
//  UserName: string;
//  ProjectName: string;
//}


