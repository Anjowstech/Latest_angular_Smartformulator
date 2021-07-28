import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddFunctionComponent } from '../add-function/add-function.component';
import { SearchCASComponent } from './search-cas/search-cas.component';

@Component({
  selector: 'app-add-cas-details',
  templateUrl: './add-cas-details.component.html',
  styleUrls: ['./add-cas-details.component.css']
})
export class AddCASDetailsComponent implements OnInit {

  constructor(public dialog: MatDialog) { } 
  OpenSearchCAS(): void {
    const dialogRef = this.dialog.open(SearchCASComponent, {
      width: '60%', height: '60%', disableClose: true
    });
  }
  ngOnInit() {
  }

}
