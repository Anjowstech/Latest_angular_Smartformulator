import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/formula-lookup/formula-lookup.component';
import { Inject } from '@angular/core';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MessageBoxYesnoComponent } from 'src/app/message-box-yesno/message-box-yesno.component';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { UnapprovedRawmaterialComponent } from 'src/app/sample-management/unapproved-rawmaterial/unapproved-rawmaterial.component';
import { SearchSubmissionComponent } from 'src/app/sample-management/search-submission/search-submission.component';
  import { PDRListSearchComponent } from 'src/app/sample-management/pdrlist-search/pdrlist-search.component'
import { SearchFormulalistComponent } from 'src/app/sample-management/search-formulalist/search-formulalist.component';

@Component({
  selector: 'app-sample-management',
  templateUrl: './sample-management.component.html',
  styleUrls: ['./sample-management.component.css']
})
export class SampleManagementComponent implements OnInit {


  formulacode: string = '';
  formulaname: string = '';
  PDRno: string = '';
  cstmrname: string = '';
  ProjectName: string = '';
  Pdrdata: string = '';
  CusNamedata: string = '';
  PDRStatus: string = '';
  Descriptiondata: string = '';
  samplesubmissionno: string = '';
  username: string = '';
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
  item: string='';
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
  data: any;
  DueDate: string;
  AddedDt: string;
  REP: string;
  ReportComments: string;
  Subdate: string;
  ApprovedDate: string;
  approvecmd: string;
  qty: string="0.00";
  unit: string;
  Price: string="0.00";
  Priority: string;
  userName: string;
  Purpose: string;
  noofpieces: string;
  Approved: string;
  ApprovedBy: string;
  PersonTitle: string;
  Disclaimers: string;
  CustomerComments: string;
  FaxPerson: string;
  UnApprovedrow: string;
  UnApproved: string = 'true';

  sampledataList: Datasave[][] = [];
  DocumentList: Docsave[][] = [];

  dataresultLoadunapproverawmatlist: any;
  length: any;


  constructor(public dialog: MatDialog, private http: HttpClient) { }


  unapproverawmaterials() {
    var formula: any = [this.formulacode];

    const dialogRef = this.dialog.open(UnapprovedRawmaterialComponent, {
      width: '80%', height: '90%', data: { displaydata: formula } ,disableClose: true

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
      //this.PDRDate = result[4];
      this.CusCode = result[3];

      this.LoadCustomer().subscribe((resultLoadCustomer) => {
        this.isLoading = false;
        console.warn("resultLoadCustomer", resultLoadCustomer)
        this.dataresultLoadCustomer = resultLoadCustomer
        this.customerdata(this.dataresultLoadCustomer)
      })
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
      this.PDRno = result[2];
      this.formulacode = result[1];
      this.formulaname = result[4];
      this.PDRStatus = result[3];
      this.cstmrname = result[6];
      this.ProjectName = result[5];

      this.Loadsampleaudit(this.submissionno).subscribe((resultLoadsampleaudit) => {
        console.warn("resultLoadsampleaudit", resultLoadsampleaudit)
        this.dataresultLoadsampleaudit = resultLoadsampleaudit
      })

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

    this.ApproveSampleStatus(this.PDRno, this.username,this.formulacode, this.PDRStatus
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
    this.PDRno = ProductList_search.PDRNo;
    this.cstmrname = ProductList_search.CusName;
    this.formulaname = ProductList_search.Description;
    this.submissionno = ProductList_search.SubmissionNo;
    this.PDRStatusdata = ProductList_search.PDRStatus;
    this.LabOpenStatusdata = ProductList_search.LabOpenStatus;
    this.UserNamea = ProductList_search.UserName;
    this.searchitems = [this.Pdrdata, this.LabOpenStatusdata, this.CusNamedata, this.Descriptiondata, this.UserNamea, this.SubmissionNum]
  }
  close() {

   this.dialogRef.close(this.searchitems);

  }
  setbydatevalues(PdrbydateList_search) {
    this.PDRno = PdrbydateList_search.PDRNo;
    this.Pdrdate = PdrbydateList_search.PDRDate;
    this.cstmrname = PdrbydateList_search.CusName;
    this.formulaname = PdrbydateList_search.Description;
    this.submissionno = PdrbydateList_search.SubmissionNo;
    this.PDRStatusdata = PdrbydateList_search.PDRStatus;
    this.LabOpenStatusdata = PdrbydateList_search.LabOpenStatus;
    this.UserNamea = PdrbydateList_search.UserName;
    this.searchitems = [this.Pdrdata, this.Pdrdate, this.LabOpenStatusdata, this.CusNamedata, this.Descriptiondata, this.UserNamea, this.SubmissionNum]
  }
  closedate() {

    this.dialogRef.close(this.searchitems);

  }
  Loadpdrlist() {

    return this.http.get("https://samplemanagementloadwebservice.azurewebsites.net/PDRList");

  }
  LoadPDRDate() {
   
    //this.Loadpdrbydatelist(this.dtpPDRFromDate, this.dtpPDRToDate);
    this.Loadpdrbydatelist(this.dtpPDRFromDate, this.dtpPDRToDate).subscribe((resultLoadpdrbydatelist) => {
      this.isLoading = false;
      console.warn("resultLoadpdrbydatelist", resultLoadpdrbydatelist)
      this.dataresultLoadpdrbydatelist = resultLoadpdrbydatelist
    })

  }
  Loadpdrbydatelist(dtpPDRFromDate: string, dtpPDRToDate:string) {
    //var PDRFromDate: string = "2017-07-02"; 
    //var PDRToDate: string = "2020-08-02";
    var PDRFromDate: string = formatDate(new Date(this.dtpPDRFromDate), 'yyyy-MM-dd', 'en-US');
    var PDRToDate: string = formatDate(new Date(this.dtpPDRToDate), 'yyyy-MM-dd', 'en-US');
    let params1 = new HttpParams().set('dtpPDRFromDate', PDRFromDate).set('dtpPDRToDate', PDRToDate);
    console.log(params1);
    return this.http.get("https://samplemanagementloadwebservice.azurewebsites.net/PDRListByDate", { params: params1 });
  }



  


  SaveSampleClick(formulacode: string, PDRno: string, cstmrname: string, submissionno: string, username: string, formulaname: string, UnApproved: string, PDRStatus: string ) {
    var FormulaCode1: string = this.formulacode;
    var PDRr: string = this.PDRno;
    var Customername1: string = this.cstmrname;
    var samplesubmissionno1: string = this.submissionno;
    var username1: string = "admin";
    var formulaname1: string = this.formulaname;
    var UnApprovedrow: string = this.UnApproved;
    var pdrstatus1: string = this.PDRStatus;
    let params1 = new HttpParams().set('FormulaCode', FormulaCode1).set('PDR', PDRr).set('Customername', Customername1).set('samplesubmissionno', samplesubmissionno1).set('username', username1)
      .set('formulaname', formulaname1).set('UnApproved', UnApprovedrow).set('pdrstatus', pdrstatus1);
    return this.http.get("https://samplemanagementloadwebservice.azurewebsites.net/SaveSampleSubmission", { params: params1, responseType: 'text' })
  }




  SaveSample() {

    this.SaveSampleClick(this.formulacode, this.PDRno, this.cstmrname, this.submissionno, this.username, this.formulaname, this.UnApprovedrow, this.PDRStatus
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

      else if (this.SaveSamplesubmission == "Sample cannot be created without approving all raw materials.") {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Sample cannot be created without approving all raw materials." } });
        this.unapproverawmaterials();
       

      }

      else if (this.SaveSamplesubmission == "Sample management status Approved successfully." && this.PDRStatus == "A-Approved" || this.PDRStatus == "AW-Approved-ON WAIVER") {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Sample management status Approved successfully." } });

      }
      else if (this.SaveSamplesubmission == "Sample management status Rejected successfully." && this.PDRStatus == "R-Rejected") {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Sample management status Rejected successfully." } });

      }

      else if (this.SaveSamplesubmission == "Sample management details updated successfully.") {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Sample management details updated successfully." } });


      }
      else if (this.SaveSamplesubmission == "Sample submission#:" + this.submissionno + " is saved successfully.") {

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

      }
      else {

        this.sampledataList[0] = ([{

          DueDate: this.duedate,
          REP: this.REP,
          ReportComments: this.ReportComments,
          SubmissionDate: this.submissiondate,
          ApprovedDate: this.approvaldate,
          ApprovedComments: this.approvecmd,
          Qty: this.qty,
          Unit: this.unit,
          Price: this.Price,
          Priority: this.Priority,
          userName: this.userName,
          Purpose: this.Purpose,
          noofpieces: this.noofpieces,
          Approved: this.Approved,
          ApprovedBy: this.ApprovedBy,
          PersonTitle: this.PersonTitle,
          FaxPerson: this.FaxPerson,
          Fax: this.fax,
          CustomerComments: this.CustomerComments,
          Disclaimers: this.Disclaimers
        }]);

        this.DocumentList[0] = ([{

         //Document1: this.doc1,
          //Document2: this.doc2,
          //Document3: this.doc3,
          //Document4: this.doc4,
          //Document5: this.doc5,
          //Document6: this.doc6,
          //Document7: this.doc7,
          Document1: "",
          Document2: "",
          Document3: "",
          Document4: "",
          Document5: "",
          Document6: "",
          Document7: "",

        }]);
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
      width: '80%', height: '90%', data: { displaydata: formula },disableClose: true
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
    this.searchitems = [this.SubmissionNum, this.datedt, this.Taskdata,this.UserNamedata]

   
  }

  ClearData() {

    this.issearchform = false;
    this.ProjectName = '';
    this.formulacode = '';
    this.formulaname = '';
    this.PDRno = '';
    this.cstmrname = '';
    this.submissionno = '';
    this.Pdrdata = '';
    this.CusNamedata = '';
    this.Descriptiondata = '';
    this.SubmissionNum = '';
    this.PDRStatusdata = '';
    this.PDRStatus = '';
    this.LabOpenStatusdata = '';
  }


 

  ngOnInit() {

    this.todaydate = new Date();
    //this.todaydate = formatDate(new Date(this.todaydate), 'yyyy-MM-dd', 'en-US');
    console.log(this.todaydate)
    this.PDRDate = formatDate(new Date(this.todaydate), 'yyyy-MM-dd', 'en-US');
    this.submissiondate = formatDate(new Date(this.todaydate), 'yyyy-MM-dd', 'en-US');
    this.duedate = formatDate(new Date(this.todaydate), 'yyyy-MM-dd', 'en-US');
    this.approvaldate = formatDate(new Date(this.todaydate), 'yyyy-MM-dd', 'en-US');

    this.formulacode = this.data.displaydata[0];
    this.formulaname = this.data.displaydata[1];
    this.PDRno = this.data.displaydata[2];
    this.cstmrname = this.data.displaydata[3];

    this.Loadpdrlist().subscribe((resultLoadpdrlist) => {
      this.isLoading = false;
      console.warn("resultLoadpdrlist", resultLoadpdrlist)
      this.dataresultLoadpdrlist = resultLoadpdrlist
    })
    
   
    this.Loadsampleaudit(this.submissionno).subscribe((resultLoadsampleaudit) => {
      console.warn("resultLoadsampleaudit", resultLoadsampleaudit)
      this.dataresultLoadsampleaudit = resultLoadsampleaudit
    })

    
    this.Loadunapproverawmatlist().subscribe((resultLoadunapproverawmatlist) => {
      this.isLoading = false;
      console.warn("resultLoadunapproverawmatlist", resultLoadunapproverawmatlist)
      this.dataresultLoadunapproverawmatlist = resultLoadunapproverawmatlist
    })
    var lenrawmat = this.dataresultLoadunapproverawmatlist.length
    console.log(lenrawmat)
    if (lenrawmat == 0) {
      this.UnApproved = "false";
    }
    else {
      this.UnApproved = "true";

    }
  }
  }


export class Datasave {
  DueDate: string;
  REP: string;
  ReportComments: string;
  SubmissionDate: string;
  ApprovedDate: string;
  ApprovedComments: string;
  Qty: string;
  Unit: string;
  Price: string;
  Fax: string;
  Priority: string;
  userName: string;
  Purpose: string;
  noofpieces: string;
  Approved: string;
  ApprovedBy: string;
  PersonTitle: string;
  Disclaimers: string;
  CustomerComments: string;
  FaxPerson: string;

}

export class Docsave {
  Document1: any;
  Document2: any;
  Document3: any;
  Document4: any;
  Document5: any;
  Document6: any;
  Document7: any;
}

   
