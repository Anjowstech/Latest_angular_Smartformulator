import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { stringify } from '@angular/compiler/src/util';
import { MessageBoxYesnoComponent } from 'src/app/message-box-yesno/message-box-yesno.component';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
@Component({
  selector: 'app-create-lab-tkts',
  templateUrl: './create-lab-tkts.component.html',
  styleUrls: ['./create-lab-tkts.component.css']
})
export class CreateLabTktsComponent implements OnInit {
  ccustomerdet: string = ""
  cprojectname: string = ""
  cformulaname: string = ""
  clabbatch: string = ""
  cPDRNo: string = ""
  qty: string = ""
  cformulaode: string = ""
  unit: string = 'g';
  ph: string = '0.00';
  Viscosity: string = '0.00';
  unit1: string;
  labatchticketautogenerate_data: any;
  labbatchecklimit_data: any;
  labbatchelimitcheck: string;
  labbatchsize: string = '';
  deleteddata: any;
  stability_data: any;
  pilotlab_data: any = [];
  dataList: any = [];
  isLoading = true;
  LabBatchNo: string = '';
  PDRNo: string = '';
  LabBatchDate: string = '';
  ProjectName: string = '';
  FormulaCode: string = '';
  FormulaName: string = '';
  Quantity: string = '';
  UnitName: string = '';
  Username: string = '';
  currentstartDate: string;
  TotalActualQty: string = '';
  TotalUnit: string = '';
  BatchType: string = '';
  userna: string;
  j: number;
  i: number;
  FormulagridList: safetytest[][] = [];
  Labbatchsavedata_data: any;
  islabatchupdate: boolean = true;
  islabatchsave: boolean = false;
  Approve: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient, public dialog: MatDialog) { }

  changestartdate(event) {
    this.currentstartDate = event.target.value
    // this.currentendDate = this.currentstartDate
  }
  onChange(change) {
    this.unit = change;
  }
  okclick() {
    this.labbatchchecklimit().subscribe((labbatcheck) => {
      console.warn("labbatcheck", labbatcheck)
      this.labbatchecklimit_data = labbatcheck
      this.labbatchelimitcheck = this.labbatchecklimit_data
    })
    if (this.labbatchelimitcheck == "true") {
      let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '30%', height: '15%', data: { displaydatagrid: 'Do you want Actual Qty to be Zeros or auto-populated based on %' }, disableClose: true });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed: ${result}');
        this.deleteddata = result;
        if (this.deleteddata == "false") {
          var copy = '0';
          this.loadbindstability(copy).subscribe((bindstability) => {
            this.isLoading = false;
            console.warn("bindstability", bindstability)
            this.pilotlab_data = bindstability
            this.qty = this.labbatchsize;
            this.unit1 = this.unit
          })
        }
        else {
          var copy = '1';
          this.loadbindstability(copy).subscribe((bindstability) => {
            this.isLoading = false;
            console.warn("bindstability", bindstability)
            this.pilotlab_data = bindstability
            this.qty = this.labbatchsize;
            this.unit1 = this.unit
          })
        }
      });
    } else {
      this.dialog.open(MessageBoxComponent, {
        width: '30%'
        , height: '20%', data: { displaydata: this.labbatchelimitcheck }
      });
    }
  }
  radioChangeIncidIngredient(event) {
    this.Approve = event.value;
  }
  Labbatch_Save() {
    this.LabBatchNo = this.clabbatch,
      this.PDRNo = this.cPDRNo,
      this.LabBatchDate = this.currentstartDate,
      this.ProjectName = this.cprojectname,
      this.FormulaCode = this.cformulaode,
      this.FormulaName = this.cformulaname,
      this.Quantity = this.labbatchsize,
      this.UnitName = this.unit,
      this.Username = this.userna,
      this.TotalActualQty = this.qty,
      this.TotalUnit = this.unit1,
      this.BatchType = '1'
    this.pdrgrid(this.pilotlab_data);
    this.Labbatch_Savedata().subscribe((Labbatchsavedata_data) => {
      console.warn("Labbatchsavedata_data", Labbatchsavedata_data)
      this.Labbatchsavedata_data = Labbatchsavedata_data
      if (this.Labbatchsavedata_data == "Inserted") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Labbatch tickets Details are added Successfully' } });
        this.islabatchupdate = false;
        this.islabatchsave = true;
      }
    });
  }
  pdrgrid(Formuladata2: any) {
    this.i = 0;
    this.j = 0;
    this.FormulagridList = [];
    for (let item2 of Formuladata2) {
      this.FormulagridList[this.i] = ([{
        Step: item2.Step,
        ItemCode: item2.ItemCode,
        GeneralItemCode: item2.GeneralItemCode,
        INCIName: item2.INCIName,
        Percentage: item2.Percentage,
        Quantity: item2.Quantity,
        Unit: item2.Unit,
        ActualQty: item2.ActualQty,
        IngredientTradeName: item2.IngredientTradeName,
        SupplierName: item2.SupplierName,
        Unitcost: item2.Unitcost,
        cost: item2.cost,
        Init1: item2.Init1,
        Init2: item2.Init2,
      }]);
      this.i++;

    }
  }
  Labbatch_Savedata() {
    var dtDetails: any = JSON.stringify(this.FormulagridList);
    var operation = 'Save';
    let params1 = new HttpParams().set('LabBatchNo', this.LabBatchNo).set('LabBatchDate', this.LabBatchDate).set('PDRNo', this.PDRNo).set('ProjectName', this.ProjectName).set('FormulaCode', this.FormulaCode).set('FormulaName', this.FormulaName).set('Quantity', this.Quantity).set('UnitName', this.UnitName).set('Username', this.Username).set('TotalActualQty', this.TotalActualQty).set('TotalUnit', this.TotalUnit).set('BatchType', this.BatchType).set('Operation', operation).set('dtDetails', dtDetails);
    return this.http.get("https://formulalookuppilotlabbatchwebservice.azurewebsites.net/LabBatchMainSaveUpdate", { params: params1, responseType: 'text' })
  }

  loadbindstability(copy1) {
    var formulaode = this.cformulaode;
    var unit = this.unit;
    var batchsize = this.labbatchsize;
    var Username = 'admin';
    var copy = copy1;
    let params1 = new HttpParams().set('FormulaCode', formulaode).set('SFQty', batchsize).set('SFUnit', unit).set('Copy', copy);
    return this.http.get("https://formulalookuppilotlabbatchwebservice.azurewebsites.net/BindScalability", { params: params1 })
  }
  labbatchchecklimit() {
    var batchsize = this.labbatchsize;
    var unit = this.unit;
    var Username = 'admin';
    let params1 = new HttpParams().set('batchsize', batchsize).set('unit', unit);
    return this.http.get("https://formulalookuppilotlabbatchwebservice.azurewebsites.net/CheckBatchLimit", { params: params1, responseType: 'text' })
  }
  labbatchauto() {
    var FormulaCode = this.cformulaode;
    var BatchDate = stringify(new Date());
    var Username = 'admin';
    let params1 = new HttpParams().set('FormulaCode', FormulaCode).set('BatchDate', BatchDate).set('Username', Username);
    return this.http.get("https://formulalookuppilotlabbatchwebservice.azurewebsites.net/Auto_Gemerate_LabBatchTicket", { params: params1, responseType: 'text' })
  }
  ngOnInit() {
    var pdrno = this.data.displaydata;
    this.ccustomerdet = this.data.displaydata[4];
    this.cprojectname = this.data.displaydata[3];
    this.cformulaname = this.data.displaydata[2];
    this.clabbatch;
    this.cPDRNo = this.data.displaydata[1];
    this.cformulaode = this.data.displaydata[0];
    this.userna = this.data.displaydata[5];
    this.currentstartDate = new Date().toISOString().substring(0, 10);
    /*    this.currentstartDate = formatDate((this.currentstartDate), 'dd/MM/yyyy', 'en-US');*/
    this.labbatchauto().subscribe((labbatchno) => {
      console.warn("labbatchno", labbatchno)
      this.labatchticketautogenerate_data = labbatchno
      this.clabbatch = this.labatchticketautogenerate_data
    })
    this.isLoading = false;
  }
}

export class safetytest {
  Step: string;
  ItemCode: string;
  GeneralItemCode: string;
  INCIName: string;
  Percentage: string;
  Quantity: string;
  Unit: string;
  ActualQty: string;
  IngredientTradeName: string;
  SupplierName: string;
  Unitcost: string;
  cost: string;
  Init1: string;
  Init2: string;
}
