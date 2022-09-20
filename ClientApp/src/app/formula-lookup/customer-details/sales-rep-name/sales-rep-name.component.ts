import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { MessageBoxYesnoComponent } from 'src/app/message-box-yesno/message-box-yesno.component';




@Component({
  selector: 'app-sales-rep-name',
  templateUrl: './sales-rep-name.component.html',
  styleUrls: ['./sales-rep-name.component.css']
})
export class SalesRepNameComponent implements OnInit {
  Sales_person: any;
  filterMetadata = { count: 0 };
  searchitems: any = [];
  ID: string;
  SalesRepInit: string="";
  Name: string="";
  ContactNumber: string="";
  ContactEmail: string="";
  Region: string="";
  FirstName: string="";
  LastName: string="";
  SalesID: string = " ";
  Sales_data: any;
  Sales_delete: any;
  deleteddata: string;
  countrecords: any;
  constructor(public dialog: MatDialog,private http: HttpClient, public dialogRef: MatDialogRef<SalesRepNameComponent>) { }
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
    if (this.FirstName == "" || this.FirstName == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter Sales Person name' } });
    }
    else {
      this.Salesper_saveup(fstname, CNnum, Rgn, lstnam, mail, initial).subscribe((SP_Details) => {
        console.warn("SP_Details", SP_Details)
        this.Sales_data = SP_Details



        if (this.Sales_data == "Inserted") {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Sales Person:' + this.FirstName + ' is saved successfully' } });
        }
        else if (this.Sales_data == "Updated") {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Sales Person:' + this.FirstName + ' is updated successfully' } });
        }
        this.Salespersondata().subscribe((Salespersondetails) => {
          console.warn("cus_search", Salespersondetails)
          this.Sales_person = Salespersondetails
          this.countrecords = this.Sales_person.length
        })

      })

    }


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
    return this.http.get("https://smartformulatorcustomerwebservice3.azurewebsites.net/savesalesperson", { params: params1, responseType: 'text' })
  }



  SalesPersondelete() {

    var ID = this.SalesID ;
    var Name = this.FirstName;
    let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '30%', height: '15%', data: { displaydatagrid: 'This will delete the entry.Do you really want to delete this entry?' }, disableClose: true });



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ${result}');
      this.deleteddata = result;



      if (this.deleteddata == "false") { }
      else {
        this.Salesper_delete(ID, Name).subscribe((SPd_Details) => {
          console.warn("SPd_Details", SPd_Details)
          this.Sales_delete = SPd_Details
          //   this.wait(2000);
          if (this.Sales_delete == "Deleted") {
            this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Sales Person:' + Name + ' is deleted successfully.' } });
          }
          else if (this.Sales_delete == "BeingUsed") {
            this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'BeingUsed' } });
          }
          else {
            this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Failed to delete.' } });
          }

          this.Salespersondata().subscribe((Salespersondetails) => {
            console.warn("cus_search", Salespersondetails)
            this.Sales_person = Salespersondetails
            this.countrecords = this.Sales_person.length
          })
        })

      }



    });



  }
  Salesper_delete(id:string,nam:string) {



    var ID = id;
    var Name = nam;

     let params1 = new HttpParams().set('ID', ID).set('Name', Name);
    return this.http.get("https://smartformulatorcustomerwebservice3.azurewebsites.net/DeleteSalespersondata", { params: params1, responseType: 'text'})
  }

  ClearData() {
    this.FirstName = '';
    this.ContactNumber = '';
    this.Region = '';
    this.LastName = '';
    this.ContactEmail = '';
    this.SalesRepInit = '';
  }



  ngOnInit() {
    this.Salespersondata().subscribe((Salespersondetails) => {
      console.warn("cus_search", Salespersondetails)
      this.Sales_person = Salespersondetails
      this.countrecords = this.Sales_person.length
    })



  }



}
