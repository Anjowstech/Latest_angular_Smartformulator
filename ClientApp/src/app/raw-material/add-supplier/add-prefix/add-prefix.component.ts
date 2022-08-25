import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-add-prefix',
  templateUrl: './add-prefix.component.html',
  styleUrls: ['./add-prefix.component.css']
})
export class AddPrefixComponent implements OnInit {
  abb: string = '';
  abbdescription: string = '';
  formname: string;
  datasaveabbraw: any;
  defaultdataprefix: any
  comppicturepath: string = "";
  compwebaddress: string = "";
  compemail: string = "";
  compfax: string = "";
  compnumber: string = "";
  compaddress: string = "";
  compname: string = "";
  compprefix: string = "";
  comppredescription: string = "";
  compseparator: string = "";
  compnumstart: string = "";
  constructor(private http: HttpClient) { }
  saveabbrawmaterials(abbrawmat: string, abbrawdescription: string) {
    var abbraw: string = abbrawmat;
    var descraw: string = abbrawdescription;
    let params1 = new HttpParams().set('abb', abbraw).
      set('formname', "Raw Materials").
      set('abbdescription', descraw);
    return this.http.get("https://smartformulatoradminworkwebservice.azurewebsites.net/saveabbreviation", { params: params1 });

  }
  saveabbformulation(abbform1: string, abbdescriptionform1: string) {
    var abbfo: string = abbform1;
    var descfor: string = abbdescriptionform1;
    var formula: string = "Formulation LookUp";
    let params1 = new HttpParams().set("abb", abbfo).
      set("formname", formula).
      set("abbdescription", descfor);

    return this.http.get("https://smartformulatoradminworkwebservice.azurewebsites.net/saveabbreviation", { params: params1 });

  }
  defaultsettingdata() {


    return this.http.get("https://smartformulatoradminworkwebservice.azurewebsites.net/defaultsettingsdata");
  }
  saverawprefix(abbrawform, abbdescriptionrawform) {

    return this.saveabbrawmaterials(abbrawform, abbdescriptionrawform).subscribe((result6) => {
      console.warn("resultsaveraw", result6)
      this.datasaveabbraw = result6
    })

  }
  defaultprefixload(defaultdataprefix)
{
    this.compname = defaultdataprefix[0].CompanyName;
    this.compaddress = defaultdataprefix[0].CompanyAddress;
    this.compnumber = defaultdataprefix[0].CompanyNumber;
    this.compfax = defaultdataprefix[0].Fax;
    this.compemail = defaultdataprefix[0].CompanyEmail;
    this.compwebaddress = defaultdataprefix[0].CompanyWebAddress;
    this.comppicturepath = defaultdataprefix[0].picturePath;
 
      this.compseparator = defaultdataprefix[0].SeperatorFormulationLookUp
      this.compnumstart = defaultdataprefix[0].StartingNumberFormulationLookUp
}
  ngOnInit() {
    this.saveabbformulation(this.abb, this.abbdescription).subscribe((result5) => {
      console.warn("result5", result5)
      this.datasaveabbraw  = result5
    })


    //this.saveabbrawmaterials(this.abb, this.abbdescription).subscribe((result6) => {
    //  console.warn("resultsaveraw", result6)
    //  this.datasaveabbraw = result6
    //})
  
   this.defaultsettingdata().subscribe((result4) => {
     console.warn("loaddefaultdata", result4)
     this.defaultdataprefix = result4
     this.defaultprefixload(this.defaultdataprefix);



   })
     
  }

}
