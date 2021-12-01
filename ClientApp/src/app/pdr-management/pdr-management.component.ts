import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchProjectPdrComponent } from 'src/app/pdr-management/search-project-pdr/search-project-pdr.component';
import { SearchCustomerPdrComponent } from 'src/app/pdr-management/search-customer-pdr/search-customer-pdr.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CustomerDetailsComponent } from 'src/app//formula-lookup/customer-details/customer-details.component';
@Component({
  selector: 'app-pdr-management',
  templateUrl: './pdr-management.component.html',
  styleUrls: ['./pdr-management.component.css']
})
export class PdrManagementComponent implements OnInit {
  projectapprovalcheck: boolean;
  datecheck: boolean;
  pdrno: string;
  projectname: string;
  customername: string;
  currentstartDate:string;
  currentendDate: string;
  currentDate: string ;
  assigneddatalo_data: any;
  myForm: FormGroup;

  AssignedTo: string;
  Status: string;
  StartDate: string;
  CompletedDate: string;
  ProjDetails: string;

  Revenue: string; 
  Priority: string;
  PDRDate: string;
  Class: string;
  pdrData: any;
  pdrautogenerate_data:any

  constructor(public dialog: MatDialog, private http: HttpClient) {
  }

  opensearchprojectpdr(): void {
    const dialogRef = this.dialog.open(SearchProjectPdrComponent , {
      width: '60%', height: '70%', disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.pdrno = result[0];
      this.projectname = result[1];
      this.customername = result[2];
      if (this.projectname != null) {
        this.projectapprovalcheck = false;
        this.datecheck = true;
      }
     
      this.PDRdataload(this.pdrno).subscribe((pdrload) => {
        console.warn("pdrload", pdrload)
        this.pdrData = pdrload
        this.PDRdata(this.pdrData)
      })
    });
  }
  PDRdata(pdrdatas: any) {
    for (let item of pdrdatas) {
   //   this.pdrnumb = item.PDRNo;
    //  this.projectna = item.ProjectName;
      this.AssignedTo = item.AssignedTo;
      this.Status = item.Status;
      this.currentstartDate = new Date(item.StartDate).toISOString().substring(0, 10);
      this.currentendDate = new Date(item.CompletedDate).toISOString().substring(0, 10);
      this.ProjDetails = item.ProjDetails;
      this.Revenue = item.Revenue;
      this.Priority = item.Priority;
      this.currentDate = new Date(item.PDRDate).toISOString().substring(0, 10);
      this.Class = item.Class;









    }
  }

  PDRdataload(pdrnumber: string) {
    var pdrnum = pdrnumber;
    let params1 = new HttpParams().set('PDRNo', pdrnum);
    return this.http.get("http://24.187.220.60/Smartformulator_PDR_Webservice/displaydetails", { params: params1, })
  }


  opencustomersearchpdr(): void {
    const dialogRef = this.dialog.open(SearchCustomerPdrComponent, {
      width: '60%', height: '70%', disableClose: true
    });
  }
  ClearData() {
   
    this.pdrno = this.pdrautogenerate_data;
   
   // this.pdrno = '';
    this.projectname = '';
    this.customername = '';
    this.AssignedTo ='';
    this.Status = '';
    this.StartDate = '';
    this.CompletedDate = '';
    this.ProjDetails = '';

    this.Revenue = '';
    this.Priority = '';
    this.PDRDate = '';
    this.Class = '';
    this.projectapprovalcheck = true;
    this.datecheck = false;
    this.currentstartDate = new Date().toISOString().substring(0, 10);
    this.currentendDate = new Date().toISOString().substring(0, 10);
    this.currentDate = new Date().toISOString().substring(0, 10);
  }
  //openDialogpdr() {
  //  const dialogConfig = new MatDialogConfig();
  //  dialogConfig.disableClose = true;
  //  dialogConfig.width = '900%';

  //  const dialogRef = this.dialog.open(SearchProjectPdrComponent )
  //}
  //openDialogpdr() {

  //  const dialogConfig = new MatDialogConfig();

  //  dialogConfig.disableClose = true;
  //  dialogConfig.autoFocus = true;

  //  this.dialog.open(SearchProjectPdrComponent, dialogConfig);
  //}
  assignedtodataload() {
    return this.http.get("http://24.187.220.60/Smartformulator_PDR_Webservice/LoadAssignedTo");
  }
  pdrauto() {
    return this.http.get("http://24.187.220.60/Smartformulator_PDR_Webservice/Auto_Gemerate_PDRNo", { responseType: 'text' });
  }
  Opencustomer(): void {
    const dialogRef = this.dialog.open(CustomerDetailsComponent, {
      width: '95%', height: '95%', disableClose: true
    });
  }
  ngOnInit() {
    //this.myForm = new FormGroup({
    //  'presentDate': new FormControl((new Date()).toISOString().substring(0, 10)),
    //});
    this.assignedtodataload().subscribe((assigneddatalo) => {
      console.warn("assigneddatalo", assigneddatalo)
      this.assigneddatalo_data = assigneddatalo
    })
    this.pdrauto().subscribe((pdrautogenerate) => {
      console.warn("pdrautogenerate", pdrautogenerate)
      this.pdrautogenerate_data = pdrautogenerate
      this.pdrno = this.pdrautogenerate_data
    })
    this.currentstartDate = new Date().toISOString().substring(0, 10);
   this. currentendDate= new Date().toISOString().substring(0, 10);
    this.currentDate = new Date().toISOString().substring(0, 10);
    this.projectapprovalcheck = true;
    this.datecheck = false;
  }
}

