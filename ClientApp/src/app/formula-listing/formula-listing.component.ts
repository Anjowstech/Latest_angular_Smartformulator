import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataShareServiceService } from 'src/app/data-share-service.service';

import { formatDate } from '@angular/common';
export interface FormulaList {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  status: string;
  createdby: string;
  date: string;
 

}
export interface FormulaList1 {

  position: number;


}


const ELEMENT_DATA1: FormulaList1[] = [
  { position: 1, },];
@Component({
  selector: 'app-formula-listing',
  templateUrl: './formula-listing.component.html',
  styleUrls: ['./formula-listing.component.css']
})
export class FormulaListingComponent implements OnInit {
  filterMetadata = { count: 0 };
  formulacode: string = "";
  pdrnum: string = "";
  status: string = "";
  formulaname: string = "";
  projectname: string = "";
  createdby: string = "";
  checkedvalue: string = "all";
  productDatefrom: string = "";
  productDateto: string = "";
  t2formulacode: string = "";
  t2pdrnum: string = "";
  t2status: string = "";
  customercustomname: string = "";
  customname: string = "";
   productDatefromfisrt:string = "";
productDatetofisrt:string = "";
  loadcustomerdata: any;
  t2formulaname: string = "";
  t2projectname: string = "";
  searchflag: string = "0";
  loadcustom: any;
  dayName: string;
  loadcmpanydata: any;
  loadlarefdata: any;
  loadgenericdata: any;
  loadformuladata: any;
  loadcustdata: any;
  loadalldata: any;
  loadprodata: any;
  allproduct: string;
  activeproducts: string;
  inactiveproducts: string;
  pendingproducts: string;
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'status', 'createdby', 'date'];
  displayedColumns1 = ['position', 'name', 'weight', 'symbol', 'status', 'createdby', 'date'];
  t3productnum: string="";
  t3productname: string="";
  t3customername: string="";
  loaduserdata: any;
   loadcompweekdata: any;
loadcompweekcount :any;
  loadprojectdata: any;
  t9stab: string = "";
  t9formulacodecust: string = "";
  t9pdr: string = "";
  t9labnb: string = "";
  t9formulanamecust: string = "";
  t9projectname: string = "";
  t9customername: string = "";
  loadstabilitydata: any;
  loadcompatdata: any;
  t10comp: string = "";
  t10formulacodecust: string = "";
  t10pdr: string = "";
  t10pack: string = "";
  t10formulanamecust: string = "";
  t10productname: string = "";
  t10customername: string = "";
  clientid: string = "";
  loadprodatacount: any;
  loadstabilityweekdata : any;
  loadstabilityweekcount: any;
  dayNamecom: string = "";
  formuacodecomp: string = "";
  pdrnumcomp: string = "";
statusnumcomp: string = "";
formulanamecomp: string = "";
projectnamecomp: string = "";
  createdbycomp: string = "";
   formulacodecust: string = "";
projectnamecust : string = "";
statuscust : string = "";
formulanamecust: string = "";

  createdbycust: string = "";
  formulacodegene:string = "";
pdrnumgene: string = "";
statusgene: string = "";
formulanamegene: string = "";
  projectnamegene: string = "";
   labpage: string = "";
formulacodelab: string = "";
  formulanamelab: string = "";
   formulcodecustomer: string = "";
pdrnumcustomer: string = "";
statuccustomer: string = "";
formulanamecustomer: string = "";
projectnamecustomer: string = "";
createdbycustomer: string = "";
  t9projectnamecust: string = "";
  createdbygene: string = "";
  mon: boolean = true;
  tue: boolean = true;
  wed: boolean = true;
  thur: boolean = true;
  fri: boolean = true;
  constructor(private http: HttpClient, private Datashare: DataShareServiceService) { }
  helloWorld() {
    alert('Hello world!');
  }
  datesend() {

    this.searchflag = "1";

    this.loadproduct(this.productDatefrom, this.productDateto, this.checkedvalue, this.searchflag).subscribe((loadpro) => {
      console.warn("loadpro", loadpro)
      this.loadprodata = loadpro
      this.loadprodatacount = this.loadprodata.length;
    })
  }
  triggerSomeEvent2(event: any) {
    this.allproduct = "0";
    this.activeproducts="1";
    this.inactiveproducts = "0";
    this.pendingproducts = "0";
    this.checkedvalue = "active";
   
    this.loadproduct(this.productDatefrom, this.productDateto, this.checkedvalue, this.searchflag).subscribe((loadpro) => {
      console.warn("loadpro", loadpro)
      this.loadprodata = loadpro
      this.loadprodatacount = this.loadprodata.length;
    })
  }
  triggerSomeEvent1(event: any) {
    this.allproduct = "1";
    this.activeproducts = "0";
    this.inactiveproducts = "0";
    this.pendingproducts = "0";
    this.checkedvalue = "all";

    this.loadproduct(this.productDatefrom, this.productDateto, this.checkedvalue, this.searchflag).subscribe((loadpro) => {
      console.warn("loadpro", loadpro)
      this.loadprodata = loadpro
      this.loadprodatacount = this.loadprodata.length;
    })
  }
  triggerSomeEvent3(event: any) {
    this.allproduct = "0";
    this.activeproducts = "0";
    this.inactiveproducts = "1";
    this.pendingproducts = "0";
    this.checkedvalue = "inactive";

    this.loadproduct(this.productDatefrom, this.productDateto, this.checkedvalue, this.searchflag).subscribe((loadpro) => {
      console.warn("loadpro", loadpro)
      this.loadprodata = loadpro
      this.loadprodatacount = this.loadprodata.length;
    })
  }
  triggerSomeEvent4(event: any) {
    this.allproduct = "0";
    this.activeproducts = "0";
    this.inactiveproducts = "0";
    this.pendingproducts = "1";
    this.checkedvalue = "pending";

    this.loadproduct(this.productDatefrom, this.productDateto, this.checkedvalue, this.searchflag).subscribe((loadpro) => {
      console.warn("loadpro", loadpro)
      this.loadprodata = loadpro
      this.loadprodatacount = this.loadprodata.length;
    })
  }
  Cleardataall() {
    this.formulacode = "";
    this.pdrnum = "";
    this.status = "";
    this.formulaname = "";
    this.projectname = "";
    this.createdby = "";
  }
  cleardatamyformula() {
    this.t2formulacode = "";
    this.t2pdrnum = "";
    this.t2status = "";
    this.t2formulaname = "";
    this.t2projectname = "";
  }
  cleardataproducts() {
    this.t3productnum = "";
    this.t3productname = "";
    this.t3customername = "";
    this.productDatefrom = "";
    this.productDateto = "";
  }
  cleardatacompanyowned() {
    this.formuacodecomp = "";
   
    this.pdrnumcomp = "";
    this.statusnumcomp = "";
    this.formulanamecomp = "";
    this.projectnamecomp = "";
    this.createdbycomp = "";
  }
  cleardatacustomerowned() {
    this.formulacodecust = "";
    this.projectnamecust = "";
    this.statuscust = "";
    this.formulanamecust = "";
    this.projectnamecust = "";
    this.createdbycust = "";
    this.customname = "";
  }
  cleardatageneric() {
    this.formulacodegene="";
    this.pdrnumgene = "";
    this.statusgene = "";
    this.formulanamegene = "";
    this.projectnamegene = "";
    this.createdbygene = "";
  }
  cleardatalabnotbook() {
    this.labpage = "";
    this.formulacodelab = "";
    this.formulanamelab = "";
  }
  cleardatacust() {
    this. formulcodecustomer = "";
    this.pdrnumcustomer = "";
    this.statuccustomer = "";
    this.formulanamecustomer = "";
    this. projectnamecustomer = "";
    this. createdbycustomer = "";
    this.customercustomname = "";
  }
  clearstab() {
    this.t9stab = "";
    this.t9formulacodecust = "";
    this.t9pdr = "";
    this.t9labnb = "";
    this.t9formulanamecust = "";
    this.t9projectnamecust = "";
    this.t9customername = "";
  }
  clearcomp() {
    this.t10comp = "";
    this.t10formulacodecust = "";
    this.t10pdr = "";
    this.t10pack = "";
    this.t10formulanamecust = "";
    this.t10productname = "";
    this.t10customername = "";
  }
  cleardatadailystab() {
    var date = new Date();
    let latest_date = formatDate(new Date(), 'dd/MM/yyyy', 'en-US');

    this.dayName = date.toLocaleString('en-us', { weekday: 'long' });
    if (this.dayName == "Monday") {
      this.mon = false;
      this.tue = true;
      this.wed = true;
      this.thur = true;
      this.fri = true;
    }
    if (this.dayName == "Tuesday") {
      this.mon = true;
      this.tue = false;
      this.wed = true;
      this.thur = true;
      this.fri = true;
    }
    if (this.dayName == "Wednesday") {
      this.mon = true;
      this.tue = true;
      this.wed = false;
      this.thur = true;
      this.fri = true;
    }
    if (this.dayName == "Thursday") {
      this.mon = true;
      this.tue = true;
      this.wed = true;
      this.thur = false;
      this.fri = true;
    }
    if (this.dayName == "Friday") {
      this.mon = true;
      this.tue = true;
      this.wed = true;
      this.thur = true;
      this.fri = false;
    }
  }
  cleardatacomp() {
    var date = new Date();
    let latest_date = formatDate(new Date(), 'dd/MM/yyyy', 'en-US');

    this.dayNamecom = date.toLocaleString('en-us', { weekday: 'long' });
    if (this.dayNamecom == "Monday") {
      this.mon = false;
      this.tue = true;
      this.wed = true;
      this.thur = true;
      this.fri = true;
    }
    if (this.dayNamecom == "Tuesday") {
      this.mon = true;
      this.tue = false;
      this.wed = true;
      this.thur = true;
      this.fri = true;
    }
    if (this.dayNamecom == "Wednesday") {
      this.mon = true;
      this.tue = true;
      this.wed = false;
      this.thur = true;
      this.fri = true;
    }
    if (this.dayNamecom == "Thursday") {
      this.mon = true;
      this.tue = true;
      this.wed = true;
      this.thur = false;
      this.fri = true;
    }
    if (this.dayNamecom == "Friday") {
      this.mon = true;
      this.tue = true;
      this.wed = true;
      this.thur = true;
      this.fri = false;
    }
  }
  ClearData() {
    this.allproduct = "1";
    this.activeproducts = "0";
    this.inactiveproducts = "0";
    this.pendingproducts = "0";
    this.productDatefrom = new Date().toISOString().split('T')[0];
    this.loadprodatacount = "";
    this.productDateto = new Date().toISOString().split('T')[0];
    this.checkedvalue= "all"
    this.searchflag = "0";
    this.productDatefromfisrt = "";
    this.productDatetofisrt = "";
    this.loadproduct(this.productDatefromfisrt, this.productDatetofisrt, this.checkedvalue, this.searchflag, ).subscribe((loadpro) => {
      console.warn("loadpro", loadpro)
      this.loadprodata = loadpro
    })
  }
  changecolor(e) {

     if (e.target.value == "Monday") {
      this.mon = false;
      this.tue = true;
      this.wed = true;
      this.thur = true;
      this.fri = true;
    }
    if (e.target.value == "Tuesday") {
      this.mon = true;
      this.tue = false;
      this.wed = true;
      this.thur = true;
      this.fri = true;
    }
    if (e.target.value == "Wednesday") {
      this.mon = true;
      this.tue = true;
      this.wed = false;
      this.thur = true;
      this.fri = true;
    }
    if (e.target.value == "Thursday") {
      this.mon = true;
      this.tue = true;
      this.wed = true;
      this.thur = false;
      this.fri = true;
    }
    if (e.target.value == "Friday") {
      this.mon = true;
      this.tue = true;
      this.wed = true;
      this.thur = true;
      this.fri = false;
    }
  }
  loadcustomer() {

    let params1 = new HttpParams().set('clientid', this.clientid);
    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/CustomerLoad", { params: params1 })
  }
  loadgeneric() {

    let params1 = new HttpParams().set('clientid', this.clientid);
    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/GenericLoad", { params: params1 })
  }
  loadlabref() {

    let params1 = new HttpParams().set('clientid', this.clientid);
    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/LabLoad", { params: params1 })
  }
  loadformula() {

    let params1 = new HttpParams().set('clientid', this.clientid);
    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/FormulaLoad", { params: params1 })
  }
  loadcompany_owned() {

    let params1 = new HttpParams().set('clientid', this.clientid);
    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/CompanyLoad", { params: params1 })
  }
  loadcust() {

    let params1 = new HttpParams().set('clientid', this.clientid);
    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/CustLoad", { params: params1 })
  }
  loadall() {

    let params1 = new HttpParams().set('clientid', this.clientid);
    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/AllLoad", { params: params1 })
  }
  loadusername() {
    let params1 = new HttpParams().set('clientid', this.clientid);
    return this.http.get("https://formulalistingwebservice2.azurewebsites.net/UsernameLoad", { params: params1 })
  }
  loadprojectname() {
    let params1 = new HttpParams().set('clientid', this.clientid);
    return this.http.get("https://formulalistingwebservice2.azurewebsites.net/ProjectnameLoad", { params: params1 })

  }
  loadcustomername() {
    let params1 = new HttpParams().set('clientid', this.clientid);
    return this.http.get("https://formulalistingwebservice2.azurewebsites.net/customernameLoad", { params: params1 })

  }
  loadstability() {
    let params1 = new HttpParams().set('clientid', this.clientid);
    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/stabilityLoad", { params: params1 })

  }
  loadcompat() {
    let params1 = new HttpParams().set('clientid', this.clientid);
    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/compLoad", { params: params1 })
  }
  loadstabilityweek() {
    let params1 = new HttpParams().set('clientid', this.clientid);
    return this.http.get("https://formulalistingwebservice2.azurewebsites.net/stabweekLoad", { params: params1 })
  }
  loadcomweek() {
    let params1 = new HttpParams().set('clientid', this.clientid);
    return this.http.get("https://formulalistingwebservice2.azurewebsites.net/compweekLoad", { params: params1 })
  }
  loadproduct(datefrom:string, dateto:string, checkedvalue:string, searchflag:string) {
    var datf: string = datefrom;
    var datt: string = dateto;
    var checkvalue: string = checkedvalue;
    var serachva: string = searchflag;

    let params1 = new HttpParams().set('datefrom', datf).set('dateto', datt).set('checkvalue', checkvalue).set('searchflag', serachva).set('clientid', this.clientid);
    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/ProLoad", { params: params1 })
  }
  ngOnInit() {
    this.clientid = this.Datashare.getconnection();
    
    this.allproduct = "1";
    this.searchflag = "0";
    if (this.allproduct == "1") {
      this.checkedvalue = "all";
    }

    this.productDatefrom = new Date().toISOString().split('T')[0];
    this.productDateto = new Date().toISOString().split('T')[0];
    if (this.searchflag == "0") {
      this.productDatefromfisrt = "";
      this.productDatetofisrt = "";
    }
    this.loadcustomer().subscribe((loadcust) => {
      console.warn("loadcustomer", loadcust)
      this.loadcustom = loadcust
      this.loadprodatacount = this.loadcustom.length;
    })
    this.loadgeneric().subscribe((loadgene) => {
      console.warn("loadgeneric", loadgene)
      this.loadgenericdata = loadgene
      this.loadprodatacount = this.loadgenericdata.length;
    })
    this.loadlabref().subscribe((loadlab) => {
      console.warn("loadlab", loadlab)
      this.loadlarefdata = loadlab
      this.loadprodatacount = this.loadlarefdata.length;
    })
    this.loadformula().subscribe((loadform) => {
      console.warn("loadform", loadform)
      this.loadformuladata = loadform
      this.loadprodatacount = this.loadformuladata.length;
    })
    this.loadcompany_owned().subscribe((loadcomp_load) => {
      console.warn("loadcomp_load", loadcomp_load)
      this.loadcmpanydata = loadcomp_load
      this.loadprodatacount = this.loadcmpanydata.length;
    })
    this.loadcust().subscribe((loadcusto) => {
      console.warn("loadcust", loadcusto)
      this.loadcustdata = loadcusto
      this.loadprodatacount = this.loadcustdata.length;
    })
    this.loadall().subscribe((loadall) => {
      console.warn("loadall", loadall)
      this.loadalldata = loadall
      this.loadprodatacount = this.loadalldata.length;
    })
    this.loadproduct(this.productDatefromfisrt, this.productDatetofisrt, this.checkedvalue, this.searchflag, ).subscribe((loadpro) => {
      console.warn("loadpro", loadpro)
      this.loadprodata = loadpro
      this.loadprodatacount = this.loadprodata.length;
    })

    this.loadstabilityweek().subscribe((loadstabilityweek) => {
      console.warn("loadstabilityweek", loadstabilityweek)
      this.loadstabilityweekdata = loadstabilityweek
      this.loadstabilityweekcount = this.loadstabilityweekdata.length;
    })
    this.loadcomweek().subscribe((loadcompweek) => {
      console.warn("loadcompweek", loadcompweek)
      this.loadcompweekdata = loadcompweek
      this.loadcompweekcount = this.loadcompweekdata.length;
    })
    this.loadusername().subscribe((loaduser) => {
      console.warn("loaduser", loaduser)
      this.loaduserdata = loaduser
    })
    this.loadprojectname().subscribe((loadproject) => {
      console.warn("loadproject", loadproject)
      this.loadprojectdata = loadproject
    })
    this.loadcustomername().subscribe((loadcustomer) => {
      console.warn("loadcustomer", loadcustomer)
      this.loadcustomerdata = loadcustomer
    })
    this.loadstability().subscribe((loadstability) => {
      console.warn("loadstability", loadstability)
      this.loadstabilitydata = loadstability
      this.loadprodatacount = this.loadstabilitydata.length;
    })
    this.loadcompat().subscribe((loadcompat) => {
      console.warn("loadstability", loadcompat)
      this.loadcompatdata = loadcompat
      this.loadprodatacount = this.loadcompatdata.length;
    })
  }

}
