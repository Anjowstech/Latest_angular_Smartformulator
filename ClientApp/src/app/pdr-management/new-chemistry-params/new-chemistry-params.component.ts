import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddChemistryComponent } from './add-chemistry/add-chemistry.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-new-chemistry-params',
  templateUrl: './new-chemistry-params.component.html',
  styleUrls: ['./new-chemistry-params.component.css']
})
export class NewChemistryParamsComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  loadpdrno: string;
  pdrno: string;
  datachem: any;
  claimdlt: string;
  chemdlt_data: any;
  projectname: string;
  Claim: string;
  Method: string;
  DataListbatch1: any = [];
  savechemauditrial: any;
  savechemistry_data: any;
  dataloadaudittrackpdr: any;
  olddatachem: any;
  username: string;
  userna: string;
  i: number;
  j: number;
  selectedRowIndex = -1;
  constructor(public dialog: MatDialog, private http: HttpClient, public datashare: DataShareServiceService, @Inject(MAT_DIALOG_DATA) public data: any) { }



  openaddchemistry(): void {
    const dialogRef = this.dialog.open(AddChemistryComponent, {
      width: '30%', height: '30%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadpdrno = this.datashare.getpdrno();
      this.loadchemistry(this.loadpdrno).subscribe((loadchemdata) => {
        console.warn("loadchemdata", loadchemdata)
        this.datachem = loadchemdata

      })
    });
  }

  loadchemistry(Pdrno) {
    var pdr: string = Pdrno;
    let params1 = new HttpParams().set('pdrno', pdr);
    return this.http.get("https://smartformulatorpdrwebservice4.azurewebsites.net/FillPDRCOAChemistry", { params: params1 })
  }
  setchemvalues(chem_load) {
    this.claimdlt = chem_load.Claim

  }
  selectedChanged(e) {
    this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
    var clmvalue: string = this.dataGrid.instance.cellValue(this.selectedRowIndex, "Claim");
  }



  chemparamdelete() {
    this.Chem_delete().subscribe((dlt_chem) => {
      console.warn("dlt_chem", dlt_chem)
      this.chemdlt_data = dlt_chem
      if (this.chemdlt_data == "Parameter is deleted successfully.") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Parameter is deleted successfully.' } });
        this.loadchemistry(this.pdrno).subscribe((loadchemdata) => {
          console.warn("loadchemdata", loadchemdata)
          this.datachem = loadchemdata
        })
      }
    })
    //this.loadchemistry(this.loadpdrno).subscribe((loadchemdata) => {
    //  console.warn("loadchemdata", loadchemdata)
    //  this.datachem = loadchemdata



    //})



  }
  Chem_delete() {
    var clmvalue: string = this.dataGrid.instance.cellValue(this.selectedRowIndex, "Claim");
    var CLaim = clmvalue;
    let params1 = new HttpParams().set('claim', CLaim);
    return this.http.get("https://smartformulatorpdrwebservice4.azurewebsites.net/deletechemistryparams", { params: params1, responseType: 'text' })
  }
  savechemistry() {
    var pdrno = this.pdrno
    var operation = "chemistry"
    var datalistraw: any = JSON.stringify(this.DataListbatch1);
    var micro = "";
    let params1 = new HttpParams().set('chejson', datalistraw).set('PDRNo', pdrno).set('operation', operation).set('microjson', micro);
    return this.http.get("https://formulalookupwebservice17.azurewebsites.net/Save_parms", { params: params1, responseType: 'text' })
  }
  auditchem1(Limits, claim) {
    var pdrno = this.pdrno
    /*var task1 = Claim;*/
    var task1 = Limits
    var task = "Chemistry params: Parameter" + claim + "value" + " " + task1 + " " + "is changed."
    var datalistraw: any = JSON.stringify(this.DataListbatch1);
    var micro = "";
    let params1 = new HttpParams().set('PDRNo', pdrno).set('task', task).set('ProjectName', this.projectname).set('username', this.userna);
    return this.http.get("https://formulaproductization4.azurewebsites.net/audittrial", { params: params1, responseType: 'text' })
  }
  audittrackloadpdr(pdrno: string) {
    var PdrNo = pdrno;
    let params1 = new HttpParams().set('PDRNo', PdrNo)
    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/AuditTrackingLoad", { params: params1 });
  }
  auditchem(Limits, claim) {
    var pdrno = this.pdrno
    /*var task1 = Claim;*/
    var task1 = Limits
    var task = "Chemistry params: Parameter" + claim + "value" + " " + task1 + " " + "is added."
    var datalistraw: any = JSON.stringify(this.DataListbatch1);
    var micro = "";
    let params1 = new HttpParams().set('PDRNo', pdrno).set('task', task).set('ProjectName', this.projectname).set('username', this.userna);
    return this.http.get("https://formulaproductization4.azurewebsites.net/audittrial", { params: params1, responseType: 'text' })
  }
  setvalueschemistry(chedata: any) {
    this.i = 0;
    this.j = 0;
    for (let search of chedata) {
      this.DataListbatch1[this.i] = ([{
        linenumber: "1",
        test: search.Claim,
        method: search.Method,
        limits: search.Limits,
        username: search.username,
      }]);
      this.i++;
    }
  }
  compareArray() {
    var datach: string[] = new Array();
    this.datachem.forEach(array1Ttem => {
      datach.push(array1Ttem.Limits);
    })
    var i = 0;
    this.olddatachem.forEach(array2Item => {
      if (datach[i] == array2Item.Limits) {
        console.log("It's match", datach);
      }
      else {
        var claim: any = array2Item.Claim
        // console.log("This item not present in array =>", array1Ttem);
        this.auditchem1(datach[i], claim).subscribe((savechemaudittrial) => {
          console.warn("savechemaudittrial", savechemaudittrial)
          this.savechemauditrial = savechemaudittrial
        })
      }
      i++;
    })
  }
  savechemistryparamlist() {
    this.setvalueschemistry(this.datachem);
    this.compareArray();
    if (this.olddatachem.length == 0) {
      var i = 0;
      this.datachem.forEach(array2Item => {
        if (array2Item.Limits != "") {
          var claim: any = array2Item.Claim
          // console.log("This item not present in array =>", array1Ttem);
          this.auditchem(array2Item.Limits, claim).subscribe((savechemaudittrial) => {
            console.warn("savechemaudittrial", savechemaudittrial)
            this.savechemauditrial = savechemaudittrial
          })
        } else {
        }
        i++;
      })
    }
    this.savechemistry().subscribe((savechemistry) => {
      console.warn("savechemistry", savechemistry)
      this.savechemistry_data = savechemistry
      if (this.savechemistry_data == "inserted") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Params Saved Successfully' } });
        this.audittrackloadpdr(this.pdrno).subscribe((loadpdraudittrack) => {
          console.warn("loadpdraudittrack", loadpdraudittrack)
          this.dataloadaudittrackpdr = loadpdraudittrack
        })
      }
    })
  }


  ngOnInit() {
    var pdrdata = this.data.displaydata;
    this.pdrno = this.data.displaydata[0];
    this.projectname = this.data.displaydata[1];
    this.userna = this.data.displaydata[2];
    this.loadpdrno = this.datashare.getpdrno();
    this.loadchemistry(this.loadpdrno).subscribe((loadchemdata) => {
      console.warn("loadchemdata", loadchemdata)
      this.datachem = loadchemdata

    })
  }
}
