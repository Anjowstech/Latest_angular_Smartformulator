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
import { AgGridAngular } from 'ag-grid-angular';





@Component({
  selector: 'app-formula-lookup',
  templateUrl: './formula-lookup.component.html',
  styleUrls: ['./formula-lookup.component.css']
})
export class FormulaLookupComponent implements OnInit {
 
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;

  //onAddRow() {
  //  this.agGrid.api.updateRowData({
  //    add: [{ make: 'BMW', model: 'S2', price: '63000' }]
  //  });

  //}
  public gridApi;
  private columnDefs;
  public rowHeight;
  public defaultColDef;
  public rowData:any;
  private rowStyle;
public rowSelection;
  rowindex: any;
  constructor(public dialog: MatDialog, private http: HttpClient) {
    this.rowSelection = 'single';
    this.rowStyle = { fontFamily: 'Verdana',color:'black' };

    this.defaultColDef = {
      flex: 1,
    
    
     
      wrapText: true,
      autoHeight: true,
      sortable: true,
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
    this.rowHeight= 40;
   
 this. columnDefs = [
   {
     flex: 1,
     resizable: true,
     sortable: true,
    wrapText: true,     // <-- HERE
     autoHeight: true ,
     rowDrag: true,
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
     sortable: true,
    wrapText: true,     // <-- HERE
     autoHeight: true,
     cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' },
      width: 35,
      minWidth: 20,
      maxWidth: 70,
     headerName: "Step", field: 'Step'
   },
   {
    
       // <-- HERE
     autoHeight: true,
     editable: true,
     cellStyle: {  border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' , wrapText: true  },
     headerName: "INCI Name",
     //width: 400,
     //minWidth: 40,
     //maxWidth: 500,
      field: "INCIName"
     },
   {
     flex: 1,
     resizable: true,
     sortable: true,
     wrapText: true,     // <-- HERE
     autoHeight: true, headerName: "Trade Name", field: 'TradeName', cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' }
   },
  
   {
     flex: 1,
     resizable: true,
     sortable: true,
    wrapText: true,     // <-- HERE
     autoHeight: true ,
     cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' },
     width: 110,
     minWidth: 50,
     maxWidth: 120,
     headerName: "Item #", field: 'Itemcode'
   },
   {
     flex: 1,
     resizable: true,
     sortable: true,
    wrapText: true,     // <-- HERE
     autoHeight: true,
     cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' },
     width: 90,
     minWidth: 90,
     maxWidth: 120,
      headerName: "%",field: 'Qtyinpercentage'
    },
   {
     flex: 1,
     resizable: true,
     sortable: true,
    wrapText: true,     // <-- HERE
     autoHeight: true,
     headerName: "Qty", field: 'Quantity',
     width: 100,
     minWidth: 90,
     
     maxWidth: 140, cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' }
   },
   {
     flex: 1,
     resizable: true,
     sortable: true,
    wrapText: true,     // <-- HERE
     autoHeight: true,
      headerName: "Unit", field: 'UnitName',
     width: 30,
     minWidth: 20,
     maxWidth: 50,
      cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' }
    },
   {
     flex: 1,
     resizable: true,
     sortable: true,
    wrapText: true,     // <-- HERE
     autoHeight: true,
     headerName: "Unit Cost $", field: 'UnitCost', width: 70,
     minWidth: 40,
     maxWidth: 100,
     cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' }
   },
   {
     flex: 1,
     resizable: true,
     sortable: true,
    wrapText: true,     // <-- HERE
     autoHeight: true,
     headerName: "Cost $", field: 'Cost', width: 90,
     minWidth: 40,
     maxWidth: 100,
    
     cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' }
   },
    
   {
     flex: 1,
     resizable: true,
     sortable: true,
     wrapText: true,
     
      // <-- HERE
     autoHeight: true, headerName: "Supplier Name", field: 'SupplierName', cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' }
   },
  
  
  ];
   
    
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
  searchformula(): void {
    const dialogRef = this.dialog.open(SearchFormulaComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  formulaproperty(): void {
    const dialogRef = this.dialog.open(FormulaPropertyComponent, {
      width: '60%', height: '70%', disableClose: true
    });
  }
  searchpdr(): void {
    const dialogRef = this.dialog.open(SearchPdrComponent, {
      width: '80%', height: '90%', disableClose: true
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
      width: '90%', height: '90%', disableClose: true
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
 
  rowDoubleClicked(event) {
    window.close();
    window.open(
      "/RawMaterial", "_blank");

  }
  rowRightClicked(event) {
    const dialogRef = this.dialog.open(SearchFormulaComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  onRowClick(event: any): void {
    this.rowindex = event.rowIndex;
  
  }
  addRow() {
    this.agGrid.api.updateRowData({
      add: [{ step: '', inciname: '', tradename: '', itemno: '', perc: '', qty: '', Unit: '', UnitCost: null, Cost: null, suppliername: '' }],
      addIndex: this.rowindex
    });
    this.rowindex = null;
    //this.agGrid.api.updateRowData({
    //  add: [{ step: '', inciname: '', tradename: '', itemno: '', perc: '', qty: '', Unit: '', UnitCost: 0.00011, Cost: 0.00114, suppliername: ''}]
    //});
  }
  formulationload() {
    return this.http.get("http://localhost/Smartformulator_Formulalookup_webservice/displayformulation.json")
  }
  //addmarketingindicator(): void {
  //  const dialogRef = this.dialog.open(AddMarketingIndicatorComponent, {
  //    width: '90%', height: '90%', disableClose: true
  //  });
  //}
  ngOnInit() {
 //   this.rowData = this.http.get<any[]>('http://localhost/Smartformulator_Formulalookup_webservice/displayformulation.json');
    this.formulationload().subscribe((formulationload) => {
      console.warn("rawcategoryload", formulationload)
      this.rowData = formulationload
    })
   this.toggle() ;
  }
  
  //addRow() {
  //  this.agGrid.api.updateRowData({
  //    add: [{ step: 0, inciname: 0, perc: 0, qty: ' ', Unit: 0, UnitCost: 0, Cost: 0, suppliername: ''}]
  //  });
  //}
}
