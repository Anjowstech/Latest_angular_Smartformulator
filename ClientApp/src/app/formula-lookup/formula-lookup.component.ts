import { Component, OnInit,ElementRef, ViewChild,Input,Inject } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent, RowDragEndEvent, GridOptions, Color } from 'ag-grid-community';
import { CategoryMaintenanceComponent } from 'src/app/raw-material/category-maintenance/category-maintenance.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SubCategoryMaintenanceComponent } from 'src/app/raw-material/sub-category-maintenance/sub-category-maintenance.component';
import { AddPrefixComponent } from 'src/app/raw-material/add-supplier/add-prefix/add-prefix.component';
import { SearchFormulaComponent } from 'src/app/formula-lookup/search-formula/search-formula.component';
import { SearchPdrComponent } from 'src/app/formula-lookup/search-pdr/search-pdr.component';
import { AddQCComponent } from 'src/app/formula-lookup/add-qc/add-qc.component';
import { FormulaPropertyComponent } from './formula-property/formula-property.component';
import { FormulaInstructionComponent } from './formula-instruction/formula-instruction.component';
import { PdrTrackStatusComponent } from './pdr-track-status/pdr-track-status.component';
import { MarketingCalloutsComponent } from './marketing-callouts/marketing-callouts.component';
import { CreateLabTktsComponent } from './create-lab-tkts/create-lab-tkts.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddphystabilityTestComponent } from 'src/app/formula-lookup/addphystability-test/addphystability-test.component';
import { AddProducttestingComponent } from './add-producttesting/add-producttesting.component';
import { MaxFormulaComponent } from './max-formula/max-formula.component';
import { FormulaStatusComponent } from './formula-status/formula-status.component';
import { AddMarketingIndicatorComponent } from 'src/app/formula-lookup/add-marketing-indicator/add-marketing-indicator.component';
import { HlbCalculationComponent } from 'src/app/formula-lookup/hlb-calculation/hlb-calculation.component';
import { PricingComponent } from 'src/app/formula-lookup/pricing/pricing.component';
import { ScalabilityFactorComponent } from 'src/app/formula-lookup/scalability-factor/scalability-factor.component';
import { CoaCompareComponent } from 'src/app/formula-lookup/coa-compare/coa-compare.component';
import { FormulaGraphComponent } from 'src/app/formula-lookup/formula-graph/formula-graph.component';
import { PropellantsvocCalculationComponent } from 'src/app/formula-lookup/propellantsvoc-calculation/propellantsvoc-calculation.component';
import { AddproductTestingComponent } from 'src/app/formula-lookup/addproduct-testing/addproduct-testing.component';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AgGridModule} from 'ag-grid-angular';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { CheckRestrictionComponent } from 'src/app/formula-lookup/check-restriction/check-restriction.component';
import { IncinameSelectComponent } from 'src/app/formula-lookup/inciname-select/inciname-select.component';
import { ItemnameSelectComponent } from 'src/app/formula-lookup/itemname-select/itemname-select.component';
import { TradenameSelectComponent } from 'src/app/formula-lookup/tradename-select/tradename-select.component';
import { Router } from '@angular/router';
import { RawMaterialComponent } from 'src/app/raw-material/raw-material.component';
import { SearchProjectPdrComponent } from 'src/app/pdr-management/search-project-pdr/search-project-pdr.component';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { MessageBoxYesnoComponent } from 'src/app/message-box-yesno/message-box-yesno.component';
import { PdrManagementComponent } from '../pdr-management/pdr-management.component';

import { formatDate } from '@angular/common';
import { AssignPdrComponent } from './assign-pdr/assign-pdr.component';
import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
import { ViewLabStabilityCoaComponent } from './view-lab-stability-coa/view-lab-stability-coa.component';
import { UpdateQcComponent } from './update-qc/update-qc.component';
import * as pako from 'pako';
export interface DialogData {
  itemlist: string;
  name: string;

}
@Component({
  selector: 'app-formula-lookup',
  templateUrl: './formula-lookup.component.html',
  styleUrls: ['./formula-lookup.component.css']
})
export class FormulaLookupComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  Isformat1: any;
    public isVisible: boolean = false;
  backformuldetails: string[];
  pages: string[] = ["tab-1", "tab-2", "tab-3", "tab-4"];
  disableEnd: boolean = true;
  tabIndex = 0;
  actualPage = 1
  customercode: string = "";
  columnApi: any;
  newData: any = [];
  active: any;
   olddatalistraw: string = "";
  datalistraw: string = "";
  olddatalistgirdformula: string = "";
  datalistgirdformula: string = "";
  formactive: any;
  isLoading:boolean;
  rowsToDisplay1: any;
  proced: any;
  okpilot: string;
  okproduce: string;
  proceduretextlist: string;
  procedgrid: any;
  generalrowData: any;
  customername: string
  ApprovedBy: string="";
  ApprovedDT:string= "";
  ProjectName: string ="";
  ShelfLife: string = "0";
  totcost1: Number;
  unitcosttotalnew: Number;
  ShelfLifeUnit: string = 'Day(s)';
  SubClass: string = 'Acrylic';
  SubClass1: string = '';
  Class: string='Additive';
  MaxPilotQty: string="0";
  TradeName: string="";
  LabRefNo: string="";
  Status: string='A-Active';
  TotalCostInLB: string="0.00000";
  TotalCostInkg: string = "0.00000";
  TotalPercentage: string="0";
  TotalUnitCost: string = "0.00000";
  scalef: any;
  unit1: any;
  unit: any;
  unitvalue1: any;
  TotalUnitCosted: string;
  TotalUnitCost1: string = "0.00000";
  TotalCostInLB1: string = "0.00000";
  Yield: string = "100";
  selectedData: any;
  loading:boolean ;
  formulaCost: string;
  formulaCost1: any;

  formulaNetQty: string = "0.00000";
  SupercededBy: string = "admin";
  supercededdate: string = "";
  FormulaTotalQTY: string = "0.00000";
  companyowned: string='Company-Owned';
  ManualSG: string = "0";
  formulacodepdr: string="";
  totaquantity1: any;
  manuprocreviewdata: any;
  useFormulation: string="";
  market_indi_data: any;

  BindFormulaProduct_data_load: any;
  ph: string="";
  odor: string="";
  oldlabvalue: string;
  appearence: string="";
  formulationDoes: string="";
  WhoUse: string="";
  FormulaSpecsNotes: string="";
  AboutFormulation: string="";
  viscosity: string="";
  FormulaNotes: string;
  formulamarketingdata: any;
  AudittrackData: any;
  rawgriddataLoad: any;
  incilabel: string;
  gridinciname: string = "";
  griditem: string;
  scalefactor: string;
  units: string;

  gridtradename: string;
  gridIngredientCode: string;
  gridp: string;
  gridsuppliername: string;
  incicost: string;
 radiovalue: string = "1";
  labbatchh: string ="1.00000";
  labbatch: string = "0.00000";
  unitcosttotal: string = "0.00000";
  selectedunit: string="g";
  unitvalue: string;
  unitdatalo_data: any;
  confactor: string = "1";
  instruc: string;
  unname: any;
  rowData2: any;
  rowdrag: string;
  okpilot2: string = '0';
  okproduce2:string = '0';
  datarawcategoryload: any;
  formulalookupupdatedatas: any;
  dataList: any = [];
  count: Number = 0;
  totaquantity: string = '';
  labdatalo_data: any;
  AddedDT: string="";
  loadassignedusersdata: any;
  datarawsubcategoryload: any;
  Approved: boolean;
  unico: Number = 0;
  flag: Number = 0;
  flag1: Number = 0;
  isDisabledappr: boolean = true;
  isDisabledappr2: boolean = true;
  issearchform: boolean = false;
  operation1: string = 'firstload';
  operation2: string = 'Labatchchange';
  issearchformula: boolean = true;
  issearchformulasave: boolean = false;
  userna: string = 'admin';
  datachem: any = [];
  datachem1: any=[];
  TestName: string;
  Method: string;
  Limits: string;
  Result: string;
  datacoaauditforchem: any;
  Isformatlabbatch1: boolean = false;
  Isformatlabbatch2: boolean = true;
  Isformatstorage1: boolean = false;
  Isformatstorage2: boolean = true;
  labatchnumber: any;
  qcdataload: any;
  //operation3: string = 'Labatchchange';
  //onAddRow() {
  //  this.agGrid.api.updateRowData({
  //    add: [{ make: 'BMW', model: 'S2', price: '63000' }]
  //  });

  //}

  public gridApi;
  public gridApione;
 
  //private columnDefs;
  public rowHeight;
  public defaultColDef;
  public rowData: any = [];
  scalefactnew: Number;
  private rowStyle;
  pdrnum: string;
  formulacod: string;
  formulanam: string;
  public rowSelection;
  formuladetails: string[];
  rowindex: any;
  formulacode: string = "";
  formulaname: string="";
  PDRno: string;
  labref: string = '';
  public rowClassRules;
  private getRowStyle;
  private getcellstyle;
  radiodata: any;
  private columnDefs;
  private columnDefs1;
  oldunit: string;
  oldtotalqty: string;
  oldunitcost: string;
  oldtotalcost: string;
  oldcostlb: string;
  lookupdate1data: string = "";
  lookupdate2data: string = "";
  lookupdate3data: string = "";
  lookupdate4data: string = "";
  radiochange: any;
  
  i: number;
  j: number;
  
  formgriddata: any;
  FormulagridList: FormulaGridData[][] = [];
  FormulatextboxList: Formulationtextbox[][] = [];
  Costupdates: any;
  dataformList: FormulaLookUpData[][] = [];
  dataformListcoa: FormulaLookUpcoaData[][] = [];
  FormulagridListcoa: coachemistry[][] = [];
  formula_save_data: any;
  Maxpilotunit: string="";
  highspecificgravity: string = "0";
  costupdatedetail: string;
  sgcalcload: any;
  Lbgal: string = '';
  rowDatascalability: any = [];
  markdata: any = [];

  componentcomp_data: any;
  phyAudit_data: any;
  labbatchno_data: any;
 // private gridApi1!: GridApi;
  public overlayLoadingTemplate =
    '<span class="ag-overlay-loading-center"> Computing...Please wait </span>';
 
  gridOptions: GridOptions = {
    //deltaRowDataMode: true,
    //onRowDragEnd: this.onRowDragEnd,
  // suppressScrollOnNewData: true,
    //immutableData:true
    //getRowHeight: function (params) {
    //  // assuming 50 characters per line, working how how many lines we need
    //  return 18 * (Math.floor(params.data.INCIName.length / 45) + 2);
    //}
  };
  sendqc: any[];
  sendpropellenetvoc: any[];
 
  constructor(public dialog: MatDialog, private http: HttpClient, private Datashare: DataShareServiceService, private router: Router) {



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
    
    this.columnDefs = this.columnDefsforper;
    this.columnDefs1 = this.columnDefs1forper;
    this.rowHeight = 10;
    const cellClassRules = {
      "cell-pass": this.radiovalue == "1",
      "cell-fail": this.radiovalue == "2"
    };

  

    this.getRowStyle = params => {
      if (params.data.SupplierName === "" || params.data.SupplierName === "0" && params.data.INCIName) {
        params.data.SupplierName =""
        params.data.UnitName = "";
        params.data.Qtyinpercentage = "";
        params.data.Quantity = "";
        params.data.UnitCost = "";
        params.data.Cost = "";
        params.data.costinlb = "";
        params.data.quantityinlb = "";
        params.data.unitcostinlb = "";
        
        return { background: 'Lightyellow', editable: false,};
      }
    };

      //this.getcellstyle = params => {
      //  {
      //    if (this.radiovalue == "1") {
      //      return {params.data.}
      //    }
      //  }}

  //  };


    //gridoption.getRowClass = function (params) {
    //  if (params.data.UnitName ==="") {
    //    return 'sick-days-breach';
    //  }
    //}
    //  this.rowData = [
    //    { step: 'A', inciname: 'Deionized Water', tradename: 'Deionized Water', itemno: '0000-3456-2472', perc: '10.3838099', qty: '10.3838099', Unit: 'g', UnitCost: 0.00011, Cost: 0.00114, suppliername: 'American Distilling & Mfg.' },
    //    { step: '', inciname: 'Ammonium Laureth Sulfate And Ammonium Lauryl Sulfate And Lauramide Dea And D- Glucopyranoside And Ammonium Xylenesulfonate', tradename: 'Ammonium Laureth Sulfate', itemno: '0000-3456-2472', perc: '1.0000000', qty: '1.0000000', Unit: 'g', UnitCost: 0.00441, Cost: 0.00441, suppliername: 'Chemax, Inc.' },
    //    { step: '', inciname: 'Ball mil for 4 hours', tradename: '', itemno: '', perc: '', qty: '', Unit: '',   suppliername: '' },
    //    { step: 'B', inciname: 'Dehydrogenate Tallow Phthalic Acid Amide', tradename: 'Dehydrogenate Tallow Phthalic Acid', itemno: '0000-3456-973', perc: '1.2900000', qty: '3.2250000', Unit: 'g', UnitCost: 0.00661, Cost: 0.02133, suppliername: 'WestLake Plastics Company' },
    //    { step: '', inciname: 'Add while mixing slowly', tradename: '', itemno: '', perc: '', qty: '', Unit: '', suppliername: '' },
    //    { step: 'c', inciname: 'Cetyl Alcohol-1', tradename: 'Cetyl Alcohol-1', itemno: '0000-3456-936', perc: '0.4300000', qty: '1.0750000', Unit: 'g', UnitCost: 0.02590, Cost: 0.02590, suppliername: 'Isp Corporation'  },
    // { step: 8, inciname: 10, perc: 12, qty: 'qew', Unit: 13, UnitCost: 24, Cost: 45, suppliername: 'abc' },
    // { step: 9, inciname: 'dsfsdfsdfsdfsdfsdfsdfdsfrsgsfgsgdgdfgdfgdfg', perc: 12, qty: 'qew', Unit: 13, UnitCost: 24, Cost: 45, suppliername: 'abc' },
    //];
  }
  
   columnDefsforper = [
  {
    flex: 1,
    resizable: true,

    wrapText: true,     // <-- HERE
    autoHeight: true,
    rowDrag: true,
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
       resizable: true,
       editable: false,
       wrapText: false,     // <-- HERE
       autoHeight: true,
       onCellClicked: this.makeCellClickedstep.bind(this),
       cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
       width: 20,
       minWidth: 20,
       maxWidth: 50,
       headerName: "", field: 'inst'
     },
  {
    flex: 1,
    resizable: true,
    editable: true,
    wrapText: true,     // <-- HERE
    autoHeight: true,
   
    cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right"  },
    width: 40,
    minWidth: 10,
    maxWidth: 50,
    headerName: "St", field: 'Step'
  },
  {
    onCellClicked: this.makeCellClickedinci.bind(this),
    // <-- HERE
    autoHeight: true,
    editable: false,
    cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
    headerName: "INCI Name",

    field: "INCIName"
  },
  {
    onCellClicked: this.makeCellClickedtrade.bind(this),
   
    flex: 1,
    resizable: true,
 //   editable: true,
    wrapText: true,
    width: 270,
    minWidth: 70,
    maxWidth: 400,
    // <-- HERE
    autoHeight: true, headerName: "Trade Name", field: 'TradeName', cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
  },
  {
    flex: 1,
    resizable: true,

    wrapText: true,
    width: 150,
    minWidth: 30,
    maxWidth: 260,
    // <-- HERE
    autoHeight: true, headerName: "Supplier Name", field: 'SupplierName', cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
  },

  {
    onCellClicked: this.makeCellClickeditem.bind(this),
    //flex: 1,
    //resizable: true,

    //wrapText: true,     // <-- HERE
    autoHeight: true,
    //autoWidth: true,
   
    cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right" },

   

    minWidth: 20,
    maxWidth: 160,
    headerName: "Item #", field: 'GeneralItemcode', type: 'numericColumn'
  },
  {
    // flex: 1,
    // resizable: true,

    //wrapText: true,     // <-- HERE
     autoHeight: true,
    
   
    cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", backgroundColor: 'lightblue' },
    onCellValueChanged: this.onCellValueChanged.bind(this),
    editable: this.onCellfirstValueChanged.bind(this),
    // cellClassRules: cellClassRules,
    
    minWidth: 100,
    maxWidth: 140,
    headerName: "%", field: 'Qtyinpercentage', type: 'numericColumn'


  },
  {
    // flex: 1,
    // resizable: true,

    //wrapText: true,     // <-- HERE
    // autoHeight: true,
    headerName: "Qty", field: 'Quantity', type: 'numericColumn',
    //width: 100,
    minWidth: 90,
    editable:false,
    maxWidth: 140, 
       cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", backgroundColor: this.changecolor() },
  },
     {
       flex: 1,
       resizable: true,

       wrapText: true,     // <-- HERE
       autoHeight: true,
       headerName: "UOM", field: 'UnitName',

       minWidth: 30,
       maxWidth: 70,
     
       cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
     },
  {
    // flex: 1,
    // resizable: true,

    //wrapText: true,     // <-- HERE
    // autoHeight: true,
    headerName: "UnitCost ", field: 'UnitCost', width: 70,
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
    headerName: "Cost $", field: 'Cost', width: 90,
    aggFunc: this.mySum.bind(this),
    minWidth: 70,
    maxWidth: 130,
    type: 'numericColumn',
   
    autoHeight: true,
    cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right"  },
     },
     {
       // flex: 1,
       // resizable: true,
    hide: "true",
       //wrapText: true,     // <-- HERE
       // autoHeight: true,
       headerName: "Costinlb ", field: 'costinlb', width: 70,
       minWidth: 60,
       maxWidth: 120, type: 'numericColumn',
      
     },
     {
       // flex: 1,
       // resizable: true,
      hide: "true",
       //wrapText: true,     // <-- HERE
       // autoHeight: true,
       headerName: "Quantityinlb", field: 'quantityinlb', width: 70,
       minWidth: 60,
       maxWidth: 120, type: 'numericColumn',
     
     },
     {
       // flex: 1,
       // resizable: true,
      hide: "true",
       //wrapText: true,     // <-- HERE
       // autoHeight: true,
       headerName: "Unitcostinlb ", field: 'unitcostinlb', width: 70,
       minWidth: 60,
       maxWidth: 120, type: 'numericColumn',

     },
     {
       // flex: 1,
       // resizable: true,
       hide: "true",
       //wrapText: true,     // <-- HERE
       // autoHeight: true,
       headerName: "ItemCode", field: 'ItemCode', width: 70,
       minWidth: 60,
       maxWidth: 120,

     },




  ];
   numberValueFormatter(params) {
  return params.value.toFixed(2);
}

  dataFormatter(params) {
  return   String(params.value.toFixed(7));
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
      headerName: "St", field: 'Step'
    },
    {

      // <-- HERE
      autoHeight: true,
      editable: false,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      headerName: "INCI Name",

      field: "INCIName"
    },


    {
      // flex: 1,
      // resizable: true,

      //wrapText: true,     // <-- HERE
      autoHeight: true,


      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal"},

      // cellClassRules: cellClassRules,

      minWidth: 100,
      maxWidth: 140,
      headerName: "%", field: 'Qtyinpercentage', type: 'numericColumn'


    },
    {
      // flex: 1,
      // resizable: true,

      //wrapText: true,     // <-- HERE
      // autoHeight: true,
      headerName: "Qty", field: 'Quantity1', type: 'numericColumn',
      //width: 100,
      minWidth: 90,
      editable: false,
      maxWidth: 140,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", backgroundColor: this.changecolor() },
    },
    {
      flex: 1,

      wrapText: true,     // <-- HERE
      autoHeight: true,
      headerName: "UOM", field: 'UnitName',

      minWidth: 30,
      maxWidth: 70,

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
    },
    {
      // flex: 1,
      // resizable: true,

      //wrapText: true,     // <-- HERE
      // autoHeight: true,
      headerName: "UnitCost ", field: 'UnitCost1', width: 70,
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
      headerName: "Cost $", field: 'Cost1', width: 90,
      aggFunc: this.mySum.bind(this),
      minWidth: 70,
      maxWidth: 130,
      type: 'numericColumn',

      autoHeight: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right" },
    },
    {
      // flex: 1,
      // resizable: true,
      hide: "true",
      //wrapText: true,     // <-- HERE
      // autoHeight: true,
      headerName: "Costinlb ", field: 'costinlb1', width: 70,
      minWidth: 60,
      maxWidth: 120, type: 'numericColumn',

    },
    {
      // flex: 1,
      // resizable: true,
      hide: "true",
      //wrapText: true,     // <-- HERE
      // autoHeight: true,
      headerName: "Quantityinlb", field: 'quantityinlb', width: 70,
      minWidth: 60,
      maxWidth: 120, type: 'numericColumn',

    },
    {
      // flex: 1,
      // resizable: true,
      hide: "true",
      //wrapText: true,     // <-- HERE
      // autoHeight: true,
      headerName: "Unitcostinlb ", field: 'unitcostinlb', width: 70,
      minWidth: 60,
      maxWidth: 120, type: 'numericColumn',

    },


  ];
 columnDefsforqty = [
  {
    flex: 1,
    resizable: true,

    wrapText: true,     // <-- HERE
    autoHeight: true,
    rowDrag: true,
    headerStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px', },

  
     cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
   // checkboxSelection: true,
    suppressSizeToFit: true,
    field: '', width: 20,
    minWidth: 20,
    maxWidth: 40,
   },
   {
     flex: 1,
     resizable: true,
     editable: false,
     wrapText: false,     // <-- HERE
     autoHeight: true,
     onCellClicked: this.makeCellClickedstep.bind(this),
     cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
     width: 20,
     minWidth: 20,
     maxWidth: 50,
     headerName: "", field: 'inst'
   },
  {
    flex: 1,
    resizable: true,
    editable: true,
    wrapText: true,     // <-- HERE
    autoHeight: true,

    cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right" },
    width: 40,
    minWidth: 10,
    maxWidth: 50,
    headerName: "St", field: 'Step'
  },
  {
    onCellClicked: this.makeCellClickedinci.bind(this),
    // <-- HERE
   
    editable: false,
    autoHeight: true,
    cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
    headerName: "INCI Name",

    field: "INCIName"
  },
  {
     onCellClicked: this.makeCellClickedtrade.bind(this),
    flex: 1,
    resizable: true,
  //  editable: true,
    wrapText: true,
    width: 270,
    minWidth: 70,
    maxWidth: 400,
    // <-- HERE
    autoHeight: true, headerName: "Trade Name", field: 'TradeName',
    cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
  },
  {
    flex: 1,
    resizable: true,

    wrapText: true,
    width: 150,
    minWidth: 30,
    maxWidth: 260,
    // <-- HERE
    autoHeight: true, headerName: "Supplier Name", field: 'SupplierName', 
    cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
  },

  {
    onCellClicked: this.makeCellClickeditem.bind(this),
    //flex: 1,
    //resizable: true,
    
    //wrapText: true,     // <-- HERE
    //autoHeight: true,
    //autoWidth: true,
  
    autoHeight: true,
    cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal",'text-align': "right", backgroundColor: this.changecolor2() },
    editable: true,

    minWidth: 40,
    maxWidth: 180,
    headerName: "Item #", field: 'GeneralItemcode', type: 'numericColumn'
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
    headerName: "%", field: 'Qtyinpercentage', type: 'numericColumn'


  },
  {
    // flex: 1,
    // resizable: true,

    //wrapText: true,     // <-- HERE
    // autoHeight: true,
    headerName: "Qty", field: 'Quantity', type: 'numericColumn',
    //width: 100,
    minWidth: 90,
    onCellValueChanged: this.onCellValueChanged2.bind(this),
   
    editable: this.onCellfirstValueChanged.bind(this), 
    maxWidth: 140, cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", backgroundColor: 'lightblue' },
   },
 
   {
     flex: 1,
     resizable: true,

     wrapText: true,     // <-- HERE
     autoHeight: true,
     headerName: "UOM", field: 'UnitName',

     minWidth: 30,
     maxWidth: 70,
     cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
   },
  {
    // flex: 1,
    // resizable: true,

    //wrapText: true,     // <-- HERE
    // autoHeight: true,
    headerName: "UnitCost ", field: 'UnitCost', width: 70,
    minWidth: 70,
    maxWidth: 130, type: 'numericColumn',
    cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
  },
  {
    // flex: 1,
    // resizable: true,

    //wrapText: true,     // <-- HERE
    // autoHeight: true,
    headerName: "Cost $", field: 'Cost', width: 90,

    minWidth: 70,
    maxWidth: 130,
    type: 'numericColumn',
  
    cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right" },

   },
   {
     // flex: 1,
     // resizable: true,
    hide: "true",
     //wrapText: true,     // <-- HERE
     // autoHeight: true,
     headerName: "costinlb ", field: 'costinlb', width: 70,
     minWidth: 60,
     maxWidth: 120, type: 'numericColumn',

   },
   {
     // flex: 1,
     // resizable: true,
     hide: "true",
     //wrapText: true,     // <-- HERE
     // autoHeight: true,
     headerName: "quantityinlb ", field: 'quantityinlb', width: 70,
     minWidth: 60,
     maxWidth: 120, type: 'numericColumn',

   },
   {
     // flex: 1,
     // resizable: true,
    hide: "true",
     //wrapText: true,     // <-- HERE
     // autoHeight: true,
     headerName: "unitcostinlb", field: 'unitcostinlb', width: 70,
     minWidth: 60,
     maxWidth: 120, type: 'numericColumn',

   },

   {
       // flex: 1,
       // resizable: true,
       hide: "true",
       //wrapText: true,     // <-- HERE
       // autoHeight: true,
       headerName: "ItemCode", field: 'ItemCode', width: 70,
       minWidth: 60,
       maxWidth: 120, 

     },



];


   
  rowData1 = [
    {
      Step: 'A',
      INCIName: 'Deionized Water',
      TradeName: 'Deionized Water',
      GeneralItemcode: '0000-3456-2472',
      Qtyinpercentage: '10.3838099',
      Quantity: '10.3838099',
      UnitName: 'g',
      UnitCost: 0.00011,
      Cost: 0.00114,
      SupplierName: 'American Distilling & Mfg.',
    },]

  onColumnResized(params) {

    params.api.resetRowHeights();
  }

  onColumnVisible(params) {
    params.api.resetRowHeights();
  }
  isExpanded = false;
  collapse() {
    this.isExpanded = false;
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  OpenCategoryformula(): void {
    const dialogRef = this.dialog.open(CategoryMaintenanceComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  OpenSubCategoryformula(): void {
    const dialogRef = this.dialog.open(SubCategoryMaintenanceComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  AddPrefixPopUp(): void {

    const dialogRef = this.dialog.open(AddPrefixComponent, {
      width: '80%', height: '90%',
      disableClose: true,
    });
  }
  PdrTrackStatus(): void {

    const dialogRef = this.dialog.open(PdrTrackStatusComponent, {
      width: '90%', height: '90%',
      disableClose: true,
    });
  }
  formulainstruction(): void {
  
  
    const dialogRef = this.dialog.open(FormulaInstructionComponent, {
      width: '60%', height: '70%',
      disableClose: true,
    });
  }
  formularestriction(): void {
    this.formuladetails = [this.PDRno, this.formulacode, this.formulaname];
    this.Datashare.sendformuladetails(this.formuladetails);

    const dialogRef = this.dialog.open(CheckRestrictionComponent, {
      width: '60%', height: '70%',
      disableClose: true,
    });
  }
  setradio(e: string): void {
    var task: string = "Chem";
    this.loadcoaaudit(task).subscribe((loadcoaaudit) => {
      console.warn("loadcoaaudit", loadcoaaudit)
      this.datacoaauditforchem = loadcoaaudit
      this.isLoading = false;
    })

  }
  setradio1(e: string): void {
    var task: string = "All";
    this.loadcoaaudit(task).subscribe((loadcoaaudit) => {
      console.warn("loadcoaaudit", loadcoaaudit)
      this.datacoaauditforchem = loadcoaaudit
      this.isLoading = false;
    })

  }
  setradio2(e: string): void {
    var task: string = "Micro";
    this.loadcoaaudit(task).subscribe((loadcoaaudit) => {
      console.warn("loadcoaaudit", loadcoaaudit)
      this.datacoaauditforchem = loadcoaaudit
      this.isLoading = false;
    })

  }
  setlabatchchange(event: any) {
    this.labatchnumber = event.target.value;

  }
  searchformula(): void {
   
    
    const dialogRef = this.dialog.open(SearchFormulaComponent, {
      width: '80%', height: '90%', disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
    
      console.log('The dialog was closed', result);
      if (result != "") {
        this.issearchformula = false;
        this.issearchformulasave = true;
        this.issearchform = true;
        this.active = "1"; 
        this.formulacode = result[0];
        this.formulaname = result[1];
        this.labref = result[2];
        this.PDRno = result[3];
        this.rowData = null;
        this.labbatchload(this.formulacode).subscribe((labload) => {
          console.warn("labbatchnumberload", labload)
          this.labbatchno_data = labload
          this.Isformatlabbatch1 = true;
          this.Isformatlabbatch2 = false;
        })
        this.storageload(this.formulacode).subscribe((storageload) => {
          console.warn("storageload", storageload)
          this.labbatchno_data = storageload
          this.Isformatstorage1 = true;
          this.Isformatstorage2 = false;
        })
        //this.labstorageload(this.formulacode).subscribe((labload) => {
        //  console.warn("labbatchnumberload", labload)
        //  this.storage_data = labload
        //  this.Isformatlabbatch1 = true;
        //  this.Isformatlabbatch2 = false;
        //})
        this.loadcoachemistry().subscribe((loadgirdchem) => {
          console.warn("loadgirdchem", loadgirdchem)
          this.datachem1 = loadgirdchem
        })
        this.loadcoamicrobiolodgy().subscribe((loadgirdmicrobiolodgy) => {
          console.warn("loadgirdmicrobiolodgy", loadgirdmicrobiolodgy)
          this.datachem = loadgirdmicrobiolodgy
        })
        //this.generalformulationload(this.formulacode).subscribe((generalformulationload) => {
        //  console.warn("generalformulationload", generalformulationload)
        //  this.generalrowData = generalformulationload
        //  this.generalmethod(this.generalrowData);

      
         
        //  this.formulationload(this.formulacode, this.labbatch, this.selectedunit, this.operation1).subscribe((formulationload) => {
        //    console.warn("formulaload", formulationload)

        //    this.rowData = formulationload
        //    this.CostUpdate(this.rowData);
        //  })


        //})
       
        
        this.generalformulationload(this.formulacode).subscribe((generalformulationload) => {
          console.warn("generalformulationload", generalformulationload)
          this.generalrowData = generalformulationload
          this.generalmethod(this.generalrowData);
          
          this.SGcalculation(this.ManualSG).subscribe((sgcalcload) => {
            console.warn("SGCalcload", sgcalcload)
            this.sgcalcload = sgcalcload
            this.Lbgal = this.sgcalcload
          })

          this.qctabload(this.formulacode).subscribe((qcdetailslload) => {
            console.warn("qcdetailslload", qcdetailslload)
            this.qcdataload = qcdetailslload

          })




        })
        this.formulationload(this.formulacode, this.labbatch, this.selectedunit, this.operation1).subscribe((formulationload) => {
          console.warn("formulaload", formulationload)

          this.rowData = formulationload
          this.rowDatascalability = this.rowData
          //var unitcosttotal = 0;
          //var costlb = 0;
          //var sumvar: any = 0;
          //this.gridApi.setRowData(this.rowData);
          //var rowdatacount = this.rowData.length;
          //for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
          //  var rowNode = this.gridApi.getRowNode(rowin);
          //  unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
          //}
          //this.TotalUnitCost = String(unitcosttotal.toFixed(5));
          //var totcs: Number = sumvar * Number(this.labbatch);
          //// this.TotalUnitCost = this.formulaCost;
          //this.formulaCost = String((Number(unitcosttotal.toFixed(5)) / Number(this.labbatch)).toFixed(5));
          //var totalquantity = 0;
          //for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
          //  var rowNode = this.gridApi.getRowNode(rowin);

          //  totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
          //}
          //this.totaquantity = String(totalquantity.toFixed(5));
          //for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
          //  var rowNode = this.gridApi.getRowNode(rowin);
          //  costlb = Number(costlb) + Number(rowNode.data.costinlb);

          //}
          //this.TotalCostInLB = String(costlb.toFixed(5));
          //this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
          ////  this.selectedunit="";


          //  this.selectedunit = String(this.rowData[0].UnitName);

        })



        this.proceduretext(this.formulacode).subscribe((procedureteext) => {
          console.warn("proceduretext", procedureteext)
          this.proced = procedureteext
          this.Procedure(this.proced);
        })
        this.proceduretextgrid(this.formulacode).subscribe((proceduretextgridval) => {
          console.warn("proceduretextgridval", proceduretextgridval)
          this.procedgrid = proceduretextgridval

        })


        this.manuprocreview(this.formulacode).subscribe((manuprocreview) => {
          console.warn("manuprocreview", manuprocreview)
          this.manuprocreviewdata = manuprocreview

        })
        this.manuprocreview(this.formulacode).subscribe((manuprocreview) => {
          console.warn("manuprocreview", manuprocreview)
          this.manuprocreviewdata = manuprocreview

        })
        this.marketart(this.formulacode).subscribe((formulamarketing) => {
          console.warn("formulamarketing", formulamarketing)
          this.formulamarketingdata = formulamarketing

        })
        this.Marketing_indicator().subscribe((market_indi) => {
          console.warn("market_indi", market_indi)
          this.market_indi_data = market_indi
        })
        this.Audittrackingload(this.formulacode).subscribe((Audittrackingload) => {
          console.warn("Audittrackingload", Audittrackingload)
          this.AudittrackData = Audittrackingload

        })
        this.loadassignusers(this.ProjectName).subscribe((loadassignedusers) => {
          console.warn("loadassignedusers", loadassignedusers)
          this.loadassignedusersdata = loadassignedusers
        })

        this.Labbatchdetailsload(this.formulacode).subscribe((labdatalo) => {
          console.warn("labdatalo", labdatalo)
          this.labdatalo_data = labdatalo
        })
        //this.physicalstabilityload(this.formulacode).subscribe((stabload) => {
        //  console.warn("physicalstabilityload", stabload)
        //  this.physicalstability_data = stabload
        //})
        this.componentload(this.formulacode).subscribe((compload) => {
          console.warn("componentcompload", compload)
          this.componentcomp_data = compload
        })
        this.phyAuditload(this.formulacode, this.formulaname).subscribe((auditload) => {
          console.warn("Auditphycompload", auditload)
          this.phyAudit_data = auditload
        })
       
       
      }
     
    });
    this.percentscalabilitygrid()
  }

  Procedure(proceduredata: string) {
    this.proceduretextlist = proceduredata;
  }
  sendtomaxformula(formcode: string) {
    this.Datashare.sendformcode(formcode);
  }
  loadprop(formcode: string) {
    this.Datashare.sendformcode(formcode);
  }

  onBtShowLoading() {
    this.gridApi.showLoadingOverlay();
  }
  onrowdragging() {
    this.gridApi.showLoadingOverlay();
  }

  onBtShowNoRows() {
    this.gridApi.showNoRowsOverlay();
  }

  onBtHide() {
    this.gridApi.hideOverlay();
  }

  formulaproperty(): void {
    const dialogRef = this.dialog.open(FormulaPropertyComponent, {
      width: '60%', height: '70%', disableClose: true
    });
  }
  assignpdr(): void {
    const dialogRef = this.dialog.open(AssignPdrComponent, {
      width: '60%', height: '70%', disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {

        this.PDRno = result[0];
        this.ProjectName = result[1];
        this.customername = result[2];
        if (this.ProjectName != null) {
          //this.projectapprovalcheck = false;
          //this.datecheck = true;
          //this.isLoadingchek = true;
          this.loadassignusers(this.ProjectName).subscribe((loadassignedusers) => {
            console.warn("loadassignedusers", loadassignedusers)
            this.loadassignedusersdata = loadassignedusers
          })
        }
      }
    });

  }
  searchpdr(): void {
    this.active = "1";
    const dialogRef = this.dialog.open(SearchPdrComponent, {
      width: '60%', height: '70%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.issearchformula = false;
      this.issearchformulasave = true;
      this.formulacode = result[0];

      this.PDRno = result[1];
      this.formulaname = result[2];
      this.ProjectName = result[3];
      this.customername = result[4];

     
      this.generalformulationload(this.formulacode).subscribe((generalformulationload) => {
        console.warn("generalformulationload", generalformulationload)
        this.generalrowData = generalformulationload
        this.generalmethod(this.generalrowData);

        this.SGcalculation(this.ManualSG).subscribe((sgcalcload) => {
          console.warn("SGCalcload", sgcalcload)
          this.sgcalcload = sgcalcload
          this.Lbgal = this.sgcalcload
        })




      })
      this.formulationload(this.formulacode, this.labbatch, this.selectedunit, this.operation1).subscribe((formulationload) => {
        console.warn("formulaload", formulationload)

        this.rowData = formulationload
        //var unitcosttotal = 0;
        //var costlb = 0;
        //var sumvar: any = 0;
        //this.gridApi.setRowData(this.rowData);
        //var rowdatacount = this.rowData.length;
        //for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
        //  var rowNode = this.gridApi.getRowNode(rowin);
        //  unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
        //}
        //this.TotalUnitCost = String(unitcosttotal.toFixed(5));
        //var totcs: Number = sumvar * Number(this.labbatch);
        //// this.TotalUnitCost = this.formulaCost;
        //this.formulaCost = String((Number(unitcosttotal.toFixed(5)) / Number(this.labbatch)).toFixed(5));
        //var totalquantity = 0;
        //for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
        //  var rowNode = this.gridApi.getRowNode(rowin);

        //  totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
        //}
        //this.totaquantity = String(totalquantity.toFixed(5));
        //for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
        //  var rowNode = this.gridApi.getRowNode(rowin);
        //  costlb = Number(costlb) + Number(rowNode.data.costinlb);

        //}
        //this.TotalCostInLB = String(costlb.toFixed(5));
        //this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
        ////  this.selectedunit="";


        //  this.selectedunit = String(this.rowData[0].UnitName);

      })



      this.proceduretext(this.formulacode).subscribe((procedureteext) => {
        console.warn("proceduretext", procedureteext)
        this.proced = procedureteext
        this.Procedure(this.proced);
      })
      this.proceduretextgrid(this.formulacode).subscribe((proceduretextgridval) => {
        console.warn("proceduretextgridval", proceduretextgridval)
        this.procedgrid = proceduretextgridval

      })


      this.manuprocreview(this.formulacode).subscribe((manuprocreview) => {
        console.warn("manuprocreview", manuprocreview)
        this.manuprocreviewdata = manuprocreview

      })
      this.manuprocreview(this.formulacode).subscribe((manuprocreview) => {
        console.warn("manuprocreview", manuprocreview)
        this.manuprocreviewdata = manuprocreview

      })
      this.marketart(this.formulacode).subscribe((formulamarketing) => {
        console.warn("formulamarketing", formulamarketing)
        this.formulamarketingdata = formulamarketing

      })
      this.Marketing_indicator().subscribe((market_indi) => {
        console.warn("market_indi", market_indi)
        this.market_indi_data = market_indi
      })
      this.Audittrackingload(this.formulacode).subscribe((Audittrackingload) => {
        console.warn("Audittrackingload", Audittrackingload)
        this.AudittrackData = Audittrackingload

      })
      this.loadassignusers(this.ProjectName).subscribe((loadassignedusers) => {
        console.warn("loadassignedusers", loadassignedusers)
        this.loadassignedusersdata = loadassignedusers
      })

      this.Labbatchdetailsload(this.formulacode).subscribe((labdatalo) => {
        console.warn("labdatalo", labdatalo)
        this.labdatalo_data = labdatalo
      })


    

    });
  }
  addpdr() {
    const dialogRef = this.dialog.open(PdrManagementComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    });



  }
  curDate = new Date();

  addqc(): void {

    if (this.formulacode == "" || this.formulacode == undefined) { this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'enter formula code' } }); }
    else if (this.formulaname == "" || this.formulaname == undefined) { this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'enter formula name' } }); }

    else {
      var billdata: any = [this.formulacode, this.formulaname]
      const dialogRef = this.dialog.open(AddQCComponent, {
        width: '80%', height: '90%', data: { displaydata: billdata }, disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        this.wait(3000);

        this.qctabload(this.formulacode).subscribe((qcdetailslload) => {
          console.warn("qcdetailslload", qcdetailslload)
          this.qcdataload = qcdetailslload
        })

      });
    }

  }
  setvaluesqc(qcdetails) {

    this.sendqc = [this.formulacode, this.formulaname, qcdetails.TestName, qcdetails.noOfDays,
    qcdetails.startDate, qcdetails.enddate, qcdetails.Results, qcdetails.SeqNo, qcdetails.Unit, qcdetails.QCTest,
    qcdetails.AddedDT, qcdetails.AddedBy, qcdetails.UpdatedDT, qcdetails.Remarks, qcdetails.Note,
    qcdetails.ApprovedDt, qcdetails.SOPFile, qcdetails.Approved, qcdetails.ApprovedBy];
    //this.datashare.sendaddlocation(this.searchitems);
    this.openaddqc();
  }

  loadupdate(formulacode: any, SeqNo: any) {

    var formul: string = formulacode;
    var Seq: string = SeqNo;

    let params1 = new HttpParams().set('FormulaCode', formul).set('SeqNo', Seq);
    return this.http.get("https://formulalookupwebservice11.azurewebsites.net/QCrowload", { params: params1, responseType: 'text' })


  }


  openaddqc(): void {

    //this.formularestrictiondetails = [this.restcountryname, this.formulaname];
    //this.Datashare.sendrestrictiondetails(this.formularestrictiondetails);
    const dialogRef = this.dialog.open(UpdateQcComponent, {
      width: '80%', height: '90%', disableClose: true, data: { displaydata: this.sendqc }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.wait(3000);

      this.qctabload(this.formulacode).subscribe((qcdetailslload) => {
        console.warn("qcdetailslload", qcdetailslload)
        this.qcdataload = qcdetailslload
      })

    });
  }











  marketingcallouts(): void {
    const dialogRef = this.dialog.open(MarketingCalloutsComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  createlabbatchtkts(): void {
    if (this.formulacode == "" || this.formulacode == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter Formula Code' } });
    }
    else {
      var crtelbtktsdatas: any = [this.formulacode, this.PDRno, this.formulaname, this.ProjectName, this.customername];
      const dialogRef = this.dialog.open(CreateLabTktsComponent, {
        width: '90%', height: '90%', data: { displaydata: crtelbtktsdatas }, disableClose: true
      });
    }
  }
  Viewlabbatchstability(): void {
    const dialogRef = this.dialog.open(ViewLabStabilityCoaComponent, {
      width: '90%', height: '90%', disableClose: true
    });
  }
  Opencustomer(): void {
    const dialogRef = this.dialog.open(CustomerDetailsComponent, {
      width: '95%', height: '95%', data: {displaydata:this.customercode}, disableClose: true
    });
  }
  AddphystabilityTest(): void {

    const dialogRef = this.dialog.open(AddphystabilityTestComponent, {
      width: '80%', height: '90%',
      disableClose: true,
    });
  }
  openmaxformula(): void {

    const dialogRef = this.dialog.open(MaxFormulaComponent, {
      width: '98%', height: '90%',
      disableClose: true,
    });
  }
  openformulastatus(): void {

    const dialogRef = this.dialog.open(FormulaStatusComponent, {
      width: '90%', height: '98%',
      disableClose: true,
    });
  }
  MarketIndicator(): void {
    const dialogRef = this.dialog.open(AddMarketingIndicatorComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  HlbCalculation(): void {
    this.formuladetails = [this.PDRno, this.formulacode, this.formulaname];
    this.Datashare.sendformuladetails(this.formuladetails);

    const dialogRef = this.dialog.open(HlbCalculationComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  Pricing(): void {
    const dialogRef = this.dialog.open(PricingComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  ScalabilityFactor(): void {

    this.flag1 = 1;

    const dialogRef = this.dialog.open(ScalabilityFactorComponent, {
      width: '35%', height: '26%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);


      //var rowdatacount = this.gridApi.getDisplayedRowCount();

      var val = result[0];
      this.units = result[1];
      if (val != null) {
        this.scalefactor = val

        this.scalefactnew = Number(this.scalefactor) / Number(this.labbatch);
        this.scalef = String(this.scalefactnew.toFixed(5));


        this.dialog.open(MessageBoxComponent, {
          width: '25%', height: '15%',
          data: { displaydata: "Scalability Factor" + " " + "=" + "Qty needed" + " " + this.scalefactor + " " + " / " + "Net quantity" + this.labbatch + " = " + "   " + this.scalef }
        });
        this.active = "3";

      }
      //this.onGridReadyone(params);
      //this.gridApione.setRowData(this.rowDatascalability);
      //this.gridApione.getModel();
      //this.rowDatascalability = [];
      //this.gridApione.forEachNode(RowNode => this.rowDatascalability.push(RowNode.data));
      //this.gridApione.setRowData(this.rowDatascalability);
      //var rowdatacount = this.rowDatascalability.length;
      ////var scalfact = (val / Number(this.labbatch));
      //for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
      //  var rowNode = this.gridApione.getRowNode(rowin);
      //  var qtynew: any = (Number(val) * Number(rowNode.data.Quantity)).toFixed(5);
      //  rowNode.setDataValue('Quantity', String(qtynew));
      //  var costnew: any = (Number(val) * Number(rowNode.data.Cost)).toFixed(5);
      //  rowNode.setDataValue('Cost', String(costnew));
      //}
      // rowNode.setDataValue('Quantity', String(qtynew));

    });
  }
  CoaCompare(): void {
    const dialogRef = this.dialog.open(CoaCompareComponent, {
      width: '60%', height: '60%', disableClose: true
    });
  }
  FormulaGraph(): void {
    const dialogRef = this.dialog.open(FormulaGraphComponent, {
      width: '40%', height: '30%', disableClose: true
    });
  }
  PropellantsvocCalculaton(): void {
    if (this.formulacode == "" || this.formulacode == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: "Enter Formula Code" } });
    }
    else {
      this.sendpropellenetvoc = [this.formulacode, this.formulaname, this.PDRno];
      const dialogRef = this.dialog.open(PropellantsvocCalculationComponent, {
        width: '80%', height: '90%', data: { displaydata: this.sendpropellenetvoc  } , disableClose: true
      });
    }
  }
  AddproductTesting(): void {
    const dialogRef = this.dialog.open(AddproductTestingComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  makeCellClickedinci(event) {
    this.incilabel = "INCI Name";
    this.Datashare.sendlabel(this.incilabel);
    this.editcellgridinci(event)
  }
  makeCellClickeditem(event) {
    this.incilabel = "Item"
    this.Datashare.sendlabel(this.incilabel);
    this.editcellgriditem(event)
  }
  makeCellClickedtrade(event) {
    this.incilabel = "Trade Name"
    this.Datashare.sendlabel(this.incilabel);
    this.editcellgridtrade(event)
  }
  makeCellClickedstep(event) {
    this.editcellgriddata2(event)
  }
  editcellgriditem(event) {
    let rowData = [];
    this.gridApi.forEachNode(RowNode => rowData.push(RowNode.data));
    this.gridApi.setRowData(rowData);
    this.rowindex = event.rowIndex;

    const dialogRef = this.dialog.open(ItemnameSelectComponent, {
      width: '80%', height: '40%', data: { displaydata: event.data.GeneralItemcode}, disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.gridinciname = result[0];
      this.griditem = result[1];
      this.gridtradename = result[2];
      this.gridp = result[3];
      this.gridsuppliername = result[4];
      this.unname = result[6];
      this.incicost = result[5];
      this.gridIngredientCode = result[7];
      this.gridApi.deselectAll();

      if (result != "") {


        this.convertunit(this.unname, this.gridIngredientCode, this.selectedunit).subscribe((conversionload) => {
          console.warn("convertload", conversionload)
          this.incicost = conversionload


          this.unname = this.selectedunit;

          // if (this.selectedunit == "g" && this.unname == "Kg") {
          //   this.unname = "g";
          //   this.incicost = (Number(this.incicost) / 1000).toString();
          // }
          // else if (this.selectedunit == "Kg" && this.unname == "g") {
          //   this.unname = "Kg";
          //   this.incicost = (Number(this.incicost) / 1000).toString();
          // } else if (this.selectedunit == "g" && this.unname == "Lb") {
          //   this.unname = "g";
          //   this.incicost = (Number(this.incicost) / 453.592).toString();
          // }
          // else if (this.selectedunit == "Lb" && this.unname == "g") {
          //   this.unname = "Lb";
          //   this.incicost = (Number(this.incicost) * 453.592).toString();
          // }
          // else if (this.selectedunit == "Kg" && this.unname == "Lb") {
          //   this.unname = "Kg";
          //   this.incicost = (Number(this.incicost) / 0.453592).toString();
          // }
          // else if (this.selectedunit == "Lb" && this.unname == "Kg") {
          //   this.unname = "Lb";
          //   this.incicost = (Number(this.incicost) * 0.453592).toString();
          // }
          // else if (this.selectedunit == "g" && this.unname == "Ltr") {
          //   this.unname = "g";
          //   this.incicost = (Number(this.incicost) / 1000).toString();
          // }
          // else if (this.selectedunit == "Lb" && this.unname == "Ltr") {
          //   this.unname = "Lb";
          //   this.incicost = (Number(this.incicost) * 0.453592).toString();
          // }
          // else if (this.selectedunit == "Kg" && this.unname == "Ltr") {
          //   this.unname = "Kg";
          ////   this.incicost = (Number(this.incicost) * 0.453592).toString();
          // }
          this.selectedData = this.gridApi.getFocusedCell()
          var RowNode = this.gridApi.getRowNode(this.selectedData.rowIndex)
          if (this.selectedData.rowIndex == 0) {

            if (RowNode.data.INCIName == "") {

              if (this.rowdrag == "rowDragEnd") {
                var cos: any = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                var cosinlb: any = 0;
                if (this.selectedunit == "g") {
                  cosinlb = Number(cos * 453.592 / Number(this.labbatch)).toFixed(5);
                } else if (this.selectedunit == "Kg") {
                  cosinlb = Number(cos * .453592 / Number(this.labbatch)).toFixed(5);
                }
                else {
                  cosinlb = Number((cos) / Number(this.labbatch)).toFixed(5);
                }
                var rowdatacount2 = this.gridApi.getDisplayedRowCount();
                var rowindata2: any;
                var fla: any = 0;
                var rowinc: any;
                if (rowdatacount2 == 1) {
                  rowindata2 = 1;
                }
                else {
                  for (let rowinc = 1; rowinc <= rowdatacount2 - 1; rowinc++) {
                    var rowNode = this.gridApi.getRowNode(rowinc);
                    if (rowNode.data.UnitName != '' && fla != 1) {
                      rowindata2 = rowinc;
                      fla = 1;
                      break;
                    }
                  }
                }
                var rowNode = this.gridApi.getRowNode(rowindata2);
                var qtypere = rowNode.data.Qtyinpercentage;
                var qtyvale = rowNode.data.Quantity;
                this.selectedData = {
                  Step: '',
                  INCIName: this.gridinciname,
                  TradeName: this.gridtradename,
                  GeneralItemcode: this.griditem,
                  Qtyinpercentage: qtypere,
                  Quantity: qtyvale,
                  UnitName: this.unname,
                  UnitCost: Number(this.incicost).toFixed(5),
                  Cost: (Number(this.incicost) * Number(rowNode.data.Quantity)).toFixed(5),
                  SupplierName: this.gridsuppliername,
                  costinlb: cosinlb,
                  ItemCode: this.gridIngredientCode,
                  unitcostinlb: Number(cosinlb).toFixed(5),
                };

                RowNode.setData(this.selectedData);
                var rowNode = this.gridApi.getRowNode(rowindata2);
                rowNode.setDataValue('Quantity', '0.0000000');
                rowNode.setDataValue('Qtyinpercentage', '0.0000000');
                let rowData = [];
                this.gridApi.forEachNode(RowNode => rowData.push(RowNode.data));
                this.gridApi.setRowData(rowData);
                // this.gridApi.updateRowData({ update: selectedData });
                //   var rowNode = this.gridApi.getRowNode(this.rowindex);
                this.TotalPercentage = '100';
                this.Yield = '100';
                var rowdatacount = this.gridApi.getDisplayedRowCount();
                var unitcosttotal = 0;
                var totalquantity = 0;
                var totaper = 0;
                var costlb = 0;
                var unitcosttotal = 0;
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                }
                this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                var totcs: Number = sumvar * Number(this.labbatch);
                // this.TotalUnitCost = this.formulaCost;
                
                this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));

                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
                }
                this.totaquantity = String(totalquantity.toFixed(5));
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
                }
                this.TotalPercentage = String(totaper.toFixed(5));

                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  costlb = Number(costlb) + Number(rowNode.data.costinlb);

                }
                this.TotalCostInLB = String(costlb.toFixed(5));
                this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
                subvalue = 0;


                this.gridApi.getModel();




                this.rowData = [];
                this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
                this.gridApi.setRowData(this.rowData);

              }

              else {


                var cos: any = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                var cosinlb: any = 0;
                if (this.selectedunit == "g") {
                  cosinlb = Number(cos * 453.592 / Number(this.labbatch)).toFixed(5);
                } else if (this.selectedunit == "Kg") {
                  cosinlb = Number(cos * .453592 / Number(this.labbatch)).toFixed(5);
                }
                else {
                  cosinlb = Number((cos) / Number(this.labbatch)).toFixed(5);
                }
                this.selectedData = {
                  Step: '',
                  INCIName: this.gridinciname,
                  TradeName: this.gridtradename,
                  GeneralItemcode: this.griditem,
                  Qtyinpercentage: '100.0000000',
                  Quantity: this.labbatch,
                  UnitName: this.unname,
                  UnitCost: Number(this.incicost).toFixed(5),
                  Cost: (Number(this.incicost) * Number(this.labbatch)).toFixed(5),
                  SupplierName: this.gridsuppliername,
                  costinlb: cosinlb,
                  ItemCode: this.gridIngredientCode,
                  unitcostinlb: Number(cosinlb).toFixed(5),
                };


                // this.gridApi.updateRowData({ update: selectedData });
                //   var rowNode = this.gridApi.getRowNode(this.rowindex);
                this.TotalPercentage = '100';
                this.Yield = '100';
                this.TotalUnitCost = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                this.formulaCost = Number(this.incicost).toFixed(5);
                this.totaquantity = this.labbatch;
                this.TotalCostInLB = Number(cosinlb).toFixed(5);
                this.TotalCostInkg = String((cosinlb * 2.20462).toFixed(5));
                RowNode.setData(this.selectedData);
                this.gridApi.getModel();




                this.rowData = [];
                this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
                this.gridApi.setRowData(this.rowData);



                var rowdatacount = this.gridApi.getDisplayedRowCount();
                var unitcosttotal = 0;
                var totalquantity = 0;
                var totaper = 0;
                var costlb = 0;
                var unitcosttotal = 0;
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                }
                this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                var totcs: Number = sumvar * Number(this.labbatch);
                // this.TotalUnitCost = this.formulaCost;
                this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));

                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
                }
                this.totaquantity = String(totalquantity.toFixed(5));
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
                }
                this.TotalPercentage = String(totaper.toFixed(5));

                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  costlb = Number(costlb) + Number(rowNode.data.costinlb);

                }
                this.TotalCostInLB = String(costlb.toFixed(5));
                this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
                subvalue = 0;

                RowNode.setData(this.selectedData);
                this.gridApi.getModel();




                this.rowData = [];
                this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
                this.gridApi.setRowData(this.rowData);


              }
            }
            else if (RowNode.data.UnitName != "") {


              var cos: any = (Number(this.incicost) * Number(RowNode.data.Quantity)).toFixed(5);
              var cosinlb: any = 0;
              if (this.selectedunit == "g") {
                cosinlb = Number(cos * 453.592 / Number(RowNode.data.Quantity)).toFixed(5);
              } else if (this.selectedunit == "Kg") {
                cosinlb = Number(cos * .453592 / Number(RowNode.data.Quantity)).toFixed(5);
              }
              else {
                cosinlb = Number((cos) / Number(RowNode.data.Quantity)).toFixed(5);
              }
              this.selectedData = {
                Step: '',
                INCIName: this.gridinciname,
                TradeName: this.gridtradename,
                GeneralItemcode: this.griditem,
                Qtyinpercentage: RowNode.data.Qtyinpercentage,
                Quantity: RowNode.data.Quantity,
                UnitName: this.unname,
                UnitCost: Number(this.incicost).toFixed(5),
                Cost: (Number(this.incicost) * Number(RowNode.data.Quantity)).toFixed(5),
                SupplierName: this.gridsuppliername,
                costinlb: cosinlb,
                ItemCode: this.gridIngredientCode,
                unitcostinlb: Number(cosinlb).toFixed(5),
              };


              // this.gridApi.updateRowData({ update: selectedData });
              //   var rowNode = this.gridApi.getRowNode(this.rowindex);
              this.TotalPercentage = '100';
              this.Yield = '100';
              // this.TotalUnitCost = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
              // this.formulaCost = Number(this.incicost).toFixed(5);
              // this.totaquantity = this.labbatch;
              // this.TotalCostInLB = Number(cosinlb).toFixed(5);
              // this.TotalCostInkg = String((cosinlb * 2.20462).toFixed(5));
              RowNode.setData(this.selectedData);
              var rowdatacount = this.gridApi.getDisplayedRowCount();
              var unitcosttotal = 0;
              var totalquantity = 0;
              var totaper = 0;
              var costlb = 0;
              var unitcosttotal = 0;
              for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                var rowNode = this.gridApi.getRowNode(rowin);
                unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
              }
              this.TotalUnitCost = String(unitcosttotal.toFixed(5));
              var totcs: Number = sumvar * Number(this.labbatch);
              // this.TotalUnitCost = this.formulaCost;
              this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));

              for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                var rowNode = this.gridApi.getRowNode(rowin);
                totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
              }
              this.totaquantity = String(totalquantity.toFixed(5));
              for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                var rowNode = this.gridApi.getRowNode(rowin);
                totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
              }
              this.TotalPercentage = String(totaper.toFixed(5));
              for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                var rowNode = this.gridApi.getRowNode(rowin);
                costlb = Number(costlb) + Number(rowNode.data.costinlb);

              }
              this.TotalCostInLB = String(costlb.toFixed(5));
              this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
              subvalue = 0;

              this.gridApi.getModel();
              this.rowData = [];
              this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
              this.gridApi.setRowData(this.rowData);
              RowNode.setData(this.selectedData);
            }
            else {
              var cos: any = (Number(this.incicost) * Number(RowNode.data.Quantity)).toFixed(5);
              var cosinlb: any = 0;
              if (this.selectedunit == "g") {
                cosinlb = Number(cos * 453.592 / Number(RowNode.data.Quantity)).toFixed(5);
              } else if (this.selectedunit == "Kg") {
                cosinlb = Number(cos * .453592 / Number(RowNode.data.Quantity)).toFixed(5);
              }
              else {
                cosinlb = Number((cos) / Number(RowNode.data.Quantity)).toFixed(5);
              }
              var rowdatacount2 = this.gridApi.getDisplayedRowCount();
              var rowindata2: any;
              var fla: any = 0;
              var rowinc: any;
              if (rowdatacount2 == 1) {
                var cos: any = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                if (this.selectedunit == "g") {
                  cosinlb = Number(cos * 453.592 / Number(this.labbatch)).toFixed(5);
                } else if (this.selectedunit == "Kg") {
                  cosinlb = Number(cos * .453592 / Number(this.labbatch)).toFixed(5);
                }
                else {
                  cosinlb = Number((cos) / Number(this.labbatch)).toFixed(5);
                }
                rowindata2 = 1;
                this.selectedData = {
                  Step: '',
                  INCIName: this.gridinciname,
                  TradeName: this.gridtradename,
                  GeneralItemcode: this.griditem,
                  Qtyinpercentage: '100.0000000',
                  Quantity: this.labbatch,
                  UnitName: this.unname,
                  UnitCost: Number(this.incicost).toFixed(5),
                  Cost: (Number(this.incicost) * Number(this.labbatch)).toFixed(5),
                  SupplierName: this.gridsuppliername,
                  costinlb: cosinlb,
                  ItemCode: this.gridIngredientCode,
                  unitcostinlb: Number(cosinlb).toFixed(5),
                };


                // this.gridApi.updateRowData({ update: selectedData });
                //   var rowNode = this.gridApi.getRowNode(this.rowindex);
                this.TotalPercentage = '100.00000';
                this.Yield = '100';
                this.TotalUnitCost = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                this.formulaCost = Number(this.incicost).toFixed(5);
                this.totaquantity = this.labbatch;
                this.TotalCostInLB = Number(cosinlb).toFixed(5);
                this.TotalCostInkg = String((cosinlb * 2.20462).toFixed(5));
                RowNode.setData(this.selectedData);
                this.gridApi.getModel();

              }
              else {
                for (let rowinc = 1; rowinc <= rowdatacount2 - 1; rowinc++) {
                  var rowNode = this.gridApi.getRowNode(rowinc);
                  if (rowNode.data.UnitName != '' && fla != 1) {
                    rowindata2 = rowinc;
                    fla = 1;
                    break;
                  }
                }
                var rowNode = this.gridApi.getRowNode(rowindata2);
                var qtypere = rowNode.data.Qtyinpercentage;
                var qtyvale = rowNode.data.Quantity;
                this.selectedData = {
                  Step: '',
                  INCIName: this.gridinciname,
                  TradeName: this.gridtradename,
                  GeneralItemcode: this.griditem,
                  Qtyinpercentage: qtypere,
                  Quantity: qtyvale,
                  UnitName: this.unname,
                  UnitCost: Number(this.incicost).toFixed(5),
                  Cost: null,
                  SupplierName: this.gridsuppliername,
                  costinlb: null,
                  ItemCode: this.gridIngredientCode,
                  unitcostinlb: Number(this.incicost).toFixed(5),
                };
                // this.gridApi.updateRowData({ update: selectedData });
                //   var rowNode = this.gridApi.getRowNode(this.rowindex);


                RowNode.setData(this.selectedData);

                var rowNode = this.gridApi.getRowNode(rowindata2);
                rowNode.setDataValue('Quantity', '0.0000000');
                rowNode.setDataValue('Qtyinpercentage', '0.0000000');

              }
              var rowin: any = 0;
              var rowing: any = 0;
              let { rowsToDisplay } = this.gridApi.getModel();
              this.rowData = [];
              this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
              this.gridApi.setRowData(this.rowData);
              //this.firstdata= rowNode.data.Qtyinpercentage;
              rowin = RowNode.rowIndex;
              //  this.gridApi.refreshCells(params);
              if (rowin != 0) {
                var sumvar: any = 0;
                var firstsumvar: any = 0;
                rowin = 1;
                var i = 1;
                var rowdatacount = this.gridApi.getDisplayedRowCount();
                var flaa: any = 0;
                var rowindata1: any
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  if (rowNode.data.UnitName != '' && flaa != 1) {
                    rowindata1 = rowin;
                    rowindata1 = rowindata1 + 1;
                    flaa = 1;
                    break;
                  }
                }
                //for (let rowin = 1; rowin <= this.rowData.length; rowin++) 
                for (let rowin = rowindata1, i = rowindata1; i <= rowdatacount - 1; rowin++, i++) {


                  var rowNode = this.gridApi.getRowNode(rowin);

                  sumvar = Number(sumvar) + Number(rowNode.data.Qtyinpercentage);

                }
                var firstrowNode = this.gridApi.getRowNode(0);
                rowin = RowNode.rowIndex;
                var rowNo = this.gridApi.getRowNode(rowin);
                var pamv = Number('0.0000000');

                if (pamv < 0.0000000 || isNaN(pamv)) {
                  var dat: any = '0.0000000';
                  var rowNode = this.gridApi.getRowNode(rowin);
                  rowNode.setDataValue('Qtyinpercentage', String(dat));
                }

                //  else if (Number(100 - Number(sumvar)) >= Number(firstrowNode.data.Qtyinpercentage)  )
                //else if (params.newValue >= firstrowNode.data.Qtyinpercentage && (100-sumvar)<)
                else if (Number((sumvar).toFixed(7)) > 100) {

                  var dat: any = '0.0000000';
                  var rowNode = this.gridApi.getRowNode(rowin);
                  rowNode.setDataValue('Qtyinpercentage', String(dat));
                  rowNode.setDataValue('UnitCost', rowNo.data.UnitCost);
                }

                else {
                  var dat: any = '0.0000000';
                  var adt2: any = Number('0.0000000');
                  var dat2: any = String(adt2.toFixed(7));
                  var rowNode = this.gridApi.getRowNode(rowin);

                  rowNode.setDataValue('Qtyinpercentage', '0.0000000');

                  //  rowin2 = params.node.rowIndex;
                  //  const colId = params.column.getId();

                  var qtyper: Number = Number(dat);
                  var rowNode = this.gridApi.getRowNode(rowin);
                  var oldda: any = '0.0000000';
                  var enwda: any = ((Number(this.labbatch) / 100) * dat).toFixed(7);
                  var unicost: any = Number(this.incicost).toFixed(5);
                  var updatedunicost: any = (enwda * unicost).toFixed(5);

                  rowNode.setDataValue('Quantity', String(enwda));
                  rowNode.setDataValue('Cost', String(updatedunicost));
                  if (this.selectedunit == "g") {
                    var updtedcosinlb: any = Number(updatedunicost * 453.592 / Number(this.labbatch)).toFixed(5);
                  } else if (this.selectedunit == "Kg") {
                    var updtedcosinlb: any = Number(updatedunicost * .453592 / Number(this.labbatch)).toFixed(5);
                  }
                  else {
                    var updtedcosinlb: any = Number((updatedunicost) / Number(this.labbatch)).toFixed(5);
                  }

                  rowNode.setDataValue('costinlb', String(updtedcosinlb));
                  rowNode.setDataValue('quantityinlb', String(enwda));


                  var rowindata: any;
                  var fla: any = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    if (rowNode.data.UnitName != '' && fla != 1) {
                      rowindata = rowin;
                      fla = 1;
                      break;
                    }
                  }

                  //rowin = 0;
                  var rowNode = this.gridApi.getRowNode(rowindata);
                  rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                  //var rowin2: any = params.node.rowIndex;
                  //var rowNode2 = this.gridApi.getRowNode(rowin2);
                  //rowNode2.setDataValue('Qtyinpercentage', String(qtyper.toFixed(7)));
                  rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                  rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                  var fistrowdata: any = rowNode.data.Qtyinpercentage;

                  var firstrowunicost: any = rowNode.data.UnitCost;
                  var subvalue: any = (fistrowdata - dat).toFixed(7);

                  subvalue = ((100 - sumvar.toFixed(7))).toFixed(7);
                  if (subvalue == "-0.0000000") {
                    subvalue = "0.0000000";
                  }
                  this.formulaCost = String(sumvar);
                  var unitcosttotal = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                  }
                  this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                  var totcs: Number = sumvar * Number(this.labbatch);
                  // this.TotalUnitCost = this.formulaCost;
                  this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
                  // this.TotalUnitCost = String(totcs.toFixed(5));
                  if (subvalue < 0.0000000) {
                    rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                    rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                    rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                  }
                  else {
                    var rowNode = this.gridApi.getRowNode(rowindata);
                    // var subvalue2: any = subvalue.toFixed(7);
                    rowNode.setDataValue('Qtyinpercentage', String(subvalue));

                    var enwda2: any = ((Number(this.labbatch) / 100) * subvalue).toFixed(7);
                    var subcost: any = (enwda2 * firstrowunicost).toFixed(5);

                    rowNode.setDataValue('Quantity', String(enwda2));
                    rowNode.setDataValue('Cost', String(subcost));

                    if (this.selectedunit == "g") {
                      var cosinlb: any = Number(subcost * 453.592 / Number(this.labbatch)).toFixed(5);
                    } else if (this.selectedunit == "Kg") {
                      var cosinlb: any = Number(subcost * .453592 / Number(this.labbatch)).toFixed(5);
                    }
                    else {

                      var cosinlb: any = Number((subcost) / Number(this.labbatch)).toFixed(5);
                    }

                    rowNode.setDataValue('costinlb', String(cosinlb));
                    rowNode.setDataValue('quantityinlb', String(enwda2));
                  }
                  var totalquantity = 0;
                  var totaper = 0;
                  var costlb = 0;
                  var unitcosttotal = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                  }
                  this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                  this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
                  }
                  this.totaquantity = String(totalquantity.toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
                  }
                  this.TotalPercentage = String(totaper.toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    costlb = Number(costlb) + Number(rowNode.data.costinlb);

                  }
                  this.TotalCostInLB = String(costlb.toFixed(5));
                  this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
                  subvalue = 0;
                  this.rowsToDisplay1 = this.gridApi.getModel();
                }








                var sumvar: any = 0;
                for (rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  sumvar = Number(sumvar) + Number(rowNode.data.Cost);
                }
                // this.formulaCost = String(sumvar);
                var totcs: Number = sumvar * Number(this.labbatch);
                //this.TotalUnitCost = String(totcs);
                rowin = 0;
                this.count = 1;
              }
              this.gridApi.deselectAll();
              this.rowindex = null;


          //  this.gridApi.refreshClientSideRowModel();
          //this.gridApi.updateRowData({
          //  add: [{ Step: '', INCIName: this.gridinciname, TradeName: this.gridtradename, GeneralItemcode: this.griditem, Qtyinpercentage: '0.0000000', Quantity: '0.0000000', UnitName: this.unname, UnitCost: (Number(this.incicost)).toFixed(5).toString(), Cost: null, SupplierName: this.gridsuppliername }],
          //    addIndex: this.rowindex

          //  });



            }
          }
          else {
            if (RowNode.data.UnitName == "") {

              var rowdatacount = this.gridApi.getDisplayedRowCount();
              var flaa: any = 0;
              var emp1: any = 0
              var rowindata1: any
              var rowcount = this.selectedData.rowIndex;
              for (let rowin = 0; rowin <= rowcount; rowin++) {
                var rowNode = this.gridApi.getRowNode(rowin);
                if (rowNode.data.UnitName != '' && flaa != 1) {
                  emp1 = 1;
                  rowindata1 = rowin;
                  rowindata1 = rowindata1 + 1;
                  flaa = 1;
                  break;
                }
                else {
                  rowindata1 = rowin;
                  rowindata1 = rowindata1 + 1;
                }

              }
              if (emp1 == 1) {
                this.selectedData = {
                  Step: '',
                  INCIName: this.gridinciname,
                  TradeName: this.gridtradename,
                  GeneralItemcode: this.griditem,
                  Qtyinpercentage: '0.0000000',
                  Quantity: '0.0000000',
                  UnitName: this.unname,
                  UnitCost: Number(this.incicost).toFixed(5),
                  Cost: null,
                  SupplierName: this.gridsuppliername,
                  costinlb: null,
                  ItemCode: this.gridIngredientCode,
                  unitcostinlb: Number(this.incicost).toFixed(5),
                };
                // this.gridApi.updateRowData({ update: selectedData });
                //   var rowNode = this.gridApi.getRowNode(this.rowindex);


                RowNode.setData(this.selectedData);



              }
              else {
                var rowindata4: any
                var emp3: any = 0;
                var rowdatacount4 = this.gridApi.getDisplayedRowCount();
                for (let rowind = 1; rowind <= rowdatacount4 - 1; rowind++) {
                  var rowNode = this.gridApi.getRowNode(rowind);
                  if (rowNode.data.UnitName != '' && fla != 1) {
                    rowindata4 = rowinc;
                    emp3 = 1
                    fla = 1;
                    break;
                  }
                }
                if (emp3 == 0) {
                  var cos: any = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                  if (this.selectedunit == "g") {
                    cosinlb = Number(cos * 453.592 / Number(this.labbatch)).toFixed(5);
                  } else if (this.selectedunit == "Kg") {
                    cosinlb = Number(cos * .453592 / Number(this.labbatch)).toFixed(5);
                  }
                  else {
                    cosinlb = Number((cos) / Number(this.labbatch)).toFixed(5);
                  }
                  rowindata2 = 1;
                  this.selectedData = {
                    Step: '',
                    INCIName: this.gridinciname,
                    TradeName: this.gridtradename,
                    GeneralItemcode: this.griditem,
                    Qtyinpercentage: '100.0000000',
                    Quantity: this.labbatch,
                    UnitName: this.unname,
                    UnitCost: Number(this.incicost).toFixed(5),
                    Cost: (Number(this.incicost) * Number(this.labbatch)).toFixed(5),
                    SupplierName: this.gridsuppliername,
                    costinlb: cosinlb,
                    ItemCode: this.gridIngredientCode,
                    unitcostinlb: Number(cosinlb).toFixed(5),
                  };


                  // this.gridApi.updateRowData({ update: selectedData });
                  //   var rowNode = this.gridApi.getRowNode(this.rowindex);
                  this.TotalPercentage = '100.00000';
                  this.Yield = '100';
                  this.TotalUnitCost = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                  this.formulaCost = Number(this.incicost).toFixed(5);
                  this.totaquantity = this.labbatch;
                  this.TotalCostInLB = Number(cosinlb).toFixed(5);
                  this.TotalCostInkg = String((cosinlb * 2.20462).toFixed(5));
                  RowNode.setData(this.selectedData);
                  this.gridApi.getModel();

                }
                else {
                  var rowNode = this.gridApi.getRowNode(rowindata1);
                  var qtypere = rowNode.data.Qtyinpercentage;
                  var qtyvale = rowNode.data.Quantity;
                  this.selectedData = {
                    Step: '',
                    INCIName: this.gridinciname,
                    TradeName: this.gridtradename,
                    GeneralItemcode: this.griditem,
                    Qtyinpercentage: qtypere,
                    Quantity: qtyvale,
                    UnitName: this.unname,
                    UnitCost: Number(this.incicost).toFixed(5),
                    Cost: null,
                    SupplierName: this.gridsuppliername,
                    costinlb: null,
                    ItemCode: this.gridIngredientCode,
                    unitcostinlb: Number(this.incicost).toFixed(5),
                  };
                  // this.gridApi.updateRowData({ update: selectedData });
                  //   var rowNode = this.gridApi.getRowNode(this.rowindex);


                  RowNode.setData(this.selectedData);

                  var rowNode = this.gridApi.getRowNode(rowindata1);
                  rowNode.setDataValue('Quantity', '0.0000000');
                  rowNode.setDataValue('Qtyinpercentage', '0.0000000');

                }
              }

              var rowin: any = 0;
              var rowing: any = 0;
              let { rowsToDisplay } = this.gridApi.getModel();
              this.rowData = [];
              this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
              this.gridApi.setRowData(this.rowData);
              //this.firstdata= rowNode.data.Qtyinpercentage;
              rowin = RowNode.rowIndex;
              //  this.gridApi.refreshCells(params);
              if (rowin != 0) {
                var sumvar: any = 0;
                var firstsumvar: any = 0;
                rowin = 1;
                var i = 1;
                var rowdatacount = this.gridApi.getDisplayedRowCount();
                var flaa: any = 0;
                var rowindata1: any
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  if (rowNode.data.UnitName != '' && flaa != 1) {
                    rowindata1 = rowin;
                    rowindata1 = rowindata1 + 1;
                    flaa = 1;
                    break;
                  }
                }
                //for (let rowin = 1; rowin <= this.rowData.length; rowin++) 
                for (let rowin = rowindata1, i = rowindata1; i <= rowdatacount - 1; rowin++, i++) {


                  var rowNode = this.gridApi.getRowNode(rowin);

                  sumvar = Number(sumvar) + Number(rowNode.data.Qtyinpercentage);

                }
                var firstrowNode = this.gridApi.getRowNode(0);
                rowin = RowNode.rowIndex;
                var rowNo = this.gridApi.getRowNode(rowin);
                var pamv = Number('0.0000000');

                if (pamv < 0.0000000 || isNaN(pamv)) {
                  var dat: any = '0.0000000';
                  var rowNode = this.gridApi.getRowNode(rowin);
                  rowNode.setDataValue('Qtyinpercentage', String(dat));
                }

                //  else if (Number(100 - Number(sumvar)) >= Number(firstrowNode.data.Qtyinpercentage)  )
                //else if (params.newValue >= firstrowNode.data.Qtyinpercentage && (100-sumvar)<)
                else if (Number((sumvar).toFixed(7)) > 100) {

                  var dat: any = '0.0000000';
                  var rowNode = this.gridApi.getRowNode(rowin);
                  rowNode.setDataValue('Qtyinpercentage', String(dat));
                  rowNode.setDataValue('UnitCost', rowNo.data.UnitCost);
                }

                else {
                  var dat: any = '0.0000000';
                  var adt2: any = Number('0.0000000');
                  var dat2: any = String(adt2.toFixed(7));
                  var rowNode = this.gridApi.getRowNode(rowin);

                  rowNode.setDataValue('Qtyinpercentage', '0.0000000');

                  //  rowin2 = params.node.rowIndex;
                  //  const colId = params.column.getId();

                  var qtyper: Number = Number(dat);
                  var rowNode = this.gridApi.getRowNode(rowin);
                  var oldda: any = '0.0000000';
                  var enwda: any = ((Number(this.labbatch) / 100) * dat).toFixed(7);
                  var unicost: any = Number(this.incicost).toFixed(5);
                  var updatedunicost: any = (enwda * unicost).toFixed(5);

                  rowNode.setDataValue('Quantity', String(enwda));
                  rowNode.setDataValue('Cost', String(updatedunicost));
                  if (this.selectedunit == "g") {
                    var updtedcosinlb: any = Number(updatedunicost * 453.592 / Number(this.labbatch)).toFixed(5);
                  } else if (this.selectedunit == "Kg") {
                    var updtedcosinlb: any = Number(updatedunicost * .453592 / Number(this.labbatch)).toFixed(5);
                  }
                  else {
                    var updtedcosinlb: any = Number((updatedunicost) / Number(this.labbatch)).toFixed(5);
                  }

                  rowNode.setDataValue('costinlb', String(updtedcosinlb));
                  rowNode.setDataValue('quantityinlb', String(enwda));


                  var rowindata: any;
                  var fla: any = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    if (rowNode.data.UnitName != '' && fla != 1) {
                      rowindata = rowin;
                      fla = 1;
                      break;
                    }
                  }

                  //rowin = 0;
                  var rowNode = this.gridApi.getRowNode(rowindata);
                  rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                  //var rowin2: any = params.node.rowIndex;
                  //var rowNode2 = this.gridApi.getRowNode(rowin2);
                  //rowNode2.setDataValue('Qtyinpercentage', String(qtyper.toFixed(7)));
                  rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                  rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                  var fistrowdata: any = rowNode.data.Qtyinpercentage;

                  var firstrowunicost: any = rowNode.data.UnitCost;
                  var subvalue: any = (fistrowdata - dat).toFixed(7);

                  subvalue = ((100 - sumvar.toFixed(7))).toFixed(7);
                  if (subvalue == "-0.0000000") {
                    subvalue = "0.0000000";
                  }
                  this.formulaCost = String(sumvar);
                  var unitcosttotal = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                  }
                  this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                  var totcs: Number = sumvar * Number(this.labbatch);
                  // this.TotalUnitCost = this.formulaCost;
                  this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
                  // this.TotalUnitCost = String(totcs.toFixed(5));
                  if (subvalue < 0.0000000) {
                    rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                    rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                    rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                  }
                  else {
                    var rowNode = this.gridApi.getRowNode(rowindata);
                    // var subvalue2: any = subvalue.toFixed(7);
                    rowNode.setDataValue('Qtyinpercentage', String(subvalue));

                    var enwda2: any = ((Number(this.labbatch) / 100) * subvalue).toFixed(7);
                    var subcost: any = (enwda2 * firstrowunicost).toFixed(5);

                    rowNode.setDataValue('Quantity', String(enwda2));
                    rowNode.setDataValue('Cost', String(subcost));

                    if (this.selectedunit == "g") {
                      var cosinlb: any = Number(subcost * 453.592 / Number(this.labbatch)).toFixed(5);
                    } else if (this.selectedunit == "Kg") {
                      var cosinlb: any = Number(subcost * .453592 / Number(this.labbatch)).toFixed(5);
                    }
                    else {

                      var cosinlb: any = Number((subcost) / Number(this.labbatch)).toFixed(5);
                    }

                    rowNode.setDataValue('costinlb', String(cosinlb));
                    rowNode.setDataValue('quantityinlb', String(enwda2));
                  }
                  var totalquantity = 0;
                  var totaper = 0;
                  var costlb = 0;
                  var unitcosttotal = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                  }
                  this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                  this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
                  }
                  this.totaquantity = String(totalquantity.toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
                  }
                  this.TotalPercentage = String(totaper.toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    costlb = Number(costlb) + Number(rowNode.data.costinlb);

                  }
                  this.TotalCostInLB = String(costlb.toFixed(5));
                  this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
                  subvalue = 0;
                  this.rowsToDisplay1 = this.gridApi.getModel();
                }








                var sumvar: any = 0;
                for (rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  sumvar = Number(sumvar) + Number(rowNode.data.Cost);
                }
                // this.formulaCost = String(sumvar);
                var totcs: Number = sumvar * Number(this.labbatch);
                //this.TotalUnitCost = String(totcs);
                rowin = 0;
                this.count = 1;
              }
              this.gridApi.deselectAll();
              this.rowindex = null;


              //  this.gridApi.refreshClientSideRowModel();
              //this.gridApi.updateRowData({
              //  add: [{ Step: '', INCIName: this.gridinciname, TradeName: this.gridtradename, GeneralItemcode: this.griditem, Qtyinpercentage: '0.0000000', Quantity: '0.0000000', UnitName: this.unname, UnitCost: (Number(this.incicost)).toFixed(5).toString(), Cost: null, SupplierName: this.gridsuppliername }],
              //    addIndex: this.rowindex

              //  });


            }
            else {
              this.selectedData = {
                Step: '',
                INCIName: this.gridinciname,
                TradeName: this.gridtradename,
                GeneralItemcode: this.griditem,
                Qtyinpercentage: '0.0000000',
                Quantity: '0.0000000',
                UnitName: this.unname,
                UnitCost: Number(this.incicost).toFixed(5),
                Cost: null,
                SupplierName: this.gridsuppliername,
                costinlb: null,
                ItemCode: this.gridIngredientCode,
                unitcostinlb: Number(this.incicost).toFixed(5),
              };
              // this.gridApi.updateRowData({ update: selectedData });
              //   var rowNode = this.gridApi.getRowNode(this.rowindex);


              RowNode.setData(this.selectedData);


              var rowin: any = 0;
              var rowing: any = 0;
              let { rowsToDisplay } = this.gridApi.getModel();
              this.rowData = [];
              this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
              this.gridApi.setRowData(this.rowData);
              //this.firstdata= rowNode.data.Qtyinpercentage;
              rowin = RowNode.rowIndex;
              //  this.gridApi.refreshCells(params);
              if (rowin != 0) {
                var sumvar: any = 0;
                var firstsumvar: any = 0;
                rowin = 1;
                var i = 1;
                var rowdatacount = this.gridApi.getDisplayedRowCount();
                var flaa: any = 0;
                var rowindata1: any
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  if (rowNode.data.UnitName != '' && flaa != 1) {
                    rowindata1 = rowin;
                    rowindata1 = rowindata1 + 1;
                    flaa = 1;
                    break;
                  }
                }
                //for (let rowin = 1; rowin <= this.rowData.length; rowin++) 
                for (let rowin = rowindata1, i = rowindata1; i <= rowdatacount - 1; rowin++, i++) {


                  var rowNode = this.gridApi.getRowNode(rowin);

                  sumvar = Number(sumvar) + Number(rowNode.data.Qtyinpercentage);

                }
                var firstrowNode = this.gridApi.getRowNode(0);
                rowin = RowNode.rowIndex;
                var rowNo = this.gridApi.getRowNode(rowin);
                var pamv = Number('0.0000000');

                if (pamv < 0.0000000 || isNaN(pamv)) {
                  var dat: any = '0.0000000';
                  var rowNode = this.gridApi.getRowNode(rowin);
                  rowNode.setDataValue('Qtyinpercentage', String(dat));
                }

                //  else if (Number(100 - Number(sumvar)) >= Number(firstrowNode.data.Qtyinpercentage)  )
                //else if (params.newValue >= firstrowNode.data.Qtyinpercentage && (100-sumvar)<)
                else if (Number((sumvar).toFixed(7)) > 100) {

                  var dat: any = '0.0000000';
                  var rowNode = this.gridApi.getRowNode(rowin);
                  rowNode.setDataValue('Qtyinpercentage', String(dat));
                  rowNode.setDataValue('UnitCost', rowNo.data.UnitCost);
                }

                else {
                  var dat: any = '0.0000000';
                  var adt2: any = Number('0.0000000');
                  var dat2: any = String(adt2.toFixed(7));
                  var rowNode = this.gridApi.getRowNode(rowin);

                  rowNode.setDataValue('Qtyinpercentage', '0.0000000');

                  //  rowin2 = params.node.rowIndex;
                  //  const colId = params.column.getId();

                  var qtyper: Number = Number(dat);
                  var rowNode = this.gridApi.getRowNode(rowin);
                  var oldda: any = '0.0000000';
                  var enwda: any = ((Number(this.labbatch) / 100) * dat).toFixed(7);
                  var unicost: any = Number(this.incicost).toFixed(5);
                  var updatedunicost: any = (enwda * unicost).toFixed(5);

                  rowNode.setDataValue('Quantity', String(enwda));
                  rowNode.setDataValue('Cost', String(updatedunicost));
                  if (this.selectedunit == "g") {
                    var updtedcosinlb: any = Number(updatedunicost * 453.592 / Number(this.labbatch)).toFixed(5);
                  } else if (this.selectedunit == "Kg") {
                    var updtedcosinlb: any = Number(updatedunicost * .453592 / Number(this.labbatch)).toFixed(5);
                  }
                  else {
                    var updtedcosinlb: any = Number((updatedunicost) / Number(this.labbatch)).toFixed(5);
                  }

                  rowNode.setDataValue('costinlb', String(updtedcosinlb));
                  rowNode.setDataValue('quantityinlb', String(enwda));


                  var rowindata: any;
                  var fla: any = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    if (rowNode.data.UnitName != '' && fla != 1) {
                      rowindata = rowin;
                      fla = 1;
                      break;
                    }
                  }

                  //rowin = 0;
                  var rowNode = this.gridApi.getRowNode(rowindata);
                  rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                  //var rowin2: any = params.node.rowIndex;
                  //var rowNode2 = this.gridApi.getRowNode(rowin2);
                  //rowNode2.setDataValue('Qtyinpercentage', String(qtyper.toFixed(7)));
                  rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                  rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                  var fistrowdata: any = rowNode.data.Qtyinpercentage;

                  var firstrowunicost: any = rowNode.data.UnitCost;
                  var subvalue: any = (fistrowdata - dat).toFixed(7);

                  subvalue = ((100 - sumvar.toFixed(7))).toFixed(7);
                  if (subvalue == "-0.0000000") {
                    subvalue = "0.0000000";
                  }
                  this.formulaCost = String(sumvar);
                  var unitcosttotal = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                  }
                  this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                  var totcs: Number = sumvar * Number(this.labbatch);
                  // this.TotalUnitCost = this.formulaCost;
                  this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
                  // this.TotalUnitCost = String(totcs.toFixed(5));
                  if (subvalue < 0.0000000) {
                    rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                    rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                    rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                  }
                  else {
                    var rowNode = this.gridApi.getRowNode(rowindata);
                    // var subvalue2: any = subvalue.toFixed(7);
                    rowNode.setDataValue('Qtyinpercentage', String(subvalue));

                    var enwda2: any = ((Number(this.labbatch) / 100) * subvalue).toFixed(7);
                    var subcost: any = (enwda2 * firstrowunicost).toFixed(5);

                    rowNode.setDataValue('Quantity', String(enwda2));
                    rowNode.setDataValue('Cost', String(subcost));

                    if (this.selectedunit == "g") {
                      var cosinlb: any = Number(subcost * 453.592 / Number(this.labbatch)).toFixed(5);
                    } else if (this.selectedunit == "Kg") {
                      var cosinlb: any = Number(subcost * .453592 / Number(this.labbatch)).toFixed(5);
                    }
                    else {

                      var cosinlb: any = Number((subcost) / Number(this.labbatch)).toFixed(5);
                    }

                    rowNode.setDataValue('costinlb', String(cosinlb));
                    rowNode.setDataValue('quantityinlb', String(enwda2));
                  }
                  var totalquantity = 0;
                  var totaper = 0;
                  var costlb = 0;
                  var unitcosttotal = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                  }
                  this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                  this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
                  }
                  this.totaquantity = String(totalquantity.toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
                  }
                  this.TotalPercentage = String(totaper.toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    costlb = Number(costlb) + Number(rowNode.data.costinlb);

                  }
                  this.TotalCostInLB = String(costlb.toFixed(5));
                  this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
                  subvalue = 0;
                  this.rowsToDisplay1 = this.gridApi.getModel();
                }








                var sumvar: any = 0;
                for (rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  sumvar = Number(sumvar) + Number(rowNode.data.Cost);
                }
                // this.formulaCost = String(sumvar);
                var totcs: Number = sumvar * Number(this.labbatch);
                //this.TotalUnitCost = String(totcs);
                rowin = 0;
                this.count = 1;
              }
              this.gridApi.deselectAll();
              this.rowindex = null;


              //  this.gridApi.refreshClientSideRowModel();
              //this.gridApi.updateRowData({
              //  add: [{ Step: '', INCIName: this.gridinciname, TradeName: this.gridtradename, GeneralItemcode: this.griditem, Qtyinpercentage: '0.0000000', Quantity: '0.0000000', UnitName: this.unname, UnitCost: (Number(this.incicost)).toFixed(5).toString(), Cost: null, SupplierName: this.gridsuppliername }],
              //    addIndex: this.rowindex

              //  });


            }
          }
        })
      }
      else {


      }
      let { rowsToDisplay } = this.gridApi.getModel();
      this.rowData = [];
      this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
      this.gridApi.setRowData(this.rowData);
      this.rowindex = null;
    });

  }
  editcellgridtrade(event) {
  //  let rowData = [];
  //  this.gridApi.forEachNode(RowNode => rowData.push(RowNode.data));
  //  this.gridApi.setRowData(rowData);
    this.rowindex = event.rowIndex;
    var rowin6: any = event.rowIndex;
    const dialogRef = this.dialog.open(TradenameSelectComponent, {
      width: '80%', height: '40%', data: { displaydata: event.data.TradeName }, disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.gridinciname = result[0];
      this.griditem = result[1];
      this.gridtradename = result[2];
      this.gridp = result[3];
      this.gridsuppliername = result[4];
      this.unname = result[6];
      this.incicost = result[5];
      this.gridIngredientCode = result[7];
      this.gridApi.deselectAll();

      if (result != "") {


        this.convertunit(this.unname, this.gridIngredientCode, this.selectedunit).subscribe((conversionload) => {
          console.warn("convertload", conversionload)
          this.incicost = conversionload


          this.unname = this.selectedunit;

          // if (this.selectedunit == "g" && this.unname == "Kg") {
          //   this.unname = "g";
          //   this.incicost = (Number(this.incicost) / 1000).toString();
          // }
          // else if (this.selectedunit == "Kg" && this.unname == "g") {
          //   this.unname = "Kg";
          //   this.incicost = (Number(this.incicost) / 1000).toString();
          // } else if (this.selectedunit == "g" && this.unname == "Lb") {
          //   this.unname = "g";
          //   this.incicost = (Number(this.incicost) / 453.592).toString();
          // }
          // else if (this.selectedunit == "Lb" && this.unname == "g") {
          //   this.unname = "Lb";
          //   this.incicost = (Number(this.incicost) * 453.592).toString();
          // }
          // else if (this.selectedunit == "Kg" && this.unname == "Lb") {
          //   this.unname = "Kg";
          //   this.incicost = (Number(this.incicost) / 0.453592).toString();
          // }
          // else if (this.selectedunit == "Lb" && this.unname == "Kg") {
          //   this.unname = "Lb";
          //   this.incicost = (Number(this.incicost) * 0.453592).toString();
          // }
          // else if (this.selectedunit == "g" && this.unname == "Ltr") {
          //   this.unname = "g";
          //   this.incicost = (Number(this.incicost) / 1000).toString();
          // }
          // else if (this.selectedunit == "Lb" && this.unname == "Ltr") {
          //   this.unname = "Lb";
          //   this.incicost = (Number(this.incicost) * 0.453592).toString();
          // }
          // else if (this.selectedunit == "Kg" && this.unname == "Ltr") {
          //   this.unname = "Kg";
          ////   this.incicost = (Number(this.incicost) * 0.453592).toString();
          // }
          this.selectedData = this.gridApi.getFocusedCell()
          var RowNode = this.gridApi.getRowNode(this.selectedData.rowIndex)
          if (this.selectedData.rowIndex == 0) {

            if (RowNode.data.INCIName == "") {

              if (this.rowdrag == "rowDragEnd") {
                var cos: any = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                var cosinlb: any = 0;
                if (this.selectedunit == "g") {
                  cosinlb = Number(cos * 453.592 / Number(this.labbatch)).toFixed(5);
                } else if (this.selectedunit == "Kg") {
                  cosinlb = Number(cos * .453592 / Number(this.labbatch)).toFixed(5);
                }
                else {
                  cosinlb = Number((cos) / Number(this.labbatch)).toFixed(5);
                }
                var rowdatacount2 = this.gridApi.getDisplayedRowCount();
                var rowindata2: any;
                var fla: any = 0;
                var rowinc: any;
                if (rowdatacount2 == 1) {
                  rowindata2 = 1;
                }
                else {
                  for (let rowinc = 1; rowinc <= rowdatacount2 - 1; rowinc++) {
                    var rowNode = this.gridApi.getRowNode(rowinc);
                    if (rowNode.data.UnitName != '' && fla != 1) {
                      rowindata2 = rowinc;
                      fla = 1;
                      break;
                    }
                  }
                }
                var rowNode = this.gridApi.getRowNode(rowindata2);
                var qtypere = rowNode.data.Qtyinpercentage;
                var qtyvale = rowNode.data.Quantity;
                this.selectedData = {
                  Step: '',
                  INCIName: this.gridinciname,
                  TradeName: this.gridtradename,
                  GeneralItemcode: this.griditem,
                  Qtyinpercentage: qtypere,
                  Quantity: qtyvale,
                  UnitName: this.unname,
                  UnitCost: Number(this.incicost).toFixed(5),
                  Cost: (Number(this.incicost) * Number(rowNode.data.Quantity)).toFixed(5),
                  SupplierName: this.gridsuppliername,
                  costinlb: cosinlb,
                  ItemCode: this.gridIngredientCode,
                  unitcostinlb: Number(cosinlb).toFixed(5),
                };

                RowNode.setData(this.selectedData);
                var rowNode = this.gridApi.getRowNode(rowindata2);
                rowNode.setDataValue('Quantity', '0.0000000');
                rowNode.setDataValue('Qtyinpercentage', '0.0000000');
                let rowData = [];
                this.gridApi.forEachNode(RowNode => rowData.push(RowNode.data));
                this.gridApi.setRowData(rowData);
                // this.gridApi.updateRowData({ update: selectedData });
                //   var rowNode = this.gridApi.getRowNode(this.rowindex);
                this.TotalPercentage = '100';
                this.Yield = '100';
                var rowdatacount = this.gridApi.getDisplayedRowCount();
                var unitcosttotal = 0;
                var totalquantity = 0;
                var totaper = 0;
                var costlb = 0;
                var unitcosttotal = 0;
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                }
                this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                var totcs: Number = sumvar * Number(this.labbatch);
                // this.TotalUnitCost = this.formulaCost;
                this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));

                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
                }
                this.totaquantity = String(totalquantity.toFixed(5));
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
                }
                this.TotalPercentage = String(totaper.toFixed(5));

                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  costlb = Number(costlb) + Number(rowNode.data.costinlb);

                }
                this.TotalCostInLB = String(costlb.toFixed(5));
                this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
                subvalue = 0;


                this.gridApi.getModel();




                this.rowData = [];
                this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
                this.gridApi.setRowData(this.rowData);

              }

              else {


                var cos: any = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                var cosinlb: any = 0;
                if (this.selectedunit == "g") {
                  cosinlb = Number(cos * 453.592 / Number(this.labbatch)).toFixed(5);
                } else if (this.selectedunit == "Kg") {
                  cosinlb = Number(cos * .453592 / Number(this.labbatch)).toFixed(5);
                }
                else {
                  cosinlb = Number((cos) / Number(this.labbatch)).toFixed(5);
                }
                this.selectedData = {
                  Step: '',
                  INCIName: this.gridinciname,
                  TradeName: this.gridtradename,
                  GeneralItemcode: this.griditem,
                  Qtyinpercentage: '100.0000000',
                  Quantity: this.labbatch,
                  UnitName: this.unname,
                  UnitCost: Number(this.incicost).toFixed(5),
                  Cost: (Number(this.incicost) * Number(this.labbatch)).toFixed(5),
                  SupplierName: this.gridsuppliername,
                  costinlb: cosinlb,
                  ItemCode: this.gridIngredientCode,
                  unitcostinlb: Number(cosinlb).toFixed(5),
                };


                // this.gridApi.updateRowData({ update: selectedData });
                //   var rowNode = this.gridApi.getRowNode(this.rowindex);
                this.TotalPercentage = '100';
                this.Yield = '100';
                this.TotalUnitCost = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                this.formulaCost = Number(this.incicost).toFixed(5);
                this.totaquantity = this.labbatch;
                this.TotalCostInLB = Number(cosinlb).toFixed(5);
                this.TotalCostInkg = String((cosinlb * 2.20462).toFixed(5));
                RowNode.setData(this.selectedData);
                this.gridApi.getModel();




                this.rowData = [];
                this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
                this.gridApi.setRowData(this.rowData);



                var rowdatacount = this.gridApi.getDisplayedRowCount();
                var unitcosttotal = 0;
                var totalquantity = 0;
                var totaper = 0;
                var costlb = 0;
                var unitcosttotal = 0;
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                }
                this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                var totcs: Number = sumvar * Number(this.labbatch);
                // this.TotalUnitCost = this.formulaCost;
                this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));

                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
                }
                this.totaquantity = String(totalquantity.toFixed(5));
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
                }
                this.TotalPercentage = String(totaper.toFixed(5));

                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  costlb = Number(costlb) + Number(rowNode.data.costinlb);

                }
                this.TotalCostInLB = String(costlb.toFixed(5));
                this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
                subvalue = 0;

                RowNode.setData(this.selectedData);
                this.gridApi.getModel();




                this.rowData = [];
                this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
                this.gridApi.setRowData(this.rowData);


              }
            }
            else if (RowNode.data.UnitName != "") {


              var cos: any = (Number(this.incicost) * Number(RowNode.data.Quantity)).toFixed(5);
              var cosinlb: any = 0;
              if (this.selectedunit == "g") {
                cosinlb = Number(cos * 453.592 / Number(RowNode.data.Quantity)).toFixed(5);
              } else if (this.selectedunit == "Kg") {
                cosinlb = Number(cos * .453592 / Number(RowNode.data.Quantity)).toFixed(5);
              }
              else {
                cosinlb = Number((cos) / Number(RowNode.data.Quantity)).toFixed(5);
              }
              this.selectedData = {
                Step: '',
                INCIName: this.gridinciname,
                TradeName: this.gridtradename,
                GeneralItemcode: this.griditem,
                Qtyinpercentage: RowNode.data.Qtyinpercentage,
                Quantity: RowNode.data.Quantity,
                UnitName: this.unname,
                UnitCost: Number(this.incicost).toFixed(5),
                Cost: (Number(this.incicost) * Number(RowNode.data.Quantity)).toFixed(5),
                SupplierName: this.gridsuppliername,
                costinlb: cosinlb,
                ItemCode: this.gridIngredientCode,
                unitcostinlb: Number(cosinlb).toFixed(5),
              };


              // this.gridApi.updateRowData({ update: selectedData });
              //   var rowNode = this.gridApi.getRowNode(this.rowindex);
              this.TotalPercentage = '100';
              this.Yield = '100';
              // this.TotalUnitCost = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
              // this.formulaCost = Number(this.incicost).toFixed(5);
              // this.totaquantity = this.labbatch;
              // this.TotalCostInLB = Number(cosinlb).toFixed(5);
              // this.TotalCostInkg = String((cosinlb * 2.20462).toFixed(5));
              RowNode.setData(this.selectedData);
              var rowdatacount = this.gridApi.getDisplayedRowCount();
              var unitcosttotal = 0;
              var totalquantity = 0;
              var totaper = 0;
              var costlb = 0;
              var unitcosttotal = 0;
              for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                var rowNode = this.gridApi.getRowNode(rowin);
                unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
              }
              this.TotalUnitCost = String(unitcosttotal.toFixed(5));
              var totcs: Number = sumvar * Number(this.labbatch);
              // this.TotalUnitCost = this.formulaCost;
              this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));

              for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                var rowNode = this.gridApi.getRowNode(rowin);
                totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
              }
              this.totaquantity = String(totalquantity.toFixed(5));
              for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                var rowNode = this.gridApi.getRowNode(rowin);
                totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
              }
              this.TotalPercentage = String(totaper.toFixed(5));
              for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                var rowNode = this.gridApi.getRowNode(rowin);
                costlb = Number(costlb) + Number(rowNode.data.costinlb);

              }
              this.TotalCostInLB = String(costlb.toFixed(5));
              this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
              subvalue = 0;

              this.gridApi.getModel();
              this.rowData = [];
              this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
              this.gridApi.setRowData(this.rowData);
              RowNode.setData(this.selectedData);
            }
            else {
           
              var cos: any = (Number(this.incicost) * Number(RowNode.data.Quantity)).toFixed(5);
              var cosinlb: any = 0;
              if (this.selectedunit == "g") {
                cosinlb = Number(cos * 453.592 / Number(RowNode.data.Quantity)).toFixed(5);
              } else if (this.selectedunit == "Kg") {
                cosinlb = Number(cos * .453592 / Number(RowNode.data.Quantity)).toFixed(5);
              }
              else {
                cosinlb = Number((cos) / Number(RowNode.data.Quantity)).toFixed(5);
              }
              var rowdatacount2 = this.gridApi.getDisplayedRowCount();
              var rowindata2: any;
              var fla: any = 0;
              var rowinc: any;
              if (rowdatacount2 == 1) {
                var cos: any = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                if (this.selectedunit == "g") {
                  cosinlb = Number(cos * 453.592 / Number(this.labbatch)).toFixed(5);
                } else if (this.selectedunit == "Kg") {
                  cosinlb = Number(cos * .453592 / Number(this.labbatch)).toFixed(5);
                }
                else {
                  cosinlb = Number((cos) / Number(this.labbatch)).toFixed(5);
                }
                rowindata2 = 1;
                this.selectedData = {
                  Step: '',
                  INCIName: this.gridinciname,
                  TradeName: this.gridtradename,
                  GeneralItemcode: this.griditem,
                  Qtyinpercentage: '100.0000000',
                  Quantity: this.labbatch,
                  UnitName: this.unname,
                  UnitCost: Number(this.incicost).toFixed(5),
                  Cost: (Number(this.incicost) * Number(this.labbatch)).toFixed(5),
                  SupplierName: this.gridsuppliername,
                  costinlb: cosinlb,
                  ItemCode: this.gridIngredientCode,
                  unitcostinlb: Number(cosinlb).toFixed(5),
                };


                // this.gridApi.updateRowData({ update: selectedData });
                //   var rowNode = this.gridApi.getRowNode(this.rowindex);
                this.TotalPercentage = '100.00000';
                this.Yield = '100';
                this.TotalUnitCost = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                this.formulaCost = Number(this.incicost).toFixed(5);
                this.totaquantity = this.labbatch;
                this.TotalCostInLB = Number(cosinlb).toFixed(5);
                this.TotalCostInkg = String((cosinlb * 2.20462).toFixed(5));
                RowNode.setData(this.selectedData);
                this.gridApi.getModel();

              }
              else {
                for (let rowinc = 1; rowinc <= rowdatacount2 - 1; rowinc++) {
                  var rowNode = this.gridApi.getRowNode(rowinc);
                  if (rowNode.data.UnitName != '' && fla != 1) {
                    rowindata2 = rowinc;
                    fla = 1;
                    break;
                  }
                }
                var rowNode = this.gridApi.getRowNode(rowindata2);
                var qtypere = rowNode.data.Qtyinpercentage;
                var qtyvale = rowNode.data.Quantity;
                this.selectedData = {
                  Step: '',
                  INCIName: this.gridinciname,
                  TradeName: this.gridtradename,
                  GeneralItemcode: this.griditem,
                  Qtyinpercentage: qtypere,
                  Quantity: qtyvale,
                  UnitName: this.unname,
                  UnitCost: Number(this.incicost).toFixed(5),
                  Cost: null,
                  SupplierName: this.gridsuppliername,
                  costinlb: null,
                  ItemCode: this.gridIngredientCode,
                  unitcostinlb: Number(this.incicost).toFixed(5),
                };
                // this.gridApi.updateRowData({ update: selectedData });
                //   var rowNode = this.gridApi.getRowNode(this.rowindex);


                RowNode.setData(this.selectedData);

                var rowNode = this.gridApi.getRowNode(rowindata2);
                rowNode.setDataValue('Quantity', '0.0000000');
                rowNode.setDataValue('Qtyinpercentage', '0.0000000');
               
              }
              var rowin: any = 0;
              var rowing: any = 0;
              let { rowsToDisplay } = this.gridApi.getModel();
              this.rowData = [];
              this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
              this.gridApi.setRowData(this.rowData);
              //this.firstdata= rowNode.data.Qtyinpercentage;
              rowin = RowNode.rowIndex;
              //  this.gridApi.refreshCells(params);
              if (rowin != 0) {
                var sumvar: any = 0;
                var firstsumvar: any = 0;
                rowin = 1;
                var i = 1;
                var rowdatacount = this.gridApi.getDisplayedRowCount();
                var flaa: any = 0;
                var rowindata1: any
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  if (rowNode.data.UnitName != '' && flaa != 1) {
                    rowindata1 = rowin;
                    rowindata1 = rowindata1 + 1;
                    flaa = 1;
                    break;
                  }
                }
                //for (let rowin = 1; rowin <= this.rowData.length; rowin++) 
                for (let rowin = rowindata1, i = rowindata1; i <= rowdatacount - 1; rowin++, i++) {


                  var rowNode = this.gridApi.getRowNode(rowin);

                  sumvar = Number(sumvar) + Number(rowNode.data.Qtyinpercentage);

                }
                var firstrowNode = this.gridApi.getRowNode(0);
                rowin = RowNode.rowIndex;
                var rowNo = this.gridApi.getRowNode(rowin);
                var pamv = Number('0.0000000');

                if (pamv < 0.0000000 || isNaN(pamv)) {
                  var dat: any = '0.0000000';
                  var rowNode = this.gridApi.getRowNode(rowin);
                  rowNode.setDataValue('Qtyinpercentage', String(dat));
                }

                //  else if (Number(100 - Number(sumvar)) >= Number(firstrowNode.data.Qtyinpercentage)  )
                //else if (params.newValue >= firstrowNode.data.Qtyinpercentage && (100-sumvar)<)
                else if (Number((sumvar).toFixed(7)) > 100) {

                  var dat: any = '0.0000000';
                  var rowNode = this.gridApi.getRowNode(rowin);
                  rowNode.setDataValue('Qtyinpercentage', String(dat));
                  rowNode.setDataValue('UnitCost', rowNo.data.UnitCost);
                }

                else {
                  var dat: any = '0.0000000';
                  var adt2: any = Number('0.0000000');
                  var dat2: any = String(adt2.toFixed(7));
                  var rowNode = this.gridApi.getRowNode(rowin);

                  rowNode.setDataValue('Qtyinpercentage', '0.0000000');

                  //  rowin2 = params.node.rowIndex;
                  //  const colId = params.column.getId();

                  var qtyper: Number = Number(dat);
                  var rowNode = this.gridApi.getRowNode(rowin);
                  var oldda: any = '0.0000000';
                  var enwda: any = ((Number(this.labbatch) / 100) * dat).toFixed(7);
                  var unicost: any = Number(this.incicost).toFixed(5);
                  var updatedunicost: any = (enwda * unicost).toFixed(5);

                  rowNode.setDataValue('Quantity', String(enwda));
                  rowNode.setDataValue('Cost', String(updatedunicost));
                  if (this.selectedunit == "g") {
                    var updtedcosinlb: any = Number(updatedunicost * 453.592 / Number(this.labbatch)).toFixed(5);
                  } else if (this.selectedunit == "Kg") {
                    var updtedcosinlb: any = Number(updatedunicost * .453592 / Number(this.labbatch)).toFixed(5);
                  }
                  else {
                    var updtedcosinlb: any = Number((updatedunicost) / Number(this.labbatch)).toFixed(5);
                  }

                  rowNode.setDataValue('costinlb', String(updtedcosinlb));
                  rowNode.setDataValue('quantityinlb', String(enwda));


                  var rowindata: any;
                  var fla: any = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    if (rowNode.data.UnitName != '' && fla != 1) {
                      rowindata = rowin;
                      fla = 1;
                      break;
                    }
                  }

                  //rowin = 0;
                  var rowNode = this.gridApi.getRowNode(rowindata);
                  rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                  //var rowin2: any = params.node.rowIndex;
                  //var rowNode2 = this.gridApi.getRowNode(rowin2);
                  //rowNode2.setDataValue('Qtyinpercentage', String(qtyper.toFixed(7)));
                  rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                  rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                  var fistrowdata: any = rowNode.data.Qtyinpercentage;

                  var firstrowunicost: any = rowNode.data.UnitCost;
                  var subvalue: any = (fistrowdata - dat).toFixed(7);

                  subvalue = ((100 - sumvar.toFixed(7))).toFixed(7);
                  if (subvalue == "-0.0000000") {
                    subvalue = "0.0000000";
                  }
                  this.formulaCost = String(sumvar);
                  var unitcosttotal = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                  }
                  this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                  var totcs: Number = sumvar * Number(this.labbatch);
                  // this.TotalUnitCost = this.formulaCost;
                  this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
                  // this.TotalUnitCost = String(totcs.toFixed(5));
                  if (subvalue < 0.0000000) {
                    rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                    rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                    rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                  }
                  else {
                    var rowNode = this.gridApi.getRowNode(rowindata);
                    // var subvalue2: any = subvalue.toFixed(7);
                    rowNode.setDataValue('Qtyinpercentage', String(subvalue));

                    var enwda2: any = ((Number(this.labbatch) / 100) * subvalue).toFixed(7);
                    var subcost: any = (enwda2 * firstrowunicost).toFixed(5);

                    rowNode.setDataValue('Quantity', String(enwda2));
                    rowNode.setDataValue('Cost', String(subcost));

                    if (this.selectedunit == "g") {
                      var cosinlb: any = Number(subcost * 453.592 / Number(this.labbatch)).toFixed(5);
                    } else if (this.selectedunit == "Kg") {
                      var cosinlb: any = Number(subcost * .453592 / Number(this.labbatch)).toFixed(5);
                    }
                    else {

                      var cosinlb: any = Number((subcost) / Number(this.labbatch)).toFixed(5);
                    }

                    rowNode.setDataValue('costinlb', String(cosinlb));
                    rowNode.setDataValue('quantityinlb', String(enwda2));
                  }
                  var totalquantity = 0;
                  var totaper = 0;
                  var costlb = 0;
                  var unitcosttotal = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                  }
                  this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                  this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
                  }
                  this.totaquantity = String(totalquantity.toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
                  }
                  this.TotalPercentage = String(totaper.toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    costlb = Number(costlb) + Number(rowNode.data.costinlb);

                  }
                  this.TotalCostInLB = String(costlb.toFixed(5));
                  this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
                  subvalue = 0;
                  this.rowsToDisplay1 = this.gridApi.getModel();
                }








                var sumvar: any = 0;
                for (rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  sumvar = Number(sumvar) + Number(rowNode.data.Cost);
                }
                // this.formulaCost = String(sumvar);
                var totcs: Number = sumvar * Number(this.labbatch);
                //this.TotalUnitCost = String(totcs);
                rowin = 0;
                this.count = 1;
              }
              this.gridApi.deselectAll();
              this.rowindex = null;


          //  this.gridApi.refreshClientSideRowModel();
          //this.gridApi.updateRowData({
          //  add: [{ Step: '', INCIName: this.gridinciname, TradeName: this.gridtradename, GeneralItemcode: this.griditem, Qtyinpercentage: '0.0000000', Quantity: '0.0000000', UnitName: this.unname, UnitCost: (Number(this.incicost)).toFixed(5).toString(), Cost: null, SupplierName: this.gridsuppliername }],
          //    addIndex: this.rowindex

          //  });


            }
          }
          else {
            if (RowNode.data.UnitName == "") {

              var rowdatacount = this.gridApi.getDisplayedRowCount();
              var flaa: any = 0;
              var emp1: any = 0
              var rowindata1: any
              var rowcount = this.selectedData.rowIndex;
              for (let rowin = 0; rowin <= rowcount; rowin++) {
                var rowNode = this.gridApi.getRowNode(rowin);
                if (rowNode.data.UnitName != '' && flaa != 1) {
                  emp1 = 1;
                  rowindata1 = rowin;
                  rowindata1 = rowindata1 + 1;
                  flaa = 1;
                  break;
                }
                else {
                  rowindata1 = rowin;
                  rowindata1 = rowindata1 + 1;
                }

              }
              if (emp1 == 1) {
                this.selectedData = {
                  Step: '',
                  INCIName: this.gridinciname,
                  TradeName: this.gridtradename,
                  GeneralItemcode: this.griditem,
                  Qtyinpercentage: '0.0000000',
                  Quantity: '0.0000000',
                  UnitName: this.unname,
                  UnitCost: Number(this.incicost).toFixed(5),
                  Cost: null,
                  SupplierName: this.gridsuppliername,
                  costinlb: null,
                  ItemCode: this.gridIngredientCode,
                  unitcostinlb: Number(this.incicost).toFixed(5),
                };
                // this.gridApi.updateRowData({ update: selectedData });
                //   var rowNode = this.gridApi.getRowNode(this.rowindex);


                RowNode.setData(this.selectedData);



              }
              else {
                var rowindata4: any
                var emp3: any = 0;
                var rowdatacount4 = this.gridApi.getDisplayedRowCount();
                for (let rowind = 1; rowind <= rowdatacount4 - 1; rowind++) {
                  var rowNode = this.gridApi.getRowNode(rowind);
                  if (rowNode.data.UnitName != '' && fla != 1) {
                    rowindata4 = rowinc;
                    emp3 = 1
                    fla = 1;
                    break;
                  }
                }
                if (emp3 == 0) {
                  var cos: any = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                  if (this.selectedunit == "g") {
                    cosinlb = Number(cos * 453.592 / Number(this.labbatch)).toFixed(5);
                  } else if (this.selectedunit == "Kg") {
                    cosinlb = Number(cos * .453592 / Number(this.labbatch)).toFixed(5);
                  }
                  else {
                    cosinlb = Number((cos) / Number(this.labbatch)).toFixed(5);
                  }
                  rowindata2 = 1;
                  this.selectedData = {
                    Step: '',
                    INCIName: this.gridinciname,
                    TradeName: this.gridtradename,
                    GeneralItemcode: this.griditem,
                    Qtyinpercentage: '100.0000000',
                    Quantity: this.labbatch,
                    UnitName: this.unname,
                    UnitCost: Number(this.incicost).toFixed(5),
                    Cost: (Number(this.incicost) * Number(this.labbatch)).toFixed(5),
                    SupplierName: this.gridsuppliername,
                    costinlb: cosinlb,
                    ItemCode: this.gridIngredientCode,
                    unitcostinlb: Number(cosinlb).toFixed(5),
                  };


                  // this.gridApi.updateRowData({ update: selectedData });
                  //   var rowNode = this.gridApi.getRowNode(this.rowindex);
                  this.TotalPercentage = '100.00000';
                  this.Yield = '100';
                  this.TotalUnitCost = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                  this.formulaCost = Number(this.incicost).toFixed(5);
                  this.totaquantity = this.labbatch;
                  this.TotalCostInLB = Number(cosinlb).toFixed(5);
                  this.TotalCostInkg = String((cosinlb * 2.20462).toFixed(5));
                  RowNode.setData(this.selectedData);
                  this.gridApi.getModel();

                }
                else {
                  var rowNode = this.gridApi.getRowNode(rowindata1);
                  var qtypere = rowNode.data.Qtyinpercentage;
                  var qtyvale = rowNode.data.Quantity;
                  this.selectedData = {
                    Step: '',
                    INCIName: this.gridinciname,
                    TradeName: this.gridtradename,
                    GeneralItemcode: this.griditem,
                    Qtyinpercentage: qtypere,
                    Quantity: qtyvale,
                    UnitName: this.unname,
                    UnitCost: Number(this.incicost).toFixed(5),
                    Cost: null,
                    SupplierName: this.gridsuppliername,
                    costinlb: null,
                    ItemCode: this.gridIngredientCode,
                    unitcostinlb: Number(this.incicost).toFixed(5),
                  };
                  // this.gridApi.updateRowData({ update: selectedData });
                  //   var rowNode = this.gridApi.getRowNode(this.rowindex);


                  RowNode.setData(this.selectedData);

                  var rowNode = this.gridApi.getRowNode(rowindata1);
                  rowNode.setDataValue('Quantity', '0.0000000');
                  rowNode.setDataValue('Qtyinpercentage', '0.0000000');

                }

              }


              var rowin: any = 0;
              var rowing: any = 0;
              let { rowsToDisplay } = this.gridApi.getModel();
              this.rowData = [];
              this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
              this.gridApi.setRowData(this.rowData);
              //this.firstdata= rowNode.data.Qtyinpercentage;
              rowin = RowNode.rowIndex;
              //  this.gridApi.refreshCells(params);
              if (rowin != 0) {
                var sumvar: any = 0;
                var firstsumvar: any = 0;
                rowin = 1;
                var i = 1;
                var rowdatacount = this.gridApi.getDisplayedRowCount();
                var flaa: any = 0;
                var rowindata1: any
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  if (rowNode.data.UnitName != '' && flaa != 1) {
                    rowindata1 = rowin;
                    rowindata1 = rowindata1 + 1;
                    flaa = 1;
                    break;
                  }
                }
                //for (let rowin = 1; rowin <= this.rowData.length; rowin++) 
                for (let rowin = rowindata1, i = rowindata1; i <= rowdatacount - 1; rowin++, i++) {


                  var rowNode = this.gridApi.getRowNode(rowin);

                  sumvar = Number(sumvar) + Number(rowNode.data.Qtyinpercentage);

                }
                var firstrowNode = this.gridApi.getRowNode(0);
                rowin = RowNode.rowIndex;
                var rowNo = this.gridApi.getRowNode(rowin);
                var pamv = Number('0.0000000');

                if (pamv < 0.0000000 || isNaN(pamv)) {
                  var dat: any = '0.0000000';
                  var rowNode = this.gridApi.getRowNode(rowin);
                  rowNode.setDataValue('Qtyinpercentage', String(dat));
                }

                //  else if (Number(100 - Number(sumvar)) >= Number(firstrowNode.data.Qtyinpercentage)  )
                //else if (params.newValue >= firstrowNode.data.Qtyinpercentage && (100-sumvar)<)
                else if (Number((sumvar).toFixed(7)) > 100) {

                  var dat: any = '0.0000000';
                  var rowNode = this.gridApi.getRowNode(rowin);
                  rowNode.setDataValue('Qtyinpercentage', String(dat));
                  rowNode.setDataValue('UnitCost', rowNo.data.UnitCost);
                }

                else {
                  var dat: any = '0.0000000';
                  var adt2: any = Number('0.0000000');
                  var dat2: any = String(adt2.toFixed(7));
                  var rowNode = this.gridApi.getRowNode(rowin);

                  rowNode.setDataValue('Qtyinpercentage', '0.0000000');

                  //  rowin2 = params.node.rowIndex;
                  //  const colId = params.column.getId();

                  var qtyper: Number = Number(dat);
                  var rowNode = this.gridApi.getRowNode(rowin);
                  var oldda: any = '0.0000000';
                  var enwda: any = ((Number(this.labbatch) / 100) * dat).toFixed(7);
                  var unicost: any = Number(this.incicost).toFixed(5);
                  var updatedunicost: any = (enwda * unicost).toFixed(5);

                  rowNode.setDataValue('Quantity', String(enwda));
                  rowNode.setDataValue('Cost', String(updatedunicost));
                  if (this.selectedunit == "g") {
                    var updtedcosinlb: any = Number(updatedunicost * 453.592 / Number(this.labbatch)).toFixed(5);
                  } else if (this.selectedunit == "Kg") {
                    var updtedcosinlb: any = Number(updatedunicost * .453592 / Number(this.labbatch)).toFixed(5);
                  }
                  else {
                    var updtedcosinlb: any = Number((updatedunicost) / Number(this.labbatch)).toFixed(5);
                  }

                  rowNode.setDataValue('costinlb', String(updtedcosinlb));
                  rowNode.setDataValue('quantityinlb', String(enwda));


                  var rowindata: any;
                  var fla: any = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    if (rowNode.data.UnitName != '' && fla != 1) {
                      rowindata = rowin;
                      fla = 1;
                      break;
                    }
                  }

                  //rowin = 0;
                  var rowNode = this.gridApi.getRowNode(rowindata);
                  rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                  //var rowin2: any = params.node.rowIndex;
                  //var rowNode2 = this.gridApi.getRowNode(rowin2);
                  //rowNode2.setDataValue('Qtyinpercentage', String(qtyper.toFixed(7)));
                  rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                  rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                  var fistrowdata: any = rowNode.data.Qtyinpercentage;

                  var firstrowunicost: any = rowNode.data.UnitCost;
                  var subvalue: any = (fistrowdata - dat).toFixed(7);

                  subvalue = ((100 - sumvar.toFixed(7))).toFixed(7);
                  if (subvalue == "-0.0000000") {
                    subvalue = "0.0000000";
                  }
                  this.formulaCost = String(sumvar);
                  var unitcosttotal = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                  }
                  this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                  var totcs: Number = sumvar * Number(this.labbatch);
                  // this.TotalUnitCost = this.formulaCost;
                  this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
                  // this.TotalUnitCost = String(totcs.toFixed(5));
                  if (subvalue < 0.0000000) {
                    rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                    rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                    rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                  }
                  else {
                    var rowNode = this.gridApi.getRowNode(rowindata);
                    // var subvalue2: any = subvalue.toFixed(7);
                    rowNode.setDataValue('Qtyinpercentage', String(subvalue));

                    var enwda2: any = ((Number(this.labbatch) / 100) * subvalue).toFixed(7);
                    var subcost: any = (enwda2 * firstrowunicost).toFixed(5);

                    rowNode.setDataValue('Quantity', String(enwda2));
                    rowNode.setDataValue('Cost', String(subcost));

                    if (this.selectedunit == "g") {
                      var cosinlb: any = Number(subcost * 453.592 / Number(this.labbatch)).toFixed(5);
                    } else if (this.selectedunit == "Kg") {
                      var cosinlb: any = Number(subcost * .453592 / Number(this.labbatch)).toFixed(5);
                    }
                    else {

                      var cosinlb: any = Number((subcost) / Number(this.labbatch)).toFixed(5);
                    }

                    rowNode.setDataValue('costinlb', String(cosinlb));
                    rowNode.setDataValue('quantityinlb', String(enwda2));
                  }
                  var totalquantity = 0;
                  var totaper = 0;
                  var costlb = 0;
                  var unitcosttotal = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                  }
                  this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                  this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
                  }
                  this.totaquantity = String(totalquantity.toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
                  }
                  this.TotalPercentage = String(totaper.toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    costlb = Number(costlb) + Number(rowNode.data.costinlb);

                  }
                  this.TotalCostInLB = String(costlb.toFixed(5));
                  this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
                  subvalue = 0;
                  this.rowsToDisplay1 = this.gridApi.getModel();
                }








                var sumvar: any = 0;
                for (rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  sumvar = Number(sumvar) + Number(rowNode.data.Cost);
                }
                // this.formulaCost = String(sumvar);
                var totcs: Number = sumvar * Number(this.labbatch);
                //this.TotalUnitCost = String(totcs);
                rowin = 0;
                this.count = 1;
              }
              this.gridApi.deselectAll();
              this.rowindex = null;


              //  this.gridApi.refreshClientSideRowModel();
              //this.gridApi.updateRowData({
              //  add: [{ Step: '', INCIName: this.gridinciname, TradeName: this.gridtradename, GeneralItemcode: this.griditem, Qtyinpercentage: '0.0000000', Quantity: '0.0000000', UnitName: this.unname, UnitCost: (Number(this.incicost)).toFixed(5).toString(), Cost: null, SupplierName: this.gridsuppliername }],
              //    addIndex: this.rowindex

              //  });


            }
            else {
              this.selectedData = {
                Step: '',
                INCIName: this.gridinciname,
                TradeName: this.gridtradename,
                GeneralItemcode: this.griditem,
                Qtyinpercentage: '0.0000000',
                Quantity: '0.0000000',
                UnitName: this.unname,
                UnitCost: Number(this.incicost).toFixed(5),
                Cost: null,
                SupplierName: this.gridsuppliername,
                costinlb: null,
                ItemCode: this.gridIngredientCode,
                unitcostinlb: Number(this.incicost).toFixed(5),
              };
              // this.gridApi.updateRowData({ update: selectedData });
              //   var rowNode = this.gridApi.getRowNode(this.rowindex);


              RowNode.setData(this.selectedData);


              var rowin: any = 0;
              var rowing: any = 0;
              let { rowsToDisplay } = this.gridApi.getModel();
              this.rowData = [];
              this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
              this.gridApi.setRowData(this.rowData);
              //this.firstdata= rowNode.data.Qtyinpercentage;
              rowin = RowNode.rowIndex;
              //  this.gridApi.refreshCells(params);
              if (rowin != 0) {
                var sumvar: any = 0;
                var firstsumvar: any = 0;
                rowin = 1;
                var i = 1;
                var rowdatacount = this.gridApi.getDisplayedRowCount();
                var flaa: any = 0;
                var rowindata1: any
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  if (rowNode.data.UnitName != '' && flaa != 1) {
                    rowindata1 = rowin;
                    rowindata1 = rowindata1 + 1;
                    flaa = 1;
                    break;
                  }
                }
                //for (let rowin = 1; rowin <= this.rowData.length; rowin++) 
                for (let rowin = rowindata1, i = rowindata1; i <= rowdatacount - 1; rowin++, i++) {


                  var rowNode = this.gridApi.getRowNode(rowin);

                  sumvar = Number(sumvar) + Number(rowNode.data.Qtyinpercentage);

                }
                var firstrowNode = this.gridApi.getRowNode(0);
                rowin = RowNode.rowIndex;
                var rowNo = this.gridApi.getRowNode(rowin);
                var pamv = Number('0.0000000');

                if (pamv < 0.0000000 || isNaN(pamv)) {
                  var dat: any = '0.0000000';
                  var rowNode = this.gridApi.getRowNode(rowin);
                  rowNode.setDataValue('Qtyinpercentage', String(dat));
                }

                //  else if (Number(100 - Number(sumvar)) >= Number(firstrowNode.data.Qtyinpercentage)  )
                //else if (params.newValue >= firstrowNode.data.Qtyinpercentage && (100-sumvar)<)
                else if (Number((sumvar).toFixed(7)) > 100) {

                  var dat: any = '0.0000000';
                  var rowNode = this.gridApi.getRowNode(rowin);
                  rowNode.setDataValue('Qtyinpercentage', String(dat));
                  rowNode.setDataValue('UnitCost', rowNo.data.UnitCost);
                }

                else {
                  var dat: any = '0.0000000';
                  var adt2: any = Number('0.0000000');
                  var dat2: any = String(adt2.toFixed(7));
                  var rowNode = this.gridApi.getRowNode(rowin);

                  rowNode.setDataValue('Qtyinpercentage', '0.0000000');

                  //  rowin2 = params.node.rowIndex;
                  //  const colId = params.column.getId();

                  var qtyper: Number = Number(dat);
                  var rowNode = this.gridApi.getRowNode(rowin);
                  var oldda: any = '0.0000000';
                  var enwda: any = ((Number(this.labbatch) / 100) * dat).toFixed(7);
                  var unicost: any = Number(this.incicost).toFixed(5);
                  var updatedunicost: any = (enwda * unicost).toFixed(5);

                  rowNode.setDataValue('Quantity', String(enwda));
                  rowNode.setDataValue('Cost', String(updatedunicost));
                  if (this.selectedunit == "g") {
                    var updtedcosinlb: any = Number(updatedunicost * 453.592 / Number(this.labbatch)).toFixed(5);
                  } else if (this.selectedunit == "Kg") {
                    var updtedcosinlb: any = Number(updatedunicost * .453592 / Number(this.labbatch)).toFixed(5);
                  }
                  else {
                    var updtedcosinlb: any = Number((updatedunicost) / Number(this.labbatch)).toFixed(5);
                  }

                  rowNode.setDataValue('costinlb', String(updtedcosinlb));
                  rowNode.setDataValue('quantityinlb', String(enwda));


                  var rowindata: any;
                  var fla: any = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    if (rowNode.data.UnitName != '' && fla != 1) {
                      rowindata = rowin;
                      fla = 1;
                      break;
                    }
                  }

                  //rowin = 0;
                  var rowNode = this.gridApi.getRowNode(rowindata);
                  rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                  //var rowin2: any = params.node.rowIndex;
                  //var rowNode2 = this.gridApi.getRowNode(rowin2);
                  //rowNode2.setDataValue('Qtyinpercentage', String(qtyper.toFixed(7)));
                  rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                  rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                  var fistrowdata: any = rowNode.data.Qtyinpercentage;

                  var firstrowunicost: any = rowNode.data.UnitCost;
                  var subvalue: any = (fistrowdata - dat).toFixed(7);

                  subvalue = ((100 - sumvar.toFixed(7))).toFixed(7);
                  if (subvalue == "-0.0000000") {
                    subvalue = "0.0000000";
                  }
                  this.formulaCost = String(sumvar);
                  var unitcosttotal = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                  }
                  this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                  var totcs: Number = sumvar * Number(this.labbatch);
                  // this.TotalUnitCost = this.formulaCost;
                  this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
                  // this.TotalUnitCost = String(totcs.toFixed(5));
                  if (subvalue < 0.0000000) {
                    rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                    rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                    rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                  }
                  else {
                    var rowNode = this.gridApi.getRowNode(rowindata);
                    // var subvalue2: any = subvalue.toFixed(7);
                    rowNode.setDataValue('Qtyinpercentage', String(subvalue));

                    var enwda2: any = ((Number(this.labbatch) / 100) * subvalue).toFixed(7);
                    var subcost: any = (enwda2 * firstrowunicost).toFixed(5);

                    rowNode.setDataValue('Quantity', String(enwda2));
                    rowNode.setDataValue('Cost', String(subcost));

                    if (this.selectedunit == "g") {
                      var cosinlb: any = Number(subcost * 453.592 / Number(this.labbatch)).toFixed(5);
                    } else if (this.selectedunit == "Kg") {
                      var cosinlb: any = Number(subcost * .453592 / Number(this.labbatch)).toFixed(5);
                    }
                    else {

                      var cosinlb: any = Number((subcost) / Number(this.labbatch)).toFixed(5);
                    }

                    rowNode.setDataValue('costinlb', String(cosinlb));
                    rowNode.setDataValue('quantityinlb', String(enwda2));
                  }
                  var totalquantity = 0;
                  var totaper = 0;
                  var costlb = 0;
                  var unitcosttotal = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                  }
                  this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                  this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
                  }
                  this.totaquantity = String(totalquantity.toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
                  }
                  this.TotalPercentage = String(totaper.toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    costlb = Number(costlb) + Number(rowNode.data.costinlb);

                  }
                  this.TotalCostInLB = String(costlb.toFixed(5));
                  this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
                  subvalue = 0;
                  this.rowsToDisplay1 = this.gridApi.getModel();
                }








                var sumvar: any = 0;
                for (rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  sumvar = Number(sumvar) + Number(rowNode.data.Cost);
                }
                // this.formulaCost = String(sumvar);
                var totcs: Number = sumvar * Number(this.labbatch);
                //this.TotalUnitCost = String(totcs);
                rowin = 0;
                this.count = 1;
              }
              this.gridApi.deselectAll();
              this.rowindex = null;


              //  this.gridApi.refreshClientSideRowModel();
              //this.gridApi.updateRowData({
              //  add: [{ Step: '', INCIName: this.gridinciname, TradeName: this.gridtradename, GeneralItemcode: this.griditem, Qtyinpercentage: '0.0000000', Quantity: '0.0000000', UnitName: this.unname, UnitCost: (Number(this.incicost)).toFixed(5).toString(), Cost: null, SupplierName: this.gridsuppliername }],
              //    addIndex: this.rowindex

              //  });


            }
          }
        })
      }
      else {


      }
      this.gridApi.ensureIndexVisible(rowin6, 'bottom');
      //let { rowsToDisplay } = this.gridApi.getModel();
      //this.rowData = [];
      //this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
     
      //this.gridApi.setRowData(this.rowData);
  
    
      let { rowsToDisplay } = this.gridApi.getModel();
      this.rowData = [];
      this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
      this.gridApi.setRowData(this.rowData);
      this.rowindex = null;
    });
   
 
  }
  editcellgridinci(event) {
    let rowData = [];
    this.gridApi.forEachNode(RowNode => rowData.push(RowNode.data));
    this.gridApi.setRowData(rowData);
    this.rowindex = event.rowIndex;
   
    const dialogRef = this.dialog.open(IncinameSelectComponent, {
      width: '80%', height: '40%', data: { displaydata: event.data.INCIName }, disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.gridinciname = result[0];
      this.griditem = result[1];
      this.gridtradename = result[2];
      this.gridp = result[3];
      this.gridsuppliername = result[4];
      this.unname = result[6];
      this.incicost = result[5];
      this.gridIngredientCode = result[7];
      this.gridApi.deselectAll();
      
      if (result != "") {

        
        this.convertunit(this.unname, this.gridIngredientCode, this.selectedunit).subscribe((conversionload) => {
          console.warn("convertload", conversionload)
          this.incicost = conversionload


          this.unname = this.selectedunit;

          // if (this.selectedunit == "g" && this.unname == "Kg") {
          //   this.unname = "g";
          //   this.incicost = (Number(this.incicost) / 1000).toString();
          // }
          // else if (this.selectedunit == "Kg" && this.unname == "g") {
          //   this.unname = "Kg";
          //   this.incicost = (Number(this.incicost) / 1000).toString();
          // } else if (this.selectedunit == "g" && this.unname == "Lb") {
          //   this.unname = "g";
          //   this.incicost = (Number(this.incicost) / 453.592).toString();
          // }
          // else if (this.selectedunit == "Lb" && this.unname == "g") {
          //   this.unname = "Lb";
          //   this.incicost = (Number(this.incicost) * 453.592).toString();
          // }
          // else if (this.selectedunit == "Kg" && this.unname == "Lb") {
          //   this.unname = "Kg";
          //   this.incicost = (Number(this.incicost) / 0.453592).toString();
          // }
          // else if (this.selectedunit == "Lb" && this.unname == "Kg") {
          //   this.unname = "Lb";
          //   this.incicost = (Number(this.incicost) * 0.453592).toString();
          // }
          // else if (this.selectedunit == "g" && this.unname == "Ltr") {
          //   this.unname = "g";
          //   this.incicost = (Number(this.incicost) / 1000).toString();
          // }
          // else if (this.selectedunit == "Lb" && this.unname == "Ltr") {
          //   this.unname = "Lb";
          //   this.incicost = (Number(this.incicost) * 0.453592).toString();
          // }
          // else if (this.selectedunit == "Kg" && this.unname == "Ltr") {
          //   this.unname = "Kg";
          ////   this.incicost = (Number(this.incicost) * 0.453592).toString();
          // }
          this.selectedData = this.gridApi.getFocusedCell()
          var RowNode = this.gridApi.getRowNode(this.selectedData.rowIndex)
          if (this.selectedData.rowIndex == 0) {

            if (RowNode.data.INCIName == "") {

              if (this.rowdrag == "rowDragEnd") {
                var cos: any = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                var cosinlb: any = 0;
                if (this.selectedunit == "g") {
                  cosinlb = Number(cos * 453.592 / Number(this.labbatch)).toFixed(5);
                } else if (this.selectedunit == "Kg") {
                  cosinlb = Number(cos * .453592 / Number(this.labbatch)).toFixed(5);
                }
                else {
                  cosinlb = Number((cos) / Number(this.labbatch)).toFixed(5);
                }
                var rowdatacount2 = this.gridApi.getDisplayedRowCount();

                var rowindata2: any;
                var fla: any = 0;
                var rowinc: any;
                if (rowdatacount2 == 1) {
                  rowindata2 = 1;
                }
                else {
                  for (let rowinc = 1; rowinc <= rowdatacount2 - 1; rowinc++) {
                    var rowNode = this.gridApi.getRowNode(rowinc);
                    if (rowNode.data.UnitName != '' && fla != 1) {
                      rowindata2 = rowinc;
                      fla = 1;
                      break;
                    }
                  }
                }
                var rowNode = this.gridApi.getRowNode(rowindata2);
                var qtypere = rowNode.data.Qtyinpercentage;
                var qtyvale = rowNode.data.Quantity;
                this.selectedData = {
                  Step: '',
                  INCIName: this.gridinciname,
                  TradeName: this.gridtradename,
                  GeneralItemcode: this.griditem,
                  Qtyinpercentage: qtypere,
                  Quantity: qtyvale,
                  UnitName: this.unname,
                  UnitCost: Number(this.incicost).toFixed(5),
                  Cost: (Number(this.incicost) * Number(rowNode.data.Quantity)).toFixed(5),
                  SupplierName: this.gridsuppliername,
                  costinlb: cosinlb,
                  ItemCode: this.gridIngredientCode,
                  unitcostinlb: Number(cosinlb).toFixed(5),
                };

                RowNode.setData(this.selectedData);


                var rowNode = this.gridApi.getRowNode(rowindata2);
                rowNode.setDataValue('Quantity', '0.0000000');
                rowNode.setDataValue('Qtyinpercentage', '0.0000000');
                let rowData = [];
                this.gridApi.forEachNode(RowNode => rowData.push(RowNode.data));
                this.gridApi.setRowData(rowData);
                // this.gridApi.updateRowData({ update: selectedData });
                //   var rowNode = this.gridApi.getRowNode(this.rowindex);
                this.TotalPercentage = '100';
                this.Yield = '100';
                var rowdatacount = this.gridApi.getDisplayedRowCount();
                var unitcosttotal = 0;
                var totalquantity = 0;
                var totaper = 0;
                var costlb = 0;
                var unitcosttotal = 0;
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                }
               
                this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                var totcs: Number = sumvar * Number(this.labbatch);
                // this.TotalUnitCost = this.formulaCost;
               
                this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));

                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
                }
                this.totaquantity = String(totalquantity.toFixed(5));
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
                }
                this.TotalPercentage = String(totaper.toFixed(5));

                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  costlb = Number(costlb) + Number(rowNode.data.costinlb);

                }
                this.TotalCostInLB = String(costlb.toFixed(5));
                this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
                subvalue = 0;


                this.gridApi.getModel();




                this.rowData = [];
                this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
                this.gridApi.setRowData(this.rowData);

              }

              else {


                var cos: any = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                var cosinlb: any = 0;
                if (this.selectedunit == "g") {
                  cosinlb = Number(cos * 453.592 / Number(this.labbatch)).toFixed(5);
                } else if (this.selectedunit == "Kg") {
                  cosinlb = Number(cos * .453592 / Number(this.labbatch)).toFixed(5);
                }
                else {
                  cosinlb = Number((cos) / Number(this.labbatch)).toFixed(5);
                }
                this.selectedData = {
                  Step: '',
                  INCIName: this.gridinciname,
                  TradeName: this.gridtradename,
                  GeneralItemcode: this.griditem,
                  Qtyinpercentage: '100.0000000',
                  Quantity: this.labbatch,
                  UnitName: this.unname,
                  UnitCost: Number(this.incicost).toFixed(5),
                  Cost: (Number(this.incicost) * Number(this.labbatch)).toFixed(5),
                  SupplierName: this.gridsuppliername,
                  costinlb: cosinlb,
                  ItemCode: this.gridIngredientCode,
                  unitcostinlb: Number(cosinlb).toFixed(5),
                };


                // this.gridApi.updateRowData({ update: selectedData });
                //   var rowNode = this.gridApi.getRowNode(this.rowindex);
                this.TotalPercentage = '100';
                this.Yield = '100';
                this.TotalUnitCost = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                
                this.formulaCost = Number(this.incicost).toFixed(5);
                this.totaquantity = this.labbatch;
                this.TotalCostInLB = Number(cosinlb).toFixed(5);
                this.TotalCostInkg = String((cosinlb * 2.20462).toFixed(5));
                RowNode.setData(this.selectedData);
                this.gridApi.getModel();




                this.rowData = [];
                this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
                this.gridApi.setRowData(this.rowData);



                var rowdatacount = this.gridApi.getDisplayedRowCount();
                var unitcosttotal = 0;
                var totalquantity = 0;
                var totaper = 0;
                var costlb = 0;
                var unitcosttotal = 0;
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                }
                this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                var totcs: Number = sumvar * Number(this.labbatch);
                // this.TotalUnitCost = this.formulaCost;
              
                this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));

                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
                }
                this.totaquantity = String(totalquantity.toFixed(5));
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
                }
                this.TotalPercentage = String(totaper.toFixed(5));

                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  costlb = Number(costlb) + Number(rowNode.data.costinlb);

                }
                this.TotalCostInLB = String(costlb.toFixed(5));
                this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
                subvalue = 0;

                RowNode.setData(this.selectedData);
                this.gridApi.getModel();




                this.rowData = [];
                this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
                this.gridApi.setRowData(this.rowData);


              }
            }
            else if (RowNode.data.UnitName != "") {


              var cos: any = (Number(this.incicost) * Number(RowNode.data.Quantity)).toFixed(5);
              var cosinlb: any = 0;
              if (this.selectedunit == "g") {
                cosinlb = Number(cos * 453.592 / Number(RowNode.data.Quantity)).toFixed(5);
              } else if (this.selectedunit == "Kg") {
                cosinlb = Number(cos * .453592 / Number(RowNode.data.Quantity)).toFixed(5);
              }
              else {
                cosinlb = Number((cos) / Number(RowNode.data.Quantity)).toFixed(5);
              }
              this.selectedData = {
                Step: '',
                INCIName: this.gridinciname,
                TradeName: this.gridtradename,
                GeneralItemcode: this.griditem,
                Qtyinpercentage: RowNode.data.Qtyinpercentage,
                Quantity: RowNode.data.Quantity,
                UnitName: this.unname,
                UnitCost: Number(this.incicost).toFixed(5),
                Cost: (Number(this.incicost) * Number(RowNode.data.Quantity)).toFixed(5),
                SupplierName: this.gridsuppliername,
                costinlb: cosinlb,
                ItemCode: this.gridIngredientCode,
                unitcostinlb: Number(cosinlb).toFixed(5),
              };


              // this.gridApi.updateRowData({ update: selectedData });
              //   var rowNode = this.gridApi.getRowNode(this.rowindex);
              this.TotalPercentage = '100';
              this.Yield = '100';
              // this.TotalUnitCost = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
              // this.formulaCost = Number(this.incicost).toFixed(5);
              // this.totaquantity = this.labbatch;
              // this.TotalCostInLB = Number(cosinlb).toFixed(5);
              // this.TotalCostInkg = String((cosinlb * 2.20462).toFixed(5));
              RowNode.setData(this.selectedData);
              var rowdatacount = this.gridApi.getDisplayedRowCount();
              var unitcosttotal = 0;
              var totalquantity = 0;
              var totaper = 0;
              var costlb = 0;
              var unitcosttotal = 0;
              for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                var rowNode = this.gridApi.getRowNode(rowin);
                unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
              }
              this.TotalUnitCost = String(unitcosttotal.toFixed(5));
              var totcs: Number = sumvar * Number(this.labbatch);
              // this.TotalUnitCost = this.formulaCost;
             //testing git
              this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));

              for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                var rowNode = this.gridApi.getRowNode(rowin);
                totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
              }
              this.totaquantity = String(totalquantity.toFixed(5));
              for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                var rowNode = this.gridApi.getRowNode(rowin);
                totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
              }
              this.TotalPercentage = String(totaper.toFixed(5));

              for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                var rowNode = this.gridApi.getRowNode(rowin);
                costlb = Number(costlb) + Number(rowNode.data.costinlb);

              }
              this.TotalCostInLB = String(costlb.toFixed(5));
              this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
              subvalue = 0;

              this.gridApi.getModel();
              this.rowData = [];
              this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
              this.gridApi.setRowData(this.rowData);
              RowNode.setData(this.selectedData);
            }
            else {

              var cos: any = (Number(this.incicost) * Number(RowNode.data.Quantity)).toFixed(5);
              var cosinlb: any = 0;
              if (this.selectedunit == "g") {
                cosinlb = Number(cos * 453.592 / Number(RowNode.data.Quantity)).toFixed(5);
              } else if (this.selectedunit == "Kg") {
                cosinlb = Number(cos * .453592 / Number(RowNode.data.Quantity)).toFixed(5);
              }
              else {
                cosinlb = Number((cos) / Number(RowNode.data.Quantity)).toFixed(5);
              }
              var rowdatacount2 = this.gridApi.getDisplayedRowCount();
              var rowindata2: any;
              var fla: any = 0;
              var rowinc: any;
              if (rowdatacount2 == 1) {
                var cos: any = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                if (this.selectedunit == "g") {
                  cosinlb = Number(cos * 453.592 / Number(this.labbatch)).toFixed(5);
                } else if (this.selectedunit == "Kg") {
                  cosinlb = Number(cos * .453592 / Number(this.labbatch)).toFixed(5);
                }
                else {
                  cosinlb = Number((cos) / Number(this.labbatch)).toFixed(5);
                }
                rowindata2 = 1;
                this.selectedData = {
                  Step: '',
                  INCIName: this.gridinciname,
                  TradeName: this.gridtradename,
                  GeneralItemcode: this.griditem,
                  Qtyinpercentage: '100.0000000',
                  Quantity: this.labbatch,
                  UnitName: this.unname,
                  UnitCost: Number(this.incicost).toFixed(5),
                  Cost: (Number(this.incicost) * Number(this.labbatch)).toFixed(5),
                  SupplierName: this.gridsuppliername,
                  costinlb: cosinlb,
                  ItemCode: this.gridIngredientCode,
                  unitcostinlb: Number(cosinlb).toFixed(5),
                };


                // this.gridApi.updateRowData({ update: selectedData });
                //   var rowNode = this.gridApi.getRowNode(this.rowindex);
                this.TotalPercentage = '100.00000';
                this.Yield = '100';
                this.TotalUnitCost = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
               
                this.formulaCost = Number(this.incicost).toFixed(5);
                this.totaquantity = this.labbatch;
                this.TotalCostInLB = Number(cosinlb).toFixed(5);
                this.TotalCostInkg = String((cosinlb * 2.20462).toFixed(5));
                RowNode.setData(this.selectedData);
                this.gridApi.getModel();

              }
              else {
                for (let rowinc = 1; rowinc <= rowdatacount2 - 1; rowinc++) {
                  var rowNode = this.gridApi.getRowNode(rowinc);
                  if (rowNode.data.UnitName != '' && fla != 1) {
                    rowindata2 = rowinc;
                    fla = 1;
                    break;
                  }
                }
                var rowNode = this.gridApi.getRowNode(rowindata2);
                var qtypere = rowNode.data.Qtyinpercentage;
                var qtyvale = rowNode.data.Quantity;
                this.selectedData = {
                  Step: '',
                  INCIName: this.gridinciname,
                  TradeName: this.gridtradename,
                  GeneralItemcode: this.griditem,
                  Qtyinpercentage: qtypere,
                  Quantity: qtyvale,
                  UnitName: this.unname,
                  UnitCost: Number(this.incicost).toFixed(5),
                  Cost: null,
                  SupplierName: this.gridsuppliername,
                  costinlb: null,
                  ItemCode: this.gridIngredientCode,
                  unitcostinlb: Number(this.incicost).toFixed(5),
                };
                // this.gridApi.updateRowData({ update: selectedData });
                //   var rowNode = this.gridApi.getRowNode(this.rowindex);


                RowNode.setData(this.selectedData);

                var rowNode = this.gridApi.getRowNode(rowindata2);
                rowNode.setDataValue('Quantity', '0.0000000');
                rowNode.setDataValue('Qtyinpercentage', '0.0000000');

              }
              var rowin: any = 0;
              var rowing: any = 0;
              let { rowsToDisplay } = this.gridApi.getModel();
              this.rowData = [];
              this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
              this.gridApi.setRowData(this.rowData);
              //this.firstdata= rowNode.data.Qtyinpercentage;
              rowin = RowNode.rowIndex;
              //  this.gridApi.refreshCells(params);
              if (rowin != 0) {
                var sumvar: any = 0;
                var firstsumvar: any = 0;
                rowin = 1;
                var i = 1;
                var rowdatacount = this.gridApi.getDisplayedRowCount();
                var flaa: any = 0;
                var rowindata1: any
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  if (rowNode.data.UnitName != '' && flaa != 1) {
                    rowindata1 = rowin;
                    rowindata1 = rowindata1 + 1;
                    flaa = 1;
                    break;
                  }
                }
                //for (let rowin = 1; rowin <= this.rowData.length; rowin++) 
                for (let rowin = rowindata1, i = rowindata1; i <= rowdatacount - 1; rowin++, i++) {


                  var rowNode = this.gridApi.getRowNode(rowin);

                  sumvar = Number(sumvar) + Number(rowNode.data.Qtyinpercentage);

                }
                var firstrowNode = this.gridApi.getRowNode(0);
                rowin = RowNode.rowIndex;
                var rowNo = this.gridApi.getRowNode(rowin);
                var pamv = Number('0.0000000');

                if (pamv < 0.0000000 || isNaN(pamv)) {
                  var dat: any = '0.0000000';
                  var rowNode = this.gridApi.getRowNode(rowin);
                  rowNode.setDataValue('Qtyinpercentage', String(dat));
                }

                //  else if (Number(100 - Number(sumvar)) >= Number(firstrowNode.data.Qtyinpercentage)  )
                //else if (params.newValue >= firstrowNode.data.Qtyinpercentage && (100-sumvar)<)
                else if (Number((sumvar).toFixed(7)) > 100) {

                  var dat: any = '0.0000000';
                  var rowNode = this.gridApi.getRowNode(rowin);
                  rowNode.setDataValue('Qtyinpercentage', String(dat));
                  rowNode.setDataValue('UnitCost', rowNo.data.UnitCost);
                }

                else {
                  var dat: any = '0.0000000';
                  var adt2: any = Number('0.0000000');
                  var dat2: any = String(adt2.toFixed(7));
                  var rowNode = this.gridApi.getRowNode(rowin);

                  rowNode.setDataValue('Qtyinpercentage', '0.0000000');

                  //  rowin2 = params.node.rowIndex;
                  //  const colId = params.column.getId();

                  var qtyper: Number = Number(dat);
                  var rowNode = this.gridApi.getRowNode(rowin);
                  var oldda: any = '0.0000000';
                  var enwda: any = ((Number(this.labbatch) / 100) * dat).toFixed(7);
                  var unicost: any = Number(this.incicost).toFixed(5);
                  var updatedunicost: any = (enwda * unicost).toFixed(5);

                  rowNode.setDataValue('Quantity', String(enwda));
                  rowNode.setDataValue('Cost', String(updatedunicost));
                  if (this.selectedunit == "g") {
                    var updtedcosinlb: any = Number(updatedunicost * 453.592 / Number(this.labbatch)).toFixed(5);
                  } else if (this.selectedunit == "Kg") {
                    var updtedcosinlb: any = Number(updatedunicost * .453592 / Number(this.labbatch)).toFixed(5);
                  }
                  else {
                    var updtedcosinlb: any = Number((updatedunicost) / Number(this.labbatch)).toFixed(5);
                  }

                  rowNode.setDataValue('costinlb', String(updtedcosinlb));
                  rowNode.setDataValue('quantityinlb', String(enwda));


                  var rowindata: any;
                  var fla: any = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    if (rowNode.data.UnitName != '' && fla != 1) {
                      rowindata = rowin;
                      fla = 1;
                      break;
                    }
                  }

                  //rowin = 0;
                  var rowNode = this.gridApi.getRowNode(rowindata);
                  rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                  //var rowin2: any = params.node.rowIndex;
                  //var rowNode2 = this.gridApi.getRowNode(rowin2);
                  //rowNode2.setDataValue('Qtyinpercentage', String(qtyper.toFixed(7)));
                  rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                  rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                  var fistrowdata: any = rowNode.data.Qtyinpercentage;

                  var firstrowunicost: any = rowNode.data.UnitCost;
                  var subvalue: any = (fistrowdata - dat).toFixed(7);

                  subvalue = ((100 - sumvar.toFixed(7))).toFixed(7);
                  if (subvalue == "-0.0000000") {
                    subvalue = "0.0000000";
                  }
                  this.formulaCost = String(sumvar);
                  var unitcosttotal = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                  }
                  this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                  var totcs: Number = sumvar * Number(this.labbatch);
                  // this.TotalUnitCost = this.formulaCost;
                  
                  this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
                  // this.TotalUnitCost = String(totcs.toFixed(5));
                  if (subvalue < 0.0000000) {
                    rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                    rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                    rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                  }
                  else {
                    var rowNode = this.gridApi.getRowNode(rowindata);
                    // var subvalue2: any = subvalue.toFixed(7);
                    rowNode.setDataValue('Qtyinpercentage', String(subvalue));

                    var enwda2: any = ((Number(this.labbatch) / 100) * subvalue).toFixed(7);
                    var subcost: any = (enwda2 * firstrowunicost).toFixed(5);

                    rowNode.setDataValue('Quantity', String(enwda2));
                    rowNode.setDataValue('Cost', String(subcost));

                    if (this.selectedunit == "g") {
                      var cosinlb: any = Number(subcost * 453.592 / Number(this.labbatch)).toFixed(5);
                    } else if (this.selectedunit == "Kg") {
                      var cosinlb: any = Number(subcost * .453592 / Number(this.labbatch)).toFixed(5);
                    }
                    else {

                      var cosinlb: any = Number((subcost) / Number(this.labbatch)).toFixed(5);
                    }

                    rowNode.setDataValue('costinlb', String(cosinlb));
                    rowNode.setDataValue('quantityinlb', String(enwda2));
                  }
                  var totalquantity = 0;
                  var totaper = 0;
                  var costlb = 0;
                  var unitcosttotal = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                  }
                  this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
                  }
                  this.totaquantity = String(totalquantity.toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
                  }
                  this.TotalPercentage = String(totaper.toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    costlb = Number(costlb) + Number(rowNode.data.costinlb);

                  }
                  this.TotalCostInLB = String(costlb.toFixed(5));
                  this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
                  subvalue = 0;
                  this.rowsToDisplay1 = this.gridApi.getModel();
                }








                var sumvar: any = 0;
                for (rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  sumvar = Number(sumvar) + Number(rowNode.data.Cost);
                }
                // this.formulaCost = String(sumvar);
                var totcs: Number = sumvar * Number(this.labbatch);
                //this.TotalUnitCost = String(totcs);
                rowin = 0;
                this.count = 1;
              }
              this.gridApi.deselectAll();
              this.rowindex = null;


              //  this.gridApi.refreshClientSideRowModel();
              //this.gridApi.updateRowData({
              //  add: [{ Step: '', INCIName: this.gridinciname, TradeName: this.gridtradename, GeneralItemcode: this.griditem, Qtyinpercentage: '0.0000000', Quantity: '0.0000000', UnitName: this.unname, UnitCost: (Number(this.incicost)).toFixed(5).toString(), Cost: null, SupplierName: this.gridsuppliername }],
              //    addIndex: this.rowindex

              //  });


            }
            //  this.gridApi.ensureIndexVisible(this.rowindex,'bottom');
          }
          else {
            if (RowNode.data.UnitName == "")
            {

              var rowdatacount = this.gridApi.getDisplayedRowCount();
              var flaa: any = 0;
              var emp1: any = 0
              var rowindata1: any
              var rowcount = this.selectedData.rowIndex;
              for (let rowin = 0; rowin <= rowcount; rowin++) {
                var rowNode = this.gridApi.getRowNode(rowin);
                if (rowNode.data.UnitName != '' && flaa != 1) {
                  emp1 = 1;
                  rowindata1 = rowin;
                  rowindata1 = rowindata1 + 1;
                  flaa = 1;
                  break;
                }
                else {
                  rowindata1 = rowin;
                  rowindata1 = rowindata1 + 1;
                }

              }
              if (emp1 == 1)
              {
                this.selectedData = {
                  Step: '',
                  INCIName: this.gridinciname,
                  TradeName: this.gridtradename,
                  GeneralItemcode: this.griditem,
                  Qtyinpercentage: '0.0000000',
                  Quantity: '0.0000000',
                  UnitName: this.unname,
                  UnitCost: Number(this.incicost).toFixed(5),
                  Cost: null,
                  SupplierName: this.gridsuppliername,
                  costinlb: null,
                  ItemCode: this.gridIngredientCode,
                  unitcostinlb: Number(this.incicost).toFixed(5),
                };
                // this.gridApi.updateRowData({ update: selectedData });
                //   var rowNode = this.gridApi.getRowNode(this.rowindex);


                RowNode.setData(this.selectedData);



              }
              else {
                var rowindata4: any
                var emp3: any = 0;
                var rowdatacount4 = this.gridApi.getDisplayedRowCount();
                for (let rowind = 1; rowind <= rowdatacount4 - 1; rowind++) {
                  var rowNode = this.gridApi.getRowNode(rowind);
                  if (rowNode.data.UnitName != '' && fla != 1) {
                    rowindata4 = rowinc;
                    emp3 = 1
                    fla = 1;
                    break;
                  }
                }
                if (emp3 == 0) {
                  var cos: any = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                  if (this.selectedunit == "g") {
                    cosinlb = Number(cos * 453.592 / Number(this.labbatch)).toFixed(5);
                  } else if (this.selectedunit == "Kg") {
                    cosinlb = Number(cos * .453592 / Number(this.labbatch)).toFixed(5);
                  }
                  else {
                    cosinlb = Number((cos) / Number(this.labbatch)).toFixed(5);
                  }
                  rowindata2 = 1;
                  this.selectedData = {
                    Step: '',
                    INCIName: this.gridinciname,
                    TradeName: this.gridtradename,
                    GeneralItemcode: this.griditem,
                    Qtyinpercentage: '100.0000000',
                    Quantity: this.labbatch,
                    UnitName: this.unname,
                    UnitCost: Number(this.incicost).toFixed(5),
                    Cost: (Number(this.incicost) * Number(this.labbatch)).toFixed(5),
                    SupplierName: this.gridsuppliername,
                    costinlb: cosinlb,
                    ItemCode: this.gridIngredientCode,
                    unitcostinlb: Number(cosinlb).toFixed(5),
                  };


                  // this.gridApi.updateRowData({ update: selectedData });
                  //   var rowNode = this.gridApi.getRowNode(this.rowindex);
                  this.TotalPercentage = '100.00000';
                  this.Yield = '100';
                  this.TotalUnitCost = (Number(this.incicost) * Number(this.labbatch)).toFixed(5);
                 
                  this.formulaCost = Number(this.incicost).toFixed(5);
                  this.totaquantity = this.labbatch;
                  this.TotalCostInLB = Number(cosinlb).toFixed(5);
                  this.TotalCostInkg = String((cosinlb * 2.20462).toFixed(5));
                  RowNode.setData(this.selectedData);
                  this.gridApi.getModel();

                }
                else {
                  var rowNode = this.gridApi.getRowNode(rowindata1);
                  var qtypere = rowNode.data.Qtyinpercentage;
                  var qtyvale = rowNode.data.Quantity;
                  this.selectedData = {
                    Step: '',
                    INCIName: this.gridinciname,
                    TradeName: this.gridtradename,
                    GeneralItemcode: this.griditem,
                    Qtyinpercentage: qtypere,
                    Quantity: qtyvale,
                    UnitName: this.unname,
                    UnitCost: Number(this.incicost).toFixed(5),
                    Cost: null,
                    SupplierName: this.gridsuppliername,
                    costinlb: null,
                    ItemCode: this.gridIngredientCode,
                    unitcostinlb: Number(this.incicost).toFixed(5),
                  };
                  // this.gridApi.updateRowData({ update: selectedData });
                  //   var rowNode = this.gridApi.getRowNode(this.rowindex);


                  RowNode.setData(this.selectedData);

                  var rowNode = this.gridApi.getRowNode(rowindata1);
                  rowNode.setDataValue('Quantity', '0.0000000');
                  rowNode.setDataValue('Qtyinpercentage', '0.0000000');

                }

              }


              var rowin: any = 0;
              var rowing: any = 0;
              let { rowsToDisplay } = this.gridApi.getModel();
              this.rowData = [];
              this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
              this.gridApi.setRowData(this.rowData);
              //this.firstdata= rowNode.data.Qtyinpercentage;
              rowin = RowNode.rowIndex;
              //  this.gridApi.refreshCells(params);
              if (rowin != 0) {
                var sumvar: any = 0;
                var firstsumvar: any = 0;
                rowin = 1;
                var i = 1;
                var rowdatacount = this.gridApi.getDisplayedRowCount();
                var flaa: any = 0;
                var rowindata1: any
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  if (rowNode.data.UnitName != '' && flaa != 1) {
                    rowindata1 = rowin;
                    rowindata1 = rowindata1 + 1;
                    flaa = 1;
                    break;
                  }
                }
                //for (let rowin = 1; rowin <= this.rowData.length; rowin++) 
                for (let rowin = rowindata1, i = rowindata1; i <= rowdatacount - 1; rowin++, i++) {


                  var rowNode = this.gridApi.getRowNode(rowin);

                  sumvar = Number(sumvar) + Number(rowNode.data.Qtyinpercentage);

                }
                var firstrowNode = this.gridApi.getRowNode(0);
                rowin = RowNode.rowIndex;
                var rowNo = this.gridApi.getRowNode(rowin);
                var pamv = Number('0.0000000');

                if (pamv < 0.0000000 || isNaN(pamv)) {
                  var dat: any = '0.0000000';
                  var rowNode = this.gridApi.getRowNode(rowin);
                  rowNode.setDataValue('Qtyinpercentage', String(dat));
                }

                //  else if (Number(100 - Number(sumvar)) >= Number(firstrowNode.data.Qtyinpercentage)  )
                //else if (params.newValue >= firstrowNode.data.Qtyinpercentage && (100-sumvar)<)
                else if (Number((sumvar).toFixed(7)) > 100) {

                  var dat: any = '0.0000000';
                  var rowNode = this.gridApi.getRowNode(rowin);
                  rowNode.setDataValue('Qtyinpercentage', String(dat));
                  rowNode.setDataValue('UnitCost', rowNo.data.UnitCost);
                }

                else {
                  var dat: any = '0.0000000';
                  var adt2: any = Number('0.0000000');
                  var dat2: any = String(adt2.toFixed(7));
                  var rowNode = this.gridApi.getRowNode(rowin);

                  rowNode.setDataValue('Qtyinpercentage', '0.0000000');

                  //  rowin2 = params.node.rowIndex;
                  //  const colId = params.column.getId();

                  var qtyper: Number = Number(dat);
                  var rowNode = this.gridApi.getRowNode(rowin);
                  var oldda: any = '0.0000000';
                  var enwda: any = ((Number(this.labbatch) / 100) * dat).toFixed(7);
                  var unicost: any = Number(this.incicost).toFixed(5);
                  var updatedunicost: any = (enwda * unicost).toFixed(5);

                  rowNode.setDataValue('Quantity', String(enwda));
                  rowNode.setDataValue('Cost', String(updatedunicost));
                  if (this.selectedunit == "g") {
                    var updtedcosinlb: any = Number(updatedunicost * 453.592 / Number(this.labbatch)).toFixed(5);
                  } else if (this.selectedunit == "Kg") {
                    var updtedcosinlb: any = Number(updatedunicost * .453592 / Number(this.labbatch)).toFixed(5);
                  }
                  else {
                    var updtedcosinlb: any = Number((updatedunicost) / Number(this.labbatch)).toFixed(5);
                  }

                  rowNode.setDataValue('costinlb', String(updtedcosinlb));
                  rowNode.setDataValue('quantityinlb', String(enwda));


                  var rowindata: any;
                  var fla: any = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    if (rowNode.data.UnitName != '' && fla != 1) {
                      rowindata = rowin;
                      fla = 1;
                      break;
                    }
                  }

                  //rowin = 0;
                  var rowNode = this.gridApi.getRowNode(rowindata);
                  rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                  //var rowin2: any = params.node.rowIndex;
                  //var rowNode2 = this.gridApi.getRowNode(rowin2);
                  //rowNode2.setDataValue('Qtyinpercentage', String(qtyper.toFixed(7)));
                  rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                  rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                  var fistrowdata: any = rowNode.data.Qtyinpercentage;

                  var firstrowunicost: any = rowNode.data.UnitCost;
                  var subvalue: any = (fistrowdata - dat).toFixed(7);

                  subvalue = ((100 - sumvar.toFixed(7))).toFixed(7);
                  if (subvalue == "-0.0000000") {
                    subvalue = "0.0000000";
                  }
                  this.formulaCost = String(sumvar);
                  var unitcosttotal = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                  }
                  this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                  var totcs: Number = sumvar * Number(this.labbatch);
                  // this.TotalUnitCost = this.formulaCost;
                  
                  this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
                  // this.TotalUnitCost = String(totcs.toFixed(5));
                  if (subvalue < 0.0000000) {
                    rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                    rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                    rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                  }
                  else {
                    var rowNode = this.gridApi.getRowNode(rowindata);
                    // var subvalue2: any = subvalue.toFixed(7);
                    rowNode.setDataValue('Qtyinpercentage', String(subvalue));

                    var enwda2: any = ((Number(this.labbatch) / 100) * subvalue).toFixed(7);
                    var subcost: any = (enwda2 * firstrowunicost).toFixed(5);

                    rowNode.setDataValue('Quantity', String(enwda2));
                    rowNode.setDataValue('Cost', String(subcost));

                    if (this.selectedunit == "g") {
                      var cosinlb: any = Number(subcost * 453.592 / Number(this.labbatch)).toFixed(5);
                    } else if (this.selectedunit == "Kg") {
                      var cosinlb: any = Number(subcost * .453592 / Number(this.labbatch)).toFixed(5);
                    }
                    else {

                      var cosinlb: any = Number((subcost) / Number(this.labbatch)).toFixed(5);
                    }

                    rowNode.setDataValue('costinlb', String(cosinlb));
                    rowNode.setDataValue('quantityinlb', String(enwda2));
                  }
                  var totalquantity = 0;
                  var totaper = 0;
                  var costlb = 0;
                  var unitcosttotal = 0;
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                  }
                  this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                
                  this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
                  }
                  this.totaquantity = String(totalquantity.toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
                  }
                  this.TotalPercentage = String(totaper.toFixed(5));
                  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                    var rowNode = this.gridApi.getRowNode(rowin);
                    costlb = Number(costlb) + Number(rowNode.data.costinlb);

                  }
                  this.TotalCostInLB = String(costlb.toFixed(5));
                  this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
                  subvalue = 0;
                  this.rowsToDisplay1 = this.gridApi.getModel();
                }








                var sumvar: any = 0;
                for (rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  sumvar = Number(sumvar) + Number(rowNode.data.Cost);
                }
                // this.formulaCost = String(sumvar);
                var totcs: Number = sumvar * Number(this.labbatch);
                //this.TotalUnitCost = String(totcs);
                rowin = 0;
                this.count = 1;
              }
              this.gridApi.deselectAll();
              this.rowindex = null;


                //  this.gridApi.refreshClientSideRowModel();
                //this.gridApi.updateRowData({
                //  add: [{ Step: '', INCIName: this.gridinciname, TradeName: this.gridtradename, GeneralItemcode: this.griditem, Qtyinpercentage: '0.0000000', Quantity: '0.0000000', UnitName: this.unname, UnitCost: (Number(this.incicost)).toFixed(5).toString(), Cost: null, SupplierName: this.gridsuppliername }],
                //    addIndex: this.rowindex

                //  });


            }
            else {
            this.selectedData = {
              Step: '',
              INCIName: this.gridinciname,
              TradeName: this.gridtradename,
              GeneralItemcode: this.griditem,
              Qtyinpercentage: '0.0000000',
              Quantity: '0.0000000',
              UnitName: this.unname,
              UnitCost: Number(this.incicost).toFixed(5),
              Cost: null,
              SupplierName: this.gridsuppliername,
              costinlb: null,
              ItemCode: this.gridIngredientCode,
              unitcostinlb: Number(this.incicost).toFixed(5),
            };
            // this.gridApi.updateRowData({ update: selectedData });
            //   var rowNode = this.gridApi.getRowNode(this.rowindex);


            RowNode.setData(this.selectedData);


            var rowin: any = 0;
            var rowing: any = 0;
            let { rowsToDisplay } = this.gridApi.getModel();
            this.rowData = [];
            this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
            this.gridApi.setRowData(this.rowData);
            //this.firstdata= rowNode.data.Qtyinpercentage;
            rowin = RowNode.rowIndex;
            //  this.gridApi.refreshCells(params);
            if (rowin != 0) {
              var sumvar: any = 0;
              var firstsumvar: any = 0;
              rowin = 1;
              var i = 1;
              var rowdatacount = this.gridApi.getDisplayedRowCount();
              var flaa: any = 0;
              var rowindata1: any
              for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                var rowNode = this.gridApi.getRowNode(rowin);
                if (rowNode.data.UnitName != '' && flaa != 1) {
                  rowindata1 = rowin;
                  rowindata1 = rowindata1 + 1;
                  flaa = 1;
                  break;
                }
              }
              //for (let rowin = 1; rowin <= this.rowData.length; rowin++) 
              for (let rowin = rowindata1, i = rowindata1; i <= rowdatacount - 1; rowin++, i++) {


                var rowNode = this.gridApi.getRowNode(rowin);

                sumvar = Number(sumvar) + Number(rowNode.data.Qtyinpercentage);

              }
              var firstrowNode = this.gridApi.getRowNode(0);
              rowin = RowNode.rowIndex;
              var rowNo = this.gridApi.getRowNode(rowin);
              var pamv = Number('0.0000000');

              if (pamv < 0.0000000 || isNaN(pamv)) {
                var dat: any = '0.0000000';
                var rowNode = this.gridApi.getRowNode(rowin);
                rowNode.setDataValue('Qtyinpercentage', String(dat));
              }

              //  else if (Number(100 - Number(sumvar)) >= Number(firstrowNode.data.Qtyinpercentage)  )
              //else if (params.newValue >= firstrowNode.data.Qtyinpercentage && (100-sumvar)<)
              else if (Number((sumvar).toFixed(7)) > 100) {

                var dat: any = '0.0000000';
                var rowNode = this.gridApi.getRowNode(rowin);
                rowNode.setDataValue('Qtyinpercentage', String(dat));
                rowNode.setDataValue('UnitCost', rowNo.data.UnitCost);
              }

              else {
                var dat: any = '0.0000000';
                var adt2: any = Number('0.0000000');
                var dat2: any = String(adt2.toFixed(7));
                var rowNode = this.gridApi.getRowNode(rowin);

                rowNode.setDataValue('Qtyinpercentage', '0.0000000');

                //  rowin2 = params.node.rowIndex;
                //  const colId = params.column.getId();

                var qtyper: Number = Number(dat);
                var rowNode = this.gridApi.getRowNode(rowin);
                var oldda: any = '0.0000000';
                var enwda: any = ((Number(this.labbatch) / 100) * dat).toFixed(7);
                var unicost: any = Number(this.incicost).toFixed(5);
                var updatedunicost: any = (enwda * unicost).toFixed(5);

                rowNode.setDataValue('Quantity', String(enwda));
                rowNode.setDataValue('Cost', String(updatedunicost));
                if (this.selectedunit == "g") {
                  var updtedcosinlb: any = Number(updatedunicost * 453.592 / Number(this.labbatch)).toFixed(5);
                } else if (this.selectedunit == "Kg") {
                  var updtedcosinlb: any = Number(updatedunicost * .453592 / Number(this.labbatch)).toFixed(5);
                }
                else {
                  var updtedcosinlb: any = Number((updatedunicost) / Number(this.labbatch)).toFixed(5);
                }

                rowNode.setDataValue('costinlb', String(updtedcosinlb));
                rowNode.setDataValue('quantityinlb', String(enwda));


                var rowindata: any;
                var fla: any = 0;
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  if (rowNode.data.UnitName != '' && fla != 1) {
                    rowindata = rowin;
                    fla = 1;
                    break;
                  }
                }

                //rowin = 0;
                var rowNode = this.gridApi.getRowNode(rowindata);
                rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                //var rowin2: any = params.node.rowIndex;
                //var rowNode2 = this.gridApi.getRowNode(rowin2);
                //rowNode2.setDataValue('Qtyinpercentage', String(qtyper.toFixed(7)));
                rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                var fistrowdata: any = rowNode.data.Qtyinpercentage;

                var firstrowunicost: any = rowNode.data.UnitCost;
                var subvalue: any = (fistrowdata - dat).toFixed(7);

                subvalue = ((100 - sumvar.toFixed(7))).toFixed(7);
                if (subvalue == "-0.0000000") {
                  subvalue = "0.0000000";
                }
                this.formulaCost = String(sumvar);
                var unitcosttotal = 0;
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                }
                this.TotalUnitCost = String(unitcosttotal.toFixed(5));
                var totcs: Number = sumvar * Number(this.labbatch);
                // this.TotalUnitCost = this.formulaCost;
               
                this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
                // this.TotalUnitCost = String(totcs.toFixed(5));
                if (subvalue < 0.0000000) {
                  rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
                  rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
                  rowNode.setDataValue('Cost', String(rowNode.data.Cost));
                }
                else {
                  var rowNode = this.gridApi.getRowNode(rowindata);
                  // var subvalue2: any = subvalue.toFixed(7);
                  rowNode.setDataValue('Qtyinpercentage', String(subvalue));

                  var enwda2: any = ((Number(this.labbatch) / 100) * subvalue).toFixed(7);
                  var subcost: any = (enwda2 * firstrowunicost).toFixed(5);

                  rowNode.setDataValue('Quantity', String(enwda2));
                  rowNode.setDataValue('Cost', String(subcost));

                  if (this.selectedunit == "g") {
                    var cosinlb: any = Number(subcost * 453.592 / Number(this.labbatch)).toFixed(5);
                  } else if (this.selectedunit == "Kg") {
                    var cosinlb: any = Number(subcost * .453592 / Number(this.labbatch)).toFixed(5);
                  }
                  else {

                    var cosinlb: any = Number((subcost) / Number(this.labbatch)).toFixed(5);
                  }

                  rowNode.setDataValue('costinlb', String(cosinlb));
                  rowNode.setDataValue('quantityinlb', String(enwda2));
                }
                var totalquantity = 0;
                var totaper = 0;
                var costlb = 0;
                var unitcosttotal = 0;
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
                }
                this.TotalUnitCost = String(unitcosttotal.toFixed(5));
              
                this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
                }
                this.totaquantity = String(totalquantity.toFixed(5));
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
                }
                this.TotalPercentage = String(totaper.toFixed(5));
                for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
                  var rowNode = this.gridApi.getRowNode(rowin);
                  costlb = Number(costlb) + Number(rowNode.data.costinlb);

                }
                this.TotalCostInLB = String(costlb.toFixed(5));
                this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
                subvalue = 0;
                this.rowsToDisplay1 = this.gridApi.getModel();
              }








              var sumvar: any = 0;
              for (rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
                var rowNode = this.gridApi.getRowNode(rowin);
                sumvar = Number(sumvar) + Number(rowNode.data.Cost);
              }
              // this.formulaCost = String(sumvar);
              var totcs: Number = sumvar * Number(this.labbatch);
              //this.TotalUnitCost = String(totcs);
              rowin = 0;
              this.count = 1;
            }
            this.gridApi.deselectAll();
            this.rowindex = null;


            //  this.gridApi.refreshClientSideRowModel();
            //this.gridApi.updateRowData({
            //  add: [{ Step: '', INCIName: this.gridinciname, TradeName: this.gridtradename, GeneralItemcode: this.griditem, Qtyinpercentage: '0.0000000', Quantity: '0.0000000', UnitName: this.unname, UnitCost: (Number(this.incicost)).toFixed(5).toString(), Cost: null, SupplierName: this.gridsuppliername }],
            //    addIndex: this.rowindex

            //  });


          }
        }
        })
      }
      else {
        

      }
      let { rowsToDisplay } = this.gridApi.getModel();
      this.rowData = [];
      this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
      this.gridApi.setRowData(this.rowData);
      this.rowindex = null;
    });
    
  }
  rowDoubleClicked(event: any) {
    var selectd: any = event.data.ItemCode;
    var suppname: any = event.data.SupplierName;
    var unitdata: any = event.data.UnitName;
    if (unitdata != "") {
      this.Datashare.senditemtoraw(selectd);
      this.Datashare.senditemtosupplier(suppname);
      const dialogRef = this.dialog.open(RawMaterialComponent, {
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        panelClass: 'full-screen-modal'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        let { rowsToDisplay } = this.gridApi.getModel();
        this.rowData = [];
        this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
        //this.gridApi.forEachNode(RowNode => rowData.push(rowNode.data));
        this.Formulagridvalues(this.rowData)
        this.FormulatextboxList[0] = ([{

          FormulaTotalQTY: this.totaquantity,
          Yield: this.Yield,
          formulaCost: this.formulaCost,
          formulaNetQty: this.formulaNetQty,
          TotalCostInLB: this.TotalCostInLB,
          TotalPercentage: this.TotalPercentage,
          FormulaUnit: this.selectedunit,
        }]);
        this.Formulacostupdate("nobuttoncostupdate").subscribe((Cost_pref) => {
          console.warn("Cost_pref", Cost_pref)
          this.Costupdates = Cost_pref
          this.costupdatedetail = this.Costupdates
          let stringToSplit = this.costupdatedetail;
          var splitdata = stringToSplit.replace(':', '/n').replace(' updated.', '/n').replace('Cost details will be', ' Cost details will be')
          var splited = splitdata.split('/n')
          if (this.costupdatedetail == "" || this.costupdatedetail == undefined) { }
          else {
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '25%', data: { displaydata: splited[0] + '\n' + splited[1] + ' Updated' + '\n' + splited[2] + '\n' } });
          }
          this.formgriddata = JSON.stringify(this.FormulagridList);
          this.formulationload(this.formulacode, this.labbatch, this.selectedunit, this.operation2).subscribe((formulationload) => {
            console.warn("formulaload", formulationload)

            this.rowData = formulationload
            this.gridApi.refreshCells({ formulationload })


            var unitcosttotal = 0;
            var costlb = 0;
            var sumvar: any = 0;
            this.gridApi.setRowData(this.rowData);
            var rowdatacount = this.rowData.length;
            for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
              var rowNode = this.gridApi.getRowNode(rowin);
              unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
            }
            this.TotalUnitCost = String(unitcosttotal.toFixed(5));
            var totcs: Number = sumvar * Number(this.labbatch);
            // this.TotalUnitCost = this.formulaCost;
            
            this.formulaCost = String((Number(unitcosttotal.toFixed(5)) / Number(this.labbatch)).toFixed(5));
            var totalquantity = 0;
            for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
              var rowNode = this.gridApi.getRowNode(rowin);

              totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
            }
            this.totaquantity = String(totalquantity.toFixed(5));
            for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
              var rowNode = this.gridApi.getRowNode(rowin);
              costlb = Number(costlb) + Number(rowNode.data.costinlb);

            }
            this.TotalCostInLB = String(costlb.toFixed(5));
            this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));

            //  this.selectedunit = String(this.rowData[0].UnitName);
            this.Audittrackingload(this.formulacode).subscribe((Audittrackingload) => {
              console.warn("Audittrackingload", Audittrackingload)
              this.AudittrackData = Audittrackingload
            })
          })
        })
        //this.wait(10000);



      });
    }
    else {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'The selected value is not a Raw Material ' } });
    }
  }

  
  editcellgriddata2(event: any): void {

    let rowData = [];
    this.gridApi.forEachNode(RowNode => rowData.push(RowNode.data));
    this.gridApi.setRowData(rowData);
    this.rowindex = event.rowIndex;
    const dialogRef = this.dialog.open(FormulaInstructionComponent, {
      width: '60%', height: '70%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.instruc = result;
      this.gridApi.deselectAll();
      if (result != "") {
        this.selectedData = this.gridApi.getFocusedCell()
        var RowNode = this.gridApi.getRowNode(this.selectedData.rowIndex)
        this.selectedData = {
          Step: '',
          INCIName: this.instruc,
          TradeName: '',
          ItemCode: 'null',
          GeneralItemcode: '',
          Qtyinpercentage: '',
          Quantity: '',
          UnitName: '',
          UnitCost: '',
          Cost: '',
          SupplierName: '',
          costinlb: '',

          unitcostinlb: '',
        };
        RowNode.setData(this.selectedData);

        var rowin: any = 0;
        var rowing: any = 0;
        this.count = 0;
        let { rowsToDisplay } = this.gridApi.getModel();
        this.rowData = [];
        this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
        this.gridApi.setRowData(this.rowData);
        var rowin6: any = this.rowindex;

        if (this.count != 1) {
          //this.firstdata= rowNode.data.Qtyinpercentage;
          var rowin: any = 0;
          rowin = this.rowindex


          // this.gridApi.refreshCells(params);
          if (rowin != null) {
            var sumvar: any = 0;
            var firstsumvar: any = 0;
            rowin = 1;
            var emp: any = 0
            var i = 1;
            var rowdatacount = this.gridApi.getDisplayedRowCount();
            var flaa: any = 0;
            var rowindata1: any
            for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
              var rowNode = this.gridApi.getRowNode(rowin);
              if (rowNode.data.UnitName != '' && flaa != 1) {
                emp = 1;
                rowindata1 = rowin;
                rowindata1 = rowindata1 + 1;
                flaa = 1;
                break;
              }
            }
            if (emp != 1) {
              this.TotalUnitCost = '0.00000';
              this.formulaCost = '0.00000';
              this.totaquantity = '0.0000000';
              this.TotalPercentage = '0.00000';
              this.TotalCostInLB = '0.00000';
              this.TotalCostInkg = '0.00000';
            }
            //for (let rowin = 1; rowin <= this.rowData.length; rowin++) 
            for (let rowin = rowindata1, i = rowindata1; i <= rowdatacount - 1; rowin++, i++) {

              var rowNode = this.gridApi.getRowNode(rowin);

              sumvar = Number(sumvar) + Number(rowNode.data.Qtyinpercentage);

            }
            var firstrowNode = this.gridApi.getRowNode(0);
            // rowin = params.node.rowIndex;
            var rowNo = this.gridApi.getRowNode(rowin);



            //  else if (Number(100 - Number(sumvar)) >= Number(firstrowNode.data.Qtyinpercentage)  )
            //else if (params.newValue >= firstrowNode.data.Qtyinpercentage && (100-sumvar)<)



            //var dat: any = params.newValue;
            //var adt2: any = Number(params.newValue)
            //var dat2: any = String(adt2.toFixed(7));
            //var rowNode = this.gridApi.getRowNode(rowin);

            //rowNode.setDataValue('Qtyinpercentage', dat2);

            // //  rowin2 = params.node.rowIndex;
            // //  const colId = params.column.getId();

            //var qtyper: Number = Number(dat);
            //var rowNode = this.gridApi.getRowNode(rowin);
            //var oldda: any = params.data.Quantity;
            //var enwda: any = ((Number(this.labbatch) / 100) * dat).toFixed(7);
            //var unicost: any = params.data.UnitCost;
            //var updatedunicost: any = (enwda * unicost).toFixed(5);

            //rowNode.setDataValue('Quantity', String(enwda));
            //rowNode.setDataValue('Cost', String(updatedunicost));
            //rowNode.setDataValue('costinlb', String(updatedunicost));
            //rowNode.setDataValue('quantityinlb', String(enwda));


            var rowindata: any;
            var fla: any = 0;
            for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
              var rowNode = this.gridApi.getRowNode(rowin);
              if (rowNode.data.UnitName != '' && fla != 1) {
                rowindata = rowin;
                fla = 1;
                break;
              }
            }

            //rowin = 0;
            var rowNode = this.gridApi.getRowNode(rowindata);
            rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
            //var rowin2: any = params.node.rowIndex;
            //var rowNode2 = this.gridApi.getRowNode(rowin2);
            //rowNode2.setDataValue('Qtyinpercentage', String(qtyper.toFixed(7)));
            rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
            rowNode.setDataValue('Cost', String(rowNode.data.Cost));
            var fistrowdata: any = rowNode.data.Qtyinpercentage;

            var firstrowunicost: any = rowNode.data.UnitCost;
            //  var subvalue: any = (fistrowdata - dat).toFixed(7);
            var subvalue: any;
            subvalue = (100 - sumvar).toFixed(7);
            this.formulaCost = String(sumvar);
            var unitcosttotal = 0;
            for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
              var rowNode = this.gridApi.getRowNode(rowin);
              unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
            }
            //this.TotalUnitCost = String(unitcosttotal.toFixed(5));
            var totcs: Number = sumvar * Number(this.labbatch);
            // this.TotalUnitCost = this.formulaCost;
           
            this.formulaCost = String((Number(unitcosttotal.toFixed(5)) / Number(this.labbatch)).toFixed(5));
            // this.TotalUnitCost = String(totcs.toFixed(5));
            if (subvalue <= 0.0000000) {
              rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
              rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
              rowNode.setDataValue('Cost', String(rowNode.data.Cost));
            }
            else {
              var rowNode = this.gridApi.getRowNode(rowindata);
              rowNode.setDataValue('Qtyinpercentage', String(subvalue));

              var enwda2: any = ((Number(this.labbatch) / 100) * subvalue).toFixed(7);
              var subcost: any = (enwda2 * firstrowunicost).toFixed(5)

              rowNode.setDataValue('Quantity', String(enwda2));
              rowNode.setDataValue('Cost', String(subcost));
              if (this.selectedunit == "g") {
                var cosinlb: any = Number(subcost * 453.592 / Number(this.labbatch)).toFixed(5);
              } else if (this.selectedunit == "Kg") {
                var cosinlb: any = Number(subcost * .453592 / Number(this.labbatch)).toFixed(5);
              }
              else {

                var cosinlb: any = Number((subcost) / Number(this.labbatch)).toFixed(5);
              }
              rowNode.setDataValue('costinlb', String(cosinlb));
              rowNode.setDataValue('quantityinlb', String(enwda2));
            }
            var totalquantity = 0;
            var totaper = 0;
            var costlb = 0;
            var unitcosttotal = 0;
            for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
              var rowNode = this.gridApi.getRowNode(rowin);
              unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
            }
            this.TotalUnitCost = String(unitcosttotal.toFixed(5));
             this.formulaCost = String((Number(unitcosttotal.toFixed(5)) / Number(this.labbatch)).toFixed(5));
           // this.TotalUnitCost = String(unitcosttotal.toFixed(5));
            for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
              var rowNode = this.gridApi.getRowNode(rowin);
              totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
            }
            this.totaquantity = String(totalquantity.toFixed(5));
            for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
              var rowNode = this.gridApi.getRowNode(rowin);
              totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
            }
           this.TotalPercentage = String(totaper.toFixed(5));
            for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
              var rowNode = this.gridApi.getRowNode(rowin);
              costlb = Number(costlb) + Number(rowNode.data.costinlb);

            }
            this.TotalCostInLB = String(costlb.toFixed(5));
            this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
            subvalue = 0;

          }

          this.rowindex = null;

          let { rowsToDisplay } = this.gridApi.getModel();
          this.rowData = [];
          this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
          this.gridApi.setRowData(this.rowData);



          var sumvar: any = 0;
          for (rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            sumvar = Number(sumvar) + Number(rowNode.data.Cost);
          }
          // this.formulaCost = String(sumvar);
          var totcs: Number = sumvar * Number(this.labbatch);
          //this.TotalUnitCost = String(totcs);
          rowin = 0;
          this.count = 1;
        }



      }
      else {


      }
      let { rowsToDisplay } = this.gridApi.getModel();
      this.rowData = [];
      this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
      this.gridApi.setRowData(this.rowData);
      this.rowindex = null;
    });
  }

  rowClicked(event: any): void {
    this.count = 0;
    this.flag = 1;
    this.rowindex = event.rowIndex;

  }
  deleteRow() {
    var selectedData = this.gridApi.getSelectedRows();
    var qua: any = selectedData[0].Quantity;
    this.gridApi.updateRowData({ remove: selectedData });
  
   let { rowsToDisplay1 } = this.gridApi.getModel();
    this.rowData = [];
    this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
  //  this.gridApi.refreshClientSideRowModel();
    this.gridApi.setRowData(this.rowData);
    var rowin6: any = this.rowindex;
    if (qua != "") {
      if (this.count != 1) {
        //this.firstdata= rowNode.data.Qtyinpercentage;
        var rowin: any = 0;
        rowin = this.rowindex


        // this.gridApi.refreshCells(params);
        if (rowin != null) {
          var sumvar: any = 0;
          var firstsumvar: any = 0;
          rowin = 1;
          var i = 1;
          var rowdatacount = this.gridApi.getDisplayedRowCount();
          var flaa: any = 0;
          var emp:any=0
          var rowindata1: any
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            if (rowNode.data.UnitName != '' && flaa != 1) {
              emp = 1;
              rowindata1 = rowin;
              rowindata1 = rowindata1 + 1;
              flaa = 1;
              break;
            }
           
          }
          if (emp != 1) {
            this.TotalUnitCost = '0.00000';
            this.formulaCost = '0.00000';
            this.totaquantity = '0.0000000';
            this.TotalPercentage = '0.00000';
            this.TotalCostInLB = '0.00000';
            this.TotalCostInkg = '0.00000';
          }
          //for (let rowin = 1; rowin <= this.rowData.length; rowin++) 
          for (let rowin = rowindata1, i = rowindata1; i <= rowdatacount - 1; rowin++, i++) {

            var rowNode = this.gridApi.getRowNode(rowin);

            sumvar = Number(sumvar) + Number(rowNode.data.Qtyinpercentage);

          }
          var firstrowNode = this.gridApi.getRowNode(0);
          // rowin = params.node.rowIndex;
          var rowNo = this.gridApi.getRowNode(rowin);



          //  else if (Number(100 - Number(sumvar)) >= Number(firstrowNode.data.Qtyinpercentage)  )
          //else if (params.newValue >= firstrowNode.data.Qtyinpercentage && (100-sumvar)<)



          //var dat: any = params.newValue;
          //var adt2: any = Number(params.newValue)
          //var dat2: any = String(adt2.toFixed(7));
          //var rowNode = this.gridApi.getRowNode(rowin);

          //rowNode.setDataValue('Qtyinpercentage', dat2);

          // //  rowin2 = params.node.rowIndex;
          // //  const colId = params.column.getId();

          //var qtyper: Number = Number(dat);
          //var rowNode = this.gridApi.getRowNode(rowin);
          //var oldda: any = params.data.Quantity;
          //var enwda: any = ((Number(this.labbatch) / 100) * dat).toFixed(7);
          //var unicost: any = params.data.UnitCost;
          //var updatedunicost: any = (enwda * unicost).toFixed(5);

          //rowNode.setDataValue('Quantity', String(enwda));
          //rowNode.setDataValue('Cost', String(updatedunicost));
          //rowNode.setDataValue('costinlb', String(updatedunicost));
          //rowNode.setDataValue('quantityinlb', String(enwda));


          var rowindata: any;
          var fla: any = 0;
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            if (rowNode.data.UnitName != '' && fla != 1) {
              rowindata = rowin;
              fla = 1;
              break;
            }
          }

          //rowin = 0;
          var rowNode = this.gridApi.getRowNode(rowindata);
          rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
          //var rowin2: any = params.node.rowIndex;
          //var rowNode2 = this.gridApi.getRowNode(rowin2);
          //rowNode2.setDataValue('Qtyinpercentage', String(qtyper.toFixed(7)));
          rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
          rowNode.setDataValue('Cost', String(rowNode.data.Cost));
          var fistrowdata: any = rowNode.data.Qtyinpercentage;

          var firstrowunicost: any = rowNode.data.UnitCost;
          //  var subvalue: any = (fistrowdata - dat).toFixed(7);
          var subvalue: any;
          subvalue = (100 - sumvar).toFixed(7);
          //this.formulaCost = String(sumvar);
          var unitcosttotal = 0;
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
          }
          this.TotalUnitCost = String(unitcosttotal.toFixed(5));
          var totcs: Number = sumvar * Number(this.labbatch);
          // this.TotalUnitCost = this.formulaCost;
         
          this.formulaCost = String((Number(unitcosttotal.toFixed(5)) / Number(this.labbatch)).toFixed(5));
          // this.TotalUnitCost = String(totcs.toFixed(5));
          if (subvalue <= 0.0000000) {
            rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
            rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
            rowNode.setDataValue('Cost', String(rowNode.data.Cost));
          }
          else {
            var rowNode = this.gridApi.getRowNode(rowindata);
            rowNode.setDataValue('Qtyinpercentage', String(subvalue));

            var enwda2: any = ((Number(this.labbatch) / 100) * subvalue).toFixed(7);
            var subcost: any = (enwda2 * firstrowunicost).toFixed(5)

            rowNode.setDataValue('Quantity', String(enwda2));
            rowNode.setDataValue('Cost', String(subcost));
            if (this.selectedunit == "g") {
              var cosinlb: any = Number(subcost * 453.592 / Number(this.labbatch)).toFixed(5);
            } else if (this.selectedunit == "Kg") {
              var cosinlb: any = Number(subcost * .453592 / Number(this.labbatch)).toFixed(5);
            }
            else {

              var cosinlb: any = Number((subcost) / Number(this.labbatch)).toFixed(5);
            }
            rowNode.setDataValue('costinlb', String(cosinlb));
            rowNode.setDataValue('quantityinlb', String(enwda2));
          }
          var totalquantity = 0;
          var totaper = 0;
          var costlb = 0;
          var unitcosttotal = 0;
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
          }
          this.TotalUnitCost = String(unitcosttotal.toFixed(5));
          
          this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
          }
          this.totaquantity = String(totalquantity.toFixed(5));
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
          }
          this.TotalPercentage = String(totaper.toFixed(5));
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            costlb = Number(costlb) + Number(rowNode.data.costinlb);

          }
          this.TotalCostInLB = String(costlb.toFixed(5));
          this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
          subvalue = 0;

        }

        this.rowindex = null;

        //let { rowsToDisplay } = this.gridApi.getModel();
        //this.rowData = [];
        //this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
        //this.gridApi.setRowData(this.rowData);



        var sumvar: any = 0;
        for (rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
          var rowNode = this.gridApi.getRowNode(rowin);
          sumvar = Number(sumvar) + Number(rowNode.data.Cost);
        }
        // this.formulaCost = String(sumvar);
        var totcs: Number = sumvar * Number(this.labbatch);
        //this.TotalUnitCost = String(totcs);
        rowin = 0;
        this.count = 1;
       
        this.gridApi.ensureIndexVisible(60, 'bottom');
      }
      
    }
    //this.gridApi.deselectAll();
    //let { rowsToDisplay } = this.gridApi.getModel();
    //this.rowData = [];
    //this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
    //this.gridApi.setRowData(this.rowData);
  
    this.rowindex = this.gridApi.getDisplayedRowCount();
    this.gridApi.ensureIndexVisible(60, 'bottom');
  }
  addRow() {

    if (this.labbatch == "0.00000" || this.labbatch == "") {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter labbatch size' } });
    }
    else {
      if (this.rowindex == 0) {}
      // let rowData = [];
      //this.gridApi.forEachNode(RowNode => rowData.push(RowNode.data));

      //this.gridApi.setRowData(rowData);
      //var selectedRow: any = this.rowindex;

      else if (this.rowindex != null) {
        this.selectedData = this.gridApi.getSelectedRows();
        var newData = {
          Step: '',
          INCIName: '',
          TradeName: '',
          GeneralItemcode: '',
          Qtyinpercentage: '',
          Quantity: '',
          UnitName: '',
          ItemCode:'',
          UnitCost: null,
          Cost: null,
          SupplierName: '',


        };
        this.gridApi.updateRowData({ add: [{ Step: '', INCIName: '', TradeName: '', GeneralItemcode: '', Qtyinpercentage: '', Quantity: '', UnitName: '', UnitCost: null, Cost: '', SupplierName: '', costinlb: '', quantityinlb: '', unitcostinlb: '' }], addIndex: this.rowindex });
        // this.gridApi.setRowData(this.rowData);
        //var newRowData: any = this.rowData.splice(this.rowindex, 0,newData);
        //var data = this.radiovalue;
        //this.gridApi.setRowData(this.rowData);
        //   this.gridApi.getRowNode(this.rowindex);
        this.gridApi.getRowNode(this.rowindex);
       
        //this.rowindex = null;
        this.gridApi.ensureIndexVisible(this.rowindex,'bottom');
      }
      else {
        this.gridApi.updateRowData({
          add: [{ Step: '', INCIName: '', TradeName: '', GeneralItemcode: '', Qtyinpercentage: '', Quantity: '', UnitName: '', UnitCost: null, Cost: '', SupplierName: '', costinlb: '', quantityinlb: '', unitcostinlb: '' }],
          addIndex: this.rowindex,

        
        });
        this.gridApi.getRowNode(this.rowindex);
        var rowdatacount1 = this.gridApi.getDisplayedRowCount();
        this.gridApi.ensureIndexVisible(rowdatacount1-1,'bottom');
        // var no = this.gridApi.refreshClientSideRowModel();
       // this.rowindex = null;
        this.count = 1;
        this.flag = 0;
      }
      //this.agGrid.api.updateRowData({
      //  add: [{ step: '', inciname: '', tradename: '', itemno: '', perc: '', qty: '', Unit: '', UnitCost: 0.00011, Cost: 0.00114, suppliername: ''}]
      //});
      //let { rowsToDisplay } = this.gridApi.getModel();
      //this.rowData = [];
      //this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
      
      //this.gridApi.setRowData(this.rowData);
      //this.gridApi.ensureIndexVisible(this.rowindex, 'bottom');
    }
   
 
    this.rowindex = null;
  }
  
 convert(str) {
  var mnths = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12"
  },
     date = str.split(" ");
   var day = date[1];

   var dat = [date[2], mnths[date[0]], day].join("-");
   return dat;
}
  generalmethod(generalvalues: any) {

    for (let item of generalvalues) {
      this.Class = item.Class
      this.SubClass1 = item.SubClass
      this.rawsubcateload();
      
      this.customername = item.CusName
      this.customercode = item.CusCode

      this.ApprovedBy = item.ApprovedBy
      this.AddedDT = item.AddedDT;
      this.AddedDT = formatDate(new Date(item.AddedDT), 'yyyy-MM-dd', 'en-US');
    // var apprdat= this.convert(item.ApprovedDT)
      this.Approved = item.Approved;
     // this.ApprovedDT = apprdat
     //this.ApprovedDT = formatDate(new Date(item.ApprovedDT), 'yyyy-MM-dd', 'en-US');
     // this.AddedDT = item.AddedDT
      this.ApprovedDT = item.ApprovedDT
      this.ProjectName = item.ProjectName
      this.ShelfLife = item.ShelfLife
      this.ShelfLifeUnit = item.ShelfLifeUnit
      this.okpilot = item.MayPilot
      if (this.okpilot == "True") {
        this.okpilot = "1"
        this.okpilot2="1"
        this.isDisabledappr = false
      }
      else {
        this.okpilot = "0"
        this.okpilot2 = "0"
        this.isDisabledappr=true
      }
      this.okproduce = item.MayProduce
      if (this.okproduce == "True") {
        this.okproduce = "1"
        this.okproduce2 = "1"
        this.isDisabledappr2 = false
      }
      else {
        this.okproduce = "0"
        this.okproduce2 = "0"
        this.isDisabledappr2 = true
      }
      
      
      this.MaxPilotQty = item.MaxPilotQty
      this.TradeName = item.TradeName
      this.LabRefNo = item.LabRefNo
      this.Status = item.Status
      this.TotalCostInLB = item.TotalCostInLB 
      this.oldcostlb = item.TotalCostInLB       //
      this.TotalCostInkg = item.TotalCostInkg
      this.TotalPercentage = item.TotalPercentage
      var TotalUnitCostsa: Number =Number(item.formulaCost);
      this.TotalUnitCost = (TotalUnitCostsa.toFixed(5)).toString();
      
      this.oldtotalcost = item.formulaCost        //
      this.TotalUnitCosted = item.formulaCost
      this.Yield = item.Yield
      var formulaCostsa: Number = Number(item.TotalUnitCost);
      this.formulaCost = (formulaCostsa.toFixed(5)).toString();
      this.oldunitcost = item.TotalUnitCost   //
      this.formulaNetQty = item.formulaNetQty
      this.SupercededBy = item.SupercededBy
      this.FormulaTotalQTY = item.FormulaTotalQTY
      this.labbatch = item.FormulaTotalQTY
      this.oldlabvalue = item.FormulaTotalQTY
      this.totaquantity = this.labbatch
      this.oldtotalqty = item.FormulaTotalQTY       //
      this.companyowned = item.CompanyOwned
      this.ManualSG = item.ManualSG
      this.selectedunit = item.FormulaUnit    
      this.oldunit = item.FormulaUnit              //
      //this.selectedunit = item.CustomerSpecUnit;
      this.useFormulation = item.useFormulation
      this.ph = item.ph
      this.odor = item.odor
      this.appearence = item.appearence
      this.formulationDoes = item.formulationDoes
      this.WhoUse = item.WhoUse
      this.FormulaSpecsNotes = item.FormulaSpecsNotes
      this.AboutFormulation = item.AboutFormulation
      this.viscosity = item.viscosity
      this.FormulaNotes = item.FormulaNotes

      this.Maxpilotunit = item.MaxPilotUnit
      this.highspecificgravity = item.HighSpecificGravity
      this.supercededdate = item.SupercededDate
 
    
    }
  }
  handleRowDataChanged(event)
  {
  
   // this.gridOptions.api.ensureIndexVisible(index, 'bottom');
  }
  blurEventsg(event: any) {
    var defsg: Number = Number(event.target.value);
    this.ManualSG = (defsg.toFixed(3)).toString();
    if (Number(this.ManualSG) < 0 || isNaN(Number(this.ManualSG))) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter only numbers or integers' } });
      this.ManualSG = "0.000";
    }
    this.SGcalculation(this.ManualSG).subscribe((sgcalcload) => {
      console.warn("SGCalcload", sgcalcload)
      this.sgcalcload = sgcalcload
      var sg: Number = Number(this.sgcalcload)
      this.Lbgal = sg.toFixed(3).toString();
    })
  }
  blurEventhighsg(event: any) {
    var defhighsg: Number = Number(event.target.value);
    this.highspecificgravity = (defhighsg.toFixed(3)).toString();
    if (Number(this.highspecificgravity) < 0 || isNaN(Number(this.highspecificgravity))) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter only numbers or integers' } });
      this.highspecificgravity = "0.000";
    }
  }
  blurEventshelflife(event: any) {
    var defshelf: Number = Number(event.target.value);
    this.ShelfLife = (defshelf.toFixed(3)).toString();
    if (Number(this.ShelfLife) < 0 || isNaN(Number(this.ShelfLife))) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter only numbers or integers' } });
      this.ShelfLife = "0";
    }
  }
  rawsubcateload()
  {
    this.rawsubcategoryload(this.Class).subscribe((rawsubcategoryload) => {
      console.warn("rawsubcategoryload", rawsubcategoryload)
      this.datarawsubcategoryload = rawsubcategoryload
      this.datarawsubcategoryload.forEach(item => {
        if (item.SubCategory == this.SubClass1) {
          this.SubClass = item.SubCategory;
        }
    })
   
  
    });
  }
  FormulationLookup_coasave() {
    this.dataformListcoa[0] = ([{
      PDRNo: this.PDRno,
      FormulaCode: this.formulacode,
      Description: this.formulaname,
      LabRefNo: this.LabRefNo,
      Customer: this.customername,
      LabLotNumber: this.labatchnumber,
      //AnalysisDate: this.AnalysisDate,
      //ExpiryDate: this.ExpiryDate,
      //CertificationDate: this.CertificationDate,
      //TrialNo:,
      //StorageCondition:,
      //UserName: this.username,
      //ChemCreatedBy:,
      //ChemCreatedDt:,
      //ChemVerifieddBy:,
      //ChemVerifieddDt:,
      //ChemApprovedBy:,
      //ChemApproveddDt:,
      //MicroCreatedDt:,
      //MicroVerifieddBy:,
      //MicroVerifieddDt:,
      //MicroApproveddBy:,
      //MicroApproveddDt:,

    }]);
    this.coagrid(this.datachem1);
  }
  coagrid(Formuladata2: any) {
    this.i = 0;
    this.j = 0;
    this.FormulagridListcoa = [];
    for (let item2 of Formuladata2) {
      this.FormulagridListcoa[this.i] = ([{
        Testnamesafety: item2.TestName,
        comentssafety: item2.Comments,
        p_Size: item2.Size
      }]);
      this.i++;

    }

  }
  formulationload(formulcode: string, lab_batch: string, unitval: string, operat: string) {
    //let { rowsToDisplay } = this.gridApi.getModel();
    //this.rowData = [];
    //this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
    //this.Formulagridvalues(this.rowData);
    //this.formgriddata = JSON.stringify(this.FormulagridList);
  //  let { rowsToDisplay } = this.gridApi.getModel();
  //  let rowData = [];
    //this.gridApi.forEachNode(RowNode => rowData.push(RowNode.data));
 //   this.gridApi.setRowData(rowData);
   // var Formulationgriddat: any = JSON.stringify(rowData);
    var formulcod: string = formulcode;
    var labbac: string = lab_batch;
    var unival: string = unitval;
    var oper: string = operat;
   
    let params1 = new HttpParams().set('Formulacode', formulcod)
     .set('formulagridjson', this.formgriddata)
      .set('labbatch', labbac)
      .set('unitname', unival)
      .set('operation', oper);
    
    return this.http.get("https://formulalookupwebservice1.azurewebsites.net/displayformulation.json", { params: params1 })
  }
  
  formulationload2(formulcode: string, lab_batch: string, unitval: string, operat: string) {
    //let { rowsToDisplay } = this.gridApi.getModel();
    //this.rowData = [];
    //this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
    //this.Formulagridvalues(this.rowData);
    this.formgriddata = JSON.stringify(this.FormulagridList);
    //  let { rowsToDisplay } = this.gridApi.getModel();
    //  let rowData = [];
    //this.gridApi.forEachNode(RowNode => rowData.push(RowNode.data));
    //   this.gridApi.setRowData(rowData);
    // var Formulationgriddat: any = JSON.stringify(rowData);
    var formulcod: string = formulcode;
    var labbac: string = lab_batch;
    var unival: string = unitval;
    var oper: string = operat;
    let params1 = new HttpParams().set('Formulacode', formulcod)
      .set('formulagridjson', this.formgriddata)
      .set('labbatch', labbac)
      .set('unitname', unival)
      .set('operation', oper);
    return this.http.get("https://formulalookupwebservice1.azurewebsites.net/displayformulation.json", { params: params1 })
  }


  loadcoachemistry() {
    var Formulacode: string = 'Formula 1002.Ver 06';
    var storagecondition: string = '2.0 oz white jar';
    var TrialNo: string = 'Trial 1';
    var lablotnumber: string = 'Formula 1002.Ver 06-LB-1-101519-admin';
    let params1 = new HttpParams().set('Formulacode', Formulacode).set('storagecondition', storagecondition).set('TrialNo', TrialNo).set('lablotnumber', lablotnumber);
    return this.http.get("https://formulalookupwebservice10.azurewebsites.net/LoadCOA_Chemistry", { params: params1 })
  }
  loadcoamicrobiolodgy() {
    var Formulacode: string = 'Formula 1002.Ver 06';
    var storagecondition: string = '2.0 oz white jar';
    var TrialNo: string = 'Trial 1';
    var lablotnumber: string = 'Formula 1002.Ver 06-LB-1-101519-admin';
    let params1 = new HttpParams().set('Formulacode', Formulacode).set('storagecondition', storagecondition).set('TrialNo', TrialNo).set('lablotnumber', lablotnumber);
    return this.http.get("https://formulalookupwebservice10.azurewebsites.net/LoadMicrobiology_Chemistry", { params: params1 })
  }
  loadchemistry(Pdrno) {
    var pdr: string = Pdrno;
    let params1 = new HttpParams().set('pdrno', pdr);
    return this.http.get("https://smartformulatorpdrwebservice4.azurewebsites.net/FillPDRCOAChemistry", { params: params1 })
  }
  loadcoaaudit(approve: string) {
    var task= approve;
    var Formulacode = 'Formula 1002.Ver 06';
    var storagecondition: string = '2.0 oz white jar';
    var TrialNo: string = 'Trial 1';
    var lablotnumber: string = 'Formula 1002.Ver 06-LB-1-101519-admin';
    let params1 = new HttpParams().set('task', task).set('Formulacode', Formulacode).set('storagecondition', storagecondition).set('TrialNo', TrialNo).set('lablotnumber', lablotnumber);
    return this.http.get("https://formulalookupwebservice10.azurewebsites.net/Loadcoaauditgrid", { params: params1 })
  }
  //Coa_Delete() {
   
  //  let params1 = new HttpParams().set('PDRNo', PDRNo).set('ProjectName', ProjectName);
  //  return this.http.get("https://formulalookupwebservice10.azurewebsites.net/Deletecoa", { params: params1, responseType: 'text' })
  //}
  loadmicrobiology(Pdrno) {
    var pdr: string = Pdrno;
    let params1 = new HttpParams().set('pdrno', pdr);
    return this.http.get("https://smartformulatorpdrwebservice4.azurewebsites.net/FillPDRCOAMicrobiology", { params: params1 })
  }
  proceduretext(formulcode: string) {
    var formulcod: string = formulcode;

    let params1 = new HttpParams().set('Formulacode', formulcod);
    return this.http.get("https://smartformulatorformulalookupwebservice4.azurewebsites.net/PrintProcedureFromText", { params: params1, responseType: 'text' })
  }
  convertunit(unname: string,rawcode:string,selectedunit:string) {
    var gridunit: string = unname;
    var rawvalue: string = rawcode;
    var selectedvalue: string = selectedunit
    let params1 = new HttpParams().set('GridUnit', gridunit).set('RawCode', rawvalue).set('Main_Unit', selectedvalue);
    return this.http.get("https://searchformulawebservice.azurewebsites.net/converttounit", { params: params1, responseType: 'text' })
  }
  proceduretextgrid(formulcode: string) {
    var formulcod: string = formulcode;

    let params1 = new HttpParams().set('Formulacode', formulcod);
    return this.http.get("https://smartformulatorformulalookupwebservice4.azurewebsites.net/PrintProcedureFromTextgrid", { params: params1, })
  }
  loadassignusers(projectnam: string) {

    var proname = projectnam;
    let params1 = new HttpParams().set('ProjectName', proname);
    return this.http.get("https://smartformulatorpdrwebservice2.azurewebsites.net/Loadassigningusers", { params: params1 })
  }
  onRowDragEnd(event:any) {
    let { rowsToDisplay1 } = this.gridApi.getModel();
    this.rowData = [];
    this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
    this.gridApi.setRowData(this.rowData);
    this.rowdrag = event.type;
    
      if (this.count != 1) {
        //this.firstdata= rowNode.data.Qtyinpercentage;
        var rowin: any = 0;
        rowin = this.rowindex


        // this.gridApi.refreshCells(params);
        if (rowin != null) {
          var sumvar: any = 0;
          var firstsumvar: any = 0;
          rowin = 1;
          var i = 1;
          var rowdatacount = this.gridApi.getDisplayedRowCount();
          var flaa: any = 0;
          var rowindata1: any
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            if (rowNode.data.UnitName != '' && flaa != 1) {
              rowindata1 = rowin;
              rowindata1 = rowindata1 + 1;
              flaa = 1;
              break;
            }
          }
          //for (let rowin = 1; rowin <= this.rowData.length; rowin++) 
          for (let rowin = rowindata1, i = rowindata1; i <= rowdatacount - 1; rowin++, i++) {

            var rowNode = this.gridApi.getRowNode(rowin);

            sumvar = Number(sumvar) + Number(rowNode.data.Qtyinpercentage);

          }
          var firstrowNode = this.gridApi.getRowNode(0);
          // rowin = params.node.rowIndex;
          var rowNo = this.gridApi.getRowNode(rowin);



          //  else if (Number(100 - Number(sumvar)) >= Number(firstrowNode.data.Qtyinpercentage)  )
          //else if (params.newValue >= firstrowNode.data.Qtyinpercentage && (100-sumvar)<)



          //var dat: any = params.newValue;
          //var adt2: any = Number(params.newValue)
          //var dat2: any = String(adt2.toFixed(7));
          //var rowNode = this.gridApi.getRowNode(rowin);

          //rowNode.setDataValue('Qtyinpercentage', dat2);

          // //  rowin2 = params.node.rowIndex;
          // //  const colId = params.column.getId();

          //var qtyper: Number = Number(dat);
          //var rowNode = this.gridApi.getRowNode(rowin);
          //var oldda: any = params.data.Quantity;
          //var enwda: any = ((Number(this.labbatch) / 100) * dat).toFixed(7);
          //var unicost: any = params.data.UnitCost;
          //var updatedunicost: any = (enwda * unicost).toFixed(5);

          //rowNode.setDataValue('Quantity', String(enwda));
          //rowNode.setDataValue('Cost', String(updatedunicost));
          //rowNode.setDataValue('costinlb', String(updatedunicost));
          //rowNode.setDataValue('quantityinlb', String(enwda));


          var rowindata: any;
          var fla: any = 0;
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            if (rowNode.data.UnitName != '' && fla != 1) {
              rowindata = rowin;
              fla = 1;
              break;
            }
          }

          //rowin = 0;
          var rowNode = this.gridApi.getRowNode(rowindata);
          rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
          //var rowin2: any = params.node.rowIndex;
          //var rowNode2 = this.gridApi.getRowNode(rowin2);
          //rowNode2.setDataValue('Qtyinpercentage', String(qtyper.toFixed(7)));
          rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
          rowNode.setDataValue('Cost', String(rowNode.data.Cost));
          var fistrowdata: any = rowNode.data.Qtyinpercentage;

          var firstrowunicost: any = rowNode.data.UnitCost;
          //  var subvalue: any = (fistrowdata - dat).toFixed(7);
          var subvalue: any;
          subvalue = (100 - sumvar).toFixed(7);
          this.formulaCost = String(sumvar);
          var unitcosttotal = 0;
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
          }
          this.TotalUnitCost = String(unitcosttotal.toFixed(5));
          var totcs: Number = sumvar * Number(this.labbatch);
          // this.TotalUnitCost = this.formulaCost;
          
          this.formulaCost = String((Number(unitcosttotal.toFixed(5)) / Number(this.labbatch)).toFixed(5));
          // this.TotalUnitCost = String(totcs.toFixed(5));
          if (subvalue <= 0.0000000) {
            rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
            rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
            rowNode.setDataValue('Cost', String(rowNode.data.Cost));
          }
          else {
            var rowNode = this.gridApi.getRowNode(rowindata);
            rowNode.setDataValue('Qtyinpercentage', String(subvalue));

            var enwda2: any = ((Number(this.labbatch) / 100) * subvalue).toFixed(7);
            var subcost: any = (enwda2 * firstrowunicost).toFixed(5)

            rowNode.setDataValue('Quantity', String(enwda2));
            rowNode.setDataValue('Cost', String(subcost));
            rowNode.setDataValue('costinlb', String(subcost));
            rowNode.setDataValue('quantityinlb', String(enwda2));
          }
          var totalquantity = 0;
          var totaper = 0;
          var costlb = 0;
          var unitcosttotal = 0;
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
          }
          this.TotalUnitCost = String(unitcosttotal.toFixed(5));
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
          }
          this.totaquantity = String(totalquantity.toFixed(5));
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
          }
          this.TotalPercentage = String(totaper.toFixed(5));
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            costlb = Number(costlb) + Number(rowNode.data.costinlb);

          }
          this.TotalCostInLB = String(costlb.toFixed(5));
          this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
          subvalue = 0;

        }

        this.rowindex = null;

        let { rowsToDisplay } = this.gridApi.getModel();
        this.rowData = [];
        this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
        this.gridApi.setRowData(this.rowData);



        var sumvar: any = 0;
        for (rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
          var rowNode = this.gridApi.getRowNode(rowin);
          sumvar = Number(sumvar) + Number(rowNode.data.Cost);
        }
        // this.formulaCost = String(sumvar);
        var totcs: Number = sumvar * Number(this.labbatch);
        //this.TotalUnitCost = String(totcs);
        rowin = 0;
        this.count = 1;
      }
    
    this.gridApi.deselectAll();
    let { rowsToDisplay } = this.gridApi.getModel();
    this.rowData = [];
    this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
    this.gridApi.setRowData(this.rowData);
   
    this.rowindex = null;
  //console.log('onRowDragEnd', e);
}
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.ensureIndexVisible(60, 'bottom');
   // this.columnApi = params.columnApi;
  }
  
  onGridReadyone(params) {
    this.gridApione = params.api;
    if (this.scalefactor != null && this.scalefactor != undefined && this.flag1 == 1) {
      this.gridApione.setRowData(this.rowDatascalability);
      this.gridApione.getModel();
      this.Formulagridvalues(this.rowDatascalability);
      this.rowDatascalability = [];
      this.formulationload2(this.formulacode, this.scalefactor, this.units, this.operation2).subscribe((formulationload) => {
        console.warn("formulaload", formulationload)
        this.rowDatascalability = formulationload

        this.wait(2000);
        // this.gridApione.forEachNode(RowNode => this.rowDatascalability.push(RowNode.data));
        this.gridApione.setRowData(this.rowDatascalability);
        var rowdatacount = this.rowDatascalability.length;
        //var scalfact = (val / Number(this.labbatch));
        for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
          var rowNode = this.gridApione.getRowNode(rowin);
          var qtynew: any = (Number(rowNode.data.Quantity)).toFixed(7);
          //var qtynew: any = (Number(this.scalefactor) * Number(rowNode.data.Quantity)).toFixed(7);
          //var rowNode = this.gridApi.getRowNode(rowin);
          //totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
          rowNode.setDataValue('Quantity1', String(qtynew));
          rowNode.setDataValue('Cost1', String(rowNode.data.Cost));
          rowNode.setDataValue('UnitCost1', String(rowNode.data.UnitCost));
        }
        var totalquantity12 = 0;
        var totaper = 0;
        var costlb1 = 0;
        var costtotalnew: Number = 0;
        for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
          var rowNode = this.gridApione.getRowNode(rowin);
          totalquantity12 = Number(totalquantity12) + Number(rowNode.data.Quantity1);
        }
        this.totaquantity1 = String(totalquantity12.toFixed(5));
        for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
          var rowNode = this.gridApione.getRowNode(rowin);
          costtotalnew = Number(costtotalnew) + Number(rowNode.data.Cost1);
        }
        this.formulaCost1 = String(costtotalnew.toFixed(5));
        var unitcosttot = (Number(costtotalnew) / Number(this.scalefactor));
        this.TotalUnitCost1 = String(unitcosttot.toFixed(5));
        // this.TotalUnitCost1 = this.TotalUnitCost;
        this.TotalCostInLB1 = this.TotalCostInLB;
        this.unit1 = this.units;
        //this.unit1 = this.unit;
        //this.totcost1 = Number(this.scalefactor) * Number(this.TotalUnitCost);
        //this.formulaCost1 = String(this.totcost1.toFixed(5));
        this.scalefactnew = Number(this.scalefactor) / Number(this.labbatch);
        this.scalef = String(this.scalefactnew.toFixed(5));
        this.gridApione.ensureIndexVisible(60, 'bottom');
        //this.scalefactor = null;
        // this.columnApi = params.columnApi;
      })
      //this.scalefactor = null;
    }
    else {
      this.rowDatascalability = [];
      this.gridApione.setRowData(this.rowDatascalability);
    }
  }


  generalformulationload(formulcode: string) {
    var formulcod: string = formulcode;

    let params1 = new HttpParams().set('FormulaCode', formulcod);
    return this.http.get("https://smarformulatorformulalookupwebservice3.azurewebsites.net/Displayformuladatas", { params: params1, })
  }
  manuprocreview(formulcode: string) {
    var formulcod: string = formulcode;

    let params1 = new HttpParams().set('FormulaCode', formulcod);
    return this.http.get("https://smarformulatorformulalookupwebservice3.azurewebsites.net/BindMFPReview", { params: params1, })
  }
  marketart(formulacode: string) {
    var formulcod: string = formulacode;

    let params1 = new HttpParams().set('FormulaCode', formulcod);
    return this.http.get("https://smartformulatorformulalookupwebservice5.azurewebsites.net/LoadMarketingArtifacts", { params: params1, })
  }
  Marketing_indicator() {

    return this.http.get("https://smartformulatorformulalookupwebservice5.azurewebsites.net/FrmMarketingIndicator_Load");
  }
  uniddataload() {
    return this.http.get("https://smartformulatorformulalookupwebservice6.azurewebsites.net/LoadUnitTable");

                    
  }
  rawmaterialgrid() {

    return this.http.get("https://smartformulatorformulalookupwebservice6.azurewebsites.net/dgFormulation_Loadsubgrid");
  }
  rawsubcategoryload(categoryname: string) {
    var catename: string = categoryname;
    let params1 = new HttpParams().set('CategoryName', catename);
    return this.http.get("https://smartformulatorrawmaterialwebservice4.azurewebsites.net/LoadSubCategorycmb", { params: params1 })
  }
  Audittrackingload(formulcode: string) {
    var formulcod: string = formulcode;



    let params1 = new HttpParams().set('Formulacode', formulcod);
    return this.http.get("https://smartformulatorformulalookupwebservice6.azurewebsites.net/Fillauditgrid", { params: params1 })
  }
  Labbatchdetailsload(formulacode: string) {
    var formulcod: string = formulacode;
    let params1 = new HttpParams().set('formulacode', formulcod);
    return this.http.get("https://formulalookuppilotlabbatchwebservice.azurewebsites.net/Load_Lab_BatchDetails", { params: params1 })
  }
  SGcalculation(sg: string) {
    var sgoverride: string = sg;
    let params1 = new HttpParams().set('txtSGOverride', sgoverride);
    return this.http.get("https://smarformulatorrawmaterialwebservice7.azurewebsites.net/sgcalculation", { params: params1, })
  }
  qctabload(formulacode: string) {
    var Formula = formulacode;
    let params1 = new HttpParams().set('FormulaCode', Formula);
    return this.http.get("https://formulalookupwebservice15.azurewebsites.net/loadQCTABLE", { params: params1, })

  }
  //physicalstabilityload(formcode:string) {
  //  var formulacode: string = formcode;
  //  var labbatch: string = formname;
  //  let params1 = new HttpParams().set('Formulacode', formulacode).set('LabBatch', labbatch);
  //  return this.http.get("https://formulalookupwebservice13.azurewebsites.net/stabilityfilldetails", { params: params1 })
  //}
  componentload(formcode: string) {
    var formulacode: string = formcode;
    let params1 = new HttpParams().set('Formulacode', formulacode);
    return this.http.get("https://formulalookupwebservice13.azurewebsites.net/componentfill", { params: params1 })
  }
  phyAuditload(formcode: string, formname: string) {
    var formulacode: string = formcode;
    var formulaname: string = formname;
    let params1 = new HttpParams().set('Formulacode', formulacode).set('Formulaname', formulaname);
    return this.http.get("https://formulalookupwebservice13.azurewebsites.net/auditdocload", { params: params1 })
  }
  labbatchload(formcode: string) {
    var formulacode: string = formcode;
    let params1 = new HttpParams().set('Formulacode', formulacode);
    return this.http.get("https://formulastabiltywebapplication.azurewebsites.net/LoadLabBatch", { params: params1 })
  }
  storageload(formcode: string) {
    var formulacode: string = formcode;
    let params1 = new HttpParams().set('Formulacode', formulacode);
    return this.http.get("https://formulastabiltywebapplication.azurewebsites.net/LoadLabBatch", { params: params1 })
  }
  //coagridload(formulcode: string) {
  //  var formulcod: string = formulcode;

  //  var chkApproveCOA: string = "";
  //  var cmbTrial:string = Trial 5 & cmbStorageCondition=5C & cmbLab=Formula 1002.Ver 06 - LB - 1 - 101519 - admin & txtPDR=2011 - 1120 & txtCOACustomer="" & txtCOAApprovedBy="" & txtCOADesignation=""

  //  let params1 = new HttpParams().set('Formulacode', formulcod);
  //  return this.http.get("http://24.187.220.60/Smartformulator_Formulalookup_Webservice7/fillFormulaCOA", { params: params1 })
  //}
  onRowPrepared(e: any) {
    if (e.rowIndex === 0) {
      e.rowElement.addClass("myColor");
    }
  }
  //onCellPrepared(e: any) {
  //  if (e.rowType === 'header') {
  //    e.cellElement.css("backgroundColor", "blue");
  //  }
  //}
  loadgrid(rawgriddataLoadval: any) {
    this.Datashare.sendrawtable(rawgriddataLoadval);
  }
  triggerSomeEvent(event:any) {
    
    this.isDisabledappr = !this.isDisabledappr;
    if (this.isDisabledappr == true) {
      this.okpilot = "0";
      this.okpilot2 = "0"
    }
    else {
      this.okpilot = "1"
      this.okpilot2 = "1"
    }
    return;
  
  }
  triggerSomeEvent1(event: any) {
    this.isDisabledappr2 = !this.isDisabledappr2;
    if (this.isDisabledappr2 == true) {
      this.okproduce = "0";
      this.okproduce2 = "0"
    }
    else {
      this.okproduce = "1"
      this.okproduce2 = "1"
    }
    return;
  }
  
  blurEvent(event: any) {

    this.unitvalue = this.selectedunit;
    this.labbatchh = event.target.value;
    this.isLoading = true;
    if (Number(this.labbatchh) <= 0.00000 || isNaN(Number(this.labbatchh))) {

      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Please enter valid digits' } });
      this.labbatch = this.oldlabvalue;
  
      this.formulationload(this.formulacode, this.labbatch, this.unitvalue, this.operation2).subscribe((formulationload) => {
        
        console.warn("formulaload", formulationload)
        this.rowData = formulationload
       // this.wait(7000);
        this.isLoading = false;
        var unitcosttotal = 0;
        var costlb = 0;
        this.gridApi.setRowData(this.rowData);
        var rowdatacount = this.gridApi.getDisplayedRowCount();
        for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
          var rowNode = this.gridApi.getRowNode(rowin);
          unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
        }
        this.TotalUnitCost = String(unitcosttotal.toFixed(5));
        var totcs: Number = sumvar * Number(this.labbatch);
        // this.TotalUnitCost = this.formulaCost;
       
        this.formulaCost = String((Number(unitcosttotal.toFixed(5)) / Number(this.labbatch)).toFixed(5));
        var totalquantity = 0;
        for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
          var rowNode = this.gridApi.getRowNode(rowin);

          totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
        }
        this.totaquantity = String(totalquantity.toFixed(5));
        for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
          var rowNode = this.gridApi.getRowNode(rowin);
          costlb = Number(costlb) + Number(rowNode.data.costinlb);

        }
        this.TotalCostInLB = String(costlb.toFixed(5));
        this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
      })
    }
    
    else {
      this.onBtShowLoading();
      this.labbatch = (Number(this.labbatchh).toFixed(5)).toString();
      var totdata: Number = parseFloat(this.labbatch) * parseFloat(this.TotalUnitCosted)
      this.TotalUnitCost = String(totdata);
      this.gridApi.getModel();
     this.rowData = [];
      this.gridApi.forEachNode(RowNode =>  this.rowData.push(RowNode.data));
      this.Formulagridvalues( this.rowData);
      this.formgriddata = JSON.stringify(this.FormulagridList);
      this.formulationload(this.formulacode, this.labbatchh, this.unitvalue, this.operation2).subscribe((formulationload) => {
        this.isLoading = false;
        console.warn("formulaload", formulationload)
        this.rowData = formulationload
      //  this.wait(7000);
        var unitcosttotal = 0;
        var costlb = 0;
        this.gridApi.setRowData(this.rowData);
        var rowdatacount = this.gridApi.getDisplayedRowCount();
        for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
          var rowNode = this.gridApi.getRowNode(rowin);
          unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
        }
        this.TotalUnitCost = String(unitcosttotal.toFixed(5));
        var totcs: Number = sumvar * Number(this.labbatch);
        // this.TotalUnitCost = this.formulaCost;
        
        this.formulaCost = String((Number(unitcosttotal.toFixed(5)) / Number(this.labbatch)).toFixed(5));
        var totalquantity = 0;
        for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
          var rowNode = this.gridApi.getRowNode(rowin);

          totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
        }
        this.totaquantity = String(totalquantity.toFixed(5));
        for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
          var rowNode = this.gridApi.getRowNode(rowin);
          costlb = Number(costlb) + Number(rowNode.data.costinlb);

        }
        this.TotalCostInLB = String(costlb.toFixed(5));
        this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
      })



      this.newData = [{
        Step: 'b',
        INCIName: 'Deionized',
        TradeName: 'Deionized Water',
        GeneralItemcode: '0000-3456-2472',
        Qtyinpercentage: '10.3838099',
        Quantity: '10.3838099',
        UnitName: 'g',
        UnitCost: 0.00011,
        Cost: 0.00114,
        SupplierName: 'American Distilling & Mfg.',
      },];


      this.gridApi.setRowData(this.rowData);



      var unitcosttotal = 0;
      var sumvar: any = 0;
      var firstsumvar: any = 0;
    }
    
  }

  blurEventunit(event: any) {
   
    this.unitvalue = this.selectedunit;
    this.isLoading = true;
    this.gridApi.getModel();
    this.rowData = [];
    this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
    this.Formulagridvalues(this.rowData);
    this.formgriddata= JSON.stringify(this.FormulagridList);
  //   = JSON.parse(formgrid);

    this.formulationload(this.formulacode, this.labbatch, this.unitvalue, this.operation2).subscribe((formulationload) => {
      this.isLoading = false;
      console.warn("formulaload", formulationload)
      this.rowData = formulationload


      var unitcosttotal = 0;
      var costlb = 0;
      this.gridApi.setRowData(this.rowData);
      var rowdatacount = this.gridApi.getDisplayedRowCount();
      var sumvar: any = 0;
      for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
        var rowNode = this.gridApi.getRowNode(rowin);
        unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
      }
      this.TotalUnitCost = String(unitcosttotal.toFixed(5));
      var totcs: Number = sumvar * Number(this.labbatch);
      // this.TotalUnitCost = this.formulaCost;
      this.formulaCost = String((Number(unitcosttotal.toFixed(5)) / Number(this.labbatch)).toFixed(5));
      for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
        var rowNode = this.gridApi.getRowNode(rowin);
        costlb = Number(costlb) + Number(rowNode.data.costinlb);

      }
      this.TotalCostInLB = String(costlb.toFixed(5));
      this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
    })



    this.newData = [{
      Step: 'b',
      INCIName: 'Deionized',
      TradeName: 'Deionized Water',
      GeneralItemcode: '0000-3456-2472',
      Qtyinpercentage: '10.3838099',
      Quantity: '10.3838099',
      UnitName: 'g',
      UnitCost: 0.00011,
      Cost: 0.00114,
      SupplierName: 'American Distilling & Mfg.',
    },];
    

  }
  setunitdata(unitdatalo_data) {
    this.confactor = unitdatalo_data.ConvFactor;

  }
//  editabledata(): boolean  {
//    if (this.radiovalue == "1") {
//      return true;
//    }
//    else { return false;}
//  }
  changecolor(): string
{
    if ( this.radiochange  == 1) {
      return "Lightblue";
    }
  

  }
  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
//  editabledata2(): boolean {
//    if (this.radiovalue == "2") {
//      return true;
//    }
//    else { return false; }
//  }
  changecolor2(): string {
    if (this.radiochange == 2) {
      return "Lightblue";
    }
    
  }
  radioChange(event) {
    this.radiochange = event.value;
    if (this.radiochange == 1) {
      this.percentgrid();
    }
    else {
      this.percentqty();
    }
  }
  percentgrid() {
   // this.columnDefs = null;
    this.gridApi.setColumnDefs(this.columnDefsforper);
    this.gridApi.redrawRows();
    this.gridApi.flashCells({
      columns: ['Qtyinpercentage', 'Quantity'],
    });
   // this.columnDefs = this.columnDefsforper;
  }

  percentscalabilitygrid() {
    // this.columnDefs = null;
    this.gridApione.setColumnDefs(this.columnDefs1forper);
    this.gridApione.redrawRows();

  }

  percentqty() {
    this.gridApi.setColumnDefs(this.columnDefsforqty);
    this.gridApi.redrawRows();
    this.gridApi.flashCells({
      columns: ['Qtyinpercentage', 'Quantity'],
    });
    //this.columnDefs = null;
    //this.columnDefs = this.columnDefsforqty;
  }
  ClearData() {
    this.loading = false;
    this.customercode = "";
    this.Isformatlabbatch1 = false;
    this.Isformatlabbatch2 = true;
    this.Isformatstorage1 = false;
    this.Isformatstorage2 = true;
    this.issearchformula = true;
    this.issearchformulasave = false;
    this.okpilot = '0'
    this.okproduce = '0';
    this.okpilot2 = '0'
    this.okproduce2 = '0';
    this.isDisabledappr = true;
    this.active = "1";
    this.rowdrag = "";
    this.issearchform = false;
    this.customername = '';
    this.ApprovedDT = new Date().toISOString().split('T')[0];
    this.supercededdate = new Date().toISOString().split('T')[0];
    this.ApprovedBy = '';
    this.flag1 = 0;
   
    this.AddedDT = '';
    this.AddedDT = '';
    
    //  this.ApprovedDT = formatDate(new Date(item.ApprovedDT), 'yyyy-MM-dd', 'en-US');
    //this.AddedDT = item.AddedDT
    //this.ApprovedDT = item.ApprovedDT
    this.ProjectName = '';
    this.formulacode = '';
    this.formulaname = '';
    this.labref = '';
    this.PDRno = '';
    this.SubClass = '';
    this.SubClass1 = '';
    this.Class = 'Additive';
    this.rowData = '';
    this.MaxPilotQty = '0'
    this.TradeName = ''
    this.LabRefNo = ''
    this.Status = 'A-Active'
    this.TotalCostInLB ='0'
    this.TotalCostInkg = '0.00000'
    this.TotalPercentage = '0'
    this.TotalUnitCost = '0'
    this.TotalUnitCosted = ''
    this.Yield = '100'
    this.formulaCost = '0.00000'
    this.formulaNetQty = '0.00000'
    this.SupercededBy ='admin'
    this.FormulaTotalQTY = '0.00000'
    this.labbatch = ''
    this.totaquantity = ''

    this.totaquantity1 = ''
    this.unit1 = ''
    this.formulaCost1 = ''
    this.scalef = ''
    this.TotalUnitCost1 = ''
    this.TotalCostInLB1 = ''

    this.companyowned = 'Company-Owned'
    this.ManualSG = '0'
    this.Maxpilotunit='g'
    this.selectedunit = 'g'
    this.AudittrackData = '';
    this.totaquantity = '0.00000';
    this.selectedunit = 'g';
    this.labbatch = '0.00000'
    this.selectedData = null;
    this.rowindex = null;
    this.highspecificgravity = '0';
    this.ShelfLife = '0';
    this.ShelfLifeUnit = 'Day(s)';
    this.rowData = null;
    this.Lbgal = '';
    this.AboutFormulation = '';
    this.useFormulation = '';
    this.WhoUse = '';
    this.formulationDoes = '';
    this.odor = '';
    this.ph = '';
    this.viscosity = '';
    this.appearence = '';
    this.FormulaSpecsNotes = '';
    this.rowData='';
}
onCellfirstValueChanged(params)
{

  var rowdatacount = this.gridApi.getDisplayedRowCount();
  var flaa: any = 0;
  var rowindata1: any
  for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
    var rowNode = this.gridApi.getRowNode(rowin);
    if (rowNode.data.UnitName != '' && flaa != 1) {
      rowindata1 = rowin;

      flaa = 1;
      break;
    }
  }
  if (params.data.SupplierName === "" && params.data.TradeName == "") {
    
    return false;
  } else if (params.node.rowIndex === rowindata1) {
    return false;
  }
  else {
    return true;
  }

}
  onCellValueChanged(params)
  {
   let { rowsToDisplay } = this.gridApi.getModel();
    let rowData = [];
    this.gridApi.forEachNode(RowNode => rowData.push(RowNode.data));
    this.gridApi.setRowData(rowData);
     var rowin: any=0;
    var rowing: any = 0;
    if (this.count != 1)
    {
      //this.firstdata= rowNode.data.Qtyinpercentage;
      rowin = params.node.rowIndex;
      this.gridApi.refreshCells(params);
      if (rowin != 0)
      {
        var sumvar: any = 0;
        var firstsumvar: any = 0;
        rowin = 1;
        var i = 1;
        
        var rowdatacount = this.gridApi.getDisplayedRowCount();
        var flaa: any = 0;
         var rowindata1:any
        for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
          var rowNode = this.gridApi.getRowNode(rowin);
          if (rowNode.data.UnitName != '' && flaa != 1) {
            rowindata1 = rowin;
            rowindata1 = rowindata1 + 1;
            flaa = 1;
            break;
          }
        }
        //for (let rowin = 1; rowin <= this.rowData.length; rowin++) 
        for (let rowin = rowindata1, i = rowindata1; i <= rowdatacount - 1; rowin++,i++) {

          var rowNode = this.gridApi.getRowNode(rowin);

            sumvar = Number(sumvar) + Number(rowNode.data.Qtyinpercentage);
           
        }
        var firstrowNode = this.gridApi.getRowNode(0);
        rowin = params.node.rowIndex;
        var rowNo = this.gridApi.getRowNode(rowin);
        var pamv = Number(params.newValue);

        if (pamv < 0.0000000 || isNaN(pamv))
        {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Please enter valid digits' } });
          var dat: any = params.oldValue;
          var rowNode = this.gridApi.getRowNode(rowin);
          rowNode.setDataValue('Qtyinpercentage', String(dat));
        }
         
      //  else if (Number(100 - Number(sumvar)) >= Number(firstrowNode.data.Qtyinpercentage)  )
        //else if (params.newValue >= firstrowNode.data.Qtyinpercentage && (100-sumvar)<)
        else if (Number((sumvar).toFixed(7)) > 100) {    
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Percentage Exceeded 100' } });

            var dat: any = params.oldValue;
            var rowNode = this.gridApi.getRowNode(rowin);
            rowNode.setDataValue('Qtyinpercentage', String(dat));
            rowNode.setDataValue('UnitCost', rowNo.data.UnitCost);
          }
          
        else
        {
          var dat: any = params.newValue;
          var adt2: any = Number(params.newValue)
          var dat2: any = String(adt2.toFixed(7));
          var rowNode = this.gridApi.getRowNode(rowin);
        
            rowNode.setDataValue('Qtyinpercentage', dat2);
        
          //  rowin2 = params.node.rowIndex;
          //  const colId = params.column.getId();

          var qtyper: Number = Number(dat);
          var rowNode = this.gridApi.getRowNode(rowin);
          var oldda: any = params.data.Quantity;
          var enwda: any = ((Number(this.labbatch)/100) * dat ).toFixed(7);
          var unicost: any = params.data.UnitCost;
          var updatedunicost: any = (enwda * unicost).toFixed(5);

          rowNode.setDataValue('Quantity', String(enwda));
          rowNode.setDataValue('Cost', String(updatedunicost));
          if (this.selectedunit == "g") {
            var updtedcosinlb: any = Number(updatedunicost * 453.592 / Number(this.labbatch)).toFixed(5);
          } else if (this.selectedunit == "Kg")
          {
            var updtedcosinlb: any = Number(updatedunicost * .453592 / Number(this.labbatch)).toFixed(5);
          }
          else {
            var updtedcosinlb: any = Number((updatedunicost) / Number(this.labbatch)).toFixed(5);
          }
          
          rowNode.setDataValue('costinlb', String(updtedcosinlb));
          rowNode.setDataValue('quantityinlb', String(enwda));
          var rowindata: any;
          var fla: any = 0;
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            if (rowNode.data.UnitName != '' && fla!=1) {
              rowindata = rowin;
              fla = 1;
              break;
            }
          }
          
          //rowin = 0;
          var rowNode = this.gridApi.getRowNode(rowindata);
          rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
          //var rowin2: any = params.node.rowIndex;
          //var rowNode2 = this.gridApi.getRowNode(rowin2);
          //rowNode2.setDataValue('Qtyinpercentage', String(qtyper.toFixed(7)));
          rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
          rowNode.setDataValue('Cost', String(rowNode.data.Cost));
          var fistrowdata: any = rowNode.data.Qtyinpercentage;

          var firstrowunicost: any = rowNode.data.UnitCost;
          var subvalue: any = (fistrowdata - dat).toFixed(7);

          subvalue = ((100 - sumvar.toFixed(7))).toFixed(7);
          if (subvalue == "-0.0000000") {
            subvalue = "0.0000000";
          }
        //  this.formulaCost = String(sumvar);
          var unitcosttotal = 0;
          for (let rowin = 0; rowin <= rowdatacount-1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
          }
          this.TotalUnitCost = String(unitcosttotal.toFixed(5));
          var totcs: Number = sumvar * Number(this.labbatch);
          // this.TotalUnitCost = this.formulaCost;
        //  this.oldunitcost = this.formulaCost;
          //this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
         // this.TotalUnitCost = String(totcs.toFixed(5));
          if (subvalue < 0.0000000)
          {
            rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
            rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
            rowNode.setDataValue('Cost', String(rowNode.data.Cost));
          }
          else
          {
            var rowNode = this.gridApi.getRowNode(rowindata);
           // var subvalue2: any = subvalue.toFixed(7);
            rowNode.setDataValue('Qtyinpercentage', String(subvalue));

            var enwda2: any = ((Number(this.labbatch) / 100) * subvalue).toFixed(7);
            var subcost: any = (enwda2 * firstrowunicost).toFixed(5);
           
            rowNode.setDataValue('Quantity', String(enwda2));
            rowNode.setDataValue('Cost', String(subcost));
           
            if (this.selectedunit == "g") {
              var cosinlb: any = Number(subcost * 453.592 / Number(this.labbatch)).toFixed(5);
            } else if (this.selectedunit == "Kg") {
              var cosinlb: any = Number(subcost * .453592 / Number(this.labbatch)).toFixed(5);
            }
            else {
              
              var cosinlb: any = Number((subcost) / Number(this.labbatch)).toFixed(5);
            }
          
            rowNode.setDataValue('costinlb', String(cosinlb));
            rowNode.setDataValue('quantityinlb', String(enwda2));
          }
          var totalquantity = 0;
          var totaper = 0;
          var costlb = 0;
          var unitcosttotal = 0;
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
          }
          this.TotalUnitCost = String(unitcosttotal.toFixed(5));
        
          this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
          }
          this.totaquantity = String(totalquantity.toFixed(5));
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
          }
          this.TotalPercentage = String(totaper.toFixed(5));
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            costlb = Number(costlb) + Number(rowNode.data.costinlb);

          }
          this.TotalCostInLB = String(costlb.toFixed(5));
          this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
          subvalue = 0;
           this.rowsToDisplay1  = this.gridApi.getModel();
        }
      }
    
    
    
  
    
     
    
    var sumvar:any = 0;
    for (rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
      var rowNode = this.gridApi.getRowNode(rowin);
    sumvar  = Number(sumvar) + Number(rowNode.data.Cost);
    }
   // this.formulaCost = String(sumvar);
    var totcs: Number = sumvar * Number(this.labbatch);
    //this.TotalUnitCost = String(totcs);
      rowin = 0;
      this.count = 1;
    }
    this.gridApi.deselectAll();
    this.rowindex = null;
    this.gridApi.getModel();
    this.rowData = [];
    this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
    var sap: any = this.Formulagridvalues(this.rowData);
  }
  onCellValueChanged2(params) {

    //var rowin: any = 0;

    //if (this.count != 1) {
    //  //this.firstdata= rowNode.data.Qtyinpercentage;
    //  rowin = params.node.rowIndex;
    //  if (rowin != 0) {
    //    rowin = params.node.rowIndex;
    //    if (params.newValue <= 0.0000000) {
    //      var dat: any = params.oldValue;
    //      var rowNode = this.gridApi.getRowNode(rowin);
    //      rowNode.setDataValue('Quantity', String(dat));
    //    }
    //    else {
    //      var dat: any = params.newValue;
    //      var adt2: any = Number(params.newValue)
    //      var dat2: any = String(adt2.toFixed(7));
    //      var rowNode = this.gridApi.getRowNode(rowin);
    //      rowNode.setDataValue('Quantity', dat2);

    //      //  rowin2 = params.node.rowIndex;
    //      //  const colId = params.column.getId();

    //      var qtyper: Number = Number(dat);
    //      var rowNode = this.gridApi.getRowNode(rowin);
    //      var oldda: any = params.data.Quantity;
    //      var enwda: any = (dat * 100).toFixed(7);
    //      var unicost: any = params.data.UnitCost;
    //      var updatedunicost: any = (enwda * unicost).toFixed(5);

    //      rowNode.setDataValue('Qtyinpercentage', String(enwda));
    //    //  rowNode.setDataValue('Cost', "0.00000");

    //    //  rowin = 0;
    //   //   var rowNode = this.gridApi.getRowNode(rowin);
    //     // rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
    //      //var rowin2: any = params.node.rowIndex;
    //      //var rowNode2 = this.gridApi.getRowNode(rowin2);
    //      //rowNode2.setDataValue('Qtyinpercentage', String(qtyper.toFixed(7)));
    //    // rowNode.setDataValue('UnitCost', "0.00000");
    //    //  rowNode.setDataValue('Cost', String(rowNode.data.Cost));
    //    //  var fistrowdata: any = rowNode.data.Qtyinpercentage;

    //    // var firstrowunicost: any = rowNode.data.UnitCost;
    //    //  var subvalue: any = (fistrowdata - dat).toFixed(7);


    //      //if (subvalue <= 0.0000000) {
    //      //  rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
    //      // rowNode.setDataValue('Quantity', '0.00000');
    //       // rowNode.setDataValue('Cost', String(rowNode.data.Cost));
    //     // }
    //     // else {
    //      //  rowNode.setDataValue('Qtyinpercentage', String(subvalue));

    //      //  var enwda2: any = (subvalue / 100).toFixed(7);
    //       // var subcost: any = (enwda2 * firstrowunicost).toFixed(5)

    //       // rowNode.setDataValue('Quantity', String(enwda2));
    //       // rowNode.setDataValue('Cost', String(subcost));
    //     // }
    //      //subvalue = 0;
    //    }
    //  }







    //  //var sumvar: any = 0;
    //  //for (rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
    //  //  var rowNode = this.gridApi.getRowNode(rowin);
    //  //  sumvar = Number(sumvar) + Number(rowNode.data.Cost);
    //  //}
    //  //this.formulaCost = String(sumvar);
    //  //var totcs: Number = sumvar * Number(this.labbatch);
    //  //this.TotalUnitCost = String(totcs);
    //  //rowin = 0;
    //  this.count = 1;
    //}
    let { rowsToDisplay1 } = this.gridApi.getModel();
    let rowData = [];
    this.gridApi.forEachNode(RowNode => rowData.push(RowNode.data));
    this.gridApi.setRowData(rowData);
    var rowin: any = 0;
    var rowing: any = 0;
    if (this.count != 1) {
      //this.firstdata= rowNode.data.Qtyinpercentage;
      rowin = params.node.rowIndex;
      //  var rowNode = this.gridApi.getRowNode(rowin);
      if (rowin != 0) {
        var sumvar: any = 0;
        var firstsumvar: any = 0;
      //  rowin = 1;
        var i = 1;
        var rowNode = this.gridApi.getRowNode(rowin);
        var qtyinper: any = ((100 / Number(this.labbatch)) * params.newValue).toFixed(7);
        rowNode.setDataValue('Qtyinpercentage', String(qtyinper));
        var rowdatacount = this.gridApi.getDisplayedRowCount();
        var flaa: any = 0;
        var rowindata1: any
        for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
          var rowNode = this.gridApi.getRowNode(rowin);
          if (rowNode.data.UnitName != '' && flaa != 1) {
            rowindata1 = rowin;
            rowindata1 = rowindata1 + 1;
            flaa = 1;
            break;
          }
        }
        //for (let rowin = 1; rowin <= this.rowData.length; rowin++) 
        for (let rowin = rowindata1, i = rowindata1; i <= rowdatacount - 1; rowin++, i++) {


          var rowNode = this.gridApi.getRowNode(rowin);

          sumvar = Number(sumvar) + Number(rowNode.data.Quantity);

        }
        var firstrowNode = this.gridApi.getRowNode(0);
        rowin = params.node.rowIndex;
        var rowNo = this.gridApi.getRowNode(rowin);
        var pamv = Number(params.newValue);
        if (pamv < 0.0000000 || isNaN(pamv)) {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Please enter valid digits' } });
          var dat: any = params.oldValue;
          var rowNode = this.gridApi.getRowNode(rowin);
          rowNode.setDataValue('Quantity', String(dat));
          var qtyinper: any = ((100 / Number(this.labbatch)) * params.oldValue).toFixed(7);
          rowNode.setDataValue('Qtyinpercentage', String(qtyinper));
        }

        //  else if (Number(100 - Number(sumvar)) >= Number(firstrowNode.data.Qtyinpercentage)  )
        //else if (params.newValue >= firstrowNode.data.Qtyinpercentage && (100-sumvar)<)
        // if (Number((sumvar).toFixed(5)) > 100)
        else if (Number((sumvar).toFixed(7)) > Number(this.labbatch)) {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Quantity Exceeded lab batch Size' } });

          var dat: any = params.oldValue;
          var rowNode = this.gridApi.getRowNode(rowin);
          var qtyinper: any = ((100 / Number(this.labbatch)) * params.oldValue).toFixed(7);
          rowNode.setDataValue('Quantity', String(dat));
          rowNode.setDataValue('Qtyinpercentage', String(qtyinper));
          rowNode.setDataValue('UnitCost', rowNo.data.UnitCost);
        }

        else {
          var dat: any = params.newValue;
          var adt2: any = Number(params.newValue)
          var dat2: any = String(adt2.toFixed(7));
          var rowNode = this.gridApi.getRowNode(rowin);

          rowNode.setDataValue('Quantity', dat2);

          //  rowin2 = params.node.rowIndex;
          //  const colId = params.column.getId();

          var qtyper: Number = Number(dat);
          var rowNode = this.gridApi.getRowNode(rowin);
          var oldda: any = params.data.Quantity;
          var enwda: any = dat2;
       //   var enwda: any = ((Number(this.labbatch) / 100) * dat).toFixed(7);
          var unicost: any = params.data.UnitCost;
          var updatedunicost: any = (enwda * unicost).toFixed(5);

          //rowNode.setDataValue('Quantity', String(enwda));
          rowNode.setDataValue('Cost', String(updatedunicost));
          if (this.selectedunit == "g") {
            var updtedcosinlb: any = Number(updatedunicost * 453.592 / Number(this.labbatch)).toFixed(5);
          } else if (this.selectedunit == "Kg") {
            var updtedcosinlb: any = Number(updatedunicost * .453592 / Number(this.labbatch)).toFixed(5);
          }
          else {
            var updtedcosinlb: any = Number((updatedunicost) / Number(this.labbatch)).toFixed(5);
          }

          rowNode.setDataValue('costinlb', String(updtedcosinlb));
          rowNode.setDataValue('quantityinlb', String(enwda));


          var rowindata: any;
          var fla: any = 0;
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            if (rowNode.data.UnitName != '' && fla != 1) {
              rowindata = rowin;
              fla = 1;
              break;
            }
          }

          //rowin = 0;
          var rowNode = this.gridApi.getRowNode(rowindata);
          rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
          //var rowin2: any = params.node.rowIndex;
          //var rowNode2 = this.gridApi.getRowNode(rowin2);
          //rowNode2.setDataValue('Qtyinpercentage', String(qtyper.toFixed(7)));
          rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
          rowNode.setDataValue('Cost', String(rowNode.data.Cost));
          var fistrowdata: any = rowNode.data.Qtyinpercentage;
          //   subvalue = (100 - sumvar.toFixed(7));
          if (subvalue == "-0.0000000") {
            subvalue = "0.0000000";
          }
          var firstrowunicost: any = rowNode.data.UnitCost;
          var subvalue: any = (fistrowdata - dat).toFixed(7);

          subvalue = (Number(this.labbatch) - sumvar.toFixed(7)).toFixed(7);
          if (subvalue == "-0.0000000") {
            subvalue = "0.0000000";
          }
          this.formulaCost = String(sumvar);
          var unitcosttotal = 0;
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
          }
          this.TotalUnitCost = String(unitcosttotal.toFixed(5));
          var totcs: Number = sumvar * Number(this.labbatch);
          // this.TotalUnitCost = this.formulaCost;
         // this.oldunitcost = this.formulaCost;
          this.formulaCost = String((Number(unitcosttotal.toFixed(5)) / Number(this.labbatch)).toFixed(5));
          if (isNaN(pamv)) {
            this.formulaCost = this.TotalUnitCost;
          }
          // this.TotalUnitCost = String(totcs.toFixed(5));
          if (subvalue < 0.0000000) {
            rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
            rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
            rowNode.setDataValue('Cost', String(rowNode.data.Cost));
          }
          else {
            var rowNode = this.gridApi.getRowNode(rowindata);
            //rowNode.setDataValue('Qtyinpercentage', String(subvalue));
            var enwda2: any = subvalue;
            //var enwda2: any = ((Number(this.labbatch) / 100) * subvalue).toFixed(7);
            var subcost: any = (enwda2 * firstrowunicost).toFixed(5)
          
            rowNode.setDataValue('Quantity', String(subvalue));
            var qtyinper: any = ((100 / Number(this.labbatch)) * subvalue).toFixed(7);
            rowNode.setDataValue('Qtyinpercentage', String(qtyinper));
            rowNode.setDataValue('Cost', String(subcost));
            if (this.selectedunit == "g") {
              var cosinlb: any = Number(subcost * 453.592 / Number(this.labbatch)).toFixed(5);
            } else if (this.selectedunit == "Kg") {
              var cosinlb: any = Number(subcost * .453592 / Number(this.labbatch)).toFixed(5);
            }
            else {
              var cosinlb: any =Number(( subcost) / Number(this.labbatch)).toFixed(5);
            }
            rowNode.setDataValue('costinlb', String(cosinlb));
            rowNode.setDataValue('quantityinlb', String(enwda2));
          }
          var totalquantity = 0;
          var totaper = 0;
          var costlb = 0;
          var unitcosttotal = 0;
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
          }
          this.TotalUnitCost = String(unitcosttotal.toFixed(5));
         
          this.formulaCost = String((Number(this.TotalUnitCost) / Number(this.labbatch)).toFixed(5));
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
          }
          this.totaquantity = String(totalquantity.toFixed(5));
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            totaper = Number(totaper) + Number(rowNode.data.Qtyinpercentage);
          }
          this.TotalPercentage = String(totaper.toFixed(5));
          for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
            var rowNode = this.gridApi.getRowNode(rowin);
            costlb = Number(costlb) + Number(rowNode.data.costinlb);

          }
          this.TotalCostInLB = String(costlb.toFixed(5));
          this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));
          subvalue = 0;
        }
      }







      var sumvar: any = 0;
      for (rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
        var rowNode = this.gridApi.getRowNode(rowin);
        sumvar = Number(sumvar) + Number(rowNode.data.Cost);
      }
      // this.formulaCost = String(sumvar);
      var totcs: Number = sumvar * Number(this.labbatch);
      //this.TotalUnitCost = String(totcs);
      rowin = 0;
      this.count = 1;
    }
    this.gridApi.deselectAll();
    this.rowindex = null;
    let { rowsToDisplay } = this.gridApi.getModel();
    this.rowData = [];
    this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
    this.Formulagridvalues(this.rowData)
  }
  mySum(params) {
    var sum:any = 0;
    params.values.forEach(value => sum += value);
    this.TotalUnitCost = sum;
    return sum;
  }
  getAllRows() {
    let rowData = [];
    this.gridApi.forEachNode(node => rowData.push(node.data));
    return rowData;
  }

  CostUpdate(rowData:any) {
   
    this.rowData = [];
    this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
   //this.gridApi.forEachNode(RowNode => rowData.push(rowNode.data));
    this.Formulagridvalues(this.rowData)
    this.FormulatextboxList[0] = ([{

      FormulaTotalQTY: this.totaquantity,
      Yield: this.Yield,
      formulaCost: this.formulaCost,
      formulaNetQty: this.formulaNetQty,
      TotalCostInLB: this.TotalCostInLB,
      TotalPercentage: this.TotalPercentage,
      FormulaUnit: this.selectedunit,
    }]);
    this.Formulacostupdate("buttoncostupate").subscribe((Cost_pref) => {
      console.warn("Cost_pref", Cost_pref)
      this.Costupdates = Cost_pref
    })
    this.wait(7000);
    this.formulationload(this.formulacode, this.labbatch, this.selectedunit, this.operation2).subscribe((formulationload) => {
      console.warn("formulaload", formulationload)

      this.rowData = formulationload
      this.gridApi.refreshCells({ formulationload })

     
      var unitcosttotal = 0;
      var costlb = 0;
      var sumvar: any = 0;
      this.gridApi.setRowData(this.rowData);
      var rowdatacount = this.rowData.length;
      for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
        var rowNode = this.gridApi.getRowNode(rowin);
        unitcosttotal = Number(unitcosttotal) + Number(rowNode.data.Cost);
      }
      this.TotalUnitCost = String(unitcosttotal.toFixed(5));
      var totcs: Number = sumvar * Number(this.labbatch);
      // this.TotalUnitCost = this.formulaCost;
     
      this.formulaCost = String((Number(unitcosttotal.toFixed(5)) / Number(this.labbatch)).toFixed(5));
      var totalquantity = 0;
      for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
        var rowNode = this.gridApi.getRowNode(rowin);

        totalquantity = Number(totalquantity) + Number(rowNode.data.Quantity);
      }
      this.totaquantity = String(totalquantity.toFixed(5));
      for (let rowin = 0; rowin <= rowdatacount - 1; rowin++) {
        var rowNode = this.gridApi.getRowNode(rowin);
        costlb = Number(costlb) + Number(rowNode.data.costinlb);

      }
      this.TotalCostInLB = String(costlb.toFixed(5));
      this.TotalCostInkg = String((costlb * 2.20462).toFixed(5));

      //  this.selectedunit = String(this.rowData[0].UnitName);

    })
    let { rowsToDisplay } = this.gridApi.getModel();
    this.rowData = [];
    this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
    this.Formulagridvalues(this.rowData)

  }
  Formulacostupdate(buttoncostup: string) {
    var Formulationgridjason: any = JSON.stringify(this.FormulagridList);
    var Formulacode = this.formulacode;
    var UserName = this.userna;
    var Flag = buttoncostup;
    var TotalQtyAndCostjson: any = JSON.stringify(this.FormulatextboxList);
    let params1 = new HttpParams().set('Formulationgridjason', Formulationgridjason).set('FormulaCode', Formulacode).set('TotalQtyAndCostjson', TotalQtyAndCostjson).set('UserName', UserName).set('flag', Flag);
    return this.http.get("https://searchformulawebservice.azurewebsites.net/Formuladetailsave", { params: params1, responseType: 'text' })
  }

  Formulagridvalues(Formuladata2: any) {
    this.i = 0;
    this.j = 0;
    this.FormulagridList = [];
    for (let item2 of Formuladata2) {
      if (item2.INCIName != "") { 
      if (item2.Qtyinpercentage == "" || item2.Qtyinpercentage == null) {
        item2.Qtyinpercentage = "0";
      }
      if (item2.ItemCode == "null" || item2.Qtyinpercentage == "") {
        item2.ItemCode = "null";
      }
      if (item2.Quantity == "" || item2.Quantity == null) {
        item2.Quantity = "0";
      }
      if (item2.quantityinlb == "" || item2.quantityinlb == null) {
        item2.quantityinlb = "0";
      }
      if (item2.UnitCost == "" || item2.UnitCost == null) {
        item2.UnitCost = "0";
      }
      if (item2.Cost == "" || item2.Cost == null) {
        item2.Cost = "0";
      }
      if (item2.unitcostinlb == "" || item2.unitcostinlb == null) {
        item2.unitcostinlb = "0";
      }
      if (item2.costinlb == "" || item2.costinlb == null) {
        item2.costinlb = "0";
      }
      if (item2.ActualTcQty == "" || item2.ActualTcQty == null) {
        item2.ActualTcQty = "0";
      }

      if (item2.Qtyinpercentage == "0.0000000" && item2.ItemCode != "null") {
        this.lookupdate3data = 'One of the Ingredient is Zero Percentage.Do you want to proceed?';

      }

      this.FormulagridList[this.i] = ([{
        FormulaName: this.formulaname,
        Formulacode: this.formulacode,
        ItemCode: item2.ItemCode,
        Step: item2.Step,
        INCIName: item2.INCIName,
        Qtyinpercentage: item2.Qtyinpercentage,
        Quantity: item2.Quantity,
        UnitName: item2.UnitName,
        UnitCost: item2.UnitCost,
        Cost: item2.Cost,
        SupplierName: item2.SupplierName,
        Linenumber: item2.Linenumber,
        TradeName: item2.TradeName,
        QuantityInLb: item2.quantityinlb,
        UnitcostInLb: item2.unitcostinlb,
        CostInLb: item2.costinlb,
        GeneralItemcode: item2.GeneralItemcode,
        Column33: '',
        Column34: '',
        ActualTcQty: '0',
      }]);
      this.i++;

    }
  }
  }

  FormulationLookup_Save() {

    this.issearchformulasave = true;
    this.loading = true;
    if (this.PDRno == "" || this.PDRno == undefined) {
      this.loading = false;
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter PDR No' } });
      this.issearchformulasave = false;
    }
    else if (this.customername == "" || this.customername == undefined) {
      this.loading = false;
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter Customer name' } });
      this.issearchformulasave = false;
    }
    else if (this.ProjectName == "" || this.ProjectName == undefined) {
      this.loading = false;
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter Projectname' } });
      this.issearchformulasave = false;
    }
    else if (this.formulacode == "" || this.formulacode == undefined) {
      this.loading = false;
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter Formula Code' } });
      this.issearchformulasave = false;
    }
    else if (this.formulaname == "" || this.formulaname == undefined) {
      this.loading = false;
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter Formula Name' } });
      this.issearchformulasave = false;
    }
    else if
      (this.TotalUnitCost == "0.00000" || this.TotalUnitCost == undefined || this.TotalUnitCost == "") {
      this.loading = false;
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter Formulation details ' } });
      this.issearchformulasave = false;
      this.active = "2";
    }
    else if
      (this.totaquantity < this.labbatch || this.totaquantity == undefined) {
      this.loading = false;
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Total QTY is less than lab batch size.Formula can not be saved' } });
      this.issearchformulasave = false;
    }
    else if
      (this.totaquantity > this.labbatch || this.totaquantity == undefined) {
      this.loading = false;
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Total QTY exceeded the lab batch size.Formula can not be saved' } });
      this.issearchformulasave = false;
    }
    else if
      (this.selectedunit == "" || this.selectedunit == undefined) {
      this.loading = false;
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter Formula unit ,lab batch unit details ' } });
      this.issearchformulasave = false;
    }

 
  else
    {
      this.issearchformula = false;
      this.lookupdate3data = "";
     // let { rowsToDisplay } = this.gridApi.getModel();
      



      this.dataformList[0] = ([{
        PDRNo: this.PDRno,
        FormulaCode: this.formulacode,
        Description: this.formulaname,
        TradeName: this.TradeName,
        Class: this.Class,
        SubClass: this.SubClass,
        Status: this.Status,
        LabelCode: this.Status, //this.Status
        SupercededBy: this.SupercededBy, //chemist
        SupercededDate: this.supercededdate, //chemist on date
        MayProduce: this.okproduce2,
        ApprovedBy: this.ApprovedBy,
        ApprovedDT: this.ApprovedDT, // appvedby date
        MayPilot: this.okpilot2, 
        MaxPilotQty: this.MaxPilotQty,
        MaxPilotUnit: this.Maxpilotunit,
        ProjectName: this.ProjectName,
        HMIS_Health: '',
        HMIS_Personal: '',
        HMIS_Flamable: '0',
        HMIS_Physical: '1',
        NFPA_Health: '0',
        NFPA_Flamable: '0',
        NFPA_Reactivity: '0',
        NFPA_Special: '',
        FlashPtC: '',
        FlashPtF: '',
        FlashPtGTLT: '',
        FlashPtMethod: '',
        FlashPtOverride: '',
        QCPrep: '',
        FormulaProcedure: '',
        WasteStream: '',
        nmdHealthNfpa: '',
        ShelfLife: this.ShelfLife,
        ShelfLifeUnit: this.ShelfLifeUnit,
        MSDSPath: '',
        RegulatoryNotes: '',
        RegulatoryDoc1: '',
        RegulatoryDoc2: '',
        RegulatoryDoc3: '',
        RegulatoryDoc4: '',
        RegulatoryDoc5: '',
        RegulatoryDoc6: '',
        RegulatoryDoc7: '',
        RegulatoryDoc8: '',
        RegulatoryExcel1: '',
        RegulatoryExcel2: '',
        RegulatoryExcel3: '',
        RegulatoryExcel4: '',
        RegulatoryExcel5: '',
        RegulatoryExcel6: '',
        RegulatoryExcel7: '',
        RegulatoryExcel8: '',
        RegulatoryPdf1: '',
        RegulatoryPdf2: '',
        RegulatoryPdf3: '',
        RegulatoryPdf4: '',
        RegulatoryPdf5: '',
        RegulatoryPdf6: '',
        RegulatoryPdf7: '',
        RegulatoryPdf8: '',
        EURiskPhrases: '',
        EUSafetyPhrases: '',
        ManualSG: this.ManualSG, //this.ManualSG
        QS: '0',
        QSQty: '',
        QSUom: '',
        TestSchedule: '',
        AddedBy: '',
        Locked: '0',
        ShowFormula: '0',
        AboutFormulation: this.AboutFormulation,
        useFormulation: this.useFormulation,
        WhoUse: this.WhoUse,
        formulationDoes: this.formulationDoes,
        odor: this.odor,
        ph: this.ph,
        viscosity: this.viscosity,
        appearence: this.appearence,
        FirstName: 'admin',
        CompanyOwned: this.companyowned,
        FormulaNotes: '',
        Yield: this.Yield,
        FormulaTotalQTY: this.totaquantity, //this.FormulaTotalQTY
        FormulaUnit: this.selectedunit,
        formulaNetQty: this.totaquantity,
        TotalUnitCost: this.formulaCost,
        formulaCost: this.TotalUnitCost,
        TotalCostInLB: this.TotalCostInLB,
        TotalPercentage: this.TotalPercentage,
        LabRefNo: this.LabRefNo,
        FormulaSpecsNotes: this.FormulaSpecsNotes,
        Formula: '0',
        COO: '',
        SKU: '',
        MixNo: '',
        HighSpecificGravity: this.highspecificgravity,
        ReviewStatusOne: '',
        ReviewStatusTwo: '',
        ReviewByOne: '',
        ReviewByTwo: '',
        ReviewCommentOne: '',
        ReviewCommentTwo: '',
        ReviewStatusOneC: '',
        ReviewStatusTwoC: '',
        ReviewCommentOneC: '',
        ReviewCommentTwoC: '',
        cmbPrefix: 'CUSTOM',
        txtBatchSize: this.totaquantity,
        cmbMainUnit: this.selectedunit,
        username: this.userna,
        formulaPrefix: '',
        AddedDT: this.AddedDT,
        FormulaLevel: '1',
        CRNumber: '',
        CRReason: '',



      }]);
      this.Formulagridvalues(this.rowData);
      if (this.lookupdate3data != "") {
        this.loading = false;
        let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '30%', height: '15%', data: { displaydatagrid: this.lookupdate3data }, disableClose: true });

        dialogRef.afterClosed().subscribe(result =>
        {
          console.log('The dialog was closed: ${result}');
          this.lookupdate4data = result;

          if (this.lookupdate4data == "false") { }
          else { //this.Formulagridvalues(this.rowData);
            this.FormulationLookup_saveup().subscribe((formula_save) => {
              console.warn("formula_save", formula_save)
              this.formula_save_data = formula_save
              this.lookupdate2data = formula_save

              this.Audittrackingload(this.formulacode).subscribe((Audittrackingload) => {
                console.warn("Audittrackingload", Audittrackingload)
                this.AudittrackData = Audittrackingload
              })

              if (this.lookupdate2data == "Inserted") {
                this.loading = false;
                this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Formula:" + " " + this.formulaname + "  " +this.lookupdate2data + " " + "Successfully" } });
                this.lookupdate1data = ""
              }
              else if (this.lookupdate2data == "") {
                this.loading = false;
              }
              else {
                this.loading = false;
                this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Please check all your parameters before Save' } });
                this.lookupdate1data = ""
                this.issearchformulasave = false;
              }

            })
           
            var saved: any = this.formula_save_data;


          }

        });

      }
      else
      { //this.Formulagridvalues(this.rowData);
        this.FormulationLookup_saveup().subscribe((formula_save) => {
          console.warn("formula_save", formula_save)
          this.formula_save_data = formula_save
          this.lookupdate2data = formula_save

          this.Audittrackingload(this.formulacode).subscribe((Audittrackingload) => {
            console.warn("Audittrackingload", Audittrackingload)
            this.AudittrackData = Audittrackingload
          })

          if (this.lookupdate2data == "Inserted") {
            this.loading = false;
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Formula:"+" "+this.formulaname +" "+ this.lookupdate2data +" "+"Successfully" } });
            this.lookupdate1data = ""
          }
          else if (this.lookupdate2data == "") {
            this.loading = false;
          }
          else {
            this.loading = false;
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Please check all your parameters before Save' } });
            this.lookupdate1data = ""
            this.issearchformulasave = false;
          }

        })
       
        var saved: any = this.formula_save_data;


      }

         
      
    }

  };

  FormulationLookup_saveup() {
   
    this.Formulagridvalues(this.rowData);
    var datalistform: any = JSON.stringify(this.dataformList);
    var datalistgrid: any = JSON.stringify(this.FormulagridList);
    let params1 = new HttpParams().set('Formulalookupjson', datalistform).set('Formulationgridjason', datalistgrid);
    return this.http.get("https://formulalookuppilotlabbatchwebservice.azurewebsites.net/formulasave", { params: params1, responseType: 'text' })
  }
  rawcategoryload() {
    return this.http.get("https://smartformulatorrawmaterialswebservice3.azurewebsites.net/loadrawcategory")
  }
  showAlert(): void {
    if (this.isVisible) {
      return;
    }
    this.isVisible = true;
    setTimeout(() => this.isVisible = false, 5000)
  }
  onChange(val) {
    this.SubClass = val;
  }
  formulalookupupdatemain() {
    this.loading = true;
    if (this.formulacode == "" || this.formulacode == undefined) {
      this.loading = false;
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter Formula Code' } });
    }
    else if (this.formulaname == "" || this.formulaname == undefined) {
      this.loading = false;
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter Formula Name' } });
    }
    else if
      (this.TotalUnitCost == "0.00000" || this.TotalUnitCost == undefined) {
      this.loading = false;
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter Formulation details ' } });
    }
    else if
      (this.totaquantity < this.labbatch || this.totaquantity == undefined) {
      this.loading = false;
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Total QTY is less than lab batch size.Formula can not be saved' } });
    }
    else if
      (this.totaquantity > this.labbatch || this.totaquantity == undefined) {
      this.loading = false;
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Total QTY exceeded the lab batch size.Formula can not be saved' } });
    }
    else if
      (this.selectedunit == "" || this.selectedunit == undefined) {
      this.loading = false;
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter Formulaunit ,lab batch unit details ' } });
    }

    else {
      this.lookupdate3data = "";



      this.dataList[0] = ([{
        PDRNo: this.PDRno,
        FormulaCode: this.formulacode,
        FormulaDescr: this.formulaname,
        TradeName: this.TradeName,
        Class: this.Class,
        SubClass: this.SubClass,
        Status: this.Status,
        SupercededBy: this.SupercededBy,
        dtpSupercedOn: this.supercededdate,
        chkOkProduce: this.okproduce2,
        ApprovedBy: this.ApprovedBy,
        dtpApprovedOn: this.ApprovedDT,
        chkOkPilot: this.okpilot2,
        MaxPilotQty: this.MaxPilotQty,
        cmbMaxPilotUom: this.Maxpilotunit,
        cmbProjectcode: this.ProjectName,
        cmbHmisHealth: "",
        cmbHmisPersonalProtection: "",
        nmdFlameHmis: '0',
        nmdPhyHazHmiz: '0',
        nmdHealthNfpa: '0',
        nmdFlamNfpa: '0',
        nmdReacNfpa: '0',
        cmbSpecialPrecautions: '',
        FlashPointC: '',
        FlashPointF: '',
        FlashGTLT: '',
        FlashMethod: '',
        FlashOverride: '',
        QCPrep: '',
        FormulaProcedure: '',
        WasteStream: '',

        ShelfLife: this.ShelfLife,
        ShelfLifeUnit: this.ShelfLifeUnit,
        MSDSPath: '',
        RegulatoryNotes: '',
        RegWord1: '',
        RegWord2: '',
        RegWord3: '',
        RegWord4: '',
        RegWord5: '',
        RegWord6: '',
        RegWord7: '',
        RegWord8: '',
        Regxls1: '',
        Regxls2: '',
        Regxls3: '',
        Regxls4: '',
        Regxls5: '',
        Regxls6: '',
        Regxls7: '',
        Regxls8: '',
        RegPdf1: '',
        RegPdf2: '',
        RegPdf3: '',
        RegPdf4: '',
        RegPdf5: '',
        RegPdf6: '',
        RegPdf7: '',
        RegPdf8: '',
        SGOverride: this.ManualSG,
        LongTerm: '',
        cmbqsRawmaterial: '',
        fal: '',
        showFormula: '',
        About: '',
        HowToUseIt: '',
        whoUse: '',
        FormulationDo: '',
        Odor: '',
        Ph: '',
        Viscosity: '',
        Appearance: '',
        firstname: '',
        cmbCompanySpecific: this.companyowned,
        FormulaNotes: '',
        Yield: this.Yield,

        TotalQty: this.totaquantity,
        cmbTotalUnit: this.selectedunit,
        NetQty: this.labbatch,
        UnitCostQty: this.formulaCost,
        TotalCost: this.TotalUnitCost,
        CostPerLB: this.TotalCostInLB,
        TotalPercentage: this.TotalPercentage,
        Labrefno: this.LabRefNo,
        SpecsNotes: '',
        COO: '',
        SKU: '',
        MixNo: '',
        HighSp: this.highspecificgravity,
        ReviewStatusOne: '',
        ReviewStatusTwo: '',
        ReviewByOne: '',
        ReviewByTwo: '',
        ReviewCmtsOne: '',
        ReviewCmtsTwo: '',
        CStatus1: '',
        CStatus2: '',
        CBy1: '',
        CBy2: '',
        CComments1: '',
        CComents2: '',
        addeddt: this.AddedDT,
        CRNo: '',
        CRReason: '',
        oldformulaname: '',
        RdbPercentage: 'false',
        oldUnitCost: this.oldunitcost,
        oldUnit: this.oldunit,
        oldTotalCost: this.oldtotalcost,
        oldTotalQty: this.oldtotalqty,
        oldCostLb: '',
      }]);




        this.Formulagridvalues(this.rowData);
      var lookupdate1: string;
      this.oldunit = this.selectedunit;
      this.oldtotalqty = this.totaquantity;
      this.oldtotalcost = this.TotalUnitCost;
      this.oldunitcost = this.formulaCost;
      if (this.lookupdate3data != "") {
        this.loading = false;
        let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '30%', height: '15%', data: { displaydatagrid: this.lookupdate3data }, disableClose: true }); dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed: ${result}');
          this.lookupdate4data = result; if (this.lookupdate4data == "false") { } else {
            this.datalistraw = JSON.stringify(this.dataList);
            this.datalistgirdformula = JSON.stringify(this.FormulagridList);
            if (this.olddatalistraw == this.datalistraw && this.olddatalistgirdformula == this.datalistgirdformula) {
              var data: any = "";
            }
            else {
              this.olddatalistraw = this.datalistraw;
              this.olddatalistgirdformula = this.datalistgirdformula;
              this.formulalookup_update().subscribe(forlookup_update => {
                console.warn("forlookup_update", forlookup_update)
                if (forlookup_update)
                  lookupdate1 = forlookup_update
                this.lookupdate1data = forlookup_update
                this.wait(3000);
                this.Audittrackingload(this.formulacode).subscribe((Audittrackingload) => {
                  console.warn("Audittrackingload", Audittrackingload)
                  this.AudittrackData = Audittrackingload
                })
                if (this.lookupdate1data == "updated") {
                  this.loading = false;
                  this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Formula:" + " " + this.formulaname + " is " + this.lookupdate1data + " " + "Successfully" } });
                  this.lookupdate1data = ""
                }
                else if (this.lookupdate1data == "") {
                  this.loading = false;
                }
                else {
                  this.loading = false;
                  this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Please check all your parameters before Update' } });
                  this.lookupdate1data = ""
                }
              })
              var update: any = lookupdate1;
            }
          }
        });
      }
      else {
        this.datalistraw = JSON.stringify(this.dataList);
        this.datalistgirdformula = JSON.stringify(this.FormulagridList);
        if (this.olddatalistraw == this.datalistraw && this.olddatalistgirdformula == this.datalistgirdformula) {
          var data: any = "";
        }
        else {
          this.olddatalistraw = this.datalistraw;
          this.olddatalistgirdformula = this.datalistgirdformula;
          this.formulalookup_update().subscribe(forlookup_update => {
            console.warn("forlookup_update", forlookup_update)
            if (forlookup_update)
              lookupdate1 = forlookup_update
            this.lookupdate1data = forlookup_update
            this.wait(3000);
            this.Audittrackingload(this.formulacode).subscribe((Audittrackingload) => {
              console.warn("Audittrackingload", Audittrackingload)
              this.AudittrackData = Audittrackingload
            })
            if (this.lookupdate1data == "updated") {
              this.loading = false;
              this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Formula:" + " " + this.formulaname + " " + this.lookupdate1data + " " + "Successfully" } });
              this.lookupdate1data = ""
            }
            else if (this.lookupdate1data == "") {
              this.loading = false;
            }
            else {
              this.loading = false;
              this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Please check all your parameters before Update' } });
              this.lookupdate1data = ""
            }
          })
          var update: any = lookupdate1;
        }
      }
    }
  }


  goToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }
  formulalookup_update() {

    // this.gridApi.getModel();
    //this.rowData = [];
    //this.gridApi.forEachNode(RowNode => this.rowData.push(RowNode.data));
    //this.gridApi.setRowData(this.rowData);
    //this.Formulagridvalues(this.rowData);
    var datalistraw: any = JSON.stringify(this.dataList);
    var datalistgirdformula: any = JSON.stringify(this.FormulagridList);
    //var datalistaudit: any = JSON.stringify(this.DataListAudit);
    //var datalistifra: any = JSON.stringify(this.DataListIFRA);
    var operation = 'Update';
    var username = this.userna;
    let params1 = new HttpParams().set('formulalookupdata', datalistraw).set('Formulationgridjason', datalistgirdformula).set('username', username).set('operation', operation);
    var lookupdate:any;
    lookupdate = this.http.get("https://smartformulatorformulallokupwebservice8.azurewebsites.net/formulalookupupdate", { params: params1, responseType: 'text' })
    return lookupdate
  }
  //addmarketingindicator(): void {
  //  const dialogRef = this.dialog.open(AddMarketingIndicatorComponent, {
  //    width: '90%', height: '90%', disableClose: true
  //  });
  //}
  ngOnInit() {
    this.Isformatlabbatch2 = false;
    this.ApprovedDT = new Date().toISOString().split('T')[0];
    this.supercededdate = new Date().toISOString().split('T')[0];
    this.backformuldetails = this.Datashare.getbackformdetails();
    this.userna = this.Datashare.getlogin();
      this.PDRno = this.backformuldetails[0];
      this.Isformat1=true;
      this.formulacode = this.backformuldetails[1];
      this.formulaname = this.backformuldetails[2];
    this.formulacodepdr = this.Datashare.getmodulenavpdr();
    if (this.formulacodepdr != undefined || this.formulacodepdr != "") {
      this.formulacode = this.formulacodepdr;
    }
    this.generalformulationload(this.formulacodepdr).subscribe((generalformulationload) => {
      console.warn("generalformulationload", generalformulationload)
      this.generalrowData = generalformulationload
      this.generalmethod(this.generalrowData);
      this.SGcalculation(this.ManualSG).subscribe((sgcalcload) => {
        console.warn("SGCalcload", sgcalcload)
        this.sgcalcload = sgcalcload
        this.Lbgal = this.sgcalcload
      })
    })
    this.formulationload(this.formulacodepdr, this.labbatch, this.selectedunit, this.operation1).subscribe((formulationload) => {
      console.warn("formulaload", formulationload)
      this.rowData = formulationload
    })
    this.uniddataload().subscribe((unitdatalo) => {
      console.warn("unitdatalo", unitdatalo)
      this.unitdatalo_data = unitdatalo
    })
      this.rawmaterialgrid().subscribe((rawgrid) => {
        console.warn("rawgrid", rawgrid)
        this.rawgriddataLoad = rawgrid
        this.loadgrid(this.rawgriddataLoad )
      })
      this.rawcategoryload().subscribe((rawcategoryload) => {
        console.warn("rawcategoryload", rawcategoryload)
        this.datarawcategoryload = rawcategoryload
      })
    
    this.loadchemistry(this.PDRno).subscribe((loadchemdata) => {
      console.warn("loadchemdata", loadchemdata)
      this.datachem1 = loadchemdata
    })
    this.loadmicrobiology(this.PDRno).subscribe((loadmicrobiologydata) => {
      console.warn("loadmicrobiologydata", loadmicrobiologydata)
      this.datachem = loadmicrobiologydata
    })


 //   this.rowData = this.http.get<any[]>('http://24.187.220.60/Smartformulator_Formulalookup_webservice/displayformulation.json');
    //this.formulationload(this.formulacode).subscribe((formulationload) => {
    //  console.warn("formulaload", formulationload)
    //  this.rowData = formulationload
    //})
   this.toggle() ;
  }
  
  //addRow() {
  //  this.agGrid.api.updateRowData({
  //    add: [{ step: 0, inciname: 0, perc: 0, qty: ' ', Unit: 0, UnitCost: 0, Cost: 0, suppliername: ''}]
  //  });
  //}
}
export class FormulaGridData {
  FormulaName: string;
  Formulacode: string;
  ItemCode: string;
  Step: string;
  INCIName: string;
  Qtyinpercentage: string;
  Quantity: string;
  UnitName: string;
  UnitCost: string;
  Cost: string;
  SupplierName: string;
  Linenumber: string;
  TradeName: string;
  QuantityInLb: string;
  UnitcostInLb: string;
  CostInLb: string;
  GeneralItemcode: string;
  Column33: string;
  Column34: string;
  ActualTcQty: string;

}
export class Formulationtextbox {



  FormulaTotalQTY: string;
  Yield: string;
  formulaCost: string;
  formulaNetQty: string;
  TotalCostInLB: string;
  TotalPercentage: string;
  FormulaUnit: string;

}
export class FormulaLookUpData {
  PDRNo: string;
  FormulaCode: string;
  Description: string;
  TradeName: string;
  Class: string;
  SubClass: string;
  Status: string;
  LabelCode: string;
  SupercededBy: string;
  SupercededDate: string;
  MayProduce: string;
  ApprovedBy: string;
  ApprovedDT: string;
  MayPilot: string;
  MaxPilotQty: string;
  MaxPilotUnit: string;
  ProjectName: string;
  HMIS_Health: string;
  HMIS_Personal: string;
  HMIS_Flamable: string;
  HMIS_Physical: string;
  NFPA_Health: string;
  NFPA_Flamable: string;
  NFPA_Reactivity: string;
  NFPA_Special: string;
  FlashPtC: string;
  FlashPtF: string;
  FlashPtGTLT: string;
  FlashPtMethod: string;
  FlashPtOverride: string;
  QCPrep: string;
  FormulaProcedure: string;
  WasteStream: string;
  nmdHealthNfpa: string;
  ShelfLife: string;
  ShelfLifeUnit: string;
  MSDSPath: string;
  RegulatoryNotes: string;
  RegulatoryDoc1: string;
  RegulatoryDoc2: string;
  RegulatoryDoc3: string;
  RegulatoryDoc4: string;
  RegulatoryDoc5: string;
  RegulatoryDoc6: string;
  RegulatoryDoc7: string;
  RegulatoryDoc8: string;
  RegulatoryExcel1: string;
  RegulatoryExcel2: string;
  RegulatoryExcel3: string;
  RegulatoryExcel4: string;
  RegulatoryExcel5: string;
  RegulatoryExcel6: string;
  RegulatoryExcel7: string;
  RegulatoryExcel8: string;
  RegulatoryPdf1: string;
  RegulatoryPdf2: string;
  RegulatoryPdf3: string;
  RegulatoryPdf4: string;
  RegulatoryPdf5: string;
  RegulatoryPdf6: string;
  RegulatoryPdf7: string;
  RegulatoryPdf8: string;
  EURiskPhrases: string;
  EUSafetyPhrases: string;
  ManualSG: string;
  QS: string;
  QSQty: string;
  QSUom: string;
  TestSchedule: string;
  AddedBy: string;
  Locked: string;
  ShowFormula: string;
  AboutFormulation: string;
  useFormulation: string;
  WhoUse: string;
  formulationDoes: string;
  odor: string;
  ph: string;
  viscosity: string;
  appearence: string;
  FirstName: string;
  CompanyOwned: string;
  FormulaNotes: string;
  Yield: string;
  FormulaTotalQTY: string;
  FormulaUnit: string;
  formulaNetQty: string;
  TotalUnitCost: string;
  formulaCost: string;
  TotalCostInLB: string;
  TotalPercentage: string;
  LabRefNo: string;
  FormulaSpecsNotes: string;
  Formula: string;
  COO: string;
  SKU: string;
  MixNo: string;
  HighSpecificGravity: string;
  ReviewStatusOne: string;
  ReviewStatusTwo: string;
  ReviewByOne: string;
  ReviewByTwo: string;
  ReviewCommentOne: string;
  ReviewCommentTwo: string;
  ReviewStatusOneC: string;
  ReviewStatusTwoC: string;
  ReviewCommentOneC: string;
  ReviewCommentTwoC: string;
  cmbPrefix: string;
  txtBatchSize: string;
  cmbMainUnit: string;
  username: string;
  formulaPrefix: string;
  AddedDT: string;
  FormulaLevel: string;
  CRNumber: string;
  CRReason: string;



}
export class coachemistry {
  Testnamesafety: string;
  comentssafety: string;
  p_Size: string
}
export class coagirdjson {

}
export class FormulaLookUpcoaData {

}

 
