import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/formula-lookup/formula-lookup.component';
import { Inject } from '@angular/core';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MessageBoxYesnoComponent } from 'src/app/message-box-yesno/message-box-yesno.component';
import { Route, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { UnapprovedRawmaterialComponent } from 'src/app/sample-management/unapproved-rawmaterial/unapproved-rawmaterial.component';
import { SearchSubmissionComponent } from 'src/app/sample-management/search-submission/search-submission.component';
import { PDRListSearchComponent } from 'src/app/sample-management/pdrlist-search/pdrlist-search.component'
import { SearchFormulalistComponent } from 'src/app/sample-management/search-formulalist/search-formulalist.component';
//import { ReportViewerComponent } from 'src/app/reportviewer/report-viewer';
//import { ReportDesignerComponent } from 'src/app/reportdesigner/report-designer';




@Component({
  selector: 'app-sample-management',
  templateUrl: './sample-management.component.html',
  styleUrls: ['./sample-management.component.css']
})
export class SampleManagementComponent implements OnInit {
  filterMetadata = { count: 0 };


  formulacode: string = '';
  formulaname: string = '';
  PDRno: string = '';
  cstmrname: string = '';
  ProjectName: string = '';
  Pdrdata: string = '';
  CusNamedata: string = '';
  PDRStatus: string = 'A-Approved';
  Descriptiondata: string = '';
  samplesubmissionno: string = '';
  username: string = 'admin';
  PDRStatusdata: string = '';
  submissionno: string = '';
  SubmissionNum: string = '';
  UserNamea: string = '';
  Pdrdate: string = '';
  LabOpenStatusdata: string = '';
  isLoading = true;
  searchitems: any = [];
  intlastnumber: number;
  AdminName: string = '';
  CusCode: string = '';
  Address: string = '';
  dtpPDRFromDate: string = '';
  dtpPDRToDate: string = '';
  date: string = '';
  Task: string = '';
  UserName: string = '';
  SaveSamplesubmission: any;
  dataresultLoadCustomer: any;
  dataresultLoadpdrbydatelist: any;
  dataresultLoadpdrlist: any;
  SaveSamplestatus: any;
  PDRDate: string = '';
  dataresultLoadsampleaudit: any;
  issearchform: boolean = false;
  UserNamedata: string = '';
  datedt: string = '';
  Taskdata: string = '';
  dialogRef: any;
  AddedDT: string;
  AddedBy: string;
  CAbbreviation: string;
  CusName: string;
  Phone: string;
  Email: string;
  FAX: string;
  ContactFPerson: string;
  ContactSPerson: string;
  ContactTPerson: string;
  ContactFEmail: string;
  ContactSEmail: string;
  ContactTEmail: string;
  FillingInstruction: string;
  LabelingInstruction: string;
  SpecialInstruction: string;
  Attachment: string;
  Terms: string;
  FOB: string;
  Shipvia: string;
  SalesPerson: string;
  CreditCardNo: string;
  CreditCardType: string;
  ExpiryDate: string;
  CreditLimit: string;
  SalesRegion: string;
  SalesRepInitial: string;
  City: string;
  State: string;
  Country: string;
  Zip: string;
  CustomerKey: string;
  SAddress: string;
  SEmail: string;
  SPhoneNo: string;
  SFax: string;
  SCity: string;
  SState: string;
  SCountry: string;
  Szip: string;
  SContactNo: string;
  SContactPerson: string;
  Notes: string;
  LabelAttachment: string;
  FillingAttachment: string;
  FillingAttachment2: string;
  Shiptolocation: string;
  CustomerType: string;
  Tier1: string;
  Tier2: string;
  Tier3: string;
  Tier4: string;
  Document1: string;
  Document2: string;
  Document3: string;
  Document4: string;
  Document5: string;
  Document6: string;
  Document7: string;
  Document8: string;
  Document9: string;
  Document10: string;
  Document11: string;
  Document12: string;
  Document13: string;
  Document14: string;
  Document15: string;
  Document16: string;
  Document17: string;
  Document18: string;
  Document19: string;
  Document20: string;
  addeddt: string = "";
  addedby: string = "";
  updateddt: string = "";
  updatedby: string = "";
  caabrevation: string = "";
  contactfperson: string = "";
  contactsperson: string = "";
  contacttperson: string = "";
  contactfmail: string = "";
  contactsmail: string = "";
  contacttmail: string = "";
  cc1: string;
  cc2: string;
  cc3: string;
  FormulaName: string;
  ProductNumber: string;
  fillinginstruction: string = "";
  labelinginstruction: string = "";
  specialinstruction: string = "";
  attachment: string = "";
  terms: string = "";
  fob: string = "";
  shipvia: string = "";
  salesperson: string = "";
  creditcardno: string = "";
  creditcardtype: string = "";
  expirydate: string = "";
  creditlimit: string = '0';
  salesregion: string = "";
  salesrepinitial: string = "";
  city: string = "";
  state: string = "";
  country: string = "";
  zip: string = "";
  custmrkey: string = "";
  saddress: string = "";
  semail: string = "";
  customertype: string = '';
  notes: string = "";
  custocode: string;
  item: string = '';
  address: string = '';
  phone: string = '';
  emailref: string = '';
  fax: string = '';
  contactno: string = '';
  contactperson: string = '';
  telepho: string = '';
  zipcode: string = '';
  Fax: string = '';
  dataraw_search: any;
  todaydate: Date;
  duedate: string;
  approvaldate: string;
  submissiondate: string = '';
  customercode: string = '';

  DueDate: string;
  AddedDt: string;
  REP: string = "";
  ReportComments: string = " ";
  Subdate: string = " ";
  ApprovedDate: string = " ";
  approvecmd: string = " ";
  qty: string = "0.00";
  unit: string = " ";
  Price: string = "0.00";
  Priority: string = " ";
  userName: string;
  Purpose: string = " ";
  noofpieces: string = " ";
  Approved: string = " ";
  ApprovedBy: string = " ";
  PersonTitle: string = " ";
  Disclaimers: string = " ";
  CustomerComments: string = " ";
  FaxPerson: string = " ";
  UnApprovedrow: string;
  UnApproved: string = '';
  lenrawmat: number;
  sampledataList: Datasave[][] = [];
  samplelist: any = [];

  dataresultLoadunapproverawmatlist: any;
  length: any;
  nextsampleno: any;
  countrecords: any;
  LabopenStatus: string = "O-Open";
  Samplesubmission: any;
  doc1: string = "";
  doc2: string = "";
  doc3: string = "";
  doc4: string = "";
  doc5: string = "";
  doc6: string = '';
  doc7: string = "";
  btnstate: boolean = false;
  datedisabled: boolean = false;
  btndisstate: boolean = false;
  btnupdate: boolean = false;
  active: string;
  searchpdritems: string[];
  ApprovedComments: string;
  PDRnodata: any;
  cstmrnamedata: any;
  formulanamedata: any;
  formulacodedata: any;
  submissionnodata: any;
  LabopenStatusdata: any;
  UserNameadata: any;
  viewer: any;
  searchpdrdateitems: any[];


  constructor(public dialog: MatDialog, private http: HttpClient, private Datashare: DataShareServiceService, private router: Router) { }


  unapproverawmaterials() {
    var formula: any = [this.formulacode];

    const dialogRef = this.dialog.open(UnapprovedRawmaterialComponent, {
      width: '80%', height: '90%', data: { displaydata: formula }, disableClose: true

    });
  }

  Loadunapproverawmatlist() {
    var FormulaCode: string = this.formulacode;

    let params1 = new HttpParams().set('FormulaCOde', FormulaCode);

    return this.http.get("https://samplemanagementramatwebservice.azurewebsites.net/rawmaterialload", { params: params1 });
  }



  searchPDRlisting() {
    const dialogRef = this.dialog.open(PDRListSearchComponent, {
      width: '80%', height: '90%', disableClose: true

    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      this.PDRno = result[0];


    });
  }

  Loadsearchformula(PDRno: string) {
    // "2011-1112"

    var Pdrdata: string = this.PDRno;
    let params1 = new HttpParams().set('PDRNo', Pdrdata);

    return this.http.get("https://samplemanagementloadwebservice.azurewebsites.net/SearchFormulaListing", { params: params1 });
  }

  searchproductlisting() {
    const dialogRef = this.dialog.open(PDRListSearchComponent, {
      width: '80%', height: '90%', disableClose: true

    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      this.PDRno = result[0];
      this.cstmrname = result[2];
      this.PDRDate = formatDate((result[4]), 'yyyy-MM-dd', 'en-US');
      this.CusCode = result[3];

      //this.LoadCustomer().subscribe((resultLoadCustomer) => {
      //  this.isLoading = false;
      //  console.warn("resultLoadCustomer", resultLoadCustomer)
      //  this.dataresultLoadCustomer = resultLoadCustomer
      //  this.customerdata(this.dataresultLoadCustomer)
      //})
    });

  }
  customerdata(cstmrdata: any) {
    for (let item of cstmrdata) {

      this.customercode = item.CusCode;
      this.cstmrname = item.CusName;
      this.address = item.Address;
      this.customertype = item.CustomerType;
      this.phone = item.Phone;
      this.emailref = item.Email;
      this.fax = item.Fax;
      this.contactfperson = item.ContactFPerson;
      this.contactsperson = item.ContactSPerson;
      this.contacttperson = item.ContactTPerson;
      this.fob = item.FOB;
      this.city = item.City;
      this.zip = item.Zip;
      this.state = item.State;
      this.salesregion = item.SalesRegion;
      this.contactfmail = item.ContactFEmail;
      this.contactsmail = item.ContactSEmail;
      this.contacttmail = item.ContactTEmail;
      this.salesrepinitial = item.SalesRepInitial;
      this.creditlimit = item.CreditLimit;
      this.notes = item.Notes;
      this.addeddt = item.AddedDT;
      this.addedby = item.AddedBy;
      this.updateddt = item.UpdatedDT;
      this.updatedby = item.UpdatedBy;
      this.caabrevation = item.CAbbreviation;
      this.cc1 = item.cc1;
      this.cc2 = item.cc2;
      this.cc3 = item.cc3;
      this.fillinginstruction = item.FillingInstruction;
      this.labelinginstruction = item.LabelingInstruction;
      this.specialinstruction = item.SpecialInstruction;
      this.attachment = item.Attachment;
      this.terms = item.Terms;
      this.shipvia = item.Shipvia;
      this.salesperson = item.SalesPerson;
      this.creditcardno = item.CreditCardNo;
      this.creditcardtype = item.CreditCardType;
      this.expirydate = formatDate(new Date(item.ExpiryDate), 'yyyy-MM-dd', 'en-US');
      this.country = item.Country;
      this.custmrkey = item.CustomerKey;
      this.saddress = item.SAddress;
      this.semail = item.SEmail;
      this.FillingAttachment = item.FillingAttachment;
      this.FillingAttachment2 = item.FillingAttachment2;
      this.LabelAttachment = item.LabelAttachment;
      this.City = item.SCity;
      this.contactno = item.SContactNo;
      this.contactperson = item.SContactPerson;
      this.Country = item.SCountry;
      this.Email = item.SEmail;
      this.Fax = item.SFax;
      this.telepho = item.SPhoneNo;
      this.State = item.SState;
      this.zipcode = item.SZip;
      this.Shiptolocation = item.Shiptolocation;
      this.Tier1 = item.Tier1;
      this.Tier2 = item.Tier2;
      this.Tier3 = item.Tier3;
      this.Tier4 = item.Tier4;
      this.Document1 = item.Document1
      this.Document2 = item.Document2
      this.Document3 = item.Document3
      this.Document4 = item.Document4
      this.Document5 = item.Document5
      this.Document6 = item.Document6
      this.Document7 = item.Document7
      this.Document8 = item.Document8
      this.Document9 = item.Document9
      this.Document10 = item.Document10
      this.Document11 = item.Document11
      this.Document12 = item.Document12
      this.Document13 = item.Document13
      this.Document14 = item.Document14
      this.Document15 = item.Document15
      this.Document16 = item.Document16
      this.Document17 = item.Document17
      this.Document18 = item.Document18
      this.Document19 = item.Document19
      this.Document20 = item.Document20

    }

  }
  searchsubmission() {
    const dialogRef = this.dialog.open(SearchSubmissionComponent, {
      width: '80%', height: '90%', disableClose: true

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.submissionno = result[0];
      this.PDRno = result[1];
      this.cstmrname = result[5];
      this.formulacode = result[7];
      this.formulaname = result[8];
      this.PDRStatus = result[9];
      this.LabopenStatus = result[10];
      this.PDRDate = formatDate((result[2]), 'yyyy-MM-dd', 'en-US');
      this.CusCode = result[6];
      this.duedate = formatDate((result[3]), 'yyyy-MM-dd', 'en-US');
      this.ApprovedDate = result[7];
      this.REP = result[11];
      this.qty = result[12];
      this.unit = result[13];
      this.Price = result[14];
      this.Priority = result[15];
      this.Purpose = result[16];
      this.noofpieces = result[17];
      this.Approved = result[18];
      this.ApprovedBy = result[19];
      this.Fax = result[20];
      this.FaxPerson = result[21];
      this.ReportComments = result[22];
      this.ApprovedComments = result[23];
      this.PersonTitle = result[24];
      this.CustomerComments = result[25];
      this.cc1 = result[26];
      this.cc2 = result[27];
      this.cc3 = result[28];
      this.Disclaimers = result[29];

      this.LoadCustomer().subscribe((resultLoadCustomer) => {
        this.isLoading = false;
        console.warn("resultLoadCustomer", resultLoadCustomer)
        this.dataresultLoadCustomer = resultLoadCustomer
        this.customerdata(this.dataresultLoadCustomer)
      })
      this.Loadsampleaudit(this.submissionno).subscribe((resultLoadsampleaudit) => {
        console.warn("resultLoadsampleaudit", resultLoadsampleaudit)
        this.dataresultLoadsampleaudit = resultLoadsampleaudit
      })


      this.Loadunapproverawmatlist().subscribe((resultLoadunapproverawmatlist) => {
        this.isLoading = false;
        console.warn("resultLoadunapproverawmatlist", resultLoadunapproverawmatlist)
        this.dataresultLoadunapproverawmatlist = resultLoadunapproverawmatlist
        this.lenrawmat = this.dataresultLoadunapproverawmatlist.length
        if (this.lenrawmat == 0) {
          this.UnApproved = "false";
        }
        else {
          this.UnApproved = "true";


        }
        console.log(this.UnApproved)
      })
      this.btnstate = true;
      this.dateactionmethod();
    });
  }

  ApproveSampleStatus(PDRno: string, username: string, formulacode: string, PDRStatus: string) {
    var PDRr: string = this.PDRno;
    var username1: string = "admin";
    var FormulaCode1: string = this.formulacode;
    var pdrstatus1: string = this.PDRStatus;
    let params1 = new HttpParams().set('PDR', PDRr).set('username', username1).set('FormulaCode', FormulaCode1).set('pdrstatus', pdrstatus1);
    return this.http.get("https://samplemanagementloadwebservice.azurewebsites.net/ApproveStatus", { params: params1, responseType: 'text' })
  }

  ApproveStatus() {
    //this.unapproverawmaterials();

    this.ApproveSampleStatus(this.PDRno, this.username, this.formulacode, this.PDRStatus
    ).subscribe((SaveSamplestatus) => {
      console.warn("SaveSamplestatus", SaveSamplestatus)
      this.SaveSamplestatus = SaveSamplestatus
      if (this.SaveSamplestatus == "Please save sample information and update the sample status.") {
        this.dialog.open(MessageBoxComponent, {
          width: '40%', height: '15%', data: {
            displaydata: "Please save sample information and update the sample status."
          }
        });
      }
      if (this.SaveSamplestatus == "You have no permission to approve / unapprove this formula.") {
        this.dialog.open(MessageBoxComponent, {
          width: '40%', height: '15%', data: {
            displaydata: "You have no permission to approve/unapprove this formula."
          }
        });
      }
      if (this.SaveSamplestatus == "Status Approved") {
        this.dialog.open(MessageBoxComponent, {
          width: '40%', height: '15%', data: {
            displaydata: "Status Approved successfully"
          }
        });
      }

    });
  }

  setvalues(ProductList_search) {
    this.PDRnodata = ProductList_search.PDRNo;
    this.cstmrnamedata = ProductList_search.CusName;
    this.formulanamedata = ProductList_search.Description;
    this.formulacodedata = ProductList_search.FormulaCode;
    this.submissionnodata = ProductList_search.SubmissionNo;
    this.PDRStatusdata = ProductList_search.PDRStatus;
    this.LabopenStatusdata = ProductList_search.LabOpenStatus;
    this.UserNameadata = ProductList_search.UserName;
    this.ApprovedDate = ProductList_search.ApprovedDate;
    this.DueDate = ProductList_search.DueDate;
    this.REP = ProductList_search.REP;
    this.qty = ProductList_search.Qty;
    this.unit = ProductList_search.Unit;
    this.Price = ProductList_search.Price;
    this.Priority = ProductList_search.Priority;
    this.Purpose = ProductList_search.Purpose;
    this.noofpieces = ProductList_search.noofpieces;
    this.Approved = ProductList_search.Approved;
    this.ApprovedBy = ProductList_search.ApprovedBy;
    this.Fax = ProductList_search.Fax;
    this.FaxPerson = ProductList_search.FaxPerson;
    this.ReportComments = ProductList_search.ReportComments;
    this.ApprovedComments = ProductList_search.ApprovedComments;
    this.PersonTitle = ProductList_search.PersonTitle;
    this.CustomerComments = ProductList_search.CustomerComments;
    this.cc1 = ProductList_search.cc1;
    this.cc2 = ProductList_search.cc2;
    this.cc3 = ProductList_search.cc3;
    this.Disclaimers = ProductList_search.Disclaimers;


    this.searchpdritems = [this.PDRnodata, this.cstmrnamedata, this.formulanamedata, this.formulacodedata, this.submissionnodata,
    this.PDRStatusdata, this.LabopenStatusdata, this.UserNameadata, this.DueDate,
    this.ApprovedDate, this.REP, this.qty, this.unit, this.Price, this.Priority,
    this.Purpose, this.noofpieces, this.Approved, this.ApprovedBy, this.Fax, this.FaxPerson, this.ReportComments,
    this.ApprovedComments, this.PersonTitle, this.CustomerComments, this.cc1, this.cc2, this.cc3, this.Disclaimers]
    this.Datashare.sendpdrlist(this.searchpdritems);


  }
  close() {

    this.dialogRef.close(this.searchpdritems);

  }
  setbydatevalues(PdrbydateList_search) {

    this.PDRnodata = PdrbydateList_search.PDRNo;
    this.Pdrdate = PdrbydateList_search.PDRDate;
    this.cstmrnamedata = PdrbydateList_search.CusName;
    this.formulanamedata = PdrbydateList_search.Description;
    this.formulacodedata = PdrbydateList_search.FormulaCode;
    this.submissionnodata = PdrbydateList_search.SubmissionNo;
    this.PDRStatusdata = PdrbydateList_search.PDRStatus;
    this.LabopenStatusdata = PdrbydateList_search.LabOpenStatus;
    this.UserNameadata = PdrbydateList_search.UserName;
    this.ApprovedDate = PdrbydateList_search.ApprovedDate;
    this.DueDate = PdrbydateList_search.DueDate;
    this.REP = PdrbydateList_search.REP;
    this.qty = PdrbydateList_search.Qty;
    this.unit = PdrbydateList_search.Unit;
    this.Price = PdrbydateList_search.Price;
    this.Priority = PdrbydateList_search.Priority;
    this.Purpose = PdrbydateList_search.Purpose;
    this.noofpieces = PdrbydateList_search.noofpieces;
    this.Approved = PdrbydateList_search.Approved;
    this.ApprovedBy = PdrbydateList_search.ApprovedBy;
    this.Fax = PdrbydateList_search.Fax;
    this.FaxPerson = PdrbydateList_search.FaxPerson;
    this.ReportComments = PdrbydateList_search.ReportComments;
    this.ApprovedComments = PdrbydateList_search.ApprovedComments;
    this.PersonTitle = PdrbydateList_search.PersonTitle;
    this.CustomerComments = PdrbydateList_search.CustomerComments;
    this.cc1 = PdrbydateList_search.cc1;
    this.cc2 = PdrbydateList_search.cc2;
    this.cc3 = PdrbydateList_search.cc3;
    this.Disclaimers = PdrbydateList_search.Disclaimers;


    this.searchpdrdateitems = [this.PDRnodata, this.Pdrdate, this.cstmrnamedata, this.formulanamedata, this.formulacodedata, this.submissionnodata,
    this.PDRStatusdata, this.LabopenStatusdata, this.UserNameadata, this.DueDate,
    this.ApprovedDate, this.REP, this.qty, this.unit, this.Price, this.Priority,
    this.Purpose, this.noofpieces, this.Approved, this.ApprovedBy, this.Fax, this.FaxPerson, this.ReportComments,
    this.ApprovedComments, this.PersonTitle, this.CustomerComments, this.cc1, this.cc2, this.cc3, this.Disclaimers]
    this.Datashare.sendpdrdatelist(this.searchpdrdateitems);
  }
  closedate() {

    this.dialogRef.closedate(this.searchitems);

  }
  Loadpdrlist() {

    return this.http.get("https://samplemanagementloadwebservice.azurewebsites.net/PDRList");

  }
  LoadPDRDate() {
    if (this.dtpPDRFromDate > this.dtpPDRToDate) {
      this.dialog.open(MessageBoxComponent, {
        width: '40%', height: '15%', data: {
          displaydata: "From date should be equal to or less than to date."
        }
      });
    }
    //this.Loadpdrbydatelist(this.dtpPDRFromDate, this.dtpPDRToDate);
    this.Loadpdrbydatelist(this.dtpPDRFromDate, this.dtpPDRToDate).subscribe((resultLoadpdrbydatelist) => {
      this.isLoading = false;
      console.warn("resultLoadpdrbydatelist", resultLoadpdrbydatelist)
      this.dataresultLoadpdrbydatelist = resultLoadpdrbydatelist
    })

  }
  Loadpdrbydatelist(dtpPDRFromDate: string, dtpPDRToDate: string) {
    //var PDRFromDate: string = "2017-07-02"; 
    //var PDRToDate: string = "2020-08-02";
    var PDRFromDate: string = formatDate(new Date(this.dtpPDRFromDate), 'yyyy-MM-dd', 'en-US');
    var PDRToDate: string = formatDate(new Date(this.dtpPDRToDate), 'yyyy-MM-dd', 'en-US');
    let params1 = new HttpParams().set('dtpPDRFromDate', PDRFromDate).set('dtpPDRToDate', PDRToDate);
    console.log(params1);
    return this.http.get("https://samplemanagementloadwebservice.azurewebsites.net/PDRListByDate", { params: params1 });
  }


  sampleautogenerate() {

    return this.http.get("https://formulalookupwebservice16.azurewebsites.net/SampleAutogenerate", { responseType: 'text' })
  }

  sampleautogennum() {
    this.sampleautogenerate().subscribe((Samplesubmission) => {
      console.warn("Samplesubmission", Samplesubmission)
      this.Samplesubmission = Samplesubmission
      if (this.Samplesubmission == this.submissionno) {
        //return this.Samplesubmission
        console.log(this.Samplesubmission)
      }
    });
  }



  SaveSampleClick() {
    var FormulaCode1: string = this.formulacode;
    var PDRr: string = this.PDRno;
    var Customername1: string = this.CusCode;
    var samplesubmissionno1: string = this.submissionno;
    var username1: string = this.username;
    var formulaname1: string = this.formulaname;
    var UnApprovedrow: string = this.UnApproved;
    var Labopenstatus: string = this.LabopenStatus;
    var pdrstatus1: string = this.PDRStatus;
    var REP: string = this.REP;
    var ReportComments: string = this.ReportComments;
    var ApprovedComments: string = this.approvecmd;
    var QTY: string = this.qty;
    var Unit: string = this.unit;
    var Price: string = this.Price;
    var Priority: string = this.Priority;
    var Purpose: string = this.Purpose;
    var noofpieces: string = this.noofpieces;
    var Approved: string = this.Approved;
    var ApprovedBy: string = this.ApprovedBy;
    var PersonTitle: string = this.PersonTitle;
    var FaxPerson: string = this.FaxPerson;
    var Fax: string = this.fax;
    var CustomerComments: string = this.CustomerComments;
    var Disclaimers: string = this.Disclaimers;

    let params1 = new HttpParams().set('FormulaCode', FormulaCode1).set('PDR', PDRr).set('Customername', Customername1)
      .set('submissionno', samplesubmissionno1).set('username', username1)
      .set('formulaname', formulaname1).set('UnApproved', UnApprovedrow)
      .set('pdrstatus', pdrstatus1).set('Labopenstatus', Labopenstatus)
      .set('REP', REP).set('ReportComments', ReportComments).
      set('ApprovedComments', ApprovedComments).set('qty', QTY).set('Unit', Unit)
      .set('Price', Price).set('Priority', Priority).set('Purpose', Purpose)
      .set('noofpieces', noofpieces).set('Approved', Approved).set('ApprovedBy', ApprovedBy)
      .set('PersonTitle', PersonTitle).set('FaxPerson', FaxPerson).set('Fax', Fax)
      .set('CustomerComments', CustomerComments).set('Disclaimers', Disclaimers);
    console.log(params1);
    return this.http.get("https://samplemanagementloadwebservice.azurewebsites.net/SaveSampleSubmission", { params: params1, responseType: 'text' })
  }





  SaveSample() {
    //this.sampledataList[0] = ([{
    //  FormulaCode: this.formulacode,
    //  PDR: this.PDRno,
    //  Customername: this.cstmrname,
    //  submissionno: this.submissionno,
    //  DueDate: this.duedate,
    //  username: this.username,
    //  PDRStatus: this.PDRStatus,
    //  REP: this.REP,
    //  ReportComments: this.ReportComments,
    //  SubmissionDate: this.submissiondate,
    //  ApprovedDate: this.approvaldate,
    //  ApprovedComments: this.approvecmd,
    //  Qty: this.qty,
    //  Unit: this.unit,
    //  Price: this.Price,
    //  Priority: this.Priority,
    //  Purpose: this.Purpose,
    //  noofpieces: this.noofpieces,
    //  Approved: this.Approved,
    //  ApprovedBy: this.ApprovedBy,
    //  PersonTitle: this.PersonTitle,
    //  FaxPerson: this.FaxPerson,
    //  Fax: this.fax,
    //  CustomerComments: this.CustomerComments,
    //  Disclaimers: this.Disclaimers,
    //  NextSampleNumber: this.nextsampleno,
    //  Document1: "",
    //  Document2: "",
    //  Document3: "",
    //  Document4: "",
    //  Document5: "",
    //  Document6: "",
    //  Document7: "",

    //}]);
    this.SaveSampleClick(
    ).subscribe((SaveSamplesubmission) => {
      console.warn("SaveSamplesubmission", SaveSamplesubmission)
      this.SaveSamplesubmission = SaveSamplesubmission
      if (this.SaveSamplesubmission == "Please APPROVE the formula and submit the sample") {
        this.dialog.open(MessageBoxComponent, {
          width: '40%', height: '15%', data: {
            displaydata: "Please APPROVE the formula and submit the sample."
          }
        });
        this.SaveSamplesubmission == ""
      }

      if (this.formulacode == "" || this.formulacode == undefined) {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter Formula Code' } });
      }
      else if (this.formulaname == "" || this.formulaname == undefined) {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter Formula Name' } });
      }
      else if
        (this.PDRno == "" || this.PDRno == undefined) {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter PDR Number ' } });
      }
      else if
        (this.cstmrname == "" || this.cstmrname == undefined) {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter Customer Name ' } });
      }
      else if
        (this.submissionno == "" || this.submissionno == undefined) {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter Submission Number ' } });
      }
      else if (this.SaveSamplesubmission == "One of the Ingredients in the Formula has Zero Percentage. Please modify the Formula and submit the sample.") {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "One of the Ingredients in the Formula has Zero Percentage. Please modify the Formula and submit the sample." } });


      }

      else if (this.SaveSamplesubmission == "Sample cant be created without approving all raw materials.") {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Sample cannot be created without approving all raw materials." } });
        this.unapproverawmaterials();


      }

      else if (this.SaveSamplesubmission == "Sample management status Approved successfully." && this.PDRStatus == "A-Approved" || this.PDRStatus == "AW-Approved-ON WAIVER") {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Sample management status Approved successfully." } });
        this.Loadsampleaudit(this.submissionno).subscribe((resultLoadsampleaudit) => {
          console.warn("resultLoadsampleaudit", resultLoadsampleaudit)
          this.dataresultLoadsampleaudit = resultLoadsampleaudit
        })
      }
      else if (this.SaveSamplesubmission == "Sample management status Rejected successfully." && this.PDRStatus == "R-Rejected") {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Sample management status Rejected successfully." } });
        this.Loadsampleaudit(this.submissionno).subscribe((resultLoadsampleaudit) => {
          console.warn("resultLoadsampleaudit", resultLoadsampleaudit)
          this.dataresultLoadsampleaudit = resultLoadsampleaudit
        })
      }

      else if (this.SaveSamplesubmission == "Sample management details updated successfully.") {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Sample management details updated successfully." } });
        this.Loadsampleaudit(this.submissionno).subscribe((resultLoadsampleaudit) => {
          console.warn("resultLoadsampleaudit", resultLoadsampleaudit)
          this.dataresultLoadsampleaudit = resultLoadsampleaudit
        })

      }
      else if (this.SaveSamplesubmission == "Sample submission is saved successfully.") {

        this.dialog.open(MessageBoxYesnoComponent, {
          width: '25%', height: '15%', data: {
            displaydata: "Once Sample created cannot be modified"
          }
        });
        this.dialog.open(MessageBoxComponent, {
          width: '25%', height: '15%', data: {
            displaydata: "Sample submission#: " + this.submissionno + "is saved successfully."
          }
        });
        this.Loadsampleaudit(this.submissionno).subscribe((resultLoadsampleaudit) => {
          console.warn("resultLoadsampleaudit", resultLoadsampleaudit)
          this.dataresultLoadsampleaudit = resultLoadsampleaudit
        })
      }
      else if (this.SaveSamplesubmission) {

        this.dialog.open(MessageBoxYesnoComponent, {
          width: '25%', height: '15%', data: {
            displaydata: "Once Sample created cannot be modified"
          }
        });
      }
    });
  }




  searchformulaopen() {
    if (this.PDRno == "" || this.PDRno == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter PDR Number ' } });
    }
    else if (this.PDRno) {
      this.searchformula()
    }
  }

  searchformula(): void {
    var formula: any = [this.PDRno];
    const dialogRef = this.dialog.open(SearchFormulalistComponent, {
      width: '80%', height: '90%', data: { displaydata: formula }, disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {
        this.issearchform = true;

        this.formulacode = result[0];
        this.formulaname = result[1];
        this.PDRno = result[3];


      }

    });
  }
  LoadCustomer() {
    var CusCodedata: string = this.CusCode;
    let params1 = new HttpParams().set('CusCode', CusCodedata);

    return this.http.get("https://samplemanagementloadwebservice.azurewebsites.net/CustomerList", { params: params1 });
  }



  Loadsampleaudit(submissionno: string) {
    var SubmissionNum: string = this.submissionno;
    let params1 = new HttpParams().set('submissionno', SubmissionNum);
    return this.http.get("https://samplemanagementloadwebservice.azurewebsites.net/SampleAuditList", { params: params1 })
  }

  setauditvalues(sampleaudit_search) {
    this.SubmissionNum = sampleaudit_search.submissionno;
    this.datedt = sampleaudit_search.date;
    this.Taskdata = sampleaudit_search.Task;
    this.UserNamedata = sampleaudit_search.UserName;
    this.searchitems = [this.SubmissionNum, this.datedt, this.Taskdata, this.UserNamedata]


  }

  clearpdr() {
    this.PDRnodata = '';
    this.cstmrnamedata = '';
    this.formulanamedata = '';
    this.formulacodedata = '';
    this.submissionnodata = '';
    this.PDRStatusdata = '';
    this.LabopenStatusdata = '';
    this.UserNameadata = '';
  }

  ClearData() {

    this.btnstate = false;
    this.btnval = "Save";
    this.datedisabled = false;
    this.PDRDate = this.date;
    this.duedate = this.date;
    this.approvaldate = this.date;
    this.submissiondate = this.date;
    this.issearchform = false;
    this.ProjectName = '';
    this.formulacode = '';
    this.formulaname = '';
    this.PDRno = '';
    this.cstmrname = '';
    this.submissionno = this.Samplesubmission;
    this.Pdrdata = '';
    this.CusNamedata = '';
    this.Descriptiondata = '';
    this.SubmissionNum = '';
    this.PDRStatusdata = '';
    this.PDRStatus = 'N-New';
    this.LabopenStatus = 'O-Open';
    this.REP = '',
      this.ReportComments = '',
      this.approvecmd = '',
      this.qty = '',
      this.unit = '',
      this.Price = '',
      this.Priority = '',
      this.userName = '',
      this.Purpose = '',
      this.noofpieces = '',
      this.Approved = '',
      this.ApprovedBy = '',
      this.PersonTitle = '',
      this.FaxPerson = '',
      this.fax = '',
      this.CustomerComments = '',
      this.Disclaimers = '',
      this.nextsampleno = '',
      this.address = '';
    this.customertype = '';
    this.phone = '';
    this.emailref = '';
    this.fax = '';
    this.contactfperson = '';
    this.contactsperson = '';
    this.contacttperson = '';
    this.fob = '';
    this.city = '';
    this.zip = '';
    this.state = '';
    this.salesregion = '';
    this.contactfmail = '';
    this.contactsmail = '';
    this.contacttmail = '';
    this.salesrepinitial = '';
    this.creditlimit = '';
    this.notes = '';
    this.addeddt = '';
    this.addedby = '';
    this.updateddt = '';
    this.updatedby = '';
    this.caabrevation = '';
    this.cc1 = '';
    this.cc2 = '';
    this.cc3 = '';
    this.Fax = '';
    this.dataresultLoadsampleaudit = '';
  }


  btnval = "save";
  ChangeText() {
    if (this.PDRStatus == "A-Approved") {
      console.log(this.PDRStatus)
      this.btnval = "Update";
      if (this.PDRStatus == "A-Approved") {
        this.dialog.open(MessageBoxComponent, {
          width: '40%', height: '15%', data: {
            displaydata: "Please APPROVE the formula and submit the sample."
          }
        });
        this.btnupdate = true;

      }
    }
  }


  navpdrdatevalues() {
    this.active = "1";

    this.btnstate = true;
    this.dateactionmethod();
    this.searchpdrdateitems = this.Datashare.getpdrdatelist();
    console.log(this.searchpdritems)
    this.formulacode = this.searchpdrdateitems[4];
    this.formulaname = this.searchpdrdateitems[3];
    this.PDRno = this.searchpdrdateitems[0];
    this.cstmrname = this.searchpdrdateitems[2];
    this.submissionno = this.searchpdrdateitems[4];
    this.PDRStatus = this.searchpdrdateitems[6];
    this.LabopenStatus = this.searchpdrdateitems[7];
    this.username = this.searchpdrdateitems[8];
    this.PDRDate = formatDate((this.searchpdrdateitems[1]), 'yyyy-MM-dd', 'en-US');
    this.duedate = formatDate((this.searchpdrdateitems[9]), 'yyyy-MM-dd', 'en-US');
    this.ApprovedDate = this.searchpdrdateitems[10];
    this.REP = this.searchpdrdateitems[11];
    this.qty = this.searchpdrdateitems[12];
    this.unit = this.searchpdrdateitems[13];
    this.Price = this.searchpdrdateitems[14];
    this.Priority = this.searchpdrdateitems[15];
    this.Purpose = this.searchpdrdateitems[16];
    this.noofpieces = this.searchpdrdateitems[17];
    this.Approved = this.searchpdrdateitems[18];
    this.ApprovedBy = this.searchpdrdateitems[19];
    this.Fax = this.searchpdrdateitems[20];
    this.FaxPerson = this.searchpdrdateitems[21];
    this.ReportComments = this.searchpdrdateitems[22];
    this.ApprovedComments = this.searchpdrdateitems[23];
    this.PersonTitle = this.searchpdrdateitems[24];
    this.CustomerComments = this.searchpdrdateitems[25];
    this.cc1 = this.searchpdrdateitems[26];
    this.cc2 = this.searchpdrdateitems[27];
    this.cc3 = this.searchpdrdateitems[28];
    this.Disclaimers = this.searchpdrdateitems[29];
    this.LoadCustomer().subscribe((resultLoadCustomer) => {
      this.isLoading = false;
      console.warn("resultLoadCustomer", resultLoadCustomer)
      this.dataresultLoadCustomer = resultLoadCustomer
      this.customerdata(this.dataresultLoadCustomer)
    })

  }

  navpdrvalues() {
    this.active = "1";

    this.btnstate = true;
    this.dateactionmethod();
    this.searchpdritems = this.Datashare.getpdrlist();
    console.log(this.searchpdritems)
    this.formulacode = this.searchpdritems[3];
    this.formulaname = this.searchpdritems[2];
    this.PDRno = this.searchpdritems[0];
    this.cstmrname = this.searchpdritems[1];
    this.submissionno = this.searchpdritems[4];
    this.PDRStatus = this.searchpdritems[5];
    this.LabopenStatus = this.searchpdritems[6];
    this.username = this.searchpdritems[7];
    this.duedate = formatDate((this.searchpdritems[9]), 'yyyy-MM-dd', 'en-US');
    this.ApprovedDate = this.searchpdritems[10];
    this.REP = this.searchpdritems[11];
    this.qty = this.searchpdritems[12];
    this.unit = this.searchpdritems[13];
    this.Price = this.searchpdritems[14];
    this.Priority = this.searchpdritems[15];
    this.Purpose = this.searchpdritems[16];
    this.noofpieces = this.searchpdritems[17];
    this.Approved = this.searchpdritems[18];
    this.ApprovedBy = this.searchpdritems[19];
    this.Fax = this.searchpdritems[20];
    this.FaxPerson = this.searchpdritems[21];
    this.ReportComments = this.searchpdritems[22];
    this.ApprovedComments = this.searchpdritems[23];
    this.PersonTitle = this.searchpdritems[24];
    this.CustomerComments = this.searchpdritems[25];
    this.cc1 = this.searchpdritems[26];
    this.cc2 = this.searchpdritems[27];
    this.cc3 = this.searchpdritems[28];
    this.Disclaimers = this.searchpdritems[29];

    this.LoadCustomer().subscribe((resultLoadCustomer) => {
      this.isLoading = false;
      console.warn("resultLoadCustomer", resultLoadCustomer)
      this.dataresultLoadCustomer = resultLoadCustomer
      this.customerdata(this.dataresultLoadCustomer)
    })
  }


  applyFilter(filterValue: string) {
    let filterValueLower = filterValue.toLowerCase();
    if (filterValue === '') {
      this.dataresultLoadpdrlist
    } else {
      this.dataresultLoadpdrlist = this.dataresultLoadpdrlist.filter((product) =>

        product.Description.toLowerCase().includes(filterValueLower));

    }
  }

  btnactionMethod() {

    this.btndisstate = true;
  }



  dateactionmethod() {

    if (this.PDRStatus == "A-Approved") {

      this.datedisabled = true;

    }
    if (this.PDRStatus == "AW-Approved-ON WAIVER") {

      this.datedisabled = true;

    }
    else if (this.PDRStatus == "N-New") {

      this.datedisabled = false;

    }
  }



  handleFileInput(files: FileList) {
    var filebrowse = files.item.length;
    this.doc1 = files.item(0).name;

  }
  handleFileInput1(files: FileList) {
    var filebrowse1 = files.item.length;
    this.doc2 = files.item(0).name;
  }
  handleFileInput2(files: FileList) {
    var filebrowse = files.item.length;
    this.doc3 = files.item(0).name;
  }
  handleFileInput3(files: FileList) {
    var filebrowse = files.item.length;
    this.doc4 = files.item(0).name;
  }
  handleFileInput4(files: FileList) {
    var filebrowse = files.item.length;
    this.doc5 = files.item(0).name;
  }
  handleFileInput5(files: FileList) {
    var filebrowse = files.item.length;
    this.doc6 = files.item(0).name;
  }
  handleFileInput6(files: FileList) {
    var filebrowse = files.item.length;
    this.doc7 = files.item(0).name;
  }



  fileselect() {
    //console.log(this.doc1)
    if (this.doc1 == undefined) {
      this.dialog.open(MessageBoxComponent, {
        width: '25%', height: '15%', data: {
          displaydata: " Please Select a File"
        }

      });
    }
  }
  samplereport() {

    this.viewer.bindingSender.OpenReport("TestReport")
    //const dialogRef = this.dialog.open(ReportViewerComponent, {
    //  width: '80%', height: '90%', disableClose: true

    //});
  }

  pdrlistclik() {
    if (this.active = "3") {
      this.clearpdr();
    }
  }



  ngOnInit() {

    this.PDRStatus = 'N-New';
    this.LabopenStatus = 'O-Open';

    this.btnactionMethod();

    this.sampleautogennum();



    this.todaydate = new Date();
    //this.todaydate = formatDate(new Date(this.todaydate), 'yyyy-MM-dd', 'en-US');
    //console.log(this.todaydate)
    this.date = formatDate(new Date(this.todaydate), 'yyyy-MM-dd', 'en-US');

    this.PDRDate = formatDate(new Date(this.todaydate), 'yyyy-MM-dd', 'en-US');
    this.submissiondate = formatDate(new Date(this.todaydate), 'yyyy-MM-dd', 'en-US');
    this.duedate = formatDate(new Date(this.todaydate), 'yyyy-MM-dd', 'en-US');
    this.approvaldate = formatDate(new Date(this.todaydate), 'yyyy-MM-dd', 'en-US');
    this.dtpPDRFromDate = formatDate(new Date(this.todaydate), 'yyyy-MM-dd', 'en-US');
    this.dtpPDRToDate = formatDate(new Date(this.todaydate), 'yyyy-MM-dd', 'en-US');



    this.samplelist = this.Datashare.getsample();
    console.log(this.samplelist)
    this.formulacode = this.samplelist[0];
    this.formulaname = this.samplelist[1];
    this.PDRno = this.samplelist[2];
    this.cstmrname = this.samplelist[3];
    this.submissionno = this.samplelist[4];

    this.Loadpdrlist().subscribe((resultLoadpdrlist) => {
      this.isLoading = false;
      console.warn("resultLoadpdrlist", resultLoadpdrlist)
      this.dataresultLoadpdrlist = resultLoadpdrlist

      this.countrecords = this.dataresultLoadpdrlist.length

    })


    this.Loadsampleaudit(this.submissionno).subscribe((resultLoadsampleaudit) => {
      console.warn("resultLoadsampleaudit", resultLoadsampleaudit)
      this.dataresultLoadsampleaudit = resultLoadsampleaudit
    })


  }
}


export class Datasave {
  FormulaCode: string;
  PDR: string;
  Customername: string;
  submissionno: string;
  username: string;
  DueDate: string;
  PDRStatus: string;
  REP: string = " ";
  ReportComments: string;
  SubmissionDate: string;
  ApprovedDate: string;
  ApprovedComments: string;
  Qty: string;
  Unit: string;
  Price: string;
  Fax: string;
  Priority: string;
  Purpose: string;
  noofpieces: string;
  Approved: string;
  ApprovedBy: string;
  PersonTitle: string;
  Disclaimers: string;
  NextSampleNumber: string;
  CustomerComments: string;
  FaxPerson: string;
  Document1: any;
  Document2: any;
  Document3: any;
  Document4: any;
  Document5: any;
  Document6: any;
  Document7: any;

}




