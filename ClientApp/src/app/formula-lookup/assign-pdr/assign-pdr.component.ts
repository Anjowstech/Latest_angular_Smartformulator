import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-assign-pdr',
  templateUrl: './assign-pdr.component.html',
  styleUrls: ['./assign-pdr.component.css']
})
export class AssignPdrComponent implements OnInit {
  PDR_searchdata: any;
  username: string = "admin"
  isLoading = true;
  pdrno: string;
  projectname: string;
  customername: string;
  searchitems: any = [];

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<AssignPdrComponent>) { }
  PDR_search(user: string) {
    var usernam = user;
    let params1 = new HttpParams().set('username', usernam);
    return this.http.get("https://smartformulatorpdrwebservice.azurewebsites.net/AssignPDR", { params: params1, })

  }
  setvalues(pdr_search) {
    this.pdrno = pdr_search.PDRNo;
    this.projectname = pdr_search.ProjectName;
    this.customername = pdr_search.Customername;

    this.searchitems = [this.pdrno, this.projectname, this.customername];
  }
  close() {

    this.dialogRef.close(this.searchitems);

  }
  ngOnInit() {
    this.PDR_search(this.username).subscribe((PDR_search) => {
      this.isLoading = false;
      console.warn("AssignPdr", PDR_search)
      this.PDR_searchdata = PDR_search
    })
  }

}
