import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-create-lab-tkts',
  templateUrl: './create-lab-tkts.component.html',
  styleUrls: ['./create-lab-tkts.component.css']
})
export class CreateLabTktsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  ccustomerdet:string=""
  cprojectname: string = ""
  cformulaname: string = ""
  clabbatch: string = ""
  cPDRNo: string = ""
  cformulaode: string = ""

  ngOnInit() {
    var pdrno = this.data.displaydata;
    this.ccustomerdet = this.data.displaydata[4];
    this.cprojectname = this.data.displaydata[3];
    this.cformulaname = this.data.displaydata[2];
    this.clabbatch;
    this.cPDRNo = this.data.displaydata[1];
    this.cformulaode = this.data.displaydata[0];
    
  }

}
