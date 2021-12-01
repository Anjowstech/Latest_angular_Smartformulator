import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewInstructionComponent } from './new-instruction/new-instruction.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { DialogData } from 'src/app/formula-lookup/formula-lookup.component';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-formula-instruction',
  templateUrl: './formula-instruction.component.html',
  styleUrls: ['./formula-instruction.component.css']
})
export class FormulaInstructionComponent implements OnInit {
  dataraw_formulainstruction: any;
  formulacodeinstruction: string ="";
  formuladatainstr: string = "";

  constructor(public dialog: MatDialog, private http: HttpClient, public dialogRef: MatDialogRef<FormulaInstructionComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private Datashare: DataShareServiceService) { }

  Loadformulainstruction() {
    return this.http.get("https://smartformulatorformulalookupwebservice.azurewebsites.net/DisplayFormulainstruction");
  }
  setvalues(raw_formula)
  {
    this.formulacodeinstruction = raw_formula.InstrCode;
    this.formuladatainstr = raw_formula.InstrText;
    this.Datashare.sendforminstruction(this.formulacodeinstruction);
    this.Datashare.sendforminstdata(this.formuladatainstr);
  }
  setvalues2(raw_formula) {
    
      this.formuladatainstr = raw_formula.InstrText;
    }
    close() {
      // this.searchitems = [this.formulacodedata, this.formulanamedata, this.lbnotedata]
      this.dialogRef.close(this.formuladatainstr);
   
  }
 
  newinstruction1(): void {
    this.Datashare.sendforminstruction("");
    this.Datashare.sendforminstdata("");
  }  

 newinstruction(): void {

   const dialogRef = this.dialog.open(NewInstructionComponent, {  width: '30%', height: '45%',
      disableClose: true,
    });
   dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed', result);

     this.Loadformulainstruction().subscribe((resultraw_formulainstruction) => {
       console.warn("resultraw_formulainstruction", resultraw_formulainstruction)
       this.dataraw_formulainstruction = resultraw_formulainstruction
     })

   });

   
  }
  ngOnInit() {
  
    this.Loadformulainstruction().subscribe((resultraw_formulainstruction) => {
      console.warn("resultraw_formulainstruction", resultraw_formulainstruction)
      this.dataraw_formulainstruction = resultraw_formulainstruction
    })


  }

}
