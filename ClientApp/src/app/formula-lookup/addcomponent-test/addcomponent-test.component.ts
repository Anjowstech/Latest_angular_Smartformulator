import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageBoxYesnoComponent } from 'src/app/message-box-yesno/message-box-yesno.component';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-addcomponent-test',
  templateUrl: './addcomponent-test.component.html',
  styleUrls: ['./addcomponent-test.component.css']
})
export class AddcomponentTestComponent implements OnInit {

  formulacode: string;
  formulaname: string;
  labbatchno: string;
  pdrno: string;
  storagecondition: string = "";
  customer: string = "";
  packagedescription: string;
  productname: string = "";
  startdate: string = "";
  enddate: string = "";
  approved: string = "";
  appvedby: string;
  sop: string;
  ccompno: string;
  msgdata: string;
  productimagepath: string = "";
  setalert: string = "";
  refno: string = "";
  productimage: string = "";
  lotno: string = "";
  pkgdescription: string = "";
  comments: string = "";
  approvedby: string = "";
  showalert: string = "";
  comp_detailload: any;
  freeze_detailload: any;
  ccompnoload_detailload: any;
  delete_component: any;
  component_save_data: any;
  comp_load: any;
  i: number;
  j: number;
  mainList: componentmasterData[][] = [];
  detailsList: componentdetailsData[][] = [];
  freezeList: componentfreezeData[][] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient, public dialog: MatDialog) { }


  generalmethod(generalvalues: any) {
    for (let item of generalvalues) {
      this.ccompno = item.compno;
      this.formulacode = item.FormulaCode;
      this.formulaname = item.FormulaName;
      this.storagecondition = item.StorageCondition;
      this.productname = item.ProductName;
      this.customer = item.Customer
      this.productimage = item.productimage
      this.productimagepath = item.productimagepath
      this.startdate = formatDate(new Date(item.StartDate), 'yyyy-MM-dd', 'en-US');
      this.enddate = formatDate(new Date(item.EndDate), 'yyyy-MM-dd', 'en-US');
      this.setalert = item.SetAlert;
      this.refno = item.ReferenceNo;
      this.packagedescription = item.PackageDescription;
      this.comments = item.Comments;
      this.lotno = item.LotNo;
      this.approved = item.Approved;
      this.approvedby = item.ApprovedBy;
      this.showalert = item.showalert;

    }
  }

  componentApproval() {
    var formulacod: any = this.formulacode;
    var formulanam: any = this.formulaname;
    var storage: any = this.storagecondition;
    var labbatch = this.labbatchno;
    var username = 'admin';
    var chkApproval = 'true';
    let params1 = new HttpParams().set('Formulacode', formulacod).set('ProductName', formulanam).set('storagecondition', storage).set('PackageName', labbatch).set('username', username).set('chkApproval', chkApproval);
    return this.http.get("https://formulalookupwebservice12.azurewebsites.net/stability_approval", { params: params1 })
  }
  componentdetailsload() {
    var formulcod: string = this.formulacode;
    var storage: string = this.storagecondition;
    var pkgdescr: string = this.labbatchno;
    let params1 = new HttpParams().set('Formulacode', formulcod).set('StorageCondition', storage).set('PackageDescription', pkgdescr);
    return this.http.get("https://formulalookupwebservice12.azurewebsites.net/CompDetails", { params: params1 })
  }
  componentfreezetableload() {
    var formulcod: string = this.formulacode;
    var storage: string = this.storagecondition;
    var pkgdescr: string = this.labbatchno;
    let params1 = new HttpParams().set('Formulacode', formulcod).set('StorageCondition', storage).set('PackageDescription', pkgdescr);
    return this.http.get("https://formulalookupwebservice12.azurewebsites.net/FillFreeze", { params: params1 })
  }
  compload() {
    var formulcod: string = this.formulacode;
    var labatch: string = this.labbatchno;
    let params1 = new HttpParams().set('FormulaCode', formulcod).set('LabBatchNo', labatch);
    return this.http.get("https://formulalookupwebservice12.azurewebsites.net/GetStabNo", { params: params1, responseType: 'text' })
  }
  componenttabdetails() {
    var formulcod: string = this.formulacode;
    var storage: string = this.storagecondition;
    var pkgdesc: string = this.packagedescription;
    let params1 = new HttpParams().set('Formulacode', formulcod).set('StorageCondition', storage).set('PackageDescription', pkgdesc);
    return this.http.get("https://formulalookupwebservice12.azurewebsites.net/BindComponentdetails", { params: params1 })
  }

  ComponenetDelete() {

    let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '30%', height: '15%', data: { displaydatagrid: 'This will delete the stability detail entry. Do you want to delete this entry?' }, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ${result}');
      this.msgdata = result;

      if (this.msgdata == "false") { }
      else {
        this.componentdelete().subscribe((componentdelete) => {
          console.warn("componentdelete", componentdelete)
          this.delete_component = componentdelete

          if (this.delete_component == "deleted") {
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Component test deleted successfully.' } });
            this.delete_component = ""
          }

        })


      }

    });

  }
  componentdelete() {
    var formulacod: any = this.formulacode;
    var storage: any = this.storagecondition;
    var packagename = this.packagedescription;
    var username = 'admin';

    let params1 = new HttpParams().set('Formulacode', formulacod).set('storagecondition', storage).set('PackageName', packagename).set('username', username);
    return this.http.get("https://formulalookupwebservice12.azurewebsites.net/Component_delete", { params: params1, responseType: 'text' })
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
        COMPNumber: this.ccompno,
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
        STABNumber: this.ccompno,
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

  Componentcompactibility_save() {

    this.mainList[0] = ([{
      FormulaCode: this.formulacode,
      FormulaName: this.formulaname,
      StorageCondition: this.storagecondition,
      StartDate: this.startdate,
      EndDate: this.enddate,
      Customer: this.customer,
      ProductName: this.productname,
      Comments: this.comments,
      SetAlert: this.setalert,
      ReferenceNo: this.refno,
      LotNo: this.lotno,
      PackageName: this.packagedescription,
      SOPFile: this.sop,
      compno: this.ccompno,
      productimage: this.productimage,
      productimagepath: this.productimagepath,


    }]);
    this.Component_savemethod().subscribe((component_save) => {
      console.warn("component_save", component_save)
      this.component_save_data = component_save

      if (this.component_save_data == "saved successfully.") {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Component test saved successfully.' } });
        this.component_save_data = ""
      }
      else if (this.component_save_data == "already exists.") {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'already exists.' } });
        this.component_save_data = ""
      }

    })
  }

  Component_savemethod() {

    this.Phystabdetailgridvalues(this.comp_detailload);
    this.Freezegridvalues(this.freeze_detailload);

    var compload: any = JSON.stringify(this.mainList);
    var details: any = JSON.stringify(this.detailsList);
    var freeze: any = JSON.stringify(this.freezeList);
    var username = 'admin';
    var operation = 'Save'
    let params1 = new HttpParams().set('compMasterjson', compload).set('compDetailjson', details).set('compFreezeDetailjson', freeze).set('username', username).set('Operation', operation);
    return this.http.get("https://formulalookupwebservice12.azurewebsites.net/ComponentSaveorUpdate", { params: params1, responseType: 'text' })
  }

  ngOnInit() {
    this.formulacode = this.data.displaydata[0];
    this.formulaname = this.data.displaydata[1];
    this.labbatchno = this.data.displaydata[2];
    this.pdrno = this.data.displaydata[3];
    this.customer = this.data.displaydata[4];
    this.packagedescription = this.data.displaydata[5];
    if (this.packagedescription == undefined) {
      this.packagedescription = '';
    }
    this.storagecondition = this.data.displaydata[6];
    if (this.storagecondition == undefined) {
      this.storagecondition = '';
    }
    this.productname = this.data.displaydata[7];
    if (this.productname == undefined) {
      this.productname = '';
    }
    this.startdate = this.data.displaydata[8];
    this.enddate = this.data.displaydata[9];
    this.approved = this.data.displaydata[10];
    this.appvedby = this.data.displaydata[11];
    this.sop = this.data.displaydata[12];

    this.componentdetailsload().subscribe((compdetailload) => {
      console.warn("compdetailload", compdetailload)
      this.comp_detailload = compdetailload

    })
    this.componentfreezetableload().subscribe((compfreezeload) => {
      console.warn("compfreezeload", compfreezeload)
      this.freeze_detailload = compfreezeload

    })
    this.compload().subscribe((ccompnoload) => {
      console.warn("ccompnoload", ccompnoload)
      this.ccompnoload_detailload = ccompnoload
      this.ccompno = this.ccompnoload_detailload
    })
    this.componenttabdetails().subscribe((componenttabdetails) => {
      console.warn("componenttabdetails", componenttabdetails)
      this.comp_load = componenttabdetails
      this.generalmethod(this.comp_load)
    })
  }

}
export class componentmasterData {

  FormulaCode: string;
  FormulaName: string;
  StorageCondition: string;
  StartDate: string;
  EndDate: string;
  Customer: string;
  ProductName: string;
  Comments: string;
  SetAlert: string;
  ReferenceNo: string;
  LotNo: string;
  PackageName: string;
  SOPFile: string;
  compno: string;
  productimage: string;
  productimagepath: string;

}
export class componentdetailsData {

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
  COMPNumber: string;
  LabBatchNo: string;
  LineNumber: string;


}
export class componentfreezeData {
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
