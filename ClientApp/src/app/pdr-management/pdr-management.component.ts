import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchProjectPdrComponent } from 'src/app/pdr-management/search-project-pdr/search-project-pdr.component';
import { SearchCustomerPdrComponent } from 'src/app/pdr-management/search-customer-pdr/search-customer-pdr.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CustomerDetailsComponent } from 'src/app//formula-lookup/customer-details/customer-details.component';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-pdr-management',
  templateUrl: './pdr-management.component.html',
  styleUrls: ['./pdr-management.component.css']
})
export class PdrManagementComponent implements OnInit {
  public isVisible: boolean = false;
  public isVisible2: boolean = false;
  public isVisible3: boolean = false;
  projectapprovalcheck: boolean;
  datecheck: boolean;
  pdrno: string;
  cursdate: string; 
  projectname: string;
  customername: string;
  currentstartDate:string;
  currentendDate: string;
  currentDate: string;
  currentDate1: Date
  assigneddatalo_data: any;
  myForm: FormGroup;
  customercode: string;
  AssignedTo: string='admin';
  Status: string ='WIP-Initiated';
  StartDate: string;
  CompletedDate: string;
  ProjDetails: string;
  Approvedproject: string;
  Revenue: string; 
  Priority: string='Low';
  PDRDate: string;
  Class: string;
  pdrData: any;
  pdrautogenerate_data: any
  Pdrdetails: any = [];
  Pdr_save_data: any;
  customerkey: string;
  Approv: boolean;
  apprproj_data: any;
  login_formpdr: FormGroup;
  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder) {
    this.login_formpdr = fb.group({
      'projname': ['', Validators.required],
     

      'terms': [false]
    });
  }

  opensearchprojectpdr(): void {
    const dialogRef = this.dialog.open(SearchProjectPdrComponent , {
      width: '60%', height: '70%', disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {
        this.pdrno = result[0];
        this.projectname = result[1];
        this.customername = result[2];
        if (this.projectname != null) {
          this.projectapprovalcheck = false;
          this.datecheck = true;
        }
      }
      if (result == "") {
        this.pdrauto().subscribe((pdrautogenerate) => {
          console.warn("pdrautogenerate", pdrautogenerate)
          this.pdrautogenerate_data = pdrautogenerate
          this.pdrno = this.pdrautogenerate_data
        })
      }

      this.PDRdataload(this.pdrno).subscribe((pdrload) => {
        console.warn("pdrload", pdrload)
        this.pdrData = pdrload
        this.PDRdata(this.pdrData)
      })
    });
  }
  showAlert(): void {
    if (this.isVisible) {
      return;
    }
    this.isVisible = true;
    setTimeout(() => this.isVisible = false, 5000)
  }
  showAlert2(): void {
    if (this.isVisible2) {
      return;
    }
    this.isVisible2 = true;
    setTimeout(() => this.isVisible2 = false, 5000)

  }
  showAlert3(): void {
    if (this.isVisible3) {
      return;
    }
    this.isVisible3 = true;
    setTimeout(() => this.isVisible3 = false, 5000)
  }
  PDRdata(pdrdatas: any) {
    for (let item of pdrdatas) {
   //   this.pdrnumb = item.PDRNo;
    //  this.projectna = item.ProjectName;
      this.AssignedTo = item.AssignedTo;
      this.Status = item.Status;
      this.cursdate = formatDate(new Date(item.StartDate), 'yyyy-MM-dd', 'en-US');
      //this.cursdate = item.StartDate.replaceAll("/", "-");
      this.currentstartDate = this.cursdate;
      this.currentendDate =   formatDate(new Date(item.CompletedDate), 'yyyy-MM-dd', 'en-US');
      this.ProjDetails = item.ProjDetails;
      this.Revenue = item.Revenue;
      this.Priority = item.Priority;
      this.customercode = item.CustomerCode;
      this.currentDate = formatDate(new Date(item.PDRDate), 'yyyy-MM-dd', 'en-US');
      this.Class = item.Class;
      this.Approvedproject = item.Approved;
      if (this.Approvedproject == "True") {
        this.Approv = true
      }
      else {
        this.Approv = false
      }








    }
  }

  PDRdataload(pdrnumber: string) {
    var pdrnum = pdrnumber;
    let params1 = new HttpParams().set('PDRNo', pdrnum);
    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/displaydetails", { params: params1 })
  }


  opencustomersearchpdr(): void {
    const dialogRef = this.dialog.open(SearchCustomerPdrComponent, {
      width: '60%', height: '70%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      
        this.customerkey = result[0];
        this.customername = result[1];
        this.customercode = result[2];
      
      


    });
  }
  ClearData() {
   
    this.pdrno = this.pdrautogenerate_data;
    this.Approv = false;
   // this.pdrno = '';
    this.projectname = '';
    this.customername = '';
    this.AssignedTo ='admin';
    this.Status = 'WIP-Initiated';
    this.StartDate = '';
    this.CompletedDate = '';
    this.ProjDetails = '';
    this.customercode = '';
    this.Revenue = '';
    this.Priority = 'Low';
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
    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/LoadAssignedTo");
  }
  pdrauto() {
    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/Auto_Gemerate_PDRNo", { responseType: 'text' });
  }
  Opencustomer(): void {
    const dialogRef = this.dialog.open(CustomerDetailsComponent, {
      width: '95%', height: '95%', disableClose: true
    });
  }
  changeassigned(event) {
    this.AssignedTo = event.target.value
  }
  changestatus(event) {
    this.Status = event.target.value
  }
  changepriority(event) {
    this.Priority = event.target.value
  }
  changecurrentdate(event) {
    this.currentDate = event.target.value
  }
  changestartdate(event) {
    this.currentstartDate = event.target.value
    this.currentendDate = this.currentstartDate 
  }
  changeenddate(event) {
    this.currentendDate = event.target.value
  }
  Pdr_Save(pdrn: string, projn: string) {
    this.markFormTouched(this.login_formpdr);
    if (this.login_formpdr.valid) {

      this.Pdrdetails = [pdrn, projn, this.customercode, this.AssignedTo, this.currentstartDate, this.currentendDate, this.Status, this.currentDate, this.Priority, "false"]

      this.Pdr_savedata(this.Pdrdetails).subscribe((Pdr_savepdr) => {
        console.warn("Pdr_savepdr", Pdr_savepdr)
        this.Pdr_save_data = Pdr_savepdr
      })
      if (this.Pdr_save_data == "Inserted") {
        this.showAlert();
      }
      else {
        this.showAlert3();
      }
     
    }
    else {
      this.showAlert3();
      this.login_formpdr.controls['terms'].setValue(false);
    }
  }


  Pdr_savedata(Pdrdetails) {
    var operat: string = "Save";
    var usernam: string = "admin";
    let params1 = new HttpParams().set('PDRDetail', Pdrdetails).set('operation', operat).set('username', usernam);
    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/Save_Update_PDR", { params: params1, responseType: 'text' })
  }
  Pdr_Update(pdrn: string, projn: string) {
    this.markFormTouched(this.login_formpdr);
    if (this.login_formpdr.valid) {

      this.Pdrdetails = [pdrn, projn, this.customercode, this.AssignedTo, this.currentstartDate, this.currentendDate, this.Status, this.currentDate, this.Priority, "false"]

      this.Pdr_saveupdateup(this.Pdrdetails).subscribe((Pdr_update) => {
        console.warn("Pdr_update", Pdr_update)
        this.Pdr_save_data = Pdr_update
      })
      if (this.Pdr_save_data == "Updated") {
        this.showAlert2();
      }
    
    }
    else {
      this.login_formpdr.controls['terms'].setValue(false);
    }
  }


  markFormTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) { control.markAsTouched(); this.markFormTouched(control); }
      else { control.markAsTouched(); };
    });
  };
  Pdr_saveupdateup(Pdrdetails) {
    var operat: string = "Update";
    var usernam: string = "admin";
    var pdrdetails: any = Pdrdetails;
    this.projectapprovalcheck = false;
    let params1 = new HttpParams().set('PDRDetail', pdrdetails).set('operation', operat).set('username', usernam);
    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/Save_Update_PDR", { params: params1, responseType: 'text' })

  }
  approvedprojectChange(event) {
    this.Approvedproject = event.target.checked.toString();
    if (this.Approvedproject == "true") {
      this.Approvedproject = "true"
      this.Approv = true
    
      //Method approve
    }
    else {
      this.Approvedproject = "false";
      this.Approv = false
    }
    this.apprproject(this.pdrno, this.projectname, this.Approvedproject).subscribe((apprproj) => {
      console.warn("assigneddatalo", apprproj)
      this.apprproj_data = apprproj
    })
  }
  apprproject(pdr:string,projectnam:string,appro:string) {
    var pdrdata = pdr;
    var proname = projectnam;
    var approver = appro;
    var usernam: string = "admin";
   
    let params1 = new HttpParams().set('PDRNo', pdrdata).set('ProjectName', proname).set('username', usernam).set('chkprojectapproval1', approver);
    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/ProjectApproval", { params: params1 })
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

