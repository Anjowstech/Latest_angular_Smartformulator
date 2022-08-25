import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient, HttpParams } from '@angular/common/http';

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
  constructor(private http: HttpClient) { }
  helloWorld() {
    alert('Hello world!');
  }
  datesend() {

    this.searchflag = "1";

    this.loadproduct(this.productDatefrom, this.productDateto, this.checkedvalue, this.searchflag).subscribe((loadpro) => {
      console.warn("loadpro", loadpro)
      this.loadprodata = loadpro
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
    })
  }
  ClearData() {
    this.allproduct = "1";
    this.activeproducts = "0";
    this.inactiveproducts = "0";
    this.pendingproducts = "0";
    this.productDatefrom = new Date().toISOString().split('T')[0];
      
    this.productDateto = new Date().toISOString().split('T')[0];
    this.checkedvalue= "all"
    this.searchflag = "0";
    this.productDatefromfisrt = "";
    this.productDatetofisrt = "";
    this.loadproduct(this.productDatefromfisrt, this.productDatetofisrt, this.checkedvalue, this.searchflag).subscribe((loadpro) => {
      console.warn("loadpro", loadpro)
      this.loadprodata = loadpro
    })
  }
  loadcustomer() {

  
    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/CustomerLoad")
  }
  loadgeneric() {


    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/GenericLoad")
  }
  loadlabref() {


    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/LabLoad")
  }
  loadformula() {


    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/FormulaLoad")
  }
  loadcompany_owned() {


    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/CompanyLoad")
  }
  loadcust() {


    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/CustLoad")
  }
  loadall() {


    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/AllLoad")
  }
  loadusername() {
    return this.http.get("https://formulalistingwebservice2.azurewebsites.net/UsernameLoad")
  }
  loadprojectname() {
    return this.http.get("https://formulalistingwebservice2.azurewebsites.net/ProjectnameLoad")

  }
  loadcustomername() {
    return this.http.get("https://formulalistingwebservice2.azurewebsites.net/customernameLoad")

  }
  loadstability() {
    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/stabilityLoad")

  }
  loadcompat() {
    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/compLoad")
  }
  loadproduct(datefrom:string, dateto:string, checkedvalue:string, searchflag:string) {
    var datf: string = datefrom;
    var datt: string = dateto;
    var checkvalue: string = checkedvalue;
    var serachva: string = searchflag;

    let params1 = new HttpParams().set('datefrom', datf).set('dateto', datt).set('checkvalue', checkvalue).set('searchflag',serachva);
    return this.http.get("https://formulalistingwebservice1.azurewebsites.net/ProLoad", { params: params1 })
  }
  ngOnInit() {
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
    })
    this.loadgeneric().subscribe((loadgene) => {
      console.warn("loadgeneric", loadgene)
      this.loadgenericdata = loadgene
    })
    this.loadlabref().subscribe((loadlab) => {
      console.warn("loadlab", loadlab)
      this.loadlarefdata = loadlab
    })
    this.loadformula().subscribe((loadform) => {
      console.warn("loadform", loadform)
      this.loadformuladata = loadform
    })
    this.loadcompany_owned().subscribe((loadcomp_load) => {
      console.warn("loadcomp_load", loadcomp_load)
      this.loadcmpanydata = loadcomp_load
    })
    this.loadcust().subscribe((loadcusto) => {
      console.warn("loadcust", loadcusto)
      this.loadcustdata = loadcusto
    })
    this.loadall().subscribe((loadall) => {
      console.warn("loadall", loadall)
      this.loadalldata = loadall
    })
    this.loadproduct(this.productDatefromfisrt, this.productDatetofisrt,this.checkedvalue,this.searchflag).subscribe((loadpro) => {
      console.warn("loadpro", loadpro)
      this.loadprodata = loadpro
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
    })
    this.loadcompat().subscribe((loadcompat) => {
      console.warn("loadstability", loadcompat)
      this.loadcompatdata = loadcompat
    })
  }

}
