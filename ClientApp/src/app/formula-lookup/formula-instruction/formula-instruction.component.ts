import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewInstructionComponent } from './new-instruction/new-instruction.component';

@Component({
  selector: 'app-formula-instruction',
  templateUrl: './formula-instruction.component.html',
  styleUrls: ['./formula-instruction.component.css']
})
export class FormulaInstructionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
 newinstruction(): void {

    const dialogRef = this.dialog.open(NewInstructionComponent, {
      width: '30%', height: '45%',
      disableClose: true,
    });
  }
  ngOnInit() {
  }

}
