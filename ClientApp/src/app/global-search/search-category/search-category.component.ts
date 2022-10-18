import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.css']
})
export class SearchCategoryComponent implements OnInit {
  firsttimeloadcate: string = "";
  dataraw_sup_cate: any;
  classifiedvalue: string = '';
  CategoryNam: string = '';
  Descriptio: string = "";
  fotyp: string = '';
  classify: string = '';
  Mainclassidval: string = '';
  categoid: string = '';
  cateid: string = '';
  classifi: string = '';
  categoname: string = '';
  descript: string = '';
  fortyp: string = '';
  classificat: string = '';
  filterMetadata = {count: 0};
  searchitems: any = [];



  constructor(private http: HttpClient, public dialogRef: MatDialogRef<SearchCategoryComponent>, public dialog: MatDialog) { }
  Loadcategory(classificationtypeval: string) {
   

    return this.http.get("https://globalsearchwebservice1.azurewebsites.net/Categorydetails");

  }
  selectitem(raw_sup_cate) {
    
    this.cateid = this.categoid = raw_sup_cate.CategoryId;
    this.CategoryNam = this.categoname = raw_sup_cate.CategoryName;
    this.Descriptio = this.descript = raw_sup_cate.Description;
    // declare variable in component.
    this.searchitems = [this.CategoryNam, this.Descriptio, this.cateid]
  }
  close() {

    this.dialogRef.close(this.searchitems);

  }
  
  ngOnInit() {
    this.Loadcategory(this.firsttimeloadcate).subscribe((resultraw_sup_cate) => {
      console.warn("resultraw_sup_cate", resultraw_sup_cate)
      this.dataraw_sup_cate = resultraw_sup_cate
    })
  }

}
