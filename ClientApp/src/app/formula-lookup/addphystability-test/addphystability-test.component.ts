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

  initialdate: string;
  duration1date: string;
  duration2date: string;
  duration3date: string;
  duration4date: string;
  duration5date: string;
  duration6date: string;
  duration7date: string;
  duration8date: string;
  duration9date: string;
  duration10date: string;

  initialtime: string='Initial';
  duration1time: string;
  duration2time: string;
  duration3time: string;
  duration4time: string;
  duration5time: string;
  duration6time: string;
  duration7time: string;
  duration8time: string;
  duration9time: string;
  duration10time: string;



  formulacode: string;
  formulaname: string;
  labbatchno: string;
  pdrno: string;
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
  mainList: stabilitymasterData[][] = [];
  detailsList: stabilitydetailsData[][] = [];
  freezeList: stabilityfreezeData[][] = [];
  rowDatastabilitydetails: any = [];
  public gridApione;
  i: number;
  j: number;
  stability_save_data: any;
  delete_stability: any;
  msgdata: string;
  isDisabledappr: boolean = true;
  stabilityapproval_load: any;
  constructor(@Inject(MAT_DIALOG_DATA,) public data: any, private datashare: DataShareServiceService, private http: HttpClient, public dialog: MatDialog) {

    this.rowSelection = 'single';
    this.rowStyle = { fontFamily: 'Verdana', color: 'black' };
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
    this.rowHeight = 10;
  }


  columnDefsforper = [

    {
      flex: 1,
      resizable: true,
      editable: true,
      wrapText: true,     // <-- HERE
      autoHeight: true,

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", backgroundColor: 'Grey' },
      width: 20,
      minWidth: 140,
      maxWidth: 140,
      headerName: "Testing", field: 'Testing', pinned: 'left'

    },
    {

      autoHeight: true,
      editable: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      headerName: "Initial", field: "InitialReading",
      resizable: true,
      /* cellEditorFramework: AgGridDatePickerComponent*/
      /*    filter: "agDateColumnFilter",*/
    },
    {


      flex: 1,
      resizable: true,
      wrapText: true,
      width: 270,
      minWidth: 100,
      maxWidth: 140,
      editable: true,
      autoHeight: true, headerName: "Duration 1", field: 'TwentyFourHours',

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
    },
    {
      flex: 1,
      resizable: true,

      wrapText: true,
      width: 150,
      minWidth: 100,
      maxWidth: 140,
      editable: true,
      autoHeight: true, headerName: "Duration 2", field: 'OneWeek',

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
    },

    {

      autoHeight: true,
      headerName: "Duration 3", field: 'TwoWeeks', type: 'numericColumn',

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right" },

      editable: true,
      minWidth: 100,
      maxWidth: 140,

    },
    {
      headerName: "Duration 4", field: 'OneMonth', type: 'numericColumn',

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      editable: true,
      minWidth: 100,
      maxWidth: 140,



    },
    {

      headerName: "Duration 5", field: 'TwoMonth', type: 'numericColumn',
      //width: 100,
      minWidth: 100,
      maxWidth: 140,
      editable: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
    },
    {
      flex: 1,
      resizable: true,
      wrapText: true,
      autoHeight: true,
      editable: true,
      headerName: "Duration 6", field: 'ThreeMonth',

      minWidth: 100,
      maxWidth: 140,

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
    },
    {

      headerName: "Duration 7", field: 'Sixmonth', width: 70,
      minWidth: 100,
      maxWidth: 140, type: 'numericColumn',
      autoHeight: true,
      editable: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
    },
    {

      headerName: "Duration 8", field: 'Twelvemonth', width: 90,
      minWidth: 100,
      maxWidth: 140,
      type: 'numericColumn',

      autoHeight: true,
      editable: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right" },
    },
    {

      headerName: "Duration 9", field: 'Twentyfourmonth', width: 70,
      minWidth: 100,
      editable: true,
      maxWidth: 140, type: 'numericColumn',
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },

    },
    {

      headerName: "Duration 10", field: 'Thirtysixmonth', width: 70,
      minWidth: 100,
      editable: true,
      maxWidth: 140, type: 'numericColumn',
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },

    },
    {

      headerName: "Other month ", field: 'OtherMonth', width: 70,
      minWidth: 100,
      editable: true,
      maxWidth: 140, type: 'numericColumn',
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },

    },
    {

      headerName: "Line Number", field: 'LineNumber', width: 70,
      minWidth: 100,
      maxWidth: 140,
      editable: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },

    },




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
      width: 20,
      minWidth: 140,
      maxWidth: 140,
      headerName: "Testing", field: 'Testing', pinned: 'left'
    },
    {

      autoHeight: true,
      editable: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      width: 20,
      minWidth: 140,
      maxWidth: 140,
      headerName: "Initial Results", field: "Initial"
    },
    {


      flex: 1,
      resizable: true,
      wrapText: true,
      width: 20,
      minWidth: 140,
      editable: true,
      maxWidth: 140,
      autoHeight: true, headerName: "1ST CYCLE", field: 'Cycle1',

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
    },
    {
      flex: 1,
      resizable: true,
      editable: true,
      wrapText: true,
      width: 20,
      minWidth: 140,
      maxWidth: 140,
      autoHeight: true, headerName: "2ND CYCLE", field: 'Cycle2',

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
    },

    {

      autoHeight: true,
      headerName: "3RD CYCLE", field: 'Cycle3', type: 'numericColumn',
      editable: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal", 'text-align': "right" },


      width: 20,
      minWidth: 140,
      maxWidth: 140,

    },
    {
      headerName: "3RD CYCLE", field: 'Cycle3', type: 'numericColumn',

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      editable: true,
      width: 20,
      minWidth: 140,
      maxWidth: 140,


    },
    {

      headerName: "4TH CYCLE", field: 'Cycle4', type: 'numericColumn',
      //width: 100,
      width: 20,
      minWidth: 140,
      maxWidth: 140,
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

      width: 20,
      minWidth: 140,
      maxWidth: 140,

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
    },

  ];
  openformulalookup() {
    const dialogRef = this.dialog.open(PdrManagementComponent, {
      width: '95%', height: '95%', disableClose: true, data: "openspecification"
    });
  }
  datechangeclickdur1(event) {
    var curr = this.initialdate;
    var dur1 = this.duration1date;
    var tenatativestartdate = moment(curr);
    var tentaviveenddate = moment(dur1);
    this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
    this.duration1time = this.DiffDate + 'Week'
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
  datechangeclickdur2(event) {
    var curr = this.initialdate;
    var dur1 = this.duration2date;
    var tenatativestartdate = moment(curr);
    var tentaviveenddate = moment(dur1);

    this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
    this.duration2time = this.DiffDate + 'Week'
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickdur3(event) {
    var curr = this.initialdate;
    var dur1 = this.duration3date;
    var tenatativestartdate = moment(curr);
    var tentaviveenddate = moment(dur1);

    this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
    this.duration3time = this.DiffDate + 'Week'
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickdur4(event) {
    var curr = this.initialdate;
    var dur1 = this.duration4date;
    var tenatativestartdate = moment(curr);
    var tentaviveenddate = moment(dur1);

    this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
    this.duration4time = this.DiffDate + 'Week'
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickdur5(event) {
    var curr = this.initialdate;
    var dur1 = this.duration5date;
    var tenatativestartdate = moment(curr);
    var tentaviveenddate = moment(dur1);

    this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
    this.duration5time = this.DiffDate + 'Week'
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickdur6(event) {
    var curr = this.initialdate;
    var dur1 = this.duration6date;
    var tenatativestartdate = moment(curr);
    var tentaviveenddate = moment(dur1);

    this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
    this.duration6time = this.DiffDate + 'Week'
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickdur7(event) {
    var curr = this.initialdate;
    var dur1 = this.duration7date;
    var tenatativestartdate = moment(curr);
    var tentaviveenddate = moment(dur1);

    this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
    this.duration7time = this.DiffDate + 'Week'
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickdur8(event) {
    var curr = this.initialdate;
    var dur1 = this.duration8date;
    var tenatativestartdate = moment(curr);
    var tentaviveenddate = moment(dur1);

    this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
    this.duration8time = this.DiffDate + 'Week'
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickdur9(event) {
    var curr = this.initialdate;
    var dur1 = this.duration9date;
    var tenatativestartdate = moment(curr);
    var tentaviveenddate = moment(dur1);

    this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
    this.duration9time = this.DiffDate + 'Week'
    //this.pdrcreationdays = this.pdrcreationdays1;
  }
  datechangeclickdur10(event) {
    var curr = this.initialdate;
    var dur1 = this.duration10date;
    var tenatativestartdate = moment(curr);
    var tentaviveenddate = moment(dur1);

    this.DiffDate = Math.abs(tenatativestartdate.diff(tentaviveenddate, 'week'));
    this.duration10time = this.DiffDate + 'Week'
    //this.pdrcreationdays = this.pdrcreationdays1;
  }

 


  generalmethod(generalvalues: any) {
    for (let item of generalvalues) {
      this.stabno = item.STABNumber;
      this.formulacode = item.FormulaCode;
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
      this.formulacode = item.FormulaCode;
      this.pdrno = item.PDRNo;
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
    var username = 'admin';
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

    this.Phystabdetailgridvalues(this.stability_detailload);
    this.Freezegridvalues(this.freeze_detailload);

    var phyload: any = JSON.stringify(this.mainList);
    var details: any = JSON.stringify(this.detailsList);
    var freeze: any = JSON.stringify(this.freezeList);
    var username = 'admin';
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
    var username = 'admin';

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

   
  }
  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }
  startdatechangeclick(event) {
    this.stdate = new Date(this.startdate);
  //  this.startdate = formatDate((this.stdate), 'MM/dd/yyyy', 'en-US');
   // this.enddate =this.startdate.setFullYear(this.startdate.getFullYear() + 1);
    this.enddate = formatDate((this.stdate.setFullYear(this.stdate.getFullYear() + 1)), 'yyyy-MM-dd', 'en-US');
    this.initialdate = this.startdate;
    this.duration10date = this.enddate;
  }
  ngOnInit() {
    var Phystabilitylist: any = this.datashare.getPhystability();
    console.log(Phystabilitylist);


    this.storagecondition = Phystabilitylist[0];
    this.labbatchno =Phystabilitylist[1];
    this.batchtype = Phystabilitylist[2];
    this.startdate = formatDate((Phystabilitylist[3]), 'yyyy-MM-dd', 'en-US');
    this.enddate = formatDate((Phystabilitylist[4]), 'yyyy-MM-dd', 'en-US');
    this.formulacode = Phystabilitylist[5];
    this.formulaname = Phystabilitylist[6];
    this.stabno = Phystabilitylist[7];
    this.startdate = new Date().toISOString().split('T')[0];
    this.enddate=new Date().toISOString().split('T')[0];
  //  this.enddate = new Date(formatDate((this.startdate.setFullYear(this.startdate.getFullYear() + 1)), 'yyyy-MM-dd', 'en-US'));
   // this.enddate = new Date(this.startdate.setFullYear(this.startdate.getFullYear() + 1));
    this.initialdate = this.startdate;
    this.duration9date = this.enddate;
    //if (this.initialdate == this.duration10date) {

    //}
    //else {
    var testDate = new Date(this.startdate);
    this.duration1date = formatDate(new Date(testDate.getTime() + (7 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration2date = formatDate(new Date(testDate.getTime() + (14 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration3date = formatDate(new Date(testDate.getTime() + (28 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration4date = formatDate(new Date(testDate.getTime() + (42 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration5date = formatDate(new Date(testDate.getTime() + (56 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration6date = formatDate(new Date(testDate.getTime() + (70 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration7date = formatDate(new Date(testDate.getTime() + (84 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration8date = formatDate(new Date(testDate.getTime() + (182 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
    this.duration9date = formatDate(new Date(testDate.getTime() + (364 * 24 * 60 * 60 * 1000)), 'yyyy-MM-dd', 'en-US');
   
     // var dt= testDate.setDate(testDate.getDate() + 7);
  /*  }*/
   
    this.formulacode = this.data.displaydata[0];
    this.formulaname = this.data.displaydata[1];
    this.labbatchno = this.data.displaydata[2];
    this.pdrno = this.data.displaydata[3];
    this.storagecondition = this.data.displaydata[4];
    if (this.storagecondition == undefined) {
      this.storagecondition = '';
    }
    this.stabilitydetailsload().subscribe((stabilityload) => {
      console.warn("stabilityload", stabilityload)
      this.stability_detailload = stabilityload
      this.rowDatastabilitydetails = this.stability_detailload.shift();
    

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

