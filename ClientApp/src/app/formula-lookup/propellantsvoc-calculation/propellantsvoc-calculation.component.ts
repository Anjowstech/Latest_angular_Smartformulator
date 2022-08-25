import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { ColDef, GridApi, GridReadyEvent, RowDragEndEvent, GridOptions, Color } from 'ag-grid-community';
@Component({
  selector: 'app-propellantsvoc-calculation',
  templateUrl: './propellantsvoc-calculation.component.html',
  styleUrls: ['./propellantsvoc-calculation.component.css']
})
export class PropellantsvocCalculationComponent implements OnInit {
  propvocformulaname: string = "";
  propvocformulacode: string = "";
  propvocPDRno: string = "";
  private columnDefs1;
  public gridApione;

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
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.columnDefs1 = this.columnDefsvoc;
    
  }
  columnDefsvoc = [
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
      headerName: "Qty", field: 'Quantity1', type: 'numericColumn',
      //width: 100,
      minWidth: 90,
      editable: false,
      maxWidth: 140,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", },
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
  ngOnInit() {

    var dat: any = this.data;
    this.propvocformulaname = this.data.displaydata[1];
    this.propvocformulacode = this.data.displaydata[0];
    this.propvocPDRno = this.data.displaydata[2];
  }

}
