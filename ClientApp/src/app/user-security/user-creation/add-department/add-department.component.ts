import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataShareServiceService } from '../../../data-share-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  data1: any;
  deptid: any="";
  setClickedRow: Function;
  acceptdept: any;
  acceptupdatedept1: any;
  finalselected: any;
  selecteduserfalse: string = "";
  public selectedName: any; 
  acceptdeletedept: any;
  constructor(private http: HttpClient, private Datashare: DataShareServiceService, public dialog: MatDialog) {
    //this.setClickedRow = function (index) {
    //  this.HighlightRow = index;
    //}
  }
  public highlightRow(deptloading) {
    this.finalselected= this.selectedName = deptloading.DeptID;

  }
  selecteduserdet(deptloading: string) {
    this.selecteduserfalse = deptloading;
  }
  Deptloading() {

    return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/Loaddepartment");

  }
  DeptCreation(Deptname: string, Remarksval: string) {
    var op1: string = "insertion"
  
    var dept1: string = Deptname;
    var Remarks1: string = Remarksval;
    var Olddept1: string = Deptname;
    let parms = new HttpParams().set('department', dept1).set('remarks', Remarks1).set('operation', op1).set('depid', this.deptid);
    return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/inser_update_del", { params: parms });

  }
  SaveDept(deptname, Remarks) {
    this.DeptCreation(deptname, Remarks).subscribe((result7) => {
      console.warn("resultsavesDept", result7)
      this.acceptdept = result7
    })
    
    
  }
  DeptUpdate(Deptname1: string, Remarks1: string) {
    var op2: string = "Update";
    var dept2: string = Deptname1;
    var Remarks2: string = Remarks1;
    var olddept2: string = Deptname1;
    let parmsupdate = new HttpParams().set('department', dept2).set('remarks', Remarks2).set('operation', op2).set('depid', this.finalselected);
    return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/inser_update_del", { params: parmsupdate });
  }
  
  updatedept(deptname, Remarks) {
    this.DeptUpdate(deptname, Remarks).subscribe((result8) => {
      console.warn("resultupdatedept", result8)
      this.acceptupdatedept1 = result8
    })
  }
  DeptDelete() {
    var op3: string = "delete";
    let paramsdelete = new HttpParams().set('operation', op3).set('depid', this.finalselected);
    return this.http.get("http://24.187.220.60/SmartFormulator_Webservice2/inser_update_del", { params: paramsdelete });
  }
  deletedept() {
    this.DeptDelete().subscribe((result10) => {
      console.warn("resultdeletedept", result10)
      this.acceptdeletedept = result10
    })
  }
  ngOnInit() {
    this.Deptloading().subscribe((result) => {
      console.warn("result1", result)
      this.data1 = result
    })
  }

}
