import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchSupplierComponent } from '../add-supplier/search-supplier/search-supplier.component';
import { MessageBoxComponent } from '../../message-box/message-box.component';

@Component({
  selector: 'app-rmsaveas',
  templateUrl: './rmsaveas.component.html',
  styleUrls: ['./rmsaveas.component.css']
})
export class RmsaveasComponent implements OnInit {
  defaultUOMload_data: any;
  datarawsubcategoryload: any;
  datarawcategoryload: any;
  sgcalcload: any;
  saveusdetails: string[];
  RMdataList: Datasave[][] = [];
  rawmaterial_save_data: any;
  CategoryName: string = "Additive";
  Status: string = 'Active';
  costDt: string = '';
  defaultUnit: string = 'Kg';
  costunit: string = 'Kg';
  sg: string = '1.000';
  lbgal: string = '8.345';
  SubCategoryName: string = '';
  inciname: string;
  itemcode: string;
  pricedate: string = '';
  suppkey: string;
  suppnam: string;
  supp_code: string;
  currcost: string = '0.01';
  tradename: string = '';
  constructor(public dialog: MatDialog, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  dateChange(event) {
    this.pricedate = event.target.value;

  }
  onChange(val) {
    this.SubCategoryName = val;
  }
  opensuppliers(): void {
    const dialogRef = this.dialog.open(SearchSupplierComponent, {
      width: '60%', height: '70%', disableClose: true

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.suppkey = result[0];
      this.suppnam = result[1];
      this.supp_code = result[2];

    });
  }
  rawsubcateload() {
    this.rawsubcategoryload(this.CategoryName).subscribe((rawsubcategoryload) => {
      console.warn("rawsubcategoryload", rawsubcategoryload)
      this.datarawsubcategoryload = rawsubcategoryload
    })
  }
  rawsubcategoryload(categoryname: string) {
    var catename: string = categoryname;
    let params1 = new HttpParams().set('CategoryName', catename);
    return this.http.get("https://smartformulatorrawmaterialwebservice4.azurewebsites.net/LoadSubCategorycmb", { params: params1 })
  }
  defaultUOMload() {
    return this.http.get("https://smarformulatorrawmaterialswebservice2.azurewebsites.net/UnitTableLoad")
  }
  rawcategoryload() {
    return this.http.get("https://smartformulatorrawmaterialswebservice3.azurewebsites.net/loadrawcategory")
  }
  blurEventsg(event: any) {
    var defsg: Number = Number(event.target.value);
    this.sg = (defsg.toFixed(3)).toString();
    if (Number(this.sg) < 0 || isNaN(Number(this.sg))) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter only numbers or integers' } });
      this.sg = "0.000";
    }
    this.SGcalculation(this.sg).subscribe((sgcalcload) => {
      console.warn("SGCalcload", sgcalcload)
      this.sgcalcload = sgcalcload
      var sg: Number = Number(this.sgcalcload)
      this.lbgal = sg.toFixed(3).toString();
    })
  }
  SGcalculation(sg: string) {
    var sgoverride: string = sg;
    let params1 = new HttpParams().set('txtSGOverride', sgoverride);
    return this.http.get("https://smarformulatorrawmaterialwebservice7.azurewebsites.net/sgcalculation", { params: params1, })
  }
  Rawmaterial_Save() {

    if (this.inciname == "" || this.inciname == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'please enter INCI Name' } });
    }

    else if
      (this.suppnam == undefined || this.suppnam == "" || this.supp_code == "" || this.supp_code == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter Supplier' } });
    }

    else {

      this.RMdataList[0] = ([{



        AddedBy: 'admin',
        AddedDt: this.pricedate,
        cmbPrefix: 'CUSTOM',
        CategoryId: '',
        CmbCategory: this.CategoryName,
        CmbSubCategory: this.SubCategoryName,
        Address: '',
        AlertRemarks: '',
        Approved: '',
        BlendProcedure: '',

        COAPath: '',
        code: this.supp_code,
        ContactNo: '',
        ContactPerson: '',
        CostDt: this.pricedate,
        CostUnit: this.defaultUnit,
        DefaultUnit: this.defaultUnit,
        Description: this.inciname,
        Distributor: '',
        DrugName: '',
        EBSNumber: '',
        email: '',
        EURiskPhrases: '',
        EUSafetyPhrases: '',
        Exemptornot: '',
        fax: '',
        FlashPtCelsious: '',
        FlashPtFlammable: '',
        FlashPtGTLT: '',
        FlashPtMethod: '',
        FlashPtOverride: '',
        FunctionCode: '',
        GeneralItemCode: this.itemcode,
        GlutenYesOrNo: '',
        GMOYesOrNo: '',
        Halal: '',
        HMIS_Flammability: '0',
        HMIS_Health: '',
        HMIS_Personal: '',
        HMIS_Physical: '0',
        IncidIngredient: '',
        IngredientTradeName: this.tradename,
        ItemCode: '',
        IUPACName: '',
        Kosher: '',
        LastPOCost: '',
        LastPODt: '',
        LastPOUnit: '',
        Monograph: '',
        MOQ: '0',
        MSDSPath: '',
        name: this.suppnam,
        NFPA_Flammability: '0',
        NFPA_Health: '0',
        NFPA_Reactivity: '0',
        NFPA_Special: '',
        Notes: '',
        NPACertified: '',
        Origin: '',
        PhEurName: '',
        phoneNumber: '',
        PostprocessLeadTime: '',
        PreprocessLeadTime: '',
        PreviousCost: '',
        ProcessLeadTime: '',
        RawMatSource: '',
        ReOrderQty: '0',
        Restriction: '',
        RMAssayValue: '',
        RMConcentration: '',
        RMLeadTime: '0',
        SG: this.sg,
        SKU: '',
        StatusId: '',
        SubCategoryId: '',
        SupercededBy: 'admin',
        SupercededDate: '',
        SupplierKey: this.suppkey,
        UnitCost: this.currcost,
        VendorCode: this.supp_code,
        VOCContributor: '',
        website: '',
        CmbStatus: this.Status,
        chkHazard: '',
        cmbcostuom: this.costunit,
        SupplierRMNo: '',
        ReorderUnit: '',
        PrevSupplierPriority: '',
        MOQUnit: '',
        INNName: '',
        IsBlend: '',
        CurrSupplierPriority: '',
        cmbUOM1: this.defaultUnit,
        lblusername: 'admin',
        cmbLastper: '',
        CmbPriorityno: '',
        NPAExpiry: this.pricedate,
        oldpriorityno: '',
        RMAbbreviation: 'CUSTOM',
        ifracas: '',
        IsIFRAFilled: '',
        IsIFRAAudit: '',
        shippingpriceunit: '',
        stdpriceunit: '',
        stdprice: '',
        stdpricedate: '',
        shippingprice: '',
        shippingpricedate: '',


      }]);

      this.Rawmaterial_saveupdateup().subscribe((rawmaterial_save) => {
        console.warn("rawmaterial_save", rawmaterial_save)
        this.rawmaterial_save_data = rawmaterial_save

        if (this.rawmaterial_save_data == "Inserted") {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "RawMaterial:" + " " + this.inciname + " is saved Successfully." } });
          this.rawmaterial_save_data = ""
        }
        else if (this.rawmaterial_save_data == "INCIName")
        {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "INCI name already exists. Choose another one." } }); this.rawmaterial_save_data = ""
        }


      })
    }

  }

  Rawmaterial_saveupdateup() {
    var datalistraw: any = JSON.stringify(this.RMdataList);
    /*  var UserName: any = "admin";*/
    let params1 = new HttpParams().set('RawmaterialDetailjson', datalistraw);
    return this.http.get("https://smartformulatorrawmaterialvolumepricingwebservice.azurewebsites.net/RMSaveas", { params: params1, responseType: 'text' })
  }

  ngOnInit() {
    this.saveusdetails = this.data.displaydata;
    this.pricedate = new Date().toISOString().split('T')[0];
    this.inciname = this.saveusdetails[0];
    this.itemcode = this.saveusdetails[1];
    this.defaultUOMload().subscribe((defaultUOMload) => {
      console.warn("defaultUOMload", defaultUOMload)
      this.defaultUOMload_data = defaultUOMload
    })
    this.rawcategoryload().subscribe((rawcategoryload) => {
      console.warn("rawcategoryload", rawcategoryload)
      this.datarawcategoryload = rawcategoryload
    })
  }

}
export class Datasave {
  CmbStatus: string;
  cmbUOM1: string;
  cmbcostuom: string;
  cmbPrefix: string;
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
