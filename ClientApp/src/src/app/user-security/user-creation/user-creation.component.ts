import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataShareServiceService } from '../../data-share-service.service';
//import { UserChangeusergroupComponent } from 'src/app/user-security/user-changeusergroup/user-changeusergroup.component'
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {
  public data: any = []
  name: string;
  addr: string;
  phn: string;
  mail: string;
  uname: string;
  pwd: string;
  dept: string;
  not: string;
  acceptcreation: any;
  insertusedata: any;
  dropdowndept: any;
  deptdroptdown: any;
  constructor(public dialog: MatDialog, private http: HttpClient, private Datashare: DataShareServiceService) { }

  ngOnInit() {
    this.Departmentloading().subscribe((result) => {
      console.warn("result1", result)
      this.dropdowndept = result
    })
    this.Departmentdropdown().subscribe((result) => {
      console.warn("result2", result)
      this.deptdroptdown = result
    })
  }
  AddDepartmentDialog(): void {
    const dialogRef = this.dialog.open(AddDepartmentComponent, {
      width: '930px', height: '550px', disableClose: true
    });
  }
  ResetPasswordDialog(): void {
    const dialogRef = this.dialog.open(ResetPasswordComponent, {
      width: '930px', height: '400px', disableClose: true
    });
  }
  save(name, Address, Phone, Email, Username, Password, Dept, usergroup, Notes) {
    this.usercreation(name, Address, Phone, Email, Username, Password, Dept, usergroup, Notes).subscribe((result7) => {
      console.warn("resultsavesup", result7)
      this.acceptcreation = result7
    })
    this.dialog.closeAll();
    this.Datashare.filter('Register click');
  }
  usercreation(names: string, addresss: string, phones: string, emails: string,usernames:string,passwords:string,depts:string,usergroups:string,notess:string) {
    var name1: string = names;
    var addresss1: string = addresss;
    var phones1: string = phones;
    var emails1: string = emails;
    var usernames1: string = usernames;
    var passwords1: string = passwords;
    var depts1: string = depts;
    var usergroups1: string = usergroups;
    var notess1: string = notess;
    let params1 = new HttpParams().set('names', name1).set('add', addresss1).set('mob', phones1).set('mail', emails1).set('first', usernames1).set('passwords', passwords1).set('dep', depts1).set('usergid', usergroups1).set('notes', notess1).set
      ('userid',name1);
    return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/InsertUser", { params: params1 });

  }
  Departmentloading() {

    return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/Loaddepartment");

  }
  Departmentdropdown() {
    return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/userchangegroupdropdown");
  }
  
}

