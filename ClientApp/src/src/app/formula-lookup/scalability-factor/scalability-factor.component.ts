import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-scalability-factor',
  templateUrl: './scalability-factor.component.html',
  styleUrls: ['./scalability-factor.component.css']
})
export class ScalabilityFactorComponent implements OnInit {

  quantity: any;
  unitvalue1: any = "g";
  unitq: any = [];
  constructor(public dialogRef: MatDialogRef<ScalabilityFactorComponent>) { }

  close() {
    this.unitq = [this.quantity, this.unitvalue1]
    this.dialogRef.close(this.unitq);

  }

  setunit(event: any) {
    this.unitvalue1 = event.target.value;

  }

  ngOnInit() {

  }

}


