import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { formatDate } from '@angular/common';
import { MessageBoxYesnoComponent } from 'src/app/message-box-yesno/message-box-yesno.component';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { PdrManagementComponent } from '../../pdr-management/pdr-management.component';
import * as moment from 'moment';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { Datepickerstability } from 'src/app/formula-lookup/addphystability-test/Datepickerstability';
import {
  ColDef, GridApi, GridReadyEvent, RowDragEndEvent, GridOptions, Color, ICellEditorComp,
  ICellEditorParams, ValueGetterParams,
  ValueSetterParams} from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
@Component({
  selector: 'app-addphystability-test',
  templateUrl: './addphystability-test.component.html',
  styleUrls: ['./addphystability-test.component.css']
})
export class AddphystabilityTestComponent implements OnInit {

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  DiffDate: any;
  startdate: string;
  stdate: Date;

  enddate: string;

  initialdate: string="2020-10-10";
  duration1date: string;
  duration2date: string;
  duration3date: string;
  duration4date: string;
  duration5date: string;
  duration6date: string;
  duration7date: string;
  duration8date: string;
  duration9date: string="";
  duration10date: string="";
  otherdate: string;

  initialtime: string='Initial';
  duration1time: string='1Week';
  duration2time: string = '2Week';
  duration3time: string = '4Week';
  duration4time: string = '6Week';
  duration5time: string = '8Week';
  duration6time: string = '10Week';
  duration7time: string = '12Week';
  duration8time: string = '26Week';
  duration9time: string = '52Week';
  duration10time: string="";
  durationother: string = "";
  initialtime1: string = "";
  duration1time1: string = "";
  duration2time1: string = "";
    duration3time1: string = "";
  duration4time1: string = "";
  duration5time1: string = "";
  duration6time1: string = "";
  duration7time1: string = "";
  duration8time1: string = "";
  duration9time1: string = "";
  duration10time1: string = "";
  durationother1: string = "";
  removestabrows: any;

  formulacode: string;
  formulaname: string;
  labbatchno: string;
  pdrno: string;
  params;
  storagecondition: string;
  stability_detailload: any;
  freeze_detailload: any;
  stabno_detailload: any;
  phy_detailload: any;
  pdrdtl_load: any;
  private columnDefs;
  private columnDefs2;
  public rowSelection;
  private rowStyle;
  public rowHeight;
  public defaultColDef;
  public defaultColDef2;
  public frameworkComponents;
  private getRowStyle;
  stabno: any;
  fragrance: string = "";
  setalert: string = "";
  refno: string = "";
  packagesize: string = "";
  vendor: string = "";
  file: string = "";
  factor: string = "";
  spindle: string = "";
  technician: string = "";
  comments: string = "";
  lotno: string = "";
  approved: string;
  approvedby: string = "";
  labph: string = "";
  labviscosity: string = "";
  labsgravity: string = "";
  showalert: string = "";
  batchtype: string = "";
  ph: string = "";
  viscosity: string = "";
  specificgravity: string = "";
  viscmethod: string = "";
  viscfactor: string = "";
  speed: string = "";
  time: string = "";
  helipath: string = "";
  userna: string = "";
  mainList: stabilitymasterData[][] = [];
  detailsList: stabilitydetailsData[][] = [];
  freezeList: stabilityfreezeData[][] = [];
  rowDatastabilitydetails: Array<any> = [];
  public gridApione;
  i: number;
  j: number;
  stability_save_data: any;
  delete_stability: any;
  msgdata: string;
  isDisabledappr: boolean = true;
  stabilityapproval_load: any;
  constructor(@Inject(MAT_DIALOG_DATA,) public data: any, private datashare: DataShareServiceService, private http: HttpClient, public dialog: MatDialog) {
    this.rowHeight = 50;
    this.rowSelection = 'single';
    this.rowStyle = { fontFamily: 'Verdana', color: 'black' };
    this.getRowStyle = params => {
      if (params.data.Testing == "Duration(s)") {
        return { background: 'orange', };
      }};
    //function getDatePicker() {
    //  function Datepicker() { }
    //  Datepicker.prototype.init = function (params) {
    //    this.eInput = document.createElement("input");
    //    this.eInput.value = params.value;
    //    (this.eInput).datepicker({ dateFormat: "dd/mm/yy" });
    //  };
    //  Datepicker.prototype.getGui = function () {
    //    return this.eInput;
    //  };
    //  Datepicker.prototype.afterGuiAttached = function () {
    //    this.eInput.focus();
    //    this.eInput.select();
    //  };
    //  Datepicker.prototype.getValue = function () {
    //    return this.eInput.value;
    //  };
    //  Datepicker.prototype.destroy = function () { };
    //  Datepicker.prototype.isPopup = function () {
    //    return false;
    //  };
    //  return Datepicker;
    //}
    //datePicker: getDatePicker()

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
          return false;
        }
      }

    };
    this.columnDefs = this.columnDefsforper;



    this.defaultColDef2 = {
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
          return false;
        }
      }

    };
    this.columnDefs2 = this.columnDefsforper2;
   // this.rowHeight = 10;
  }


  columnDefsforper = [

    {
      flex: 1,
      resizable: true,
      editable: true,
      wrapText: true,     // <-- HERE
      autoHeight: true,

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", backgroundColor: 'Grey' },
      width: 60,
      minWidth:260,
      maxWidth: 260,
      headerName: "Testing", field: 'Testing', pinned: 'left', 

    },
    {

      autoHeight: true,
      editable: (params) => params.data.Testing != "Duration(s)" && params.data.Testing == "Time Intervals",
      cellStyle: {  'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      headerName: "Initial", field: "InitialReading", width: 30,
      minWidth: 170,
      maxWidth: 170,
      resizable: true, cellRenderer: this.athleteCellRendererFunc.bind(this),
      //cellEditor: this.athleteCellRendererFunc.bind(this),
      valueGetter: this.constValueGetter0.bind(this)
      //editable: true,
      //cellEditor: DatePicker,
      //cellEditorPopup: true,
      /* cellEditorFramework: AgGridDatePickerComponent*/
      /*    filter: "agDateColumnFilter",*/
    },
    {


      flex: 1,
      resizable: true,
      wrapText: true,
      width: 30,
      minWidth: 170,
      maxWidth: 170,
      editable: (params) => params.data.Testing != "Duration(s)" && params.data.Testing == "Time Intervals",
      autoHeight: true, headerName: "Duration 1", field: 'TwentyFourHours',
    
      cellStyle: { 'color': 'black', 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" }, cellRenderer: this.stabCellRendererdur1.bind(this),
      //cellEditor: this.constValueGetter.bind(this),
      valueGetter: this.constValueGetter1.bind(this)
    },
    {
      flex: 1,
      resizable: true,

      wrapText: true,
      width: 30,
      minWidth: 170,
      maxWidth: 170,
      editable: (params) => params.data.Testing != "Duration(s)" && params.data.Testing == "Time Intervals",
      autoHeight: true, headerName: "Duration 2", field: 'OneWeek',

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" }, cellRenderer: this.stabCellRendererdur2.bind(this),
   // cellEditor: this.stabCellRendererdur2.bind(this),
      valueGetter: this.constValueGetter2.bind(this),
    },

    {
      flex: 1,
      autoHeight: true,
      headerName: "Duration 3", field: 'TwoWeeks',

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "left" },

      editable: (params) => params.data.Testing != "Duration(s)" && params.data.Testing == "Time Intervals",
      width: 30,
      minWidth: 170,
      maxWidth: 170,
      cellRenderer: this.stabCellRendererdur3.bind(this),
      //cellEditor: this.stabCellRendererdur3.bind(this),
      valueGetter: this.constValueGetter3.bind(this),
    },
    {
      flex: 1,
      headerName: "Duration 4", field: 'OneMonth', 

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "left"  },
      editable: (params) => params.data.Testing != "Duration(s)" && params.data.Testing == "Time Intervals",
      width: 30,
      minWidth: 170,
      maxWidth: 170,
      cellRenderer: this.stabCellRendererdur4.bind(this),
      //cellEditor: this.stabCellRendererdur4.bind(this),
      valueGetter: this.constValueGetter4.bind(this),

    },
    {
      flex: 1,
      headerName: "Duration 5", field: 'TwoMonth',
      //width: 100,
      width: 30,
      minWidth: 170,
      maxWidth: 170,
      editable: (params) => params.data.Testing != "Duration(s)" && params.data.Testing == "Time Intervals",
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "left" }, cellRenderer: this.stabCellRendererdur5.bind(this),
      //cellEditor: this.stabCellRendererdur5.bind(this),
      valueGetter: this.constValueGetter5.bind(this)
    },
    {
      flex: 1,
      resizable: true,
      wrapText: true,
      autoHeight: true,
      editable: (params) => params.data.Testing != "Duration(s)" && params.data.Testing == "Time Intervals",
      headerName: "Duration 6", field: 'ThreeMonth',

      width: 30,
      minWidth: 170,
      maxWidth: 170,

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "left"  }, cellRenderer: this.stabCellRendererdur6.bind(this),
      //cellEditor: this.stabCellRendererdur6.bind(this),
      valueGetter: this.constValueGetter6.bind(this)
    },
    {
      flex: 1,
      headerName: "Duration 7", field: 'Sixmonth',
      width: 30,
      minWidth: 150,
      maxWidth: 150,
      autoHeight: true,
      editable: (params) => params.data.Testing != "Duration(s)" && params.data.Testing == "Time Intervals",
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "left" }, cellRenderer: this.stabCellRendererdur7.bind(this),
      //cellEditor: this.stabCellRendererdur7.bind(this),
      valueGetter: this.constValueGetter7.bind(this)
    },
    {
      flex: 1,  
      headerName: "Duration 8", field: 'Twelvemonth', width: 30,
      minWidth: 150,
      maxWidth: 150,
      

      autoHeight: true,
      editable: (params) => params.data.Testing != "Duration(s)" && params.data.Testing == "Time Intervals",
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal",  'text-align': "left" }, cellRenderer: this.stabCellRendererdur8.bind(this),
      //cellEditor: this.stabCellRendererdur8.bind(this),
      valueGetter: this.constValueGetter8.bind(this)
    },
    {
      flex: 1,
      headerName: "Duration 9", field: 'Twentyfourmonth', width: 30,
      minWidth: 150,
      maxWidth: 150,
      editable: (params) => params.data.Testing != "Duration(s)" && params.data.Testing == "Time Intervals",
      
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "left" }, cellRenderer: this.stabCellRendererdur9.bind(this),
      //cellEditor: this.stabCellRendererdur9.bind(this),
      valueGetter: this.constValueGetter9.bind(this)
    },
    {
      flex: 1,
      headerName: "Duration 10", field: 'Thirtysixmonth', width: 30,
      minWidth: 150,
      maxWidth: 150,
      editable: (params) => params.data.Testing != "Duration(s)" && params.data.Testing == "Time Intervals",
      
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "left"  }, cellRenderer: this.stabCellRendererdur10.bind(this),
      //cellEditor: this.stabCellRendererdur10.bind(this),
      valueGetter: this.constValueGetter10.bind(this)

    },
    {
      flex: 1,
      headerName: "Other month ", field: 'OtherMonth', width: 30,
      minWidth: 150,
      maxWidth: 150,
      editable: (params) => params.data.Testing != "Duration(s)" && params.data.Testing == "Time Intervals",
       
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "left"  }, cellRenderer: this.stabCellRendererdurother.bind(this),
      cellEditor: this.stabCellRendererdurother.bind(this),

    },
    //{

    //  headerName: "Line Number", field: 'LineNumber', width: 70,
    //  minWidth: 100,
    //  maxWidth: 140,
    //  editable: true,
    //  cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" }, cellRenderer: this.athleteCellRendererFunc

    //},




  ];


  onColumnResized(params) {

    params.api.resetRowHeights();
  }

  onColumnVisible(params) {
    params.api.resetRowHeights();
  }


  columnDefsforper2 = [

    {
      flex: 1,
      resizable: true,
      editable: true,
      wrapText: true,
      autoHeight: true,

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal",backgroundColor: 'Grey'  },
      width: 40,
      minWidth: 260,
      maxWidth: 260,
      headerName: "Testing", field: 'Testing', pinned: 'left'
    },
    {
      flex: 1,
      autoHeight: true,
      editable: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      width: 40,
      minWidth: 240,
      maxWidth: 240,
      headerName: "Initial Results", field: "Initial"
    },
    {


      flex: 1,
      resizable: true,
      wrapText: true,
      width: 40,
      minWidth: 240,
      maxWidth: 240,
      editable: true,
   
      autoHeight: true, headerName: "1ST CYCLE", field: 'Cycle1',

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
    },
    {
      flex: 1,
      resizable: true,
      editable: true,
      wrapText: true,
      width: 40,
      minWidth: 240,
      maxWidth: 240,
      autoHeight: true, headerName: "2ND CYCLE", field: 'Cycle2',

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
    },

    {
      flex: 1,
      autoHeight: true,
      headerName: "3RD CYCLE", field: 'Cycle3',
      editable: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", },


      width: 40,
      minWidth: 240,
      maxWidth: 240,

    },
    
    {
      flex: 1,
      headerName: "4TH CYCLE", field: 'Cycle4', 
      //width: 100,
      width: 40,
      minWidth: 240,
      maxWidth: 240,
      editable: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
    },
    {
      flex: 1,
      resizable: true,
      wrapText: true,
      autoHeight: true,
      editable: true,
      headerName: "5TH CYCLE", field: 'Cycle5',

      width: 40,
      minWidth: 240,
      maxWidth: 240,

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
    },

  ];

  athleteCellRendererFunc(row) {
    if (row.data.Testing == "Duration(s)") {

      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = '<input style="padding:0px;width:100%;border:none;background:orange" type="date" id="apprvdt" class="form-control" [(ngModel)]="duration1date"  name="initdate" value="' + this.initialdate + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur0(event, row);
      });
      return eDiv;

      
      /* ' <input style="width:95px;border:none" type="date" id="apprvdt" class="form-control" name="apprvdate" value="">'*/
    }
    else if (row.data.Testing == "Time Intervals") {
      
      return '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.initialtime + '">';
      // return {editable: true,};
      /*row.data.InitialReading.editable = true;*/
      /*  editable: ({ data: { anyRowAttribute } }) => anyRowAttribute*/
    }
    else {
      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate"   value="' + this.initialtime1 + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur0(event, row);
      });
      return eDiv;

    }
  }
  constValueGetter0(row) {
    if (row.data.Testing == "Time Intervals") {
      return this.initialtime;
    }
    else {

    }
  }
  constValueGetter1(row) {
    if (row.data.Testing == "Time Intervals") {
      return this.duration1time ;
    }
    else {
      
    }
  }
  constValueGetter2(row) {
    if (row.data.Testing == "Time Intervals") {
      return this.duration2time;
    }
    else {

    }
  }
  constValueGetter3(row) {
    if (row.data.Testing == "Time Intervals") {
      return this.duration3time;
    }
    else {

    }
  }
  constValueGetter4(row) {
    if (row.data.Testing == "Time Intervals") {
      return this.duration4time;
    }
    else {

    }
  }
  constValueGetter5(row) {
    if (row.data.Testing == "Time Intervals") {
      return this.duration5time;
    }
    else {

    }
  }
  constValueGetter6(row) {
    if (row.data.Testing == "Time Intervals") {
      return this.duration6time;
    }
    else {

    }
  }
  constValueGetter7(row) {
    if (row.data.Testing == "Time Intervals") {
      return this.duration7time;
    }
    else {

    }
  }
  constValueGetter8(row) {
    if (row.data.Testing == "Time Intervals") {
      return this.duration8time;
    }
    else {

    }
  }
  constValueGetter9(row) {
    if (row.data.Testing == "Time Intervals") {
      return this.duration9time;
    }
    else {

    }
  }
  constValueGetter10(row) {
    if (row.data.Testing == "Time Intervals") {
      return this.duration10time;
    }
    else {

    }
  }
  stabCellRendererdur1(row) {
    if (row.data.Testing == "Duration(s)") {
      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = ' <input style="padding:0px;width:100%;border:none;background:orange" type="date" id="dt1dt" class="form-control"   [(ngModel)]="duration1date" name="dur1date" value="' + this.duration1date + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur1(event,row);
      });
      return eDiv;
      /* ' <input style="width:95px;border:none" type="date" id="apprvdt" class="form-control" name="apprvdate" value="">'*/
    }
    else if (row.data.Testing == "Time Intervals") {
      var initialweek: string = "Initial";
      return '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration1time + '">';
      // return {editable: true,};
      /*row.data.InitialReading.editable = true;*/
      /*  editable: ({ data: { anyRowAttribute } }) => anyRowAttribute*/
    }
    else {
      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration1time1 + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur1(event, row);
      });
      return eDiv;
    }
  }
  onClick($event) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(params);

    }
  }
  stabCellRendererdur2(row) {
    
    if (row.data.Testing == "Duration(s)") {
      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = ' <input style="padding:0px;width:100%;border:none;background:orange" type="date" id="dt2dt" class="form-control"   [(ngModel)]="duration2date" name="dur2date" value="' + this.duration2date + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur2(event,row);
      });
      //var rowNode = this.gridApione.getRowNode(row.node.rowIndex+1);
      //rowNode.setDataValue('OneWeek', this.duration2time);
      return eDiv;
      /* ' <input style="width:95px;border:none" type="date" id="apprvdt" class="form-control" name="apprvdate" value="">'*/
    }
    else if (row.data.Testing == "Time Intervals") {
      var initialweek: string = "Initial";
      return '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration2time + '">';
      // return {editable: true,};
      /*row.data.InitialReading.editable = true;*/
      /*  editable: ({ data: { anyRowAttribute } }) => anyRowAttribute*/
    }
    else {

      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration2time1 + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur2(event, row);
      });
      return eDiv;
    }
  }
  stabCellRendererdur3(row) {
    if (row.data.Testing == "Duration(s)") {
      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = ' <input style="padding:0px;width:100%;border:none;background:orange" type="date" id="dt3dt" class="form-control"   [(ngModel)]="duration3date" name="dur3date" value="' + this.duration3date + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur3(event,row);
      });
      return eDiv;
      /* ' <input style="width:95px;border:none" type="date" id="apprvdt" class="form-control" name="apprvdate" value="">'*/
    }
    else if (row.data.Testing == "Time Intervals") {
      var initialweek: string = "Initial";
      return '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration3time + '">';
      // return {editable: true,};
      /*row.data.InitialReading.editable = true;*/
      /*  editable: ({ data: { anyRowAttribute } }) => anyRowAttribute*/
    }
    else {

      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration3time1  + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur3(event, row);
      });
      return eDiv;
    }
  }
  stabCellRendererdur4(row) {
    if (row.data.Testing == "Duration(s)") {
      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = ' <input style="padding:0px;width:100%;border:none;background:orange" type="date" id="dt4dt" class="form-control"   [(ngModel)]="duration4date" name="dur4date" value="' + this.duration4date + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur4(event,row);
      });
      return eDiv;
      /* ' <input style="width:95px;border:none" type="date" id="apprvdt" class="form-control" name="apprvdate" value="">'*/
    }
    else if (row.data.Testing == "Time Intervals") {
      var initialweek: string = "Initial";
      return '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration4time + '">';
      // return {editable: true,};
      /*row.data.InitialReading.editable = true;*/
      /*  editable: ({ data: { anyRowAttribute } }) => anyRowAttribute*/
    }
    else {

      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration4time1 + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur4(event, row);
      });
      return eDiv;
    }
  }
  stabCellRendererdur5(row) {
    if (row.data.Testing == "Duration(s)") {
      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = ' <input style="padding:0px;width:100%;border:none;background:orange" type="date" id="dt5dt" class="form-control"   [(ngModel)]="duration5date" name="dur5date" value="' + this.duration5date + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur5(event,row);
      });
      return eDiv;
      /* ' <input style="width:95px;border:none" type="date" id="apprvdt" class="form-control" name="apprvdate" value="">'*/
    }
    else if (row.data.Testing == "Time Intervals") {
      var initialweek: string = "Initial";
      return '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration5time + '">';
      // return {editable: true,};
      /*row.data.InitialReading.editable = true;*/
      /*  editable: ({ data: { anyRowAttribute } }) => anyRowAttribute*/
    }
    else {

      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration5time1 + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur5(event, row);
      });
      return eDiv;
    }
  }
  stabCellRendererdur6(row) {
    if (row.data.Testing == "Duration(s)") {
      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = ' <input style="padding:0px;width:100%;border:none;background:orange" type="date" id="dt6dt" class="form-control"   [(ngModel)]="duration6date" name="dur6date" value="' + this.duration6date + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur6(event,row);
      });
      return eDiv;
      /* ' <input style="width:95px;border:none" type="date" id="apprvdt" class="form-control" name="apprvdate" value="">'*/
    }
    else if (row.data.Testing == "Time Intervals") {
      var initialweek: string = "Initial";
      return '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration6time + '">';
      // return {editable: true,};
      /*row.data.InitialReading.editable = true;*/
      /*  editable: ({ data: { anyRowAttribute } }) => anyRowAttribute*/
    }
    else {

      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration6time1 + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur6(event, row);
      });
      return eDiv;
    }
  }
  stabCellRendererdur7(row) {
    if (row.data.Testing == "Duration(s)") {
      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = ' <input style="padding:0px;width:100%;border:none;background:orange" type="date" id="dt7dt" class="form-control"   [(ngModel)]="duration7date" name="dur7date" value="' + this.duration7date + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur7(event,row);
      });
      return eDiv;
      /* ' <input style="width:95px;border:none" type="date" id="apprvdt" class="form-control" name="apprvdate" value="">'*/
    }
    else if (row.data.Testing == "Time Intervals") {
      var initialweek: string = "Initial";
      return '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration7time + '">';
      // return {editable: true,};
      /*row.data.InitialReading.editable = true;*/
      /*  editable: ({ data: { anyRowAttribute } }) => anyRowAttribute*/
    }
    else {

      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration7time1 + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur7(event, row);
      });
      return eDiv;
    }
  }
  stabCellRendererdur8(row) {
    if (row.data.Testing == "Duration(s)") {
      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = ' <input style="padding:0px;width:100%;border:none;background:orange" type="date" id="dt8dt" class="form-control"   [(ngModel)]="duration8date" name="dur8date" value="' + this.duration8date + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur8(event,row);
      });
      return eDiv;
      /* ' <input style="width:95px;border:none" type="date" id="apprvdt" class="form-control" name="apprvdate" value="">'*/
    }
    else if (row.data.Testing == "Time Intervals") {
      var initialweek: string = "Initial";
      return '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration8time + '">';
      // return {editable: true,};
      /*row.data.InitialReading.editable = true;*/
      /*  editable: ({ data: { anyRowAttribute } }) => anyRowAttribute*/
    }
    else {

      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration8time1 + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur8(event, row);
      });
      return eDiv;
    }
  }
  stabCellRendererdur9(row) {
    if (row.data.Testing == "Duration(s)") {
      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = ' <input style="padding:0px;width:100%;border:none;background:orange" type="date" id="dt9dt" class="form-control"   [(ngModel)]="duration9date" name="dur1date" value="' + this.duration9date + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur9(event,row);
      });
      return eDiv;
      /* ' <input style="width:95px;border:none" type="date" id="apprvdt" class="form-control" name="apprvdate" value="">'*/
    }
    else if (row.data.Testing == "Time Intervals") {
      var initialweek: string = "Initial";
      return '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration9time + '">';
      // return {editable: true,};
      /*row.data.InitialReading.editable = true;*/
      /*  editable: ({ data: { anyRowAttribute } }) => anyRowAttribute*/
    }
    else {

      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration9time1 + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur9(event, row);
      });
      return eDiv;
    }
  }
  stabCellRendererdur10(row) {
    if (row.data.Testing == "Duration(s)") {
      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = ' <input style="padding:0px;width:100%;border:none;background:orange" type="date" id="dt10dt" class="form-control"   [(ngModel)]="duration10date" name="dur1date" value="' + this.duration10date + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur10(event,row);
      });
      return eDiv;
      /* ' <input style="width:95px;border:none" type="date" id="apprvdt" class="form-control" name="apprvdate" value="">'*/
    }
    else if (row.data.Testing == "Time Intervals") {
      var initialweek: string = "Initial";
      return '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration10time + '">';
      // return {editable: true,};
      /*row.data.InitialReading.editable = true;*/
      /*  editable: ({ data: { anyRowAttribute } }) => anyRowAttribute*/
    }
    else {

      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.duration10time1 + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        self.datechangeclickdur10(event, row);
      });
      return eDiv;
    }
  }
  stabCellRendererdurother(row) {
    if (row.data.Testing == "Duration(s)") {

      return ' <input style="padding:0px;width:100%;border:none;background:orange" type="date" id="dtotrdt" class="form-control" [(ngModel)]="durationotherdate" name="apprvdate" value="">';
      /* ' <input style="width:95px;border:none" type="date" id="apprvdt" class="form-control" name="apprvdate" value="">'*/
    }
    else if (row.data.Testing == "Time Intervals") {
      var initialweek: string = "Initial";
      return '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.durationother + '">';
      // return {editable: true,};
      /*row.data.InitialReading.editable = true;*/
      /*  editable: ({ data: { anyRowAttribute } }) => anyRowAttribute*/
    }
    else {
      const eDiv = document.createElement('div');
      const self = this;
      eDiv.innerHTML = '<input style="padding:0px;width:100%;border:none;" type="text" id="apprvdt" class="form-control"  name="initdate" value="' + this.durationother1 + '">';
      eDiv.addEventListener('change', () => {
        console.log('event changed');
        //self.datechangeclickdurother(event, row);
      });
      return eDiv;

    }
  }
  openformulalookup() {
    const dialogRef = this.dialog.open(PdrManagementComponent, {
      width: '95%', height: '95%', disableClose: true, data: "openspecification"
    });
  }
  datechangeclickdur0(event, row) {
    var dur1 = event.target.value;
    if (row.data.Testing == "Time Intervals" || row.data.Testing == "Duration(s)") {
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode.setDataValue('InitialReading', dur1);
    }
    else {
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode.setDataValue('InitialReading', dur1);
    }
  }
  datechangeclickdur1(event,row) {
    var curr = this.initialdate;
    var dur1 = event.target.value;
    if (row.data.Testing == "Time Intervals" || row.data.Testing == "Duration(s)") {
      var tenatativestartdate = moment(curr);
      var tentaviveenddate = moment(dur1);
      this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
      this.duration1time = this.DiffDate + 'Week'
      var rowNode1 = this.gridApione.getRowNode(row.node.rowIndex );
      rowNode1.setDataValue('TwentyFourHours', dur1);
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex + 1);
      rowNode.setDataValue('TwentyFourHours', this.duration1time);
    }
    else {
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex );
      rowNode.setDataValue('TwentyFourHours', dur1);
    }
    //this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'days'));
    //if (this.DiffDate<=7) {
    //  this.duration1time = '1Week';
    //}
    //else if (this.DiffDate>7 && this.DiffDate<= 14) {
    //  this.duration1time = '2Week';
    //}
    //else if (this.DiffDate > 14 && this.DiffDate <= 28) {
    //  this.duration1time = '3Week';
    //}
    //else if (this.DiffDate > 28 && this.DiffDate <= 35) {
    //  this.duration1time = '4Week';
    //}
    //else if (this.DiffDate > 35 && this.DiffDate <= 42) {
    //  this.duration1time = '5Week';
    //}
    //else if (this.DiffDate > 42 && this.DiffDate <= 49) {
    //  this.duration1time = '6Week';
    //}
    //else if (this.DiffDate > 49 && this.DiffDate <= 56) {
    //  this.duration1time = '7Week';
    //}
    //else if (this.DiffDate > 56 && this.DiffDate <= 63) {
    //  this.duration1time = '8Week';
    //}
    //else if (this.DiffDate > 63 && this.DiffDate <= 70) {
    //  this.duration1time = '9Week';
    //}
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickdur2(event,row) {
    var curr = this.initialdate;
    var dur1 = event.target.value;
    if (row.data.Testing == "Time Intervals" || row.data.Testing == "Duration(s)") {
      var tenatativestartdate = moment(curr);
      var tentaviveenddate = moment(dur1);

      this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
      this.duration2time = this.DiffDate + 'Week'
      var rowNode1 = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode1.setDataValue('TwentyFourHours', dur1);
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex + 1);
      rowNode.setDataValue('OneWeek', this.duration2time);
    }
    else {
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex );
      rowNode.setDataValue('OneWeek', dur1);
    }
    //let { rowsToDisplay } = this.gridApione.getModel();
    //this.rowDatastabilitydetails = [];
    //this.gridApione.forEachNode(RowNode => this.rowDatastabilitydetails.push(RowNode.data));
    //this.gridApione.setRowData(this.rowDatastabilitydetails);
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickdur3(event,row) {
    var curr = this.initialdate;
    var dur1 = event.target.value;
    if (row.data.Testing == "Time Intervals" || row.data.Testing == "Duration(s)") {
      var tenatativestartdate = moment(curr);
      var tentaviveenddate = moment(dur1);

      this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
      this.duration3time = this.DiffDate + 'Week'
      var rowNode1 = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode1.setDataValue('TwentyFourHours', dur1);
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex + 1);
      rowNode.setDataValue('TwoWeeks', this.duration3time);
    }
    else {
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode.setDataValue('TwoWeeks', dur1);
    }
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickdur4(event,row) {
    var curr = this.initialdate;
    var dur1 = event.target.value;
    if (row.data.Testing == "Time Intervals" || row.data.Testing == "Duration(s)") {
      var tenatativestartdate = moment(curr);
      var tentaviveenddate = moment(dur1);

      this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
      this.duration4time = this.DiffDate + 'Week'
      var rowNode1 = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode1.setDataValue('TwentyFourHours', dur1);
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex + 1);
      rowNode.setDataValue('OneMonth', this.duration4time);
    } else {
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode.setDataValue('OneMonth', dur1);
    }
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickdur5(event,row) {
    var curr = this.initialdate;
    var dur1 = event.target.value;
    if (row.data.Testing == "Time Intervals" || row.data.Testing == "Duration(s)") {
      var tenatativestartdate = moment(curr);
      var tentaviveenddate = moment(dur1);

      this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
      this.duration5time = this.DiffDate + 'Week'
      var rowNode1 = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode1.setDataValue('TwentyFourHours', dur1);
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex + 1);
      rowNode.setDataValue('TwoMonth', this.duration5time);
    }
    else {
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode.setDataValue('TwoMonth', dur1);
    }
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickdur6(event,row) {
    var curr = this.initialdate;
    var dur1 = event.target.value;
    if (row.data.Testing == "Time Intervals" || row.data.Testing == "Duration(s)") {
      var tenatativestartdate = moment(curr);
      var tentaviveenddate = moment(dur1);

      this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
      this.duration6time = this.DiffDate + 'Week'
      var rowNode1 = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode1.setDataValue('TwentyFourHours', dur1);
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex + 1);
      rowNode.setDataValue('ThreeMonth', this.duration6time);
    }
    else {
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode.setDataValue('ThreeMonth', dur1);
    }
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickdur7(event,row) {
    var curr = this.initialdate;
    var dur1 = event.target.value;
    if (row.data.Testing == "Time Intervals" || row.data.Testing == "Duration(s)") {
      var tenatativestartdate = moment(curr);
      var tentaviveenddate = moment(dur1);

      this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
      this.duration7time = this.DiffDate + 'Week'
      var rowNode1 = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode1.setDataValue('TwentyFourHours', dur1);
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex + 1);
      rowNode.setDataValue('Sixmonth', this.duration7time);
    } else {
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode.setDataValue('Sixmonth', dur1);
    }
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickdur8(event,row) {
    var curr = this.initialdate;
    var dur1 = event.target.value;
    if (row.data.Testing == "Time Intervals" || row.data.Testing == "Duration(s)") {
      var tenatativestartdate = moment(curr);
      var tentaviveenddate = moment(dur1);

      this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
      this.duration8time = this.DiffDate + 'Week'
      var rowNode1 = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode1.setDataValue('TwentyFourHours', dur1);
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex + 1);
      rowNode.setDataValue('Sixmonth', this.duration8time);
    }
  else
    {
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode.setDataValue('Sixmonth', dur1);
    }
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickdur9(event,row) {
    var curr = this.initialdate;
    var dur1 = event.target.value;
    if (row.data.Testing == "Time Intervals" || row.data.Testing == "Duration(s)") {
      var tenatativestartdate = moment(curr);
      var tentaviveenddate = moment(dur1);

      this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
      this.duration9time = this.DiffDate + 'Week'
      var rowNode1 = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode1.setDataValue('TwentyFourHours', dur1);
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex + 1);
      rowNode.setDataValue('Twelvemonth', this.duration9time);
    }
  else
    {
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex );
      rowNode.setDataValue('Twelvemonth', dur1);
    }
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickdur10(event,row) {
    var curr = this.initialdate;
    var dur1 = event.target.value;
    if (row.data.Testing == "Time Intervals" || row.data.Testing == "Duration(s)") {
      var tenatativestartdate = moment(curr);
      var tentaviveenddate = moment(dur1);

      this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
      this.duration10time = this.DiffDate + 'Week'
      var rowNode1 = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode1.setDataValue('TwentyFourHours', dur1);
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex + 1);
      rowNode.setDataValue('Twentyfourmonth', this.duration10time);
    }
    else {
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex );
      rowNode.setDataValue('Twentyfourmonth', dur1);
    }
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickother(event,row) {
    var curr = this.initialdate;
    var dur1 = event.target.value;
    if (row.data.Testing == "Time Intervals" || row.data.Testing == "Duration(s)") {
      var tenatativestartdate = moment(curr);
      var tentaviveenddate = moment(dur1);

      this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
      this.durationother = this.DiffDate + 'Week'
      var rowNode1 = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode1.setDataValue('TwentyFourHours', dur1);
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex + 1);
      rowNode.setDataValue('Thirtysixmonth', this.durationother);
    }
    else {
      var rowNode = this.gridApione.getRowNode(row.node.rowIndex);
      rowNode.setDataValue('Thirtysixmonth', dur1);
    }
    //this.pdrcreationdays = this.pdrcreationdays1;
  }

 


  generalmethod(generalvalues: any) {
    for (let item of generalvalues) {
      this.stabno = item.STABNumber;
     // this.formulacode = item.FormulaCode;
      this.formulaname = item.FormulaName;
      this.labbatchno = item.LabBatchNo;
      this.storagecondition = item.StorageCondition;
      this.fragrance = item.Fragrance;
      this.startdate = formatDate(new Date(item.StartDate), 'yyyy-MM-dd', 'en-US');
      //this.startdate = item.StartDate ;
      this.enddate = formatDate(new Date(item.EndDate), 'yyyy-MM-dd', 'en-US');
      //this.enddate = item.EndDate ;
      this.setalert = item.SetAlert;
      this.refno = item.ReferenceNo;
      this.packagesize = item.PackageSize;
      //this.vendor = item.  ;
      this.file = item.SOPFile;
      this.factor = item.Factor;
      this.spindle = item.Spindle;
      this.technician = item.Technician;
      this.comments = item.Comments;
      this.lotno = item.LotNo;
      this.approved = item.Approved;
      if (this.approved == "True") {
        this.approved = "1";
        this.isDisabledappr = false
      }
      else {
        this.approved = "0";
        this.isDisabledappr = true
      }
      this.approvedby = item.ApprovedBy;
      this.labph = item.Labph;
      this.labviscosity = item.Labviscosity;
      this.labsgravity = item.LabSGravity;
      this.showalert = item.showalert;
      this.batchtype = item.BatchType;

    }
  }
  pdrmethod(pdrdata: any) {
    for (let item of pdrdata) {
   //   this.formulacode = item.FormulaCode;
    //  this.pdrno = item.PDRNo;
      this.ph = item.pH;
      this.viscosity = item.Viscosity;
      this.specificgravity = item.SpecificGravity;
      this.viscmethod = item.ViscMethod; //lvt
      this.viscfactor = item.ViscFactor;
      this.spindle = item.Spindle;
      this.speed = item.Speed;
      this.time = item.Time;
      this.helipath = item.Helipath;
    }
  }
  triggerSomeEvent(event: any) {

    this.physicalstabilityApproval().subscribe((stabilityapproval) => {
      console.warn("stabilityapproval", stabilityapproval)
      this.stabilityapproval_load = stabilityapproval

    })

    this.isDisabledappr = !this.isDisabledappr;
    if (this.isDisabledappr == true) {
      this.approved = "0";
    }
    else {
      this.approved = "1";
    }

    return;

    //if (this.delete_stability == "Stability test details deleted successfully.") {
    //  this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Stability test deleted successfully.' } });
    //  this.delete_stability = ""
    //}

  }
  physicalstabilityApproval() {
    var formulacod: any = this.formulacode;
    var formulanam: any = this.formulaname;
    var storage: any = this.storagecondition;
    var labbatch = this.labbatchno;
    var username = this.userna;
    var chkApproval = 'true';
    let params1 = new HttpParams().set('FormulaCode', formulacod).set('FormulaName', formulanam).set('storagecondition', storage).set('LabBatchNo', labbatch).set('username', username).set('chkApproval', chkApproval);
    return this.http.get("https://formulastabiltywebapplication.azurewebsites.net/stability_approval", { params: params1 })
  }
  stabilitydetailsload() {
    var formulcod: string = this.formulacode;
    var storage: string = this.storagecondition;
    var labatch: string = this.labbatchno;
    var formattyp: string = "format 1";
    let params1 = new HttpParams().set('Formulacode', formulcod).set('StorageCondition', storage).set('LabBatch', labatch).set('FormatType', formattyp);
    return this.http.get("https://formulastabiltywebapplication.azurewebsites.net/BindStabilityDetails", { params: params1 })
  }
  freezetableload() {
    var formulcod: string = this.formulacode;
    var storage: string = this.storagecondition;
    var labatch: string = this.labbatchno;
    var formattyp: string = "format 1";
    let params1 = new HttpParams().set('Formulacode', formulcod).set('StorageCondition', storage).set('LabBatch', labatch).set('FormatType', formattyp);
    return this.http.get("https://formulastabiltywebapplication.azurewebsites.net/FillFreeze", { params: params1 })
  }
  stabload() {
    var formulcod: string = this.formulacode;
    var labatch: string = this.labbatchno;
    let params1 = new HttpParams().set('FormulaCode', formulcod).set('LabBatchNo', labatch);
    return this.http.get("https://formulastabiltywebapplication.azurewebsites.net/GetStabNo", { params: params1, responseType: 'text' })
  }
  physicalstabilitydetails() {
    var formulcod: string = this.formulacode;
    var storage: string = this.storagecondition;
    var labatch: string = this.labbatchno;
    let params1 = new HttpParams().set('FormulaCode', formulcod).set('StorageCondition', storage).set('LabBatch', labatch);
    return this.http.get("https://formulastabiltywebapplication.azurewebsites.net/BindStabilityTest", { params: params1 })
  }

  stabilitypdrdetails() {
    var formulcod: string = this.formulacode;
    var format: string = "format 1";
    let params1 = new HttpParams().set('Formulacode', formulcod).set('FormatType', format);
    return this.http.get("https://formulastabiltywebapplication.azurewebsites.net/LoadPDR", { params: params1 })
  }
  Phystabdetailgridvaluessetdata(detailsdata: any) {
    var rowNode = this.gridApione.getRowNode(0);
    rowNode.setDataValue('InitialReading', this.initialdate);
    rowNode.setDataValue('TwentyFourHours', this.duration1date);
    rowNode.setDataValue('OneWeek', this.duration2date);
    rowNode.setDataValue('TwoWeeks', this.duration3date);
    rowNode.setDataValue('OneMonth', this.duration4date);
    rowNode.setDataValue('TwoMonth', this.duration5date);
    rowNode.setDataValue('ThreeMonth', this.duration6date);
    rowNode.setDataValue('Sixmonth', this.duration7date);
    rowNode.setDataValue('Twelvemonth', this.duration8date);
    rowNode.setDataValue('Twentyfourmonth', this.duration9date);
    rowNode.setDataValue('Thirtysixmonth', this.duration10date);
    var rowNode = this.gridApione.getRowNode(1);
    rowNode.setDataValue('TwentyFourHours', this.duration1time);
    rowNode.setDataValue('OneWeek', this.duration2time);
    rowNode.setDataValue('TwoWeeks', this.duration3time);
    rowNode.setDataValue('OneMonth', this.duration4time);
    rowNode.setDataValue('TwoMonth', this.duration5time);
    rowNode.setDataValue('ThreeMonth', this.duration6time);
    rowNode.setDataValue('Sixmonth', this.duration7time);
    rowNode.setDataValue('Twelvemonth', this.duration8time);
    rowNode.setDataValue('Twentyfourmonth', this.duration9time);
    rowNode.setDataValue('Thirtysixmonth', this.duration10time);
  }



  Phystabdetailgridvalues(detailsdata: any) {
    this.i = 0;
    this.j = 0;
    this.detailsList = [];
    for (let item of detailsdata) {

      this.detailsList[this.i] = ([{
        FormulaCode: this.formulacode,
        StorageCondition: this.storagecondition,
        Testing: item.Testing,
        InitialReading: item.InitialReading,
        TwentyFourHours: item.TwentyFourHours,
        OneWeek: item.OneWeek,
        TwoWeeks: item.TwoWeeks,
        OneMonth: item.OneMonth,
        TwoMonth: item.TwoMonth,
        ThreeMonth: item.ThreeMonth,
        Sixmonth: item.Sixmonth,
        Twelvemonth: item.Twelvemonth,
        Twentyfourmonth: item.Twentyfourmonth,
        Thirtysixmonth: item.Thirtysixmonth,
        OtherMonth: item.OtherMonth,
        STABNumber: this.stabno,
        LabBatchNo: this.labbatchno,
        LineNumber: item.LineNumber,
      }]);
      this.i++;

    }
  }

  Freezegridvalues(freezedata: any) {
    this.i = 0;
    this.j = 0;
    this.freezeList = [];
    for (let item of freezedata) {

      this.freezeList[this.i] = ([{
        FormulaCode: this.formulacode,
        STABNumber: this.stabno,
        StorageCondition: this.storagecondition,
        LabBatchNo: this.labbatchno,
        Testing: item.Testing,
        Initial: item.Initial,
        Cycle1: item.Cycle1,
        Cycle2: item.Cycle2,
        Cycle3: item.Cycle3,
        Cycle4: item.Cycle4,
        Cycle5: item.Cycle5,
      }]);
      this.i++;

    }
  }
  Physicalstability_save() {
    var data:any = this.rowDatastabilitydetails
   
    this.mainList[0] = ([{
      FormulaCode: this.formulacode,
      FormulaName: this.formulaname,
      StorageCondition: this.storagecondition,
      StartDate: '',
      EndDate:'',
      Customer: '',
      Fragrance: this.fragrance,
      Factor: '',
      Spindle: '',
      Technician: '',
      Comments: '',
      SetAlert: this.setalert,
      ReferenceNo: this.refno,
      PackageSize: this.packagesize,
      LotNo: '',
      Approved: '0',
      ApprovedBy: '',
      ApprovedDt: '',
      SOPFile: '',
      Labph: '',
      Labviscosity: '',
      LabSGravity: '',
      STABNumber: this.stabno,
      showalert: '',
      LabBatchNo: this.labbatchno,
      BatchType: '',

    }]);
    this.Phystabdetailgridvalues(this.stability_detailload);
    this.Freezegridvalues(this.freeze_detailload);
    this.Physicalstability_savemethod().subscribe((stability_save) => {
      console.warn("stability_save", stability_save)
      this.stability_save_data = stability_save

      if (this.stability_save_data == "Stability details saved successfully.") {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Stability details saved successfully.' } });
        this.stability_save_data = ""
      }

    })
  }

  Physicalstability_savemethod() {

    //this.Phystabdetailgridvalues(this.stability_detailload);
    //this.Freezegridvalues(this.freeze_detailload);

    var phyload: any = JSON.stringify(this.mainList);
    var details: any = JSON.stringify(this.detailsList);
    var freeze: any = JSON.stringify(this.freezeList);
    var username = this.userna;
    var operation = 'Save'
    let params1 = new HttpParams().set('stabilityMasterjson', phyload).set('stabilityDetailjson', details).set('stabilityFreezeDetailjson', freeze).set('username', username).set('Operation', operation);
    return this.http.get("https://formulastabiltywebapplication.azurewebsites.net/StabilitySaveorUpdate", { params: params1, responseType: 'text' })
  }
  StabilityDelete() {

    let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '30%', height: '15%', data: { displaydatagrid: 'This will delete the stability detail entry. Do you want to delete this entry?' }, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ${result}');
      this.msgdata = result;

      if (this.msgdata == "false") { }
      else {
        this.physicalstabilitydelete().subscribe((physicalstabilitydelete) => {
          console.warn("physicalstabilitydelete", physicalstabilitydelete)
          this.delete_stability = physicalstabilitydelete

          if (this.delete_stability == "Stability test details deleted successfully.") {
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Stability test deleted successfully.' } });
            this.delete_stability = ""
          }
          else if (this.delete_stability == "COA details exists for this stability test. So it cannot be deleted.") {
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'COA details exists for this stability test.So it cannot be deleted.' } });
            this.delete_stability = ""
          }


        })


      }

    });
    this.stabilitydetailsload().subscribe((stabilityload) => {
      console.warn("stabilityload", stabilityload)
      this.stability_detailload = stabilityload

    })

  }



  physicalstabilitydelete() {

    var formulacod: any = this.formulacode;
    var formulanam: any = this.formulaname;
    var storage: any = this.storagecondition;
    var labbatch = this.labbatchno;
    var username = this.userna;

    let params1 = new HttpParams().set('FormulaCode', formulacod).set('FormulaName', formulanam).set('storagecondition', storage).set('LabBatchNo', labbatch).set('username', username);
    return this.http.get("https://formulastabiltywebapplication.azurewebsites.net/stability_Delete", { params: params1, responseType: 'text' })
  }


  onGridReadyone(params) {
    this.gridApione = params.api;
    this.gridApione.setRowData(this.rowDatastabilitydetails);
    this.gridApione.getModel();
    this.rowDatastabilitydetails = [];
    this.gridApione.forEachNode(RowNode => this.rowDatastabilitydetails.push(RowNode.data));
    this.gridApione.setRowData(this.rowDatastabilitydetails);
    this.gridApione.forEachNode(RowNode => this.rowDatastabilitydetails.push(RowNode.data));
    this.gridApione.setRowData(this.rowDatastabilitydetails);
    var rowdatacount = this.gridApione.getDisplayedRowCount();
    var rowNode = this.gridApione.getRowNode(1);
    var initial: string = "22-10-22";
    rowNode.setDataValue('InitialReading', String(initial));

   
  }
  addstabrow() {
    var rowdatacount2 = this.gridApione.getDisplayedRowCount();
    this.gridApione.updateRowData({ add: [{ Testing: '', TwentyFourHours: '', OneWeek: '', TwoWeeks: '', OneMonth: '', TwoMonth: '', ThreeMonth: '', Sixmonth: '', Twelvemonth: '', Twentyfourmonth: '', Thirtysixmonth: '', OtherMonth: '', }], addIndex: rowdatacount2 });
    const selectedrows = this.gridApione.getSelectedRows();
    this.gridApione.getRowNode(rowdatacount2);
  }
  deletestabrow() {
    let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '30%', height: '15%', data: { displaydatagrid: "Do you want to Delete?" }, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      var res: any = result;

      if (res == "false") {

      }
      else {

        const selectedrows = this.gridApione.getSelectedRows();
        this.removestabrows = selectedrows
        this.gridApione.applyTransaction({ remove: selectedrows })
        let { rowsToDisplay1 } = this.gridApione.getModel();
        this.rowDatastabilitydetails = [];
        this.gridApione.forEachNode(RowNode => this.rowDatastabilitydetails.push(RowNode.data));
        //  this.gridApi.refreshClientSideRowModel();
        this.gridApione.setRowData(this.rowDatastabilitydetails);
       //         this.rowData6 = [];
        //        this.gridApi2.forEachNode(RowNode => this.rowData6.push(RowNode.data));
        //        //  this.gridApi.refreshClientSideRowModel();
        //        this.gridApi2.setRowData(this.rowData6);


        //if (this.removeerprows == 0 || this.removeerprows == undefined) {
        //  this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Select a row to delete.' } });
        //}
        //else {
        //  for (let search of this.removeerprows) {
        //    this.Deleteerpdlt(search.ProductCode, search.ProductName).subscribe((erpdlt) => {
        //      console.warn("erpdlt", erpdlt)
        //      this.erpdltload = erpdlt
        //      if (this.erpdltload == "Product") {
        //        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Product packaging options exists for this customer. Cannot delete this product.' } });
        //        this.loaderpproductscoaexpirydate(this.customercode).subscribe((erpproducts) => {
        //          console.warn("erpproductcoaexpiry", erpproducts)
        //          this.erpproductscoa = erpproducts
        //          this.rowData6 = this.erpproductscoa
        //        })
        //      }
        //      else {
        //        this.rowData6 = [];
        //        this.gridApi2.forEachNode(RowNode => this.rowData6.push(RowNode.data));
        //        //  this.gridApi.refreshClientSideRowModel();
        //        this.gridApi2.setRowData(this.rowData6);
        //      }
        //    })

        //  }
        //}
       
      }
    });
  }
  addFieldValue() {
    this.rowDatastabilitydetails.push(this.newAttribute)
    this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.rowDatastabilitydetails.splice(index, 1);
  }
  startdatechangeclick(event) {
    this.stdate = new Date(this.startdate);
    var testDate = new Date(this.startdate);
  //  this.startdate = formatDate((this.stdate), 'MM/dd/yyyy', 'en-US');
   // this.enddate =this.startdate.setFullYear(this.startdate.getFullYear() + 1);
    this.enddate = formatDate((this.stdate.setFullYear(this.stdate.getFullYear() + 1)), 'yyyy-MM-dd', 'en-US');
    this.initialdate = this.startdate;
    this.duration1date = formatDate(new Date(testDate.getTime() + (7 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration2date = formatDate(new Date(testDate.getTime() + (14 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration3date = formatDate(new Date(testDate.getTime() + (28 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration4date = formatDate(new Date(testDate.getTime() + (42 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration5date = formatDate(new Date(testDate.getTime() + (56 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration6date = formatDate(new Date(testDate.getTime() + (70 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration7date = formatDate(new Date(testDate.getTime() + (84 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration8date = formatDate(new Date(testDate.getTime() + (182 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration9date = formatDate(new Date(testDate.getTime() + (365 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
  }
  ngOnInit() {
    this.userna = this.datashare.getlogin();
    //var Phystabilitylist: any = this.datashare.getPhystability();
    //console.log(Phystabilitylist);
    //this.storagecondition = Phystabilitylist[0];
    //this.labbatchno =Phystabilitylist[1];
    //this.batchtype = Phystabilitylist[2];
    //this.startdate = formatDate((Phystabilitylist[3]), 'yyyy-MM-dd', 'en-US');
    //this.enddate = formatDate((Phystabilitylist[4]), 'yyyy-MM-dd', 'en-US');
    //this.formulacode = Phystabilitylist[5];
    //this.formulaname = Phystabilitylist[6];
    //this.stabno = Phystabilitylist[7];

    var Phystabilitylist: any =this.data.displaydata
    this.storagecondition = Phystabilitylist[4];
    this.labbatchno = Phystabilitylist[2];
    this.batchtype = Phystabilitylist[5];
    this.formulaname = Phystabilitylist[1];
    this.formulacode = Phystabilitylist[0]; //formulaname
    this.stabno = Phystabilitylist[7];
    if (this.startdate == "" || this.startdate == undefined) {
      this.startdate = new Date().toISOString().split('T')[0];
      this.enddate = formatDate((new Date(this.startdate).setFullYear(new Date(this.startdate).getFullYear() + 1)), 'yyyy-MM-dd', 'en-US');
    }
    else {
      this.startdate = formatDate((Phystabilitylist[3]), 'yyyy-MM-dd', 'en-US');
      this.enddate = formatDate((Phystabilitylist[4]), 'yyyy-MM-dd', 'en-US');
    }

    this.initialdate = this.startdate;
    this.duration9date = this.enddate;
    var testDate = new Date(this.startdate);
    this.duration1date = formatDate(new Date(testDate.getTime() + (7 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration2date = formatDate(new Date(testDate.getTime() + (14 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration3date = formatDate(new Date(testDate.getTime() + (28 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration4date = formatDate(new Date(testDate.getTime() + (42 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration5date = formatDate(new Date(testDate.getTime() + (56 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration6date = formatDate(new Date(testDate.getTime() + (70 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration7date = formatDate(new Date(testDate.getTime() + (84 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration8date = formatDate(new Date(testDate.getTime() + (182 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration9date = formatDate(new Date(testDate.getTime() + (365 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
   

    this.stabilitydetailsload().subscribe((stabilityload) => {
      console.warn("stabilityload", stabilityload)
      this.stability_detailload = stabilityload
      this.rowDatastabilitydetails = this.stability_detailload;
      this.gridApione.setRowData(this.rowDatastabilitydetails);
      //this.rowDatastabilitydetails = this.stability_detailload.slice(2);
      var rowdatacount = this.gridApione.getDisplayedRowCount();
      var rowNode = this.gridApione.getRowNode(1);
      var initial: string = "Initial";
      rowNode.setDataValue('InitialReading', initial);
      this.rowDatastabilitydetails = [];
      this.gridApione.forEachNode(RowNode => this.rowDatastabilitydetails.push(RowNode.data));
      this.gridApione.setRowData(this.rowDatastabilitydetails);
      this.Phystabdetailgridvaluessetdata(this.stability_detailload);
    })
    this.freezetableload().subscribe((freezeload) => {
      console.warn("freezeload", freezeload)
      this.freeze_detailload = freezeload

    })
    this.stabload().subscribe((stabnoload) => {
      console.warn("stabnoload", stabnoload)
      this.stabno_detailload = stabnoload
      this.stabno = this.stabno_detailload
    })
    this.physicalstabilitydetails().subscribe((physicalstabilityload) => {
      console.warn("physicalstabilityload", physicalstabilityload)
      this.phy_detailload = physicalstabilityload
      this.generalmethod(this.phy_detailload)
    })
    this.stabilitypdrdetails().subscribe((pdrdtlload) => {
      console.warn("pdrdtlload", pdrdtlload)
      this.pdrdtl_load = pdrdtlload
      this.pdrmethod(this.pdrdtl_load)
    })

  }

}
declare var $: any;
class DatePicker implements ICellEditorComp {

  eInput!: HTMLInputElement;

  // gets called once before the renderer is used
  init(params: ICellEditorParams) {
    // create the cell
    this.eInput = document.createElement('input');
    this.eInput.value = params.value;
    this.eInput.classList.add('ag-input');
    this.eInput.style.height = '100%';

    // https://jqueryui.com/datepicker/
    $(this.eInput).datepicker({
      dateFormat: 'dd/mm/yy',
      onSelect: () => {
        this.eInput.focus();
      },
    });
  }

  // gets called once when grid ready to insert the element
  getGui() {
    return this.eInput;
  }

  // focus and select can be done after the gui is attached
  afterGuiAttached() {
    this.eInput.focus();
    this.eInput.select();
  }

  // returns the new value after editing
  getValue() {
    return this.eInput.value;
  }

  // any cleanup we need to be done here
  destroy() {
    // but this example is simple, no cleanup, we could
    // even leave this method out as it's optional
  }

  // if true, then this editor will appear in a popup
  isPopup() {
    // and we could leave this method out also, false is the default
    return false;
  }
}
export class stabilitymasterData {

  FormulaCode: string;
  FormulaName: string;
  StorageCondition: string;
  StartDate: string;
  EndDate: string;
  Customer: string;
  Fragrance: string;
  Factor: string;
  Spindle: string;
  Technician: string;
  Comments: string;
  SetAlert: string;
  ReferenceNo: string;
  PackageSize: string;
  LotNo: string;
  Approved: string;
  ApprovedBy: string;
  ApprovedDt: string;
  SOPFile: string;
  Labph: string;
  Labviscosity: string;
  LabSGravity: string;
  STABNumber: string;
  showalert: string;
  LabBatchNo: string;
  BatchType: string;
}
export class stabilitydetailsData {

  FormulaCode: string;
  StorageCondition: string;
  Testing: string;
  InitialReading: string;
  TwentyFourHours: string;
  OneWeek: string;
  TwoWeeks: string;
  OneMonth: string;
  TwoMonth: string;
  ThreeMonth: string;
  Sixmonth: string;
  Twelvemonth: string;
  Twentyfourmonth: string;
  Thirtysixmonth: string;
  OtherMonth: string;
  STABNumber: string;
  LabBatchNo: string;
  LineNumber: string;


}
export class stabilityfreezeData {
  FormulaCode: string;
  STABNumber: string;
  StorageCondition: string;
  LabBatchNo: string;
  Testing: string;
  Initial: string;
  Cycle1: string;
  Cycle2: string;
  Cycle3: string;
  Cycle4: string;
  Cycle5: string;

}


    //this.enddate= formatDate((new Date(this.startdate).setFullYear(new Date(this.startdate).getFullYear() + 1)), 'yyyy-MM-dd', 'en-US');
  //  this.enddate = new Date(formatDate((this.startdate.setFullYear(this.startdate.getFullYear() + 1)), 'yyyy-MM-dd', 'en-US'));
   // this.enddate = new Date(this.startdate.setFullYear(this.startdate.getFullYear() + 1));

