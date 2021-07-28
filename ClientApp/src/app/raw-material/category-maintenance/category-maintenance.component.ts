import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-category-maintenance',
  templateUrl: './category-maintenance.component.html',
  styleUrls: ['./category-maintenance.component.css']
})
export class CategoryMaintenanceComponent implements OnInit {
  dataraw_sup_cate: any;
  firsttimeloadcate: string = "cosmetics";
  classifi: string ='';
  categoname: string = '';
  descript: string = '';
  fortyp: string = '';
  classificat: string = '';
  CategoryNam: string = '';
  Descriptio: string = '';
  fotyp: string = '';
  classify: string = '';
  classifiedvalue: string = '';
  Mainclassidval: string = '';
  categoid: string = '';
  cateid: string = '';
  dataraw_cate_save: any;
  dataraw_cate_update: any;
  dataraw_cate_delete: any;
  radiovalue: string = 'both'; 
  options = ['Cosmetics', 'Nutrition','Paints','Food']
  constructor(private http: HttpClient) { }
  Loadcategory(classificationtypeval: string) {
    var classifi_val: string = classificationtypeval;

    let params1 = new HttpParams().set('Classificationtype', classifi_val);


    return this.http.get("http://localhost/raw_sup_webservice/catogory_load", { params: params1 });

  }
  onSelectedChange() {
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

    return this.http.get("http://localhost/raw_sup_webservice/categorymain", { params: params1 });

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

    return this.http.get("http://localhost/raw_sup_webservice/categorymain", { params: params1 });

  }
  addRow(row: { name: 'dsf'; items: 'sdf'; items1: 'sdf'; items2: 'sdf'; }): void {
    this.dataraw_sup_cate.push(row);
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

    return this.http.get("http://localhost/raw_sup_webservice/categorymain", { params: params1 });

  }

  savedata(classify, CategoryNam, Descriptio) {
    this.savecategory(this.classifiedvalue , CategoryNam, Descriptio).subscribe((resultraw_cate_save) => {
      console.warn("resultraw_cate_save", resultraw_cate_save)
      this.dataraw_cate_save = resultraw_cate_save
    })
  }
  updatedata(classify, categoryname, description, categorymainval) {
    this.Updatecategory(this.classifiedvalue, categoryname, description, categorymainval).subscribe((resultraw_cate_update) => {
      console.warn("resultraw_cate_update", resultraw_cate_update)
      this.dataraw_cate_update = resultraw_cate_update
    })
  }
  deletedata(classify, categoryname, description, categorymainval) {
    this.deletecategory(this.classifiedvalue, categoryname, description, categorymainval).subscribe((resultraw_cate_delete) => {
      console.warn("resultraw_cate_delete", resultraw_cate_delete)
      this.dataraw_cate_delete = resultraw_cate_delete
    })
  }
  setradio(e: string) {
    this.radiovalue = e;
    }
  selectitem(raw_sup_cate) {
    

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

