import { Component, OnInit, ViewChild } from '@angular/core';
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
import { PdrManagementComponent } from '../pdr-management/pdr-management.component';
import { FormulaLookupComponent } from '../formula-lookup/formula-lookup.component';
import { SearchFormulaComponent } from 'src/app/formula-lookup/search-formula/search-formula.component';
import { SearchINCINameComponent } from 'src/app/raw-material/search-inci-name/search-inci-name.component';
import { FunctionSearchComponent } from 'src/app/raw-material/function-search/function-search.component';
import { SearchSupplierComponent } from 'src/app/raw-material/add-supplier/search-supplier/search-supplier.component';
import { PDRListSearchComponent } from 'src/app/sample-management/pdrlist-search/pdrlist-search.component';
import { SearchCustomerComponent } from 'src/app/formula-lookup/customer-details/search-customer/search-customer.component';
import { SearchCategoryComponent } from 'src/app/global-search/search-category/search-category.component';
import { SearchSubCategoryComponent } from 'src/app/global-search/search-sub-category/search-sub-category.component';
import { SearchLabnotebookComponent } from 'src/app/global-search/search-labnotebook/search-labnotebook.component';
import { SearchInciComponent } from 'src/app/global-search/search-inci/search-inci.component';
import { SearchTradenameComponent } from 'src/app/global-search/search-tradename/search-tradename.component';
import { SearchCASComponent } from 'src/app/raw-material/add-cas-details/search-cas/search-cas.component';
import { ProductizationComponent } from 'src/app/productization/productization.component';
import { RawMaterialComponent } from 'src/app/raw-material/raw-material.component';
import { SampleManagementComponent } from 'src/app/sample-management/sample-management.component';

//import { DxReportViewerComponent } from 'devexpress-reporting-angular';



@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.css']
})
export class GlobalSearchComponent implements OnInit {
  formulacode: string = '';
  formulaname: string = '';
  PDRno: string = '';
  issearchform: boolean = false;
  isLoading: boolean = true;
  FunctionCode: string = '';
  FunctionName: string = '';
  Supplierkey: string = '';
  Suppliername: string = '';
  SupplierCode: string = '';
  inciname: string = '';
  itemli: string = '';
  Category: string = '';
  SubCategory: string = '';
  Projectname: string = '';
  FormulaStatus: string = '';
  PDRStatus: string = '';
  customerkey: string;
  custmrcode: string;
  customername: string;
  customercode: string;
  issearchcustomer: boolean = true;
  issearchcustomersave: boolean = false;
  todaydate: Date;
  date: string;
  FormulaFromDate: string;
  FormulaToDate: string;
  LabNotebook: string;
  INCIName: string;
  dataresultLoadpdrlist: any;
  TradeName: string;
  CASno: string;
  Description: string;
  productdata: string;
  productnamedata: string;
  ProductDt: string;
  PDRnodata: string;
  cstmrnamedata: string;
  searchpdritems: string[];
  formuladatalist: any[];
  dataresultproductlist: any;
  dataloadsupplierapprovedrm: any;
  dataloadsupplierapprovedrmlength: string = "0";
  SubmissionNum: string;
  SubmissionDate: string;
  PDRStatusdata: string;
  Pdrdata: string;
  cstmrname: string;
  searchitems: string[];
  filterMetadata = { count: 0 };
  dataresultsearchSubmission: any;
  countrecords: any;
  impurityload_data: any;
  item: string;
  Inciname: string;
  impurity: string;
  ppm: string;
  percentage: string;
  usagepercentage: string;
  searchimpurityitems: string[];
  searcformulaproductitems: string[];
  dataLoadProductlist: any;
  Formulacode: string;
  Formulaname: string;
  pdrdata: string;
  pronamedata: string;
  formula: string;
  formulaNam: string;
  qty: string;
  Supplrname: string;
  searchrawmatformulaitems: string[];
  rawmatdatalist: any;
  dataresultLoadrawmatformulalist: any;
  Functiondatalist: any;
  itemcode: string;
  Incinam: string;
  Ingtrade: string;
  supplnam: string;
  dataresultLoadFunctionSearchlist: any;
  supplier: any;
  Impurityrawmatdatalist: any;
  Impurityformuladatalist: any;
  Impuritydatalist: any;
  ppmpercent: any;
  usage: any;
  dataresultLoadImpurityformulaSearchlist: any;
  dataresultLoadImpuritySearchlist: any;
  Projectdatalist: any;
  formulastatus: any;
  submmissionstatus: any;
  dataLoadProjectSearchlist: any;
  Customerdatalist: any;
  projectname: string;
  dataresultLoadCustomerSearchlist: any;
  rawmatblenddatalist: any;
  blendname: string;
  dataresultLoadrawmatblenddatalist: any;
  pdrno: string;
  PdrDt: string;
  userdata: string;
  completedDt: string;
  startdt: string;
  labrefno: string;
  SupercededBy: string;
  AddedDT: string;
  searchpdrstatusitems: any;
  ProjectName: string;
  pdrstatus: string;
  dataresultLoadFormulaStatus: any;
  dataresultLoadPDRStatus: any;
  cusname: string;
  categoryname: string;
  searchmultipleformulaitems: any;
  username: string = "admin";
  chemist: string;
  Status: string;
  Natural: string;
  createdDt: string;
  labref: string;
  searchformulabydateitems: any;
  createdby: string;
  status: string;
  adddedDt: string;
  dataresultLoadLabNotebooklist: any;
  searchmultiplerawmatitems: any;
  tradenam: string;
  dataresultLoadFormulabydatelist: any;
  dataresultLoadtradeformuladatalist: any;
  ingredientcost: any;
  leadtime: any;
  Naturalindex: any;
  dataresultLoadtradesupplierdatalist: any;
  subcategory: any;
  category: any;
  tradename: any;
  searchrawmatcasitems: any[];
  dataresultLoadCasRawmatlist: any;
  dataresultLoadCasFormulalist: any;
  name: any;
  dataresultLoadCategorysublist: any;
  dataresultLoadCategoryrawmatlist: any;
  dataresultLoadCategoryFormulalist: any;
  searchsupplieritems: string[];
  dataresultLoadsupplierdatalist: any;
  dataresultLoadApprovesupplierdatalist: any;
  productname: any;
  dataresultLoadproductizedformulalist: any;
  naturalpercent: any;
  dataresultLoadformulanaturallist: any;
  dataresultLoadtradeblenddatalist: any;
  blendcode: any;
  suppliername: any;
  dataresultLoadtradeblendrawmatdatalist: any;
  dataresultLoadtradeproductizedformulalist: any;
  dataresultLoadRMitemproductizedformulalist: any;
  dataresultLoadRMitemblendrawmatdatalist: any;
  dataresultLoadRMitemsupplierdatalist: any;
  dataresultLoadRMitemblenddatalist: any;
  dataresultLoadRMitemformuladatalist: any;
  dataresultLoadSubCategoryrawmatlist: any;searchformulastatusitems: string[];
    searchlabbookitems: string[];
  dataresultLoadSubCategoryFormulalist: any;searchsupplierrawmatitems: any[];
    searchsupplierformulaitems: string[];
    searchrawmatcategoryitems: any[];
    searchcategoryformulaitems: string[];
    searchrawmatsubcategoryitems: any[];
    searchsubcategoryformulaitems: string[];
    searchprojectitems: string[];
    searchcustomeritems: string[];
    dataresultLoadmultipleFormulalist: Object;
;
    Ingcost: any;
  dataresultLoadSupplierrawmatlist: any;;
  dataresultLoadSupplierformulalist: any;;
  dataresulLoadImpurityrawmatSearchlist: any;
  dataresultLoadRMitemformulanaturallist: any;
  genitemcode: string;
  CategoryId: string;
  SubCategoryId: string;
  Supplier: string;
  searchfunctionitems: string[];
  searchimpurityrawmatitems: string[];
  searchimpurityformulaitems: any;
  impurityitems: any;
  searchformulacasitems: any;



  constructor(public dialog: MatDialog, private http: HttpClient, private Datashare: DataShareServiceService, private router: Router) { }
  //------------------------------------------------FORMULATION---------------------------------------------
  searchformula(): void {

    const dialogRef = this.dialog.open(SearchFormulaComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {
        //this.issearchform = true;

        this.formulacode = result[0];
        this.formulaname = result[1];
        this.Loadsearchsample().subscribe((resultsearchSubmission) => {
          this.isLoading = false;
          console.warn("resultsearchSubmission", resultsearchSubmission)
          this.dataresultsearchSubmission = resultsearchSubmission
          this.countrecords = this.dataresultsearchSubmission.length

        })
        this.Loadproductlist().subscribe((resultproductlist) => {
          this.isLoading = false;
          console.warn("resultproductlist", resultproductlist)
          this.dataresultproductlist = resultproductlist
        })

      }

    });
  }
  clearsearch() {
    this.formulacode = '';
    this.formulaname = '';
    this.dataLoadProductlist = '';
  }
  Loadproductlist() {

    var formuladatalist: any = this.formulacode;

    let params1 = new HttpParams().set('FormulaCode', formuladatalist);
    console.log(params1);
    return this.http.get("https://globalsearchwebservice1.azurewebsites.net/loadFormulation", { params: params1 })
  }


  setvalues(ProductList_search) {
    this.productdata = ProductList_search.ProductCode;
    this.productnamedata = ProductList_search.ProductName;
    this.ProductDt = ProductList_search.ProductDate;
    this.PDRnodata = ProductList_search.PDRNo;
    this.cstmrnamedata = ProductList_search.CusName;
    this.searchpdritems = [this.productdata, this.productnamedata, this.ProductDt, this.PDRnodata, this.cstmrnamedata]
  }
 
  Loadsearchsample() {
    var sampledatalist: any = this.formulacode;

    let params1 = new HttpParams().set('formulacode', sampledatalist);
    console.log(params1);
    return this.http.get("https://globalsearchwebservice1.azurewebsites.net/Sampledetails", { params: params1 });
  }

  setsamplevalues(Submission_search) {
    this.SubmissionNum = Submission_search.SubmissionNo;
    this.SubmissionDate = Submission_search.SubmissionDate;
    this.PDRStatusdata = Submission_search.PDRStatus;
    this.Pdrdata = Submission_search.PDRNo;
    this.cstmrname = Submission_search.CusName;
    this.searchitems = [this.SubmissionNum, this.SubmissionDate,
    this.cstmrname, this.PDRStatusdata]
  }
  
  //-------------------------------------------------FORMULA IMPURITIES------------------------------------------------------
  searchformulaimpurities(): void {

    const dialogRef = this.dialog.open(SearchFormulaComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {
        //this.issearchform = true;

        this.Formulacode = result[0];
        this.Formulaname = result[1];

        this.Impurityload(this.Formulacode).subscribe((impurityload) => {
          this.isLoading = false;
          console.warn("impurityload", impurityload)
          this.impurityload_data = impurityload
        })

      }

    });
  }
  clearsearchimpurities() {
    this.Formulacode = '';
    this.Formulaname = '';
    this.impurityload_data = '';
  }



  Impurityload(formcode: string) {
    var formulacode: string = this.Formulacode;
    let params1 = new HttpParams().set('FormulaCode', formulacode);
    return this.http.get("https://formulalookupwebservice13.azurewebsites.net/impurityload", { params: params1 })
  }

  setimpurityvalues(Impurity_search) {
    this.item = Impurity_search.blendcode;
    this.Inciname = Impurity_search.blendinci;
    this.impurity = Impurity_search.blendname;
    this.ppm = Impurity_search.ppm;
    this.percentage = Impurity_search.ppmpercent;
    this.usagepercentage = Impurity_search.usage;
    this.searchimpurityitems = [this.item, this.Inciname,
    this.impurity, this.ppm, this.percentage, this.usagepercentage]
  }
  
  //-------------------------------RAWMATERIALS---------------------------------------------------------------------

  searchINCIName(): void {

    const dialogRef = this.dialog.open(SearchInciComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {
        //this.issearchform = true;
        this.INCIName = result[0];
        this.Loadrawmatformulalist().subscribe((resultLoadrawmatformulalist) => {
          console.warn("resultLoadrawmatformulalist", resultLoadrawmatformulalist)
          this.dataresultLoadrawmatformulalist = resultLoadrawmatformulalist
        })
        this.Loadrawmatblenddatalist().subscribe((resultLoadrawmatblenddatalist) => {
          console.warn("resultLoadrawmatblenddatalist", resultLoadrawmatblenddatalist)
          this.dataresultLoadrawmatblenddatalist = resultLoadrawmatblenddatalist

        })
        this.Loadsupplierdatalist().subscribe((resultLoadsupplierdatalist) => {
          console.warn("resultLoadsupplierdatalist", resultLoadsupplierdatalist)
          this.dataresultLoadsupplierdatalist = resultLoadsupplierdatalist
        })
        this.LoadApprovesupplierdatalist().subscribe((resultLoadApprovesupplierdatalist) => {
          console.warn("resultLoadApprovesupplierdatalist", resultLoadApprovesupplierdatalist)
          this.dataresultLoadApprovesupplierdatalist = resultLoadApprovesupplierdatalist
        })
        this.Loadproductizedformulalist().subscribe((resultLoadproductizedformulalist) => {
          console.warn("resultLoadproductizedformulalist", resultLoadproductizedformulalist)
          this.dataresultLoadproductizedformulalist = resultLoadproductizedformulalist
        })
        this.Loadformulanaturallist().subscribe((resultLoadformulanaturallist) => {
          console.warn("resultLoadformulanaturallist", resultLoadformulanaturallist)
          this.dataresultLoadformulanaturallist = resultLoadformulanaturallist
        })
      }
    });

  }
  clearINCIName() {
    this.INCIName = '';
    this.dataresultLoadrawmatformulalist = "";
    this.dataresultLoadrawmatblenddatalist = "";
    this.dataresultLoadsupplierdatalist = "";
    this.dataresultLoadApprovesupplierdatalist = "";
    this.dataresultLoadproductizedformulalist = "";
    this.dataresultLoadformulanaturallist = "";



  }
  Loadrawmatformulalist() {
    var INCIName :string = this.INCIName;
    var username: string = this.username;
    let params1 = new HttpParams().set('INCIName', INCIName)
      .set('username', username);
    return this.http.get("https://globalsearchwebservice1.azurewebsites.net/RawMaterialFormula", { params: params1 })

  }

  setrawmatformulavalues(rawmatformula_search) {
    this.pdrdata = rawmatformula_search.PDRNo;
    this.pronamedata = rawmatformula_search.ProjectName;
    this.formula = rawmatformula_search.FormulaCode;
    this.formulaNam = rawmatformula_search.FormulaName;
    this.qty = rawmatformula_search.QtyInPercentage;
    this.Supplrname = rawmatformula_search.SupplierName;
    this.searchrawmatformulaitems = [this.pdrdata, this.pronamedata, this.formula, this.formulaNam, this.qty, this.Suppliername]
  }
  Loadrawmatblenddatalist() {
    //var Query = "SELECT FormulaMain.PDRNo,FormulaMain.ProjectName,BlendFormulaPercent.FormulaCode, FormulaMain.Description as FormulaName, BlendFormulaPercent.BlendName, convert(decimal(25, 10), BlendFormulaPercent.BlendInciformulaPercent) as QtyInPercentage, Suppliers.name as SupplierName FROM BlendFormulaPercent INNER JOIN FormulaMain ON BlendFormulaPercent.FormulaCode = FormulaMain.FormulaCode INNER JOIN RawMaterials ON BlendFormulaPercent.BlendIngredientCode = RawMaterials.ItemCode INNER JOIN Suppliers ON RawMaterials.VendorCode = Suppliers.code WHERE BlendFormulaPercent.BlendInciName = '" + this.INCIName +"' order By BlendFormulaPercent.FormulaCode ";
    var blenddata: any = this.INCIName;
    let params1 = new HttpParams().set('INCIName', blenddata);
    return this.http.get("https://allsearchwebservice3.azurewebsites.net/loadblendrawmat", { params: params1 })

  }
  setrawmatblendvalues(rawmatblend_search) {
    this.pdrdata = rawmatblend_search.PDRNo;
    this.pronamedata = rawmatblend_search.ProjectName;
    this.formula = rawmatblend_search.FormulaCode;
    this.formulaNam = rawmatblend_search.Description;
    this.blendname = rawmatblend_search.BlendName;
    this.qty = rawmatblend_search.BlendInciformulaPercent;
    this.searchrawmatformulaitems = [this.pdrdata, this.pronamedata, this.formula, this.formulaNam, this.qty, this.blendname]
  }
  Loadsupplierdatalist() {
    //var Query = "SELECT  Suppliers.name,RawMaterials.GeneralItemCode,  Convert(decimal(18,3),RawMaterials.UnitCost)UnitCost , case isnull(RawMaterials.RMLeadTime, 0) when 0  then 'N/A' else cast(RawMaterials.RMLeadTime as nvarchar(10)) + ' week(s)' end RMLeadTime, case when isnull(dbo.getNaturalIndex(RawMaterials.Itemcode), 0) = 0 then 'N/A' else cast(isnull(dbo.getNaturalIndex(RawMaterials.Itemcode), 0) as nvarchar(200)) end Naturalindex  FROM RawMaterials INNER JOIN Suppliers ON RawMaterials.VendorCode = Suppliers.code WHERE(RawMaterials.Description = '" + this.INCIName +"') ORDER BY Suppliers.name";
    var rawmatsupplier: string = this.INCIName;
    let params1 = new HttpParams().set('INCIName', rawmatsupplier);
    return this.http.get("https://allsearchwebservice3.azurewebsites.net/loadrawmatsupplier", { params: params1 })

  }
  setsuppliervalues(supplier_search) {
    this.Suppliername = supplier_search.name;
    this.itemcode = supplier_search.GeneralItemCode;
    this.ingredientcost = supplier_search.UnitCost;
    this.leadtime = supplier_search.RMLeadTime;
    this.Naturalindex = supplier_search.Naturalindex;

    this.searchrawmatformulaitems = [this.Suppliername, this.itemcode, this.ingredientcost, this.leadtime, this.Naturalindex]
  }
  LoadApprovesupplierdatalist() {
    //var Query = "SELECT  Suppliers.name,  RawMaterials.GeneralItemCode, Convert(decimal(18,3),RawMaterials.UnitCost)UnitCost ,cast(RawMaterials.RMLeadTime as nvarchar(10)) + ' week(s)' as RMLeadTime FROM RawMaterials INNER JOIN Suppliers  ON RawMaterials.VendorCode = Suppliers.code WHERE (RawMaterials.Description = '" + this.INCIName+"') and  isnull(Suppliers.Approved, 0) = 1  and isnull(RawMaterials.RMLeadTime, 0) > 0 ORDER BY Suppliers.name";
    var approverawmatsupplier: string = this.INCIName;
    let params1 = new HttpParams().set('INCIName', approverawmatsupplier);
    return this.http.get("https://allsearchwebservice3.azurewebsites.net/loadApproverawmatsupplier", { params: params1 })

  }
  setApprovesuppliervalues(Approvesupplier_search) {
    this.Suppliername = Approvesupplier_search.name;
    this.itemcode = Approvesupplier_search.GeneralItemCode;
    this.ingredientcost = Approvesupplier_search.UnitCost;
    this.leadtime = Approvesupplier_search.RMLeadTime;
    this.Naturalindex = Approvesupplier_search.Naturalindex;

    this.searchrawmatformulaitems = [this.Suppliername, this.itemcode, this.ingredientcost, this.leadtime, this.Naturalindex]

  }
  Loadproductizedformulalist() {
    //var Query = "SELECT  Product.ProductCode, Product.ProductNumber, Product.ProductName, tempformulaprocess.FormulaCode, tempformulaprocess.FormulaName, dbo.GetCustomerNameFromFormulaCode(tempformulaprocess.FormulaCode) Customer, FormulaMain.PDRNo, FormulaMain.ProjectName, tempformulaprocess.QtyInPercentage, tempformulaprocess.SupplierName, dbo.CMO_ProductWise(Product.ProductCode) as CMO  FROM tempformulaprocess INNER JOIN FormulaMain ON tempformulaprocess.FormulaCode = FormulaMain.FormulaCode INNER JOIN Product ON FormulaMain.FormulaCode = Product.FormulaCode  WHERE tempformulaprocess.INCIName = '" + this.INCIName +"' and TempFormulaProcess.username = '"+ this.username +"' ";
    var productformula: string = this.INCIName;
    var usernamedata: string = "admin";
    let params1 = new HttpParams().set('INCIName', productformula).set('usernamedata', usernamedata);
    return this.http.get("https://allsearchwebservice3.azurewebsites.net/RawMaterialProduct", { params: params1 })

  }

  setproductizedformulavalues(productizedformula_search) {
    this.productdata = productizedformula_search.ProductCode;
    this.productname = productizedformula_search.ProductName;
    this.formula = productizedformula_search.FormulaCode;
    this.formulaNam = productizedformula_search.FormulaName;
    this.pdrdata = productizedformula_search.PDRNo;
    this.pronamedata = productizedformula_search.ProjectName;
    this.cusname = productizedformula_search.Customer;
    this.qty = productizedformula_search.QtyInPercentage;
    this.Supplrname = productizedformula_search.SupplierName;
    this.searchrawmatformulaitems = [this.productdata, this.productname, this.pdrdata, this.pronamedata, this.formula,
    this.formulaNam, this.qty, this.Suppliername, this.cusname]
  }
  Loadformulanaturallist() {
    //var Query = "SELECT  FormulaMain.PDRNo,FormulaMain.ProjectName,TempFormulaProcess.FormulaCode, TempFormulaProcess.FormulaName, TempFormulaProcess.SupplierName, TempFormulaProcess.QtyInPercentage, case when  dbo.GetNaturalPercentage(TempFormulaProcess.FormulaCode, TempFormulaProcess.username) > 0 then cast(dbo.GetNaturalPercentage(TempFormulaProcess.FormulaCode, TempFormulaProcess.username) as nvarchar(200)) + '%' else 'N/A' end[NaturalPerc] FROM TempFormulaProcess INNER JOIN FormulaMain ON TempFormulaProcess.FormulaCode = FormulaMain.FormulaCode WHERE TempFormulaProcess.INCIName = '" + this.INCIName +"'  and TempFormulaProcess.username = '"+this.username +"'";
    var formulanatural: string = this.INCIName;
    var usernamedata: string = "admin";
    let params1 = new HttpParams().set('INCIName', formulanatural).set('usernamedata', usernamedata);
    return this.http.get("https://allsearchwebservice3.azurewebsites.net/RawMaterialformulanatural", { params: params1 })
  }

  setformulanaturalvalues(formulanatural_search) {
    this.pdrdata = formulanatural_search.PDRNo;
    this.pronamedata = formulanatural_search.ProjectName;
    this.formula = formulanatural_search.FormulaCode;
    this.formulaNam = formulanatural_search.FormulaName;
    this.qty = formulanatural_search.QtyInPercentage;
    this.Supplrname = formulanatural_search.SupplierName;
    this.naturalpercent = formulanatural_search.NaturalPerc;

    this.searchrawmatformulaitems = [this.pdrdata, this.pronamedata, this.formula,
    this.formulaNam, this.qty, this.Suppliername, this.naturalpercent]
  }
  //---------------------------RAWMATERIALS TRADE NAME---------------------------------------------------------------------
  searchTradeName(): void {

    const dialogRef = this.dialog.open(SearchTradenameComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {
        //this.issearchform = true;
        this.TradeName = result[0];
        this.Loadtradeformuladatalist().subscribe((resultLoadtradeformuladatalist) => {
          console.warn("resultLoadtradeformuladatalist", resultLoadtradeformuladatalist)
          this.dataresultLoadtradeformuladatalist = resultLoadtradeformuladatalist
        })
        this.Loadtradeblenddatalist().subscribe((resultLoadtradeblenddatalist) => {
          console.warn("resultLoadtradeblenddatalist", resultLoadtradeblenddatalist)
          this.dataresultLoadtradeblenddatalist = resultLoadtradeblenddatalist
        })
        this.Loadtradesupplierdatalist().subscribe((resultLoadtradesupplierdatalist) => {
          console.warn("resultLoadtradesupplierdatalist", resultLoadtradesupplierdatalist)
          this.dataresultLoadtradesupplierdatalist = resultLoadtradesupplierdatalist
        })
        this.Loadtradeblendrawmatdatalist().subscribe((resultLoadtradeblendrawmatdatalist) => {
          console.warn("resultLoadtradeblendrawmatdatalist", resultLoadtradeblendrawmatdatalist)
          this.dataresultLoadtradeblendrawmatdatalist = resultLoadtradeblendrawmatdatalist
        })
        this.Loadtradeproductizedformulalist().subscribe((resultLoadtradeproductizedformulalist) => {
          console.warn("resultLoadtradeproductizedformulalist", resultLoadtradeproductizedformulalist)
          this.dataresultLoadtradeproductizedformulalist = resultLoadtradeproductizedformulalist
        })
      }
    });

  }
  clearTradeName() {
    this.TradeName = '';
    this.dataresultLoadtradeformuladatalist = "";
    this.dataresultLoadtradeblenddatalist = "";
    this.dataresultLoadtradesupplierdatalist = "";
    this.dataresultLoadtradeblendrawmatdatalist = "";
    this.dataresultLoadtradeproductizedformulalist = "";

  }
  Loadtradeformuladatalist() {
    //var Query = "SELECT  FormulaMain.PDRNo,FormulaMain.ProjectName,FormulaDetail.FormulaCode, FormulaDetail.FormulaName, FormulaDetail.SupplierName, FormulaDetail.QtyInPercentage  FROM FormulaDetail INNER JOIN FormulaMain ON FormulaDetail.FormulaCode = FormulaMain.FormulaCode  WHERE FormulaDetail.TradeName = '"+ this.TradeName +"'";
    var tradeformula: string = this.TradeName;
    let params1 = new HttpParams().set('TradeName', tradeformula);
    return this.http.get("https://allsearchwebservice3.azurewebsites.net/loadtradeformula", { params: params1 })

  }
  setTradeformulavalues(Tradeformula_search) {
    this.pdrno = Tradeformula_search.PDRNo;
    this.projectname = Tradeformula_search.ProjectName;
    this.formulacode = Tradeformula_search.FormulaCode;
    this.formulaname = Tradeformula_search.FormulaName;
    this.qty = Tradeformula_search.QtyInPercentage;
    this.Suppliername = Tradeformula_search.SupplierName;

    this.searchrawmatformulaitems = [this.formulacode, this.formulaname, this.pdrno, this.projectname, this.qty, this.Suppliername]
  }
  Loadtradeblenddatalist() {
   // var Query = "SELECT FormulaMain.PDRNo,FormulaMain.ProjectName,BlendFormulaPercent.FormulaCode, FormulaMain.Description as FormulaName,BlendFormulaPercent.BlendName, convert(decimal(25, 10), BlendFormulaPercent.BlendInciformulaPercent) as QtyInPercentage, Suppliers.name as SupplierName FROM BlendFormulaPercent INNER JOIN FormulaMain ON BlendFormulaPercent.FormulaCode = FormulaMain.FormulaCode INNER JOIN RawMaterials ON BlendFormulaPercent.BlendIngredientCode = RawMaterials.ItemCode INNER JOIN Suppliers ON RawMaterials.VendorCode = Suppliers.code WHERE RawMaterials.IngredientTradeName = '" + this.TradeName +"' order By BlendFormulaPercent.FormulaCode ";
    var tradeblendformula: string = this.TradeName;
    let params1 = new HttpParams().set('TradeName', tradeblendformula);
    return this.http.get("https://allsearchwebservice3.azurewebsites.net/loadtradeblend", { params: params1 })

  }
  settradeblendvalues(tradeblend_search) {
    this.pdrdata = tradeblend_search.PDRNo;
    this.pronamedata = tradeblend_search.ProjectName;
    this.formula = tradeblend_search.FormulaCode;
    this.formulaNam = tradeblend_search.FormulaName;
    this.blendname = tradeblend_search.BlendName;
    this.qty = tradeblend_search.QtyInPercentage;

    this.searchrawmatformulaitems = [this.pdrdata, this.pronamedata, this.formula, this.formulaNam, this.qty, this.blendname]
  }
  Loadtradesupplierdatalist() {
   // var supplierQuery = "SELECT Suppliers.code, Suppliers.SupplierKey,  Suppliers.name, RawMaterials.UnitCost, case when isnull(dbo.getNaturalIndex(RawMaterials.Itemcode),0) = 0 then 'N/A' else cast(isnull(dbo.getNaturalIndex(RawMaterials.Itemcode), 0) as nvarchar(200)) end Naturalindex FROM RawMaterials INNER JOIN Suppliers  ON RawMaterials.VendorCode = Suppliers.code WHERE(RawMaterials.IngredientTradeName = '" + this.TradeName +"') ORDER BY Suppliers.name";
    var tradeSupplier: string = this.TradeName;
    let params1 = new HttpParams().set('TradeName', tradeSupplier);
    return this.http.get("https://allsearchwebservice3.azurewebsites.net/loadtradesupplier", { params: params1 })

  }
  setTradesuppliervalues(Tradesupplier_search) {
    this.Supplier = Tradesupplier_search.name;
    this.Suppliername = Tradesupplier_search.SupplierKey;
    this.ingredientcost = Tradesupplier_search.UnitCost;
    this.Naturalindex = Tradesupplier_search.NaturalIndex;

    this.searchrawmatformulaitems = [this.Supplier,this.Suppliername, this.ingredientcost,this.Naturalindex]
  }
  Loadtradeblendrawmatdatalist() {
    var tradeblendrawmat: string = this.TradeName;
    let params1 = new HttpParams().set('TradeName', tradeblendrawmat)
    return this.http.get("https://allsearchwebservice3.azurewebsites.net/loadtradeblendrawmat", { params: params1 })

  }
  settradeblendrawmatvalues(tradeblendrawmat_search) {
    this.blendcode = tradeblendrawmat_search.BlendCode;
    this.blendname = tradeblendrawmat_search.GeneralItemCode;
    this.tradename = tradeblendrawmat_search.TradeName;
    this.suppliername = tradeblendrawmat_search.Supplier;
    this.qty = tradeblendrawmat_search.QuantityInPercentage;

    this.searchrawmatformulaitems = [this.blendcode, this.blendname, this.tradename, this.suppliername, this.qty]
  }
  Loadtradeproductizedformulalist() {
    var tradeproduct: string = this.TradeName;
    let params1 = new HttpParams().set('TradeName', tradeproduct);
    return this.http.get("https://allsearchwebservice3.azurewebsites.net/tradeProductized", { params: params1 })

  }

  settradeproductizedformulavalues(tradeproductizedformula_search) {
    this.productdata = tradeproductizedformula_search.ProductCode;
    this.productname = tradeproductizedformula_search.ProductName;
    this.formula = tradeproductizedformula_search.FormulaCode;
    this.formulaNam = tradeproductizedformula_search.FormulaName;
    this.pdrdata = tradeproductizedformula_search.PDRNo;
    this.pronamedata = tradeproductizedformula_search.ProjectName;
    this.cusname = tradeproductizedformula_search.Customer;
    this.qty = tradeproductizedformula_search.QtyInPercentage;
    this.Supplrname = tradeproductizedformula_search.SupplierName;
    this.searchrawmatformulaitems = [this.productdata, this.productname, this.pdrdata, this.pronamedata, this.formula,
    this.formulaNam, this.qty, this.Suppliername, this.cusname]
  }
  //------------------------------------------IMPURITY SEARCH---------------------------------------------------------
  opensearchincinameimpurity(): void {
    const dialogRef = this.dialog.open(SearchINCINameComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.inciname = result[0];
      this.itemli = result[1];
      this.LoadImpurityrawmatSearchlist().subscribe((resulLoadImpurityrawmatSearchlist) => {
        this.isLoading = false;
        console.warn("resulLoadImpurityrawmatSearchlist", resulLoadImpurityrawmatSearchlist)
        this.dataresulLoadImpurityrawmatSearchlist = resulLoadImpurityrawmatSearchlist
      })
      this.LoadImpurityformulaSearchlist().subscribe((resultLoadImpurityformulaSearchlist) => {
        this.isLoading = false;
        console.warn("resultLoadImpurityformulaSearchlist", resultLoadImpurityformulaSearchlist)
        this.dataresultLoadImpurityformulaSearchlist = resultLoadImpurityformulaSearchlist
      })
      this.LoadImpuritySearchlist().subscribe((resultLoadImpuritySearchlist) => {
        this.isLoading = false;
        console.warn("resultLoadImpuritySearchlist", resultLoadImpuritySearchlist)
        this.dataresultLoadImpuritySearchlist = resultLoadImpuritySearchlist
      })
    });
  }
  clearsearchincinameimpurity() {
    this.inciname = '';
    this.itemli = '';
    this.dataresulLoadImpurityrawmatSearchlist = "";
    this.dataresultLoadImpurityformulaSearchlist = "";
    this.dataresultLoadImpuritySearchlist = "";


  }
 
  LoadImpurityrawmatSearchlist() {
    //var Query = "SELECT RI.BlendCode, RI.BlendName, RM.IngredientTradeName, RI.ppm, RI.SupplierName Supplier FROM RawMaterialImpurities AS RI INNER JOIN RawMaterials AS RM ON RI.BlendCode = RM.GeneralItemCode AND RI.BlendName = RM.Description and ri.suppliername = (select name from suppliers where code = RM.vendorCode) WHERE(RI.INCIName = '" + this.inciname + "') order by RI.BlendName asc ";
    var impurityrawmat: string = this.inciname;
    let params1 = new HttpParams().set('inciname', impurityrawmat);
    console.log(params1);
    return this.http.get("https://allsearchwebservice.azurewebsites.net/Rawmatimpurity", { params: params1 })

  }
  setImpurityrawmatvalues(Impurityrawmat_search) {
    this.itemcode = Impurityrawmat_search.BlendCode;
    this.Incinam = Impurityrawmat_search.BlendName;
    this.Ingtrade = Impurityrawmat_search.IngredientTradeName;
    this.ppm = Impurityrawmat_search.ppm;
    this.supplier = Impurityrawmat_search.SupplierName;

    this.searchimpurityrawmatitems = [this.itemcode, this.Incinam, this.Ingtrade, this.ppm, this.supplier]
  }
  
  LoadImpurityformulaSearchlist() {
    //var Query = "SELECT  DISTINCT   fd.FormulaCode, fd.FormulaName, FM.PDRNo, FM.ProjectName, [dbo].[GetCustomerNameFromFormulaCode](fd.FormulaCode) Customer FROM TempFormulaProcess AS fd INNER JOIN FormulaMain AS FM ON fd.FormulaCode = FM.FormulaCode INNER JOIN RawMaterials AS rM ON fd.ItemCode = rM.ItemCode AND fd.INCIName = rM.Description INNER JOIN RawMaterialImpurities AS RI ON rM.GeneralItemCode = RI.BlendCode AND rM.Description = RI.BlendName and ri.suppliername = (select name from suppliers where code = RM.vendorCode) WHERE(ri.inciname = '"+ this.inciname +"')  and fd.username = '"+ this.username +"' ";
    var impurityformula: string = this.inciname;
    var userdata: string = "admin";
    let params1 = new HttpParams().set('inciname', impurityformula).set('username', userdata);
    return this.http.get("https://allsearchwebservice.azurewebsites.net/formulaimpurity", { params: params1 })

  }
  setImpurityformulavalues(Impurityformula_search) {
    this.formulacode = Impurityformula_search.FormulaCode;
    this.formulaname = Impurityformula_search.FormulaName;
    this.pdrno = Impurityformula_search.PDRNo;
    this.projectname = Impurityformula_search.ProjectName;
    this.cusname = Impurityformula_search.CusName;

    this.searchimpurityformulaitems = [this.formulacode, this.formulaname, this.pdrno, this.projectname, this.cusname]
  }
  
  LoadImpuritySearchlist() {
    //var Query = " SELECT RI.GeneralItemCode as BlendCode, RI.INCIName as BlendName, RM.INCIName BlendINCIName,  RM.ppm, cast(cast((RM.ppm/10000) as decimal(18,7)) as nvarchar(200)) + '%' as [ppm %], cast((RI.QtyInPercentage * (RM.ppm / 10000)) / 100 as decimal(18, 7)) Usage FROM TempFormulaProcess AS RI INNER JOIN RawMaterialImpurities AS RM ON RI.GeneralItemCode = RM.BlendCode AND RI.INCIName = RM.BlendName and RI.SupplierName = RM.SupplierName  WHERE(RI.FormulaCode = '') and RM.INCIName = ''  union SELECT[dbo].[GetGeneralItemCode](RI.blendingredientcode) as BlendCode, RI.BlendINCIName as BlendName, RM.INCIName BlendINCIName, RM.ppm, cast(cast((RM.ppm / 10000) as decimal(18, 7)) as nvarchar(200) + '%' as [ppm %], cast((RI.BlendInciformulaPercent * (RM.ppm / 10000)) / 100 as decimal(18, 7)) Usage   FROM BlendFormulaPercent AS RI INNER JOIN RawMaterialImpurities AS RM ON[dbo].[GetGeneralItemCode](RI.blendingredientcode) = RM.BlendCode AND  RI.BlendINCIName = RM.BlendName   WHERE(RI.FormulaCode = '')  and  RM.INCIName = '' ";
    var impurity: string = this.inciname;
    let params1 = new HttpParams().set('inciname', impurity);
    return this.http.get("https://allsearchwebservice.azurewebsites.net/Impurity", { params: params1 })

  }
  setImpurityvalues(Impurity_search) {
    this.impurity = Impurity_search.INCIName;
    this.itemcode = Impurity_search.GeneralItemCode;
    this.Incinam = Impurity_search.BlendINCIName;
    this.ppm = Impurity_search.ppm;
    this.ppmpercent = Impurity_search.QtyInPercentage;
    this.usage = Impurity_search.Usage;
    this.impurityitems = [this.impurity,this.itemcode, this.Incinam, this.ppm, this.ppmpercent, this.usage]
  }
 
  //---------------------------------------FUNCTION SEARCH----------------------------------------------------------------
  opensearchfunction(): void {
    const dialogRef = this.dialog.open(FunctionSearchComponent, {
      width: '60%', height: '70%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.FunctionCode = result[0];
      this.FunctionName = result[1];

      this.LoadFunctionSearchlist().subscribe((resultLoadFunctionSearchlist) => {
        this.isLoading = false;
        console.warn("resultLoadFunctionSearchlist", resultLoadFunctionSearchlist)
        this.dataresultLoadFunctionSearchlist = resultLoadFunctionSearchlist
      })
    });
  }
  clearfunction() {
    this.FunctionCode = '';
    this.FunctionName = '';
    this.dataresultLoadFunctionSearchlist = "";
  }

  LoadFunctionSearchlist() {
   // var Query = "SELECT ItemCode, GeneralItemCode, Description, IngredientTradeName  , dbo.GetSupplierName(VendorCode) SupplierName FROM RawMaterials WHERE(FunctionCode  like '" + this.FunctionCode + "')  and(generalitemcode  like '" + this.itemcode +"') ORDER BY Description ";
    var functionsearch: any = this.FunctionCode;
    let params1 = new HttpParams().set('FunctionCode', functionsearch);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLLOADEXEC", { params: params1 })

  }

  setfunctionvalues(function_search) {
    this.itemcode = function_search.ItemCode;
    this.Incinam = function_search.Description;
    this.Ingtrade = function_search.IngredientTradeName;
    this.supplnam = function_search.SupplierName;

    this.searchfunctionitems = [this.itemcode, this.Incinam, this.Ingtrade, this.supplnam]
  }
  
  //-----------------SUPPLIER-------------------------------------------------------------------------------

  Searchsupplierpopup(): void {

    const dialogRef = this.dialog.open(SearchSupplierComponent, {
      width: '60%', height: '70%', disableClose: true
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {

        this.Supplierkey = result[0];
        this.Suppliername = result[1];
        this.SupplierCode = result[2];
        this.LoadSupplierrawmatlist().subscribe((resultLoadSupplierrawmatlist) => {
          console.warn("resultLoadSupplierrawmatlist", resultLoadSupplierrawmatlist)
          this.dataresultLoadSupplierrawmatlist = resultLoadSupplierrawmatlist
        })
        this.LoadSupplierformulalist().subscribe((resultLoadSupplierformulalist) => {
          console.warn("resultLoadSupplierformulalist", resultLoadSupplierformulalist)
          this.dataresultLoadSupplierformulalist = resultLoadSupplierformulalist
        })
      }
    });
  }
  clearSearchsupplier() {
    this.Suppliername = '';
    this.SupplierCode = '';
    this.dataresultLoadSupplierrawmatlist = "";
    this.dataresultLoadSupplierformulalist = "";
  }
  LoadSupplierrawmatlist() {
    //var Query = "SELECT ItemCode, GeneralItemCode, Description, IngredientTradeName,  Convert(decimal(18,3),UnitCost)UnitCost FROM RawMaterials WHERE(VendorCode = '"+ this.SupplierCode +"')";
    var supplierrawmat: any = this.SupplierCode;
    let params1 = new HttpParams().set('SupplierCode', supplierrawmat);
    return this.http.get("https://globalsearchwebservice2.azurewebsites.net/Supplierloadrawmat", { params: params1 })

  }

  setsupplierrawmatvalues(supplierrawmat_search) {
    this.itemcode = supplierrawmat_search.ItemCode;
    this.Incinam = supplierrawmat_search.Description;
    this.Ingtrade = supplierrawmat_search.IngredientTradeName;
    this.Ingcost = supplierrawmat_search.UnitCost;

    this.searchsupplierrawmatitems = [this.itemcode, this.Incinam, this.Ingtrade, this.Ingcost]
  }
  
  LoadSupplierformulalist() {
   // var Query = " SELECT PM.PDRNo, PM.ProjectName, FM.FormulaCode, FM.Description as [Formula Name], CS.CusName, FD.TradeName as IngredientTradeNName , FD.INCIName as [INCI Name], FD.QtyInPercentage FROM TempFormulaProcess AS FD INNER JOIN FormulaMain AS FM INNER JOIN Customer AS CS INNER JOIN ProjectMain AS PM ON CS.CusCode = PM.CustomerCode ON FM.PDRNo = PM.PDRNo ON FD.FormulaCode = FM.FormulaCode Where FD.suppliername = (select name from suppliers where code = '"+ this.SupplierCode +"') ORDER BY PM.PDRNo";
    var supplierformula: any = this.SupplierCode;
    let params1 = new HttpParams().set('SupplierCode', supplierformula);
    return this.http.get("https://globalsearchwebservice2.azurewebsites.net/Supplierloadformula", { params: params1 })

  }

  setsupplierformulavalues(supplierformula_search) {
    this.pdrdata = supplierformula_search.PDRNo;
    this.pronamedata = supplierformula_search.ProjectName;
    this.formula = supplierformula_search.FormulaCode;
    this.formulaNam = supplierformula_search.Description;
    this.cusname = supplierformula_search.CusName;
    this.tradenam = supplierformula_search.TradeName;
    this.inciname = supplierformula_search.INCIName;
    this.qty = supplierformula_search.QtyInPercentage;
    this.searchsupplierformulaitems = [this.formula, this.pdrdata, this.pronamedata,
    this.formulaNam, this.tradenam, this.inciname, this.cusname, this.qty]
  }
 
  //-------------------------------------CATEGORY-------------------------------------------------------------
  OpenCategoryformula(): void {
    const dialogRef = this.dialog.open(SearchCategoryComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.Category = result[0];
      this.CategoryId = result[2];

      this.LoadCategorysublist().subscribe((resultLoadCategorysublist) => {
        console.warn("resultLoadCategorysublist", resultLoadCategorysublist)
        this.dataresultLoadCategorysublist = resultLoadCategorysublist
      })
      this.LoadCategoryrawmatlist().subscribe((resultLoadCategoryrawmatlist) => {
        console.warn("resultLoadCategoryrawmatlist", resultLoadCategoryrawmatlist)
        this.dataresultLoadCategoryrawmatlist = resultLoadCategoryrawmatlist
      })
      this.LoadCategoryFormulalist().subscribe((resultLoadCategoryFormulalist) => {
        console.warn("resultLoadCategoryFormulalist", resultLoadCategoryFormulalist)
        this.dataresultLoadCategoryFormulalist = resultLoadCategoryFormulalist
      })
    });

  }
  ClearCategory() {
    this.Category = '';
    this.dataresultLoadCategorysublist = '';
    this.dataresultLoadCategoryrawmatlist = '';
    this.dataresultLoadCategoryFormulalist = '';
  }
  LoadCategorysublist() {
    //var Query = "SELECT SubCategoryName, Description FROM SubCategory WHERE (CategoryId = '" + this.Category +"') order by SubCategoryName";
    var category: string = this.CategoryId;
    let catparams1 = new HttpParams().set('CategoryId', category);
    console.log(catparams1);
    return this.http.get("https://globalsearchwebservice2.azurewebsites.net/Category", { params: catparams1 })

  }
  setCategorysubvalues(Categorysub_search) {
    this.subcategory = Categorysub_search.SubCategoryName;
    this.name = Categorysub_search.Description;

    this.searchrawmatcasitems = [this.name, this.subcategory]
  }
  LoadCategoryrawmatlist() {
   // var Query = "SELECT ItemCode, GeneralItemCode,  Description  , IngredientTradeName FROM RawMaterials WHERE (CategoryId = '" + this.Category +"') ORDER BY Description";
    var categoryrawmat: string = this.CategoryId;
    let catparams1 = new HttpParams().set('CategoryId', categoryrawmat);
    console.log(catparams1);
    return this.http.get("https://globalsearchwebservice2.azurewebsites.net/CategoryRawmaterial", { params: catparams1 })

  }
  setCategoryrawmatvalues(Categoryrawmat_search) {
    this.itemcode = Categoryrawmat_search.ItemCode;
    this.inciname = Categoryrawmat_search.Description;
    this.tradename = Categoryrawmat_search.IngredientTradeName;

    this.searchrawmatcategoryitems = [this.itemcode, this.inciname, this.tradename]
  }
 
  LoadCategoryFormulalist() {
    //var Query = "SELECT  FormulaCode, Description FROM FormulaMain WHERE (Class = '" + this.Category +"')  ORDER BY Description";
    var categoryformula: string = this.Category;
    let catparams1 = new HttpParams().set('Categoryname', categoryformula);
    console.log(catparams1);
    return this.http.get("https://globalsearchwebservice2.azurewebsites.net/CategoryFormula", { params: catparams1 })

  }
  setCategoryFormulavalues(CategoryFormula_search) {
    this.formulacode = CategoryFormula_search.FormulaCode;
    this.formulaname = CategoryFormula_search.Description;
    this.searchcategoryformulaitems = [this.formulaname, this.formulacode]
  }
  
  //------------------------------------------SUB CATEGORY--------------------------------------------------------
  OpenSubCategoryformula(): void {
    const dialogRef = this.dialog.open(SearchSubCategoryComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.SubCategory = result[2];
      this.SubCategoryId = result[4];
      this.LoadSubCategoryrawmatlist().subscribe((resultLoadSubCategoryrawmatlist) => {
        console.warn("resultLoadSubCategoryrawmatlist", resultLoadSubCategoryrawmatlist)
        this.dataresultLoadSubCategoryrawmatlist = resultLoadSubCategoryrawmatlist
      })
      this.LoadSubCategoryFormulalist().subscribe((resultLoadSubCategoryFormulalist) => {
        console.warn("resultLoadSubCategoryFormulalist", resultLoadSubCategoryFormulalist)
        this.dataresultLoadSubCategoryFormulalist = resultLoadSubCategoryFormulalist
      })
    });
  }
  ClearSubCategory() {
    this.SubCategory = '';
    this.dataresultLoadSubCategoryrawmatlist = '';
    this.dataresultLoadSubCategoryFormulalist = '';
  }
  LoadSubCategoryrawmatlist() {
    //var Query = "SELECT ItemCode,  GeneralItemCode,  Description  , IngredientTradeName FROM RawMaterials WHERE (SubCategoryId = '" + this.SubCategory +"' AND SubCategoryId > 0) ORDER BY Description";
    var subcatrawmat: any = this.SubCategoryId;
    let params1 = new HttpParams().set('SubCategoryId', subcatrawmat);
    return this.http.get("https://globalsearchwebservice2.azurewebsites.net/SubCategoryRawmaterial", { params: params1 })

  }
  setSubCategoryrawmatvalues(SubCategoryrawmat_search) {
    this.itemcode = SubCategoryrawmat_search.ItemCode;
    this.inciname = SubCategoryrawmat_search.Description;
    this.tradename = SubCategoryrawmat_search.IngredientTradeName;

    this.searchrawmatsubcategoryitems = [this.itemcode, this.inciname, this.tradename]
  }
 
  LoadSubCategoryFormulalist() {
   // var Query = "SELECT FormulaCode, Description FROM FormulaMain WHERE (SubClass = '" + this.SubCategory +"' AND SubClass <> '') ORDER BY Description";
    var subcatformula: any = this.SubCategory;
    let params1 = new HttpParams().set('SubCategory', subcatformula);
    return this.http.get("https://globalsearchwebservice2.azurewebsites.net/SubCategoryFormula", { params: params1 })

  }
  setSubCategoryFormulavalues(SubCategoryFormula_search) {
    this.formulacode = SubCategoryFormula_search.FormulaCode;
    this.formulaname = SubCategoryFormula_search.Description;
    this.searchsubcategoryformulaitems = [this.formulaname, this.formulacode]
  }
  
  //
  //----------------------------------------PROJECT-----------------------------------------------------------------------
  searchProject() {
    const dialogRef = this.dialog.open(PDRListSearchComponent, {
      width: '80%', height: '90%', disableClose: true

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.PDRno = result[0];
      this.Projectname = result[1];
      this.LoadProjectSearchlist().subscribe((LoadProjectSearch) => {
        console.warn("LoadProjectSearchlist", LoadProjectSearch)
        this.dataLoadProjectSearchlist = LoadProjectSearch
      })
    });
  }

  LoadProjectSearchlist() {
    //var Query = "SELECT FM.FormulaCode, FM.Description, FM.Status, SM.PDRStatus FROM FormulaMain FM LEFT OUTER JOIN SampleManagement SM ON FM.FormulaCode = SM.FormulaCode WHERE(FM.ProjectName = '" + this.Projectname +"' and ProjectName <> '') ORDER BY FM.Description";
    var projectcode: any = this.Projectname;
    let params1 = new HttpParams().set('Projectname', projectcode);
    return this.http.get("https://globalsearchwebservice1.azurewebsites.net/Project", { params: params1 })

  }
  setProjectvalues(Project_search) {
    this.formulacode = Project_search.FormulaCode;
    this.formulaname = Project_search.Description;
    this.formulastatus = Project_search.Status;
    this.submmissionstatus = Project_search.PDRStatus;
    this.searchprojectitems = [this.formulacode, this.formulaname, this.formulastatus, this.submmissionstatus]
  }
 
  ClearProject() {
    this.PDRno = '';
    this.Projectname = '';
    this.dataLoadProjectSearchlist = '';
  }
  //------------------------------------FORMULA STATUS--------------------------------------------------
  ClearFormulaStatus() {
    this.FormulaStatus = '';
    this.dataresultLoadFormulaStatus = '';
  }
  formulastatusclick() {
    this.LoadFormulaStatus().subscribe((resultLoadFormulaStatus) => {
      console.warn("resultLoadFormulaStatus", resultLoadFormulaStatus)
      this.dataresultLoadFormulaStatus = resultLoadFormulaStatus
    })

  }
  LoadFormulaStatus() {
    var formuladatalist: any = this.FormulaStatus;
    let params1 = new HttpParams().set('FormulaStatus', formuladatalist);
    return this.http.get("https://globalsearchwebservice1.azurewebsites.net/FormulaStatus", { params: params1 })

  }

  setformulastatus(formulastatus_search) {
    this.formulacode = formulastatus_search.FormulaCode;
    this.formulaname = formulastatus_search.Description;
    this.labrefno = formulastatus_search.LabRefNo;
    this.pdrno = formulastatus_search.PDRNo;
    this.ProjectName = formulastatus_search.ProjectName;
    this.SupercededBy = formulastatus_search.SupercededBy;
    this.AddedDT = formulastatus_search.AddedDT;
    this.searchformulastatusitems = [this.formulacode, this.formulaname, this.labrefno, this.pdrno,
    this.ProjectName, this.SupercededBy, this.AddedDT]
  }
  
  //----------------------------------------PDRSTATUS-------------------------------------------------------
  ClearPDRStatus() {
    this.PDRStatus = '';
    this.dataresultLoadPDRStatus = '';
  }
  pdrstatusclick() {

    this.LoadPDRStatus().subscribe((resultLoadPDRStatus) => {
      console.warn("resultLoadPDRStatus", resultLoadPDRStatus)
      this.dataresultLoadPDRStatus = resultLoadPDRStatus
    })

  }
  LoadPDRStatus() {

    var formuladatalist: any = this.PDRStatus;

    let params1 = new HttpParams().set('pdrstatus', formuladatalist);
    return this.http.get("https://globalsearchwebservice1.azurewebsites.net/PDRStatus", { params: params1 })

  }
  setpdrstatus(pdrstatus_search) {
    this.pdrno = pdrstatus_search.PDRNo;
    this.projectname = pdrstatus_search.ProjectName;
    this.PdrDt = pdrstatus_search.PDRDate;
    this.cstmrnamedata = pdrstatus_search.CusName;
    this.userdata = pdrstatus_search.Users;
    this.startdt = pdrstatus_search.StartDate;
    this.completedDt = pdrstatus_search.CompletedDate;
    this.searchpdrstatusitems = [this.pdrno, this.projectname, this.PdrDt, this.userdata, this.cstmrnamedata, this.startdt, this.completedDt]
  }
 
  //-------------------------------------CUSTOMER-------------------------------------------------------
  Opencustomer(): void {
    const dialogRef = this.dialog.open(SearchCustomerComponent, {
      width: '60%', height: '70%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {

        this.issearchcustomer = false;
        this.customerkey = result[2];
        this.customername = result[1];
        this.customercode = result[0];
        if (this.customerkey) {
          this.issearchcustomersave = true;
        }
        this.LoadCustomerSearchlist().subscribe((resultLoadCustomerSearchlist) => {
          console.warn("resultLoadCustomerSearchlist", resultLoadCustomerSearchlist)
          this.dataresultLoadCustomerSearchlist = resultLoadCustomerSearchlist
        })
      }
    });
  }
  clearcustomer() {
    this.customerkey = '';
    this.customername = '';
    this.customercode = '';
    this.dataresultLoadCustomerSearchlist = '';
  }


  LoadCustomerSearchlist() {
    //var Query = "SELECT  PDRNo, ProjectName FROM ProjectMain WHERE (CustomerCode = '" + this.customercode +"' and CustomerCode <>'') ORDER BY PDRNo";
    var customer: any = this.customercode
    let params1 = new HttpParams().set('customercode', customer);
    console.log(params1)
    return this.http.get("https://globalsearchwebservice1.azurewebsites.net/loadcustomer", { params: params1 })

  }
  setCustomervalues(Customer_search) {
    this.PDRno = Customer_search.PDRNo;
    this.projectname = Customer_search.ProjectName;
    this.searchcustomeritems = [this.PDRno, this.projectname]
  }
 
  //----------------------------------------------LABNOTEBOOK----------------------------------------------------
  searchLabNotebook(): void {
    const dialogRef = this.dialog.open(SearchLabnotebookComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {
        //this.issearchform = true;
        this.LabNotebook = result[2];


        this.LoadLabNotebook().subscribe((resultLoadLabNotebooklist) => {
          this.isLoading = false;
          console.warn("LoadProjectSearchlist", resultLoadLabNotebooklist)
          this.dataresultLoadLabNotebooklist = resultLoadLabNotebooklist
        })
      }
    });

  }
  LoadLabNotebook() {
    var formuladatalist: any = this.LabNotebook;
    let params1 = new HttpParams().set('LabRefNo', formuladatalist);
    return this.http.get("https://globalsearchwebservice1.azurewebsites.net/FormulaStatus", { params: params1 })

  }
  setLabNotebookvalues(LabNotebook_search) {
    this.formula = LabNotebook_search.FormulaCode;
    this.formulaNam = LabNotebook_search.Description;
    this.pdrdata = LabNotebook_search.PDRNo;
    this.pronamedata = LabNotebook_search.ProjectName;
    this.cusname = LabNotebook_search.CusName;
    this.status = LabNotebook_search.Status;
    this.createdby = LabNotebook_search.UserName;
    this.adddedDt = LabNotebook_search.AddedDT;
    this.searchlabbookitems = [this.formula, this.formulaNam,this.pdrdata, this.pronamedata,
      this.cusname, this.Status,this.createdby, this.adddedDt]
  }
  clearLabNotebook() {
    this.LabNotebook = '';
    this.dataresultLoadLabNotebooklist = '';
  }
 
  //--------------------CAS---------------------------------------------------------------------------------------------
  searchCAS(): void {

    const dialogRef = this.dialog.open(SearchCASComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {
        //this.issearchform = true;
        this.CASno = result[0];
        this.Description = result[1];
        this.LoadCasRawmatlist().subscribe((resultLoadCasRawmatlist) => {
          console.warn("resultLoadCasRawmatlist", resultLoadCasRawmatlist)
          this.dataresultLoadCasRawmatlist = resultLoadCasRawmatlist
        })
        this.LoadCasFormulalist().subscribe((resultLoadCasFormulalist) => {
          console.warn("resultLoadCasFormulalist", resultLoadCasFormulalist)
          this.dataresultLoadCasFormulalist = resultLoadCasFormulalist
        })
      }
    });

  }
  clearCAS() {
    this.CASno = '';
    this.Description = '';
    this.dataresultLoadCasRawmatlist = '';
    this.dataresultLoadCasFormulalist = '';

  }
  LoadCasRawmatlist() {
   // var Query = "SELECT RawMaterials.ItemCode, RawMaterials.GeneralItemCode,  RawMaterials.Description, RawMaterials.IngredientTradeName,  Category.CategoryName, SubCategory.SubCategoryName FROM  RawCASRef INNER JOIN RawMaterials ON RawCASRef.ItemCode = RawMaterials.ItemCode INNER JOIN Category ON RawMaterials.CategoryId = Category.CategoryId LEFT OUTER JOIN SubCategory ON RawMaterials.SubCategoryId = SubCategory.SubCategoryId WHERE(RawCASRef.CASNo = '"+this.CASno+"')";
    var casrawmat: any = this.CASno;
    let params1 = new HttpParams().set('CASno', casrawmat)
    return this.http.get("https://globalsearchwebservice2.azurewebsites.net/CASRawmaterial", { params: params1 })
  }
  setCasRawmatvalues(CasRawmat_search) {
    this.itemcode = CasRawmat_search.ItemCode;
    this.genitemcode = CasRawmat_search.GeneralItemCode;
    this.inciname = CasRawmat_search.Description;
    this.tradename = CasRawmat_search.IngredientTradeName;
    this.category = CasRawmat_search.CategoryName;
    this.subcategory = CasRawmat_search.SubCategoryName;


    this.searchrawmatcasitems = [this.genitemcode, this.inciname, this.itemcode,
    this.tradename, this.category, this.subcategory]
  }
  
  LoadCasFormulalist() {
    //var Query = "SELECT FormulaMain.FormulaCode, FormulaMain.Description, FormulaMain.Class, FormulaMain.SubClass FROM CAS INNER JOIN RawCASRef ON CAS.CASNo = RawCASRef.CASNo INNER JOIN RawMaterials ON RawCASRef.ItemCode = RawMaterials.ItemCode INNER JOIN TempFormulaProcess ON RawMaterials.Description = TempFormulaProcess.INCIName INNER JOIN FormulaMain ON TempFormulaProcess.FormulaCode = FormulaMain.FormulaCode WHERE(CAS.CASNo = '" + this.CASno +"')  and TempFormulaProcess.username = '"+ this.username +"'";
    var casrawmat: any = this.CASno;
    var usernamedata: any = "admin";
    let params1 = new HttpParams().set('CASno', casrawmat).set('casrawmat', usernamedata);
    return this.http.get("https://globalsearchwebservice2.azurewebsites.net/CASFormula", { params: params1 })
  }
  setCasFormulavalues(CasFormula_search) {
    this.formulacode = CasFormula_search.FormulaCode;
    this.formulaname = CasFormula_search.FormulaName;
    this.category = CasFormula_search.Class;
    this.subcategory = CasFormula_search.SubClass;

    this.searchformulacasitems = [this.formulacode, this.formulaname, this.category, this.subcategory]
  }
 
  //--------------------------------------MULTIPLE FORMULA----------------------------------------
  LoadmultipleFormulalist() {
    
    return this.http.get("https://allsearchwebservice.azurewebsites.net/multipleformula")

  }
  
  setmultipleformulavalues(multipleformula_search) {
    this.formula = multipleformula_search.FormulaCode;
    this.formulaNam = multipleformula_search.Description;
    this.categoryname = multipleformula_search.Class;
    this.cusname = multipleformula_search.CusName;
    this.pdrdata = multipleformula_search.PDRNo;
    this.pronamedata = multipleformula_search.ProjectName;
    this.username = multipleformula_search.username;
    this.searchmultipleformulaitems = [this.pdrdata, this.pronamedata, this.formula,
    this.formulaNam, this.cusname, this.categoryname, this.username]
  }
  
  //-----------------------------------Formula By Date----------------------------------------

  LoadPDRDate() {
    if (this.FormulaFromDate > this.FormulaToDate) {
      this.dialog.open(MessageBoxComponent, {
        width: '40%', height: '15%', data: {
          displaydata: "From date should be equal to or less than to date."
        }
      });
    }
    this.Loadformulabydatelist(this.FormulaFromDate, this.FormulaToDate).subscribe((resultLoadFormulabydatelist) => {
      this.isLoading = false;
      console.warn("resultLoadFormulabydatelist", resultLoadFormulabydatelist)
      this.dataresultLoadFormulabydatelist = resultLoadFormulabydatelist
    })

  }
  Loadformulabydatelist(FormulaFromDate: string, FormulaToDate: string) {
    //var PDRFromDate: string = "7/27/2011";
    //var PDRToDate: string = "7/23/2019";
    var PDRFromDate: string = formatDate(new Date(this.FormulaFromDate), 'MM-dd-yyyy', 'en-US');
    var PDRToDate: string = formatDate(new Date(this.FormulaToDate), 'MM-dd-yyyy', 'en-US');
    let params1 = new HttpParams().set('FormulaFromDate', PDRFromDate).set('FormulaFromTo', PDRToDate);
    console.log(params1);
    return this.http.get("https://globalsearchwebservice1.azurewebsites.net/Formulabydate", { params: params1 });
  }

  setformulabydatevalues(formulabydate_search) {
    this.formula = formulabydate_search.FormulaCode;
    this.formulaNam = formulabydate_search.Description;
    this.labref = formulabydate_search.LabRefNo;
    this.pdrdata = formulabydate_search.PDRNo;
    this.pronamedata = formulabydate_search.ProjectName;
    this.createdDt = formulabydate_search.AddedDT;
    this.chemist = formulabydate_search.SupercededBy;
    this.Status = formulabydate_search.Status;
    this.Natural = formulabydate_search.NaturalPerc;
    this.searchformulabydateitems = [this.formula, this.pdrdata, this.pronamedata,
    this.formulaNam, this.labref, this.createdDt, this.chemist, this.Status, this.Natural]
  }
 
  //--------------------------------MULTIPLE Rawmaterials ------------------------------------------------
  Loadmultiplerawmatlist() {
    var Query = "";
    let params1 = new HttpParams().set('Query', Query);
    return this.http.get("https://sfgenericwebservice.azurewebsites.net/GENERICSQLLOADEXEC", { params: params1 })

  }

  setmultiplerawmatvalues(multiplerawmat_search) {
    this.pdrdata = multiplerawmat_search.PDRNo;
    this.pronamedata = multiplerawmat_search.ProjectName;
    this.formula = multiplerawmat_search.FormulaCode;
    this.formulaNam = multiplerawmat_search.FormulaName;
    this.cusname = multiplerawmat_search.CustomerName;
    this.tradenam = multiplerawmat_search.TradeName;
    this.inciname = multiplerawmat_search.INCIName;
    this.qty = multiplerawmat_search.Quantity;
    this.searchmultiplerawmatitems = [this.formula, this.pdrdata, this.pronamedata,
    this.formulaNam, this.tradenam, this.inciname, this.cusname, this.qty]
  }
  //---------------------Rawmaterial by item ------------------------------
  opensearchinciname(): void {
    const dialogRef = this.dialog.open(SearchINCINameComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.inciname = result[0];
      this.itemli = result[1];
      this.LoadRMitemformuladatalist().subscribe((resultLoadRMitemformuladatalist) => {
        console.warn("resultLoadRMitemformuladatalist", resultLoadRMitemformuladatalist)
        this.dataresultLoadRMitemformuladatalist = resultLoadRMitemformuladatalist
      })
      this.LoadRMitemblenddatalist().subscribe((resultLoadRMitemblenddatalist) => {
        console.warn("resultLoadRMitemblenddatalist", resultLoadRMitemblenddatalist)
        this.dataresultLoadRMitemblenddatalist = resultLoadRMitemblenddatalist
      })
      this.LoadRMitemsupplierdatalist().subscribe((resultLoadRMitemsupplierdatalist) => {
        console.warn("resultLoadRMitemsupplierdatalist", resultLoadRMitemsupplierdatalist)
        this.dataresultLoadRMitemsupplierdatalist = resultLoadRMitemsupplierdatalist
      })
      this.LoadRMitemblendrawmatdatalist().subscribe((resultLoadRMitemblendrawmatdatalist) => {
        console.warn("resultLoadRMitemblendrawmatdatalist", resultLoadRMitemblendrawmatdatalist)
        this.dataresultLoadRMitemblendrawmatdatalist = resultLoadRMitemblendrawmatdatalist
      })
      this.LoadRMitemproductizedformulalist().subscribe((resultLoadRMitemproductizedformulalist) => {
        console.warn("resultLoadRMitemproductizedformulalist", resultLoadRMitemproductizedformulalist)
        this.dataresultLoadRMitemproductizedformulalist = resultLoadRMitemproductizedformulalist
      })
      this.LoadRMitemformulanaturallist().subscribe((resultLoadRMitemformulanaturallist) => {
        console.warn("resultLoadRMitemformulanaturallist", resultLoadRMitemformulanaturallist)
        this.dataresultLoadRMitemformulanaturallist = resultLoadRMitemformulanaturallist
      })
    });
  }

  clearsearchinciname() {
    this.inciname = '';
    this.itemli = '';
    this.dataresultLoadRMitemformuladatalist = '';
    this.dataresultLoadRMitemblenddatalist = '';
    this.dataresultLoadRMitemsupplierdatalist = '';
    this.dataresultLoadRMitemblendrawmatdatalist = '';
    this.dataresultLoadRMitemproductizedformulalist = '';
    this.dataresultLoadRMitemformulanaturallist = '';
  }

LoadRMitemformuladatalist() {
  //var Query = "SELECT  FM.PDRNo, FM.ProjectName, fd.FormulaCode, fd.FormulaName, fd.SupplierName, fd.QtyInPercentage FROM    tempformulaprocess AS fd INNER JOIN FormulaMain AS FM ON fd.FormulaCode = FM.FormulaCode INNER JOIN RawMaterials AS rM ON fd.ItemCode = rM.ItemCode AND fd.INCIName = rM.Description WHERE(rM.ItemCode = '')  and fd.username = ''";
  var RMitemFormula: any = this.itemli;
  var userdata: any = 'admin';
  let params1 = new HttpParams().set('itemcode', RMitemFormula).set('username', userdata);
  return this.http.get("https://allsearchwebservice.azurewebsites.net/RMitemformula", { params: params1 })

}
setRMitemformulavalues(RMitemformula_search) {
  this.pdrno = RMitemformula_search.PDRNo;
  this.projectname = RMitemformula_search.ProjectName;
  this.formulacode = RMitemformula_search.FormulaCode;
  this.formulaname = RMitemformula_search.FormulaName;
  this.qty = RMitemformula_search.QuantityPercent;
  this.Suppliername = RMitemformula_search.SupplierName;

  this.searchrawmatformulaitems = [this.formulacode, this.formulaname, this.pdrno, this.projectname, this.qty, this.Suppliername]
}
LoadRMitemblenddatalist() {
  //var Query = "SELECT FormulaMain.PDRNo,FormulaMain.ProjectName,BlendFormulaPercent.FormulaCode, FormulaMain.Description as FormulaName,  BlendFormulaPercent.BlendName, convert(decimal(25, 10), BlendFormulaPercent.BlendInciformulaPercent) as QtyInPercentage, Suppliers.name as SupplierName FROM BlendFormulaPercent INNER JOIN FormulaMain ON BlendFormulaPercent.FormulaCode = FormulaMain.FormulaCode INNER JOIN RawMaterials ON BlendFormulaPercent.BlendIngredientCode = RawMaterials.ItemCode INNER JOIN Suppliers ON RawMaterials.VendorCode = Suppliers.code WHERE RawMaterials.ItemCode = '"+this.itemli+"'  order By BlendFormulaPercent.FormulaCode";
  var RMitemblend: any = this.itemli;
  let params1 = new HttpParams().set('itemcode', RMitemblend);
  return this.http.get("https://allsearchwebservice.azurewebsites.net/RMitemblend", { params: params1 })

}
setRMitemblendvalues(RMitemblend_search) {
  this.pdrdata = RMitemblend_search.PDRNo;
  this.pronamedata = RMitemblend_search.ProjectName;
  this.formula = RMitemblend_search.FormulaCode;
  this.formulaNam = RMitemblend_search.FormulaName;
  this.blendname = RMitemblend_search.BlendName;
  this.qty = RMitemblend_search.BlendInciformulaPercent;
  this.searchrawmatformulaitems = [this.pdrdata, this.pronamedata, this.formula, this.formulaNam, this.qty, this.blendname]
}
LoadRMitemsupplierdatalist() {
  //var Query = "SELECT distinct Suppliers.code,  Suppliers.SupplierKey, Suppliers.name, RawMaterials.UnitCost, case when isnull(dbo.getNaturalIndex(RawMaterials.Itemcode), 0) = 0 then 'N/A' else cast(isnull(dbo.getNaturalIndex(RawMaterials.Itemcode), 0) as nvarchar(200)) end Naturalindex  FROM RawMaterials INNER JOIN Suppliers ON RawMaterials.VendorCode = Suppliers.code WHERE (RawMaterials.ItemCode = '"+this.itemli+"') ORDER BY Suppliers.name";
  var RMitemsupplier: any = this.itemli;
  let params1 = new HttpParams().set('itemcode', RMitemsupplier);
  return this.http.get("https://allsearchwebservice.azurewebsites.net/RMitemsupplier", { params: params1 })

}
setRMitemsuppliervalues(RMitemsupplier_search) {
  this.Supplier = RMitemsupplier_search.code;
  this.Suppliername = RMitemsupplier_search.name;
  this.ingredientcost = RMitemsupplier_search.IngredientCost;
  this.Naturalindex = RMitemsupplier_search.Naturalindex;

  this.searchrawmatformulaitems = [this.Supplier, this.Suppliername, this.ingredientcost, this.leadtime, this.Naturalindex]
}
LoadRMitemblendrawmatdatalist() {
 // var Query = "SELECT BM.BlendCode, RM.GeneralItemCode, BM.BlendName,  RM.IngredientTradeName AS TradeName, dbo.GetSupplierName(RM.VendorCode) AS Supplier , CAST(CONVERT(decimal(18, 5), BM.Percentage) AS nvarchar(200)) + '%' AS Percentage  FROM BlendRawMaterials AS BM INNER JOIN  RawMaterials AS RM ON BM.BlendCode = RM.ItemCode WHERE BM.IngredientCode = '"+this.itemli + "' Order By BM.BlendName ";
  var RMitemblendrawmat: any = this.itemli;
  let params1 = new HttpParams().set('itemcode', RMitemblendrawmat);
  return this.http.get("https://allsearchwebservice.azurewebsites.net/RMitemblendrawmat", { params: params1 })

}
setRMitemblendrawmatvalues(RMitemblendrawmat_search) {
  this.blendcode = RMitemblendrawmat_search.BlendCode;
  this.blendname = RMitemblendrawmat_search.BlendName;
  this.tradename = RMitemblendrawmat_search.IngredientTradeName;
  this.suppliername = RMitemblendrawmat_search.Supplier;
  this.qty = RMitemblendrawmat_search.Percentage;

  this.searchrawmatformulaitems = [this.blendcode, this.blendname, this.tradename, this.suppliername, this.qty]
}
LoadRMitemproductizedformulalist() {
  //var Query = "SELECT Product.ProductCode,   Product.ProductNumber, Product.ProductName, Product.FormulaCode, Product.FormulaName,  FM.PDRNo, FM.ProjectName, dbo.GetCustomerNameFromFormulaCode(fd.FormulaCode) Customer, fd.QtyInPercentage,   case when[dbo].[GetAltSupplierPriorityNew]  ('"+this.itemli+"', '"+ this.inciname+ "', 1) = '-' then fd.SupplierName else '1.' + [dbo].[GetAltSupplierPriorityNew]('"+this.itemli+"', '"+ this.inciname+ "', 1) end +  case when[dbo].[GetAltSupplierPriorityNew]  ('"+this.itemli+"', '"+ this.inciname+ "', 2) = '-' then  '' else '2.' +  [dbo].[GetAltSupplierPriorityNew]('"+this.itemli+"', '"+ this.inciname+ "', 2)   end + case when[dbo].[GetAltSupplierPriorityNew]('"+this.itemli+"', '"+ this.inciname+ "', 3) = '-' then  '' else '3.' + [dbo].[GetAltSupplierPriorityNew]('"+this.itemli+"', '"+ this.inciname+ "', 3)    end +  case when[dbo].[GetAltSupplierPriorityNew]  ('"+this.itemli+"', '"+ this.inciname+ "', 4) = '-' then  '' else '4.' + [dbo].[GetAltSupplierPriorityNew] ('"+this.itemli+"', '"+ this.inciname+ "', 4)   end + case when[dbo].[GetAltSupplierPriorityNew]('"+this.itemli+"', '"+ this.inciname+ "', 5) = '-' then  '' else '5.' + [dbo].[GetAltSupplierPriorityNew]('"+this.itemli+"', '"+ this.inciname+ "', 5)   end SupplierName, dbo.CMO_ProductWise(Product.ProductCode) as CMO FROM TempFormulaProcess AS fd INNER JOIN  FormulaMain AS FM ON fd.FormulaCode = FM.FormulaCode INNER JOIN     RawMaterials AS rM ON fd.ItemCode = rM.ItemCode AND fd.INCIName = rM.Description INNER JOIN Product ON fd.FormulaCode = Product.FormulaCode WHERE(rM.ItemCode = '"+this.itemli+"')  AND(fd.username = '"+this.username+"')";
  var RMitemproduct: any = this.itemli;
  var userdata: any = "admin";
  var RMitem: any = this.inciname;
  let params1 = new HttpParams().set('itemcode', RMitemproduct).set('itemcode', userdata).set('inciname', RMitem);
  return this.http.get("https://allsearchwebservice.azurewebsites.net/RMitemProductized", { params: params1 })

}

setRMitemproductizedformulavalues(RMitemproductizedformula_search) {
  this.productdata = RMitemproductizedformula_search.ProductCode;
  this.productname = RMitemproductizedformula_search.ProductName;
  this.formula = RMitemproductizedformula_search.FormulaCode;
  this.formulaNam = RMitemproductizedformula_search.FormulaName;
  this.pdrdata = RMitemproductizedformula_search.PDRNo;
  this.pronamedata = RMitemproductizedformula_search.ProjectName;
  this.cusname = RMitemproductizedformula_search.CusName;
  this.qty = RMitemproductizedformula_search.QtyInPercentage;
  this.Supplrname = RMitemproductizedformula_search.SupplierName;
  this.searchrawmatformulaitems = [this.productdata, this.productname, this.pdrdata, this.pronamedata, this.formula,
  this.formulaNam, this.qty, this.Suppliername, this.cusname]
}
  LoadRMitemformulanaturallist() {
    //var Query = "SELECT  FM.PDRNo, FM.ProjectName, fd.FormulaCode, fd.FormulaName, fd.SupplierName, fd.QtyInPercentage, case when dbo.GetNaturalPercentage(fd.FormulaCode, fd.username) > 0 then cast(dbo.GetNaturalPercentage(fd.FormulaCode, fd.username) as nvarchar(200)) + '%' else 'N/A' end[NaturalPerc] FROM tempformulaprocess AS fd INNER JOIN  FormulaMain AS FM ON fd.FormulaCode = FM.FormulaCode INNER JOIN RawMaterials AS rM ON fd.ItemCode = rM.ItemCode wHERE rM.ItemCode = '" + this.itemli + "'  and fd.username = '" + this.username + "'";
    var RMitemformulanatural: any = this.itemli;
    var userdata: any = "admin";

    let params1 = new HttpParams().set('itemcode', RMitemformulanatural).set('itemcode', userdata);
    return this.http.get("https://allsearchwebservice.azurewebsites.net/Rmitemformulanatural", { params: params1 })

  }

  setRMitemformulanaturalvalues(RMitemformulanatural_search) {
    this.pdrdata = RMitemformulanatural_search.PDRNo;
    this.pronamedata = RMitemformulanatural_search.ProjectName;
    this.formula = RMitemformulanatural_search.FormulaCode;
    this.formulaNam = RMitemformulanatural_search.FormulaName;
    this.qty = RMitemformulanatural_search.QtyInPercentage;
    this.Supplrname = RMitemformulanatural_search.SupplierName;
    this.naturalpercent = RMitemformulanatural_search.NaturalPerc;

    this.searchrawmatformulaitems = [this.pdrdata, this.pronamedata, this.formula,
    this.formulaNam, this.qty, this.Suppliername, this.naturalpercent]
  }
  addrawmat() {
    this.searchrawmatsubcategoryitems = [this.itemcode, this.inciname, this.tradename]

    this.Datashare.sendrawmat(this.searchrawmatcategoryitems);
    const dialogRef = this.dialog.open(RawMaterialComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    });
  }

  addpdrstatus() {
    this.searchpdrstatusitems = [this.pdrno, this.projectname, this.PdrDt, this.userdata,
    this.cstmrnamedata, this.startdt, this.completedDt]
    this.Datashare.sendpdrstatus(this.searchpdrstatusitems);
    const dialogRef = this.dialog.open(PdrManagementComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    });
  }

  addformulastatus() {
    this.searchformulastatusitems = [this.formulacode, this.formulaname, this.labrefno, this.pdrno,
    this.ProjectName, this.SupercededBy, this.AddedDT]
    this.Datashare.sendformlastatus(this.searchformulastatusitems);
    const dialogRef = this.dialog.open(FormulaLookupComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    });
  }
  addproduct() {
    this.searchpdritems = [this.productdata, this.productnamedata, this.ProductDt, this.PDRnodata, this.cstmrnamedata]
    this.Datashare.sendformulaproduct(this.searchpdritems);
    const dialogRef = this.dialog.open(ProductizationComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    });
  }
  addsample() {
    this.searchitems = [this.SubmissionNum, this.SubmissionDate,
    this.cstmrname, this.PDRStatusdata, this.PDRno, this.formulacode, this.formulaname]
    this.Datashare.sendformulasample(this.searchitems);
    const dialogRef = this.dialog.open(SampleManagementComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    });
  }

  ngOnInit() {
    this.LoadmultipleFormulalist().subscribe((resultLoadmultipleFormulalist) => {
      console.warn("resultLoadmultipleFormulalist", resultLoadmultipleFormulalist)
      this.dataresultLoadmultipleFormulalist = resultLoadmultipleFormulalist
    })
    this.todaydate = new Date();

    this.date = formatDate(new Date(this.todaydate), 'yyyy-MM-dd', 'en-US');

    this.FormulaFromDate = formatDate(new Date(this.todaydate), 'yyyy-MM-dd', 'en-US');
    this.FormulaToDate = formatDate(new Date(this.todaydate), 'yyyy-MM-dd', 'en-US');
  }

}
