import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CategoryMaintenanceComponent } from 'src/app/raw-material/category-maintenance/category-maintenance.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SerachCategoryComponent } from './serach-category/serach-category.component';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import {  MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-sub-category-maintenance',
  templateUrl: './sub-category-maintenance.component.html',
  styleUrls: ['./sub-category-maintenance.component.css']
})
export class SubCategoryMaintenanceComponent implements OnInit {
  dataraw_sup: any;
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
  constructor(public dialog: MatDialog, private http: HttpClient, private Datashare: DataShareServiceService) { }
  public cleandata() {

    

    //    GroupName1: this.clickeddata1


    this.Datashare.clean();


  }
  Loadsubcategory() {


    return this.http.get("https://smartformulatorrawmaterialwebservices.azurewebsites.net/subcatogory_load");
  }
  categorysearch() {
    return this.http.get("https://smartformulatorrawmaterialwebservices.azurewebsites.net/categorysearch");
  }
  selectitem(raw_supp) {
    this.selectedrow = raw_supp;
    this.issubcategorysave = true;
    this.issubcategoryupdate= false;
    this.categorynam = this.catenam = raw_supp.CategoryName;
    this.categoryidval = this.categoid = raw_supp.CategoryId;
    this.subcategorynam = this.subcatenam = raw_supp.SubCategoryName;
    this.descript = this.descr = raw_supp.Description;
    this.subcateid = raw_supp.SubCategoryId;

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

    return this.http.get("https://rawmaterialsupliermodulesample.azurewebsites.net/delete_insert_new_subcatogory", { params: params1, responseType: "text"  });

  }
  savesubcategory(subcategoryname: string, description: string,  categoryid: string) {
    var subcategorynameval: string = subcategoryname;
   
    var categoryidval: string = categoryid;
    var descriptionval: string = description
    let params1 = new HttpParams().set('SubCategoryName', subcategorynameval).
      set('Description', descriptionval).
      set('operation', "Insert").
      set('subcategoryid', "0").
      set('categoryid', categoryidval );

    return this.http.get("https://rawmaterialsupliermodulesample.azurewebsites.net/delete_insert_new_subcatogory", { params: params1, responseType:"text" });

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

    return this.http.get("https://rawmaterialsupliermodulesample.azurewebsites.net/delete_insert_new_subcatogory", { params: params1, responseType: "text"  });

  }
  updatedata() {
    if (this.categorynam == "") {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Enter Category Name" } });
    }
    else if (this.descript == "") {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Enter Description" } });
    }
    else if (this.subcategorynam == "") {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Enter Subcategory Name" } });
    }
    else {
      this.Updatesubcategory(this.subcategorynam, this.descript, this.subcateid, this.categoryidval).subscribe((resultraw_sup_update) => {
        console.warn("resultraw_sup_update", resultraw_sup_update)
        this.dataraw_sup_update = resultraw_sup_update
        if (this.dataraw_sup_update == "Updated") {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "SubCategory: " + this.subcategorynam + " Updated Successfully" } });
          this.Loadsubcategory().subscribe((resultraw_sup) => {
            console.warn("sub_category_load", resultraw_sup)
            this.dataraw_sup = resultraw_sup
          })
        }
        else {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Failed to Update" } });
        }
      })
    }
  }
  savedata() {
    if (this.categorynam == "") {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Enter Category Name" } });
    }
    else if (this.descript == "") {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Enter Description" } });
    }
    else if (this.subcategorynam == "") {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Enter Subcategory Name" } });
    }
    else {

      this.savesubcategory(this.subcategorynam, this.descript, this.categoryidval).subscribe((resultraw_sup_save) => {
        console.warn("resultraw_sup_save", resultraw_sup_save)
        this.dataraw_sup_save = resultraw_sup_save
        if (this.dataraw_sup_save== "Inserted") {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "SubCategory: " + this.subcategorynam+ " Saved Successfully" } });
          this.Loadsubcategory().subscribe((resultraw_sup) => {
            console.warn("sub_category_load", resultraw_sup)
            this.dataraw_sup = resultraw_sup
          })
        }
        else {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Failed to Save" } });
        }
      })
    }
  }
  deletedata() {
    if (this.categorynam == "") {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Enter Category Name" } });
    }
    else if (this.descript == "") {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Enter Description" } });
    }
    else if (this.subcategorynam == "") {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Enter Subcategory Name" } });
    }
    else {
      this.deletesubcategory(this.subcategorynam, this.descript, this.subcateid, this.categoryidval).subscribe((resultraw_sup_delete) => {
        console.warn("resultraw_sup_save", resultraw_sup_delete)
        this.dataraw_sup_delete = resultraw_sup_delete
        if (this.dataraw_sup_delete== "Deleted") {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "SubCategory: " + this.subcategorynam + " Deleted Successfully" } });
          this.Loadsubcategory().subscribe((resultraw_sup) => {
            console.warn("sub_category_load", resultraw_sup)
            this.dataraw_sup = resultraw_sup
          })
        }
        else {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Failed to Delete" } });
        }
      })
    }
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
  Cleardata() {
    this.categorynam = "";
    this.categoryidval = "";
    this.subcategorynam = "";
    this.descript = "";
    this.issubcategorysave = false;
    this.issubcategoryupdate = true;
  }
  ngOnInit() {
    this.Loadsubcategory().subscribe((resultraw_sup) => {
      console.warn("sub_category_load", resultraw_sup)
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


