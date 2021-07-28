import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareServiceService } from '../../data-share-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserSecurityComponent } from '../user-security.component';
import { Subject } from 'rxjs';




@Component({
  selector: 'app-user-changeusergroup',
  templateUrl: './user-changeusergroup.component.html',
  styleUrls: ['./user-changeusergroup.component.css']
})
export class UserChangeusergroupComponent implements OnInit {
 
  frmusersecdata1: string;
  fromusersecdata2: string;
  dropdowndata1: any;
  clickeddata: string;
  selectedGroupName: string = '';
  dataval: any;
  datavalsel: any;
  finaldatasel: string;
  params1: any;
  gropname1: any;
  username1: any;
  username2: string= '';
  dropdowndata12: any;

  constructor(private http: HttpClient, private Datashare: DataShareServiceService, private router: Router, private route: ActivatedRoute, public dialog: MatDialog, public dialogRef: MatDialogRef<UserSecurityComponent>) {
 
  }
  

  selectChangeHandler(event: any) {
    //update the ui
    this.selectedGroupName = event.target.value;
    var finalselectgroupname = this.selectedGroupName;
  }
  ClickedDropdownRowdat(groupname:string) {
    this.clickeddata = groupname;
    console.log(groupname);
  }
  ClickedDropdownRowdata() {
    var dropdata: string = this.clickeddata;
  }
  
  userdropdown() {
    return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/userchangegroupdropdown");
  }
  changedropdown1() {
    this.dataval = this.Datashare.getItems();
    
    this.gropname1= this.selectedGroupName;
    this.username2 = this.dataval;
    let params1 = new HttpParams().set('ugid', this.gropname1).set('newname', this.username2);

    return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/updateusergroup1", { params: params1 });
  
  }
  //close(): void {
  
  //  const dialogRef = this.dialog.open(UserSecurityComponent, {
     
  //  });
  //}
  closeModal() {
    this.dialogRef.close();
  }
  changedropdown() {
    this.changedropdown1().subscribe((result1) => {
      console.warn("resultdrop", result1)
      this.dropdowndata12 = result1
    })
    this.btnClick();
    this.dialog.closeAll();
    this.Datashare.filter('Register click');
    //this.router.navigate(['/UserSecurity']);

  }
  btnClick() {
    this.router.navigateByUrl('/UserSecurity', { relativeTo: this.route });
  };
  
  
  ngOnInit() {
    this.userdropdown().subscribe((result1) => {
      console.warn("result1", result1)
      this.dropdowndata1 = result1
    })
    this.dataval = this.Datashare.getItems();
  

  }
}

//let result = objArray.map(({ foo }) => foo)

