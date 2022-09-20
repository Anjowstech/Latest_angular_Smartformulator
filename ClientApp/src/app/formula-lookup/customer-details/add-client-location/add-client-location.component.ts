import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HttpClient, HttpParams } from '@angular/common/http';
import { MessageBoxComponent } from '../../../message-box/message-box.component';
import { DataShareServiceService } from '../../../data-share-service.service';

@Component({
  selector: 'app-add-client-location',
  templateUrl: './add-client-location.component.html',
  styleUrls: ['./add-client-location.component.css']
})
export class AddClientLocationComponent implements OnInit {
  addclientlocationload: string[];
  isclienthiddensa: boolean = false;
  isclienthiddenup: boolean = true;
  location: string;
  address: string="";
  state: string="";
  city: string="";
  country: string="";
  zipcode: string="";
  clid: string="";
  client_loc_data: any;
  cuscode: string;
  contactno: string="";
  contactperson: string="";
  email: string="";
  fax: string="";
  notes: string="";
  telephone: string="";
  client_loc_updata: any;

  constructor(public dialog: MatDialog,public datashare: DataShareServiceService, private http: HttpClient) { }
  Client_Locationsave() {
    if (this.location == "" || this.location == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter location name.' } });

    }
    else {
      this.Client_Locationsaveup().subscribe((SaveClient_Loc) => {
        console.warn("SaveClient_Loc", SaveClient_Loc)
        this.client_loc_data = SaveClient_Loc

        if (this.client_loc_data == "Inserted") {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Client Location is added successfully.' } });
          this.isclienthiddensa = true;
          this.isclienthiddenup = false;
        }
        
      })
    }
    
  }
  Client_Locationupdate() {
    this.Client_Locationupdateup().subscribe((UpdateClient_Loc) => {
      console.warn("UpdateClient_Loc", UpdateClient_Loc)
      this.client_loc_updata = UpdateClient_Loc
      //this.wait(2000);
      if (this.client_loc_updata == "Updated") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Client Location is updated successfully.' } });
        this.isclienthiddensa = true;
        this.isclienthiddenup = false;
      }
    })
  }
  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
  Client_Locationsaveup() {
    this.isclienthiddensa = true;
    this.isclienthiddenup = false;
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
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/SaveupdateClientLocation", { params: params1, responseType:'text' })
  }
  validemail(event) {
    var val: any = event.target.value;
    if (val != "") {
      var regexp = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
      var serchfind = regexp.test(val);
      if (serchfind == false) {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'invalid email' } });
        this.email = '';
      }
    }
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
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/SaveupdateClientLocation", { params: params1, responseType: 'text' })
  }
  ClearData() {
    this.isclienthiddensa = false;
    this.isclienthiddenup = true;
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
    if (this.location == "" || this.location == undefined) {
      this.isclienthiddensa = false;
      this.isclienthiddenup = true;
    }
    else {
      this.isclienthiddensa = true;
      this.isclienthiddenup = false;
    }

  }

}
