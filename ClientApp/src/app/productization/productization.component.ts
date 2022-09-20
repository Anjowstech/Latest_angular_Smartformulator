import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';

import { DataShareServiceService } from 'src/app/data-share-service.service';

import { DatagridcomponentComponent } from 'src/app/formula-lookup/customer-details/datagridcomponent/datagridcomponent.component';
import { NgModule } from '@angular/core';
import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";

import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { AddProductlineComponent } from './add-productline/add-productline.component';
import { AddClasscodeComponent } from './add-classcode/add-classcode.component';
import { AddApplicationComponent } from './add-application/add-application.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { AddOemComponent } from './add-oem/add-oem.component';

import { AddClassificationComponent } from './add-classification/add-classification.component';
import { AddProductcategoryComponent } from './add-productcategory/add-productcategory.component';
import { FormulaLookupComponent } from '../formula-lookup/formula-lookup.component';
import { PdrManagementComponent } from '../pdr-management/pdr-management.component';
import { CustomerDetailsComponent } from '../formula-lookup/customer-details/customer-details.component';
import { SearchFormulaComponent } from '../formula-lookup/search-formula/search-formula.component';
import { AddComponentComponent } from './add-component/add-component.component';
import { NewCheComponent } from './new-che/new-che.component';
import { NewMicrobComponent } from './new-microb/new-microb.component';
import { LoadPropertyComponent } from '../raw-material/load-property/load-property.component';
import { CmoComponent } from './cmo/cmo.component';
import { SearchCustomerComponent } from '../formula-lookup/customer-details/search-customer/search-customer.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { formatDate } from '@angular/common';
import { SearchCmoComponent } from './cmo/search-cmo/search-cmo.component';
import { SearchComponentComponent } from './add-component/search-component/search-component.component';
import { ComponentlistingComponent } from './componentlisting/componentlisting.component';

@Component({
  selector: 'app-productization',
  templateUrl: './productization.component.html',
  styleUrls: ['./productization.component.css']
})

@NgModule({
  imports: [

    DxDataGridModule

  ],
  declarations: [DatagridcomponentComponent],

})

export class ProductizationComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;


  selectedRowIndex = -1;
  data_product: any = [];
  dataprodbatch: any = [];
  datacmo: any = [];
  datapcc: any = [];
  dataartcheck: any = [];
  safety_test_rowdata: any = [];
  i: number;
  j: number;
 // sample nihal test
  //nihal cjhanes
  datachem: any;
  loadpdrno: string;
  Approvedproductinfo: string;
  Approvinfo: boolean;
  Approvedbrand: string;
  brandcheck: boolean;
  loadproduct: any;
  loadclass: any;
  loadbrand: any;
  loadoem: any;
  loadcategory: any;
  loadclassification: any;
  loadapplication: any;
  datamicro: any;
  propertydata: any;
    incicode:any;
  dataformList: productizationData[][] = [];
    productization_save_data: any;
    formulacode: any='';
  formulaname: any = '';
  productcode: any = '';
  productname: any = '';
  productdate: any = '';
  brandname: any = '';
  warnings: any = '';
  directions: any = '';
  questions: any = '';
  miscellaneous: any = '';
  uses: any = '';
  barcodeimage: any = '';
  barcodenumber: any = '';
  picturefile1: any = '';
  picturefile2: any = '';
  picturefile3: any = '';
  picturefile4: any = '';
  picturefile5: any = '';
  us: any = '';
  eu: any = '';
  cal: any = '';
  japan: any = '';
  australia: any = '';
  china: any = '';
  Prdnotes: any = '';
  casnumber: any = '';
  einecsnumber: any = '';
  fillsize: any = '';
  productdescription: any = '';
  applications: any = '';
  technicalinformation: any = '';
  companyproduct: any = '';
  descriptionproduct: any = '';
  cosprdrpd: any = '';
  manufacturingdescription: any = '';
  proof: any = '';
  animaldata: any = '';
  responsibleperson: any = '';
  file1: any = '';
  file2: any = '';
  file3: any = '';
  file4: any = '';
  file5: any = '';
  file6: any = '';
  fillinginstructions: any = '';
  labelinginstructions: any = '';
  specialinstructions: any = '';
  filling_instructions: any = '';
  filling_instructions2: any = '';
  imagedescription: any = '';
  productlin: any = '';
  oem: any = '';
  category: any = '';
  brand: any = '';
  classcode: any = '';
  classification: any = '';
  fillweight: any = '';
  SG: any = '';
  customername: any = '';
  application: any = '';
    productsavedata: any;
  pdrno: any = '';
    cmoname: any;
  cmonumber: any = '';
  notes: any = '';

  DataListcmo: any = [];
  cmo_save_data: any;

  DataListbatch: any = [];
  batchhistory_save_data: any;

  DataListpcc: any = [];
    objname: any;
    pcc_save_data: any;
    componentitemno1: any;
    componentname1: any;
    suppliercode: any;
    fillablecomp: any;
    compsize: any;
    specification: any;
    unitcost: any;
  ItemNo: any;

  DataListpackage: any = [];
    package_save_data: any;
    productpack: any;
    bindproductpip_data: any;
  bindBOMaudit_data: any;
    bindCMO_data: any;
  BindProductProperty_data: any;
    BindProductBatchHistory_data: any;
    bindproductpackaging_data: any;
    bindproductartwork_data: any;
    MainAudit_data: any;
  AudittrackData1: any;
    mainauditdata: any;
    delete_pack_data: any;
    productization_update_data: any;
    productupdatedata: any;
  isproductsave: boolean = false;
  isproductupdate: boolean = true;
    pdrcusload_data: any;
    pp_data: any;
    ppautogenerate_data: any;
    active: any;
    doc1: any;
    labeling_instructions: string;

  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService, private Datashare: DataShareServiceService) { }

  addRow() {
    this.dataGrid.instance.addRow();
    this.dataGrid.instance.saveEditData();


    // this.dataGrid.instance.cellValue(this.selectedRowIndex, "check", false);
  }
  deleteRow() {
    this.dataGrid.instance.deleteRow(this.selectedRowIndex);
    this.dataGrid.instance.deselectAll();
  }
  addRow1() {
    this.dataGrid.instance.addRow();
    this.dataGrid.instance.saveEditData();


    // this.dataGrid.instance.cellValue(this.selectedRowIndex, "check", false);
  }
  deleteRow1() {
    this.dataGrid.instance.deleteRow(this.selectedRowIndex);
    this.dataGrid.instance.deselectAll();
  }

  Opencustomer(): void {
    const dialogRef = this.dialog.open(SearchCustomerComponent, {
      width: '60%', height: '70%', disableClose: true
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {
       /* this.customerkey = result[0];*/
        this.customername = result[1];
        //this.customercode = result[2];
        //this.sendcustcode(this.customercode);
      }

    });

  }
  searchprd(): void {


    const dialogRef = this.dialog.open(SearchProductComponent, {
      width: '80%', height: '90%', disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {
        
        //this.issearchform = true;
        //this.active = "1";
        this.formulacode = result[0];
        this.formulaname = result[1];
        this.productcode = result[2];
        this.productname = result[3];
        var productdate1 = result[4];
        this.productdate = formatDate(new Date(productdate1), 'yyyy-MM-dd', 'en-US');
        this.brandname = result[5];
        this.warnings = result[6];
        this.directions = result[7];
        this.questions = result[8];
        this.miscellaneous = result[9];
        this.barcodeimage = result[10];
        this.barcodenumber = result[11];
        this.uses = result[12];
        /*this.artworkI = result[13];*/
        this.picturefile1 = result[14];
      /*  this.artworkII = result[15];*/
        this.picturefile2 = result[16];
/*        this.artworkIII = result[17];*/
        this.picturefile3 = result[18];
/*        this.artworkIV = result[19];*/
        this.picturefile4 = result[20];
/*        this.artworkV = result[21];*/
        this.picturefile5 = result[22];
        //this.US = result[23];
        //this.EU = result[24];
        //this.California = result[25];
        //this.Japan = result[26];
        //this.Australia = result[27];
        //this.China = result[28];
        this.us = result[29];
        this.eu = result[30];
        this.cal = result[31];
        this.japan = result[32];
        this.australia = result[33];
        this.china = result[34];
        this.Prdnotes = result[35];

        this.casnumber = result[36];
        this.einecsnumber = result[37];
        this.fillsize = result[38];
        this.productdescription = result[39];
        this.applications = result[40];
        this.technicalinformation = result[41];
        this.companyproduct = result[42];
        this.productcode = result[43];
        this.descriptionproduct = result[44];
        this.cosprdrpd = result[45];
        this.manufacturingdescription = result[46];
        this.proof = result[47];
        this.animaldata = result[48];
        this.responsibleperson = result[49];
        this.file1 = result[50];
        this.file2 = result[51];
        this.file3 = result[52];
        this.file4 = result[53];
        this.file5 = result[54];
        this.file6 = result[55];
        /*this.active = result[56];*/
        /* this.Attachment = result[57];*/
        this.fillinginstructions = result[58];
        this.labelinginstructions = result[59];
        this.specialinstructions = result[60];
        //this.ProductLineId = result[61];
        //this.OEMId = result[62];
        //this.ClassId = result[63];
        //this.Classificationid = result[64];
        //this.catid = result[65];
        //this.brandid = result[66];
        //this.applicationid = result[67];
        //this.LastExported = result[68];
        //this.LastExportedDate = result[69];
        //this.ExportedBy = result[70];
        this.filling_instructions = result[71];
     /*   this.LabelAttachment = result[72];*/
        this.filling_instructions = result[73];

        /*  this.productimage = result[74];*/
        this.imagedescription = result[75];
        this.SG = result[76];
        this.fillweight = result[77];
        this.isproductsave = true;
        this.isproductupdate = false;

      }
     

      this.pdrcusload(this.productcode).subscribe((pdrcusload) => {
        console.warn("pdrcusload", pdrcusload)
        this.pdrcusload_data = pdrcusload
        this.PDRdata(this.pdrcusload_data)
      })


      this.ppload(this.productcode).subscribe((ppload) => {
        console.warn("ppload", ppload)
        this.pp_data = ppload
        this.PPdata(this.pp_data)
      })



      this.productpip(this.productcode).subscribe((bindproductpip) => {
        console.warn("bindproductpip", bindproductpip)
        this.bindproductpip_data = bindproductpip
        this.datapcc = this.bindproductpip_data
      })

      this.BOMaudit(this.productpack).subscribe((bindBOMaudit) => {
        console.warn("bindBOMaudit", bindBOMaudit)
        this.bindBOMaudit_data = bindBOMaudit
        this.AudittrackData1 = this.bindBOMaudit_data
      })

      this.CMO(this.productcode).subscribe((bindCMO) => {
        console.warn("bindCMO", bindCMO)
        this.bindCMO_data = bindCMO
        this.datacmo = this.bindCMO_data
      })

      this.ProductProperty(this.productcode).subscribe((BindProductProperty) => {
        console.warn("BindProductProperty", BindProductProperty)
        this.BindProductProperty_data = BindProductProperty
        this.propertydata = this.BindProductProperty_data
      })

      this.ProductBatchHistory(this.productcode).subscribe((BindProductBatchHistory) => {
        console.warn("BindProductBatchHistory", BindProductBatchHistory)
        this.BindProductBatchHistory_data = BindProductBatchHistory
        this.dataprodbatch = this.BindProductBatchHistory_data
      })

      this.productpackaging(this.productpack).subscribe((bindproductpackaging) => {
        console.warn("bindproductpackaging", bindproductpackaging)
        this.bindproductpackaging_data = bindproductpackaging
        this.data_product = this.bindproductpackaging_data
      })

      this.productartwork(this.productcode).subscribe((bindproductartwork) => {
        console.warn("bindproductartwork", bindproductartwork)
        this.bindproductartwork_data = bindproductartwork
        this.dataartcheck = this.bindproductartwork_data
      })

      this.MainAudit(this.productcode).subscribe((MainAudit) => {
        console.warn("MainAudit", MainAudit)
        this.MainAudit_data = MainAudit
        this.mainauditdata = this.MainAudit_data
      })

    });

    

  }
  PDRdata(pdrdatas: any) {
    for (let item of pdrdatas) {
      this.pdrno = item.pdrno;
      this.customername = item.cusname;



    }





  }
  PPdata(pdrdatas: any) {
    for (let item of pdrdatas) {
      this.productpack = item.PPacketNo;
     



    }





  }


  clearprd() {
    this.pdrno = "";
    this.formulacode = "";
    this.formulaname = "";
    this.productcode = "";
    this.productname = "";
    this.customername = "";
    this.productdate = "";
    this.brandname = "";
    this.warnings = "";
    this.directions = "";
    this.questions = "";
    this.miscellaneous = "";
    this.barcodeimage = "";
    this.barcodenumber = "";
    this.uses = "";
    /* this.artworkI ="";*/
    this.picturefile1 = "";
    /* this.artworkII = "";*/
    this.picturefile2 = "";
    /*this.artworkIII = "";*/
    this.picturefile3 = "";
    /*this.artworkIV = "";*/
    this.picturefile4 = "";
    /*this.artworkV = "";*/
    this.picturefile5 = "";
    //this.US = "";
    //this.EU = "";
    //this.California = "";
    //this.Japan = "";
    //this.Australia = "";
    //this.China = "";
    this.us = "";
    this.eu = "";
    this.cal = "";
    this.japan = "";
    this.australia = "";
    this.china = "";
    this.Prdnotes = "";

    this.casnumber = "";
    this.einecsnumber = "";
    this.fillsize = "";
    this.productdescription = "";
    this.applications = "";
    this.technicalinformation = "";
    this.companyproduct = "";
    this.productcode = "";
    this.descriptionproduct = "";
    this.cosprdrpd = "";
    this.manufacturingdescription = "";
    this.proof = "";
    this.animaldata = "";
    this.responsibleperson = "";
    this.file1 = "";
    this.file2 = "";
    this.file3 = "";
    this.file4 = "";
    this.file5 = "";
    this.file6 = "";
    //this.active = "";
    //this.Attachment = "";
    this.fillinginstructions = "";
    this.labelinginstructions = "";
    this.specialinstructions = "";
    this.productlin = "";
    this.oem = "";
    this.classcode = "";
    this.classification = "";
    this.category = "";
    this.brand = "";
    this.application = "";
    //this.LastExported = "";
    //this.LastExportedDate = "";
    //this.ExportedBy = "";
    this.filling_instructions = "";
    /* this.LabelAttachment = "";*/
    this.filling_instructions = "";

    /*this.productimage ="";*/
    this.imagedescription = "";
    this.SG = "";
    this.fillweight = "";
    this.active = "1";
    this.datacmo = [];
    this.data_product = [];


    
    this.dataprodbatch = [];
    
    this.datapcc = [];
   this. dataartcheck= [];
  
  }
  ppload(productcode: string) {
    var prdcode = productcode;
    let params1 = new HttpParams().set('ProductCode', prdcode);
    return this.http.get("https://formulaproductization4.azurewebsites.net/loadpp", { params: params1, })
  }
  pdrcusload(productcode: string) {
    var prdcode = productcode;
    let params1 = new HttpParams().set('ProductCode', prdcode);
    return this.http.get("https://formulaproductization4.azurewebsites.net/loadpdr", { params: params1, })
  }
  productpip(productcode: string) {
    var prdcode = productcode;
    let params1 = new HttpParams().set('ProductCode', prdcode);
    return this.http.get("https://formulaproductization3.azurewebsites.net/bindproductpip", { params: params1, })
  }

  BOMaudit(pack: string) {
    var pp = pack;
    let params1 = new HttpParams().set('PPackageNo', pp);
    return this.http.get("https://formulaproductization3.azurewebsites.net/bindBOMaudit", { params: params1, })
  }
  CMO(productcode: string) {
    var prdcode = productcode;
    let params1 = new HttpParams().set('ProductCode', prdcode);
    return this.http.get("https://formulaproductization3.azurewebsites.net/bindCMO", { params: params1, })
  }
  ProductProperty(productcode: string) {
    var prdcode = productcode;
    let params1 = new HttpParams().set('ProductCode', prdcode);
    return this.http.get("https://formulaproductization3.azurewebsites.net/BindProductProperty", { params: params1, })
  }
  ProductBatchHistory(productcode: string) {
    var prdcode = productcode;
    let params1 = new HttpParams().set('ProductCode', prdcode);
    return this.http.get("https://formulaproductization3.azurewebsites.net/BindProductBatchHistory", { params: params1, })
  }
  productpackaging(pack: string) {
    var pp = pack;
    let params1 = new HttpParams().set('PPackageNo', pp);
    return this.http.get("https://formulaproductization3.azurewebsites.net/bindproductpackaging", { params: params1, })
  }
 productartwork(productcode: string) {
    var prdcode = productcode;
    let params1 = new HttpParams().set('ProductCode', prdcode);
    return this.http.get("https://formulaproductization3.azurewebsites.net/bindproductartwork", { params: params1, })
  }
  MainAudit(productcode: string) {
    var prdcode = productcode;
    let params1 = new HttpParams().set('ProductCode', prdcode);
    return this.http.get("https://formulaproductization3.azurewebsites.net/MainAudit", { params: params1, })
  }
  opencomponentsearch(event): void {

    var indexdataprod: any = event.rowIndex;

    const dialogRef = this.dialog.open(SearchComponentComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {

        this.componentitemno1 = result[0];
        this.componentname1 = result[1];
     
        this.fillablecomp = result[3];
        this.compsize = result[4];
        this.specification = result[5];
        this.unitcost = result[6];
        this.ItemNo = result[7];

        

        this.selectedRowIndex = indexdataprod;
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "ComponentItemNo", this.componentitemno1);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "ComponentName", this.componentname1);
        
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "FillableComponent", this.fillablecomp);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "Size", this.compsize);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "Specification", this.specification);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "UnitCost", this.unitcost);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "ItemNo", this.ItemNo);
        

        this.dataGrid.instance.saveEditData();
      }
    });




  }

  opencmoserach(event): void {

    var indexdataprod: any = event.rowIndex;

    const dialogRef = this.dialog.open(SearchCmoComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {



        this.cmoname = result[0];
        this.cmonumber = result[1];
        this.notes = result[10];
       
        this.selectedRowIndex = indexdataprod;
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "CMOName", this.cmoname);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "CMONumber", this.cmonumber);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "Notes", this.notes);
       
        this.dataGrid.instance.saveEditData();
      }
    });




  }

  savechemistryparamlist() { this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Chemistry parameter saved Successfully' } }); }

  savemicrobioparamlist() { this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Micro params saved Successfully' } }); }



  setvaluesproductbatch(batchdata: any) {
    this.i = 0;
    this.j = 0;

    for (let search of batchdata) {

      this.DataListbatch[this.i] = ([{

        LineNumber: search.LineNumber,
        Date: search.Date  ,
        Source: search.Source,
        BF: search.BF,
        Qty: search.Qty,
        Code: search.Code,
        Color: search.Color,
        Odor: search.Odor,
        Texture: search.Texture,
        pH: search.pH,
        Viscosity: search.Viscosity,
        Specificgravity: search.Specificgravity,
        Solids: search.Solids,
        Remarks: search.Remarks,
      
      }]);
      this.i++;

    }

  }
  objectnumber(obj: any) {


    this.objname = obj.length;
    

    

   

  }
  setvaluespcc(pccdata: any) {
    this.i = 0;
    this.j = 0;

    for (let search of pccdata) {

      this.DataListpcc[this.i] = ([{

        Itemno: search.Itemno,

        Information: search.Information,

        

        CheckOff: search.CheckOff,
       /* ProductCode: search.CMONumber,*/
        
        UserName: search.UserName,
        // DateFormatOld: search.DateFormatOld,
      }]);
      this.i++;

    }

  }
  setvaluespackage(packagedata: any) {
    this.i = 0;
    this.j = 0;

    for (let search of packagedata) {

      this.DataListpackage[this.i] = ([{



        ComponentItemNo: search.ComponentItemNo ,
        ComponentName: search.ComponentName,
        Specification: search.Specification ,
        Size: search.Size ,
        UnitCost: search.UnitCost,
        Linenumber: search.Linenumber ,
        FillableComponent: search.FillableComponent ,
        ItemNo: search.ItemNo ,


        
      }]);
      this.i++;

    }

  }

  setvaluescmo(cmodata: any) {
    this.i = 0;
    this.j = 0;

    for (let search of cmodata) {

      this.DataListcmo[this.i] = ([{
        linenumber: search.LineNumber,
        cmonumber: search.CMONumber,
        
        // DateFormatOld: search.DateFormatOld,
      }]);
      this.i++;

    }

  }


  deletepackaging() {
    

    this.deletepackage().subscribe((deletepackaging) => {
      console.warn("deletepackaging", deletepackaging)
      this.delete_pack_data = deletepackaging

    })


  }

  deletepackage() {
    var csname = this.customername
    var pp = this.productpack
    var productcode = this.productcode
    var productname = this.productname
    var user = "admin";
    var status = "";

    let params1 = new HttpParams().set('cusname', csname).set('PPackageNo', pp)
      .set('ProductCode', productcode).set('ProductName', productname).set('UserName', user).set('status', status);
    return this.http.get("https://formulaproductization4.azurewebsites.net/Deletepackaging", { params: params1, responseType: 'text' })




  }

  savecmodetails() {
    this.setvaluescmo(this.datacmo);

    this.savecmo().subscribe((savecmod) => {
      console.warn("savecmod", savecmod)
      this.cmo_save_data = savecmod

      this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'CMO information saved Successfully ' } });


    })


  }




  savecmo() {
    var productcode = this.productcode
    var productnumber = this.productcode
    var productname = this.productname
    var datalistform: any = JSON.stringify(this.DataListcmo);

    let params1 = new HttpParams().set('productcode', productcode).set('productnumber', productnumber)
      .set('productname', productname).set('cmogridjson', datalistform);
    return this.http.get("https://formulaproductization2.azurewebsites.net/Save_cmodetails", { params: params1, responseType: 'text' })




  }






















  searchhformula(): void {


    const dialogRef = this.dialog.open(SearchFormulaComponent, {
      width: '80%', height: '90%', disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed', result);
    if (result != "") {
      //this.issearchform = true;
      //this.active = "1";
      this.formulacode = result[0];
      this.formulaname = result[1];
     /* this.labref = result[2];*/
      this.pdrno = result[3];
      //this.rowData = null;

      }

    });

  }
  formuladd() {
    const dialogRef = this.dialog.open(FormulaLookupComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    });
  }
  addcmo() {
    const dialogRef = this.dialog.open(CmoComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    });
  }
  pdradd() {
    const dialogRef = this.dialog.open(PdrManagementComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    });
  }


  productpriceadd() {
    
    const dialogRef = this.dialog.open(CustomerDetailsComponent,  {
     
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    }
       /*this.active = "4";*/
    );
    
  }
  componentadd() {
    const dialogRef = this.dialog.open(AddComponentComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    });
  }
  complisting(): void {
    const dialogRef = this.dialog.open(ComponentlistingComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  productadd(): void {
    const dialogRef = this.dialog.open(AddProductlineComponent, {
      width: '60%', height: '70%', disableClose: true
    });
  }
  classcodeadd(): void {
    const dialogRef = this.dialog.open(AddClasscodeComponent, {

      width: '60%', height: '70%', disableClose: true
    });
  }
  applicationadd(): void {
    const dialogRef = this.dialog.open(AddApplicationComponent, {
      width: '60%', height: '70%', disableClose: true
    });
  }
  brandadd(): void {
    const dialogRef = this.dialog.open(AddBrandComponent, {
      width: '60%', height: '70%', disableClose: true
    });
  }
  oemadd(): void {
    const dialogRef = this.dialog.open(AddOemComponent, {
      width: '60%', height: '70%', disableClose: true
    });
  }
  categoryadd(): void {
    const dialogRef = this.dialog.open(AddProductcategoryComponent, {
      width: '60%', height: '70%', disableClose: true
    });
  }
  classificationadd(): void {
    const dialogRef = this.dialog.open(AddClassificationComponent, {
      width: '60%', height: '70%', disableClose: true
    });
  }
  opennewchemistry(): void {
    if (this.formulaname == "" && this.formulacode == "" && this.pdrno == "" && this.customername == "") {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'save product details before adding parameters' } });
    } else {
      const dialogRef = this.dialog.open(NewCheComponent, {
        width: '60%', height: '60%', disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        this.loadpdrno = this.datashare.getpdrno();
        this.loadchemistry(this.loadpdrno).subscribe((loadchemdata) => {
          console.warn("loadchemdata", loadchemdata)
          this.datachem = loadchemdata

        })

      });
    }
  }
  triggerSomeEvent(event) {
    this.Approvedbrand = event.target.checked.toString();    
    if (this.Approvedbrand == "true") {
      this.brandcheck = true;
    } else {
      this.brandcheck = false;
    }

  }
  approvedinfofile(event) {
    if (this.descriptionproduct == "" && this.cosprdrpd == "" && this.manufacturingdescription == "" && this.proof == "" && this.animaldata == "" && this.responsibleperson == "") {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter at least one PIF information' } });
    } else {
      this.Approvedproductinfo = event.target.checked.toString();
      if (this.Approvedproductinfo == "true") {
        this.Approvedproductinfo = "true"
        this.Approvinfo = true
        //Method approve
      } else {
        this.Approvedproductinfo = "false";
        this.Approvinfo = false
      }
    }
  }
  opennewmicrobiology(): void {
    if (this.formulaname == "" && this.formulacode == "" && this.pdrno == "" && this.customername == "") {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'save product details before adding parameters' } });
    } else {
      const dialogRef = this.dialog.open(NewMicrobComponent, {
        width: '60%', height: '60%', disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        this.loadpdrno = this.datashare.getpdrno();
        this.loadmicrobiology(this.loadpdrno).subscribe((loadmicrobiologydata) => {
          console.warn("loadmicrobiologydata", loadmicrobiologydata)
          this.datamicro = loadmicrobiologydata
        })

      });
    }
  }

  selectedChanged(e) {
    this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);

  }

 
  ppauto() {
    return this.http.get("https://formulaproductization4.azurewebsites.net/ppnumbergenerate", { responseType: 'text' });
  }


  product_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadproductline")
  }

  class_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadclasscode")
  }


  brand_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadbrand")
  }

  oem_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadOEM")
  }
  category_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadcat")
  }
  classification_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadclassification")
  }
  application_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadapplication")
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
  propertydataload(itemcode: string) {
    var itemcode = itemcode;
    let params1 = new HttpParams().set('Itemcode', itemcode);
    return this.http.get("https://smartformulatorrawmaterialwebservice4.azurewebsites.net/LoadPhysicalProperty", { params: params1, })
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

  productisation_update() {

    this.dataformList[0] = ([{
      FormulaCode: this.formulacode,
      FormulaName: this.formulaname,
      ProductCode: this.productcode,
      ProductName: this.productname,
      ProductDate: this.productdate,
      BrandName: this.brandname,
      Warnings: this.warnings,
      Directions: this.directions,
      Questions: this.questions,
      Miscellaneous: this.miscellaneous,
      BarCodeImage: this.barcodeimage,
      BarCodeNumber: this.barcodenumber,
      Uses: this.uses,
      Imagepath: '',
      artworkI: '',
      artworkIPath: this.picturefile1,
      artworkII: '',
      artworkIIPath: this.picturefile2,
      artworkIII: '',
      artworkIIIPath: this.picturefile3,
      artworkIV: '',
      artworkIVPath: this.picturefile4,
      artworkV: '',
      artworkVPath: this.picturefile5,
      US: '',
      EU: '',
      California: '',
      Japan: '',
      Australia: '',
      China: '',
      USDoc: this.us,
      EUDoc: this.eu,
      Caldoc: this.cal,
      Japandoc: this.japan,
      Ausdoc: this.australia,
      Chinadoc: this.china,
      Notes: this.Prdnotes,
      CASNo: this.casnumber,
      EinecsNo: this.einecsnumber,
      FillSize: this.fillsize,
      ProductDescription: this.productdescription,
      Applications: this.applications,
      Technicalinformation: this.technicalinformation,
      CompanyProductNo: this.companyproduct,
      ProductNumber: this.productcode,
      PdtDescription: this.descriptionproduct,
      CosmeticPdtReport: this.cosprdrpd,
      ManuFacturingDesc: this.manufacturingdescription,
      ProofandClaims: this.proof,
      AnimalTestData: this.animaldata,
      ResponsiblePerson: this.responsibleperson,
      File1: this.file1,
      File2: this.file2,
      File3: this.file3,
      File4: this.file4,
      File5: this.file5,
      File6: this.file6,
      active: '',
      Attachment: '',
      FillingInstruction: this.fillinginstructions,
      LabelingInstruction: this.labelinginstructions,
      SpecialInstruction: this.specialinstructions,

      LastExported: '',
      LastExportedDate: '',
      ExportedBy: '',
      FillingAttachment: this.filling_instructions,
      LabelAttachment: '',
      FillingAttachment2: this.filling_instructions2,
      ImageDescription: this.imagedescription,









    }]);

    this.setvaluesproductbatch(this.dataprodbatch);
    this.setvaluespcc(this.datapcc);
    this.objectnumber(this.datapcc);
    this.setvaluespackage(this.data_product);

    this.productization_update().subscribe((productization_update) => {
      console.warn("productization_update", productization_update)
      this.productization_update_data = productization_update
      this.productupdatedata = productization_update


      if (this.productupdatedata == " Updated ") {

        this.package_saveup().subscribe((package_saveup) => {
          console.warn("package_saveup", package_saveup)
          this.package_save_data = package_saveup



        })

        this.pcc_saveup().subscribe((pcc_saveup) => {
          console.warn("pcc_saveup", pcc_saveup)
          this.pcc_save_data = pcc_saveup



        })


        this.batch_saveup().subscribe((batch_saveup) => {
          console.warn("batch_saveup", batch_saveup)
          this.batchhistory_save_data = batch_saveup




        })






        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'Product is Updated Successfully' } });



      }

    })






  }

  productisation_Save() {

    if (this.formulaname == "" || this.formulaname == undefined) {

      this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'Enter Formula Name' } });

    }
    else if (this.productcode == "" || this.productcode == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'Enter Product/SKU #' } });
    }
    else if (this.productname == "" || this.productname == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'Enter Product Name #' } });
    }

    else {


      this.dataformList[0] = ([{
        FormulaCode: this.formulacode,
        FormulaName: this.formulaname,
        ProductCode: this.productcode,
        ProductName: this.productname,
        ProductDate: this.productdate,
        BrandName: this.brandname,
        Warnings: this.warnings,
        Directions: this.directions,
        Questions: this.questions,
        Miscellaneous: this.miscellaneous,
        BarCodeImage: this.barcodeimage,
        BarCodeNumber: this.barcodenumber,
        Uses: this.uses,
        Imagepath: '',
        artworkI: '',
        artworkIPath: this.picturefile1,
        artworkII: '',
        artworkIIPath: this.picturefile2,
        artworkIII: '',
        artworkIIIPath: this.picturefile3,
        artworkIV: '',
        artworkIVPath: this.picturefile4,
        artworkV: '',
        artworkVPath: this.picturefile5,
        US: '',
        EU: '',
        California: '',
        Japan: '',
        Australia: '',
        China: '',
        USDoc: this.us,
        EUDoc: this.eu,
        Caldoc: this.cal,
        Japandoc: this.japan,
        Ausdoc: this.australia,
        Chinadoc: this.china,
        Notes: this.Prdnotes,
        CASNo: this.casnumber,
        EinecsNo: this.einecsnumber,
        FillSize: this.fillsize,
        ProductDescription: this.productdescription,
        Applications: this.applications,
        Technicalinformation: this.technicalinformation,
        CompanyProductNo: this.companyproduct,
        ProductNumber: this.productcode,
        PdtDescription: this.descriptionproduct,
        CosmeticPdtReport: this.cosprdrpd,
        ManuFacturingDesc: this.manufacturingdescription,
        ProofandClaims: this.proof,
        AnimalTestData: this.animaldata,
        ResponsiblePerson: this.responsibleperson,
        File1: this.file1,
        File2: this.file2,
        File3: this.file3,
        File4: this.file4,
        File5: this.file5,
        File6: this.file6,
        active: '',
        Attachment: '',
        FillingInstruction: this.fillinginstructions,
        LabelingInstruction: this.labelinginstructions,
        SpecialInstruction: this.specialinstructions,

        LastExported: '',
        LastExportedDate: '',
        ExportedBy: '',
        FillingAttachment: this.filling_instructions,
        LabelAttachment: '',
        FillingAttachment2: this.filling_instructions2,
        ImageDescription: this.imagedescription,









      }]);

      this.setvaluesproductbatch(this.dataprodbatch);
      this.setvaluespcc(this.datapcc);
      this.objectnumber(this.datapcc);
      this.setvaluespackage(this.data_product);

      this.productization_saveup().subscribe((productization_saveup) => {
        console.warn("productization_saveup", productization_saveup)
        this.productization_save_data = productization_saveup
        this.productsavedata = productization_saveup


        if (this.productsavedata == " productized ") {

          this.package_saveup().subscribe((package_saveup) => {
            console.warn("package_saveup", package_saveup)
            this.package_save_data = package_saveup



          })

          this.pcc_saveup().subscribe((pcc_saveup) => {
            console.warn("pcc_saveup", pcc_saveup)
            this.pcc_save_data = pcc_saveup



          })


          this.batch_saveup().subscribe((batch_saveup) => {
            console.warn("batch_saveup", batch_saveup)
            this.batchhistory_save_data = batch_saveup




          })






          this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'Formula productized successfully.Now you can go to Packaging tab and select packaging BOM components to show how the finished product is packaged.' } });



        }

      })




    }

  }


  package_saveup() {
    var productcode = this.productcode;
    var cus = this.customername;
    var pp = this.productpack;
    

    
    var datalistform4: any = JSON.stringify(this.DataListpackage);

    let params1 = new HttpParams().set('packaginggridjson', datalistform4)
      .set('cusname', cus).set('PPackageNo', pp).set('ProductCode', productcode);
    return this.http.get("https://formulaproductization1.azurewebsites.net/save_packagingdetails", { params: params1, responseType: 'text' })

  }



  pcc_saveup() {
    var productcode = this.productcode;
    var objnumber = this.objname;
    var datalistform3: any = JSON.stringify(this.DataListpcc);

    let params1 = new HttpParams().set('pccgridjson', datalistform3)
      .set('ProductCode', productcode).set('objnumber', objnumber);
    return this.http.get("https://formulaproductization1.azurewebsites.net/productinformationpackage", { params: params1, responseType: 'text' })

  }





  batch_saveup() {
    var productcode = this.productcode;
    var productname = this.productname;
    var formulacode = this.formulacode;
    var formulaname = this.formulaname;
    var productnumber =this.productcode
    var usrnam = 'admin';
    var datalistform2: any = JSON.stringify(this.DataListbatch);

    

    let params1 = new HttpParams().set('batchgridjson', datalistform2).set('username', usrnam)
      .set('ProductCode', productcode).set('ProductName', productname)
      .set('FormulaCode', formulacode).set('FormulaName', formulaname).set('ProductNumber', productnumber);
    return this.http.get("https://formulaproductization1.azurewebsites.net/save_product_BatchHistory", { params: params1, responseType: 'text' })

  }


  productization_saveup() {

    var PPackageNo = "2596";
    var ProductLine = this.productlin;
    var OEM = this.oem;
    var category = this.category;
    var brand = this.brand;
    var classcode1 = this.classcode;
    var classification = this.classification;
    var application = this.application;
    var oldArtwork1 = "";
    var oldArtwork2 = "";
    var oldArtwork3 = "";
    var oldArtwork4 = "";
    var oldArtwork5 = "";
    var username = "admin";

    var SpecificGravity = this.SG;
    var FillWeight = this.fillweight;

    var cusname = this.customername;


      var datalistform: any = JSON.stringify(this.dataformList);
    /*var datalistform2: any = JSON.stringify(this.DataListbatch);*/



    let params1 = new HttpParams().set('productizationjson', datalistform).set('PPackageNo', PPackageNo)
      .set('ProductLine', ProductLine).set('OEM', OEM)
      .set('category', category).set('brand', brand)
      .set('classcode1', classcode1).set('classification', classification)
      .set('application', application).set('oldArtwork1', oldArtwork1)
      .set('oldArtwork2', oldArtwork2).set('oldArtwork3', oldArtwork3)
      .set('oldArtwork4', oldArtwork4).set('oldArtwork5', oldArtwork5)
      .set('username', username).set('SpecificGravity', SpecificGravity).set('FillWeight', FillWeight)
      .set('cusname', cusname);
    return this.http.get("https://formulaproductization1.azurewebsites.net/saveproductization", { params: params1, responseType: 'text' })
    
  }


  productization_update() {

    var PPackageNo = this.productpack;
    var ProductLine = this.productlin;
    var OEM = this.oem;
    var category = this.category;
    var brand = this.brand;
    var classcode1 = this.classcode;
    var classification = this.classification;
    var application = this.application;
   
    var username = "admin";

    var SpecificGravity = this.SG;
    var FillWeight = this.fillweight;

    var cusname = this.customername;


    var datalistform: any = JSON.stringify(this.dataformList);
    /*var datalistform2: any = JSON.stringify(this.DataListbatch);*/



    let params1 = new HttpParams().set('productizationjson', datalistform).set('PPackageNo', PPackageNo)
      .set('ProductLine', ProductLine).set('OEM', OEM)
      .set('category', category).set('brand', brand)
      .set('classcode1', classcode1).set('classification', classification)
      .set('application', application)
      .set('username', username).set('SpecificGravity', SpecificGravity).set('FillWeight', FillWeight)
      .set('cusname', cusname);
    return this.http.get("https://formulaproductization1.azurewebsites.net/updateproductization", { params: params1, responseType: 'text' })

  }


  handleFileInput(files: FileList) {
    var filebrowse = files.item.length;
    this.doc1 = files.item(0).name;
  }
  handleFileInput3(files: FileList) {
    var filebrowse = files.item.length;
    this.filling_instructions = files.item(0).name;
  }
  handleFileInput4(files: FileList) {
    var filebrowse = files.item.length;
    this.filling_instructions2 = files.item(0).name;
  }
  handleFileInput5(files: FileList) {
    var filebrowse = files.item.length;
    this.labeling_instructions = files.item(0).name;



  }

  handleFileInput7(files: FileList) {
    var filebrowse = files.item.length;
    this.barcodeimage = files.item(0).name;



  }
  handleFileInput8(files: FileList) {
    var filebrowse = files.item.length;
    this.picturefile1 = files.item(0).name;



  }

  handleFileInput9(files: FileList) {
    var filebrowse = files.item.length;
    this.picturefile2 = files.item(0).name;



  }
  handleFileInput10(files: FileList) {
    var filebrowse = files.item.length;
    this.picturefile3 = files.item(0).name;



  }

  handleFileInput11(files: FileList) {
    var filebrowse = files.item.length;
    this.picturefile4 = files.item(0).name;



  }
  handleFileInput12(files: FileList) {
    var filebrowse = files.item.length;
    this.picturefile5 = files.item(0).name;



  }

  handleFileInput13(files: FileList) {
    var filebrowse = files.item.length;
    this.us = files.item(0).name;



  }
  handleFileInput14(files: FileList) {
    var filebrowse = files.item.length;
    this.eu = files.item(0).name;



  }


  handleFileInput15(files: FileList) {
    var filebrowse = files.item.length;
    this.cal = files.item(0).name;



  }

  handleFileInput16(files: FileList) {
    var filebrowse = files.item.length;
    this.japan = files.item(0).name;



  }
  handleFileInput17(files: FileList) {
    var filebrowse = files.item.length;
    this.australia = files.item(0).name;



  }



  handleFileInput18(files: FileList) {
    var filebrowse = files.item.length;
    this.china = files.item(0).name;



  }

  handleFileInput19(files: FileList) {
    var filebrowse = files.item.length;
    this.file1 = files.item(0).name;



  }

  handleFileInput20(files: FileList) {
    var filebrowse = files.item.length;
    this.file2 = files.item(0).name;



  }
  handleFileInput21(files: FileList) {
    var filebrowse = files.item.length;
    this.file3 = files.item(0).name;



  }
  handleFileInput22(files: FileList) {
    var filebrowse = files.item.length;
    this.file4 = files.item(0).name;



  }
  handleFileInput23(files: FileList) {
    var filebrowse = files.item.length;
    this.file5 = files.item(0).name;



  }
  handleFileInput24(files: FileList) {
    var filebrowse = files.item.length;
    this.file6 = files.item(0).name;



  }












  ngOnInit() {
    this.datapcc = [{ Itemno: "1", Information: "Product Description & Codes or Formulation Code", CheckOff: false, checked: "", UserName: "", locked: "E" },
      { Itemno: "2", Information: "Product formula including %'s, INCI names, Trade Names and Suppliers", CheckOff: false, checked: "", UserName: "", locked: "E" },
      { Itemno: "3", Information: "Perfumes - 26 potential allergens content list from perfume supplie", CheckOff: false, checked: "", UserName: "", locked: "E" },
      { Itemno: "4", Information: "INCI list with %'s", CheckOff: false, checked: "", UserName: "", locked: "E" },
      { Itemno: "5", Information: "Stability Summary,  with reference to methods(this usually shows the stability at ambient 30C, 40C, freeze-thaw etc.)", CheckOff: false, checked: "", UserName: "", locked: "E" },
      { Itemno: "6", Information: "Manufacturing Procedure summary", CheckOff: false, checked: "", UserName: "", locked: "E" },
      { Itemno: "7", Information: "Specification - Viscosity, pH and other test data listed", CheckOff: false, checked: "", UserName: "", locked: "E" },

      { Itemno: "8", Information: "Labeling requirements", CheckOff: false, checked: "", UserName: "", locked: "E"},
      { Itemno: "9", Information: "Product Testing Results - Microbiological Challenge test records for products that contain water", CheckOff: false, checked: "", UserName: "", locked: "E" },
      { Itemno: "10", Information: "Content - declare in g. or ml.", CheckOff: false, checked: "", UserName: "", locked: "E" },
      { Itemno: "11", Information: "Claim Substantiation summary with refererences (this is proof that pack claims are able to be substantiated)", CheckOff: false, checked: "", UserName: "", locked: "E" },
      { Itemno: "12", Information: "Proposed pack copy or artwork for each carton and label (make sure claims in Pack copy are checked)", CheckOff: false, checked: "", UserName: "", locked: "E"},
      { Itemno: "13", Information: "PAO (Product After Opening) time or best before date (Minimum Durability)", CheckOff: false, checked: "", UserName: "", locked: "E" },
      { Itemno: "14", Information: "Product Safety Assessment Statement - Executive Summary", CheckOff: false, checked: "", UserName: "", locked: "E" },
      { Itemno: "15", Information: "Legal Compliance for Annex III restricted materials, colors & preservatives and sunscreen (CIR Panel review, preservative, sunscreen and color legal compliance check)", CheckOff: false, checked: "", UserName: "", locked: "E" },
      { Itemno: "16", Information: "A picture of the final product should appear in the PCC (as this will be required when on-line registration is available)", CheckOff: false, checked: "", UserName: "", locked: "E" },
      { Itemno: "17", Information: "Perfumes and Flavors should have IFRA and/or RFIM compliance statements from the perfume shop", CheckOff: false, checked: "", UserName: "", locked: "E" },
      { Itemno: "18", Information: "Raw Material ingredient specifications and technical data sheets", CheckOff: false, checked: "", UserName: "", locked: "E" },
      { Itemno: "19", Information: "Summary of GMP statement(a statement on company letter head declaring ISO standards and/or GMP compliance)", CheckOff: false, checked: "", UserName: "", locked: "E" },
      { Itemno: "20", Information: "The product must not have been tested on animals", CheckOff: false, checked: "", UserName: "", locked:"E" },
      { Itemno: "21", Information: "The assessments has assumed that the raw materials are of Cosmetic or Pharmaceutical grade and are low in impurities", CheckOff: false, checked: "", UserName: "", locked: "E" },
      { Itemno: "22", Information: "Miscellaneous Information for Product Info. File", CheckOff: false, checked: "", UserName: "", locked: "E" }
    ]
    this.brandcheck = true;
    this.ppauto().subscribe((pdrautogenerate) => {
      console.warn("pdrautogenerate", pdrautogenerate)
      this.ppautogenerate_data = pdrautogenerate
      this.productpack = this.ppautogenerate_data
    })


    this.product_load().subscribe((product_load) => {
      console.warn("product_load", product_load)
      this.loadproduct = product_load
    })
    this.class_load().subscribe((class_load) => {
      console.warn("class_load", class_load)
      this.loadclass = class_load
    })
    this.brand_load().subscribe((brand_load) => {
      console.warn("brand_load", brand_load)
      this.loadbrand = brand_load
    })
    this.oem_load().subscribe((oem_load) => {
      console.warn("oem_load", oem_load)
      this.loadoem = oem_load
    })
    this.category_load().subscribe((category_load) => {
      console.warn("category_load", category_load)
      this.loadcategory = category_load
    })
    this.classification_load().subscribe((classification_load) => {
      console.warn("classification_load", classification_load)
      this.loadclassification = classification_load
    })
    this.application_load().subscribe((application_load) => {
      console.warn("application_load", application_load)
      this.loadapplication = application_load
    })
    this.loadpdrno = this.datashare.getpdrno();
    this.loadchemistry(this.loadpdrno).subscribe((loadchemdata) => {
      console.warn("loadchemdata", loadchemdata)
      this.datachem = loadchemdata

    })
    this.loadpdrno = this.datashare.getpdrno();
    this.loadmicrobiology(this.loadpdrno).subscribe((loadmicrobiologydata) => {
      console.warn("loadmicrobiologydata", loadmicrobiologydata)
      this.datamicro = loadmicrobiologydata
    })
    this.isproductsave = false;
    this.isproductupdate = true;

  }

  

}
export class productizationData {

}
