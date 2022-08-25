import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-category-maintenance',
  templateUrl: './category-maintenance.component.html',
  styleUrls: ['./category-maintenance.component.css']
})
export class CategoryMaintenanceComponent implements OnInit {
  dataraw_sup_cate: any;
  filterMetadata = { count: 0 };
  firsttimeloadcate: string = "Cosmetics";
  classifi: string ='';
  categoname: string = '';
  descript: string = '';
  fortyp: string = '';
  classificat: string = '';
  CategoryNam: string = '';
  Descriptio: string = '';
  fotyp: string = '';
  classify: string = 'Cosmetics';
  classifiedvalue: string = 'Cosmetics';
  Mainclassidval: string = '';
  categoid: string = '';
  cateid: string = '';
  dataraw_cate_save: any;
  iscategorysave: boolean = false;
  iscategoryupdate: boolean = true;
  dataraw_cate_update: any;
  dataraw_cate_delete: any;
  radiovalue: string = 'both'; 
  options = ['Cosmetics', 'Nutrition','Paints','Food']
  constructor(private http: HttpClient, public dialog: MatDialog) { }
  Loadcategory(classificationtypeval: string) {
    var classifi_val: string = classificationtypeval;

    let params1 = new HttpParams().set('Classificationtype', classifi_val);


    return this.http.get("https://smartformulatorrawmaterialwebservices.azurewebsites.net/catogory_load", { params: params1 });

  }
  onSelectedChange(event) {
    this.classify = event.target.value;
    this.classifiedvalue = this.classify;
    this.Loadcategory(this.classifiedvalue).subscribe((resultraw_sup_cate) => {
      console.warn("resultraw_sup_cate", resultraw_sup_cate)
      this.dataraw_sup_cate = resultraw_sup_cate
    })
  }
  savecategory(mainclassify: string, categoryname: string, description: string ) {
    if (mainclassify == "Cosmetics") {
      this.Mainclassidval = "1";
    } else if (mainclassify == "Nutrition")
      {
      this.Mainclassidval = "2";
    }
    var mainclassifyval = this.Mainclassidval;
    var categorynameval: string = categoryname;
  
    
    var descriptionval: string = description
    let params1 = new HttpParams().set('CategoryId', "0").
      set('CategoryName', categorynameval).
      set('Description', descriptionval).
      set('CategoryType', "0").
      set('CategoryCode', " ").
      set('ForType', "Both").
      set('operation', "insertion").
      set('MainClassid', mainclassifyval);

    return this.http.get("https://smartformulatorrawmaterialwebservices.azurewebsites.net/categorymain", { params: params1, responseType: 'text'  });

  }
  Updatecategory(mainclassify: string, categoryname: string, description: string, categorymainval:string) {
    if (mainclassify == "Cosmetics") {
      this.Mainclassidval = "1";
    } else if (mainclassify == "Nutrition") {
      this.Mainclassidval = "2";
    }
    var mainclassifyval = this.Mainclassidval;
    var categorynameval: string = categoryname;


    var descriptionval: string = description
    let params1 = new HttpParams().set('CategoryId', categorymainval).
      set('CategoryName', categorynameval).
      set('Description', descriptionval).
      set('CategoryType', "0").
      set('CategoryCode', " ").
      set('ForType', "Both").
      set('operation', "Update").
      set('MainClassid', mainclassifyval);

    return this.http.get("https://smartformulatorrawmaterialwebservices.azurewebsites.net/categorymain", { params: params1, responseType: 'text' });

  }
  addRow(row: { name: 'dsf'; items: 'sdf'; items1: 'sdf'; items2: 'sdf'; }): void {
    this.dataraw_sup_cate.push(row);
  }
  cleardata() {
    this.CategoryNam = "";
    this.Descriptio = "";
    this.cateid = "";
    this.classify = "Cosmetics";
    this.iscategorysave = false;
    this.iscategoryupdate = true;
    this.Loadcategory(this.firsttimeloadcate).subscribe((resultraw_sup_cate) => {
      console.warn("resultraw_sup_cate", resultraw_sup_cate)
      this.dataraw_sup_cate = resultraw_sup_cate
    })
  }
  deletecategory(mainclassify: string, categoryname: string, description: string, categorymainval: string) {
    if (mainclassify == "Cosmetics") {
      this.Mainclassidval = "1";
    } else if (mainclassify == "Nutrition") {
      this.Mainclassidval = "2";
    }
    var mainclassifyval = this.Mainclassidval;
    var categorynameval: string = categoryname;


    var descriptionval: string = description
    let params1 = new HttpParams().set('CategoryId', categorymainval).
      set('CategoryName', categorynameval).
      set('Description', descriptionval).
      set('CategoryType', "0").
      set('CategoryCode', " ").
      set('ForType', "Both").
      set('operation', "delete").
      set('MainClassid', mainclassifyval);

    return this.http.get("https://smartformulatorrawmaterialwebservices.azurewebsites.net/categorymain", { params: params1, responseType: 'text'  });

  }

  savedata(classify, CategoryNam, Descriptio) {
    if (CategoryNam == "") {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Enter Category Name" } });
    }
    else if (Descriptio == "") {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Enter Description" } });
    }
    else {
      this.savecategory(this.classifiedvalue, CategoryNam, Descriptio).subscribe((resultraw_cate_save) => {
        console.warn("resultraw_cate_save", resultraw_cate_save)
        this.dataraw_cate_save = resultraw_cate_save
        if (this.dataraw_cate_save == "Inserted") {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Category: " + CategoryNam + " Saved Successfully" } });
          this.Loadcategory(this.classifiedvalue).subscribe((resultraw_sup_cate) => {
            console.warn("resultraw_sup_cate", resultraw_sup_cate)
            this.dataraw_sup_cate = resultraw_sup_cate
          })
        }
        else {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Failed to Save" } });
        }
      })
    }
  }
  updatedata(classify, categoryname, description, categorymainval) {
    if (categoryname == "") {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Enter Category Name" } });
    }
    else if (description == "") {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Enter Description" } });
    }
    else {
      this.Updatecategory(this.classifiedvalue, categoryname, description, categorymainval).subscribe((resultraw_cate_update) => {
        console.warn("resultraw_cate_update", resultraw_cate_update)
        this.dataraw_cate_update = resultraw_cate_update
        if (this.dataraw_cate_update == "updated") {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Category: " + categoryname + " Updated Successfully" } });
          this.Loadcategory(this.firsttimeloadcate).subscribe((resultraw_sup_cate) => {
            console.warn("resultraw_sup_cate", resultraw_sup_cate)
            this.dataraw_sup_cate = resultraw_sup_cate
          })
        }
        else {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Failed to Update" } });
        }
      })
    }
  }
  deletedata(classify, categoryname, description, categorymainval) {
    this.deletecategory(this.classifiedvalue, categoryname, description, categorymainval).subscribe((resultraw_cate_delete) => {
      console.warn("resultraw_cate_delete", resultraw_cate_delete)
      this.dataraw_cate_delete = resultraw_cate_delete
      if (this.dataraw_cate_delete == "Deleted") {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Category: " + categoryname + " Deleted Successfully" } });
        this.cleardata();
        this.Loadcategory(this.firsttimeloadcate).subscribe((resultraw_sup_cate) => {
          console.warn("resultraw_sup_cate", resultraw_sup_cate)
          this.dataraw_sup_cate = resultraw_sup_cate
        })
      }
      else {
        this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Failed to Delete" } });
      }
    })
  }
  setradio(e: string) {
    this.radiovalue = e;
    }
  selectitem(raw_sup_cate) {
    this.iscategorysave = true;
    this.iscategoryupdate = false;

    this.classifiedvalue = this.classifi = raw_sup_cate.Classification;
    this.CategoryNam = this.categoname = raw_sup_cate.CategoryName;
    this.Descriptio = this.descript= raw_sup_cate.Description;
    this.fotyp = this.fortyp = raw_sup_cate.ForType;
    this.cateid = this.categoid = raw_sup_cate.CategoryId;
    // declare variable in component.
  }

  ngOnInit() {
    this.Loadcategory(this.firsttimeloadcate).subscribe((resultraw_sup_cate) => {
      console.warn("resultraw_sup_cate", resultraw_sup_cate)
      this.dataraw_sup_cate = resultraw_sup_cate
    })

  }
}

