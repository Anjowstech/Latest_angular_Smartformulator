import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchProjectPdrComponent } from 'src/app/pdr-management/search-project-pdr/search-project-pdr.component';
import { SearchCustomerPdrComponent } from 'src/app/pdr-management/search-customer-pdr/search-customer-pdr.component';
import { LoadspecificationParameterComponent } from 'src/app/pdr-management/loadspecification-parameter/loadspecification-parameter.component';
import { ProjectRequirementsComponent } from 'src/app/pdr-management/project-requirements/project-requirements.component';
//import { ProjectRequirementsComponent } from 'src/app/pdr-management/project-requirements/project-requirements.component';
import { AddnewParamComponent } from 'src/app/pdr-management/loadspecification-parameter/addnew-param/addnew-param.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CustomerDetailsComponent } from 'src/app//formula-lookup/customer-details/customer-details.component';
import { formatDate } from '@angular/common';

import { NewChemistryParamsComponent } from 'src/app/pdr-management/new-chemistry-params/new-chemistry-params.component';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { NewMicrobiologyParamsComponent } from 'src/app/pdr-management/new-microbiology-params/new-microbiology-params.component';
import { DatagridcomponentComponent } from 'src/app/formula-lookup/customer-details/datagridcomponent/datagridcomponent.component';
import { NgModule } from '@angular/core';
import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
@Component({
  selector: 'app-pdr-management',
  templateUrl: './pdr-management.component.html',
  styleUrls: ['./pdr-management.component.css']
})
@NgModule({
  imports: [

    DxDataGridModule

  ],
  declarations: [DatagridcomponentComponent],

})
export class PdrManagementComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  requirement: string = '';
  isprocheck: boolean = false;
  formulacreatedate:string
  status: string='';
  totalhr: string;
  totalcost: string;
  result: string='';
  Lowph: string = '0';
  Highph: string = '0';
  Lowviscosity: string = '0';
  highviscosity: string = '0';
  Viscosityunit: string = '0';
  Appearance: string='0';
  appearance: string = '0';
  Color: string = '0';
  Odor: string = '0';
  target: string = '';
  Comments: string = '';
  specificGravity: string = '0';
  texture: string = '0';
  Texture: string = '';
  highSpecificGravity: string='0';
  helipath: string='false';
  viscosityMethod: string='';
  viscosityFactor: string='';
  spindle: string='';
  speed: string='';
  vTime: string = '';
  Requirements: string = '';
  ProjectResults: string = '';
  doc1: string;
  doc2: string;
  doc3: string;
  doc4: string;
  doc5: string;
  doc6: string;
  doc7: string;
  doc8: string;
  doc9: string;
  doc10: string;
  doc11: string;
  doc12: string;
  doc13: string;
  doc14: string;
  doc15: string;
  doc16: string;
  doc17: string;
  doc18: string;
  doc19: string;
  doc20: string;
  dataList: any = [];
  dataList1: any = [];
  pdrsavedatas: any;
  oldlowph: any;
  pdrcreateuser: string;
  pdrapprovaluser:string
  formulacreationuser: string;
  qctestapprovalsuser: string;
  producttestapprovalsuser: string;
  stabilitytestapprovaluser: string;
  coateatapprouser: string;
  regulatoryapprouser: string;
  ilapprappruser: string;
  formprocedureappruser: string;
  formulaapprorejectionuser: string;
  samplecreationuser: string;
  sampleapprovaluser: string;
  productizationuser: string;
  pccapprovaldatauser: string;
  pifapprovaldatauser: string;
  pdapprovaluser: string;
  PDR_deletedata: any;
  pdrcreateuser1: string;
  pdrapprovaluser1: string
  formulacreationuser1: string;
  qctestapprovalsuser1: string;
  producttestapprovalsuser1: string;
  stabilitytestapprovaluser1: string;
  coateatapprouser1: string;
  regulatoryapprouser1: string;
  ilapprappruser1: string;
  formprocedureappruser1: string;
  formulaapprorejectionuser1: string;
  samplecreationuser1: string;
  sampleapprovaluser1: string;
  productizationuser1: string;
  pccapprovaldatauser1: string;
  pifapprovaldatauser1: string;
  pdapprovaluser1: string;

  selectedRowIndex = -1;
  public isVisible: boolean = false;
  public isVisible2: boolean = false;
  public isVisible3: boolean = false;
  projectapprovalcheck: boolean;
  datecheck: boolean;
  isLoadingspec = true;
  pdrno: string;
  cursdate: string;
  projectname: string;
  customername: string;
  currentstartDate: string;
  currentendDate: string;
  currentDate: string;
  currentDate1: Date
  pdrapproval: string;
  formulacreationend: string;
  qctestapprovals: string
  qctestapprovalsend: string;
  producttestapprovals:string
  formulacreation: string;
  pdrcreationdays: Number=7;
  pdrapprovaldays: Number=1;
  formulacreationdays: Number=69;
  qcapprovaldays: Number=20;
  ptapprovaldays: Number=20;
  stabilityapprovaldays: Number=30;
  coaapprovaldays: Number=5;
  regulatoryapprovaldays: Number=10;
  ilapprovaldays: Number=5;
  formulprocedureaapprovaldays: Number = 5;
  formulaapprovaldays: Number = 4;
  samplecreationdays: Number=7;
  sampleapprovaldays: Number=1;
  productizationdays: Number=7;
  pccapprovaldays: Number=7;
  pifapprovaldays: Number=7;
  productapprovaldays: Number=1;
  stagestartDate: string;
  stageendDate: string;
  pdrcreatedate: string;
  assigneddatalo_data: any;
  dataloadaudittrackpdr: any;
  myForm: FormGroup;
  customercode: string='';
  AssignedTo: string = 'admin';
  Status: string = '';
  StartDate: string;
  CompletedDate: string;
  ProjDetails: string='';
  Approvedproject: string;
  Revenue: string='0';
  Priority: string = 'Low';
  PDRDate: string;
  Class: string='';
  pdrData: any;
  pdrautogenerate_data: any
  Pdrdetails: any = [];
  Pdr_save_data: any;
  customerkey: string;
  Approv: boolean;
  apprproj_data: any;
  datapdctdevbrief: any;
  currentpdct: string = '';
  intendedendmarket: string='';
  estimatedannualvolume: string='';
  pdctdistrbtedcountrs: string='';
  size1: string='';
  size2: string='';
  size3: string='';
  gallons: string='';
  bulkonly: string='';
  bottle: string='false';
  jar: string='false';
  tube: string='false';
  packet: string='false';
  wand: string='false';
  stick: string='false';
  productdescription: string='';
  packagingother: string='';
  specialnotes: string='';
  productconcept: string='';
  mustHaveIng: string='';
  ingredientrestriction: string='';
  desiredthirdParty: string='';
  marketingclaim: string='';
  color: string='0';
  scent: string='';
  colorrestrictions: string='';
  brandsupplied: string='';
  txture: string='0';
  benchmark: string='';
  competitive: string='';
  developmentnotes: string='';
  targetcost: string='';
  claim: string='';
  samplerequirement: string='';
  Botl: boolean;
  Jaar: boolean;
  Tub: boolean;
  Pckt: boolean;
  Wnd: boolean;
  Stck: boolean;
  datachangerequest: any;
  dataapprvrs: any;
  datamailalert: any;
  datamgmntapprvrs: any;
  productData: any;
  datatask: any;
  communicationData: any;
  Followupdata: any;
  followupstatus: any;
  Fdelete: any;
  communistatus: any;
  FollowupStatus: string='';
  FollowupSubject: string = '';
  FollowupID: string;
  CommuStatus: string = '';
  CommuSubject: string = '';
  cdelete: string;
  CommuID: string;
  loadformulationsassign: any;
  loadformulationlabbatchticket: any;
  FormulaCode: any;
  protestapprend: string;
  stabilitytestapproval: string;
  stabilityapprovalend: string;
  taskid: string;
  task: string;
  apprvData: any;
  isLoadingchek: boolean;
  isLoadingchek2: boolean;
  coateatappro: string;
  coatestapproend: string;
  regulatoryappro: string;
  regulatoryapproend: string;
  ilapprappr: string
  ilapprapprend: string;
  formprocedureappr: string;
  formprocedureapprend: string;
  formulaapprorejection: string;
  formulaapprorejectionend: string;
  samplecreation: string;
  samplecreationend: string;
  sampleapproval: string;
  sampleapprovalend:string
  loadassignedusersdata: any;
  checkedList: any;
  checkedLists2: any;
  loadstagegatedata: any;
  emailData: any;
  productization: string;
  productizationend: string;
  pccapprovaldata: string;
  pifapprovaldata: string;
  pifapprovalenddata:string
  pccapprovalenddata: string;
  pdapproval: string;
  pdapprovalend: string;
  loadformulationsassign2: any;
  masterSelectedtrue: boolean = true;
  masterSelectedfalse: boolean = false;
  AssigineduserdataList: Data[][] = [];
  userdataList: Data2[][] = [];
  safety_test_rowdata: any = [];
  i: number;

  j: number;
  datachem: any;
  datamicro: any;
  pdrnodata: string;
  assign_save_data: any;
  uservalue: string = "admin";
  loadspecdata: any;
  pdrnosend: any;
  login_formpdr: FormGroup;
  oldhighph: any;
  oldLowviscosity: any;
  oldhighviscosity: any;
  oldColor: any;
  oldodor: any;
  oldsp: any;
  oldAppearance: any;
  oldtexture: any;

  //saji
  


  //Botl: boolean;
  //Jaar: boolean;
  //Tub: boolean;
  //Pckt: boolean;
  //Wnd: boolean;
  //Stck: boolean;
  //datachangerequest: any;
  //dataapprvrs: any;
  //datamailalert: any;
  //datamgmntapprvrs: any;
  //productData: any;
  //datatask: any;
  //communicationData: any;
  //Followupdata: any;
  //followupstatus: any;
  //Fdelete: any;
  //communistatus: any;
  //FollowupStatus: string;
  //FollowupSubject: string;
  //FollowupID: string;
  //CommuStatus: string;
  //CommuSubject: string;
  //cdelete: string;
  //CommuID: string;
  //loadformulationsassign: any;
  //loadformulationlabbatchticket: any;
  //FormulaCode: any;
  //protestapprend: string;
  //stabilitytestapproval: string;
  //stabilityapprovalend: string;
  //taskid: string;
  //task: string;
  //apprvData: any;
  //isLoadingchek: boolean;
  //coateatappro: string;
  //coatestapproend: string;
  //regulatoryappro: string;
  //regulatoryapproend: string;
  //ilapprappr: string
  //ilapprapprend: string;
  //formprocedureappr: string;
  //formprocedureapprend: string;
  //formulaapprorejection: string;
  //formulaapprorejectionend: string;
  //samplecreation: string;
  //samplecreationend: string;
  //sampleapproval: string;
  //sampleapprovalend: string
  //loadassignedusersdata: any;
  //loadstagegatedata: any;
  //emailData: any;
  //productization: string;
  //productizationend: string;
  //pccapprovaldata: string;
  //pifapprovaldata: string;
  //pifapprovalenddata: string
  //pccapprovalenddata: string;
  //pdapproval: string;
  //oldlowph: any;
  //oldhighph: any;
  //oldLowviscosity: any;
  //oldhighviscosity: any;
  //oldColor: any;
  //oldodor: any;
  //oldsp: any;
  //oldAppearance: any;
  //oldtexture: any;
  //pdrsavedatas: any;
  //oldhighSpecificGravity: any;
  //pdapprovalend: string;
  //loadformulationsassign2: any;
  //AssigineduserdataList: Data[][] = [];
  //i: number;
  //j: number;
  //assign_save_data: any;
  //uservalue: string = "admin";
  //login_formpdr: FormGroup;
  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService) {
    this.login_formpdr = fb.group({
      'projname': ['', Validators.required],


      'terms': [false]
    });
  }
  openloadnewmicrobiologyparams(): void {
    const dialogRef = this.dialog.open(NewMicrobiologyParamsComponent, {
      width: '60%', height: '60%', disableClose: true
    });
  }
  openloadspecificationparameter(): void {
    const dialogRef = this.dialog.open(LoadspecificationParameterComponent, {
      width: '60%', height: '70%', disableClose: true
    });
  }
  openloadnewchemistryparams(): void {
    const dialogRef = this.dialog.open(NewChemistryParamsComponent, {
      width: '60%', height: '60%', disableClose: true
    });
  }
  //openProjectRequirements(): void {
  //  const dialogRef = this.dialog.open(ProjectRequirementsComponent, {
  //    width: '60%', height: '60%', disableClose: true
  //  });
  //}
  opensearchprojectpdr(): void {
    const dialogRef = this.dialog.open(SearchProjectPdrComponent, {
      width: '60%', height: '70%', disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {
        this.pdrno = result[0];
        this.projectname = result[1];
        this.customername = result[2];
        if (this.projectname != null) {
          this.projectapprovalcheck = false;
          this.datecheck = true;
          this.isLoadingchek = true;
          this.isLoadingchek2 = true;
          this.isprocheck = true;
        }
      }
      if (result == "") {
        this.pdrauto().subscribe((pdrautogenerate) => {
          console.warn("pdrautogenerate", pdrautogenerate)
          this.pdrautogenerate_data = pdrautogenerate
          this.pdrno = this.pdrautogenerate_data
        })
      }

      this.PDRdataload(this.pdrno).subscribe((pdrload) => {
        console.warn("pdrload", pdrload)
        this.pdrData = pdrload
        this.PDRdata(this.pdrData)
      })
      this.audittrackloadpdr(this.pdrno).subscribe((loadpdraudittrack) => {
        console.warn("loadpdraudittrack", loadpdraudittrack)
        this.dataloadaudittrackpdr = loadpdraudittrack
      })
      this.changerequestload(this.pdrno).subscribe((loadchangerequest) => {
        console.warn("loadchangerequest", loadchangerequest)
        this.datachangerequest = loadchangerequest
      })
      this.funcapprvsload(this.projectname).subscribe((loadfunctionalapprvs) => {
        console.warn("loadfunctionalapprvs", loadfunctionalapprvs)
        this.dataapprvrs = loadfunctionalapprvs
      })
      this.productdevbriefload(this.pdrno).subscribe((loadpdctdevbrief) => {
        console.warn("loadpdctdevbrief", loadpdctdevbrief)
        this.datapdctdevbrief = loadpdctdevbrief
        this.producttdevbriefdata(this.datapdctdevbrief)
      })
      this.emailalertload(this.projectname).subscribe((loademailalert) => {
        console.warn("loademailalert", loademailalert)
        this.datamailalert = loademailalert
      })
      this.Srmgmntload().subscribe((loadmgmntapprvs) => {
        console.warn("loadmgmntapprvs", loadmgmntapprvs)
        this.datamgmntapprvrs = loadmgmntapprvs
      })
      this.Productdataload(this.pdrno).subscribe((productload) => {
        console.warn("productload", productload)
        this.productData = productload

      })
      this.Loadcommnotes(this.pdrno).subscribe((CommunicationDetails) => {
        console.warn("CommunicationDetails", CommunicationDetails)
        this.communicationData = CommunicationDetails



      })
      this.Loadfollowupnotes(this.pdrno).subscribe((Followupdetails) => {
        console.warn("Followupdetails", Followupdetails)
        this.Followupdata = Followupdetails


      })
      this.loadassignedformulations(this.pdrno,this.uservalue).subscribe((loadformulations) => {
console.warn("loadformula", loadformulations)
this.loadformulationsassign = loadformulations
      })
      this.assignedformulationstable(this.pdrno).subscribe((loadformulations2) => {
        console.warn("assignedformulations", loadformulations2)
        this.loadformulationsassign2 = loadformulations2
      })
      this.loadassignusers(this.projectname).subscribe((loadassignedusers) => {
        console.warn("loadassignedusers", loadassignedusers)
        this.loadassignedusersdata = loadassignedusers
      })

      this.loadstagegatesettings(this.pdrno).subscribe((loadstagegate) => {
        console.warn("loadstagegate", loadstagegate)
        this.loadstagegatedata = loadstagegate
        this.listoutstagegate(this.loadstagegatedata);
      })

      this.loadchemistry(this.pdrno).subscribe((loadchemdata) => {
        console.warn("loadchemdata", loadchemdata)
        this.datachem = loadchemdata
        this.pdrnodata = this.pdrno;
        this.datashare.sendpdrno(this.pdrnodata);
      })
      this.loadmicrobiology(this.pdrno).subscribe((loadmicrobiologydata) => {
        console.warn("loadmicrobiologydata", loadmicrobiologydata)
        this.datamicro = loadmicrobiologydata
        this.pdrnodata = this.pdrno;
        this.datashare.sendpdrno(this.pdrnodata);
      })
      this.loadspecification(this.pdrno).subscribe((loadspec) => {
        console.warn("loadspec", loadspec)
        this.loadspecdata = loadspec
        this.pdrnosend = this.pdrno
        this.datashare.sendpdrno(this.pdrnosend)
      })


    });
  }
  isAllSelected() {
    for (var i = 0; i < this.loadassignedusersdata.length; i++) {
      this.loadassignedusersdata[i].UserCheck = 'true';
    }


  }
  isAllunSelected() {
    for (var i = 0; i < this.loadassignedusersdata.length; i++) {
      this.loadassignedusersdata[i].UserCheck = 'false';
    }


  }
  isAllSelectedassigned() {
    for (var i = 0; i < this.loadformulationsassign.length; i++) {
      this.loadformulationsassign[i].Assign = 'True';
    }


  }
  isAllunSelectedassigned() {
    for (var i = 0; i < this.loadformulationsassign.length; i++) {
      this.loadformulationsassign[i].Assign = 'false';
    }


  }
  
  showAlert(): void {
    if (this.isVisible) {
      return;
    }
    this.isVisible = true;
    setTimeout(() => this.isVisible = false, 5000)
  }
  showAlert2(): void {
    if (this.isVisible2) {
      return;
    }
    this.isVisible2 = true;
    setTimeout(() => this.isVisible2 = false, 5000)

  }
  showAlert3(): void {
    if (this.isVisible3) {
      return;
    }
    this.isVisible3 = true;
    setTimeout(() => this.isVisible3 = false, 5000)
  }
  producttdevbriefdata(devbriefdata: any) {
    for (let item of devbriefdata) {
      this.currentpdct = item.CurrentProduct;
      this.intendedendmarket = item.IntendedEnd;
      this.estimatedannualvolume = item.EstimatedAnnual;
      this.pdctdistrbtedcountrs = item.ProductDistributed;
      this.size1 = item.Size1;
      this.size2 = item.Size2;
      this.size3 = item.Size3;
      this.gallons = item.Gallons;
      this.bulkonly = item.Bulkonly;
      this.bottle = item.Bottle;
      if (this.bottle == "y") {
        this.Botl = true
      }
      else {
        this.Botl = false
      }
      this.jar = item.Jar;
      if (this.jar == "y") {
        this.Jaar = true
      }
      else {
        this.Jaar = false
      }
      this.tube = item.Tube;
      if (this.tube == "y") {
        this.Tub = true
      }
      else {
        this.Tub = false
      }
      this.packet = item.Packet;
      if (this.packet == "y") {
        this.Pckt = true
      }
      else {
        this.Pckt = false
      }
      this.wand = item.Wand;
      if (this.wand == "y") {
        this.Wnd = true
      }
      else {
        this.Wnd = false
      }
      this.stick = item.Stick;
      if (this.stick == "y") {
        this.Stck = true
      }
      else {
        this.Stck = false
      }
      this.productdescription = item.ProductDescription;
      this.packagingother = item.PackagingOther;
      this.specialnotes = item.SpecialNotes;
      this.productconcept = item.ProductConcept;
      this.mustHaveIng = item.MustHaveIng;
      this.ingredientrestriction = item.IngredientRestriction;
      this.desiredthirdParty = item.DesiredThirdParty;
      this.marketingclaim = item.MarketingClaim;
      this.color = item.Color;
      this.scent = item.Scent;
      this.colorrestrictions = item.ColorRestrictions;
      this.brandsupplied = item.BrandSupplied;
      this.txture = item.Texture;
      this.benchmark = item.Benchmark;
      this.competitive = item.Competitive;
      this.developmentnotes = item.DevelopmentNotes;
      this.targetcost = item.TargetCost;
      this.claim = item.Claims;
      this.samplerequirement = item.SampleRequirement;
    }
  }
  listoutstagegate(stagegate) {
  
    this.currentDate = formatDate(new Date(stagegate[0].startdate), 'yyyy-MM-dd', 'en-US');
    this.pdrcreatedate = formatDate(new Date(stagegate[0].enddate), 'yyyy-MM-dd', 'en-US');
    this.pdrcreationdays=stagegate[0].duration;
    this.pdrcreateuser=stagegate[0].username;
    stagegate[0].username2;

    this.pdrapproval = formatDate(new Date(stagegate[1].startdate), 'yyyy-MM-dd', 'en-US');
    this.pdapprovalend = formatDate(new Date(stagegate[1].enddate), 'yyyy-MM-dd', 'en-US');
    this.pdrapprovaldays=stagegate[1].duration;
    this.pdrapprovaluser= stagegate[1].username;
    this.pdrapprovaluser1=stagegate[1].username2;
    this.formulacreation = formatDate(new Date(stagegate[2].startdate), 'yyyy-MM-dd', 'en-US');
    this.formulacreationend = formatDate(new Date(stagegate[2].enddate), 'yyyy-MM-dd', 'en-US');
    this.formulacreationdays=stagegate[2].duration;
    this.formulacreationuser=stagegate[2].username;
    this.formulacreationuser1=stagegate[2].username2;
    this.qctestapprovals = formatDate(new Date(stagegate[3].startdate), 'yyyy-MM-dd', 'en-US');
    this.qctestapprovalsend = formatDate(new Date(stagegate[3].enddate), 'yyyy-MM-dd', 'en-US');
    this.qcapprovaldays=stagegate[3].duration;
    this.qctestapprovalsuser=stagegate[3].username;
    this.qctestapprovalsuser1=stagegate[3].username2;
    this.producttestapprovals = formatDate(new Date(stagegate[4].startdate), 'yyyy-MM-dd', 'en-US');
    this.protestapprend = formatDate(new Date(stagegate[4].enddate), 'yyyy-MM-dd', 'en-US');
    this.ptapprovaldays=stagegate[4].duration;
    this.producttestapprovalsuser=stagegate[4].username;
    this.producttestapprovalsuser1=stagegate[4].username2;
    this.stabilitytestapproval = formatDate(new Date(stagegate[5].startdate), 'yyyy-MM-dd', 'en-US');
    this.stabilityapprovalend = formatDate(new Date(stagegate[5].enddate), 'yyyy-MM-dd', 'en-US');
    this.stabilityapprovaldays=stagegate[5].duration;
    this.stabilitytestapprovaluser= stagegate[5].username;
    this.stabilitytestapprovaluser1=stagegate[5].username2;
    this.coateatappro = formatDate(new Date(stagegate[6].startdate), 'yyyy-MM-dd', 'en-US');
    this.coatestapproend = formatDate(new Date(stagegate[6].enddate), 'yyyy-MM-dd', 'en-US');
    this.coaapprovaldays=stagegate[6].duration;
    this.coateatapprouser= stagegate[6].username;
    this.coateatapprouser1=stagegate[6].username2;
    this.regulatoryappro = formatDate(new Date(stagegate[7].startdate), 'yyyy-MM-dd', 'en-US');
    this.regulatoryapproend = formatDate(new Date(stagegate[7].enddate), 'yyyy-MM-dd', 'en-US');
    this.regulatoryapprovaldays=stagegate[7].duration;
    this.regulatoryapprouser= stagegate[7].username;
    this.regulatoryapprouser1=stagegate[7].username2;
    this.ilapprappr = formatDate(new Date(stagegate[8].startdate), 'yyyy-MM-dd', 'en-US');
    this.ilapprapprend = formatDate(new Date(stagegate[8].enddate), 'yyyy-MM-dd', 'en-US');
    this.ilapprovaldays=stagegate[8].duration;
    this.ilapprappruser=stagegate[8].username;
    this.ilapprappruser1=stagegate[8].username2;
    this.formprocedureappr = formatDate(new Date(stagegate[9].startdate), 'yyyy-MM-dd', 'en-US');
    this.formprocedureapprend = formatDate(new Date(stagegate[9].enddate), 'yyyy-MM-dd', 'en-US');
    this.formulprocedureaapprovaldays=stagegate[9].duration;
    this.formprocedureappruser=stagegate[9].username;
    this.formprocedureappruser1=stagegate[9].username2;
    this.formulaapprorejection = formatDate(new Date(stagegate[10].startdate), 'yyyy-MM-dd', 'en-US');
    this.formulaapprorejectionend = formatDate(new Date(stagegate[10].enddate), 'yyyy-MM-dd', 'en-US');
    this.formulaapprovaldays=stagegate[10].duration;
    this.formulaapprorejectionuser= stagegate[10].username;
    this.formulaapprorejectionuser1=stagegate[10].username2;
    this.samplecreation = formatDate(new Date(stagegate[11].startdate), 'yyyy-MM-dd', 'en-US');
    this.samplecreationend = formatDate(new Date(stagegate[11].enddate), 'yyyy-MM-dd', 'en-US');
    this.samplecreationdays=stagegate[11].duration;
    this.samplecreationuser=stagegate[11].username;
    this.samplecreationuser1=stagegate[11].username2;
    this.sampleapproval = formatDate(new Date(stagegate[12].startdate), 'yyyy-MM-dd', 'en-US');
    this.sampleapprovalend = formatDate(new Date(stagegate[12].enddate), 'yyyy-MM-dd', 'en-US');
    this.sampleapprovaldays=stagegate[12].duration;
    this.sampleapprovaluser=stagegate[12].username;
    this.sampleapprovaluser1=stagegate[12].username2;
    this.productization = formatDate(new Date(stagegate[13].startdate), 'yyyy-MM-dd', 'en-US');
    this.productizationend = formatDate(new Date(stagegate[13].enddate), 'yyyy-MM-dd', 'en-US');
    this.productizationdays=stagegate[13].duration;
    this.productizationuser=stagegate[13].username;
    this.productizationuser1=stagegate[13].username2;
    this.pccapprovaldata = formatDate(new Date(stagegate[14].startdate), 'yyyy-MM-dd', 'en-US');
    this.pccapprovalenddata = formatDate(new Date(stagegate[14].enddate), 'yyyy-MM-dd', 'en-US');
    this.pccapprovaldays=stagegate[14].duration;
    this.pccapprovaldatauser=stagegate[14].username;
    this.pccapprovaldatauser1=stagegate[14].username2;
    this.pifapprovaldata = formatDate(new Date(stagegate[15].startdate), 'yyyy-MM-dd', 'en-US');
    this.pifapprovalenddata = formatDate(new Date(stagegate[15].enddate), 'yyyy-MM-dd', 'en-US');
    this.pifapprovaldays=stagegate[15].duration;
    this.pifapprovaldatauser=stagegate[15].username;
    this.pifapprovaldatauser1=stagegate[15].username2;
    this.pdapproval = formatDate(new Date(stagegate[16].startdate), 'yyyy-MM-dd', 'en-US');
    this.pdapprovalend = formatDate(new Date(stagegate[16].enddate), 'yyyy-MM-dd', 'en-US');
    this.productapprovaldays=stagegate[16].duration;
    this.pdapprovaluser=stagegate[16].username;
    this.pdapprovaluser1=stagegate[16].username2;
    this.stagestartDate = formatDate((this.currentDate), 'MM/dd/yyyy', 'en-US');
    this.stageendDate = formatDate((this.pdapprovalend), 'MM/dd/yyyy', 'en-US');
  }
  PDRdata(pdrdatas: any) {
    for (let item of pdrdatas) {
      //   this.pdrnumb = item.PDRNo;
      //  this.projectna = item.ProjectName;
      this.AssignedTo = item.AssignedTo;
      this.Status = item.Status;
      this.cursdate = formatDate(new Date(item.StartDate), 'yyyy-MM-dd', 'en-US');
      //this.cursdate = item.StartDate.replaceAll("/", "-");
      this.currentstartDate = this.cursdate;
      this.currentendDate = formatDate(new Date(item.CompletedDate), 'yyyy-MM-dd', 'en-US');
      this.ProjDetails = item.ProjDetails;
      this.Revenue = item.Revenue;
      this.Priority = item.Priority;
      this.customercode = item.CustomerCode;
      this.currentDate = formatDate(new Date(item.PDRDate), 'yyyy-MM-dd', 'en-US');
      this.Class = item.Class;
      this.Approvedproject = item.Approved;
      if (this.Approvedproject == "True") {
        this.Approv = true
      }
      else {
        this.Approv = false
      }
      this.requirement = item.Requirements;
      this.status = item.Status;
      this.totalhr = item.TotalHours;
      this.totalcost = item.TotalCost;
      this.result = item.ProjectResults;
      this.Lowph = item.lowph;
      this.Highph = item.highph;
      this.Lowviscosity = item.lowviscosity;
      this.highviscosity = item.highviscosity;
      this.Viscosityunit = item.viscosityunit;
      this.Appearance = item.appearance;
      this.Color = item.color;
      this.Odor = item.odor;
      this.Comments = item.comments;
      this.specificGravity = item.SpecificGravity;
      this.texture = item.Texture;
      this.highSpecificGravity = item.HighSpecificGravity;
      this.helipath = item.Helipath;
      this.viscosityMethod = item.ViscosityMethod;
      this.viscosityFactor = item.ViscosityFactor;
      this.spindle = item.Spindle;
      this.speed = item.Speed;
      this.vTime = item.VTime;
      this.doc1 = item.Document1;
      this.doc2 = item.Document2;
      this.doc3 = item.Document3;
      this.doc4 = item.Document4;
      this.doc5 = item.Document5;
      this.doc6 = item.Document6;
      this.doc7 = item.Document7;
      this.doc8 = item.Document8;
      this.doc9 = item.Document9;
      this.doc10 = item.Document10;
      this.doc11 = item.Document11;
      this.doc12 = item.Document12;
      this.doc13 = item.Document13;
      this.doc14 = item.Document14;
      this.doc15 = item.Document15;
      this.doc16 = item.Document16;
      this.doc17 = item.Document17;
      this.doc18 = item.Document18;
      this.doc19 = item.Document19;
      this.doc20 = item.Document20;








    }
  }
  loadspecification(pdrno: string) {
    var pdrnum = pdrno;
    let params1 = new HttpParams().set('PDRNo', pdrnum);
    return this.http.get("https://smartformulatorpdrwebservice5.azurewebsites.net/loadspecs", { params: params1 })
  }
  PDRdataload(pdrnumber: string) {
    var pdrnum = pdrnumber;
    let params1 = new HttpParams().set('PDRNo', pdrnum);
    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/displaydetails", { params: params1 })
  }


  opencustomersearchpdr(): void {
    const dialogRef = this.dialog.open(SearchCustomerPdrComponent, {
      width: '60%', height: '70%', disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      this.customerkey = result[0];
      this.customername = result[1];
      this.customercode = result[2];




    });
  }
  addRow() {
    this.dataGrid.instance.addRow();
    this.dataGrid.instance.saveEditData();


    // this.dataGrid.instance.cellValue(this.selectedRowIndex, "check", false);
  }
  deleteRow() {
    this.dataGrid.instance.deleteRow(this.selectedRowIndex);
    this.dataGrid.instance.deselectAll();
  }
  selectedChanged(e) {
    this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
  }
  ClearData() {
    this.isprocheck =false;
    this.pdrno = this.pdrautogenerate_data;
    this.Approv = false;
    // this.pdrno = '';
    this.projectname = '';
    this.customername = '';
    this.AssignedTo = 'admin';
    this.Status = 'WIP-Initiated';
    this.StartDate = '';
    this.CompletedDate = '';
    this.ProjDetails = '';
    this.customercode = '';
    this.Revenue = '';
    this.Priority = 'Low';
    this.PDRDate = '';
    this.Class = '';
    this.projectapprovalcheck = true;
    this.datecheck = false;
    this.currentstartDate = new Date().toISOString().substring(0, 10);
    this.currentendDate = new Date().toISOString().substring(0, 10);
    this.currentDate = new Date().toISOString().substring(0, 10);
  }
  //openDialogpdr() {
  //  const dialogConfig = new MatDialogConfig();
  //  dialogConfig.disableClose = true;
  //  dialogConfig.width = '900%';

  //  const dialogRef = this.dialog.open(SearchProjectPdrComponent )
  //}
  //openDialogpdr() {

  //  const dialogConfig = new MatDialogConfig();

  //  dialogConfig.disableClose = true;
  //  dialogConfig.autoFocus = true;

  //  this.dialog.open(SearchProjectPdrComponent, dialogConfig);
  //}
  assignedtodataload() {
    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/LoadAssignedTo");
  }
  pdrauto() {
    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/Auto_Gemerate_PDRNo", { responseType: 'text' });
  }
  Opencustomer(): void {
    const dialogRef = this.dialog.open(CustomerDetailsComponent, {
      width: '95%', height: '95%', disableClose: true
    });
  }
  changeassigned(event) {
    this.AssignedTo = event.target.value
  }
  changestatus(event) {
    this.Status = event.target.value
  }
  changepriority(event) {
    this.Priority = event.target.value
  }
  changecurrentdate(event) {
    this.currentDate = event.target.value
  }
  changestartdate(event) {
    this.currentstartDate = event.target.value
    this.currentendDate = this.currentstartDate
  }
  changeenddate(event) {
    this.currentendDate = event.target.value
  }
  Pdr_Save(pdrn: string, projn: string) {
    this.markFormTouched(this.login_formpdr);
    if (this.login_formpdr.valid) {

      this.Pdrdetails = [pdrn, projn, this.customercode, this.AssignedTo, this.currentstartDate, this.currentendDate, this.Status, this.currentDate, this.Priority, "false"]

      this.Pdr_savedata(this.Pdrdetails).subscribe((Pdr_savepdr) => {
        console.warn("Pdr_savepdr", Pdr_savepdr)
        this.Pdr_save_data = Pdr_savepdr
      })
      if (this.Pdr_save_data == "Inserted") {
        this.showAlert();
      }
      else {
        this.showAlert3();
      }

    }
    else {
      this.showAlert3();
      this.login_formpdr.controls['terms'].setValue(false);
    }
  }
  setvaluesform(loadformulations) {
    this.FormulaCode = loadformulations.FormulaCode;
    this.loadassignedformulationslabbatchticket(this.FormulaCode).subscribe((loadformulationslab) => {
      console.warn("loadformulalabbatch", loadformulationslab)
      this.loadformulationlabbatchticket = loadformulationslab
    })
  }
  DeletePDR() {
    this.PDR_Delete().subscribe((PDR_dlt) => {
      console.warn("PDR_deletedata", PDR_dlt)
      this.PDR_deletedata = PDR_dlt
      //this.showAlert4()
    })
  }
  PDR_Delete() {
    var PDRNo = this.pdrno;
    var ProjectName = this.projectname;
    let params1 = new HttpParams().set('PDRNo', PDRNo).set('ProjectName', ProjectName);
    return this.http.get("https://smartformulatorpdrwebservice3.azurewebsites.net/deletepDR", { params: params1, responseType: 'text' })
  }
  pdrsavemain() {
    this.dataList[0] = ([{
      PDRNo: this.pdrno,
      pdrdatetime: this.currentDate,
      ProjectName: this.projectname,
      CustomerCode: this.customercode,
      AssignedTo: this.AssignedTo,
      ProjDetails: this.ProjDetails,
      Revenue: this.Revenue,
      Class: this.Class,
      StartDate: this.currentstartDate,
      CompletedDate: this.currentendDate,
      Requirements: this.requirement,
      Status: this.status,
      ProjectResults: this.result,
      lowph: this.Lowph,
      oldlowph: this.oldlowph,
      highph: this.Highph,
      lowviscosity: this.Lowviscosity,
      highviscosity: this.highviscosity,
      appearance: this.Appearance,
      color: this.Color,
      odor: this.Odor,
      comments: this.Comments,
      viscosityunit: this.Viscosityunit,
      priority: this.Priority,
      SpecificGravity: this.specificGravity,
      Texture: this.txture,
      HighSpecificGravity: this.highSpecificGravity,
      ViscosityMethod: this.viscosityMethod,
      ViscosityFactor: this.viscosityFactor,
      Speed: this.speed,
      Spindle: this.spindle,
      VTime: this.vTime,
      AddedDT: '',
      AddedBy: 'Admin',
      oldhighph: '0',
      oldlowviscosity: '0',
      oldhighvisc: '0',
      oldlowsp: '0.00',
      oldhighsp: '0',
      oldappearance: '0',
      oldcolor: '0',
      oldodor: '0',
      texture: '0',
      oldtexture: '0',
      Helipath: 'false',
      currentpdct: this.currentpdct,
      IntendedEnd: this.intendedendmarket,
      Estimated: this.estimatedannualvolume,
      Countries: this.pdctdistrbtedcountrs,
      SpecialNotes: this.specialnotes,
      size1: this.size1,
      size2: this.size2,
      size3: this.size3,
      Other: this.packagingother,
      duration: '',
      strProductDevBrief: '',
      chkBottle: this.Botl,
      chkTube: this.Tub,
      chkWand: this.Wnd,
      chkStick: this.Stck,
      chkJar: this.Jaar,
      chkPacket: this.Pckt,
      gallons: this.gallons,
      bulkonly: this.bulkonly,
      productdescription: this.productdescription,
      ProductConcept: this.productconcept,
      musthave: this.mustHaveIng,
      ingredient: this.ingredientrestriction,
      desired: this.desiredthirdParty,
      marketing: this.marketingclaim,
      Color2: '',
      scent: this.scent,
      anycolor: this.colorrestrictions,
      brand: this.brandsupplied,
      benchmark: this.benchmark,
      compprdoduct: this.competitive,
      developmentnotes: this.developmentnotes,
      target: this.targetcost,
      Claims: this.claim,
      samplereq: this.samplerequirement,
    }]);




    this.pdr_saveup().subscribe((pdr_save) => {
      console.warn("pdrsavemain", pdr_save)
      this.pdrsavedatas = pdr_save
    })
    this.showAlert()


  };
  pdrupdatemain() {
    this.dataList1[0] = ([{
      PDRNo: this.pdrno,
      pdrdatetime: this.currentDate,
      ProjectName: this.projectname,
      CustomerCode: this.customercode,
      AssignedTo: this.AssignedTo,
      ProjDetails: this.ProjDetails,
      Revenue: this.Revenue,
      Class: this.Class,
      StartDate: this.currentstartDate,
      CompletedDate: this.currentendDate,
      Requirements: this.requirement,
      Status: this.status,
      ProjectResults: this.result,
      lowph: this.Lowph,
      oldlowph: this.oldlowph,
      highph: this.Highph,
      lowviscosity: this.Lowviscosity,
      highviscosity: this.highviscosity,
      appearance: this.Appearance,
      color: this.Color,
      odor: this.Odor,
      comments: this.Comments,
      viscosityunit: this.Viscosityunit,
      priority: this.Priority,
      SpecificGravity: this.specificGravity,
      Texture: this.texture,
      HighSpecificGravity: this.highSpecificGravity,
      ViscosityMethod: this.viscosityMethod,
      ViscosityFactor: this.viscosityFactor,
      Speed: this.speed,
      Spindle: this.spindle,
      VTime: this.vTime,
      AddedDT: '',
      AddedBy: 'Admin',
      oldhighph: '0',
      oldlowviscosity: '0',
      oldhighvisc: '0',
      oldlowsp: '0',
      oldhighsp: '0',
      oldappearance: '0',
      oldcolor: '0',
      oldodor: '0',
      texture: '0',
      oldtexture: '0',
      Helipath: 'false',
      currentpdct: this.currentpdct,
      IntendedEnd: this.intendedendmarket,
      Estimated: this.estimatedannualvolume,
      Countries: this.pdctdistrbtedcountrs,
      SpecialNotes: this.specialnotes,
      size1: this.size1,
      size2: this.size2,
      size3: this.size3,
      Other: this.packagingother,
      gallons: this.gallons,
      bulkonly: this.bulkonly,
      chkBottle: this.Botl,
      chkTube: this.Tub,
      chkWand: this.Wnd,
      chkStick: this.Stck,
      chkJar: this.Jaar,
      chkPacket: this.Pckt,
      ProductConcept: this.productconcept,
      musthave: this.mustHaveIng,
      ingredient: this.ingredientrestriction,
      desired: this.desiredthirdParty,
      marketing: this.marketingclaim,
      Color2: this.color,
      scent: this.scent,
      anycolor: this.colorrestrictions,
      brand: this.brandsupplied,
      benchmark: this.benchmark,
      compprdoduct: this.competitive,
      target: this.targetcost,
      developmentnotes: this.developmentnotes,
      productdescription: this.productdescription,
      Testure: this.txture,
      Claims: this.claim,
      samplereq: this.samplerequirement,
      UpdatedBy: 'admin',
      strProductDevBrief: 'Update',
      /* Linenumber: this.Linenumber,*/
      //TestName: this.TestName,
      //psize: this.psize,
      //pcomments: this.pcomments



    }]);




    this.pdr_updateup().subscribe((pdr_updatemain) => {
      console.warn("pdrupdatemain", pdr_updatemain)
      this.pdrsavedatas = pdr_updatemain
    })
    this.showAlert2()


  };
  pdr_updateup() {



    var datalistraw: any = JSON.stringify(this.dataList1);
    //var datalistaudit: any = JSON.stringify(this.DataListAudit);
    //var datalistifra: any = JSON.stringify(this.DataListIFRA);
    var operation = 'Update';
    var username = 'admin';
    var username2 = 'admin';
    let params1 = new HttpParams().set('PDRDetail1', datalistraw).set('operation', operation).set('username', username).set('username2', username2);
    return this.http.get("https://smartformulatorpdrwebservice3.azurewebsites.net/Save_Update_PDR", { params: params1, responseType: 'text' })
  }
  pdr_saveup() {



    var datalistraw: any = JSON.stringify(this.dataList);
    //var datalistaudit: any = JSON.stringify(this.DataListAudit);
    //var datalistifra: any = JSON.stringify(this.DataListIFRA);
    var operation = 'Save';
    var username = 'admin';
    var username2 = 'admin';
    let params1 = new HttpParams().set('PDRDetail1', datalistraw).set('operation', operation).set('username', username).set('username2', username2);
    return this.http.get("https://smartformulatorpdrwebservice3.azurewebsites.net/Save_Update_PDR", { params: params1, responseType: 'text' })
  }
  loadstagegatesettings(Pdrno) {
   
    var pdr: string = Pdrno;
    let params1 = new HttpParams().set('PDRNo', pdr);
    return this.http.get("https://smartformulatorpdrwebservice4.azurewebsites.net/stagegatesettings", { params: params1})
  }
  loadchemistry(Pdrno) {
    var pdr: string = Pdrno;
    let params1 = new HttpParams().set('pdrno', pdr);
    return this.http.get("https://smartformulatorpdrwebservice4.azurewebsites.net/FillPDRCOAChemistry", { params: params1 })
  }
  loadmicrobiology(Pdrno) {
    var pdr: string = Pdrno;
    let params1 = new HttpParams().set('pdrno', pdr);
    return this.http.get("https://smartformulatorpdrwebservice4.azurewebsites.net/FillPDRCOAMicrobiology", { params: params1 })
  }

  Pdr_savedata(Pdrdetails) {
    var operat: string = "Save";
    var usernam: string = "admin";
    let params1 = new HttpParams().set('PDRDetail', Pdrdetails).set('operation', operat).set('username', usernam);
    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/Save_Update_PDR", { params: params1, responseType: 'text' })
  }
  Pdr_Update(pdrn: string, projn: string) {
    this.markFormTouched(this.login_formpdr);
    if (this.login_formpdr.valid) {

      this.Pdrdetails = [pdrn, projn, this.customercode, this.AssignedTo, this.currentstartDate, this.currentendDate, this.Status, this.currentDate, this.Priority, "false"]

      this.Pdr_saveupdateup(this.Pdrdetails).subscribe((Pdr_update) => {
        console.warn("Pdr_update", Pdr_update)
        this.Pdr_save_data = Pdr_update
      })
      if (this.Pdr_save_data == "Updated") {
        this.showAlert2();
      }

    }
    else {
      this.login_formpdr.controls['terms'].setValue(false);
    }
  }


  markFormTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) { control.markAsTouched(); this.markFormTouched(control); }
      else { control.markAsTouched(); };
    });
  };
  Pdr_saveupdateup(Pdrdetails) {
    var operat: string = "Update";
    var usernam: string = "admin";
    var pdrdetails: any = Pdrdetails;
    this.projectapprovalcheck = false;
    let params1 = new HttpParams().set('PDRDetail', pdrdetails).set('operation', operat).set('username', usernam);
    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/Save_Update_PDR", { params: params1, responseType: 'text' })

  }
  approvedprojectChange(event) {
    this.Approvedproject = event.target.checked.toString();
    if (this.Approvedproject == "true") {
      this.Approvedproject = "true"
      this.Approv = true

      //Method approve
    }
    else {
      this.Approvedproject = "false";
      this.Approv = false
    }
    this.apprproject(this.pdrno, this.projectname, this.Approvedproject).subscribe((apprproj) => {
      console.warn("assigneddatalo", apprproj)
      this.apprproj_data = apprproj
    })
  }
  loadassignusers( projectnam: string) {
    
    var proname = projectnam;
    let params1 = new HttpParams().set('ProjectName', proname);
    return this.http.get("https://smartformulatorpdrwebservice2.azurewebsites.net/Loadassigningusers", { params: params1 })
  }
  apprproject(pdr: string, projectnam: string, appro: string) {
    var pdrdata = pdr;
    var proname = projectnam;
    var approver = appro;
    var usernam: string = "admin";

    let params1 = new HttpParams().set('PDRNo', pdrdata).set('ProjectName', proname).set('username', usernam).set('chkprojectapproval1', approver);
    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/ProjectApproval", { params: params1 })
  }
  audittrackloadpdr(pdrno: string) {
    var PdrNo = pdrno;
    let params1 = new HttpParams().set('PDRNo', PdrNo)
    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/AuditTrackingLoad", { params: params1 });
  }
  changerequestload(pdrno: string) {
    var PdrNo = pdrno;
    let params1 = new HttpParams().set('PDRNo', PdrNo)
    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/ChangeRequestLoad", { params: params1 });
  }
  funcapprvsload(pjctnam: string) {
    var projectname = pjctnam;
    let params1 = new HttpParams().set('ProjectName', projectname)
    return this.http.get("https://smartformulatorpdrwebservice3.azurewebsites.net/FunctionalApprovers", { params: params1 });
  }
  productdevbriefload(pdrno: string) {
    var PdrNo = pdrno;
    let params1 = new HttpParams().set('PDRNo', PdrNo)
    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/ProductdevbriefLoad", { params: params1 });
  }
  emailalertload(pjctnam: string) {
    var projectname = pjctnam;
    let params1 = new HttpParams().set('ProjectName', projectname)
    return this.http.get("https://smartformulatorpdrwebservice2.azurewebsites.net/Emailalertlist", { params: params1 });
  }
  Srmgmntload() {
    return this.http.get("https://smartformulatorpdrwebservice3.azurewebsites.net/SrMgmntApprovers");
  }
  workflowload() {
    return this.http.get("https://smartformulatorpdrwebservice3.azurewebsites.net/TaskLoad");
  }
  Productdataload(pdrnumber: string) {
    var pdrnum = pdrnumber;
    let params1 = new HttpParams().set('PDRNo', pdrnum);
    return this.http.get("https://smartformulatorpdrwebservice2.azurewebsites.net/loadproductdetails", { params: params1 })
  }
  Loadcommnotes(pdrnumber: string) {
    var pdrnum = pdrnumber;
    let params1 = new HttpParams().set('PDRNo', pdrnum);
    return this.http.get("https://smartformulatorpdrwebservice2.azurewebsites.net/communicationnotes", { params: params1})
  }
  Loadfollowupnotes(pdrnumber: string) {
    var pdrnum = pdrnumber;
    let params1 = new HttpParams().set('PDRNo', pdrnum);
    return this.http.get("https://smartformulatorpdrwebservice2.azurewebsites.net/followupnotes", { params: params1 })
  }
  loadassignedformulations(PDRNo: string,userval:string) {
    var loadformulations = PDRNo;
    var user = userval;
    let params1 = new HttpParams().set('user', user).set('ClbUsersSelectedItem', user).set('PDRNo', loadformulations);
    return this.http.get("https://smartformulatorpdrwebservice2.azurewebsites.net/Userassignload", { params: params1, })
  }
 
  assignedformulationstable(PDRNo: string) {
    var loadformulations = PDRNo;
    let params1 = new HttpParams().set('PDRNo', loadformulations);
    return this.http.get("https://smartformulatorpdrwebservice3.azurewebsites.net/Loadassignformulationassigned", { params: params1, })
  }


  loadassignedformulationslabbatchticket(FormulaCode: string) {
    var loadformulationslabbatch = FormulaCode;
    let params1 = new HttpParams().set('FormulaCode', loadformulationslabbatch);
    return this.http.get("https://smartformulatorpdrwebservice3.azurewebsites.net/Loadassignformulationlabbatchticket", { params: params1, })
  }
  checkapprovers(pdrno: string, taskid: string, pjctname: string) {
    var Pdrno = pdrno;
    var taskID = taskid;
    var PjctName = pjctname;
    let params1 = new HttpParams().set('PDRNo', Pdrno).set('Taskid', taskID).set('ProjectName', PjctName);
    return this.http.get("https://smartformulatorpdrwebservice3.azurewebsites.net/loadcheckedapprovers", { params: params1 })
  }
  checkemail(pdrno: string, taskid: string, pjctname: string) {
    var Pdrno = pdrno;
    var taskID = taskid;
    var PjctName = pjctname;
    let params1 = new HttpParams().set('PDRNo', Pdrno).set('Taskid', taskID).set('ProjectName', PjctName);
    return this.http.get("https://smartformulatorpdrwebservice5.azurewebsites.net/loadcheckedemail", { params: params1 })
  }
  Followupnotesadd() {



    this.Pdraddfollowup().subscribe((Pdr_addfollow) => {
      console.warn("Pdr_addfollow", Pdr_addfollow)
      this.followupstatus = Pdr_addfollow
    })
    this.wait(2000);
    this.Loadfollowupnotes(this.pdrno).subscribe((Followupdetails) => {
      console.warn("Followupdetails", Followupdetails)
      this.Followupdata = Followupdetails


    })

    this.FollowupSubject = "";
    this.FollowupStatus = "";
  }
  selectfavalue(option, event) {
    var eventval1: any = event.target.checked;
    for (let laodformulaassign of this.loadformulationsassign) {
      if (laodformulaassign.TaskID == option.TaskID) {
        laodformulaassign.Assign = eventval1
        laodformulaassign.Task = option.Task
        laodformulaassign.EmailAlert = option.EmailAlert
      }

    }
    var checkformulationusername: any = this.loadformulationsassign;

    console.log(this.checkedList);
  }
  selectfavalue2(option, event) {
    var eventval2: any = event.target.checked;
  
    for (let laodformulaassign of this.loadformulationsassign) {
      if (laodformulaassign.TaskID == option.TaskID) {
        laodformulaassign.Assign = option.Assign
        laodformulaassign.Task = option.Task
        laodformulaassign.EmailAlert = eventval2
      }
    }
    var checkformulationusernames: any = this.loadformulationsassign;

    console.log(this.checkedLists2);

  }
  userdatacheck(option, event) {
    // this.loadassignedusersdata = loadassignedusers
    var eventval: any = event.target.checked;
    for (let laodassign of this.loadassignedusersdata) {
      if (laodassign.UserName == option.UserName) {
        laodassign.UserCheck = eventval
      }
      //if (this.checkedListcheck[i] == option.UserCheck) {
      // this.checkedListcheck.splice(i, 1);
      //}
    }
    var checkusername: any = this.loadassignedusersdata;
    //var checkusercheck: any = this.checkedListcheck;
    console.log(this.checkedList);
  }
  setvaluesassign(finished_searchdata: any) {
    this.i = 0;
    this.j = 0;

    for (let search of finished_searchdata) {
      this.AssigineduserdataList[this.i] = ([{
        assign: search.Assign,
        taskid: search.TaskID,
        task: search.Task,
        emailalerts: search.EmailAlert,

      }]);
      this.i++;
    }
  }
  setvaluesassign2(USER_searchdata: any) {
    this.i = 0;
    this.j = 0;

    for (let user of USER_searchdata) {



      this.userdataList[this.i] = ([{
        usercheck: user.UserCheck,
        ClbUsers: user.UserName,
      }]);
      this.i++;
    }
  }
  saveassignuserlist() {
    this.AssigineduserdataList = [];
    this.setvaluesassign(this.loadformulationsassign);
    this.setvaluesassign2(this.loadassignedusersdata);
    this.Assignuser_save().subscribe((assign_save) => {
      console.warn("assign_save", assign_save)
      this.assign_save_data = assign_save
    })
  }
  Assignuser_save() {
    var PDRNO = this.pdrno;
    var Project = this.projectname;
    var selecteduser = this.uservalue;
    var datalistdata: any = JSON.stringify(this.AssigineduserdataList);
    var datalistdata2: any = JSON.stringify(this.userdataList);
    let params1 = new HttpParams().set('PDRNo', PDRNO).set('ProjectName', Project).set('assigndatajson', datalistdata).set('ClbUsersjson', datalistdata2).set('SelectedClbUsers', selecteduser);
    return this.http.get("https://smartformulatorpdrwebservice5.azurewebsites.net/assignusersSave", { params: params1, responseType: 'text' })
  }
  Pdraddfollowup() {
    var PDRNO: string = this.pdrno;
    var fstatus: string = this.FollowupStatus;
    var user: any = "admin";
    var fsubject: string = this.FollowupSubject;
    if (this.FollowupID == '') {
      var Operation = "Add"
    }
    else { var Operation = "update" }
    var FollowupID = this.FollowupID;

    let params1 = new HttpParams().set('PDRNo', PDRNO).set('status', fstatus).set('username', user).set('SubjectFollowup', fsubject).set('operation', Operation).set('Statusfollowlineno', FollowupID);
    return this.http.get("https://smartformulatorpdrwebservice2.azurewebsites.net/addfollowupnotes", { params: params1, responseType: 'text' })

  }
 
  Followupnotesdelete() {

    this.Deletefollowup().subscribe((Pdr_deletefollow) => {
      console.warn("Pdr_deletefollow", Pdr_deletefollow)
      this.Fdelete = Pdr_deletefollow
    })
    this.wait(2000);
    this.Loadfollowupnotes(this.pdrno).subscribe((Followupdetails) => {
      console.warn("Followupdetails", Followupdetails)
      this.Followupdata = Followupdetails


    })
    this.FollowupID = '';
    this.FollowupSubject = "";
    this.FollowupStatus = "";
  }
  clearcommuncations() {
    this.FollowupID = '';
    this.FollowupSubject = "";
    this.FollowupStatus = "";
    this.CommuSubject = "";
    this.CommuStatus = "";
    this.CommuID = '';

  }
  Deletefollowup() {
    var StatusId: string = this.FollowupID;

    let params1 = new HttpParams().set('StatusFollowID', StatusId);
    return this.http.get("https://smartformulatorpdrwebservice2.azurewebsites.net/deletefollowupnotes", { params: params1, responseType: 'text' })
  }
   wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
   }
  Communotesadd() {

    this.Pdraddcommunication().subscribe((Pdr_addcom) => {
      console.warn("Pdr_addcom", Pdr_addcom)
      this.communistatus = Pdr_addcom
    })
    this.wait(3000);
    this.Loadcommnotes(this.pdrno).subscribe((CommunicationDetails) => {
      console.warn("CommunicationDetails", CommunicationDetails)
      this.communicationData = CommunicationDetails
    })
    this.CommuSubject = "";
    this.CommuStatus = "";
    this.CommuID = '';

  }
  Pdraddcommunication() {
    var PDRNO: string = this.pdrno;
    var cstatus: string = this.CommuStatus;
    var user: any = "admin";
    var csubject: string = this.CommuSubject;
    if (this.CommuID == '') {
      var Operation = "Add"
    }
    else { var Operation = "update" }
    var commulineno = this.CommuID;
    let params1 = new HttpParams().set('PDRNo', PDRNO).set('status', cstatus).set('username', user).set('Subjectcommuid', csubject).set('operation', Operation).set('Statuscommulineno', commulineno);
    return this.http.get("https://smartformulatorpdrwebservice2.azurewebsites.net/addcommunicationnotes", { params: params1, responseType: 'text' })

  }
  Communotesdelete() {

    this.DeleteCommunication().subscribe((Pdr_deletecommu) => {
      console.warn("Pdr_deletecommu", Pdr_deletecommu)
      this.cdelete = Pdr_deletecommu
    })
    this.wait(3000);
    this.Loadcommnotes(this.pdrno).subscribe((CommunicationDetails) => {
      console.warn("CommunicationDetails", CommunicationDetails)
      this.communicationData = CommunicationDetails
    })

    this.CommuSubject = "";
    this.CommuStatus = "";
    this.CommuID = '';
  }
  DeleteCommunication() {
    var StatusId: string = this.CommuID;
    let params1 = new HttpParams().set('StatusCommID', StatusId);
    return this.http.get("https://smartformulatorpdrwebservice2.azurewebsites.net/deletecommunicationnotes", { params: params1, responseType: 'text' })
  }
  setvaluespdr(workflow_pdr) {
    this.taskid = workflow_pdr.Taskid;
    this.task = workflow_pdr.Task;
    this.isLoadingchek = false;
    this.isLoadingchek2 = false;
    this.checkapprovers(this.pdrno, this.taskid, this.projectname).subscribe((approvercheckload) => {
      console.warn("approvercheckload", approvercheckload)
      this.apprvData = approvercheckload



    })
    this.checkemail(this.pdrno, this.taskid, this.projectname).subscribe((checkemailload) => {
      console.warn("checkemailload", checkemailload)
      this.emailData = checkemailload
    })

  }
  selectvalue(loadassignedusers)
  {
 
    this.uservalue = loadassignedusers;

    this.loadassignedformulations(this.pdrno, this.uservalue).subscribe((loadformulations) => {
      console.warn("loadformula", loadformulations)
      this.loadformulationsassign = loadformulations
    })
  }
  setvalues(Followupnotesload) {
    this.FollowupSubject = Followupnotesload.Subject;
    this.FollowupStatus = Followupnotesload.Status;
    this.FollowupID = Followupnotesload.LineNumber

  }
  setvalues2(Communicationnotesload) {
    this.CommuSubject = Communicationnotesload.Subject;
    this.CommuStatus = Communicationnotesload.Status;
    this.CommuID = Communicationnotesload.LineNumber



  }
  DateCalculations() {
    this.currentstartDate = new Date().toISOString().substring(0, 10);
    this.currentendDate = new Date().toISOString().substring(0, 10);
    this.currentDate = new Date().toISOString().substring(0, 10);
    var futureDateend = new Date();
    var futureDatestart = new Date();
    var pdrapprova = new Date();
    var formcreate = new Date();
    var formcreateend = new Date();
    var formcreateend2 = new Date();
    var pdrcreationdate = new Date();
    var qctestappro = new Date(formcreateend);
    var qctestapproend = new Date();
    var prodtestappro = new Date();
    var producttestapproend = new Date();
    var stabilitytestappo = new Date();
    var stabilitytestappoend = new Date();
    var coatestappo = new Date();
    var coatestappoend = new Date();
    var regappro = new Date();
    var regapproend = new Date();
    var ilappr = new Date();
    var ilapprend = new Date();
    var formproappr = new Date();
    var formproapprend = new Date();
    var formulaapprorej = new Date();
    var formulaapprorejend = new Date();
    var samplecreat = new Date();
    var samplecreatend = new Date();
    var sampleappr = new Date();
    var sampleapprend = new Date();
    var productaiza = new Date();
    var productaizaend = new Date();
    var pccapproval = new Date();
    var pccapprovalend = new Date();
    var pifapproval = new Date();
    var pifapprovalend = new Date();
    var prodapproval = new Date();
    var prodapprovalend = new Date();
    pdrcreationdate.setDate(pdrcreationdate.getDate() + 6);
    pdrapprova.setDate(pdrcreationdate.getDate());
    formcreate.setDate(pdrapprova.getDate() + 1);
    
    formcreateend.setDate(pdrapprova.getDate() + 69);

   // qctestappro = new Date(formcreateend.getTime() + (1000 * 60 * 60 * 24));
    qctestappro.setDate(pdrapprova.getDate() + 15);
    qctestapproend.setDate(pdrapprova.getDate() + 34);
    prodtestappro.setDate(pdrapprova.getDate() + 15);
    producttestapproend.setDate(pdrapprova.getDate() + 34);
    stabilitytestappo.setDate(pdrapprova.getDate() + 15);
    stabilitytestappoend.setDate(pdrapprova.getDate() + 44);
    coatestappo.setDate(pdrapprova.getDate() + 44);
    coatestappoend.setDate(pdrapprova.getDate() + 48);
    regappro.setDate(pdrapprova.getDate() + 48);
    regapproend.setDate(pdrapprova.getDate() + 57);
    ilappr.setDate(pdrapprova.getDate() + 57);
    ilapprend.setDate(pdrapprova.getDate() + 61);
    formproappr.setDate(pdrapprova.getDate() + 61);
    formproapprend.setDate(pdrapprova.getDate() + 65);
    formulaapprorej.setDate(pdrapprova.getDate() + 66);
    formulaapprorejend.setDate(pdrapprova.getDate() + 69);
    samplecreat.setDate(pdrapprova.getDate() + 70);
    samplecreatend.setDate(pdrapprova.getDate() + 76);
    sampleappr.setDate(pdrapprova.getDate() + 76);
    productaiza.setDate(pdrapprova.getDate() + 77);
    productaizaend.setDate(pdrapprova.getDate() + 83);
    pccapproval.setDate(pdrapprova.getDate() + 77);
    pccapprovalend.setDate(pdrapprova.getDate() + 83);
    pifapproval.setDate(pdrapprova.getDate() + 77);
    pifapprovalend.setDate(pdrapprova.getDate() + 83);
    prodapproval.setDate(pdrapprova.getDate() + 83);
    prodapprovalend.setDate(pdrapprova.getDate() + 83);
  
    var diff = Math.abs(pdrcreationdate.getTime() - futureDatestart.getTime());
   // this.pdrcreationdays  = Math.ceil(diff / (1000 * 3600 * 24) );
    var formulacreationdate = new Date();
    this.qctestapprovals = qctestappro.toISOString().substring(0, 10);
    this.formulacreationend = formcreateend.toISOString().substring(0, 10);
    this.formulacreatedate = formulacreationdate.toISOString().substring(0, 10);
    this.pdrcreatedate = pdrcreationdate.toISOString().substring(0, 10)
    this.pdrapproval = pdrapprova.toISOString().substring(0, 10);
    this.pdapprovalend = pdrapprova.toISOString().substring(0, 10);
    this.protestapprend = producttestapproend.toISOString().substring(0, 10);
    this.qctestapprovalsend = qctestapproend.toISOString().substring(0, 10);
    this.producttestapprovals = prodtestappro.toISOString().substring(0, 10);
    this.stabilitytestapproval = stabilitytestappo.toISOString().substring(0, 10);
    this.stabilityapprovalend = stabilitytestappoend.toISOString().substring(0, 10);
    this.coateatappro = coatestappo.toISOString().substring(0, 10);
    this.coatestapproend = coatestappoend.toISOString().substring(0, 10);
    this.regulatoryappro = regappro.toISOString().substring(0, 10);
    this.regulatoryapproend = regapproend.toISOString().substring(0, 10);
    this.ilapprappr = ilappr.toISOString().substring(0, 10);
    this.ilapprapprend = ilapprend.toISOString().substring(0, 10);
    this.formulaapprorejection = formulaapprorej.toISOString().substring(0, 10);
    this.formulaapprorejectionend = formulaapprorejend.toISOString().substring(0, 10);
    this.formprocedureappr = formproappr.toISOString().substring(0, 10);
    this.formprocedureapprend = formproapprend.toISOString().substring(0, 10);
    this.samplecreation = samplecreat.toISOString().substring(0, 10);
    this.samplecreationend = samplecreatend.toISOString().substring(0, 10);
    this.sampleapproval = sampleappr.toISOString().substring(0, 10);
    this.sampleapprovalend = sampleappr.toISOString().substring(0, 10);
    this.productization = productaiza.toISOString().substring(0, 10);
    this.productizationend = productaizaend.toISOString().substring(0, 10);
    this.pccapprovaldata = pccapproval.toISOString().substring(0, 10);
    this.pccapprovalenddata = pccapprovalend.toISOString().substring(0, 10);
    this.pifapprovaldata = pifapproval.toISOString().substring(0, 10);
    this.pifapprovalenddata = pifapprovalend.toISOString().substring(0, 10);
    this.pdapproval = prodapproval.toISOString().substring(0, 10);
    this.pdapprovalend = prodapprovalend.toISOString().substring(0, 10);
    
    this.formulacreation = formcreate.toISOString().substring(0, 10);
    futureDateend.setDate(futureDateend.getDate() + 89);
    this.stagestartDate = formatDate((this.currentDate), 'MM/dd/yyyy', 'en-US');
    this.stageendDate = formatDate((this.pdapprovalend), 'MM/dd/yyyy', 'en-US');
  }

  ngOnInit() {

    this.DateCalculations();
    //this.myForm = new FormGroup({
    //  'presentDate': new FormControl((new Date()).toISOString().substring(0, 10)),
    //});
    this.assignedtodataload().subscribe((assigneddatalo) => {
      console.warn("assigneddatalo", assigneddatalo)
      this.assigneddatalo_data = assigneddatalo
    })
    this.pdrauto().subscribe((pdrautogenerate) => {
      console.warn("pdrautogenerate", pdrautogenerate)
      this.pdrautogenerate_data = pdrautogenerate
      this.pdrno = this.pdrautogenerate_data
    })
    this.workflowload().subscribe((loadworkflow) => {
      console.warn("loadworkflow", loadworkflow)
      this.datatask = loadworkflow
    })
   
    //this.currentstartDate = new Date().toISOString().substring(0, 10);
    //this.currentendDate = new Date().toISOString().substring(0, 10);
    //this.currentDate = new Date().toISOString().substring(0, 10);
    //var futureDateend = new Date();
    //var futureDatestart = new Date();
    //var pdrcreationdate = new Date();
    //pdrcreationdate.setDate(pdrcreationdate.getDate() + 7);
    //this.pdrcreatedate = pdrcreationdate.toISOString().substring(0, 10)
    //futureDateend.setDate(futureDateend.getDate() + 90);
    //this.stagestartDate = formatDate(new Date(futureDatestart), 'MM/dd/yyyy', 'en-US');
    //this.stageendDate = formatDate(new Date(futureDateend), 'MM/dd/yyyy', 'en-US');
    this.projectapprovalcheck = true;
    this.datecheck = false;
    this.isLoadingspec = true;
  }
}
export class Data {
  assign: string;
  taskid: string;
  task: string;
  emailalerts: string;

}
export class PDRDetail1 {
  pdrdatetime: string;
  ProjectName: string;
  CustomerCode: string;
  AssignedTo: string;
  ProjDetails: string;
  Revenue: string;
  Class: string;
  StartDate: string;
  CompletedDate: string;
  Requirements: string;
  Status: string;
  ProjectResults: string;
  lowph: string;
  oldlowph: string;
  highph: string;
  lowviscosity: string;
  highviscosity: string;
  appearance: string;
  color: string;
  odor: string;
  comments: string;
  viscosityunit: string;
  priority: string;
  SpecificGravity: string;
  Texture: string;
  HighSpecificGravity: string;
  ViscosityMethod: string;
  ViscosityFactor: string;
  Speed: string;
  Spindle: string;
  VTime: string;
  AddedDT: string;
  AddedBy: string;
  oldhighph: string;
  oldlowviscosity: string;
  oldhighvisc: string;
  oldlowsp: string;
  oldhighsp: string;
  oldappearance: string;
  oldcolor: string;
  oldodor: string;
  texture: string;
  oldtexture: string;
  duration: string;
  UpdatedBy: string;
  chkBottle: string;
  chkTube: string;
  chkWand: string;
  chkStick: string;
  chkJar: string;
  chkPacket: string;
  currentpdct: string;
  IntendedEnd: string;
  Estimated: string;
  Countries: string;
  size1: string;
  size2: string;
  size3: string;
  gallons: string;
  bulkonly: string;
  Other: string;
  productdescription: string;
  ProductConcept: string;
  SpecialNotes: string;
  musthave: string;
  ingredient: string;
  desired: string;
  marketing: string;
  Color2: string;
  scent: string;
  anycolor: string;
  brand: string;
  benchmark: string;
  compprdoduct: string;
  developmentnotes: string;
  target: string;
  Claims: string;
  samplereq: string;
  strProductDevBrief: string;
}
export class Data2 {
  ClbUsers: string;
  usercheck: string;
}
