import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AddTestnameComponent } from './add-testname/add-testname.component';
import { MessageBoxComponent } from '../../message-box/message-box.component';
import { AddLabnameComponent } from './add-labname/add-labname.component';
import { MessageBoxYesnoComponent } from '../../message-box-yesno/message-box-yesno.component';
import { formatDate } from '@angular/common';
import { MyDateEditor } from './my-date-editor.component';
@Component({
  selector: 'app-addproduct-testing',
  templateUrl: './addproduct-testing.component.html',
  styleUrls: ['./addproduct-testing.component.css']
})
export class AddproductTestingComponent implements OnInit {
  pdrno: any;
  isproductsave: boolean = false;
  isproductupdate: boolean = true;
  activeproductTab: string = "tab1";
  labnamedis: boolean = false;
//testing githubsample1231234
  //final test resaults
  tesnamedis: boolean = false;
  //sdhfhdnbf
  //samplwtest master checking123
  formulacode: any;
  formulaname: string;
  customername: string;
  test_data_load: any;
  lab_data_load: any;
  test_deletedata: any;
  bill_data_load: any;
  lookupdate4data: string = "";
  infobill_data: any;
  activeing_data_load: any;
  otcdatanew_load: any;
  sl: any;
  otcdataloaddetailnew: any;
  testinfo_deletedata: any;
  otcdata_load: any;
  testname: any = '';
  tname: any = '';
  statuss: string = 'true';
  status: string;
  tid: any = '';
  lname: any = '';
  OTC: string = 'true';
  PType: any = '';
  lid: any = '';
  TotalC: any = '';
  Due: any = '';
  claim: any = '';
  Purchaseorder: any = '';
  info_data: any;
  Testname: string = "";
  labname: any = '';
  opendate: any = '';
  Quatationdate: string = '';
  Submitteddate: any = '';
  Cost1: any;
  i: number;
  j: number;
  lab_deletedata: any;
  Customerdate: any = '';
  Startdate: any = '';
  Completeddate: any = '';
  public rowSelection;
  private rowStyle;
  private columnDefs1;
  public defaultColDef;
  public rowHeight;
  Result: any = '';
  Comment: any = '';
  Costone: any = '0.000';
  Time: any = '';
  Set: any = '1';
  TotalCost = '0.000';
  PaymentLab = '0.000';
  TotalBalpaylb = '0.000';
  ClientPayment = '0.000';
  TotalBalCPayment = '0.000';
  rowDatasproductbilling: any = [];
  dataListsave: Datasave[][] = [];
  dataListsave1: Datasave1[][] = [];
  dataListsave2: Datasave2[][] = [];
  dataListsave3: Datasave3[][] = [];
  FormulagridList: addproducttestData[][] = [];
  mySum: any;
  public gridApione;
  adf: any;
    doc1: string;
  onRowClick2: any;
  onRowClick3: any;
  constructor(public dialogRef: MatDialogRef<AddproductTestingComponent>, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {


    this.onRowClick2 = function (index) {
      if (this.currentRowIndex2 == index) {
        this.currentRowIndex2 = -1;
      }
      else {
        this.currentRowIndex2 = index;
      }
    }
    this.onRowClick3 = function (index) {
      if (this.currentRowIndex3 == index) {
        this.currentRowIndex3 = -1;
      }
      else {
        this.currentRowIndex3 = index;
      }
    }


    //radiovalue: string="1";
    this.rowSelection = 'single';
    this.rowStyle = { fontFamily: 'Verdana', color: 'black' };
    this.defaultColDef = {
      flex: 1,



      wrapText: true,


      resizable: true,
      suppressKeyboardEvent: params => {
        if (!params.editing) {
          let isBackspaceKey = params.event.keyCode === 8;
          let isDeleteKey = params.event.keyCode === 46;

          // Delete selected rows with back space

          if (isDeleteKey) {
            const selectedRows = params.api.getSelectedRows();
            params.api.applyTransaction({ remove: selectedRows });

            return true;
          }

          // delete range selected cell values



          return false;
        }
      }

    };

    this.columnDefs1 = this.columnDefs1forper;
    this.rowHeight = 10;

  }


  columnDefs1forper = [
    {
      flex: 1,


      wrapText: true,     // <-- HERE
      autoHeight: true,

      headerStyle: { border: 'solid', borderColor: 'black', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px', },

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },

      // checkboxSelection: true,
      suppressSizeToFit: true,
      field: '', width: 20,
      minWidth: 20,
      maxWidth: 40,
    },
    {
      flex: 1,

      wrapText: true,     // <-- HERE
      autoHeight: true,

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      width: 20,
      minWidth: 10,
      maxWidth: 50,
      headerName: "PurchaseOreder", field: 'PurchaseOreder'
    },
    {

      // <-- HERE
      autoHeight: true,
      editable: false,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      headerName: "PurchaseOrder_Dt",

      field: "PurchaseOrder_Dt"
    },



    {
      // flex: 1,
      // resizable: true,

      //wrapText: true,     // <-- HERE
      autoHeight: true,


      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },

      // cellClassRules: cellClassRules,

      minWidth: 100,
      maxWidth: 140,
      headerName: "Testname", field: 'Testname', type: 'numericColumn'


    },
    
   {      // flex: 1,      // resizable: true,

      //wrapText: true,     // <-- HERE      autoHeight: true,

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },

      // cellClassRules: cellClassRules,

     minWidth: 100, maxWidth: 140,
     headerName: "DueDt", field: 'DueDt', type: 'numericColumn'

    },


    {
      // flex: 1,
      // resizable: true,

      //wrapText: true,     // <-- HERE
      // autoHeight: true,
      headerName: "Labname", field: 'Labname', type: 'numericColumn',
      //width: 100,
      minWidth: 90,
      editable: false,
      maxWidth: 140,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", },//backgroundColor: this.changecolor() },
    },

    {
      flex: 1,


      wrapText: true,     // <-- HERE
      autoHeight: true,
      headerName: "Cost", field: 'Cost',

      minWidth: 70,
      maxWidth: 130,

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
    },
    {
      // flex: 1,
      // resizable: true,

      //wrapText: true,     // <-- HERE
      // autoHeight: true,
      headerName: "Invoice ", field: 'Invoice', width: 70,
      minWidth: 70,
      maxWidth: 130, type: 'numericColumn',
      autoHeight: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
    },
    {
      // flex: 1,
      // resizable: true,

      //wrapText: true,     // <-- HERE
      // autoHeight: true,
      headerName: "InvoiceDt", field: 'InvoiceDt', width: 90,
      //aggFunc: this.mySum.bind(this),
      minWidth: 70,
      maxWidth: 130,
      
      cellEditor: 'myDateEditor', editable: true,
      autoHeight: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right" },
    },
    {
      // flex: 1,
      // resizable: true,
      //hide: "true",
      //wrapText: true,     // <-- HERE
      // autoHeight: true,
      headerName: "PaymDt ", field: 'PaymentDt', width: 70,
      minWidth: 60,
      maxWidth: 120, type: 'numericColumn',
      autoHeight: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right" },

    },
    {
      // flex: 1,
      // resizable: true,
      //hide: "true",
      //wrapText: true,     // <-- HERE
      // autoHeight: true,
      headerName: "Paymttolab", field: 'Payment_to_the_Lab', width: 70,
      minWidth: 60,
      maxWidth: 120, type: 'numericColumn',
      autoHeight: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right" },

    },
    {
      // flex: 1,
      // resizable: true,
      //hide: "true",
      //wrapText: true,     // <-- HERE
      // autoHeight: true,
      headerName: "Balpaytolab", field: 'Bal_payment_to_the_Lab', width: 70,
      minWidth: 60,
      maxWidth: 120, type: 'numericColumn',
      autoHeight: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right" },

    },
    {
      // flex: 1,
      // resizable: true,
      //hide: "true",
      //wrapText: true,     // <-- HERE
      // autoHeight: true,
      headerName: "clientInvoice#", field: 'clientInvoice#', width: 70,
      minWidth: 60,
      maxWidth: 120, type: 'numericColumn',
      autoHeight: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right" },



    },
    {
      // flex: 1,
      // resizable: true,
      //hide: "true",
      //wrapText: true,     // <-- HERE
      // autoHeight: true,
      headerName: "clientInvoiceDt", field: 'clientInvoiceDt', width: 70,
      minWidth: 60,
      maxWidth: 120, type: 'numericColumn',
      autoHeight: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right" },



    },

    {
      // flex: 1,
      // resizable: true,
      //hide: "true",
      //wrapText: true,     // <-- HERE
      // autoHeight: true,
      headerName: "Clintpymt", field: 'Clientpayment', width: 70,
      minWidth: 60,
      maxWidth: 120, type: 'numericColumn',
      autoHeight: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right" },
    },
    {
      // flex: 1,
      // resizable: true,
      //hide: "true",
      //wrapText: true,     // <-- HERE
      // autoHeight: true,
      headerName: "Balclntpmt", field: 'Bal_clientpayment', width: 70,
      minWidth: 60,
      maxWidth: 120, type: 'numericColumn',
      autoHeight: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right" },

    },
    {
      // flex: 1,
      // resizable: true,
      //hide: "true",
      //wrapText: true,     // <-- HERE
      // autoHeight: true,
      headerName: "Comments", field: 'Comments', width: 70,
      minWidth: 60,
      maxWidth: 120, type: 'numericColumn',
      autoHeight: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right" },

    },




  ];
  onGridReadyone(params) {
    this.gridApione = params.api;
    this.gridApione.setRowData(this.rowDatasproductbilling);
    this.gridApione.getModel();
    this.rowDatasproductbilling = [];
    this.gridApione.forEachNode(RowNode => this.rowDatasproductbilling.push(RowNode.data));
    this.gridApione.setRowData(this.rowDatasproductbilling);
    
    var rowdatacount = this.rowDatasproductbilling.length;
    if (rowdatacount > 0) {
      var totalcost: Number = 0;
      var TotalPaymentCost: Number = 0;
      var TotalClient: Number = 0;
      var totalcostfinal: Number = 0;
      var totalbalPayLab: Number = 0;
      var totalbalpayclnt: Number = 0;
      for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
        var rowNode = this.gridApione.getRowNode(rowin);
        var costnew: string = (rowNode.data.Cost)
        if (costnew != null || costnew != undefined || costnew != "") {

          totalcostfinal = Number(totalcostfinal) + Number(costnew);
        }
        var balpay: Number = Number(rowNode.data.Payment_to_the_Lab);
        //balpay = Val(_rw.Cells(9).Value)
        if (balpay >= 0) {
          TotalPaymentCost = Number(TotalPaymentCost) + Number(rowNode.data.Payment_to_the_Lab);
          var balancepaymenttothelab = 0;
          balancepaymenttothelab = Number(rowNode.data.Cost) - Number(rowNode.data.Payment_to_the_Lab);
          (rowNode.data.Bal_payment_to_the_Lab) = balancepaymenttothelab
          totalbalPayLab = Number(totalbalPayLab) + Number(balancepaymenttothelab);
        }
        var balclpt = 0;
        balclpt = (rowNode.data.Clientpayment);
        if (balclpt >= 0) {
          TotalClient = Number(TotalClient) + Number(rowNode.data.Clientpayment)
          var balanceclientpayment = 0;

          balanceclientpayment = (rowNode.data.Cost) - (rowNode.data.Clientpayment);
          (rowNode.data.Bal_clientpayment) = balanceclientpayment
          totalbalpayclnt = Number(totalbalpayclnt) + Number(balanceclientpayment)
        }
      }
      this.TotalCost = String(totalcostfinal.toFixed(5));
      this.PaymentLab = String(TotalPaymentCost.toFixed(5));
      this.TotalBalpaylb = String(totalbalPayLab.toFixed(5));
      this.TotalBalCPayment = String(totalbalpayclnt.toFixed(5));
      this.ClientPayment = String(TotalClient.toFixed(5));
      //this.totaquantity1 = String(totalquantity12.toFixed(5));this.ClientPayment tring(totalbalPayLab.toFixed(5));
      //this.TotalCost = String(totalcost.toFixed(5));
      //this.PaymentLab = String(TotalPaymentCost.toFixed(5));
      //this.TotalBalpaylb = String(TotalClient.toFixed(5));
      //this.TotalBalCPayment = String(totalbalPayLab.toFixed(5));
      //this.ClientPayment = String(totalbalpayclnt.toFixed(5));
    }
    // this.columnApi = params.columnApi;
  }

  otcdetails_load(formulacode: string) {
    var formulcod: string = formulacode;
    let params1 = new HttpParams().set('Formulacode', formulcod)
    return this.http.get("https://formulalookupwebservice14.azurewebsites.net/loadotc", { params: params1 })
  }
  otcdetailsnew_load(formulacode: string) {
    var formulcod: string = formulacode;
    let params1 = new HttpParams().set('Formulacode', formulcod)
    return this.http.get("https://formulalookupwebservice14.azurewebsites.net/loadotcnew", { params: params1 })
  }
  testdetails_load() {
    return this.http.get("https://formulalookupwebservice9.azurewebsites.net/Bindtest")
  }
  labdetails_load() {
    return this.http.get("https://formulalookupwebservice9.azurewebsites.net/Bindlab")
  }
  billdetails_load(formulcode: string) {
    var formulcod: string = formulcode;
    let params1 = new HttpParams().set('Formulacode', formulcod)
    return this.http.get("https://formulalookupwebservice9.azurewebsites.net/Bindbill", { params: params1 })
  }
  activeingredients_load(formulcode: string) {
    var formulcod: string = formulcode;
    let params1 = new HttpParams().set('Formulacode', formulcod)
    return this.http.get("https://formulalookupwebservice9.azurewebsites.net/BindActive", { params: params1 })
  }
  frameworkComponents = {
    myDateEditor: MyDateEditor
  }
  radioChangeOTC(event) {
    this.OTC = event.value;

  }
  radioChangestatus(event) {
    this.statuss = event.value;

  }
  savemmain() {
    this.dataListsave[0] = ([{
      PDRNo: this.pdrno,
      FormulaCode: this.formulacode,
      FormulaName: this.formulaname,
      cbTestName: this.Testname,
      //LabName: this.labname,
      Status: this.statuss,
      dtpriptstartdt: this.Startdate,
      dtpriptcompdt: this.Completeddate,
      CustomerName: this.customername,
      OTC: this.OTC,
      ProductType: this.PType,
      Claim: this.claim,
      TotalCost: this.Costone,
      DTPProductTestingDate: ''

    }]);
    this.dataListsave1[0] = ([{
      PDRNo: this.pdrno,
      FormulaCode: this.formulacode,
      PurchaseOrderNo: this.Purchaseorder,
      cbTestName: this.Testname,
      cbLabName: this.labname,
      dtpOpenDate: this.opendate,

      dtpQuotationDt: this.Quatationdate,
      dtpDueDate: this.Due,
      dtpriptsubdt: this.Submitteddate,
      dtpriptstartdt: this.Customerdate,
      dtpriptcustomerdt: this.Startdate,
      dtpriptcompdt: this.Completeddate,
      RIPTResult: this.Result,
      riptcomments: this.Comment,
      TimeOfStudy: this.Time,

      udSetAlert: this.Set,
      DocPath: ''

    }]);
    this.dataListsave2[0] = ([{
      PDRNo: this.pdrno,
      FormulaCode: this.formulacode,
      PurchaseOrderNo: this.Purchaseorder,
      cbTestName: this.Testname,
      cbLabName: this.labname,
      dtpOpenDate: this.opendate,

      Cost: this.Costone,
      dtpQuotationDt: this.Quatationdate,
      dtpDueDate: this.Due,
      dtpriptsubdt: this.Submitteddate,
      dtpriptstartdt: this.Customerdate,
      dtpriptcustomerdt: this.Startdate,
      dtpriptcompdt: this.Completeddate,
      RIPTResult: this.Result,
      riptcomments: this.Comment,
      TimeOfStudy: this.Time,

      udSetAlert: this.Set,
      DocPath: ''

    }]);
    this.dataListsave3[0] = ([{
      PDRNo: this.pdrno,
      FormulaCode: this.formulacode,
      PurchaseOrderNo: this.Purchaseorder,
      cbTestName: this.Testname,
      cbLabName: this.labname,
      podate: '',
      dtpDueDate: this.Due,
      Cost: this.Costone,



    }]);
    this.savemmainup().subscribe((Savedata) => {
      console.warn("Savedata", Savedata)
      this.info_data = Savedata
      if (this.info_data == "Inserted") {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "test name details saved successfully" } });
        this.billdetails_load(this.formulacode).subscribe((bill_load) => {
          console.warn("bill_load", bill_load)
          this.bill_data_load = bill_load;
          this.rowDatasproductbilling = this.bill_data_load;
        })
        //this.rawmaterial_update_data = ""
      }
      else if (this.info_data == "Updated") {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "test name details updated successfully" } });
      }

      this.billdetails_load(this.formulacode).subscribe((bill_load) => {
        console.warn("bill_load", bill_load)
        this.bill_data_load = bill_load;
        this.rowDatasproductbilling = this.bill_data_load;
      })
    })


  };


  Formulagridvalues(Formuladata2: any) {
    this.i = 0;
    this.j = 0;
    this.FormulagridList = [];
    for (let item2 of Formuladata2) {
      var bal_pay: string = item2.Bal_payment_to_the_Lab.toString();
      var Bal_clientpay: string = item2.Bal_clientpayment.toString();
      this.FormulagridList[this.i] = ([{

        FormulaCode: this.formulacode,
        PDRNo: this.pdrno,
        PurchaseOrderNo: item2.PurchaseOrder,
        podate: item2.PurchaseOrder_Dt,
        cbTestName: item2.Testname,
        dtpDueDate: item2.DueDt,
        cbLabName: item2.Labname,

        Cost: item2.Cost,
        Invoice: item2.Invoice,
        InvoiceDt: item2.InvoiceDt,
        PaymentDt: item2.PaymentDt,
        Payment_to_the_Lab: item2.Payment_to_the_Lab,
        Bal_payment_to_the_Lab: item2.Bal_payment_to_the_Lab,
        ClientInvoice: item2.ClientInvoice,
        ClientInvoiceDt: item2.ClientInvoiceDt,
        Clientpayment: item2.Clientpayment,
        Bal_clientpayment: item2.Bal_clientpayment,

        Comments: item2.Comments,

      }]);
      this.i++;
    }
  }

  deletetestinfo() {

    this.Testinfo_Delete().subscribe((testinfo_dlt) => {
      console.warn("testinfo_deletedata", testinfo_dlt)
      this.testinfo_deletedata = testinfo_dlt
      /*this.wait(3000)*/
      if (this.testinfo_deletedata == "deleted") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Deleted successfully' } });
      }

      else {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Failed to Delete' } });
      }

      //this.showAlert4()
    })

  }
  Testinfo_Delete() {
    var PDRNos = this.pdrno;
    var PurchaseOrderNos = this.Purchaseorder;
    var dtpriptcompdts = this.Completeddate;
    var dtpriptstartdts = this.Startdate;
    var cbTestNames = this.Testname;
    var FormulaCodes = this.formulacode;
    let params1 = new HttpParams().set('PDRNo', PDRNos)
      .set('PurchaseOrderNo', PurchaseOrderNos)
      .set('dtpriptcompdt', dtpriptcompdts).set('dtpriptstartdt', dtpriptstartdts)
      .set('cbTestName', cbTestNames).set('FormulaCode', FormulaCodes);
    return this.http.get("https://formulalookupwebservice14.azurewebsites.net/Deleteinfo", { params: params1, responseType: 'text' })
  }


  Opentestname(): void {
   
      this.activeproductTab = "testname";
      const dialogRef = this.dialog.open(AddTestnameComponent, {
        width: '35%', height: '15%', disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);


        this.testdetails_load().subscribe((test_load) => {
          console.warn("test_load", test_load)
          this.test_data_load = test_load;
        })

      });
  }
  Opentestname2(): void {
    
      this.activeproductTab = "testname";
      const dialogRef = this.dialog.open(AddTestnameComponent, {
        width: '35%', height: '15%', disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);


        this.testdetails_load().subscribe((test_load) => {
          console.warn("test_load", test_load)
          this.test_data_load = test_load;
        })

      });
    

  }
  handleFileInput1(files: FileList) {
    var filebrowse = files.item.length;
    this.doc1 = files.item(0).name;
  }
  rowDoubleClicked(event: any) {
    this.activeproductTab = "tab1";
  }
  dateChange($event) {
    if (this.opendate > this.Due) {
      this.dialog.open(MessageBoxComponent, { width: '15%', height: '10%', data: { displaydata: 'Due Date Should not be less than open date' } });
    }
  }
  Openlabname(): void {
   
      this.activeproductTab = "labname";
      const dialogRef = this.dialog.open(AddLabnameComponent, {
        width: '35%', height: '15%', disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);

        this.labdetails_load().subscribe((lab_load) => {
          console.warn("lab_load", lab_load)
          this.lab_data_load = lab_load;
        })

      });
    

  }
  Openlabname2(): void {

    this.activeproductTab = "labname";
    const dialogRef = this.dialog.open(AddLabnameComponent, {
      width: '35%', height: '15%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);



      this.labdetails_load().subscribe((lab_load) => {
        console.warn("lab_load", lab_load)
        this.lab_data_load = lab_load;
      })

    });


  }
  setvalues(testdetails) {
    this.tname = testdetails.Testname
    this.tid = testdetails.TestId

  }
  setvalues1(labdetails) {
    this.lname = labdetails.labname
    this.lid = labdetails.labId
    this.sl = labdetails.status
  }
  clear() {
    //this.pdrno = "";
    //this.formulaname = "";
    //this.formulacode = "";
    // this.customername = "";
    //this.Testname = "";
    this.Startdate = new Date().toISOString().split('T')[0];
    //this.Startdate = new Date(this.data.displaydata[5]).toISOString().split('T')[0];
    this.Completeddate = new Date().toISOString().split('T')[0];
    //this.Completeddate=date.setDate(date.getDate() + 1);



    //this.Completeddate = new Date(this.data.displaydata[6]).toISOString().split('T')[0];
    //this.labname = this.data.displaydata[7];
    this.Costone = "";
    //this.TotalC = this.Costone;
    this.Quatationdate = new Date().toISOString().split('T')[0];
    this.opendate = new Date().toISOString().split('T')[0];
    this.Due = new Date().toISOString().split('T')[0];
    this.Submitteddate = new Date().toISOString().split('T')[0];
    this.Customerdate = new Date().toISOString().split('T')[0];
    this.Purchaseorder = "";
    this.Time = "";
    this.Result = "";
    this.Comment = "";
    this.adf = "";
    this.tesnamedis = true;
    this.labnamedis = true;
    this.isproductsave = false;
    this.isproductupdate = true;
  }
  savebillgrid() {
    this.savemmainbillgridup().subscribe((Savebilldata) => {
      console.warn("Savebilldata", Savebilldata)
      this.infobill_data = Savebilldata
      if (this.infobill_data == "Inserted") {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: " Billing saved successfully" } });
        //this.rawmaterial_update_data = ""
      }
    })
  }
  deletetestname() {


    this.test_delete().subscribe((test_dlt) => {
      console.warn("test_deletedata", test_dlt)

      this.test_deletedata = test_dlt

      if (this.test_deletedata == "Deleted") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Deleted successfully' } });


      }

      else {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Failed to Delete' } });
      }

      this.testdetails_load().subscribe((test_load) => {
        console.warn("test_load", test_load)
        this.test_data_load = test_load;
      })
    })
  }

  test_delete() {

    var test: string = this.tname;
    var idtest: string = this.tid;

    let params1 = new HttpParams().set('testname', test).set('testid', idtest);

    return this.http.get("https://formulalookupwebservice9.azurewebsites.net/Btndeletetest", { params: params1, responseType: 'text' })
  }

  savemmainup() {
    var datasaveslist: any = JSON.stringify(this.dataListsave);
    var datasaveslist1: any = JSON.stringify(this.dataListsave1);
    var datasaveslist2: any = JSON.stringify(this.dataListsave2);
    var datasaveslist3: any = JSON.stringify(this.dataListsave3);
    var UserName: any = "admin";
    var tstname: string = this.Testname;
    var fcode: string = this.formulacode;
    let params1 = new HttpParams().set('Productsavjason', datasaveslist).
      set('proceduretesjason', datasaveslist1).set('updateproceduretesjason', datasaveslist2).set('saveProductBiljson', datasaveslist3)
      .set('username', UserName).set('cbTestName', tstname)
      .set('FormulaCode', fcode);
    return this.http.get("https://formulalookupwebservice14.azurewebsites.net/testinfobtnsave", { params: params1, responseType: 'text' })
  }
  savemmainbillgridup() {
    this.Formulagridvalues(this.rowDatasproductbilling);
    var datalistgrid: any = JSON.stringify(this.FormulagridList);
    var Formulacode: any = this.formulacode;
    var UserName: any = "admin";
    let params1 = new HttpParams().set('SaveBillgridjason', datalistgrid).
      set('FormulaCode', Formulacode);
    return this.http.get("https://formulalookupwebservice14.azurewebsites.net/savebill", { params: params1, responseType: 'text' })
  }
  deletelabname() {

    if (this.sl == "InActive") {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Labname is already deleted.' } });
    }
    else {

      let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '30%', height: '15%', data: { displaydatagrid: "Deleting will make this entry Inactive.Inactive records cannot be made Active again and are kept in the system to show history.However,new entries can be created with a different name.Do you wish to delete this entry?" }, disableClose: true });


      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed: ${result}');
        this.lookupdate4data = result;
        if (this.lookupdate4data == "false") { }
        else {
          this.lab_delete().subscribe((lab_dlt) => {
            console.warn("lab_deletedata", lab_dlt)
            this.lab_deletedata = lab_dlt

            if (this.lab_deletedata == "Deleted") {
              this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Deleted successfully' } });
            }

            else {
              this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Failed to Delete' } });
            }
            this.labdetails_load().subscribe((lab_load) => {
              console.warn("lab_load", lab_load)
              this.lab_data_load = lab_load;
            })
          })
        }
      });
    }
  }
  lab_delete() {

    var lab: string = this.lid;


    let params1 = new HttpParams().set('labid', lab);
    return this.http.get("https://formulalookupwebservice9.azurewebsites.net/Btnlabdelete", { params: params1, responseType: 'text' })
  }
  otcdataloaddetail(loaddetail: any) {
    for (let item of loaddetail) {
      // this.formulacode = item.formulacode;
      //this.pdrno = item.ProductNo;
      //this.formulaname = item.FormulaName;
      this.status = item.Status;
      this.OTC = item.OTC;
      this.PType = item.ProductType;
      this.claim = item.Claim;
      this.TotalC = item.TotalCost;

    }
  }
  ngOnInit() {

    var senddata = this.activeproductTab;
    //var dataarray = this.data.displaydata;
    this.testdetails_load().subscribe((test_load) => {
      console.warn("test_load", test_load)
      this.test_data_load = test_load;
    })
    //this.Quatationdate = new Date().toISOString().split('T')[0];
    //this.opendate = new Date().toISOString().split('T')[0];
    //this.Due = new Date().toISOString().split('T')[0];
    //this.Submitteddate = new Date().toISOString().split('T')[0];
    //this.Customerdate = new Date().toISOString().split('T')[0];
    //this.Startdate = new Date().toISOString().split('T')[0];
    //this.Completeddate = new Date().toISOString().split('T')[0];

    if (this.data.displaydata == undefined) {
      this.pdrno = this.data.displaydata2[0];
      this.formulaname = this.data.displaydata2[1];
      this.formulacode = this.data.displaydata2[2];
      this.customername = this.data.displaydata2[3];
      this.Testname = this.data.displaydata2[4];
      // this.Startdate = this.data.displaydata2[5];
      // this.Completeddate = this.data.displaydata2[6];
      this.Quatationdate = new Date().toISOString().split('T')[0];
      this.opendate = new Date().toISOString().split('T')[0];
      this.Due = new Date().toISOString().split('T')[0];
      this.Submitteddate = new Date().toISOString().split('T')[0];
      this.Customerdate = new Date().toISOString().split('T')[0];
      this.Startdate = new Date().toISOString().split('T')[0];
      this.Completeddate = new Date().toISOString().split('T')[0];
      this.isproductsave = false;
      this.isproductupdate = true;
    }
    else

    {
      this.pdrno = this.data.displaydata[0];
      this.formulaname = this.data.displaydata[1];
      this.formulacode = this.data.displaydata[2];
      this.customername = this.data.displaydata[3];
      this.Testname = this.data.displaydata[4];
      this.Startdate = formatDate((this.data.displaydata[5]), 'yyyy-MM-dd', 'en-US');
      //this.Startdate = new Date(this.data.displaydata[5]).toISOString().split('T')[0];
      this.Completeddate = formatDate((this.data.displaydata[6]), 'yyyy-MM-dd', 'en-US');
      //this.Completeddate=date.setDate(date.getDate() + 1);

      //this.Completeddate = new Date(this.data.displaydata[6]).toISOString().split('T')[0];
      this.labname = this.data.displaydata[7];
      this.Costone = this.data.displaydata[8];
      this.TotalC = this.Costone;
      this.Quatationdate = formatDate((this.data.displaydata[9]), 'yyyy-MM-dd', 'en-US');
      this.opendate = formatDate((this.data.displaydata[10]), 'yyyy-MM-dd', 'en-US');
      this.Due = formatDate((this.data.displaydata[11]), 'yyyy-MM-dd', 'en-US');
      this.Submitteddate = formatDate((this.data.displaydata[12]), 'yyyy-MM-dd', 'en-US');
      this.Customerdate = formatDate((this.data.displaydata[13]), 'yyyy-MM-dd', 'en-US');
      this.Purchaseorder = this.data.displaydata[14];
      this.tesnamedis = true;
      this.labnamedis = true;
      this.isproductsave = true;
      this.isproductupdate = false;





    }


    // this.otcdetails_load(this.formulacode).subscribe((otc_load) => {
    //   console.warn("otc_load", otc_load)
    //   this.otcdata_load = otc_load;
    //   this.otcdataloaddetail(this.otcdata_load)
    // })
    //this.otcdetailsnew_load(this.formulacode).subscribe((otcnew_load) => {
    //  console.warn("otcnew_load", otcnew_load)
    //  this.otcdatanew_load = otcnew_load;
    //  this.otcdataloaddetailnew(this.otcdatanew_load)
    //})

    this.labdetails_load().subscribe((lab_load) => {
      console.warn("lab_load", lab_load)
      this.lab_data_load = lab_load;
    })
    this.billdetails_load(this.formulacode).subscribe((bill_load) => {
      console.warn("bill_load", bill_load)
      this.bill_data_load = bill_load;
      this.rowDatasproductbilling = this.bill_data_load;
    })
    this.activeingredients_load(this.formulacode).subscribe((activeing_load) => {
      console.warn("activeing_load", activeing_load)
      this.activeing_data_load = activeing_load;
    })
  }
}
export class Datasave {
  
  PDRNo: string;
  FormulaCode: string;
  FormulaName: string;
  cbTestName: string;
  //LabName: string;
  dtpriptstartdt: string;
  dtpriptcompdt: string;
  Status: string;
  CustomerName: string;
  OTC: string;
  ProductType: string;
  Claim: string;
  TotalCost: string;
  DTPProductTestingDate: string;





}
export class Datasave1 {
  PDRNo: string;
  FormulaCode: string;
  PurchaseOrderNo: string;
  cbTestName: string;
  cbLabName: string;
  dtpOpenDate: string;

  dtpQuotationDt: string;
  dtpDueDate: string
  dtpriptsubdt: string;
  dtpriptstartdt: string;
  dtpriptcustomerdt: string;
  dtpriptcompdt: string;
  RIPTResult: string;
  riptcomments: string;
  TimeOfStudy: string;
  udSetAlert: string;
  //alertdate: string;
  DocPath: string;

}
export class Datasave2 {
  PDRNo: string;
  FormulaCode: string;
  PurchaseOrderNo: string;
  cbTestName: string;
  cbLabName: string;
  dtpOpenDate: string;
  dtpDueDate: string;
  dtpQuotationDt: string;
  Cost: string;

  dtpriptsubdt: string;
  dtpriptstartdt: string;
  dtpriptcustomerdt: string;
  dtpriptcompdt: string;
  RIPTResult: string;
  riptcomments: string;
  TimeOfStudy: string;
  udSetAlert: string;
  /*alertdate: string;*/
  DocPath: string;

}
//export class Datasave3{
//  PDRNo: string;
//  FormulaCode: string;
//  PurchaseOrderNo: string;
//  cbTestName: string;
//  cbLabName: string;
//  dtpOpenDate: string;
//  dtpDueDate: string;
//  dtpQuotationDt: string;
//  Cost: string;
//  dtpriptsubdt: string;
//  dtpriptstartdt: string;
//  dtpriptcustomerdt: string;
//  dtpriptcompdt: string;
//  RIPTResult: string;
//  riptcomments: string;
//  TimeOfStudy: string;
//  udSetAlert: string;
//  alertdate: string;
//  DocPath: string;

//}
export class Datasave3 {
  PDRNo: string;
  FormulaCode: string;
  PurchaseOrderNo: string;
  podate: string;
  cbLabName: string;
  cbTestName: string;
  dtpDueDate: string;
  Cost: string;

}
export class addproducttestData {
  PDRNo: string;

  FormulaCode: string;
  PurchaseOrderNo: string;
  podate: string;
  cbTestName: string;
  dtpDueDate: string;
  cbLabName: string;
  Cost: string;
  Invoice: string;
  InvoiceDt: string;
  PaymentDt: string;
  Payment_to_the_Lab: string;
  Bal_payment_to_the_Lab: string;
  ClientInvoice: string;
  ClientInvoiceDt: string;
  Clientpayment: string;
  Bal_clientpayment: string;
  Comments: string;


}

