import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { SubCategoryMaintenanceComponent } from 'src/app/raw-material/sub-category-maintenance/sub-category-maintenance.component';

@Component({
  selector: 'app-serach-category',
  templateUrl: './serach-category.component.html',
  styleUrls: ['./serach-category.component.css']
})
export class SerachCategoryComponent implements OnInit {
  categorysearchval: any;
  selectedrow: string = '';

  constructor(public dialog: MatDialog,private http: HttpClient, private Datashare: DataShareServiceService) { }
  categorysearch() {
    return this.http.get("http://localhost/raw_sup_webservice/categorysearch");
  }
  selectitem(cateval: string) {
    this.selectedrow = cateval;

    // declare variable in component.
  }
  public searchItemname(categoryname:string) {

    var catename: string = categoryname;
  
    //    GroupName1: this.clickeddata1


    this.Datashare.searchItemname(catename);

   
  }
  public searchItemid(categoryid: string) {

    var cateid: string = categoryid;

    //    GroupName1: this.clickeddata1


    this.Datashare.searchItemid(cateid);


  }
  OpensubCategory(): void {
    const dialogRef = this.dialog.open(SubCategoryMaintenanceComponent, {
      width: '80%', height: '90%', disableClose: true
    });
  }
  ngOnInit() {
    this.categorysearch().subscribe((categorysearch) => {
      console.warn("categorysearch", categorysearch)
      this.categorysearchval = categorysearch
    })
  }
  }


