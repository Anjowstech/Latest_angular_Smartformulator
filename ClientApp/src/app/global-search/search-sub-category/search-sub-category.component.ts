import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CategoryMaintenanceComponent } from 'src/app/raw-material/category-maintenance/category-maintenance.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-search-sub-category',
  templateUrl: './search-sub-category.component.html',
  styleUrls: ['./search-sub-category.component.css']
})
export class SearchSubCategoryComponent implements OnInit {
  dataraw_sup: any;
  issubcategorydisabled: boolean = false;
  filterMetadata = { count: 0 };
  selectedrow: string = '';
  subcategoryid: any;
  dataraw_sup_update: any;
  dataraw_sup_save: any;
  dataraw_sup_delete: any;
  categorysearchval: any;
  selectedcate: string = '';
  dataval: any;
  catenam: string = '';
  subcatenam: string = '';
  descr: string = '';
  categorynam: string = '';
  categoryid: string = '';
  subcategorynam: string = '';
  issubcategorysave: boolean = false;
  issubcategoryupdate: boolean = true;
  descript: string = '';
  categoryidm: string = '';
  categoid: string = '';
  categoryidval: string = '';
  text: string = 'save';
    subcateid: string = "";
    searchitems: any = [];

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<SearchSubCategoryComponent>, private http: HttpClient, private Datashare: DataShareServiceService) { }
 
  Loadsubcategory() {


    return this.http.get("https://smartformulatorrawmaterialwebservices.azurewebsites.net/subcatogory_load");
  }
  
  selectitem(raw_supp) {
  
    this.categorynam = this.catenam = raw_supp.CategoryName;
    this.categoryidval = this.categoid = raw_supp.CategoryId;
    this.subcategorynam = this.subcatenam = raw_supp.SubCategoryName;
    this.descript = this.descr = raw_supp.Description;
    this.subcateid = raw_supp.SubCategoryId;
   
    // declare variable in component.
    this.searchitems = [this.categorynam, this.categoryidval, this.subcategorynam, this.descript, this.subcateid]
  }
  close() {

    this.dialogRef.close(this.searchitems);

  }
  ngOnInit() {
    this.Loadsubcategory().subscribe((resultraw_sup) => {
      console.warn("sub_category_load", resultraw_sup)
      this.dataraw_sup = resultraw_sup
    })

    
  }
}
