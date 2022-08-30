import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { DataShareServiceService } from '../../data-share-service.service';
import { ResetPasswordComponent } from '../user-creation/reset-password/reset-password.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  dataval: any;
  Name: any;
  Email: any;
  Username: any;
  Password: any;
  Phone: any;
  Notes: any;
  Department: any;
  Address: any;
  UserGroupID: any;
  DeptData: any;
  acceptupdate: any;
  name1: any;
  constructor(private http: HttpClient, private Datashare: DataShareServiceService, private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }
  Getuserlist() {
    var itemList: [string, string, string, string, string, string, string, string, string];
    var dar = this.Datashare.getItems1();
    this.Name = dar[0];
    this.Email = dar[1];
    this.Password = dar[3];
    this.Username = dar[0];
    this.Phone = dar[4];
    this.Notes = dar[5];
    this.Department = dar[6];
    this.UserGroupID = dar[8];
    this.Address = dar[7];





    //this.gropname1 = this.selectedGroupName;
    //this.username2 = this.dataval;
    //let params1 = new HttpParams().set('ugid', this.gropname1).set('newname', this.username2);



    //return this.http.get("http://24.187.220.60/SmartFormulator_WebService2/updateusergroup1", { params: params1 });



  }
  Deptloading() {



    return this.http.get("http://24.187.220.60/SmartFormulator_WebService2/Loaddepartment");



  }

  UserUpdate(kane: string, address: string, phone: string, email1: string, Dept: string, Note1: string) {
    this.name1 = kane;
    var addresss1: string = address;
    var phones1: string = phone;
    var emails1: string = email1;
    var Dep1: string = Dept;
    var note1: string = Note1;
    let params1 = new HttpParams().set('Username1', this.name1).set('Address1', addresss1).set('phone1', phones1).set('emailid1', emails1).set('dept1', Dep1).set('notes1', note1);
    return this.http.get("http://24.187.220.60/SmartFormulator_WebService2/EditUser", { params: params1 });



  }



  save(kanes1, address1, phone1, email11, dept1, notes11) {
    this.UserUpdate(kanes1, address1, phone1, email11, dept1, notes11).subscribe((result7) => {
      console.warn("resultsavesup", result7)
      this.acceptupdate = result7
      this.router.navigateByUrl('UserSecurityComponent');
    })
    this.dialog.closeAll();
    this.Datashare.filter('Register click');
  }
  ResetPasswordDialog(): void {
    const dialogRef = this.dialog.open(ResetPasswordComponent, {
      width: '930px', height: '400px', disableClose: true
    });
  }



  ngOnInit() {
    this.Getuserlist();

    this.Deptloading().subscribe((result) => {
      console.warn("result1", result)
      this.DeptData = result
    })
  }


}
