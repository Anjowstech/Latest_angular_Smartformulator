import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-frm-new-property',
  templateUrl: './frm-new-property.component.html',
  styleUrls: ['./frm-new-property.component.css']
})
export class FrmNewPropertyComponent implements OnInit {
  acceptPropertyvalue: any;
  constructor(private http: HttpClient, public dialog: MatDialog, public dialogRef: MatDialogRef<FrmNewPropertyComponent>) { }
  AddfrmProperty(PropertyName: string) {
    this.PropertyCreation(PropertyName).subscribe((result7) => {
      console.warn("resultsavesfrmProperty", result7)
      this.acceptPropertyvalue = result7
    })
  }
  close() {
    this.dialogRef.close(this.acceptPropertyvalue );
  }
  PropertyCreation(CPropertyName: string) {
    var SPropertyName: string = CPropertyName;
    //var operation1: string = "property";
    let parms = new HttpParams().set('PropertyName', SPropertyName);
    return this.http.get("https://smartformulatorformulalookupwebservice.azurewebsites.net/formulaproperty", { params: parms });
   
  }
  ngOnInit() {
  }

}
