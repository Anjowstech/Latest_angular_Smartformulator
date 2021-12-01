import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchFormulaComponent } from 'src/app/formula-lookup/search-formula/search-formula.component';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-max-formula',
  templateUrl: './max-formula.component.html',
  styleUrls: ['./max-formula.component.css']
})
export class MaxFormulaComponent implements OnInit {
  private columnDefs;
  private rowHeight;
  private defaultColDef;
  private rowData;
  private rowStyle;
  private rowSelection;
  getformcod: string = '';
  constructor(public dialog: MatDialog, private http: HttpClient, private Datashare: DataShareServiceService) {
    this.rowSelection = 'single';
    this.rowStyle = { fontFamily: 'Verdana', color: 'black' };

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


    this.columnDefs = [
      {
        flex: 1,
        resizable: true,
        sortable: true,
        wrapText: true,     // <-- HERE
        autoHeight: true,
        rowDrag: true,
        headerStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' },

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
        cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px', wrapText: true },
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
        autoHeight: true,
        cellStyle: { border: 'solid', borderColor: 'black', borderTopWidth: '0.1px', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px' },
        width: 110,
        minWidth: 50,
        maxWidth: 120,
        headerName: "Item #", field: 'GeneralItemcode'
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
        headerName: "%", field: 'Qtyinpercentage'
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
    this.rowHeight = 120;

    //this.rowData = [
    //  { step: 'A', inciname: 'Deionized Water', tradename: 'Deionized Water', itemno: '0000-3456-2472', perc: '10.3838099', qty: '10.3838099', Unit: 'g', UnitCost: 0.00011, Cost: 0.00114, suppliername: 'American Distilling & Mfg.' },
    //  { step: '', inciname: 'Ammonium Laureth Sulfate And Ammonium Lauryl Sulfate And Lauramide Dea And D- Glucopyranoside And Ammonium Xylenesulfonate', tradename: 'Ammonium Laureth Sulfate', itemno: '0000-3456-2472', perc: '1.0000000', qty: '1.0000000', Unit: 'g', UnitCost: 0.00441, Cost: 0.00441, suppliername: 'Chemax, Inc.' },
    //  { step: '', inciname: 'Ball mil for 4 hours', tradename: '', itemno: '', perc: '', qty: '', Unit: '', suppliername: '' },
    //  { step: 'B', inciname: 'Dehydrogenate Tallow Phthalic Acid Amide', tradename: 'Dehydrogenate Tallow Phthalic Acid', itemno: '0000-3456-973', perc: '1.2900000', qty: '3.2250000', Unit: 'g', UnitCost: 0.00661, Cost: 0.02133, suppliername: 'WestLake Plastics Company' },
    //  { step: '', inciname: 'Add while mixing slowly', tradename: '', itemno: '', perc: '', qty: '', Unit: '', suppliername: '' },
    //  { step: 'c', inciname: 'Cetyl Alcohol-1', tradename: 'Cetyl Alcohol-1', itemno: '0000-3456-936', perc: '0.4300000', qty: '1.0750000', Unit: 'g', UnitCost: 0.02590, Cost: 0.02590, suppliername: 'Isp Corporation' },
    //  { step: 8, inciname: 10, perc: 12, qty: 'qew', Unit: 13, UnitCost: 24, Cost: 45, suppliername: 'abc' },
    //  { step: 9, inciname: 'dsfsdfsdfsdfsdfsdfsdfdsfrsgsfgsgdgdfgdfgdfg', perc: 12, qty: 'qew', Unit: 13, UnitCost: 24, Cost: 45, suppliername: 'abc' },
    //];
  }
  onColumnResized(params) {
    params.api.resetRowHeights();
  }

  onColumnVisible(params) {
    params.api.resetRowHeights();
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
  formulationload(formulcode: string) {
    var formulcod: string = formulcode;

    let params1 = new HttpParams().set('Formulacode', formulcod);
    return this.http.get("http://localhost/Smartformulator_Formulalookup_webservice/displayformulation.json", { params: params1 })
  }
  ngOnInit() {
    this.getformcod = this.Datashare.getformcode();
    this.formulationload(this.getformcod).subscribe((formulationloadmax) => {
      console.warn("formulaload", formulationloadmax)
      this.rowData = formulationloadmax
    })
  }

}
