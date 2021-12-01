import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
//import { NewPropertyComponent } from 'src/app/raw-material/load-property/new-property/new-property.component';
import { FrmNewPropertyComponent } from 'src/app/formula-lookup/formula-property/select-property/frm-new-property/frm-new-property.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataShareServiceService } from 'src/app/data-share-service.service';
///app/raw - material / load - property / new- property / new- property.component
@Component({
  selector: 'app-select-property',
  templateUrl: './select-property.component.html',
  styleUrls: ['./select-property.component.css']
})
export class SelectPropertyComponent implements OnInit {
  propertylist: any;
  selectedAll: any;
  Propertyvaluelist: any;
  listdata: any;
  getformulacode: any;
  constructor(public dialog: MatDialog, private http: HttpClient, private Datashare: DataShareServiceService) { }
  newproperty(): void {
    const dialogRef = this.dialog.open(FrmNewPropertyComponent, {
      width: '30%', height: '30%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.propertylist = result;
      
      this.PropertyCreation(this.getformulacode).subscribe((result7) => {
        console.warn("Propertylist", result7)
        this.Propertyvaluelist = result7
      })
     

    });

  }
  selectAll(itemlist) {
    this.listdata = itemlist.propertyName;
    for (var i = 0; i <this.listdata.length; i++) {
      this.listdata[i].selected = this.selectedAll;
    }
  }
  PropertyCreation(formulacode:string) {
    var formulcod: string = formulacode;

    let params1 = new HttpParams().set('Formulacode', formulcod);
    return this.http.get("https://smartformulatorformulalookupwebservice.azurewebsites.net/FormulaProperty_Load", { params: params1 });

  }
  ngOnInit() {
   this.getformulacode = this.Datashare.getformcode()

    this.PropertyCreation(this.getformulacode).subscribe((result7) => {
      console.warn("Propertylist", result7)
      this.Propertyvaluelist = result7
    })
  }

}
