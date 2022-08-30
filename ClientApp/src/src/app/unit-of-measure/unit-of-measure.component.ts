import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UnitmeasureMaintenanceComponent } from 'src/app/unit-of-measure/unitmeasure-maintenance/unitmeasure-maintenance.component';

@Component({
  selector: 'app-unit-of-measure',
  templateUrl: './unit-of-measure.component.html',
  styleUrls: ['./unit-of-measure.component.css']
})
export class UnitOfMeasureComponent implements OnInit {
  dataunitmeasure: any;
  constructor(public dialog: MatDialog, private http: HttpClient) { }

  OpenunitmeasureMaintenace(): void {
    const dialogRef = this.dialog.open(UnitmeasureMaintenanceComponent, {
      width: '50%', height: '43%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.Loadunitmeasure().subscribe((unitmeasure) => {
        console.warn("unitmeasure", unitmeasure)
        this.dataunitmeasure = unitmeasure
      })
    });
  }
  Loadunitmeasure() {
    return this.http.get("http://localhost/raw-sup-webservice2/unitofmeasure");
  }
  ngOnInit() {
    this.Loadunitmeasure().subscribe((unitmeasure) => {
      console.warn("unitmeasure", unitmeasure)
      this.dataunitmeasure= unitmeasure
    })
  }

}
