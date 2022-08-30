import { Component, OnInit, ViewChild } from '@angular/core';
//import { MatDialog } from '@angular/material';
//import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {  AddGroupComponent } from 'src/app/user-security/group-set-permission/add-group/add-group.component'
//import { GroupSetPermissionComponent } from './user-security/group-set-permission/group-set-permission.component';
import { GroupSetPermissionComponent } from 'src/app/user-security/group-set-permission/group-set-permission.component';
import { UserCreationComponent } from 'src/app/user-security/user-creation/user-creation.component';
import { UserChangeusergroupComponent } from 'src/app/user-security/user-changeusergroup/user-changeusergroup.component';
import { EditUserComponent } from 'src/app/user-security/edit-user/edit-user.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { IItem } from '../IItem';
import { Subject } from 'rxjs';
//import { PostsService } from 'src/app/posts.service';
@Component({
  selector: 'app-user-security',
  templateUrl: './user-security.component.html',
  styleUrls: ['./user-security.component.css']
})
export class UserSecurityComponent implements OnInit {



  private _item: IItem = { Username1: '', GroupName1: '' }
  public selection: string;
  radioselected: string;
  date: string = "";
  task: string = ""
  username: string = ""
  username1: string = ""
  FullName: string = ""
  GroupName1: string = ""
  Status: string = ""
  data1: any;
  data2: any;
  data3: any;
  name: string;
  valuecheck: string = '';
  GroupName: string = ""
  GroupDescription: string = ""
  userselected = ""
  selectedStatus = ""
  HighlightRow: Number;
  Employee: any;
  ClickedRow6: any;
  clickeddata: string;
  clickeddata1: string;
  clickeddata2: string;
  clickeddata3: string;
  clickeddata4: string;
  clickeddata5: string;
  clickeddata6: string;
  clickeddata7: string;
  selectedRow: Number;
  setClickedRow: Function;

  //ClickedRow: any;  
  constructor(public dialog: MatDialog, private http: HttpClient, private Datashare: DataShareServiceService) {
    this.Datashare.listen().subscribe((m: any) => {
      this.GetUserList(this.valuecheck).subscribe((result3) => {
        console.warn("result3", result3)
        this.data3 = result3
      })
      })
    // this.dataservice.setOption(this.clickeddata);
    this.setClickedRow = function (index) {
      this.HighlightRow = index;
      //  console.log(index);
    }
  }
  public addItem() {
    
    var Username1: string = this.clickeddata;
  //    GroupName1: this.clickeddata1

 
    this.Datashare.addItem(Username1);
  }
  public addItem1() {



    var Username1: string = this.clickeddata;
    var GroupName1: string = this.clickeddata1
    var emailid1: string = this.clickeddata2;
    var password1: string = this.clickeddata3;
    var phone1: string = this.clickeddata4;
    var notes1: string = this.clickeddata5;
    var Department1: string = this.clickeddata6;
    var Address1: string = this.clickeddata7;
    //var UserGroupID: string = this.clickeddata8;
    this.Datashare.addItem1(Username1, emailid1, this.username1, password1, phone1, notes1, Department1, Address1, GroupName1);
  }

  ClickedRow(username: string, groupname: string, emailId: string, password: string, phone: string, notes: string, Department: string, Address: string, UserGroupID: string) {



    this.clickeddata = username;
    this.clickeddata1 = groupname;
    this.clickeddata2 = emailId;
    this.clickeddata3 = password
    this.clickeddata4 = phone;
    this.clickeddata5 = notes;
    this.clickeddata6 = Department;
    this.clickeddata7 = Address;

    console.log(username, groupname);
  }
  private selectedLink: string = "Active";
    openDialog(): void {
      const dialogRef = this.dialog.open(AddGroupComponent, {
        width: '940px', height: '850px', disableClose: true
      });
    }
  openGroupDialog(): void {
    const dialogRef = this.dialog.open(GroupSetPermissionComponent, {
      width: '940px', height: '850px', disableClose: true
    });
  }
  openGroupChangePerDialog(): void {
    const dialogRef = this.dialog.open(GroupSetPermissionComponent, {
      width: '940px', height: '850px', disableClose: true
    });
  }
  openAddUserDialog() {
    
      //width: '940px', height: '850px', disableClose: true
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '900%';
    
     const dialogRef = this.dialog.open(UserCreationComponent)
  }
  openEditUserDialog(): void {
    this.addItem1();
    const dialogRef = this.dialog.open(EditUserComponent , {
      width: '940px', height: '850px', disableClose: true
    });
  }
  openUserChangeGroupDialog(): void {
    this.addItem();
    const dialogRef = this.dialog.open(UserChangeusergroupComponent, {
      width: '700px', height: '350px',
    })
  }
  

  //constructor(public dialog: MatDialog) { }

  //openDialog() {
  //  const dialogRef = this.dialog.open(AddGroupComponent);

  //  dialogRef.afterClosed().subscribe(result => {
  //    console.log(`Dialog result: ${result}`);
  //  });
  //}
  Audittracking() {

    return this.http.get("");

  }
  GetGroupNameDes() {
    return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/groupsettingsdata");
  }
  GetUserList(check: string) {
    var active: string = check;
     let params1 = new HttpParams().set('userdatacheck', active);
    return this.http.get("", { params: params1 });
  }
  setradio(e: string) {
    this.GetUserList(e).subscribe((result3) => {
      console.warn("result3", result3)
      this.data3 = result3
    })
    
    
  }
  test() {
    return this.http.get("");
  }
  isSelected(name: string): boolean {
   
    if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
      return false;
    }

    return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
  }

  
  
  
  ngOnInit() {
    this.Audittracking().subscribe((result1) => {
      console.warn("result1", result1)
      this.data1 = result1
    })
    this.test().subscribe((result1) => {
      console.warn("AzureAppTest", result1)
      this.data1 = result1
    })
    this.GetGroupNameDes().subscribe((result2) => {
      console.warn("result2", result2)
      this.data2 = result2
    })
    this.GetUserList(this.valuecheck).subscribe((result3) => {
      console.warn("result3", result3)
      this.data3 = result3
    })
    this.isSelected(this.name)
  }
  

}
