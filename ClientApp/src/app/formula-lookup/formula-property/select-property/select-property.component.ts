import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewPropertyComponent } from 'src/app/raw-material/load-property/new-property/new-property.component';
///app/raw - material / load - property / new- property / new- property.component
@Component({
  selector: 'app-select-property',
  templateUrl: './select-property.component.html',
  styleUrls: ['./select-property.component.css']
})
export class SelectPropertyComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  newproperty(): void {
    const dialogRef = this.dialog.open(NewPropertyComponent, {
      width: '30%', height: '30%', disableClose: true
    });
  }
  ngOnInit() {
  }

}
