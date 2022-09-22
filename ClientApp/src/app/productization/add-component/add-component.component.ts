import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';

import { DataShareServiceService } from 'src/app/data-share-service.service';

import { DatagridcomponentComponent } from 'src/app/formula-lookup/customer-details/datagridcomponent/datagridcomponent.component';
import { NgModule } from '@angular/core';
import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";

import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { AddComponentcategoryComponent } from './add-componentcategory/add-componentcategory.component';
import { AddSupplierComponent } from '../../raw-material/add-supplier/add-supplier.component';
import { SearchSupplierComponent } from '../../raw-material/add-supplier/search-supplier/search-supplier.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {
  suPliername: any;
    loadcomponentcategory: any;
    componentitemnumber: any;
    Comp_Data: any;
    bommultiplier: any='';
  cumleadtime: any = '';
  status: any = '';
  categorytype: any = '';
  color: any = '';
  componentname: any = '';
  date: any='';
  finish: any = '';
  lastpocost: any = '';
  moq: any = '';
  componentdescription: any = '';
  postprocess: any = '';
  preprocessing: any = '';
  processing: any = '';
  reorder: any = '';
  specification: any = '';
  stdprice: any = '';
  compimage: any = '';
  Comp_Data2: any = '';
  attachresponsible: any = '';
  additionaldoc: any = '';
  percentage: any = '';
  othedetail: any = '';
  otherpaper: any = '';
  reason: any = '';
  addinfo: any = '';
  cartons: any = '';
  height: any = '';
  length: any = '';
  width: any = '';
  vrs: any = '';
  weightofcomp: any = '';
  Comp_Data3: any = '';
  Comp_Data4: any = '';
  dataformList : any =[];
    component_save_data: any;
  dataformList2: data2[][] = [];
  fillablecomponent: string='No';
  bulkcontaine: boolean;
  biodegradable: string = '0';
  bioplastic: string = '1';


  bulkcontainer: string='N' ;
  mcplastic: any = '0';
  mcaluminium: any = '0';
  mcrecycledplastic: any = '0';
  mcpaper: any = '0';
  mcother: any = '0';

  
  mcplasti: boolean;
  mcaluminiu: boolean;
  mcrecycledplasti: boolean;
  mcpape: boolean;
  mcothe: boolean;



  pmaluminium: any = '0';
  pmsteel: any = '0';
  pmglass: any = '0';
  pmpaper: any = '0';
  pmhdpe: any = '0';
  pmlldpe: any = '0';
  pmpet: any = '0';
  pmpp: any = '0';

  
  pmaluminiu: boolean;
  pmstee: boolean;
  pmglas: boolean;
  pmpape: boolean;
  pmhdp: boolean;
  pmlldp: boolean;
  pmpe: boolean;
  pmp: boolean;


  pboxboard: any = '0';
  pother: string = '0';
  pcorrugated: any = '0';
  plantbased: any = 'No';

  plantbase: boolean;
  pboxboar: boolean;
  pothe: boolean;
  pcorrugate: boolean;


    suppliercode: any;
    bulkcontainer1: string;
    component_update_data: any;
    Data: any;
    count: any;
    size: any;
    noofunits: any;
    defsg: any;
    defs: number;
    def: number;
    counts: any;
  showDateInput = false;
    showDateInpu= false;
  owDateInput = false;
  showDateInp : boolean;
    component_delete_data: any;

  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService, private Datashare: DataShareServiceService) { }



  addcomponenentcat(): void {
    const dialogRef = this.dialog.open(AddComponentcategoryComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  searchcomponent1(): void {
    const dialogRef = this.dialog.open(SearchComponentComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {
        this.componentitemnumber = result[0];
    //    this.projectname = result[1];
    //    this.customername = result[2];
       
      }
     
      this.compdataload().subscribe((compload) => {
        console.warn("compload", compload)
        this.Comp_Data = compload
        this.COMPdata(this.Comp_Data)

      })

      this.compdataload2().subscribe((compload2) => {
        console.warn("compload2", compload2)
        this.Comp_Data2 = compload2
        this.COMPdata2(this.Comp_Data2)
      })
      this.compdataload3().subscribe((compload3) => {
        console.warn("compload3", compload3)
        this.Comp_Data3 = compload3
        this.counts = this.Comp_Data3.length
        
      })
      this.compdataload4().subscribe((compload4) => {
        console.warn("compload4", compload4)
        this.Comp_Data4 = compload4

      })






    });


  }


  radioValueChec(x) {
    this.showDateInpu = (x === 2);
  }

  radioValueCheck(x) {
       this.showDateInput = (x === 1);
  }
  radioValueChe(x) {
    this.showDateInp = (x === 1);

   
   }

  blurEventsg(event: any) {
    var defsg = Number(event.target.value);
    this.defsg = defsg
    this.cumleadtime = this.defsg + this.defs + this.def

  

  }
  blurEvents(event: any) {
    var defs = Number(event.target.value);
    this.defs = defs
    this.cumleadtime = this.defsg + this.defs + this.def
  }
  blurEvent(event: any) {
    var def = Number(event.target.value);
    this.def = def

    this.cumleadtime = this.defsg+this.defs+def
  }


  COMPdata2(compdatas2: any) {
    for (let item of compdatas2) {


      this.additionaldoc = item.AdditionalDoc;
      this.attachresponsible = item.AtatchQuestDoc1;
      this.biodegradable = item.Biodegrade;
      this.percentage = item.Biodegradeperc;
      this.bioplastic = item.Bioplastic;
      this.pboxboard = item.Boxboard;
      this.cartons= item. Cartons;
      //this. = item. ComponentItemNo;
      //this. = item. ComponentName;
      this.pcorrugated = item.Corrugated;
      this.mcaluminium = item.MCAluminium;
      this.mcother = item.MCOther;
      this.othedetail = item. MCOtherDetail;
      this.mcpaper = item.MCPaper;
      this.mcplastic = item.MCPlastic;
      this.mcrecycledplastic = item.MCRecycledPlastic;
      this.mcother = item.OtherPaper;
      this.otherpaper = item.OtherPaperDetail;
      this.pmaluminium = item.PMAluminium;
      this.pmglass = item.PMGlass;
      this.pmhdpe = item.PMHDPE;
      this.pmlldpe = item.PMLLDPE;
      this. pmpet= item. PMPET;
      this.pmpp = item.PMPP;
      this.pmpaper = item.PMPaper;
      this. pmsteel= item. PMsteel;
  /*  *//*  this. = item. PackagingCompNo;*/
      this.addinfo = item.PlantBasedAdd;
      this.plantbased = item.PlantBasedYes;
      this.reason = item. Reason;
      this.height= item. SizeH;
      this.length = item. SizeL;
      this.width= item. SizeW;
      this.vrs = item. VRSProcess;
      this.weightofcomp= item. WeightofComp;




    }
  }
  COMPdata(compdatas: any) {
    for (let item of compdatas) {

      //item.AddedBy
      //item.AddedDt
      this.bommultiplier = item.BOMMultiplier;
      this.cumleadtime = item.CMLeadTime;
      this.status = item.CStatus;
     /* item.CSupplierCode*/
      this.categorytype = item.CategoryType;
      this.color = item.Color;
      /*item.ComponentItemNo*/
      this.componentname = item.ComponentName;
      this.date = item.Date;
      this.fillablecomponent = item.FillableComponent;
      this.finish =  item.Finish;
     /* this. = item.ItemNO;*/
      this.lastpocost =  item.LastPOCost;
     /* this. =  item.LastPODt;*/
      this.moq = item.MOQ;
      this.componentdescription= item.MiscellaneousInfo;
      this.postprocess =  item.PostprocessLeadTime;
      this.preprocessing =  item.PreprocessLeadTime;
      this.processing = item.ProcessLeadTime;
      this.reorder =  item.Reorder;
    /*  this. =  item.Size;*/
      this.specification = item.Specification;
      this.bulkcontainer = item.StorageContainer;
      this.stdprice= item.UnitCost;
      //this. =  item.UpdatedBy;
      //this. =  item.UpdatedDt;
    /*  this. = item.componentimage;*/
      this.compimage =  item.imagepath;
      this.suPliername =  item.name;




















    }
  }

  compdataload4() {
    var citemno = this.componentitemnumber;
    let params1 = new HttpParams().set('ComponentItemNo', citemno);
    return this.http.get("https://formulaproductization2.azurewebsites.net/componentAuditGrid", { params: params1 })
  }

  compdataload3() {
    var citemno = this.componentitemnumber;
    let params1 = new HttpParams().set('ComponentItemNo', citemno);
    return this.http.get("https://formulaproductization2.azurewebsites.net/bindbom", { params: params1 })
  }

  compdataload2() {
    var citemno = this.componentitemnumber;
    let params1 = new HttpParams().set('ComponentItemNo', citemno);
    return this.http.get("https://formulaproductization2.azurewebsites.net/componenttab2", { params: params1 })
  }
  compdataload() {
    var citemno = this.componentitemnumber;
    let params1 = new HttpParams().set('ComponentItemNo', citemno);
    return this.http.get("https://formulaproductization2.azurewebsites.net/componenttab1", { params: params1 })
  }

  addsupplierformula() {
    const dialogRef = this.dialog.open(AddSupplierComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    });
  }

  searchhsupplier(): void {
    const dialogRef = this.dialog.open(SearchSupplierComponent, {
      width: '60%', height: '70%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {
        this.suPliername = result[1];
        this.suppliercode = result[2];
      }

    });
  }
 
  componentcategory_load() {
    return this.http.get("https://formulaproductizationwebservice.azurewebsites.net/loadComponentcat")
  }

  radioChangefillablecomponent(event) {
    this.fillablecomponent = event.value;

  }
  radioChangebiodegradable(event) {
    this.biodegradable = event.value;

  }
  radioChangebioplastic(event) {
    this.bioplastic = event.value;

  }
  bulkcontainerChange(event) {
    this.bulkcontainer = event.target.checked.toString();
    if (this.bulkcontainer == "true") {
      this.bulkcontainer = "Y"
      this.bulkcontaine = true
      this.fillablecomponent = 'Yes';    
    }
    else {
      this.bulkcontainer = "N";
      this.bulkcontaine = false
      this.fillablecomponent = 'No';

    }
  }
  mcplasticChange(event) {
    this.mcplastic = event.target.checked.toString();
    if (this.mcplastic == "true") {
      this.mcplastic = "1"
      this.mcplasti = true
    }
    else {
      this.mcplastic = "0";
      this.mcplasti = false
    }
  }
  mcaluminiumChange(event) {
    this.mcaluminium = event.target.checked.toString();
    if (this.mcaluminium == "true") {
      this.mcaluminium = "1"
      this.mcaluminiu = true
    }
    else {
      this.mcaluminium = "0";
      this.mcaluminiu = false
    }
  }
  mcrecycledplasticChange(event) {
    this.mcrecycledplastic = event.target.checked.toString();
    if (this.mcrecycledplastic == "true") {
      this.mcrecycledplastic = "1"
      this.mcrecycledplasti = true
    }
    else {
      this.mcrecycledplastic = "0";
      this.mcrecycledplasti = false
    }
  }
  mcpaperChange(event) {
    this.mcpaper = event.target.checked.toString();
    if (this.mcpaper == "true") {
      this.mcpaper = "1"
      this.mcpape = true
    }
    else {
      this.mcpaper = "0";
      this.mcpape = false
    }
  }
  mcotherChange(event) {
    this.mcother = event.target.checked.toString();
    if (this.mcother == "true") {
      this.mcother = "1"
      this.mcothe = true
    }
    else {
      this.mcother = "0";
      this.mcothe = false
    }
  }













  pmppChange(event) {
    this.pmpp = event.target.checked.toString();
    if (this.pmpp == "true") {
      this.pmpp = "1"
      this.pmp = true
    }
    else {
      this.pmpp = "0";
      this.pmp = false
    }
  }

  pmpetChange(event) {
    this.pmpet = event.target.checked.toString();
    if (this.pmpet == "true") {
      this.pmpet = "1"
      this.pmpe = true
    }
    else {
      this.pmpet = "false";
      this.pmpe = false
    }
  }

  pmlldpeChange(event) {
    this.pmlldpe = event.target.checked.toString();
    if (this.pmlldpe == "true") {
      this.pmlldpe = "0"
      this.pmlldp = true
    }
    else {
      this.pmlldpe = "false";
      this.pmlldp = false
    }
  }
  pmhdpeChange(event) {
    this.pmhdpe = event.target.checked.toString();
    if (this.pmhdpe == "true") {
      this.pmhdpe = "1"
      this.pmhdp = true
    }
    else {
      this.pmhdpe = "0";
      this.pmhdp = false
    }
  }
  pmpaperChange(event) {
    this.pmpaper = event.target.checked.toString();
    if (this.pmpaper == "true") {
      this.pmpaper = "1"
      this.pmpape = true
    }
    else {
      this.pmpaper = "0";
      this.pmpape = false
    }
  }
  pmglassChange(event) {
    this.pmglass = event.target.checked.toString();
    if (this.pmglass == "true") {
      this.pmglass = "1"
      this.pmglas = true
    }
    else {
      this.pmglass = "0";
      this.pmglas = false
    }
  }
  pmsteelChange(event) {
    this.pmsteel = event.target.checked.toString();
    if (this.pmsteel == "true") {
      this.pmsteel = "1"
      this.pmstee = true
    }
    else {
      this.pmsteel = "0";
      this.pmstee = false
    }
  }
  pmaluminiumChange(event) {
    this.pmaluminium = event.target.checked.toString();
    if (this.pmaluminium == "true") {
      this.pmaluminium = "1"
      this.pmaluminiu = true
    }
    else {
      this.pmaluminium = "0";
      this.pmaluminiu = false
    }
  }





  plantbasedChange(event) {
    this.plantbased = event.target.checked.toString();
    if (this.plantbased == "true") {
      this.plantbased = "Yes"
      this.plantbase = true
    }
    else {
      this.plantbased = "No";
      this.plantbase = false
    }
  }

  pcorrugatedChange(event) {
    this.pcorrugated = event.target.checked.toString();
    if (this.pcorrugated == "true") {
      this.pcorrugated = "1"
      this.pcorrugate = true
    }
    else {
      this.pcorrugated = "0";
      this.pcorrugate = false
    }
  }

  potherChange(event) {
    this.pother = event.target.checked.toString();
    if (this.pother == "true") {
     this.pother = "1"
    //  this.pothe = true
    }
   else {
      this.pother = "0";
    //  this.pothe = false
    }
  }

  pboxboardChange(event) {
    this.pboxboard = event.target.checked.toString();
    if (this.pboxboard == "true") {
      this.pboxboard = "1"
      this.pboxboar = true
    }
    else {
      this.pboxboard = "0";
      this.pboxboar = false
    }
  }




  Updatecomponent() {


    this.dataformList[0] = ([{

      ComponentItemNo: this.componentitemnumber,
      ComponentName: this.componentname,
      Specification: this.specification,
      CategoryType: this.categorytype,
      ItemNO: this.componentitemnumber,
      Date: this.date,
      Size: this.size,
      Finish: this.finish,
      Color: this.color,
      CSupplierCode: "CSC: 10",
      MiscellaneousInfo: this.componentdescription,
      UpdatedBy: 'admin',
      /*UpdatedDt: '',*/
      /*   componentimage: ,*/
      imagepath: this.compimage,
      FillableComponent: this.fillablecomponent,
      StorageContainer: this.bulkcontainer,
      BOMMultiplier: this.bommultiplier,
      MOQ: this.moq,
      Reorder: this.reorder,
      ProcessLeadTime: this.processing,
      PreprocessLeadTime: this.preprocessing,
      PostprocessLeadTime: this.postprocess,
      CMLeadTime: this.cumleadtime,
      LastPOCost: this.lastpocost,
      LastPODt: '',
      UnitCost:"1",
      CStatus: this.status,
      username: 'admin'



    }]);





    this.dataformList2[0] = ([{



      ComponentItemNo: this.componentitemnumber,
      ComponentName: this.componentname,
      Biodegrade: this.biodegradable,
      Biodegradeperc: this.percentage,
      Bioplastic: this.bioplastic,
      PlantBasedYes: this.plantbased,
      MCPlastic: this.mcplastic,
      MCAluminium: this.mcaluminium,
      MCRecycledPlastic: this.mcrecycledplastic,
      MCPaper: this.mcpaper,
      MCOther: this.mcother,
      MCOtherDetail: this.othedetail,
      PMPP: this.pmpp,
      PMPET: this.pmpet,
      PMLLDPE: this.pmlldpe,
      PMHDPE: this.pmhdpe,
      PMPaper: this.pmpaper,
      PMGlass: this.pmglass,
      PMsteel: this.pmsteel,
      PMAluminium: this.pmaluminium,
      Corrugated: this.pcorrugated,
      Boxboard: this.pboxboard,
      OtherPaper: this.pother,
      OtherPaperDetail: this.otherpaper,
      SizeH: this.height,
      SizeL: this.length,
      SizeW: this.width,
      WeightofComp: this.weightofcomp,
      VRSProcess: this.vrs,
      Cartons: this.cartons,
      Reason: this.reason,
      PlantBasedAdd: this.addinfo,
      PackagingCompNo: '',
      AtatchQuestDoc1: this.attachresponsible,
      AdditionalDoc: this.additionaldoc,





    }]);
    this.compupdate().subscribe((componentupdate) => {
      console.warn("componentupdate", componentupdate)
      this.component_update_data = componentupdate



      if (this.component_update_data == "Component Details updated Successfully.") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'Component Details updated Successfully' } });
        
      }
      

    })



  }


  compupdate() {


    var cat = this.categorytype
    var datalistform: any = JSON.stringify(this.dataformList);
    var datalistform2: any = JSON.stringify(this.dataformList2);

    let params1 = new HttpParams().set('categorytype', cat).set('compjson', datalistform).set('comp2json', datalistform2);
    return this.http.get("https://formulaproductization1.azurewebsites.net/update_comp1", { params: params1, responseType: 'text' })

  }
















//   var productdate1 = result[4];
//this.productdate = formatDate(new Date(productdate1), 'yyyy-MM-dd', 'en-US');

  dateformat(event) {
    var newdate = this.date
    this.Data = formatDate(new Date(newdate), 'dd-MM-yyyy', 'en-US')


  }


  deletecomp() {
    this.deletecomponent().subscribe((deletecomponent) => {
      console.warn("deletecomponent", deletecomponent)
      this.component_delete_data = deletecomponent



      if (this.component_delete_data == "Component is deleted successfully") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'Component is deleted successfully' } });

        this.clear();
      }
      else if (this.component_delete_data == "This component is used in Assembly Ticket. Cannot delete this one") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'This component is used in Assembly Ticket. Cannot delete this one' } });
      }
      else if (this.component_delete_data == "This component is used in BOM. Cannot delete this one") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'This component is used in BOM. Cannot delete this one' } });
      }
      else if (this.component_delete_data == "This component is used in Shortage report. Cannot delete this one") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'This component is used in Shortage report. Cannot delete this one' } });
      }
      else if (this.component_delete_data == "This component is assigned a lot numbefvr. Cannot delete this one") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'This component is assigned a lot numbefvr. Cannot delete this one' } });
      }
      else if (this.component_delete_data == "This component is used in manual deduction entry. Cannot delete this one") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'This component is used in manual deduction entry. Cannot delete this one' } });
      }
      else if (this.component_delete_data == "This component is used in supplier invoice entry. Cannot delete this one") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'This component is used in supplier invoice entry. Cannot delete this one' } });
      }
      else if (this.component_delete_data == "This component is used in packing slip entry. Cannot delete this one") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'This component is used in packing slip entry. Cannot delete this one' } });
      }
      else if (this.component_delete_data == "This component is used in PO details entry. Cannot delete this one") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'This component is used in PO details entry. Cannot delete this one' } });
      }
      else if (this.component_delete_data == "This component is used in component ticket entry. Cannot delete this one") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'This component is used in component ticket entry. Cannot delete this one' } });
      }
      else if (this.component_delete_data == "This component is used in customer PO entry. Cannot delete this one") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'This component is used in customer PO entry. Cannot delete this one' } });
      }
      else if (this.component_delete_data == "This component is used in product package entry. Cannot delete this one") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'This component is used in product package entry. Cannot delete this one' } });
      }
      else if (this.component_delete_data == "This component is used in product filling entry. Cannot delete this one") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'This component is used in product filling entry. Cannot delete this one' } });
      }
      else if (this.component_delete_data == "This component is used in sales invoice entry. Cannot delete this one") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'This component is used in sales invoice entry. Cannot delete this one' } });
      }
      else if (this.component_delete_data == "This component is used in shipping details entry. Cannot delete this one") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'This component is used in shipping details entry. Cannot delete this one' } });
      }
      else if (this.component_delete_data == "This component is used in inventory reconciliation entry. Cannot delete this one") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'This component is used in inventory reconciliation entry. Cannot delete this one' } });
      }
      else if (this.component_delete_data == "This component is used in inventory entry. Cannot delete this one") {
        this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'This component is used in inventory entry. Cannot delete this one' } });
      }
      

    })
  }

  deletecomponent() {

    var compitem: string = this.componentitemnumber
   

    let params1 = new HttpParams().set('ComponentItemno', compitem);
    return this.http.get("https://formulaproductization1.azurewebsites.net/Delete_component", { params: params1, responseType: 'text' })

  }




  savecomponent() {
    if (this.componentitemnumber == "" || this.componentitemnumber == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'Enter ComponentItem NO.' } });
    }
    else if (this.componentname == "" || this.componentname == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'Enter Component Name' } });
    }
    else if (this.suPliername == "" || this.suPliername == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'Select Supplier ' } });
    }
    else if (this.categorytype == "" || this.categorytype == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'Select categorytype' } });
    }
    else {
      this.dataformList[0] = ([{

        ComponentItemNo: this.componentitemnumber,
        ComponentName: this.componentname,
        Specification: this.specification,
        CategoryType: this.categorytype,
        ItemNO: this.componentitemnumber,
        /* Date: formatDate(new Date(this.date), 'dd-MM-yyyy', 'en-US'),*/
        Size: '8',
        Finish: this.finish,
        Color: this.color,
        CSupplierCode: this.suppliercode,
        MiscellaneousInfo: this.componentdescription,
        AddedBy: 'admin',
        /*AddedDt: '',*/
        /*   componentimage: ,*/
        imagepath: this.compimage,
        FillableComponent: this.fillablecomponent,
        StorageContainer: this.bulkcontainer,
        BOMMultiplier: this.bommultiplier,
        MOQ: this.moq,
        Reorder: this.reorder,
        ProcessLeadTime: this.processing,
        PreprocessLeadTime: this.preprocessing,
        PostprocessLeadTime: this.postprocess,
        CMLeadTime: this.cumleadtime,
        LastPOCost: this.lastpocost,
        LastPODt: '',
        CStatus: this.status,
        username: 'admin',
        UnitCost: this.stdprice


      }]);





      this.dataformList2[0] = ([{



        ComponentItemNo: this.componentitemnumber,
        ComponentName: this.componentname,
        Biodegrade: this.biodegradable,
        Biodegradeperc: this.percentage,
        Bioplastic: this.bioplastic,
        PlantBasedYes: this.plantbased,
        MCPlastic: this.mcplastic,
        MCAluminium: this.mcaluminium,
        MCRecycledPlastic: this.mcrecycledplastic,
        MCPaper: this.mcpaper,
        MCOther: this.mcother,
        MCOtherDetail: this.othedetail,
        PMPP: this.pmpp,
        PMPET: this.pmpet,
        PMLLDPE: this.pmlldpe,
        PMHDPE: this.pmhdpe,
        PMPaper: this.pmpaper,
        PMGlass: this.pmglass,
        PMsteel: this.pmsteel,
        PMAluminium: this.pmaluminium,
        Corrugated: this.pcorrugated,
        Boxboard: this.pboxboard,
        OtherPaper: this.pother,
        OtherPaperDetail: this.otherpaper,
        SizeH: this.height,
        SizeL: this.length,
        SizeW: this.width,
        WeightofComp: this.weightofcomp,
        VRSProcess: this.vrs,
        Cartons: this.cartons,
        Reason: this.reason,
        PlantBasedAdd: this.addinfo,
        PackagingCompNo: '',
        AtatchQuestDoc1: this.attachresponsible,
        AdditionalDoc: this.additionaldoc,





      }]);

      this.compsave().subscribe((componentsave) => {
        console.warn("componentsave", componentsave)
        this.component_save_data = componentsave



        if (this.component_save_data == "Component details saved successfully.") {
          this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'Component details saved successfully.' } });
        }
        else if (this.component_save_data == "Component item # already exists. Choose another one.") {
          this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'Component item # already exists. Choose another one.' } });
        }

      })
    }

  }

  compsave() {


    var cat:string = this.categorytype
    var datalistform: any = JSON.stringify(this.dataformList);
    var datalistform2: any = JSON.stringify(this.dataformList2);

    let params1 = new HttpParams().set('categorytype', cat).set('compjson', datalistform).set('comp2json', datalistform2);
    return this.http.get("https://formulaproductization1.azurewebsites.net/Save_comp1", { params: params1, responseType: 'text' })

  }


  check_en(v1: any) {
    if (v1 == true) {
      document.getElementById('text1').setAttribute("disabled", "false");
    } else {
      document.getElementById('text1').removeAttribute("disabled")
    }
  }

  check_en1(v2: any) {
    if (v2 == true) {
      document.getElementById('text1').setAttribute("disabled", "false");
    } else {
      document.getElementById('text1').removeAttribute("disabled")
    }
  }

  clear() {
    this.componentitemnumber = ""
    this.componentname = ""
    this.specification = ""
    this.categorytype = ""
    this.componentitemnumber = ""
    this.date=""
    this.size =""
    this.finish = ""
    this.color = ""
    this.suppliercode = ""
    this.componentdescription = ""

    this.compimage = ""
    this.fillablecomponent = "No"
    this.bulkcontainer = "N"
    this.bommultiplier = ""
    this.moq = ""
    this.reorder = ""
    this.processing = ""
    this.preprocessing = ""
    this.postprocess = ""
    this.cumleadtime = ""
    this.lastpocost = ""
   
      this.status = ""

    this.stdprice = ""



    this.componentitemnumber = ""
    this.componentname = ""
    this.biodegradable = "0"
    this.percentage = ""

    this.suPliername = ""
    this.noofunits=""


    this.bioplastic = "0"
    this.plantbased = "No"
    this.mcplastic = "0"
    this.mcaluminium = "0"
    this.mcrecycledplastic = "0"
    this.mcpaper = "0"
    this.mcother = "0"
    this.othedetail = ""
    this.pmpp = "0"
    this.pmpet = "0"
    this.pmlldpe = "0"
    this.pmhdpe = "0"
    this.pmpaper = "0"
    this.pmglass = "0"
    this.pmsteel = "0"
    this.pmaluminium = "0"
    this.pcorrugated = "0"
    this.pboxboard = "0"
    this.pother = "0"
    this.otherpaper = ""
    this.height = ""
    this.length = ""
    this.width = ""
    this.weightofcomp = ""
    this.vrs = ""
    this.cartons = "0"
    this.reason = ""
    this.addinfo = ""
 
    this.attachresponsible = ""
    this.additionaldoc = ""
  }


  handleFileInput1(files: FileList) {
    var filebrowse = files.item.length;
    this.attachresponsible = files.item(0).name;



  }


  handleFileInput2(files: FileList) {
    var filebrowse = files.item.length;
    this.additionaldoc = files.item(0).name;



  }
  handleFileInput6(files: FileList) {
    var filebrowse = files.item.length;
    this.compimage = files.item(0).name;



  }
  msg() {
    this.dialog.open(MessageBoxComponent, { width: '40%', height: '15%', data: { displaydata: 'Please double check the no of units filled and BOM Multiplier is accurate' } });

  }

  ngOnInit() {
    this.componentcategory_load().subscribe((componentcategory_load) => {
      console.warn("componentcategory_load", componentcategory_load)
      this.loadcomponentcategory = componentcategory_load
    
    })
    this.bommultiplier = "1";
    this.noofunits = "1";
    this.biodegradable = "0";
    
  }

}
//export class data1 {

//  ComponentItemNo :string;
//  ComponentName: string;
//  Specification: string;
//  CategoryType: string;
//  ItemNO: string;
//  Date: Date;
//  Size: string;
//  Finish: string;
//  Color: string;
//  CSupplierCode: string;
//  MiscellaneousInfo: string;
//  AddedBy: string;
//              /*AddedDt: '',*/
//                /*   componentimage: ,*/
//  imagepath: string;
//  FillableComponent: string;
//  StorageContainer: string;
//  BOMMultiplier: string;
//  MOQ: string;
//  Reorder: string;
//  ProcessLeadTime: string;
//  PreprocessLeadTime: string;
//  PostprocessLeadTime: string;
//  CMLeadTime: string;
//  LastPOCost: string;
//  LastPODt: string;
//  CStatus: string;
//  username: string;
//  UnitCost: string;
//}
export class data2 {
  ComponentItemNo: string;
  ComponentName: string;
  Biodegrade: string;
  Biodegradeperc: string;
  Bioplastic: string;
  PlantBasedYes: string;
  MCPlastic: string;
  MCAluminium: string;
  MCRecycledPlastic: string;
  MCPaper: string;
  MCOther: string;
  MCOtherDetail: string;
  PMPP: string;
  PMPET: string;
  PMLLDPE: string;
  PMHDPE: string;
  PMPaper: string;
  PMGlass: string;
  PMsteel: string;
  PMAluminium: string;
  Corrugated: string;
  Boxboard: string;
  OtherPaper: string;
  OtherPaperDetail: string;
  SizeH: string;
  SizeL: string;
  SizeW: string;
  WeightofComp: string;
  VRSProcess: string;
  Cartons: string;
  Reason: string;
  PlantBasedAdd: string;
  PackagingCompNo: string;
  AtatchQuestDoc1: string;
  AdditionalDoc: string;




}
