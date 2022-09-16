import { Component, OnInit } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { Router, RouterModule, Routes } from '@angular/router';

import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchFormulaComponent } from 'src/app/formula-lookup/search-formula/search-formula.component';
import { AddQCComponent } from 'src/app/formula-lookup/add-qc/add-qc.component';
import { AddproductTestingComponent } from 'src/app/formula-lookup/addproduct-testing/addproduct-testing.component'
import { AddphystabilityTestComponent } from 'src/app/formula-lookup/addphystability-test/addphystability-test.component'
@Component({
  selector: 'app-formula-status',
  templateUrl: './formula-status.component.html',
  styleUrls: ['./formula-status.component.css']
})
export class FormulaStatusComponent implements OnInit {
  issearchform: boolean = false;
  active: string = '';
  formulacode: string = '';
  formulaname: any;
  labref: string = '';
  isLoading = true;
  PDRno: string = '';
  dataresultLoadsearchformulamain: any;
  dataresultmsdsload: any;
  dataresultProjectload: any;
  ProjectName: string;
  dataresultloadQC: any;
  dataresultAuditList: any;
  dataresultProductTesting: any;
  dataresultLoadPricing: any;
  dataresultApprovalLoad: any;
  SeqNo: any;
  noOfDays: any;
  startDate: any;
  endDate: any;
  Results: any;
  AddedBy: any;
  approved: any;
  ApprovedBy: any;
  searchitems: any[];
  date: any;
  Task: any;
  UserName: any;
  dialogRef: any;
  TestName: any;
  OpenDate: any;
  DueDate: any;
  dataresultLoadPhystability: any;
  LabBatchNo: any;
  StorageCondition: any;
  BatchType: any;
  AdminName: string = '';
  LockedDate: string = '';
  Status: string = '';
  CusCode: string = '';
  cstmrname: string = '';
  address: string = '';
  dataresultLoadCustomer: any;
  StartDate: any;
  CompletedDate: any;
  Revenue: any;
  TradeName: any;
  Class: any;
  SubClass: any;
  SupercededBy: any;
  SupercededDate: any;
  MayProduce: any;
  FormulaCost: string ="0.00";
  ManualSG: any;
  ShelfLife: any;
  ShelfLifeUnit: any;
  userName: any;
  AddedDT: any;
  UpdatedBy: any;
  updatedDt: any;
  CompanyOwned: any;
  Locked: any;
  dataresultLoadformulalock: Object;
  LabBatchsize: string= "0.00000";
  Unit: string ="0.00";
  packingCost: string = "0.00";
  labourCost: string = "0.00";
  overheadCost: string = "0.00";
  miscost: string = "0.00";
  facost: string = "0.00";
  transAir: string = "0.00";
  transWater: string = "0.00";
  transRoad: string = "0.00";
  artworkcost: string = "0.00";
  labelcost: string = "0.00";
  Totalcost: string = "0.00";
  twentyfivemargin: string = "0.00";
  twentyfivemargincost: string = "0.00";
  thirtymargin: string = "0.00";
  thirtymargincost: string = "0.00";
  fortymargin: string = "0.00";
  fortymargincost: string = "0.00";
  fiftymargin: string = "0.00";
  fiftymargincost: string = "0.00";
  hundredmargin: string = "0.00";
  hundredmargincost: string = "0.00";
  customperc: string = "0.00";
  custommargin: string = "0.00";
  custommargincost: string = "0.00";
  addeBy: any;
  addedDt: any;
  Activity: any;
  approveddt: any;
    btnstate: boolean = false;
    Qclist: any[];
    Phystabilitylist: string[];
    producttestlist: string[];
    stabno: string;
    formulaName: any;



  constructor(public dialog: MatDialog, private http: HttpClient, private Datashare: DataShareServiceService, public router: Router) { }

  FormulaLockdata(formuladata: any) {
    for (let item of formuladata) {
      this.formulacode = item.FormulaCode;
      this.formulaName = item.FormulaName;
      this.AdminName = item.AdminName;
      this.LockedDate = item.LockedDate;
      this.Status = item.Status;
      this.ProjectName = item.ProjectName;
    }
  }

  Formulamaindata(formuladata: any) {
    for (let item of formuladata) {
      this.formulacode = item.FormulaCode;
      this.formulaName = item.FormulaName;
      this.TradeName = item.TradeName;
      this.Class = item.Class;
      this.SubClass = item.SubClass;
      this.Status = item.Status;
      this.SupercededBy = item.SupercededBy;
      this.SupercededDate = item.SupercededDate;
      this.MayProduce = item.MayProduce;
      this.ApprovedBy = item.ApprovedBy;
      this.FormulaCost = item.FormulaCost;
      this.ManualSG = item.ManualSG;
      this.ShelfLife = item.ShelfLife;
      this.ShelfLifeUnit = item.ShelfLifeUnit;
      this.userName = item.userName;
      this.AddedDT = item.AddedDT;
      this.UpdatedBy = item.UpdatedBy;
      this.updatedDt = item.updatedDt;
      this.CompanyOwned = item.CompanyOwned;
      this.Locked = item.Locked;
      this.ProjectName = item.ProjectName;

    }
  }
  Pricingdata(pricedata: any) {
    for (let item of pricedata) {
      this.LabBatchsize = item.LabBatchsize;
      this.Unit = item.Unit;
      this.FormulaCost = item.FormulaCost;
      this.packingCost = item.packingCost;
      this.labourCost = item.labourCost;
      this.overheadCost = item.overheadCost;
      this.miscost = item.miscost;
      this.facost = item.facost;
      this.transAir = item.transAir;
      this.transWater = item.transWater;
      this.transRoad = item.transRoad;
      this.artworkcost = item.artworkcost;
      this.labelcost = item.labelcost;
      this.Totalcost = item.Totalcost;
      this.twentyfivemargin = item.twentyfivemargin;
      this.twentyfivemargincost = item.twentyfivemargincost;
      this.thirtymargin = item.thirtymargin;
      this.thirtymargincost = item.thirtymargincost;
      this.fortymargin = item.fortymargin;
      this.fortymargincost = item.fortymargincost;
      this.fiftymargin = item.fiftymargin;
      this.fiftymargincost = item.fiftymargincost;
      this.hundredmargin = item.hundredmargin;
      this.hundredmargincost = item.hundredmargincost;
      this.customperc = item.customperc;
      this.custommargin = item.custommargin;
      this.custommargincost = item.custommargincost;

    }
  }
  Projectdata(Projectdata: any) {
    for (let item of Projectdata) {
      this.PDRno = item.PDRNo;
      this.Status = item.Status;
      this.CusCode = item.CustomerCode;
      this.cstmrname = item.CusName;
      this.address = item.Address;
      this.StartDate = item.StartDate;
      this.CompletedDate = item.CompletedDate;
      this.Revenue = item.Revenue;
    }
  }
  msdsdata(data: any) {
    for (let item of data) {

      this.addeBy = item.addeBy;
      this.addedDt = item.addedDt;

    }
  }

  Loadsearchformulamain() {
    // "2011-1112"

    var formulacod: string = this.formulacode;
    let params1 = new HttpParams().set('formulacode', formulacod);

    return this.http.get("https://formulastatusloadwebservice.azurewebsites.net/LoadFormulamain", { params: params1 });
  }

  msdsload() {
    var formulacod: string = this.formulacode;
    let params1 = new HttpParams().set('formulacode', formulacod);

    return this.http.get("https://formulastatusloadwebservice.azurewebsites.net/msdsload", { params: params1 });
  }
  Projectload() {

    var ProjectNam: string = this.ProjectName;
    let params1 = new HttpParams().set('ProjectName', ProjectNam);

    return this.http.get("https://formulastatusloadwebservice.azurewebsites.net/Projectload", { params: params1 });
  }
  AuditList() {
    var formulacod: string = this.formulacode;
    let params1 = new HttpParams().set('formulacode', formulacod);

    return this.http.get("https://formulastatusloadwebservice.azurewebsites.net/AuditList", { params: params1 });
  }
  setvaluesaudit(AuditList_search) {
    this.date = AuditList_search.date;
    this.Task = AuditList_search.Task;
    this.UserName = AuditList_search.UserName;
    this.approved = AuditList_search.approved;

    this.searchitems = [this.date, this.Task, this.UserName, this.approved]
  }
  closeaud() {

    this.dialogRef.close(this.searchitems);

  }
  loadQC() {

    var formulacod: string = this.formulacode;
    let params1 = new HttpParams().set('formulacode', formulacod);

    return this.http.get("https://formulastatusloadwebservice.azurewebsites.net/loadQC", { params: params1 });
  }

  setvalues(loadQC_search) {
    this.SeqNo = loadQC_search.SeqNo;
    //this.formulaName = loadQC_search.Description;
    this.noOfDays = loadQC_search.noOfDays;
    this.startDate = loadQC_search.startDate;
    this.endDate = loadQC_search.endDate;
    this.Results = loadQC_search.Results;
    this.AddedBy = loadQC_search.AddedBy;
    this.approved = loadQC_search.approved;
    this.ApprovedBy = loadQC_search.ApprovedBy;
    this.searchitems = [this.SeqNo, this.formulaName, this.noOfDays, this.startDate, this.endDate, this.Results, this.AddedBy, this.approved, this.ApprovedBy]

    this.Qclist = [this.SeqNo, this.formulaname, this.noOfDays,
      this.startDate, this.endDate, this.Results,this.formulacode]
    this.Datashare.sendQCdetails(this.Qclist);
    const dialogRef = this.dialog.open(AddQCComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  close() {

    this.dialogRef.close(this.searchitems);

  }
  ProductTesting() {
    var formulacod: string = this.formulacode;
    let params1 = new HttpParams().set('formulacode', formulacod);

    return this.http.get("https://formulastatusloadwebservice.azurewebsites.net/ProductTesting", { params: params1 });
  }
  setvaluesproduct(Producttesting_search) {
    this.TestName = Producttesting_search.TestName;
    this.OpenDate = Producttesting_search.OpenDate;
    this.DueDate = Producttesting_search.DueDate;
    this.approved = Producttesting_search.Approved;
    this.ApprovedBy = Producttesting_search.ApprovedBy;

    this.searchitems = [this.TestName, this.OpenDate, this.DueDate, this.approved, this.ApprovedBy]
  }
  closeprotest() {

    this.dialogRef.close(this.searchitems);

  }
  LoadPricing() {
    var formulacod: string = this.formulacode;
    let params1 = new HttpParams().set('formulacode', formulacod);

    return this.http.get("https://formulastatusloadwebservice.azurewebsites.net/LoadPricing", { params: params1 });
  }
  TestLoad() {
    var formulanam: string = this.formulaname;
    let params1 = new HttpParams().set('formulaname', formulanam);

    return this.http.get("https://formulastatusloadwebservice.azurewebsites.net/TestLoad", { params: params1 });

  }
  setvaluesapproval(Approval_search) {
    this.Activity = Approval_search.Activity;
    this.approved = Approval_search.approved;
    this.ApprovedBy = Approval_search.ApprovedBy;
    this.approveddt = Approval_search.ApprovedDt;

    this.searchitems = [this.Activity, this.approved, this.ApprovedBy, this.approveddt]
  }
  closeapproval() {

    this.dialogRef.close(this.searchitems);

  }
  ApprovalLoad() {
    var formulacod: string = this.formulacode;
    let params1 = new HttpParams().set('formulacode', formulacod);

    return this.http.get("https://formulastatusloadwebservice.azurewebsites.net/ApprovalLoad", { params: params1 });
  }
  LoadPhystability() {
    var formulacod: string = this.formulacode;
    let params1 = new HttpParams().set('formulacode', formulacod);

    return this.http.get("https://formulastatusloadwebservice.azurewebsites.net/Phystability", { params: params1 });
  }
  setvaluesphystability(loadPHY_search) {
    this.StorageCondition = loadPHY_search.StorageCondition;
    this.LabBatchNo = loadPHY_search.LabBatchNo;
    this.BatchType = loadPHY_search.BatchType;
    this.startDate = loadPHY_search.StartDate;
    this.endDate = loadPHY_search.EndDate;
    this.approved = loadPHY_search.Approved;
    this.ApprovedBy = loadPHY_search.ApprovedBy;
    this.stabno = loadPHY_search.STABNumber;
    this.searchitems = [this.StorageCondition, this.LabBatchNo, this.BatchType,
      this.startDate, this.endDate, this.AddedBy, this.approved, this.ApprovedBy, this.stabno]
  }
  closephystability() {

    this.dialogRef.close(this.searchitems);

  }

  searchformula(): void {
    const dialogRef = this.dialog.open(SearchFormulaComponent, {
      width: '80%', height: '90%', data: { CusCodedata: this.CusCode }, disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed', result);
      this.issearchform = true;
        this.active = "1";
        this.formulacode = result[0];
        this.formulaname = result[1];
        this.labref = result[2];
        this.PDRno = result[3];


        this.Loadsearchformulamain().subscribe((resultLoadsearchformulamain) => {
          this.isLoading = false;
          console.warn("resultLoadsearchformulamain", resultLoadsearchformulamain)
          this.dataresultLoadsearchformulamain = resultLoadsearchformulamain
          this.Formulamaindata(this.dataresultLoadsearchformulamain)
        })
        this.msdsload().subscribe((resultmsdsload) => {
         
          console.warn("resultmsdsload", resultmsdsload)
          this.dataresultmsdsload = resultmsdsload
          this.msdsdata(this.dataresultmsdsload)
        })
        this.Projectload().subscribe((resultProjectload) => {
          this.isLoading = false;
          console.warn("resultProjectload", resultProjectload)
          this.dataresultProjectload = resultProjectload
          this.Projectdata(this.dataresultProjectload)

        })
        this.loadQC().subscribe((resultloadQC) => {
       
          console.warn("resultloadQC", resultloadQC)
          this.dataresultloadQC = resultloadQC
        })
        this.AuditList().subscribe((resultAuditList) => {
          this.isLoading = false;
          console.warn("resultAuditList", resultAuditList)
          this.dataresultAuditList = resultAuditList
        })
        this.ProductTesting().subscribe((resultProductTesting) => {
          this.isLoading = false;
          console.warn("resultProductTesting", resultProductTesting)
          this.dataresultProductTesting = resultProductTesting
        })
        this.LoadPricing().subscribe((resultLoadPricing) => {
          this.isLoading = false;
          console.warn("resultLoadPricing", resultLoadPricing)
          this.dataresultLoadPricing = resultLoadPricing
          this.Pricingdata(this.dataresultLoadPricing)
        })
        this.TestLoad().subscribe((resultLoadformulalock) => {
          this.isLoading = false;
          console.warn("resultLoadformulalock", resultLoadformulalock)
          this.dataresultLoadformulalock = resultLoadformulalock
          this.FormulaLockdata(this.dataresultLoadformulalock)
        })
        this.ApprovalLoad().subscribe((resultApprovalLoad) => {
          this.isLoading = false;
          console.warn("resultApprovalLoad", resultApprovalLoad)
          this.dataresultApprovalLoad = resultApprovalLoad
        })
        this.LoadPhystability().subscribe((resultLoadPhystability) => {
          this.isLoading = false;
          console.warn("resultLoadPhystability", resultLoadPhystability)
          this.dataresultLoadPhystability = resultLoadPhystability
        })

      
    });
  }

  ClearData() {
    this.active = "1";
    this.issearchform = false;
    this.Qclist = [];
    this.Phystabilitylist = [];
    this.producttestlist= [];
    this.ProjectName = '';
    this.formulacode = '';
    this.formulaname = '';
    this.PDRno = '';
    this.cstmrname = '';
    this.TradeName = '';
    this.Class = '';
    this.SubClass = '';
    this.Status = '';
    this.SupercededBy = '';
    this.SupercededDate = '';
    this.MayProduce = '';
    this.ApprovedBy = '';
    this.FormulaCost = '';
    this.ManualSG = '';
    this.ShelfLife = '';
    this.ShelfLifeUnit = '';
    this.userName = '';
    this.AddedDT = '';
    this.UpdatedBy = '';
    this.updatedDt = '';
    this.CompanyOwned = '';
    this.Locked = '';
    this.LockedDate = '';
    this.CusCode = '';
    this.address = '';
    this.addeBy = '';
    this.addedDt = '';
    this.Status = '';
    this.CusCode = '';
    this.StartDate = '';
    this.CompletedDate = '';
    this.Revenue = '';
    this.LabBatchsize = '';
    this.Unit = '';
    this.FormulaCost = '';
    this.packingCost = '';
    this.labourCost = '';
    this.overheadCost = '';
    this.miscost = '';
    this.facost = '';
    this.transAir = '';
    this.transWater = '';
    this.transRoad = '';
    this.artworkcost = '';
    this.labelcost = '';
    this.Totalcost = '';
    this.twentyfivemargin = '';
    this.twentyfivemargincost = '';
    this.thirtymargin = '';
    this.thirtymargincost = '';
    this.fortymargin = '';
    this.fortymargincost = '';
    this.fiftymargin = '';
    this.fiftymargincost = '';
    this.hundredmargin = '';
    this.hundredmargincost = '';
    this.customperc = '';
    this.custommargin = '';
    this.custommargincost = '';
    this.dataresultloadQC = '';
    this.dataresultApprovalLoad = '';
    this.dataresultLoadPhystability = '';
    this.dataresultProductTesting = '';
    this.dataresultAuditList = '';



  }
 



  Phystabilityopen() {
    this.Phystabilitylist = [this.StorageCondition, this.LabBatchNo, this.BatchType,
      this.startDate, this.endDate,
      this.formulacode, this.formulaname, this.stabno]
    this.Datashare.sendPhystability(this.Phystabilitylist);
    const dialogRef = this.dialog.open(AddphystabilityTestComponent, {
      width: '80%', height: '90%', disableClose: true,

    });
  }


  Producttestingopen() {
    this.producttestlist = [this.TestName, this.OpenDate, this.DueDate, this.approved, this.ApprovedBy,
    this.PDRno, this.formulacode,this.formulaname]
    this.Datashare.sendproducttest(this.producttestlist);
    const dialogRef = this.dialog.open(AddproductTestingComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }

  gotoback() {
    this.router.navigateByUrl('/Home');
  }



  ngOnInit() {


  }

}
