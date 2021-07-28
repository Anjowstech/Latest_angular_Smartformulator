import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectPropertyComponent } from './select-property/select-property.component';
@Component({
  selector: 'app-formula-property',
  templateUrl: './formula-property.component.html',
  styleUrls: ['./formula-property.component.css']
})
export class FormulaPropertyComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  selectproperty(): void {
    const dialogRef = this.dialog.open(SelectPropertyComponent, {
      width: '40%', height: '50%', disableClose: true
    });
  }
  ngOnInit() {
  }

}
