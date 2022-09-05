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
  rowindex: any;
  public rowSelection;
  rowDatavoc: any = [];
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
    this.rowSelection = 'single';
  }
  columnDefsvoc = [
    {
      flex: 1,
      rowDrag: true,
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
      resizable: true,
      // <-- HERE
      autoHeight: true,
      editable: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      headerName: "INCI Name",
      minWidth: 800,
      maxWidth: 900,
      field: "INCIName"
    },


    {
      // flex: 1,
      // resizable: true,

      //wrapText: true,     // <-- HERE
      autoHeight: true,

      resizable: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal",'color':'black' },

      // cellClassRules: cellClassRules,

      minWidth: 400,
      maxWidth: 500,
      headerName: "Fill Ratio %", field: 'fillratio', type: 'numericColumn'


    },
    {
      // flex: 1,
      // resizable: true,
      resizable: true,
      //wrapText: true,     // <-- HERE
      // autoHeight: true,
      headerName: "VOC %", field: 'voc', type: 'numericColumn',
      //width: 100,
      minWidth: 400,
      maxWidth: 500,
      editable: false,
      
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", },
    },
    


  ];
  onGridReadyone(params) {
    this.gridApione = params.api;
    this.rowDatavoc = [{
     
      INCIName: 'Deionized Water',
      fillratio: '0.0000',
      voc: '0.0000',
      
    },];
    this.gridApione.setRowData(this.rowDatavoc);
  }
  addRow() {
    this.rowindex =1;
  
     
      // let rowData = [];
      //this.gridApi.forEachNode(RowNode => rowData.push(RowNode.data));

      //this.gridApi.setRowData(rowData);
      //var selectedRow: any = this.rowindex;

    this.gridApione.updateRowData({ add: [{ INCIName: '', fillratio: '', voc: '' }], addIndex: this.rowindex });
        // this.gridApi.setRowData(this.rowData);
        //var newRowData: any = this.rowData.splice(this.rowindex, 0,newData);
        //var data = this.radiovalue;
        //this.gridApi.setRowData(this.rowData);
        //   this.gridApi.getRowNode(this.rowindex);
    this.gridApione.getRowNode(this.rowindex);

        //this.rowindex = null;
    this.gridApione.ensureIndexVisible(this.rowindex, 'bottom');
      
      

    this.rowindex = null;
  }
  deleteRow() {
    var selectedData = this.gridApione.getSelectedRows();
    var qua: any = selectedData[0].Quantity;
    this.gridApione.updateRowData({ remove: selectedData });
  }
  rowClicked(event: any): void {
  
    this.rowindex = event.rowIndex;

  }
  ngOnInit() {

    var dat: any = this.data;
    this.propvocformulaname = this.data.displaydata[1];
    this.propvocformulacode = this.data.displaydata[0];
    this.propvocPDRno = this.data.displaydata[2];
  }

}
