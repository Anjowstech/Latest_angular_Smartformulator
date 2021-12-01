import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-search-project-pdr',
  templateUrl: './search-project-pdr.component.html',
  styleUrls: ['./search-project-pdr.component.css']
})
export class SearchProjectPdrComponent implements OnInit {
  PDR_searchdata: any;
  username: string = "admin"
  isLoading = true;
  pdrno: string;
  projectname: string;
  customername: string;
  searchitems: any = [];
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<SearchProjectPdrComponent>) { }
  PDR_search(user: string) {
    var usernam = user;
   // var operate = this.Case;
    let params1 = new HttpParams().set('username', usernam);
    return this.http.get("http://24.187.220.60/Smartformulator_PDR_Webservice/SearchPDR", { params: params1, })



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
    this.PDR_search(this.username).subscribe((PDR_search) => {
     this.isLoading = false;
      console.warn("PDR_search", PDR_search)
      this.PDR_searchdata = PDR_search
    })
  }

}
