import { Component, OnInit } from '@angular/core';

import { DataShareServiceService } from 'src/app/data-share-service.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-add-client-location',
  templateUrl: './add-client-location.component.html',
  styleUrls: ['./add-client-location.component.css']
})
export class AddClientLocationComponent implements OnInit {
  addclientlocationload: string[];
  location: string;
  address: string;
  state: string;
  city: string;
  country: string;
  zipcode: string;
  clid: string;
  client_loc_data: any;
  cuscode: string;
  contactno: string;
  contactperson: string;
  email: string;
  fax: string;
  notes: string;
  telephone: string;
  client_loc_updata: any;

  constructor(public datashare: DataShareServiceService, private http: HttpClient) { }
  Client_Locationsave() {

    this.Client_Locationsaveup().subscribe((SaveClient_Loc) => {
      console.warn("SaveClient_Loc", SaveClient_Loc)
      this.client_loc_data = SaveClient_Loc
    })
  }
  Client_Locationupdate() {
    this.Client_Locationupdateup().subscribe((UpdateClient_Loc) => {
      console.warn("UpdateClient_Loc", UpdateClient_Loc)
      this.client_loc_updata = UpdateClient_Loc
    })
  }
  Client_Locationsaveup() {

    var cstmrcode = this.cuscode;
    var Clid: string = "";
    var loc = this.location;
    var address = this.address;
    var city = this.city;
    var state = this.state;
    var country = this.country;
    var zip = this.zipcode;
    var tele = this.telephone;
    var emailid = this.email;
    var cperson = this.contactperson;
    var cno = this.contactno;
    var fAx = this.fax;
    var locnotes = this.notes;
    var oper: string = "Save";
    let params1 = new HttpParams().set('CusCode', cstmrcode).set('CLId', Clid).set('Address', address).set('LocationName', loc).set('City', city).set('State', state).set('Country', country).set('ZipCode', zip).set('Telephone', tele).set('Fax', fAx).set('Emailid', emailid).set('ContactPerson', cperson).set('ContactNo', cno).set('LocationNotes', locnotes).set('operation', oper);
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/SaveupdateClientLocation", { params: params1 })
  }

  Client_Locationupdateup() {

    var cstmrcode = this.cuscode;
    var Clid = this.clid;
    var loc = this.location;
    var address = this.address;
    var city = this.city;
    var state = this.state;
    var country = this.country;
    var zip = this.zipcode;
    var tele = this.telephone;
    var emailid = this.email;
    var cperson = this.contactperson;
    var cno = this.contactno;
    var fAx = this.fax;
    var locnotes = this.notes;
    var oper: string = "Update";
    let params1 = new HttpParams().set('CusCode', cstmrcode).set('CLId', Clid).set('Address', address).set('LocationName', loc).set('City', city).set('State', state).set('Country', country).set('ZipCode', zip).set('Telephone', tele).set('Fax', fAx).set('Emailid', emailid).set('ContactPerson', cperson).set('ContactNo', cno).set('LocationNotes', locnotes).set('operation', oper);
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/SaveupdateClientLocation", { params: params1 })
  }
  ClearData() {
    this.location = '';
    this.address = '';
    this.city = '';
    this.state = '';
    this.country = '';
    this.zipcode = '';
    this.contactno = '';
    this.contactperson = '';
    this.email = '';
    this.fax = '';
    this.notes = '';
    this.telephone = '';
  }

  ngOnInit() {

    this.addclientlocationload = this.datashare.getclientlocation()
    this.location = this.addclientlocationload[0];
    this.address = this.addclientlocationload[1];
    this.city = this.addclientlocationload[2];
    this.state = this.addclientlocationload[3];
    this.country = this.addclientlocationload[4];
    this.zipcode = this.addclientlocationload[5];
    this.clid = this.addclientlocationload[6];
    this.cuscode = this.datashare.getcustocode();
   // this.cuscode = this.addclientlocationload[7];
    this.contactno = this.addclientlocationload[8];
    this.contactperson = this.addclientlocationload[9];
    this.email = this.addclientlocationload[10];
    this.fax = this.addclientlocationload[11];
    this.notes = this.addclientlocationload[12];
    this.telephone = this.addclientlocationload[13];


  }

}
