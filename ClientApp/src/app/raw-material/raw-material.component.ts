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
import { DataShareServiceService } from 'src/app/data-share-service.service';

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
  inciname:string;
  itemli: string;
  supp_name: string;
  tradn:string;
  val2: any;
  incicode: string;
  datarawpropertyload: any;
  constructor(public dialog: MatDialog, private http: HttpClient, private Datashare: DataShareServiceService) { }
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

    const dialogRef = this.dialog.open(RawSearchSupplierComponent, {
      width: '80%', height: '90%', disableClose: true
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
      this.incicode = result[4]
      this.loadrawproperty(this.incicode);



    });
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
      width: '80%', height: '65%', disableClose: true
    });
  }
  OpenIngredientSearch(): void {
    const dialogRef = this.dialog.open(IngredientSearchComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  OpenAddCASDetails(): void {
    const dialogRef = this.dialog.open(AddCASDetailsComponent, {
      width: '50%', height: '35%', disableClose: true
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
    return this.http.get("http://localhost/raw-sup-webservice2/loadrawcategory")
    }
  rawpropertyload(rawpropertyload: string) {
    var rawprop: string = rawpropertyload;
     
    let params1 = new HttpParams().set('itemcode', rawprop);
       
    return this.http.get("http://localhost/raw-sup-webservice2/loadrawproperty2", { params: params1 });

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
  
  }

}
