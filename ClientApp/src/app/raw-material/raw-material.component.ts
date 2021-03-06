import { Component, OnInit } from '@angular/core';
import { AddPrefixComponent } from './add-supplier/add-prefix/add-prefix.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchINCINameComponent } from './search-inci-name/search-inci-name.component';
import { RawSearchSupplierComponent } from '../raw-search-supplier/raw-search-supplier.component';
import { CategoryMaintenanceComponent } from './category-maintenance/category-maintenance.component';
import { SubCategoryMaintenanceComponent } from './sub-category-maintenance/sub-category-maintenance.component';
import { LoadPropertyComponent } from './load-property/load-property.component';
import { IngredientSearchComponent } from './ingredient-search/ingredient-search.component';
import { AddCASDetailsComponent } from './add-cas-details/add-cas-details.component';
import { RiskPhrasesComponent } from './risk-phrases/risk-phrases.component';
import { SaftyPhrasesComponent } from './safty-phrases/safty-phrases.component';
import { RMVPComponent } from './rm-vp/rm-vp.component';
import { FunctionSearchComponent } from './function-search/function-search.component';
import { AddFunctionComponent } from './add-function/add-function.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchSupplierComponent } from './add-supplier/search-supplier/search-supplier.component';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { formatDate } from '@angular/common';

export interface DialogData {
  itemlist: string;
  name: string;
}

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.css']
})
export class RawMaterialComponent implements OnInit {
  itemlist = [];
  Approv: boolean;
  safetylistdata: string = '';
  datarawcategoryload: any;
  name: string;
  gmconverter: any = 3785.2286;
  ccconverter: any = 453.5924;
  gravity: any='1' ;
  abb: string = '';
  abbdescription: string = '';
  formname: string;
  datasaveabbraw: any;
  defaultdataprefix: any;
  risklist = [];
  searchdata = [];
  kgm3: any;
  lb_gal: any;
  risklistdata: string = '';
  inciname: string;
  itemli: string = '';
  itemcodehidd: string = '';
  supp_name: string;
  tradn: string ='';
  val2: any;
  incicode: string;
  datarawpropertyload: any;
  Rawmaterialdetails: any = [];
  rawmaterial_update_data: any;
  updatesuccess: string = '';
  defaultUOMload_data: any;
  Rawdata: any;
  GMOYesOrNo: string='False';
  GlutenYesOrNo: string='False';
  Halal: string='No';
  itemcode: string;
  generalitemcod: string;
  description: string;
  ingredienttradeName: string;
  categoryId: string='0';
  CategoryName: string='';
  Status: string='0';
  SupplierKey: string;
  SubCategoryName: string ='';
  subCategoryId: string='0';
  statusId: string='0';
  supercededBy: string;
  unitCost: string='0.001';
  costUnit: string='';
  costDt: string='';   //
  notes: string = '';
  deleterawmaterialmain: any;
  AlertRemarks: string='';
  EURiskPhrases: string='';
  vendorcode: string;
  hMISHealth: string='';
  hMISFlammability: string='0';
  hMISPhysical: string='0';
  hMISPersonal: string='';
  nFPAHealth: string='0';
  nFPAFlammability: string='0';
  supercededDate: string='';
  rmAssayValue: string='0';
  ebsNumber: string='';
  lastPOCost: string='0.001';
  drugName: string='';
  sku: string='';
  COAPath: string='';
  MSDSPath: string='';
  defaultUnit: string='0';
  LastPOUnit: string = '0';
  reorderQty: string = '0';
  origin: string='';
  concentration: string='0';
  RMSource: string='';
  proleadtime: string='0';
  preloadtime: string='0';
  postleadtime: string='0';
  rmleadtime: string='0';
  sg: string='0';
  costdate: string='';
  LastPODt: string='';
  date: string;
  suppliername: string;
  supplierkey: string;
  suppliercode: string;
  supp_code: string;
  suppkey: string;
  flashPtCelsious: string='';
  NFPA_Health: string='0';
  FunctionCode: string='';
  NFPA_Flammability: string='0';
  nFPASpecial: string='';
  flashPtMethod: string='';
  flashPtOverride: string='false';
  flashPtFlammable: string='';
  NPACertified: string='N';
  nFPAReactivity: string = '0';
  monograph: string='No';
  Kosher: string='No';
  IncidIngredient: string='No';
  Exemptornot: string='No';
  PhEurName: string='';
  MOQ: string='0';
  BlendProcedure: string='';
  EUSafetyPhrases: string='';
  Approved: string='False';
  VOCContributor: string='No';
  PreviousCost: string='';
  auditdata: any;
  Restriction: string='';
  supplierdata: any;
  Code: string;
  Name: string;
  address: string = '';
  Email: string ='';
  phoneno: string = '';
  Fax: string = '';
  web: string = '';
  sabbrev: string = '';
  contactperson: string = '';
  contactno: string = '';
  distributor: string = '';
  note: string = '';
  approved: string = 'False';
  city: string = '';
  state: string = '';
  country: string = '';
  zip: string = '';
  fob: string;
  terms: string;
  ifradata: any;
  shipvia: string;
  expaccount: string;
  suppstatus: string;
  prefered: string;
  othershipvia: string;
  rating: string;
  IUPACName: string='';
  Shipto: string;
  casdata: any;
  INCIName: string;
  itemli2: string;
  tradn2: string;
  supp_name2: string;
  incicode2: string;
  suppkey2: string;
  Blenddata: any;
  Blend_save_data: any;
  percentvalue: number;
  totalpercent: number = 0;
  Balance: number = 100;
  Blenddatadlt: any;
  Percentage: string;
  propertydata: any;
  login_form: FormGroup;
  public isVisible: boolean = false;
  public isVisible2: boolean = false;
  public isVisible3: boolean = false;
  FunctionName: string;
  functioncode: string = "";
  Functiondata: any;
  funcddlt: string;
  funnamesdlt: string;
  function1: string[];
  itemcodevalue: any;
  casdelete: any;
 
  icode: string;
  caasno: string;
  descptn: string;
  elinc: string;
 
  savecapropimpu: string;

  Sourceinfo: string='';
  cas: string='';
  amendment: string='';
  femaNo: string='';
  RFIMID: string='';
  Category1A: string='0';
  Category1B: string = '0';
  Category2A: string = '0';
  Category3A: string = '0';
  Category3B: string = '0';
  Category3C: string = '0';
  Category3D: string = '0';
  Category4A: string = '0';
  Category4B: string = '0';
  Category4C: string = '0';
  Category4D: string = '0';
  Category5A: string = '0';
  Category6A: string = '0';
  Category7A: string = '0';
  Category7B: string = '0';
  Category8A: string = '0';
  Category8B: string = '0';
  Category9A: string = '0';
  Category9B: string = '0';
  Category9C: string = '0';
  Category10A: string = '0';
  Category10B: string = '0';
  Category11A: string = '0';
  Category11B: string = '0';
  isifrafilled: string = '0';
  isifraaudit: string = '0';
  itemcodvalue: any;
  defaultlastpoCost: string;
  regulatoryaudittrackingload: any;
  canadadataload: any;
  canadaLoad: any;
  usload: any;
  austriliaload: any;
  euload: any;
  japanload: any;
  chinaload: any;
  CAprop65load: any;
  CAproprestrictionsload: any;
  doc1: any;
  subitemcode: any;
  subinciname: any;
  capropimpuritiestableload: any;
  ppm: any;
  delclientus_loaddata: any;
  delclientcappro65_loaddata: any;
  delclientchina_loaddata: any;
  delclientjapan_loaddata: any;
  delclienteu_loaddata: any;
  delclientcanada_loaddata: any;
  Inciid: any;
  username1: any;
  INCIName1: any;
  Itemcode1: any;
  rawmaterial_save_data: string;
 
  AddedBy: string = '';
  AddedDt: string = '';
  ApprovalCode: string = '';
  //AlertRemarks: string;
  UpdatedBy: string = '';
  UpdatedDt: string = '';
  INNName: string = '';
  RMAbbreviation: string = '';
  MOQunit: string = '';
  NPAExpiry: string = '';
  PreviousVenderCode: string = '';
  SupplierRMNo: string = '';
  StatusReason: string = '';
  CurrSupplierPriority: string = '0';
  PrevSupplierPriority: string = '0';
  // LastPODt: string;
  IsBlend: string = 'False';
  Hazardous: string = 'No';
  ReOrderUnit: string = '';
  flashPtGTLT: string = '';

  
  oldCost: string = '';
  oldStdCost: string = '';
  datarawsubcategoryload: any;


  RMdataList: Datasave[][] = [];
  dataList: RawmaterialData[][] = [];
  DataListAudit: AuditData[][] = [];
  DataListIFRA: IFRAdata[][] = [];
  casdataList: Datacas[][] = [];
  i: number;
  j: number;

  lastpodataload: any;
  unitcostname: string;
  defaaltunitname: string;
  lastpounitname: string;
  deliveredprice: string;
  cmbpriority: string;
  oldpriority: string;
  oldpriorno: string;
  active: any;
  shippingcost: string = '0';

  standardprice: string = '0.001';
  shippingprize: string = '0.000';
  standardpriceunit: string = '0';
  standardpricedate: string = '';
  shippingpriceunit: string = '0';
  shippingpricedate: string = '';
  lastpounit: string;
  defaultstandardprice: string;
  defaultshippingprize: string;
  defaultdeliveredprice: string;

  constructor(public dialog: MatDialog, private http: HttpClient, private Datashare: DataShareServiceService, fb: FormBuilder)
  {
    this.login_form = fb.group({
      'ingricode': ['', Validators.required],
      'incinam': ['', Validators.required],
      'rmitem': ['', Validators.required],
      'supkey': ['', Validators.required],
      'supname': ['', Validators.required],

      'terms': [false]
    });
  }
  AddPrefixPopUp(): void {

    const dialogRef = this.dialog.open(AddPrefixComponent, {
      width: '80%', height: '90%',
      disableClose: true,
    });
  }
  radioChangeIncidIngredient(event) {
    this.IncidIngredient = event.value;

  }
  radioChangemonograph(event) {
    this.monograph = event.value;
    if (this.monograph == "true") {
      this.monograph = "Yes"
      if (this.functioncode == "" || this.functioncode == undefined) { this.functioncode = "ACTIVES" }
      else
      {
        this.functioncode = this.functioncode +"/"+ "ACTIVES" ;
      }
      this.Functionload(this.functioncode).subscribe((Functiondetailslload) => {
        console.warn("Functiondetailslload", Functiondetailslload)
        this.Functiondata = Functiondetailslload
      })
    }
    else {
      this.monograph = "No"
      this.funcddlt = "/ACTIVES"
      this.function1 = this.functioncode.split(this.funcddlt)
      this.functioncode = this.function1[0]
      this.functioncode = this.functioncode.replace("//", "/");
      if (this.functioncode == "") { }

      this.Functionload(this.functioncode).subscribe((Functiondetailslload) => {
        console.warn("Functiondetailslload", Functiondetailslload)
        this.Functiondata = Functiondetailslload
      })
    }
  }


  radioChangeExemptornot(event) {
    this.Exemptornot = event.value;

  }
  radioChangeGMOYesOrNo(event) {
    this.GMOYesOrNo = event.value;

  }
  radioChangeGlutenYesOrNo(event) {
    this.GlutenYesOrNo = event.value;

  }
  radioChangeNPACertified(event) {
    this.NPACertified = event.value;

  }
  radioChangehalal(event) {
    this.Halal= event.value;

  }
  radioChangekosher(event) {
    this.Kosher = event.value;

  }
  hazardousChange(event) {
    this.Hazardous = event.value;
  }
  blurEvent(event: any) {
    this.gravity=0;
     this.gravity = event.target.value;

    
     var total = ((this.gravity) * this.gmconverter) / this.ccconverter;
    this.lb_gal = total.toFixed(3);
     this.kgm3 = this.gravity * 1000;
  }
  blurEvent2(event: any) {
    this.lb_gal = 0;
    this.lb_gal = event.target.value;
    this.gravity = 0;

    var total = ((this.lb_gal) * this.ccconverter) / this.gmconverter;
    this.gravity = total.toFixed(3);
    this.kgm3 = this.gravity;
   
  }
  uomChange(event) {
    this.defaultUnit = event.target.value;
    this.LastPOPriceload(this.defaultUnit, this.defaultlastpoCost).subscribe((lastpoload) => {
      console.warn("lastpoload", lastpoload)
      this.lastpodataload = lastpoload
      this.lastPOCost = this.lastpodataload;

      var LastPOCost: Number = Number(this.lastPOCost);
      this.lastPOCost = (LastPOCost.toFixed(3)).toString();

      this.LastPOUnit = this.defaultUnit;
    })
   
  }
  stdpriceChange(event) {
    this.standardpriceunit = event.target.value;
    this.shippingpriceunit = this.standardpriceunit;
    this.costUnit = this.standardpriceunit;
    this.defaultUnit = this.standardpriceunit;
    this.LastPOUnit = this.standardpriceunit;

    this.LastPOPriceload(this.defaultUnit, this.defaultlastpoCost).subscribe((lastpoload) => {
      console.warn("lastpoload", lastpoload)
      this.lastpodataload = lastpoload
      this.lastPOCost = this.lastpodataload;

      var LastPOCost: Number = Number(this.lastPOCost);
      this.lastPOCost = (LastPOCost.toFixed(3)).toString();
    })

  }
  blurEventpreload(event: any) {
    this.preloadtime = event.target.value;
    var total = Number(this.preloadtime) + Number(this.proleadtime) + Number(this.postleadtime);
    this.rmleadtime = total.toString();
  }
  blurEventprolead(event: any) {
    this.proleadtime = event.target.value;
    var total = Number(this.preloadtime) + Number(this.proleadtime) + Number(this.postleadtime);
    this.rmleadtime = total.toString();
  }
  blurEventpostlead(event: any) {
    this.postleadtime = event.target.value;
    var total = Number(this.preloadtime) + Number(this.proleadtime) + Number(this.postleadtime);
    this.rmleadtime = total.toString();
  }
  blurdeliveredcost(event: any) {
    var shipprice1: Number = Number(event.target.value);
    this.shippingprize = (shipprice1.toFixed(3)).toString();
    var total = Number(this.standardprice) + Number(this.shippingprize);
    this.unitCost = total.toFixed(3);
  }
  blurdelstdcost(event: any) {
    var stdprice1: Number = Number(event.target.value);
    
      this.standardprice = (stdprice1.toFixed(3)).toString();
    var total = Number(this.standardprice) + Number(this.shippingprize);
    this.unitCost = total.toFixed(3);
  }
  blurlastpo(event: any) {
    var lastpoprice1: Number = Number(event.target.value);
    this.lastPOCost = (lastpoprice1.toFixed(3)).toString();
    
  }
 

  Searchsupplierpopup(): void {

    const dialogRef = this.dialog.open(SearchSupplierComponent, {
      width: '60%', height: '70%', disableClose: true
    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.suppkey = result[0];
      this.supp_name = result[1];
      this.supp_code = result[2];

    });
  }

  //SearchINCIpopup(): void {

  //  const dialogRef = this.dialog.open(SearchINCINameComponent, {
  //    /*width: '940px', height: '650px',*/ disableClose: true,
  //    width: '100%',
  //    minHeight: 'calc(100vh - 90px)',
  //    height: 'auto'
  //  });
  //}
  OpenSubCategory(): void {
    const dialogRef = this.dialog.open(SubCategoryMaintenanceComponent , {
      width: '80%', height: '90%', disableClose: true
    });
  }
  opensearchinciname(): void {
    const dialogRef = this.dialog.open(SearchINCINameComponent, {
      width: '80%', height: '90%', disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.inciname = result[0];
      this.itemli = result[1];
      this.tradn = result[2];
      this.supp_name = result[3];
      this.incicode = result[4];
     // this.suppkey = result[5];
      this.loadrawproperty(this.incicode);

      this.Rawmaterialload(this.incicode).subscribe((rawmaterialload) => {
        console.warn("rawmaterialload", rawmaterialload)
        this.Rawdata = rawmaterialload
        this.Rawmaterialdataload(this.Rawdata)
      })
      this.rawmaterialauditload(this.incicode).subscribe((auditload) => {
        console.warn("auditload", auditload)
        this.auditdata = auditload
      })
      this.rawmaterialsupplierload(this.incicode).subscribe((supplierload) => {
        console.warn("supplierload", supplierload)
        this.supplierdata = supplierload
        this.supplierdataload(this.supplierdata)
      })
      if (this.incicode != null) {
        this.CASload(this.incicode).subscribe((casload) => {
          console.warn("casload", casload)
          this.casdata = casload

        })
      }
      this.canadadataaload(this.inciname).subscribe((loadrawmaterialcanada) => {
        console.warn("loadcanada", loadrawmaterialcanada)
        this.canadaLoad = loadrawmaterialcanada
      })
      this.usloaddata(this.inciname).subscribe((loadrawmaterialus) => {
        console.warn("loadrawmaterialus", loadrawmaterialus)
        this.usload = loadrawmaterialus
      })
      this.AUSloaddata(this.inciname).subscribe((loadrawmaterialAUS) => {
        console.warn("loadrawmaterialAUS", loadrawmaterialAUS)
        this.austriliaload = loadrawmaterialAUS
      })
      this.EUloaddata(this.inciname).subscribe((loadrawmaterialEU) => {
        console.warn("loadrawmaterialEU", loadrawmaterialEU)
        this.euload = loadrawmaterialEU
      })
      this.japanloaddata(this.inciname).subscribe((loadrawmaterialjapan) => {
        console.warn("loadrawmaterialjapan", loadrawmaterialjapan)
        this.japanload = loadrawmaterialjapan
      })
      this.Chinaloaddata(this.inciname).subscribe((loadrawmaterialChina) => {
        console.warn("loadrawmaterialChina", loadrawmaterialChina)
        this.chinaload = loadrawmaterialChina
      })
      this.CAPROP65loaddata(this.inciname).subscribe((loadrawmaterialCAPROP65) => {
        console.warn("loadrawmaterialCAPROP65", loadrawmaterialCAPROP65)
        this.CAprop65load = loadrawmaterialCAPROP65
      })
      this.CAproprestrictionsloadloaddata(this.inciname).subscribe((loadrawmaterialCAproprestrictions) => {
        console.warn("loadrawmaterialCAproprestrictions", loadrawmaterialCAproprestrictions)
        this.CAproprestrictionsload = loadrawmaterialCAproprestrictions
      })
      this.regulatoryaudittracking(this.inciname).subscribe((loadrawmaterialregulatoryaudit) => {
        console.warn("loadrawmaterialregulatoryaudit", loadrawmaterialregulatoryaudit)
        this.regulatoryaudittrackingload = loadrawmaterialregulatoryaudit
      })
      this.IFRAload(this.inciname, this.itemli).subscribe((ifraload) => {
        console.warn("ifraload", ifraload)
        this.ifradata = ifraload
        this.ifradetails(this.ifradata)
      })
      this.Blendload(this.incicode).subscribe((Blenddetailslload) => {
        console.warn("Blenddetailslload", Blenddetailslload)
        this.Blenddata = Blenddetailslload
        this.Blenddataload(this.Blenddata)



      })
      this.propertydataload(this.incicode).subscribe((propertydataload) => {
        console.warn("propertydataload", propertydataload)
        this.propertydata = propertydataload

      })
      this.CASload(this.incicode).subscribe((casload) => {
        console.warn("casload", casload)
        this.casdata = casload
        this.itemcodevalue = this.incicode;
        this.Datashare.sendItemcodeno(this.itemcodevalue);
      })
    
    });
  }
  Blenddataload(blenddetails: any) {
    this.totalpercent = 0;
    for (let Blenditem of blenddetails) {
      this.percentvalue = Blenditem.Percentage;
      this.totalpercent = + this.totalpercent + +this.percentvalue;
      this.Balance = (100 - this.totalpercent);
    }
  }
  Blenddelete() {
    this.Blenddlt().subscribe((Blenddlte) => {
      console.warn("Blenddlte", Blenddlte)
      this.Blenddatadlt = Blenddlte
    })

    this.Blendload(this.incicode).subscribe((Blenddetailslload) => {
      console.warn("Blenddetailslload", Blenddetailslload)
      this.Blenddata = Blenddetailslload
      this.Blenddataload(this.Blenddata)
    })
  }
  setvalues(blebddetails: any) {
    this.INCIName = blebddetails.INCIName;
    this.Percentage = blebddetails.Percentage;
    this.incicode2 = blebddetails.IngredientCode;



  }
  Blenddlt() {
    var blendcd = this.incicode;
    var ingredientcode = this.incicode2;
    var Usename = "admin";
    var Percentage = this.Percentage;
    var inciname = this.INCIName;
    let params1 = new HttpParams().set('IngredientCode', ingredientcode).set('Itemcode', blendcd).set('username', Usename).set('Percentage', Percentage).set('inciname', inciname);
    return this.http.get("https://smartformulatorrawmaterialswebservice3.azurewebsites.net/BlendDeleteIngredient", { params: params1, responseType:'text' })
  }
  Blendsaveupdate(prcntg: string) {
    if (parseInt(prcntg) > 100) {
      // this.showAlert4();
    }
    else if ((this.Balance - parseInt(prcntg)) < 0) {
      //this.showAlert4();
    }
    else {
      this.blendsaveup(prcntg).subscribe((Blenddatasaveup) => {
        console.warn("Blenddatasaveup", Blenddatasaveup)
        this.Blend_save_data = Blenddatasaveup
      })

      this.Blendload(this.incicode).subscribe((Blenddetailslload) => {
        console.warn("Blenddetailslload", Blenddetailslload)
        this.Blenddata = Blenddetailslload
        this.Blenddataload(this.Blenddata)
      })
    }
  }
  canadadataaload(INCIName: string) {
    var inci = INCIName;
    let params1 = new HttpParams().set('INCIName', inci)
    return this.http.get(" https://smarformulatorrawmaterialwebservice5.azurewebsites.net/CanadaBindLoad", { params: params1 });
  }
  usloaddata(INCIName: string) {
    var inci = INCIName;
    let params1 = new HttpParams().set('INCIName', inci)
    return this.http.get(" https://smarformulatorrawmaterialwebservice5.azurewebsites.net/USBindLoad", { params: params1 });
  }
  AUSloaddata(INCIName: string) {
    var inci = INCIName;
    let params1 = new HttpParams().set('INCIName', inci)
    return this.http.get(" https://smarformulatorrawmaterialwebservice5.azurewebsites.net/australiaBindLoad", { params: params1 });
  }
  EUloaddata(INCIName: string) {
    var inci = INCIName;
    let params1 = new HttpParams().set('INCIName', inci)
    return this.http.get(" https://smarformulatorrawmaterialwebservice5.azurewebsites.net/EUBindLoad", { params: params1 });
  }
  japanloaddata(INCIName: string) {
    var inci = INCIName;
    let params1 = new HttpParams().set('INCIName', inci)
    return this.http.get(" https://smarformulatorrawmaterialwebservice5.azurewebsites.net/japanBindLoad", { params: params1 });
  }
  Chinaloaddata(INCIName: string) {
    var inci = INCIName;
    let params1 = new HttpParams().set('INCIName', inci)
    return this.http.get(" https://smarformulatorrawmaterialwebservice5.azurewebsites.net/ChinaBindLoad", { params: params1 });
  }
  CAPROP65loaddata(INCIName: string) {
    var inci = INCIName;
    let params1 = new HttpParams().set('INCIName', inci)
    return this.http.get(" https://smarformulatorrawmaterialwebservice5.azurewebsites.net/CAPROPDirect", { params: params1 });
  }
  CAproprestrictionsloadloaddata(INCIName: string) {
    var inci = INCIName;
    let params1 = new HttpParams().set('INCIName', inci)
    return this.http.get("https://smarformulatorrawmaterialwebservice5.azurewebsites.net/CAPROPRestrictionsss", { params: params1 });
  }
  regulatoryaudittracking(INCIName: string) {
    var inci = INCIName;
    let params1 = new HttpParams().set('INCIName', inci)
    return this.http.get("https://smarformulatorawmaterialwebservice6.azurewebsites.net/loadaudittrackingregulatory", { params: params1 });
  }
  approvedChange(event) {
    this.Approved = event.target.checked.toString();
    if (this.Approved == "true") {
      this.Approved = "true"
      this.Approv = true
    }
    else {
      this.Approved = "false";
      this.Approv = false
    }
  }


  blendsaveup(Percentage: any) {
    var Itemcode = this.incicode;
    var Inciname = this.inciname;
    var Blendcode = this.incicode2;
    var Blendname = this.INCIName;
    var percentage = Percentage;
    let params1 = new HttpParams().set('itemcode', Itemcode).set('INCINAME', Inciname).set('Blencode', Blendcode).set('Blendname', Blendname).set('Percentage', percentage);
    return this.http.get("https://smartformulatorrawmaterialswebservice3.azurewebsites.net/Update_insert_Blend", { params: params1, responseType: 'text' })
  }
  //showAlert4(): void {
  //  this.isVisible4 = true;
  //  setTimeout(() => this.isVisible4 = false, 5000)
  //}
  Blendload(itemcode: string) {
    var itemcode = itemcode;
    let params1 = new HttpParams().set('Itemcode', itemcode);
    return this.http.get("https://smartformulatorrawmaterialswebservice3.azurewebsites.net/Loadblenddetails", { params: params1, })
  }
  propertydataload(itemcode: string) {
    var itemcode = itemcode;
    let params1 = new HttpParams().set('Itemcode', itemcode);
    return this.http.get("https://smartformulatorrawmaterialwebservice4.azurewebsites.net/LoadPhysicalProperty", { params: params1, })
  }
  opensearchincinameforimpurities(): void {
    const dialogRef = this.dialog.open(SearchINCINameComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.doc1 = result[0];
      this.itemli = result[1];
      this.supp_name = result[3];
      this.subitemcode = result[4];
      this.subinciname = result[0];



      //this.capropimpuritiesload(this.itemli, this.doc1, this.supp_name).subscribe((loadrawmaterialregulatoryaudit) => {
      // console.warn("loadrawmaterialregulatoryaudit", loadrawmaterialregulatoryaudit)
      // this.capropimpuritiestableload = loadrawmaterialregulatoryaudit
      //})
    });
  }
  
  saveupimpurities(BlendCde, BName, ingrdient, INCINames, ppms, suupname) {
    var BlendCode = BlendCde;
    var Blendname = BName;
    var IngredientCode = ingrdient;
    var INCIName = INCINames;
    var ppm = ppms;
    var SupplierName = suupname;
    var username = "admin";
    var txtname = "";
    var txtitemcode = "";
    //var oldterms = this.oldTerms;
    let params1 = new HttpParams().set('txtGenItemCode', BlendCode).set('txtdescription', Blendname).set('txtimicodesub', IngredientCode).set('txtiminciname', INCIName).set('txtname', SupplierName).set('txtppm', ppm).set('txtitemcode', txtitemcode).set('username', username);
    return this.http.get("https://smarformulatorawmaterialwebservice6.azurewebsites.net/Saveingredientss", { params: params1, responseType: "text" })
  }

  capropimpuritiesload(itemli: string, INCIName: string, supp_name: string) {
    var rmitem = itemli;
    var inci = INCIName;
    var suppliername = supp_name;
    var olditmecode = itemli;
    var oldinciname = INCIName;
    var previoussuppliername = supp_name;
    let params1 = new HttpParams().set('RMitemcode', rmitem).set('INCIName', inci).set('SupplierName', suppliername).set('oldItemCode', olditmecode).set('oldINCIName', oldinciname).set('previoussuppliername', previoussuppliername)
    return this.http.get("https://smarformulatorawmaterialwebservice6.azurewebsites.net/caprop65impuritiesload", { params: params1 });
  }
  opensearchinciname1(): void {
    const dialogRef = this.dialog.open(SearchINCINameComponent, {
      width: '80%', height: '90%', disableClose: true
    });



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.INCIName = result[0];
      this.itemli2 = result[1];
      this.tradn2 = result[2];
      this.supp_name2 = result[3];
      this.incicode2 = result[4];
      this.suppkey2 = result[5];





    });
  }
  supplierdataload(suppdata: any) {
    for (let item of suppdata) {
      this.Code = item.code;
      this.Name = item.name;
      this.address = item.Address;
      this.Email = item.email;
      this.phoneno = item.phoneNumber;
      this.Fax = item.fax;
      this.web = item.website;
      this.sabbrev = item.SAbbreviation;
      this.contactperson = item.ContactPerson;
      this.contactno = item.ContactNo;
      this.distributor = item.Distributor;
      this.note = item.Notes;
      this.approved = item.Approved;
      this.city = item.City;
      this.state = item.State;
      this.country = item.Country;
      this.zip = item.Zip;
      this.suppkey = item.SupplierKey;
      this.fob = item.FOB;
      this.terms = item.Terms;
      this.shipvia = item.ShipVia;
      this.expaccount = item.ExpenseAccount;
      this.suppstatus = item.SupplierStatus;
      this.prefered = item.Prefered;
      this.othershipvia = item.OtherShipVia;
      this.rating = item.Rating;
      this.Shipto = item.shipto;



    }
  }
  CASload(Itemcode: string) {
    var itemcode: string = Itemcode;
    let params1 = new HttpParams().set('Itemcode', itemcode);
    return this.http.get("https://smarformulatorrawmaterialswebservice2.azurewebsites.net/loadCAS", { params: params1 });
  }
  rawmaterialsupplierload(Itemcode: string) {
    var itemcode: string = Itemcode;
    let params1 = new HttpParams().set('itemcode', itemcode);
    return this.http.get("https://smarformulatorrawmaterialswebservice2.azurewebsites.net/loadrawmaterialsuppliers", { params: params1 });
  }
  rawmaterialauditload(Itemcode: string) {
    var itemcode: string = Itemcode;
    let params1 = new HttpParams().set('rawCode', itemcode);
    return this.http.get("https://smarformulatorrawmaterialswebservice2.azurewebsites.net/auditloadrawmaterials", { params: params1 });
  }
  Rawmaterialdataload(rawdatas: any) {
    for (let item of rawdatas) {
      this.incicode = item.ItemCode;
      this.generalitemcod = item.GeneralItemCode;
      this.itemli = item.GeneralItemCode;
      this.inciname = item.Description;
      this.tradn = item.IngredientTradeName;
      this.ebsNumber = item.EBSNumber;
      var lastPOCost1: Number = Number(item.LastPOCost);
      this.lastPOCost = (lastPOCost1.toFixed(3)).toString();
      var defaultlastpoCost1: Number = Number(item.LastPOCost);
      this.defaultlastpoCost = (defaultlastpoCost1.toFixed(3)).toString();
      this.drugName = item.DrugName;
      this.notes = item.Notes;
      this.sku = item.SKU;
      this.rmAssayValue = item.RMAssayValue;
      this.supercededBy = item.SupercededBy;
      this.supercededDate = item.SupercededDate;
      this.defaultUnit = item.DefaultUnit;
      this.LastPOUnit = item.LastPOUnit;
      this.lastpounit = item.LastPOUnit;
      this.reorderQty = item.ReOrderQty;
      this.origin = item.Origin;
      this.concentration = item.RMConcentration;
      this.RMSource = item.RawMatSource;
      this.proleadtime = item.ProcessLeadTime;
      this.preloadtime = item.PreprocessLeadTime;
      this.postleadtime = item.PostprocessLeadTime;
      this.rmleadtime=item.RMLeadTime
      this.gravity = item.SG;
      this.IUPACName = item.IUPACName;
      this.Restriction = item.Restriction
      this.MSDSPath = item.MSDSPath
      this.CategoryName = item.CategoryName;
      this.SubCategoryName = item.SubCategoryName;
      this.Status = item.Status;
      this.suppkey = item.SupplierKey;
      this.BlendProcedure = item.BlendProcedure;
      this.COAPath = item.COAPath
      this.SupplierKey = item.SupplierKey;
      this.supp_code = item.VendorCode
      this.GMOYesOrNo = item.GMOYesOrNo
      this.GlutenYesOrNo = item.GlutenYesOrNo;
      this.Halal = item.Halal;
      this.AlertRemarks = item.AlertRemarks;
      this.EURiskPhrases = item.EURiskPhrases;
      this.EUSafetyPhrases = item.EUSafetyPhrases
      //if (this.Halal == "Yes") {
      //  this.Halal = "True";
      //}
      //else {
      //  this.Halal = "False";
      //}
      this.categoryId = item.CategoryId;
      this.subCategoryId = item.SubCategoryId;
      this.statusId = item.StatusId;
      var unitCost1: Number = Number(item.UnitCost);
      this.unitCost = (unitCost1.toFixed(3)).toString();
      this.costUnit = item.CostUnit;
      if (item.LastPODt == undefined || item.LastPODt == null) {
        this.LastPODt = "";
      }
      else {
        this.LastPODt = formatDate(new Date(item.LastPODt), 'yyyy-MM-dd', 'en-US');
      }
      if (item.CostDt == undefined || item.CostDt == null) {
        this.costDt = "";
      }
      else {
        this.costDt = formatDate(new Date(item.CostDt), 'yyyy-MM-dd', 'en-US');
      }
      if (item.LastPOCost == undefined || item.LastPOCost == "") {
        this.lastPOCost = "0";
      }
      else {
        this.lastPOCost = this.lastPOCost;
      }
      //this.costDt = item.CostDt;
      //this.LastPODt = item.LastPODt;

      this.hMISHealth = item.HMIS_Health;
      this.hMISFlammability = item.HMIS_Flammability;
      this.hMISPhysical = item.HMIS_Physical;
      this.hMISPersonal = item.HMIS_Personal;
      this.nFPAHealth = item.NFPA_Health;
      this.nFPAFlammability = item.NFPA_Flammability;
     this.NPACertified = item.NPACertified
      this.monograph = item.Monograph;
      this.Kosher = item.Kosher;
      this.IncidIngredient = item.IncidIngredient;
      this.Exemptornot = item.Exemptornot;
      this.PhEurName = item.PhEurName;
      this.MOQ = item.MOQ;
      this.Approved = item.Approved;
      this.VOCContributor = item.VOCContributor;
      this.PreviousCost=item.PreviousCost
      this.nFPAReactivity = item.NFPA_Reactivity;
      this.flashPtCelsious = item.FlashPtCelsious;
      this.nFPASpecial = item.NFPA_Special;
      this.NFPA_Health = item.NFPA_Health;
      this.NFPA_Flammability = item.NFPA_Flammability;
      this.flashPtFlammable = item.FlashPtFlammable;
      //this.flashPtGTLT = item.FlashPtGTLT;
      this.flashPtOverride = item.FlashPtOverride;
      this.flashPtMethod = item.FlashPtMethod;
      this.FunctionCode = item.FunctionCode;
     // this.functioncode = this.FunctionCode + "/";
     // this.functioncode = this.functioncode.replace("//", "/");
      this.functioncode = this.FunctionCode;     
      this.AddedBy = item.AddedBy
      this.AddedDt = item.AddedDt
      this.ApprovalCode = item.ApprovalCode
      this.AlertRemarks = item.AlertRemarks
      this.UpdatedBy = item.UpdatedBy
      this.UpdatedDt = item.UpdatedDt
      this.INNName = item.INNName
      this.RMAbbreviation = item.RMAbbreviation
      this.MOQunit = item.MOQunit
      this.NPAExpiry = item.NPAExpiry
      this.PreviousVenderCode = item.PreviousVenderCode
      this.SupplierRMNo = item.SupplierRMNo
      this.StatusReason = item.StatusReason
      this.CurrSupplierPriority = item.CurrSupplierPriority
      this.PrevSupplierPriority = item.PrevSupplierPriority
    //  this.LastPODt = item.LastPODt
      this.IsBlend = item.IsBlend
      this.Hazardous = item.Hazardous
      if (this.Hazardous == 'No') {
        this.Hazardous = "";
      }
      this.ReOrderUnit = item.ReOrderUnit

      this.unitcostname = item.stdpriceUnitname
      this.defaaltunitname = item.defaultunitname
      this.lastpounitname = item.LastPOUnitname
      //this.oldCost = "$" + this.unitCost + " Per " + this.defaultUnit + " as of " + this.costDt;
      //this.oldStdCost = "$" + this.lastPOCost + " Per " + this.LastPOUnit + " as of " + this.LastPODt

      var standardprice1: Number = Number(item.standardprice);
      this.standardprice = (standardprice1.toFixed(3)).toString();
      var standardprice2: Number = Number(item.standardprice);
      this.defaultstandardprice = (standardprice2.toFixed(3)).toString();
      var shippingprize1: Number = Number(item.Shippingprice);
      this.shippingprize = (shippingprize1.toFixed(3)).toString();
      var shippingprize2: Number = Number(item.Shippingprice);
      this.defaultshippingprize = (shippingprize2.toFixed(3)).toString();

      if (this.shippingprize == "") {
        this.shippingprize = "0"
      }
      this.standardpriceunit = item.standardpriceunit
      this.standardpricedate = formatDate(new Date(item.standardpricedate), 'yyyy-MM-dd', 'en-US')
      this.shippingpriceunit = item.shippingpriceunit
      if (this.shippingpriceunit == "") {
        this.shippingpriceunit = this.standardpriceunit
      }
      this.shippingpricedate = formatDate(new Date(item.shippingpricedate), 'yyyy-MM-dd', 'en-US')
      if (this.shippingpricedate == null || this.shippingpricedate == "")
        {
        this.shippingpricedate = Date.now.toString();
      }

      var total = Number(this.defaultstandardprice) + Number(this.defaultshippingprize);
      this.defaultdeliveredprice = total.toFixed(3);
      this.oldCost = "$" + this.defaultdeliveredprice + " Per " + this.defaaltunitname + " as of " + this.costDt;
      this.oldStdCost = "$" + this.defaultlastpoCost + " Per " + this.lastpounitname + " as of " + this.LastPODt;
    }
    
    this.Functionload(this.functioncode).subscribe((Functiondetailslload) => {
      console.warn("Functiondetailslload", Functiondetailslload)
      this.Functiondata = Functiondetailslload



    })
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
  rawsubcateload() {
    this.rawsubcategoryload(this.CategoryName).subscribe((rawsubcategoryload) => {
      console.warn("rawsubcategoryload", rawsubcategoryload)
      this.datarawsubcategoryload = rawsubcategoryload
    })
  }

  loadrawproperty(ingcode: string) {
    this.rawpropertyload(ingcode).subscribe((rawpropertyload) => {
      console.warn("rawpropertyload", rawpropertyload)
      this.datarawpropertyload = rawpropertyload
    });
  }
  OpenCategory(): void {
    const dialogRef = this.dialog.open(CategoryMaintenanceComponent , {
      width: '80%', height: '90%', disableClose: true
    });
  }
  openloadproperty(): void {
    this.Datashare.senditemcode(this.incicode); 
    const dialogRef = this.dialog.open(LoadPropertyComponent, {
      width: '50%', height: '50%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      

      this.propertydataload(this.incicode).subscribe((propertydataload) => {
        console.warn("propertydataload", propertydataload)
        this.propertydata = propertydataload

      })

    });
  }
  OpenIngredientSearch(): void {
    const dialogRef = this.dialog.open(IngredientSearchComponent, {
      width: '80%', height: '85%', disableClose: true
    });
  }
  OpenAddCASDetails(): void {
    const dialogRef = this.dialog.open(AddCASDetailsComponent, {
      width: '50%', height: '28%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      this.CASload(this.incicode).subscribe((casload) => {
        console.warn("casload", casload)
        this.casdata = casload

      })
    });
  }
  OpenRiskPhrases(): void {
    const dialogRef = this.dialog.open(RiskPhrasesComponent, {
      width: '80%', height: '90%', disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.risklistdata = result;
    });
  }
  OpenSafteyPhrases(): void {
    const dialogRef = this.dialog.open(SaftyPhrasesComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.safetylistdata = result;
    });
  }
  OpenRMVP(): void {
    const dialogRef = this.dialog.open(RMVPComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  openfunctionsearch(): void {
    const dialogRef = this.dialog.open(RMVPComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  opensearchfunction(): void {
    const dialogRef = this.dialog.open(FunctionSearchComponent, {
      width: '60%', height: '70%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);



      this.FunctionCode = result[0];
      this.FunctionName = result[1];
      if (this.functioncode == "") { this.functioncode = this.FunctionCode }
      else {
        this.functioncode = this.functioncode + "/" + this.FunctionCode;
      }


      this.Functionload(this.functioncode).subscribe((Functiondetailslload) => {
        console.warn("Functiondetailslload", Functiondetailslload)
        this.Functiondata = Functiondetailslload



      })
    });


  }
  Functionload(funname: string) {
    var Funname = funname;
    let params1 = new HttpParams().set('funname', Funname);
    return this.http.get("https://smartformulatorrawmaterialwebservice4.azurewebsites.net/loadFunctiontable", { params: params1, })

  }
  rawsubcategoryload(categoryname: string) {
    var catename: string = categoryname;
    let params1 = new HttpParams().set('CategoryName', catename);
    return this.http.get("https://smartformulatorrawmaterialwebservice4.azurewebsites.net/LoadSubCategorycmb", { params: params1 })
  }
  setvaluesfun(funddetails: any) {
    this.funcddlt = funddetails.FunctionName;
    this.funnamesdlt = funddetails.Functiondescription;



  }
  Deletefunction() {
    if (this.funcddlt == "ACTIVES") {
    }
    else {
      this.function1 = this.functioncode.split(this.funcddlt)
      this.functioncode = this.function1[0] + this.function1[1]
      this.functioncode = this.functioncode.replace("//", "/");



      this.Functionload(this.functioncode).subscribe((Functiondetailslload) => {
        console.warn("Functiondetailslload", Functiondetailslload)
        this.Functiondata = Functiondetailslload



      })



    }
  }
  openAddfunction(): void {
    const dialogRef = this.dialog.open(AddFunctionComponent, {
      width: '60%', height: '40%', disableClose: true
    });
  }
  openAddSupplier(): void {
    const dialogRef = this.dialog.open(AddSupplierComponent, {
      width: '100%', height: '100%', disableClose: true
    });
  }
  saveabbrawmaterials(abbrawmat: string, abbrawdescription: string) {
    var abbraw: string = abbrawmat;
    var descraw: string = abbrawdescription;
    let params1 = new HttpParams().set('abb', abbraw).
      set('formname', "Raw Materials").
      set('abbdescription', descraw);
    return this.http.get("http://localhost/SmartFormulator_Webservice/saveabbreviation", { params: params1 });
  
  }
  rawcategoryload() {
    return this.http.get("https://smartformulatorrawmaterialswebservice3.azurewebsites.net/loadrawcategory")
  }

  Rawmaterialload(itemcode: string) {
    var itemcode = itemcode;
    let params1 = new HttpParams().set('ItemCode', itemcode);
    return this.http.get("https://smarformulatorrawmaterialswebservice2.azurewebsites.net/displayRawmaterialdetails", { params: params1, })

  }
  dateChange(event) {
    this.costDt = event.target.value;
   
  }
  dateChangeship(event) {
    this.shippingpricedate = event.target.value;

  }
  defaultUOMload() {
    return this.http.get("https://smarformulatorrawmaterialswebservice2.azurewebsites.net/UnitTableLoad")
  }
  rawpropertyload(rawpropertyload: string) {
    var rawprop: string = rawpropertyload;
     
    let params1 = new HttpParams().set('itemcode', rawprop);
       
    return this.http.get("http://localhost/raw-sup-webservice2/loadrawproperty2", { params: params1 });

  }
  
  //Rawmaterial_Update(incredcode: string, incname: string, suppliername: string, supplierkey: string, rmitem: string) {

  //  this.markFormTouched(this.login_form);
  //  if (this.login_form.valid) {
  //    var operation: string = "Update";
  //    var username: string = "admin";
  //    var suppliercode = this.supp_code;
  //    var sg = this.lb_gal;
  //    var tradename: string = this.tradn;
  //    var chemist: string = this.supercededBy;
  //    var unitid = this.defaultUnit;
  //    var unitcost = this.unitCost;
  //    this.Rawmaterialdetails = [incredcode, incname, chemist, "11/26/2021 8:00:00 AM", unitid, unitcost, unitid, this.costDt, sg, this.vendorcode, this.vendorcode, suppliername, supplierkey, tradename, rmitem]
  //    this.Rawmaterial_saveupdateup(this.Rawmaterialdetails, operation, username).subscribe((rawmaterial_update) => {
  //      console.warn("rawmaterial_update", rawmaterial_update)
  //      this.rawmaterial_update_data = rawmaterial_update
  //    })
  //  } else {
  //    this.login_form.controls['terms'].setValue(false);
  //  }
  //};
  //Rawmaterial_Save(incredcode: string, incname: string, suppliername: string, supplierkey: string, rmitem: string) {

  //  this.markFormTouched(this.login_form);
  //  if (this.login_form.valid) {
  //    var operation: string = "Save";
  //    var username: string = "admin";
  //    var suppliercode = this.supp_code;
  //    var sg = this.lb_gal;
  //    var tradename: string = this.tradn;
  //    var chemist: string = this.supercededBy;
  //    var unitid = this.defaultUnit;
  //    var unitcost = this.unitCost;
  //    this.Rawmaterialdetails = [incredcode, incname, chemist, "11/26/2021 8:00:00 AM", unitid, unitcost, unitid, this.costDt, sg, suppliercode, suppliercode, suppliername, supplierkey, tradename, rmitem]
  //    this.Rawmaterial_saveupdateup(this.Rawmaterialdetails, operation, username).subscribe((rawmaterial_save) => {
  //      console.warn("rawmaterial_save", rawmaterial_save)
  //      this.rawmaterial_update_data = rawmaterial_save
  //    })
  //  } else {
  //    this.login_form.controls['terms'].setValue(false);
  //  }
  //};

  markFormTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) { control.markAsTouched(); this.markFormTouched(control); }
      else { control.markAsTouched(); };
    });
  };

  
  dltdata(cas_detail) {
    this.icode = cas_detail.itemCode
    this.elinc = cas_detail.EINECSNo
    this.caasno = cas_detail.CASNo
    this.descptn = cas_detail.Description

  }
  setcasdltdata(casdata: any) {
    this.i = 0;
    this.j = 0;



    for (let search of casdata) {
      this.casdataList[this.i] = ([{
        description: search.Description,
        EinecsNo: search.EINECSNo,
        CasNo: search.CASNo,



      }]);
      this.i++;
    }
  }
  Casdelete() {
    this.casdataList = [];
    this.setcasdltdata(this.casdata);
    this.DeleteCasdata().subscribe((raw_deletecas) => {
      console.warn("raw_deletecas", raw_deletecas)
      this.casdelete = raw_deletecas
    })
   
    this.CASload(this.incicode).subscribe((casload) => {
      console.warn("casload", casload)
      this.casdata = casload
      //this.itemcodevalue = this.incicode;
      //this.datashare.sendItemcodeno(this.itemcodevalue);
    })


  }
  DeleteCasdata() {
    var itemcode: string = this.incicode
    // var inciname: string = this.inciname;
    var datalistdata = JSON.stringify(this.casdataList);
    var caasno: string = this.caasno;
    var einecsno: string = this.elinc;
    let params1 = new HttpParams().set('ItemCode', itemcode).set('casjson', datalistdata).set('dltcas', caasno).set('dlteincno', einecsno);
    return this.http.get("https://smarformulatorrawmaterialswebservice2.azurewebsites.net/deletecas", { params: params1, responseType: 'text' })
  }
  settextboximpuries(impurities) {
    this.doc1 = impurities.INCIName;
    this.ppm = impurities.ppm;
  }
  capropsaveimpurities() {
   
    /* this.ppm = "Save";*/
    //this.termcode1 = termcode;

    this.saveupimpurities(this.itemli, this.inciname, this.subitemcode, this.subinciname, this.ppm, this.supp_name).subscribe((saveimpurities_Details) => {
      console.warn("saveimpurities_Details", saveimpurities_Details)
      this.savecapropimpu = saveimpurities_Details

    })
    //this.CAPROP65loaddata(this.inciname).subscribe((loadrawmaterialCAPROP65) => {
    // console.warn("loadrawmaterialCAPROP65", loadrawmaterialCAPROP65)
    // this.CAprop65load = loadrawmaterialCAPROP65
    //})
    this.capropimpuritiesload(this.itemli, this.inciname, this.supp_name).subscribe((loadrawmaterialregulatoryaudit) => {
      console.warn("loadrawmaterialcapr", loadrawmaterialregulatoryaudit)
      this.capropimpuritiestableload = loadrawmaterialregulatoryaudit
    })
  }
  DeleteCAPROPimpuritiesdt() {
    this.DeleteCAPROPimpuritiesweb().subscribe((DeleteCAPROPimpurities) => {
      console.warn("DeleteCAPROPimpurities", DeleteCAPROPimpurities)
      this.delclientus_loaddata = DeleteCAPROPimpurities
      this.capropimpuritiesload(this.itemli, this.inciname, this.supp_name).subscribe((loadrawmaterialregulatoryaudit) => {
        console.warn("loadrawmaterialcapr", loadrawmaterialregulatoryaudit)
        this.capropimpuritiestableload = loadrawmaterialregulatoryaudit
      })
    })

  }
  
  DeleteCAPROPimpuritiesweb() {
    var IngredientCode = this.incicode;
    var BlendCode = this.itemli;
    var username = "admin";
    var INCIName = this.inciname;
    var ppm = this.ppm;
    var subinciname = this.doc1;
    let params1 = new HttpParams().set('IngredientCode', IngredientCode).set('BlendCode', BlendCode).set('txtitemcode', IngredientCode).set('txtdescription', INCIName).set('username', username).set('inciname', subinciname).set('ppm', ppm);
    return this.http.get("https://smarformulatorawmaterialwebservice6.azurewebsites.net/deleteingredientss", { params: params1, responseType: "text" })
  }
  eleteus_dt() {
    this.Deleteusweb().subscribe((Deleteus) => {
      console.warn("Deleteus", Deleteus)
      this.delclientus_loaddata = Deleteus
      this.usloaddata(this.inciname).subscribe((loadrawmaterialus) => {
        console.warn("loadrawmaterialus", loadrawmaterialus)
        this.usload = loadrawmaterialus
      })
    })
  }
  deletermmain() {
    this.deletermweb().subscribe((deletermmain) => {
      console.warn("deletermmain", deletermmain)
      this.deleterawmaterialmain = deletermmain
    })
    this.showAlert2();
  }
  Deletecanada_dt() {
    this.Deletecanadaweb().subscribe((Deletecanada) => {
      console.warn("Deletecanada", Deletecanada)
      this.delclientcanada_loaddata = Deletecanada
      this.canadadataload(this.inciname).subscribe((loadrawmaterialcanada) => {
        console.warn("loadcanada", loadrawmaterialcanada)
        this.canadaLoad = loadrawmaterialcanada
      })
    })
  }
  DeleteEU_dt() {
    this.DeleteEUweb().subscribe((DeleteEU) => {
      console.warn("DeleteEU", DeleteEU)
      this.delclienteu_loaddata = DeleteEU
      this.EUloaddata(this.inciname).subscribe((loadrawmaterialEU) => {
        console.warn("loadrawmaterialEU", loadrawmaterialEU)
        this.euload = loadrawmaterialEU
      })
    })
  }
  Deletejapan_dt() {
    this.Deletejapanweb().subscribe((Deletejapan) => {
      console.warn("Deletejapan", Deletejapan)
      this.delclientjapan_loaddata = Deletejapan
      this.japanloaddata(this.inciname).subscribe((loadrawmaterialjapan) => {
        console.warn("loadrawmaterialjapan", loadrawmaterialjapan)
        this.japanload = loadrawmaterialjapan
      })
    })
  }
  DeleteChina_dt() {
    this.Deletechinaweb().subscribe((DeleteChina) => {
      console.warn("DeleteChina", DeleteChina)
      this.delclientchina_loaddata = DeleteChina
      this.Chinaloaddata(this.inciname).subscribe((loadrawmaterialChina) => {
        console.warn("loadrawmaterialChina", loadrawmaterialChina)
        this.chinaload = loadrawmaterialChina
      })
    })
  }
  DeleteCAPROP65_dt() {
    this.DeleteCAPROP65web().subscribe((DeleteCAPROP65) => {
      console.warn("DeleteCAPROP65", DeleteCAPROP65)
      this.delclientcappro65_loaddata = DeleteCAPROP65
      this.CAPROP65loaddata(this.inciname).subscribe((loadrawmaterialCAPROP65) => {
        console.warn("loadrawmaterialCAPROP65", loadrawmaterialCAPROP65)
        this.CAprop65load = loadrawmaterialCAPROP65
      })
    })
  }
  setvalues3(usd) {
    this.Inciid = usd.INCIId;
    this.username1 = usd.username;
    this.INCIName1 = usd.INCIName;
    this.Itemcode1 = usd.Itemcode;
  }
  DeleteCAPROP65web() {
    var clid = this.Inciid;
    var username = "admin";
    var INCIName = this.inciname;
    var Itemcode = this.incicode;
    let params1 = new HttpParams().set('INCIId', clid).set('username', username).set('INCIName', INCIName).set('Itemcode', Itemcode);
    return this.http.get("https://smarformulatorawmaterialwebservice6.azurewebsites.net/CAPROPDELRESTRICTION", { params: params1 })
  }
  Deletechinaweb() {
    var clid = this.Inciid;
    var username = "admin";
    var INCIName = this.inciname;
    var Itemcode = this.incicode;
    let params1 = new HttpParams().set('INCIId', clid).set('username', username).set('INCIName', INCIName).set('Itemcode', Itemcode);
    return this.http.get("https://smarformulatorawmaterialwebservice6.azurewebsites.net/CHINADELRESTRICTION", { params: params1 })
  }
  Deletejapanweb() {
    var clid = this.Inciid;
    var username = "admin";
    var INCIName = this.inciname;
    var Itemcode = this.incicode;
    let params1 = new HttpParams().set('INCIId', clid).set('username', username).set('INCIName', INCIName).set('Itemcode', Itemcode);
    return this.http.get("https://smarformulatorawmaterialwebservice6.azurewebsites.net/JPNDELRESTRICTION", { params: params1 })
  }
  DeleteEUweb() {
    var clid = this.Inciid;
    var username = "admin";
    var INCIName = this.inciname;
    var Itemcode = this.incicode;
    let params1 = new HttpParams().set('INCIId', clid).set('username', username).set('INCIName', INCIName).set('Itemcode', Itemcode);
    return this.http.get("https://smarformulatorawmaterialwebservice6.azurewebsites.net/EUDELRESTRICTION", { params: params1 })
  }
  Deletecanadaweb() {
    var clid = this.Inciid;
    var username = "admin";
    var INCIName = this.inciname;
    var Itemcode = this.incicode;
    let params1 = new HttpParams().set('INCIId', clid).set('username', username).set('INCIName', INCIName).set('Itemcode', Itemcode);
    return this.http.get("https://smarformulatorrawmaterialwebservice5.azurewebsites.net/CNDDELRESTRICTION", { params: params1 })
  }
  Deleteusweb() {
    var clid = this.Inciid;
    var username = "admin";
    var INCIName = this.inciname;
    var Itemcode = this.incicode;
    let params1 = new HttpParams().set('INCIId', clid).set('username', username).set('INCIName', INCIName).set('Itemcode', Itemcode);
    return this.http.get("https://smarformulatorrawmaterialwebservice5.azurewebsites.net/USDELRESTRICTION", { params: params1 })
  }
  //deletermmain() {
  //  this.deletermweb().subscribe((deletermmain) => {
  //    console.warn("deletermmain", deletermmain)
  //    this.deleterawmaterialmain = deletermmain
  //  })
  //}
  deletermweb() {
    var Itemcode1 = this.incicode;
    let params1 = new HttpParams().set('ItemCode', Itemcode1);
    return this.http.get("https://smartformulatorrawmaterialwebservice4.azurewebsites.net/deleterawmaterials", { params: params1,responseType: "text"  })
  }
  IFRAload(InciName: string, GenItemCode: string) {
    var inciname: string = InciName;
    var gitemcode: string = GenItemCode;
    let params1 = new HttpParams().set('txtdescription', inciname).set('txtGenItemCode', gitemcode);
    return this.http.get("https://smarformulatorrawmaterialswebservice2.azurewebsites.net/ShowIFRADetails", { params: params1 });
  }
  ifradetails(ifradata: any) {
    for (let item of ifradata) {
      this.Sourceinfo = item.sourceinfo;
      this.cas = item.ifracas;
      this.amendment = item.IFRAAmmendment;
      this.femaNo = item.FemaNo;
      this.RFIMID = item.rifmid;
      this.Category1A = item.IFRAC1;
      this.Category1B = item.IFRAC1B;
      this.Category2A = item.IFRAC2;
      this.Category3A = item.IFRAC3;
      this.Category3B = item.IFRAC3B;
      this.Category3C = item.IFRAC3C;
      this.Category3D = item.IFRAC3D;
      this.Category4A = item.IFRAC4;
      this.Category4B = item.IFRAC4B;
      this.Category4C = item.IFRAC4C;
      this.Category4D = item.IFRAC4D;
      this.Category5A = item.IFRAC5;
      this.Category6A = item.IFRAC6;
      this.Category7A = item.IFRAC7;
      this.Category7B = item.IFRAC7B;
      this.Category8A = item.IFRAC8;
      this.Category8B = item.IFRAC8B;
      this.Category9A = item.IFRAC9;
      this.Category9B = item.IFRAC9B;
      this.Category9C = item.IFRAC9C;
      this.Category10A = item.IFRAC10;
      this.Category10B = item.IFRAC10B;
      this.Category11A = item.IFRAC11;
      this.Category11B = item.IFRAC11B;
    }
  }
  LastPOPriceload(defaultunit: string, defaultcost: string) {
    var LastPOunit: string = this.lastpounit;
    var LastPOprice: string = defaultcost;
    var DefaltUnit: string = defaultunit;
    var Itemcode: string = this.incicode;
    let params1 = new HttpParams().set('LastPOUnit', LastPOunit).set('LastPOPrice', LastPOprice).set('defaultunit', DefaltUnit).set('itemcode', Itemcode);
    return this.http.get("https://smarformulatorrawmaterialwebservice7.azurewebsites.net/RawlastPOload", { params: params1 });
  }


  Rawmaterial_Update() {


    if (Number(this.totalpercent) != 0 && Number(this.totalpercent) < 100) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Total percentage should be 100%.Adjust to 100%.' } });
      this.active = "3";
    }
    else {
      //this.markFormTouched(this.login_form);
      //if (this.login_form.valid) {
      //var operation: string = "Update";
      //var username: string = "admin";
      //var suppliercode = this.supp_code;
      //var sg = this.lb_gal;
      //var tradename: string = this.tradn;
      //var chemist: string = this.supercededBy;
      //var unitid = this.defaultUnit;
      //var unitcost = this.unitCost;
      if (this.ifradata == "") {
        this.isifrafilled = "false";
        this.isifraaudit = "true";
      }
      else {
        this.isifrafilled = "true";
        this.isifraaudit = "false";
      }
      if (this.CurrSupplierPriority == "") {
        this.cmbpriority = "N/A";
        this.oldpriority = "N/A";
      }
      else {
        this.cmbpriority = this.CurrSupplierPriority;
        this.oldpriority = "";
      }
      if (this.PrevSupplierPriority == "") {





      }
      else {
        this.oldpriorno = this.PrevSupplierPriority;
      }
      if (this.NPAExpiry == "" || this.NPAExpiry == null) {
        this.NPAExpiry = formatDate(Date.now(), 'yyyy-MM-dd', 'en-US');
      }
      else {
        this.NPAExpiry = this.NPAExpiry;
      }
      this.dataList[0] = ([{
        ItemCode: this.incicode,
        GeneralItemCode: this.itemli,
        Description: this.inciname,
        IngredientTradeName: this.tradn,
        CategoryId: this.categoryId,
        SubCategoryId: this.subCategoryId,
        StatusId: this.statusId,
        SupercededBy: this.supercededBy,
        SupercededDate: '',
        UnitCost: this.unitCost,
        CostUnit: this.costUnit,
        CostDt: this.costDt,
        Notes: this.notes,
        VendorCode: this.supp_code,
        HMIS_Health: this.hMISHealth,
        HMIS_Flammability: this.hMISFlammability,
        HMIS_Physical: this.hMISPhysical,
        HMIS_Personal: this.hMISPersonal,
        NFPA_Health: this.NFPA_Health,
        NFPA_Flammability: this.NFPA_Flammability,
        NFPA_Reactivity: this.nFPAReactivity,
        FlashPtCelsious: this.flashPtCelsious,
        NFPA_Special: this.nFPASpecial,
        FlashPtFlammable: this.flashPtFlammable,
        FlashPtGTLT: this.flashPtGTLT,
        FlashPtOverride: this.flashPtOverride,
        FlashPtMethod: this.flashPtMethod,
        MSDSPath: this.MSDSPath,
        EURiskPhrases: this.risklistdata,
        EUSafetyPhrases: this.safetylistdata,
        AddedBy: this.AddedBy,
        AddedDt: this.AddedDt,
        UpdatedDt: this.UpdatedDt,
        UpdatedBy: this.UpdatedBy,
        INNName: this.INNName,
        PhEurName: this.PhEurName,
        IUPACName: this.IUPACName,
        Restriction: this.Restriction,
        FunctionCode: this.functioncode,
        PreviousCost: this.PreviousCost,
        DrugName: this.drugName,
        SKU: this.sku,
        RawMatSource: this.RMSource,
        RMAbbreviation: 'CUSTOM',
        ReOrderQty: this.reorderQty,
        Exemptornot: this.Exemptornot,
        RMLeadTime: this.rmleadtime,
        Monograph: this.monograph,
        IncidIngredient: this.IncidIngredient,
        BlendProcedure: this.BlendProcedure,
        VOCContributor: this.VOCContributor,
        Approved: this.Approved,
        COAPath: this.COAPath,
        Origin: this.origin,
        MOQ: this.MOQ,
        MOQunit: this.MOQunit,
        NPACertified: this.NPACertified,
        NPAExpiry: this.NPAExpiry,
        ApprovalCode: this.ApprovalCode,
        PreviousVenderCode: this.PreviousVenderCode,
        GMOYesOrNo: this.GMOYesOrNo,
        GlutenYesOrNo: this.GlutenYesOrNo,
        SupplierRMNo: this.SupplierRMNo,
        ProcessLeadTime: this.proleadtime,
        PreprocessLeadTime: this.preloadtime,
        PostprocessLeadTime: this.postleadtime,
        StatusReason: this.StatusReason,
        Halal: this.Halal,
        Kosher: this.Kosher,
        AlertRemarks: this.AlertRemarks,
        EBSNumber: this.ebsNumber,
        CurrSupplierPriority: this.CurrSupplierPriority,
        PrevSupplierPriority: this.PrevSupplierPriority,
        LastPOCost: this.lastPOCost,
        RMConcentration: this.concentration,
        RMAssayValue: this.rmAssayValue,
        IsBlend: 'false',
        Hazardous: this.Hazardous,
        ReOrderUnit: this.ReOrderUnit,
        ContactPerson: this.contactperson,
        ContactNo: this.contactno,
        fax: this.Fax,
        Address: this.address,
        name: this.supp_name,
        SG: this.gravity,
        Distributor: this.distributor,
        phoneNumber: this.phoneno,
        website: this.web,
        MOQUnit: this.MOQunit,
        code: this.supp_code,
        SupplierKey: this.suppkey,
        email: this.Email,
        lblusername: 'admin',
        CmbStatus: this.Status,
        DefaultUnit: this.defaultUnit,
        cmbUOM1: this.defaultUnit,
        cmbcostuom: this.defaaltunitname,
        cmbLastper: this.LastPOUnit,
        LastPOUnit: this.lastpounitname,
        CmbCategory: this.CategoryName,
        CmbSubCategory: this.SubCategoryName,
        ifracas: this.cas,



        IsIFRAFilled: this.isifrafilled,
        IsIFRAAudit: this.isifraaudit,
        dtpLastCost: this.LastPODt,
        LastPODt: this.LastPODt,
        oldstdcost: this.oldStdCost,
        oldcost: this.oldCost,



        oldpriorityNA: this.oldpriority,
        cmbpriorityno: this.cmbpriority,
        oldpriorityno: this.oldpriorno,



        shippingpriceunit: this.shippingpriceunit,
        stdpriceunit: this.standardpriceunit,
        stdprice: this.standardprice,
        stdpricedate: this.standardpricedate,
        shippingprice: this.shippingprize,
        shippingpricedate: this.shippingpricedate,
      }]);



      this.DataListAudit[0] = ([{
        txtRegulatoryNotes: '',
        txtWord1: '',
        txtWord2: '',
        txtWord3: '',
        txtWord4: '',
        txtWord5: '',
        txtWord6: '',
        txtExcel1: '',
        txtExcel2: '',
        txtExcel3: '',
        txtExcel4: '',
        txtExcel5: '',
        txtExcel6: '',
        txtpdf1: '',
        txtpdf2: '',
        txtpdf3: '',
        txtpdf4: '',
        txtpdf5: '',
        txtpdf6: '',
        txtpdf7: '',
        txtAddtl1: '',
        txtAddtl2: '',
        txtAddtl3: '',
        txtAddtl4: '',
        txtAddtl5: '',
        txtAddtl6: '',
        txtAddtl7: '',





      }]);
      this.DataListIFRA[0] = ([{
        txtSourceinfo: this.Sourceinfo,
        txtIFRAAmmendment: this.amendment,
        txtFEMA: this.femaNo,
        txtRIFMD: this.RFIMID,
        txtIFRACI: this.Category1A,
        txtIFRACIB: this.Category1B,
        txtIFRACII: this.Category2A,
        txtClassThree: this.Category3A,
        txtClassThreeB: this.Category3B,
        txtClassThreeC: this.Category3C,
        txtClassThreeD: this.Category3D,
        txtIFRACIV: this.Category4A,
        txtIFRACIVB: this.Category4B,
        txtIFRACIVC: this.Category4C,
        txtIFRACIVD: this.Category4D,
        txtIFRACV: this.Category5A,
        txtIFRACVI: this.Category6A,
        txtIFRACVII: this.Category7A,
        txtIFRACVIIB: this.Category7B,
        txtIFRACVIII: this.Category8A,
        txtIFRACVIIIB: this.Category8B,
        txtIFRACIX: this.Category9A,
        txtIFRACIXB: this.Category9B,
        txtIFRACIXC: this.Category9C,
        txtIFRACX: this.Category10A,
        txtIFRACXB: this.Category10B,
        txtIFRACXI: this.Category11A,
        txtIFRACXIB: this.Category11B,
      }]);
      this.Rawmaterial_updateup().subscribe((rawmaterial_update) => {
        console.warn("rawmaterial_update", rawmaterial_update)
        this.rawmaterial_update_data = rawmaterial_update
        if (this.rawmaterial_update_data == "Updated") {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "RawMaterial:" + " " + this.inciname + " is " + this.rawmaterial_update_data + " " + "Successfully" } });
          this.rawmaterial_update_data = ""
        }
      })
    }
   
      //this.showAlert()
        //} else {
    // this.login_form.controls['terms'].setValue(false);
    //}
  };
  Rawmaterial_updateup() {
    /* var Rawdetails: any = Rawmaterialdetails;*/
    var datalistraw: any = JSON.stringify(this.dataList);
    var datalistaudit: any = JSON.stringify(this.DataListAudit);
    var datalistifra: any = JSON.stringify(this.DataListIFRA);
    let params1 = new HttpParams().set('RawmaterialDetailjson', datalistraw).set('Auditdocjson', datalistaudit).set('IFRAdocjson', datalistifra);
    return this.http.get("https://smarformulatorrawmaterialwebservice7.azurewebsites.net/Rawmaterialupdate", { params: params1, responseType: 'text'})
  }

  Rawmaterial_Save() {

   
   
    if (this.inciname == "" || this.inciname == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter INCI Name' } });
    }
   
    else if
      (this.itemli == undefined || this.itemli== "") {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter RM Item # ' } });
    }
    else if
      (this.supp_name == "" || this.supp_name == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Please select Supplier details' } });
    }
    else if (this.CategoryName == "" || this.CategoryName == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter Category Name' } });
    }
    else if
      (this.Status == "" || this.Status == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Please select Status' } });
    }
    else if
      (this.standardprice == "" || this.shippingprize == "" || this.unitCost == "" || this.lastPOCost=="") {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter Price details' } });
    }
    if (Number(this.totalpercent) != 0 && Number(this.totalpercent) < 100) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Total percentage should be 100%.Adjust to 100%.' } });
      this.active = "3";
    }
  else {

      this.RMdataList[0] = ([{



        AddedBy: 'admin',
        AddedDt: this.AddedDt,
        Address: this.address,
        AlertRemarks: this.AlertRemarks,
        Approved: this.Approved,
        BlendProcedure: this.BlendProcedure,
        CategoryId: this.categoryId,
        CmbCategory: this.CategoryName,
        CmbSubCategory: this.SubCategoryName,
        COAPath: this.COAPath,
        code: this.supp_code,
        ContactNo: this.contactno,
        ContactPerson: this.contactperson,
        CostDt: this.costDt,
        CostUnit: this.costUnit,
        DefaultUnit: this.defaultUnit,
        Description: this.inciname,
        Distributor: this.distributor,
        DrugName: this.drugName,
        EBSNumber: this.ebsNumber,
        email: this.Email,
        EURiskPhrases: this.risklistdata,
        EUSafetyPhrases: this.safetylistdata,
        Exemptornot: this.Exemptornot,
        fax: this.Fax,
        FlashPtCelsious: this.flashPtCelsious,
        FlashPtFlammable: this.flashPtFlammable,
        FlashPtGTLT: this.flashPtGTLT,
        FlashPtMethod: this.flashPtMethod,
        FlashPtOverride: this.flashPtOverride,
        FunctionCode: this.functioncode,
        GeneralItemCode: this.itemli,
        GlutenYesOrNo: this.GlutenYesOrNo,
        GMOYesOrNo: this.GMOYesOrNo,
        Halal: this.Halal,
        HMIS_Flammability: this.hMISFlammability,
        HMIS_Health: this.hMISHealth,
        HMIS_Personal: this.hMISPersonal,
        HMIS_Physical: this.hMISPhysical,
        IncidIngredient: this.IncidIngredient,
        IngredientTradeName: this.tradn,
        ItemCode: 'newitem',
        IUPACName: this.IUPACName,
        Kosher: this.Kosher,
        LastPOCost: this.lastPOCost,
        LastPODt: this.LastPODt,
        LastPOUnit: this.LastPOUnit,
        Monograph: this.monograph,
        MOQ: this.MOQ,
        MSDSPath: this.MSDSPath,
        name: this.supp_name,
        NFPA_Flammability: this.NFPA_Flammability,
        NFPA_Health: this.NFPA_Health,
        NFPA_Reactivity: this.nFPAReactivity,
        NFPA_Special: this.nFPASpecial,
        Notes: this.notes,
        NPACertified: this.NPACertified,
        Origin: this.origin,
        PhEurName: this.PhEurName,
        phoneNumber: this.phoneno,
        PostprocessLeadTime: this.postleadtime,
        PreprocessLeadTime: this.preloadtime,
        PreviousCost: this.PreviousCost,
        ProcessLeadTime: this.proleadtime,
        RawMatSource: this.RMSource,
        ReOrderQty: this.reorderQty,
        Restriction: this.Restriction,
        RMAssayValue: this.rmAssayValue,
        RMConcentration: this.concentration,
        RMLeadTime: this.rmleadtime,
        SG: this.gravity,
        SKU: this.sku,
        StatusId: this.statusId,
        SubCategoryId: this.subCategoryId,
        SupercededBy: 'admin',
        SupercededDate: '',
        SupplierKey: this.suppkey,
        UnitCost: this.unitCost,
        VendorCode: this.supp_code,
        VOCContributor: this.VOCContributor,
        website: this.web,
        CmbStatus: this.Status,
        chkHazard: this.Hazardous,
        cmbcostuom: this.defaultUnit,
        SupplierRMNo: this.SupplierRMNo,
        ReorderUnit: this.ReOrderUnit,
        PrevSupplierPriority: this.PrevSupplierPriority,
        MOQUnit: this.MOQunit,
        INNName: this.INNName,
        IsBlend: this.IsBlend,
        CurrSupplierPriority: this.CurrSupplierPriority,
        cmbUOM1: this.defaultUnit,
        lblusername: 'admin',
        cmbLastper: this.LastPOUnit,
        CmbPriorityno: this.CurrSupplierPriority,
        NPAExpiry: this.NPAExpiry,
        oldpriorityno: this.CurrSupplierPriority,
        RMAbbreviation: 'CUSTOM',
        ifracas: '',
        IsIFRAFilled: '',
        IsIFRAAudit: '',

        shippingpriceunit: this.shippingpriceunit,
        stdpriceunit: this.standardpriceunit,
        stdprice: this.standardprice,
        stdpricedate: this.standardpricedate,
        shippingprice: this.shippingprize,
        shippingpricedate: this.shippingpricedate,


      }]);
      this.DataListAudit[0] = ([{
        txtRegulatoryNotes: '',
        txtWord1: '',
        txtWord2: '',
        txtWord3: '',
        txtWord4: '',
        txtWord5: '',
        txtWord6: '',
        txtExcel1: '',
        txtExcel2: '',
        txtExcel3: '',
        txtExcel4: '',
        txtExcel5: '',
        txtExcel6: '',
        txtpdf1: '',
        txtpdf2: '',
        txtpdf3: '',
        txtpdf4: '',
        txtpdf5: '',
        txtpdf6: '',
        txtpdf7: '',
        txtAddtl1: '',
        txtAddtl2: '',
        txtAddtl3: '',
        txtAddtl4: '',
        txtAddtl5: '',
        txtAddtl6: '',
        txtAddtl7: '',





      }]);
      this.DataListIFRA[0] = ([{
        txtSourceinfo: this.Sourceinfo,
        txtIFRAAmmendment: this.amendment,
        txtFEMA: this.femaNo,
        txtRIFMD: this.RFIMID,
        txtIFRACI: this.Category1A,
        txtIFRACIB: this.Category1B,
        txtIFRACII: this.Category2A,
        txtClassThree: this.Category3A,
        txtClassThreeB: this.Category3B,
        txtClassThreeC: this.Category3C,
        txtClassThreeD: this.Category3D,
        txtIFRACIV: this.Category4A,
        txtIFRACIVB: this.Category4B,
        txtIFRACIVC: this.Category4C,
        txtIFRACIVD: this.Category4D,
        txtIFRACV: this.Category5A,
        txtIFRACVI: this.Category6A,
        txtIFRACVII: this.Category7A,
        txtIFRACVIIB: this.Category7B,
        txtIFRACVIII: this.Category8A,
        txtIFRACVIIIB: this.Category8B,
        txtIFRACIX: this.Category9A,
        txtIFRACIXB: this.Category9B,
        txtIFRACIXC: this.Category9C,
        txtIFRACX: this.Category10A,
        txtIFRACXB: this.Category10B,
        txtIFRACXI: this.Category11A,
        txtIFRACXIB: this.Category11B,
      }]);




      this.Rawmaterial_saveupdateup().subscribe((rawmaterial_save) => {
        console.warn("rawmaterial_save", rawmaterial_save)
        this.rawmaterial_save_data = rawmaterial_save

        if (this.rawmaterial_save_data == "Inserted") {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "RawMaterial:" + " " + this.inciname + " is " + this.rawmaterial_save_data + " " + "Successfully" } });
          this.rawmaterial_save_data = ""
        }
      })
    }
    
  }

  Rawmaterial_saveupdateup() {
    var datalistraw: any = JSON.stringify(this.RMdataList);
    var datalistaudit: any = JSON.stringify(this.DataListAudit);
    var datalistifra: any = JSON.stringify(this.DataListIFRA);
    var UserName: any = "admin";
    let params1 = new HttpParams().set('RawmaterialDetailjson', datalistraw).set('Auditdocjson', datalistaudit).set('IFRAdocjson', datalistifra).set('username', UserName);
    return this.http.get("https://smartformulatorrawmaterialwebservice4.azurewebsites.net/saverawmaterials", { params: params1, responseType: 'text' })
  }

  ClearData() {
    this.active = "1";
    this.incicode = '';
    this.itemli = '';
    this.generalitemcod = '';
    this.inciname = '';
    this.tradn = '';
    this.ebsNumber = '';
    this.lastPOCost = '';
    this.drugName = '';
    this.notes = '';
    this.sku = '';
    this.rmAssayValue = '0.00';
    this.supercededBy = '';
    this.supercededDate = '';
    this.defaultUnit = '';
    this.LastPOUnit = '';
    this.reorderQty = '0.00';
    this.origin = '';
    this.concentration = '0.00';
    this.RMSource = '';
    this.proleadtime = '0';
    this.preloadtime = '0';
    this.postleadtime = '0';
    this.rmleadtime = '0';
    this.gravity = '1';
    this.IUPACName = '';
    this.Restriction = '';
    this.MSDSPath = '';
    this.CategoryName = '';
    this.SubCategoryName = '';
    this.Status = '';
    this.suppkey = '';
    this.BlendProcedure = '';
    this.COAPath = '';
    this.SupplierKey = '';
    this.vendorcode = '';
    this.GMOYesOrNo = '';
    this.GlutenYesOrNo = '';
    this.Halal = '';
    this.AlertRemarks = '';
    this.EURiskPhrases = '';
    this.EUSafetyPhrases = '';
    this.categoryId = '';
    this.subCategoryId = '';
    this.statusId = '';
    this.unitCost = '';
    this.costUnit = '';
    this.LastPODt = '';
    this.costDt = '';
    this.lastPOCost = '0.001';
    this.standardprice = '0.001';
    this.shippingprize = '0.000';
    this.deliveredprice='0.001'
    this.costDt = '';
    this.LastPODt = '';
    this.hMISHealth = '';
    this.hMISFlammability = '';
    this.hMISPhysical = '';
    this.hMISPersonal = '';
    this.nFPAHealth = '';
    this.nFPAFlammability = '';
    this.NPACertified = '';
    this.monograph = '';
    this.Kosher = '';
    this.IncidIngredient = '';
    this.Exemptornot = '';
    this.PhEurName = '';
    this.MOQ = '0.00';
    this.Approved = '';
    this.VOCContributor = '';
    this.PreviousCost = '';
    this.nFPAReactivity = '';
    this.flashPtCelsious = '';
    this.nFPASpecial = '';
    this.NFPA_Health = '';
    this.NFPA_Flammability = '';
    this.flashPtFlammable = '';
    //this.flashPtGTLT = item.FlashPtGTLT;
    this.flashPtOverride = '';
    this.flashPtMethod = '';
    this.FunctionCode = '';
    this.functioncode = '';
    this.AddedBy = '';
    this.AddedDt = '';
    this.ApprovalCode = '';
    this.AlertRemarks = '';
    this.UpdatedBy = '';
    this.UpdatedDt = '';
    this.INNName = '';
    this.RMAbbreviation = '';
    this.MOQunit = '';
    this.NPAExpiry = '';
    this.PreviousVenderCode = '';
    this.SupplierRMNo = '';
    this.StatusReason = '';
    this.CurrSupplierPriority = '';
    this.PrevSupplierPriority = '';
    this.LastPODt = '';
    this.IsBlend = '';
    this.Hazardous = '';
    this.ReOrderUnit = '';
    this.unitcostname = '';
    this.defaaltunitname = '';
    this.lastpounitname = '';
    this.oldCost = '';
    this.oldStdCost = '';
    this.deliveredprice = '';
    this.gravity = '1.000';

    this.ifradata = '';
    this.casdata = '';
    this.Blenddata = '';
    this.Functiondata = '';
    this.auditdata = '';
    this.propertydata = '';
    this.canadaLoad = '';
    this.usload = '';
    this.austriliaload = '';
    this.euload = '';
    this.japanload = '';
    this.chinaload = '';
    this.CAprop65load = '';
    this.CAproprestrictionsload = '';
    this.regulatoryaudittrackingload = '';

    this.Code = '';
    this.Name = '';
    this.address = '';
    this.Email = '';
    this.phoneno = '';
    this.Fax = '';
    this.web = '';
    this.sabbrev = '';
    this.contactperson = '';
    this.contactno = '';
    this.distributor = '';
    this.note = '';
    this.approved = '';
    this.city = '';
    this.state = '';
    this.country = '';
    this.zip = '';
    this.suppkey = '';
    this.fob = '';
    this.terms = '';
    this.shipvia = '';
    this.expaccount = '';
    this.suppstatus = '';
    this.prefered = '';
    this.othershipvia = '';
    this.rating = '';
    this.Shipto = '';
    this.Datashare.senditemtoraw(null);
  }
  itemcodechange() {
  
    if (this.itemli != null) {
      this.Rawmaterialload(this.itemli).subscribe((rawmaterialload) => {
        console.warn("rawmaterialload", rawmaterialload)
        this.Rawdata = rawmaterialload
        this.Rawmaterialdataload(this.Rawdata)
      })

    }
  }

  ngOnInit() {

    this.itemcodehidd = this.Datashare.getitemcoderaw();
  
    if (this.itemcodehidd != null) {
      this.supp_name = this.Datashare.getitemtosupplier();
      this.Rawmaterialload(this.itemcodehidd).subscribe((rawmaterialload) => {
        console.warn("rawmaterialload", rawmaterialload)
        this.Rawdata = rawmaterialload
        this.Rawmaterialdataload(this.Rawdata)
      })

    }
    this.saveabbrawmaterials(this.abb, this.abbdescription).subscribe((result6) => {
      console.warn("resultsaveraw", result6)
      this.datasaveabbraw = result6
    })

    this.rawcategoryload().subscribe((rawcategoryload) => {
      console.warn("rawcategoryload", rawcategoryload)
      this.datarawcategoryload = rawcategoryload
    })
    this.defaultUOMload().subscribe((defaultUOMload) => {
      console.warn("defaultUOMload", defaultUOMload)
      this.defaultUOMload_data = defaultUOMload
    })
  
  }

}
export class Datacas {
  description: string;
  EinecsNo: string;
  CasNo: string;
}

export class RawmaterialData {
  ItemCode: string;
  GeneralItemCode: string;
  Description: string;
  IngredientTradeName: string;
  CategoryId: string;
  SubCategoryId: string;
  StatusId: string;
  SupercededBy: string;
  SupercededDate: string;
  DefaultUnit: string;
  UnitCost: string;
  CostUnit: string;
  CostDt: string;
  Notes: string;
  VendorCode: string;
  HMIS_Health: string;
  HMIS_Flammability: string;
  HMIS_Physical: string;
  HMIS_Personal: string;
  NFPA_Health: string;
  NFPA_Flammability: string;
  NFPA_Reactivity: string;
  FlashPtCelsious: string;
  NFPA_Special: string;
  FlashPtFlammable: string;
  FlashPtGTLT: string;
  FlashPtOverride: string;
  FlashPtMethod: string;
  MSDSPath: string;
  EURiskPhrases: string;
  EUSafetyPhrases: string;
  AddedBy: string;
  AddedDt: string;
  UpdatedDt: string;
  UpdatedBy: string;
  INNName: string;
  PhEurName: string;
  IUPACName: string;
  Restriction: string;
  FunctionCode: string;
  PreviousCost: string;
  DrugName: string;
  SKU: string;
  RawMatSource: string;
  RMAbbreviation: string;
  ReOrderQty: string;
  Exemptornot: string;
  RMLeadTime: string;
  Monograph: string;
  IncidIngredient: string;
  BlendProcedure: string;
  VOCContributor: string;
  Approved: string;
  COAPath: string;
  Origin: string;
  MOQ: string;
  MOQunit: string;
  NPACertified: string;
  NPAExpiry: string;
  ApprovalCode: string;
  PreviousVenderCode: string;
  GMOYesOrNo: string;
  GlutenYesOrNo: string;
  SupplierRMNo: string;
  ProcessLeadTime: string;
  PreprocessLeadTime: string;
  PostprocessLeadTime: string;
  StatusReason: string;
  Halal: string;
  Kosher: string;
  AlertRemarks: string;
  EBSNumber: string;
  CurrSupplierPriority: string;
  PrevSupplierPriority: string;
  LastPOCost: string;
  LastPOUnit: string;
  LastPODt: string;
  RMConcentration: string;
  RMAssayValue: string;
  IsBlend: string;
  Hazardous: string;
  ReOrderUnit: string;
  ContactPerson: string;
  ContactNo: string;
  fax: string;
  Address: string;
  name: string;
  SG: string;
  Distributor: string;
  phoneNumber: string;
  website: string;
  MOQUnit: string;
  code: string;
  SupplierKey: string;
  email: string;
  lblusername: string;
  CmbStatus: string;
  cmbUOM1: string;
  cmbcostuom: string;
  cmbLastper: string;
  CmbCategory: string;
  CmbSubCategory: string;
  ifracas: string;
  IsIFRAFilled: string;
  IsIFRAAudit: string;
  dtpLastCost: string;
  oldstdcost: string;
  oldcost: string;
  oldpriorityNA: string;
  cmbpriorityno: string;
  oldpriorityno: string;

  shippingpriceunit: string;
  stdpriceunit: string;
  stdprice: string;
  stdpricedate: string;
  shippingprice: string;
  shippingpricedate: string;


}
export class AuditData {
  txtRegulatoryNotes: string;
  txtWord1: string;
  txtWord2: string;
  txtWord3: string;
  txtWord4: string;
  txtWord5: string;
  txtWord6: string;
  txtExcel1: string;
  txtExcel2: string;
  txtExcel3: string;
  txtExcel4: string;
  txtExcel5: string;
  txtExcel6: string;
  txtpdf1: string;
  txtpdf2: string;
  txtpdf3: string;
  txtpdf4: string;
  txtpdf5: string;
  txtpdf6: string;
  txtpdf7: string;
  txtAddtl1: string;
  txtAddtl2: string;
  txtAddtl3: string;
  txtAddtl4: string;
  txtAddtl5: string;
  txtAddtl6: string;
  txtAddtl7: string;






}
export class IFRAdata {
  txtSourceinfo: string;
  txtIFRAAmmendment: string;
  txtFEMA: string;
  txtRIFMD: string;
  txtIFRACI: string;
  txtIFRACIB: string;
  txtIFRACII: string;
  txtClassThree: string;
  txtClassThreeB: string;
  txtClassThreeC: string;
  txtClassThreeD: string;
  txtIFRACIV: string;
  txtIFRACIVB: string;
  txtIFRACIVC: string;
  txtIFRACIVD: string;
  txtIFRACV: string;
  txtIFRACVI: string;
  txtIFRACVII: string;
  txtIFRACVIIB: string;
  txtIFRACVIII: string;
  txtIFRACVIIIB: string;
  txtIFRACIX: string;
  txtIFRACIXB: string;
  txtIFRACIXC: string;
  txtIFRACX: string;
  txtIFRACXB: string;
  txtIFRACXI: string;
  txtIFRACXIB: string;
}
export class Datasave {
  CmbStatus: string;
  cmbUOM1: string;
  cmbcostuom: string;
  RMConcentration: string;
  cmbLastper: string;
  CmbCategory: string;
  CmbSubCategory: string;
  lblusername: string;
  AddedDt: string;
  CostUnit: string;
  LastPOUnit: string;
  DefaultUnit: string;
  StatusId: string;
  CategoryId: string;
  SubCategoryId: string;
  RMAbbreviation: string;
  chkHazard: string;
  CmbPriorityno: string;
  CurrSupplierPriority: string;
  oldpriorityno: string;
  PrevSupplierPriority: string;
  ItemCode: string;
  SKU: string;
  GeneralItemCode: string;
  Description: string;
  IngredientTradeName: string;
  SupercededBy: string;
  SupercededDate: string;
  UnitCost: string;
  LastPOCost: string;
  CostDt: string;
  LastPODt: string;
  HMIS_Health: string;
  HMIS_Flammability: string;
  HMIS_Physical: string;
  HMIS_Personal: string;
  NFPA_Health: string;
  NFPA_Flammability: string;
  NFPA_Reactivity: string;
  NFPA_Special: string;
  FlashPtCelsious: string;
  FlashPtFlammable: string;
  FlashPtGTLT: string;
  FlashPtMethod: string;
  FlashPtOverride: string;
  SG: string;
  MSDSPath: string;
  VendorCode: string;
  EURiskPhrases: string;
  EUSafetyPhrases: string;
  INNName: string;
  PhEurName: string;
  IUPACName: string;
  Restriction: string;
  FunctionCode: string;
  Notes: string;
  code: string;
  SupplierKey: string;
  name: string;
  Address: string;
  email: string;
  Distributor: string;
  ContactPerson: string;
  ContactNo: string;
  phoneNumber: string;
  fax: string;
  website: string;
  ReOrderQty: string;
  ReorderUnit: string;
  RawMatSource: string;
  RMLeadTime: string;
  MOQ: string;
  MOQUnit: string;
  PreviousCost: string;
  AlertRemarks: string;
  Approved: string;
  Exemptornot: string;
  Monograph: string;
  DrugName: string;
  IncidIngredient: string;
  VOCContributor: string;
  BlendProcedure: string;
  COAPath: string;
  Origin: string;
  NPAExpiry: string;
  NPACertified: string;
  SupplierRMNo: string;
  Kosher: string;
  Halal: string;
  RMAssayValue: string;
  IsBlend: string;
  GlutenYesOrNo: string;
  GMOYesOrNo: string;
  PreprocessLeadTime: string;
  ProcessLeadTime: string;
  PostprocessLeadTime: string;
  EBSNumber: string;
  AddedBy: string;
  ifracas: string;
  IsIFRAFilled: string;
  IsIFRAAudit: string;


  shippingpriceunit: string;
  stdpriceunit: string;
  stdprice: string;
  stdpricedate: string;
  shippingprice: string;
  shippingpricedate: string;

}
