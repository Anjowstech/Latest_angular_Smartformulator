import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CategoryMaintenanceComponent } from 'src/app/raw-material/category-maintenance/category-maintenance.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SerachCategoryComponent } from './serach-category/serach-category.component';
import { DataShareServiceService } from 'src/app/data-share-service.service';
@Component({
  selector: 'app-sub-category-maintenance',
  templateUrl: './sub-category-maintenance.component.html',
  styleUrls: ['./sub-category-maintenance.component.css']
})
export class SubCategoryMaintenanceComponent implements OnInit {
  dataraw_sup: any;
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
  descript: string = '';
  categoryidm: string = '';
  categoid: string = '';
  categoryidval: string = '';
  text: string = 'save';
  constructor(public dialog: MatDialog, private http: HttpClient, private Datashare: DataShareServiceService) { }
  public cleandata() {

    

    //    GroupName1: this.clickeddata1


    this.Datashare.clean();


  }
  Loadsubcategory() {


    return this.http.get("http://localhost/raw_sup_webservice/subcatogory_load");
  }
  categorysearch() {
    return this.http.get("http://localhost/raw_sup_webservice/categorysearch");
  }
  selectitem(raw_supp) {
    this.selectedrow = raw_supp;

    this.categorynam = this.catenam = raw_supp.CategoryName;
    this.categoryidval = this.categoid = raw_supp.CategoryId;
    this.subcategorynam = this.subcatenam = raw_supp.SubCategoryName;
    this.descript = this.descr = raw_supp.Description;

    // declare variable in component.
  }
  selectcate(catesearch: string) {
    this.selectedcate = catesearch;
  }
  
  OpensearchCategory(): void {
    const dialogRef = this.dialog.open(SerachCategoryComponent, {
      width: '60%', height: '70%', disableClose: true
    });
  }
  Updatesubcategory(subcategoryname: string, description: string, subcategoryid: string, categoryid: string) {
    var subcategorynameval: string = subcategoryname;
    var subcategoryidval: string = subcategoryid;
    var categoryidval: string = categoryid;
    var descriptionval: string = description
    let params1 = new HttpParams().set('SubCategoryName', subcategorynameval).
      set('Description', descriptionval).
      set('operation', "Update").
      set('subcategoryid', subcategoryidval).
      set('categoryid', categoryidval);

    return this.http.get("http://localhost/raw_sup_webservice/delete_insert_new_subcatogory", { params: params1 });

  }
  savesubcategory(subcategoryname: string, description: string, subcategoryid: string, categoryid: string) {
    var subcategorynameval: string = subcategoryname;
    var subcategoryidval: string = subcategoryid;
    var categoryidval: string = categoryid;
    var descriptionval: string = description
    let params1 = new HttpParams().set('SubCategoryName', subcategorynameval).
      set('Description', descriptionval).
      set('operation', "Insert").
      set('subcategoryid', "0").
      set('categoryid', categoryidval );

    return this.http.get("http://localhost/raw_sup_webservice/delete_insert_new_subcatogory", { params: params1 });

  }
  addRow(row: { name: string; items: string; items1: string; items2: string; items3: string;  }): void {
    this.dataraw_sup.push(row);
  }
  deletesubcategory(subcategoryname: string, description: string, subcategoryid: string, categoryid: string) {
    var subcategorynameval: string = subcategoryname;
    var subcategoryidval: string = subcategoryid;
    var categoryidval: string = categoryid;
    var descriptionval: string = description
    let params1 = new HttpParams().set('SubCategoryName', subcategorynameval).
      set('Description', descriptionval).
      set('operation', "delete").
      set('subcategoryid', subcategoryidval).
      set('categoryid', categoryidval);

    return this.http.get("http://localhost/raw_sup_webservice/delete_insert_new_subcatogory", { params: params1 });

  }
  updatedata(subcategoryname, description, subcategoryid, categoryid) {
    this.Updatesubcategory(subcategoryname, description, subcategoryid, categoryid).subscribe((resultraw_sup_update) => {
      console.warn("resultraw_sup_update", resultraw_sup_update)
      this.dataraw_sup_update = resultraw_sup_update
    })
  }
  savedata(subcategoryname, description, subcategoryid, categoryid) {
    this.savesubcategory(subcategoryname, description, subcategoryid, categoryid).subscribe((resultraw_sup_save) => {
      console.warn("resultraw_sup_save", resultraw_sup_save)
      this.dataraw_sup_save = resultraw_sup_save
    })
  }
  deletedata(subcategoryname, description, subcategoryid, categoryid) {
    this.deletesubcategory(subcategoryname, description, subcategoryid, categoryid).subscribe((resultraw_sup_delete) => {
      console.warn("resultraw_sup_save", resultraw_sup_delete)
      this.dataraw_sup_delete = resultraw_sup_delete
    })
  }
  changetext(): void {

    if (this.text === 'save') {
      this.text = 'update';
    }


  }
  changetext1(): void {


    this.text = 'save';
  }




  
  OpenCategory(): void {
    const dialogRef = this.dialog.open(CategoryMaintenanceComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  ngOnInit() {
    this.Loadsubcategory().subscribe((resultraw_sup) => {
      console.warn("resultraw_sup", resultraw_sup)
      this.dataraw_sup = resultraw_sup
    })

    this.categorysearch().subscribe((categorysearch) => {
      console.warn("categorysearch", categorysearch)
      this.categorysearchval = categorysearch
    })
    this.categorynam = this.Datashare.getcate();
    this.categoryidval = this.Datashare.getcateid();
  }
}


