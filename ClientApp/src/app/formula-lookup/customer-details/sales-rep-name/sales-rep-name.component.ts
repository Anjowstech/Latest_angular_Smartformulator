import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-sales-rep-name',
  templateUrl: './sales-rep-name.component.html',
  styleUrls: ['./sales-rep-name.component.css']
})
export class SalesRepNameComponent implements OnInit {
  Sales_person: any;
  searchitems: any = [];
  ID: string;
  SalesRepInit: string;
  Name: string;
  ContactNumber: string;
  ContactEmail: string;
  Region: string;
  FirstName: string;
  LastName: string;
  SalesID: string = " ";
  Sales_data: any;
  Sales_delete: any;
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<SalesRepNameComponent>) { }
  Salespersondata() {



    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/SalesPersonData");
  }



  setvalues(salespersondetails) {



    this.SalesID = salespersondetails.ID;
    this.SalesRepInit = salespersondetails.SalesRepInit;
    this.Name = salespersondetails.Name;
    this.ContactNumber = salespersondetails.ContactNumber;
    this.ContactEmail = salespersondetails.ContactEmail;
    this.Region = salespersondetails.Region;
    this.FirstName = salespersondetails.FirstName;
    this.LastName = salespersondetails.LastName;



    this.searchitems = [this.ID, this.SalesRepInit, this.Name];




  }
  close() {



    this.dialogRef.close(this.searchitems);



  }



  SalesPersonsaveupdate(fstname: string, CNnum: string, Rgn: string, lstnam: string, mail: string, initial: string) {
    this.Salesper_saveup(fstname, CNnum, Rgn, lstnam, mail, initial).subscribe((SP_Details) => {
      console.warn("SP_Details", SP_Details)
      this.Sales_data = SP_Details
    })



  }

  Salesper_saveup(fstname, CNnum, Rgn, lstnam, mail, initial) {



    var Firstname = fstname;
    var Contactnum = CNnum;
    var Region = Rgn;
    var Lastname = lstnam;
    var MailId = mail;
    var Salesrepintial = initial;
    var SPid = this.SalesID



    let params1 = new HttpParams().set('ID', SPid).set('FirstName', Firstname).set('LastName', Lastname).set('ContactNumber', Contactnum).set('ContactEmail', MailId).set('Region', Region).set('SalesRepInit', Salesrepintial);
    return this.http.get("https://smartformulatorcustomerwebservice3.azurewebsites.net/savesalesperson", { params: params1 })
  }



  SalesPersondelete() {



    this.Salesper_delete().subscribe((SPd_Details) => {
      console.warn("SPd_Details", SPd_Details)
      this.Sales_delete = SPd_Details
    })




  }
  Salesper_delete() {



    var ID = this.SalesID;
    var Name = this.FirstName

    let params1 = new HttpParams().set('ID', ID).set('Name', Name);
    return this.http.get("https://smartformulatorcustomerwebservice3.azurewebsites.net/DeleteSalespersondata", { params: params1 })
  }





  ngOnInit() {
    this.Salespersondata().subscribe((Salespersondetails) => {
      console.warn("cus_search", Salespersondetails)
      this.Sales_person = Salespersondetails
    })



  }



}
