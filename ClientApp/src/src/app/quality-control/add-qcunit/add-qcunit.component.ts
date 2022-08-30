import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';



@Component({
  selector: 'app-add-qcunit',
  templateUrl: './add-qcunit.component.html',
  styleUrls: ['./add-qcunit.component.css']
})
export class AddQcunitComponent implements OnInit {

  unit_save_data: string;
  qcunitname: string = '';
  isLoading = true;
  loadqcunits: any;
  unitname: any;
  qcunit: any;


  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService) { }


  QCUnits_load() {
    return this.http.get("https://formulalookupwebservice11.azurewebsites.net/loadqcunit")
  }

  savetunit(qcun: string) {

    if (this.qcunitname == "") {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter unit name' } });
    }

    this.unitsave(qcun).subscribe((QCUnitsave) => {
      console.warn("QCUnitsave", QCUnitsave)
      this.unit_save_data = QCUnitsave

      if (this.unit_save_data == "QC unit name already exists. Choose another one.") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'QC unit name already exists. Choose another one.' } });
      }
      else if (this.unit_save_data == "Inserted") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'saved successfully' } });
      }
      this.QCUnits_load().subscribe((QCUnits_load) => {
        this.isLoading = false;
        console.warn("QCUnits_load", QCUnits_load)
        this.loadqcunits = QCUnits_load

      })

    })
  }


  unitsave(qcun: any) {
    var unit = qcun;
    let params1 = new HttpParams().set('QCUnitName', unit);
    return this.http.get("https://formulalookupwebservice11.azurewebsites.net/saveqcunit", { params: params1, responseType: 'text' })
  }


  clearUNIT() {
    this.qcunitname = '';
  }


  ngOnInit() {



  }

}
