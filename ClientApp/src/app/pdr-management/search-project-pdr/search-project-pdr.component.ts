import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataShareServiceService } from 'src/app/data-share-service.service';

@Component({
  selector: 'app-search-project-pdr',
  templateUrl: './search-project-pdr.component.html',
  styleUrls: ['./search-project-pdr.component.css']
})
export class SearchProjectPdrComponent implements OnInit {
  PDR_searchdata: any;
  filterMetadata = { count: 0 };
  username: string = "admin"
  isLoading = true;
  pdrno: string;
  projectname: string;
  customername: string;
  searchitems: any = [];
  projectcount: any;
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<SearchProjectPdrComponent>, public datashare: DataShareServiceService) { }
  PDR_search(user: string) {
    var usernam = user;
   // var operate = this.Case;
    let params1 = new HttpParams().set('username', usernam);
    return this.http.get("https://smartformulatorpdrwebservice5.azurewebsites.net/LoadPDRprojectsearch", { params: params1, })



  }
  setvalues(pdr_search) {
    this.pdrno = pdr_search.PDRNo;
    this.projectname = pdr_search.ProjectName;
    this.customername = pdr_search.CustomerName;

    this.searchitems = [this.pdrno, this.projectname, this.customername];
  }
  close() {

    this.dialogRef.close(this.searchitems);

  }
  ngOnInit() {
    this.username = this.datashare.getlogin();
    this.PDR_search(this.username).subscribe((PDR_search) => {
     this.isLoading = false;
      console.warn("PDR_search", PDR_search)
      this.PDR_searchdata = PDR_search
      this.projectcount = this.PDR_searchdata.length;
    })
  }

}
