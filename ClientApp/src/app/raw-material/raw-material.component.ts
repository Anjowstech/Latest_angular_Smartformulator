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
  datarawcategoryload: any;
  name: string;
  gmconverter: any = 3785.2286;
  ccconverter: any = 453.5924;
  gravity: any = 1.000;
  abb: string = '';
  abbdescription: string = '';
  formname: string;
  datasaveabbraw: any;
  defaultdataprefix: any;
  risklist = [];
  searchdata = [];
  kgm3: any;
  lb_gal: any;
  risklistdata = [];
  inciname: string;
  itemli: string;
  supp_name: string;
  tradn: string;
  val2: any;
  incicode: string;
  datarawpropertyload: any;
  Rawmaterialdetails: any = [];
  rawmaterial_update_data: any;
  defaultUOMload_data: any;
  Rawdata: any;
  GMOYesOrNo: string;
  GlutenYesOrNo: string;
  Halal: string;
  itemcode: string;
  generalitemcod: string;
  description: string;
  ingredienttradeName: string;
  categoryId: string;
  CategoryName: string;
  Status: string;
  SupplierKey: string;
  SubCategoryName: string;
  subCategoryId: string;
  statusId: string;
  supercededBy: string;
  unitCost: string;
  costUnit: string;
  costDt: string;
  notes: string;
  AlertRemarks: string;
  EURiskPhrases: string;
  vendorcode: string;
  hMISHealth: string;
  hMISFlammability: string;
  hMISPhysical: string;
  hMISPersonal: string;
  nFPAHealth: string;
  nFPAFlammability: string;
  supercededDate: string;
  rmAssayValue: string;
  ebsNumber: string;
  lastPOCost: string;
  drugName: string;
  sku: string;
  COAPath: string;
  MSDSPath: string;
  defaultUnit: string;
  LastPOUnit:string
  reorderQty: string;
  origin: string;
  concentration: string;
  RMSource: string;
  proleadtime: string;
  preloadtime: string;
  postleadtime: string;
  rmleadtime: string;
  sg: string;
  costdate: string;
  LastPODt: string;
  date: string;
  suppliername: string;
  supplierkey: string;
  suppliercode: string;
  supp_code: string;
  suppkey: string;
  flashPtCelsious: string;
  NFPA_Health: string;
  FunctionCode: string;
  NFPA_Flammability: string;
  nFPASpecial: string;
  flashPtMethod: string;
  flashPtOverride: string;
  flashPtFlammable: string;
  NPACertified: string;
  nFPAReactivity:string
  monograph: string;
  Kosher: string;
  IncidIngredient: string;
  Exemptornot: string;
  PhEurName: string;
  MOQ: string;
  BlendProcedure: string;
  EUSafetyPhrases: string;
  Approved: string;
  VOCContributor: string;
  PreviousCost:string
  login_form: FormGroup;

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
  blurEvent(event: any) {
    this.gravity=0;
     this.gravity = event.target.value;

    
     var total = ((this.gravity) * this.gmconverter) / this.ccconverter;
     this.gravity = total.toFixed(3);
     this.kgm3 = this.gravity * 1000;
  }
  blurEvent2(event: any) {
    this.lb_gal = 0;
    this.lb_gal = event.target.value;


    var total = ((this.lb_gal) * this.ccconverter) / this.gmconverter;
    this.lb_gal = total.toFixed(3);
   
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

    });
  }

  Rawmaterialdataload(rawdatas: any) {
    for (let item of rawdatas) {
      this.incicode = item.ItemCode;
      this.generalitemcod = item.GeneralItemCode;
      this.inciname = item.Description;
      this.tradn = item.IngredientTradeName;
      this.ebsNumber = item.EBSNumber;
      this.lastPOCost = item.LastPOCost;
      this.drugName = item.DrugName;
      this.notes = item.Notes;
      this.sku = item.SKU;
      this.rmAssayValue = item.RMAssayValue;
      this.supercededBy = item.SupercededBy;
      this.supercededDate = item.SupercededDate;
      this.defaultUnit = item.DefaultUnit;
      this.LastPOUnit = item.LastPOUnit;
      this.reorderQty = item.ReOrderQty;
      this.origin = item.Origin;
      this.concentration = item.RMConcentration;
      this.RMSource = item.RawMatSource;
      this.proleadtime = item.ProcessLeadTime;
      this.preloadtime = item.PreprocessLeadTime;
      this.postleadtime = item.PostprocessLeadTime;
      this.rmleadtime=item.RMLeadTime
      this.sg = item.SG;
      this.MSDSPath = item.MSDSPath
      this.CategoryName = item.CategoryName;
      this.SubCategoryName = item.SubCategoryName;
      this.Status = item.Status;
      this.suppkey = item.SupplierKey;
      this.BlendProcedure = item.BlendProcedure;
      this.COAPath = item.COAPath
      this.SupplierKey = item.SupplierKey;
      this.vendorcode = item.VendorCode
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
      this.unitCost = item.UnitCost;
      this.costUnit = item.CostUnit;
      this.costDt = formatDate(new Date(item.CostDt), 'yyyy-MM-dd', 'en-US');
      this.LastPODt = formatDate(new Date(item.LastPODt), 'yyyy-MM-dd', 'en-US');
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
      this.FunctionCode = item.FunctionCode

    }
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
    const dialogRef = this.dialog.open(LoadPropertyComponent, {
      width: '50%', height: '50%', disableClose: true
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
      width: '60%', height: '60%', disableClose: true
    });
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
  defaultUOMload() {
    return this.http.get("https://smarformulatorrawmaterialswebservice2.azurewebsites.net/UnitTableLoad")
  }
  rawpropertyload(rawpropertyload: string) {
    var rawprop: string = rawpropertyload;
     
    let params1 = new HttpParams().set('itemcode', rawprop);
       
    return this.http.get("http://localhost/raw-sup-webservice2/loadrawproperty2", { params: params1 });

  }

  Rawmaterial_Update(incredcode: string, incname: string, suppliername: string, supplierkey: string, rmitem: string) {

    this.markFormTouched(this.login_form);
    if (this.login_form.valid) {
      var operation: string = "Update";
      var username: string = "admin";
      var suppliercode = this.supp_code;
      var sg = this.lb_gal;
      var tradename: string = this.tradn;
      var chemist: string = this.supercededBy;
      var unitid = this.defaultUnit;
      var unitcost = this.unitCost;
      this.Rawmaterialdetails = [incredcode, incname, chemist, "11/26/2021 8:00:00 AM", unitid, unitcost, unitid, this.costDt, sg, this.vendorcode, this.vendorcode, suppliername, supplierkey, tradename, rmitem]
      this.Rawmaterial_saveupdateup(this.Rawmaterialdetails, operation, username).subscribe((rawmaterial_update) => {
        console.warn("rawmaterial_update", rawmaterial_update)
        this.rawmaterial_update_data = rawmaterial_update
      })
    } else {
      this.login_form.controls['terms'].setValue(false);
    }
  };
  Rawmaterial_Save(incredcode: string, incname: string, suppliername: string, supplierkey: string, rmitem: string) {

    this.markFormTouched(this.login_form);
    if (this.login_form.valid) {
      var operation: string = "Save";
      var username: string = "admin";
      var suppliercode = this.supp_code;
      var sg = this.lb_gal;
      var tradename: string = this.tradn;
      var chemist: string = this.supercededBy;
      var unitid = this.defaultUnit;
      var unitcost = this.unitCost;
      this.Rawmaterialdetails = [incredcode, incname, chemist, "11/26/2021 8:00:00 AM", unitid, unitcost, unitid, this.costDt, sg, suppliercode, suppliercode, suppliername, supplierkey, tradename, rmitem]
      this.Rawmaterial_saveupdateup(this.Rawmaterialdetails, operation, username).subscribe((rawmaterial_save) => {
        console.warn("rawmaterial_save", rawmaterial_save)
        this.rawmaterial_update_data = rawmaterial_save
      })
    } else {
      this.login_form.controls['terms'].setValue(false);
    }
  };

  markFormTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) { control.markAsTouched(); this.markFormTouched(control); }
      else { control.markAsTouched(); };
    });
  };

  Rawmaterial_saveupdateup(Rawmaterialdetails, operation, username) {

    var Rawdetails: any = Rawmaterialdetails;
    let params1 = new HttpParams().set('rawmaterialdetail', Rawdetails).set('operation', operation).set('username', username);
    return this.http.get("https://smartformulatorrawmaterialwebservices.azurewebsites.net/Save_Update_Rawmaterial", { params: params1, responseType: 'text' })
  }

  ngOnInit() {
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
