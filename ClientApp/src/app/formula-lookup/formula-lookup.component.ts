import { Component, OnInit, ViewChild } from '@angular/core';
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
import { Router } from '@angular/router';
import { RawMaterialComponent } from 'src/app/raw-material/raw-material.component';

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
  Isformat1: any;
  backformuldetails: string[];
  pages: string[] = ["tab-1", "tab-2", "tab-3", "tab-4"];
  disableEnd: boolean = true;
  tabIndex = 0;
  actualPage = 1
  columnApi: any;
  newData: any = [];
  active: any;
  formactive: any;
  proced: any;
  proceduretextlist: string;
  procedgrid: any;
  generalrowData: any;
  customername: string
  ApprovedBy: string;
  ApprovedDT: string;
  ProjectName: string;
  ShelfLife: string;
  ShelfLifeUnit: string;
  SubClass: string;
  Class: string;
  MaxPilotQty: string;
  TradeName: string;
  LabRefNo: string;
  Status: string;
  TotalCostInLB: string;
  TotalCostInkg: string;
  TotalPercentage: string;
  TotalUnitCost: string;
  TotalUnitCosted: string;
  Yield: string;
  formulaCost: string;
  formulaNetQty: string;
  SupercededBy: string;
  FormulaTotalQTY: string;
  companyowned: string;
  ManualSG: string;
  manuprocreviewdata: any;
  useFormulation: string;
  market_indi_data: any;
  ph: string;
  odor: string;
  appearence: string;
  formulationDoes: string;
  WhoUse: string;
  FormulaSpecsNotes: string;
  AboutFormulation: string;
  viscosity: string;
  FormulaNotes: string;
  formulamarketingdata: any;
  AudittrackData: any;
  rawgriddataLoad: any;
  incilabel: string;
  gridinciname: string = "";
  griditem: string;
  gridtradename: string;
  gridp: string;
  gridsuppliername: string;
  incicost: string;
 radiovalue: string = "1";
  labbatchh: string ="1.00000";
  labbatch: string = "1.00000";
  selectedunit: string="";
  unitvalue: string;
  unitdatalo_data: any;
  confactor: string = "1";
  instruc: string;
  unname: any;
  rowData2: any;
  count: Number=0;
  //onAddRow() {
  //  this.agGrid.api.updateRowData({
  //    add: [{ make: 'BMW', model: 'S2', price: '63000' }]
  //  });

  //}

  public gridApi;
  //private columnDefs;
  public rowHeight;
  public defaultColDef;
  public rowData: any = [];

  private rowStyle;
  pdrnum: string;
  formulacod: string;
  formulanam: string;
  public rowSelection;
  formuladetails: string[];
  rowindex: any;
  formulacode: string = "";
  formulaname: string;
  PDRno: string;
  labref: string = '';
  public rowClassRules;
  private getRowStyle;
  private getcellstyle;
  radiodata: any;
  private columnDefs;
  radiochange: any;
  constructor(public dialog: MatDialog, private http: HttpClient, private Datashare: DataShareServiceService, private router: Router) {



    //radiovalue: string="1";
    this.rowSelection = 'single';
    this.rowStyle = { fontFamily: 'Verdana', color: 'black' };

    this.defaultColDef = {
      flex: 1,



      wrapText: true,
      autoHeight: true,

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
    this.rowHeight = 10;
    const cellClassRules = {
      "cell-pass": this.radiovalue == "1",
      "cell-fail": this.radiovalue == "2"
    };

  

    this.getRowStyle = params => {
      if (params.data.SupplierName === "" && params.data.INCIName) {

        params.data.UnitName = "";
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
    headerStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px', },

       cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' },
      
    checkboxSelection: true,
    suppressSizeToFit: true,
    field: '', width: 25,
    minWidth: 20,
    maxWidth: 70,
  },
  {
    flex: 1,
    resizable: true,
    editable: true,
    wrapText: true,     // <-- HERE
    autoHeight: true,
    onCellClicked: this.makeCellClickedstep.bind(this),
    cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' },
    width: 20,
    minWidth: 10,
    maxWidth: 50,
    headerName: "St", field: 'Step'
  },
  {
    onCellClicked: this.makeCellClickedinci.bind(this),
    // <-- HERE
    autoHeight: true,
    editable: true,
    cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px', lineheight:17,wrapText: true },
    headerName: "INCI Name",

    field: "INCIName"
  },
  {
    onCellClicked: this.makeCellClickedtrade.bind(this),
   
    flex: 1,
    resizable: true,
    editable: true,
    wrapText: true,
    width: 270,
    minWidth: 70,
    maxWidth: 400,
    // <-- HERE
    autoHeight: true, headerName: "Trade Name", field: 'TradeName', cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' }
  },
  {
    flex: 1,
    resizable: true,

    wrapText: true,
    width: 150,
    minWidth: 30,
    maxWidth: 260,
    // <-- HERE
    autoHeight: true, headerName: "Supplier Name", field: 'SupplierName', cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' }
  },

  {
    onCellClicked: this.makeCellClickeditem.bind(this),
    //flex: 1,
    //resizable: true,

    //wrapText: true,     // <-- HERE
    //autoHeight: true,
    //autoWidth: true,
    cellStyle: {

      border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px', 'text-align': "right"
    },
   

   

    minWidth: 40,
    maxWidth: 180,
    headerName: "Item #", field: 'GeneralItemcode', type: 'numericColumn'
  },
  {
    // flex: 1,
    // resizable: true,

    //wrapText: true,     // <-- HERE
    // autoHeight: true,
    
    cellStyle:

    {
      border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px', backgroundColor: 'lightblue'
    },
    onCellValueChanged: this.onCellValueChanged.bind(this),
    editable: function (params) {
      if (params.data.SupplierName === "" && params.data.TradeName == "" ) {
        return false;
      } else if (params.node.rowIndex == 0) {
        return false;
      }
      else {
        return true;
      }

    },
    // cellClassRules: cellClassRules,
    
    minWidth: 90,
    maxWidth: 130,
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

    maxWidth: 140, cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px', backgroundColor: this.changecolor() }
  },
  {
    flex: 1,
    resizable: true,

    wrapText: true,     // <-- HERE
    autoHeight: true,
    headerName: "UOM", field: 'UnitName',

    minWidth: 30,
    maxWidth: 90,
    cellStyle:

      { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' }
  },
  {
    // flex: 1,
    // resizable: true,

    //wrapText: true,     // <-- HERE
    // autoHeight: true,
    headerName: "UnitCost ", field: 'UnitCost', width: 70,
    minWidth: 60,
    maxWidth: 120, type: 'numericColumn',
    cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' }
  },
  {
    // flex: 1,
    // resizable: true,

    //wrapText: true,     // <-- HERE
    // autoHeight: true,
    headerName: "Cost $", field: 'Cost', width: 90,
    aggFunc: this.mySum.bind(this),
    minWidth: 80,
    maxWidth: 110,
    type: 'numericColumn',
    cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px', 'text-align': "right" },
   

  },




  ];
   numberValueFormatter(params) {
  return params.value.toFixed(2);
}

  dataFormatter(params) {
  return   String(params.value.toFixed(7));
}
 columnDefsforqty = [
  {
    flex: 1,
    resizable: true,

    wrapText: true,     // <-- HERE
    autoHeight: true,
    rowDrag: true,
    headerStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px', },

    cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' },
    checkboxSelection: true,
    suppressSizeToFit: true,
    field: '', width: 25,
    minWidth: 20,
    maxWidth: 70,
  },
  {
    flex: 1,
    resizable: true,
    editable: true,
    wrapText: true,     // <-- HERE
    autoHeight: true,
    cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' },
    width: 20,
    minWidth: 10,
    maxWidth: 50,
    headerName: "St", field: 'Step'
  },
  {
    onCellClicked: this.makeCellClickedinci.bind(this),
    // <-- HERE
    autoHeight: true,
    editable: true,
    cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px', wrapText: true },
    headerName: "INCI Name",

    field: "INCIName"
  },
  {
     onCellClicked: this.makeCellClickedtrade.bind(this),
    flex: 1,
    resizable: true,
    editable: true,
    wrapText: true,
    width: 270,
    minWidth: 70,
    maxWidth: 400,
    // <-- HERE
    autoHeight: true, headerName: "Trade Name", field: 'TradeName', cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' }
  },
  {
    flex: 1,
    resizable: true,

    wrapText: true,
    width: 150,
    minWidth: 30,
    maxWidth: 260,
    // <-- HERE
    autoHeight: true, headerName: "Supplier Name", field: 'SupplierName', cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' }
  },

  {
    onCellClicked: this.makeCellClickeditem.bind(this),
    //flex: 1,
    //resizable: true,
    
    //wrapText: true,     // <-- HERE
    //autoHeight: true,
    //autoWidth: true,
    cellStyle: {

      border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px', 'text-align': "right", backgroundColor: this.changecolor2()
    },

    editable: true,

    minWidth: 40,
    maxWidth: 180,
    headerName: "Item #", field: 'GeneralItemcode', type: 'numericColumn'
  },
  {
    // flex: 1,
    // resizable: true,

    //wrapText: true,     // <-- HERE
    // autoHeight: true,
    cellStyle:

    {
      border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px',

    },

    // cellClassRules: cellClassRules,

    minWidth: 90,
    maxWidth: 130,
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
    editable:  function(params) {
      if (params.data.SupplierName === "" && params.data.TradeName == "" ) {
        return false;
      } else if (params.node.rowIndex == 0) {
        return false;
      }
      else {
        return true;
      }
      
    },
    maxWidth: 140, cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px', backgroundColor: 'lightblue' }
  },
  {
    flex: 1,
    resizable: true,

    wrapText: true,     // <-- HERE
    autoHeight: true,
    headerName: "UOM", field: 'UnitName',

    minWidth: 30,
    maxWidth: 90,
    cellStyle:

      { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' }
  },
  {
    // flex: 1,
    // resizable: true,

    //wrapText: true,     // <-- HERE
    // autoHeight: true,
    headerName: "UnitCost ", field: 'UnitCost', width: 70,
    minWidth: 60,
    maxWidth: 120, type: 'numericColumn',
    cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' }
  },
  {
    // flex: 1,
    // resizable: true,

    //wrapText: true,     // <-- HERE
    // autoHeight: true,
    headerName: "Cost $", field: 'Cost', width: 90,

    minWidth: 80,
    maxWidth: 110,
    type: 'numericColumn',
    cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px', 'text-align': "right" },
   

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
  searchformula(): void {
    this.active = "1";
    const dialogRef = this.dialog.open(SearchFormulaComponent, {
      width: '80%', height: '90%', disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.formulacode = result[0];
      this.formulaname = result[1];
      this.labref = result[2];
      this.PDRno = result[3];

      this.formulationload(this.formulacode, this.labbatchh, this.selectedunit).subscribe((formulationload) => {
        console.warn("formulaload", formulationload)
        this.rowData = formulationload
        this.selectedunit = String(this.rowData[1].UnitName);
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
      this.generalformulationload(this.formulacode).subscribe((generalformulationload) => {
        console.warn("generalformulationload", generalformulationload)
        this.generalrowData = generalformulationload
        this.generalmethod(this.generalrowData);
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
      this.uniddataload().subscribe((unitdatalo) => {
        console.warn("unitdatalo", unitdatalo)
        this.unitdatalo_data = unitdatalo
      })


    });
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



  formulaproperty(): void {
    const dialogRef = this.dialog.open(FormulaPropertyComponent, {
      width: '60%', height: '70%', disableClose: true
    });
  }
  searchpdr(): void {
    this.active = "1";
    const dialogRef = this.dialog.open(SearchPdrComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.formulacode = result[0];
      this.PDRno = result[1];
      this.formulaname = result[2];


      this.formulationload(this.formulacode, this.labbatchh, this.selectedunit).subscribe((formulationload) => {
        console.warn("formulaload", formulationload)
        this.rowData = formulationload

      })


    });
  }
  curDate = new Date();
  addqc(): void {
    const dialogRef = this.dialog.open(AddQCComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  marketingcallouts(): void {
    const dialogRef = this.dialog.open(MarketingCalloutsComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  createlabbatchtkts(): void {
    const dialogRef = this.dialog.open(CreateLabTktsComponent, {
      width: '90%', height: '90%', disableClose: true
    });
  }
  Opencustomer(): void {
    const dialogRef = this.dialog.open(CustomerDetailsComponent, {
      width: '95%', height: '95%', disableClose: true
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
    const dialogRef = this.dialog.open(ScalabilityFactorComponent, {
      width: '40%', height: '20%', disableClose: true
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
    const dialogRef = this.dialog.open(PropellantsvocCalculationComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  AddproductTesting(): void {
    const dialogRef = this.dialog.open(AddproductTestingComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  makeCellClickedinci(event) {
    this.incilabel = "INCI Name";
    this.Datashare.sendlabel(this.incilabel);
    this.editcellgrid(event)
  }
  makeCellClickeditem(event) {
    this.incilabel = "Item"
    this.Datashare.sendlabel(this.incilabel);
    this.editcellgrid(event)
  }
  makeCellClickedtrade(event) {
    this.incilabel = "Trade Name"
    this.Datashare.sendlabel(this.incilabel);
    this.editcellgrid(event)
  }
  makeCellClickedstep(event) {
    this.editcellgriddata2(event)
  }

  editcellgrid(event) {

    this.rowindex = event.rowIndex;
    const dialogRef = this.dialog.open(IncinameSelectComponent, {
      width: '80%', height: '40%', disableClose: true
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
      if (result != "") {
        var selectedData = this.gridApi.getSelectedRows();
         this.gridApi.updateRowData({ remove: selectedData });
        //var rowNode = this.gridApi.getRowNode(this.rowindex);
        //var newData = {
        //  Step: '',
        //  INCIName: this.gridinciname,
        //  TradeName: this.gridtradename,
        //  GeneralItemcode: this.griditem,
        //  Qtyinpercentage: '0.0000000',
        //  Quantity: '0.0000000',
        //  UnitName: this.unname,
        //  UnitCost: Number(this.incicost).toFixed(5),
        //  Cost: null,
        //  SupplierName: this.gridsuppliername,


        //};
        //rowNode.setData(newData);
        this.gridApi.updateRowData({
          add: [{ Step: '', INCIName: this.gridinciname, TradeName: this.gridtradename, GeneralItemcode: this.griditem, Qtyinpercentage: '0.0000000', Quantity: '0.0000000', UnitName: this.unname, UnitCost: Number(this.incicost).toFixed(5), Cost: null, SupplierName: this.gridsuppliername }],
          addIndex: this.rowindex

        });
        
      }
      else {
        

      }

    });
  }
  rowDoubleClicked(event) {
    
    const dialogRef = this.dialog.open(RawMaterialComponent, {
      width: '90%', height: '90%', disableClose: true
    });
  }

  
  editcellgriddata2(event:any):void {
    this.rowindex = event.rowIndex;
    const dialogRef = this.dialog.open(FormulaInstructionComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.instruc = result;
      
      if (result != "") {
        var selectedData = this.gridApi.getSelectedRows();
        this.gridApi.updateRowData({ remove: selectedData });
        //var rowNode = this.gridApi.getRowNode(this.rowindex);
        //var newData = {
        //  Step: '',
        //  INCIName: this.gridinciname,
        //  TradeName: this.gridtradename,
        //  GeneralItemcode: this.griditem,
        //  Qtyinpercentage: '0.0000000',
        //  Quantity: '0.0000000',
        //  UnitName: this.unname,
        //  UnitCost: Number(this.incicost).toFixed(5),
        //  Cost: null,
        //  SupplierName: this.gridsuppliername,


        //};
        //rowNode.setData(newData);
        this.gridApi.updateRowData({
          add: [{ Step: '', INCIName: this.instruc, TradeName: '', GeneralItemcode:'', Qtyinpercentage: '', Quantity: '', UnitName: '', UnitCost: null, Cost: null, SupplierName: ''}],
          addIndex: this.rowindex

        });
     
        

      }
      else {


      }

    });
  }

  rowClicked(event: any): void {
    this.count = 0;
    this.rowindex = event.rowIndex;

  }
  addRow() {
    //var newData = {
    //      Step: '',
    //      INCIName: '',
    //      TradeName: '',
    //      GeneralItemcode: '',
    //      Qtyinpercentage: '',
    //      Quantity: '',
    //      UnitName: '',
    //      UnitCost:null,
    //      Cost: null,
    //      SupplierName: '',


    //    };
    //var newRowData: any = this.rowData.splice(this.rowindex, 0,newData);
    //var data = this.radiovalue;
    //this.gridApi.setRowData(this.rowData);
   
    this.gridApi.updateRowData({
      add: [{ Step: '', INCIName: '', TradeName: '', GeneralItemcode: '', Qtyinpercentage: '', Quantity: '', UnitName: '', UnitCost: null, Cost: '', SupplierName: '' }],
      addIndex: this.rowindex
    });
    this.gridApi.refreshClientSideRowModel();
    this.rowindex = null;
    //this.agGrid.api.updateRowData({
    //  add: [{ step: '', inciname: '', tradename: '', itemno: '', perc: '', qty: '', Unit: '', UnitCost: 0.00011, Cost: 0.00114, suppliername: ''}]
    //});
  }
  generalmethod(generalvalues: any) {

    for (let item of generalvalues) {

      this.customername = item.CusName

      this.ApprovedBy = item.ApprovedBy
      this.ApprovedDT = item.ApprovedDT
      this.ProjectName = item.ProjectName
      this.ShelfLife = item.ShelfLife
      this.ShelfLifeUnit = item.ShelfLifeUnit
      this.SubClass = item.SubClass
      this.Class = item.Class
      this.MaxPilotQty = item.MaxPilotQty
      this.TradeName = item.TradeName
      this.LabRefNo = item.LabRefNo
      this.Status = item.Status
      this.TotalCostInLB = item.TotalCostInLB
      this.TotalCostInkg = item.TotalCostInkg
      this.TotalPercentage = item.TotalPercentage
      this.TotalUnitCost = item.TotalUnitCost
      this.TotalUnitCosted= item.TotalUnitCost
      this.Yield = item.Yield
      this.formulaCost = item.formulaCost
      this.formulaNetQty = item.formulaNetQty
      this.SupercededBy = item.SupercededBy
      this.FormulaTotalQTY = item.FormulaTotalQTY
      this.companyowned = item.CompanyOwned
      this.ManualSG = item.ManualSG

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
    }
  }
  formulationload(formulcode: string,lab_batch:string,unitval:string) {
    var formulcod: string = formulcode;
    var labbac: string = lab_batch;
    var unival: string = unitval;
    let params1 = new HttpParams().set('Formulacode', formulcod)
      .set('labbatch', labbac)
      .set('unitname', unival);
    return this.http.get("https://formulalookupwebservice1.azurewebsites.net/displayformulation.json", { params: params1 })
  }
  proceduretext(formulcode: string) {
    var formulcod: string = formulcode;

    let params1 = new HttpParams().set('Formulacode', formulcod);
    return this.http.get("https://smartformulatorformulalookupwebservice4.azurewebsites.net/PrintProcedureFromText", { params: params1, responseType: 'text' })
  }
  proceduretextgrid(formulcode: string) {
    var formulcod: string = formulcode;

    let params1 = new HttpParams().set('Formulacode', formulcod);
    return this.http.get("https://smartformulatorformulalookupwebservice4.azurewebsites.net/PrintProcedureFromTextgrid", { params: params1, })
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
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
  Audittrackingload(formulcode: string) {
    var formulcod: string = formulcode;



    let params1 = new HttpParams().set('Formulacode', formulcod);
    return this.http.get("https://smartformulatorformulalookupwebservice6.azurewebsites.net/Fillauditgrid", { params: params1 })
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
  blurEvent(event: any) {
    this.unitvalue = this.selectedunit;
    this.labbatchh = event.target.value;
    this.labbatch = this.labbatchh;
    var totdata: Number = parseFloat(this.labbatch) * parseFloat(this.TotalUnitCosted)
    this.TotalUnitCost = String(totdata);
    this.formulationload(this.formulacode, this.labbatchh, this.unitvalue).subscribe((formulationload) => {
      console.warn("formulaload", formulationload)
      this.rowData = formulationload

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

    
    
     
    var sumvar: any = 0;
    for (let rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
      var rowNode = this.gridApi.getRowNode(rowin);
      sumvar = Number(sumvar) + Number(rowNode.data.Cost);
    }
    this.formulaCost = String(sumvar);
    var totcs: Number = sumvar * Number(this.labbatch);
    this.TotalUnitCost = String(totcs);

    
    
  }

  blurEventunit(event: any) {
    this.unitvalue = this.selectedunit;
    
    this.formulationload(this.formulacode, this.labbatchh, this.unitvalue).subscribe((formulationload) => {
      console.warn("formulaload", formulationload)
      this.rowData = formulationload
      
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
    this.wait(7000); 

    this.gridApi.setRowData(this.rowData);
    var sumvar: any = 0;
    for ( let rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
      var rowNode = this.gridApi.getRowNode(rowin);
      sumvar = Number(sumvar) + Number(rowNode.data.Cost);
    }
    this.formulaCost = String(sumvar);
    var totcs: Number = sumvar * Number(this.labbatch);
    this.TotalUnitCost = String(totcs);
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
  percentqty() {
    this.gridApi.setColumnDefs(this.columnDefsforqty);
    this.gridApi.redrawRows();
    this.gridApi.flashCells({
      columns: ['Qtyinpercentage', 'Quantity'],
    });
    //this.columnDefs = null;
    //this.columnDefs = this.columnDefsforqty;
  }
  onCellValueChanged(params)
  {

     var rowin: any=0;

    if (this.count != 1)
    {
      //this.firstdata= rowNode.data.Qtyinpercentage;
      rowin = params.node.rowIndex;
      if (rowin != 0)
      {
        rowin = params.node.rowIndex;
        if (params.newValue <= 0.0000000 )
        {
          var dat: any = params.oldValue;
          var rowNode = this.gridApi.getRowNode(rowin);
          rowNode.setDataValue('Qtyinpercentage', String(dat));
        }
        else if (params.newValue >= 100.0000000)
        {
          var dat: any = params.oldValue;
          var rowNode = this.gridApi.getRowNode(rowin);
          rowNode.setDataValue('Qtyinpercentage', String(dat));
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
          var enwda: any = (dat / 100).toFixed(7);
          var unicost: any = params.data.UnitCost;
          var updatedunicost: any = (enwda * unicost).toFixed(5);

          rowNode.setDataValue('Quantity', String(enwda));
          rowNode.setDataValue('Cost', String(updatedunicost));

          rowin = 0;
          var rowNode = this.gridApi.getRowNode(rowin);
          rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
          //var rowin2: any = params.node.rowIndex;
          //var rowNode2 = this.gridApi.getRowNode(rowin2);
          //rowNode2.setDataValue('Qtyinpercentage', String(qtyper.toFixed(7)));
          rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
          rowNode.setDataValue('Cost', String(rowNode.data.Cost));
          var fistrowdata: any = rowNode.data.Qtyinpercentage;

          var firstrowunicost: any = rowNode.data.UnitCost;
          var subvalue: any = (fistrowdata - dat).toFixed(7);


          if (subvalue <= 0.0000000)
          {
            rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
            rowNode.setDataValue('Quantity', String(rowNode.data.UnitCost));
            rowNode.setDataValue('Cost', String(rowNode.data.Cost));
          }
          else
          {
            rowNode.setDataValue('Qtyinpercentage', String(subvalue));

            var enwda2: any = (subvalue / 100).toFixed(7);
            var subcost: any = (enwda2 * firstrowunicost).toFixed(5)

            rowNode.setDataValue('Quantity', String(enwda2));
            rowNode.setDataValue('Cost', String(subcost));
          }
          subvalue = 0;
        }
      }
    
    
    
  
    
     
    
    var sumvar:any = 0;
    for (rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
      var rowNode = this.gridApi.getRowNode(rowin);
    sumvar  = Number(sumvar) + Number(rowNode.data.Cost);
    }
    this.formulaCost = String(sumvar);
    var totcs: Number = sumvar * Number(this.labbatch);
    this.TotalUnitCost = String(totcs);
      rowin = 0;
      this.count = 1;
    }
  }
  onCellValueChanged2(params) {

    var rowin: any = 0;

    if (this.count != 1) {
      //this.firstdata= rowNode.data.Qtyinpercentage;
      rowin = params.node.rowIndex;
      if (rowin != 0) {
        rowin = params.node.rowIndex;
        if (params.newValue <= 0.0000000) {
          var dat: any = params.oldValue;
          var rowNode = this.gridApi.getRowNode(rowin);
          rowNode.setDataValue('Quantity', String(dat));
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
          var enwda: any = (dat * 100).toFixed(7);
          var unicost: any = params.data.UnitCost;
          var updatedunicost: any = (enwda * unicost).toFixed(5);

          rowNode.setDataValue('Qtyinpercentage', String(enwda));
        //  rowNode.setDataValue('Cost', "0.00000");

        //  rowin = 0;
       //   var rowNode = this.gridApi.getRowNode(rowin);
         // rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
          //var rowin2: any = params.node.rowIndex;
          //var rowNode2 = this.gridApi.getRowNode(rowin2);
          //rowNode2.setDataValue('Qtyinpercentage', String(qtyper.toFixed(7)));
        // rowNode.setDataValue('UnitCost', "0.00000");
        //  rowNode.setDataValue('Cost', String(rowNode.data.Cost));
        //  var fistrowdata: any = rowNode.data.Qtyinpercentage;

        // var firstrowunicost: any = rowNode.data.UnitCost;
        //  var subvalue: any = (fistrowdata - dat).toFixed(7);


          //if (subvalue <= 0.0000000) {
          //  rowNode.setDataValue('Qtyinpercentage', String(rowNode.data.Qtyinpercentage));
          // rowNode.setDataValue('Quantity', '0.00000');
           // rowNode.setDataValue('Cost', String(rowNode.data.Cost));
         // }
         // else {
          //  rowNode.setDataValue('Qtyinpercentage', String(subvalue));

          //  var enwda2: any = (subvalue / 100).toFixed(7);
           // var subcost: any = (enwda2 * firstrowunicost).toFixed(5)

           // rowNode.setDataValue('Quantity', String(enwda2));
           // rowNode.setDataValue('Cost', String(subcost));
         // }
          //subvalue = 0;
        }
      }







      //var sumvar: any = 0;
      //for (rowin = 0; rowin <= this.rowData.length - 1; rowin++) {
      //  var rowNode = this.gridApi.getRowNode(rowin);
      //  sumvar = Number(sumvar) + Number(rowNode.data.Cost);
      //}
      //this.formulaCost = String(sumvar);
      //var totcs: Number = sumvar * Number(this.labbatch);
      //this.TotalUnitCost = String(totcs);
      //rowin = 0;
      this.count = 1;
    }
  }
  mySum(params) {
    var sum:any = 0;
    params.values.forEach(value => sum += value);
    this.TotalUnitCost = sum;
    return sum;
  }
  //addmarketingindicator(): void {
  //  const dialogRef = this.dialog.open(AddMarketingIndicatorComponent, {
  //    width: '90%', height: '90%', disableClose: true
  //  });
  //}
    ngOnInit() {
      this.backformuldetails = this.Datashare.getbackformdetails()
      this.PDRno = this.backformuldetails[0];
      this.Isformat1=false;
      this.formulacode = this.backformuldetails[1];
      this.formulaname = this.backformuldetails[2];
     
     
      this.rawmaterialgrid().subscribe((rawgrid) => {
        console.warn("rawgrid", rawgrid)
        this.rawgriddataLoad = rawgrid
        this.loadgrid(this.rawgriddataLoad )
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

 
