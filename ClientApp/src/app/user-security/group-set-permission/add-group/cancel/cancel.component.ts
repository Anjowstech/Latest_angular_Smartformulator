import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private dialogRef: MatDialogRef<CancelComponent>) { }
  public cancel(): void { // To cancel the dialog window
    this.dialogRef.close();
  }

  public cancelN(): void {
    this.dialog.closeAll();
  }

  ngOnInit() {
  }

}
