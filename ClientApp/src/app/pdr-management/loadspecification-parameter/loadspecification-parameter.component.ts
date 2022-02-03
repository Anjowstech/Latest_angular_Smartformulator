import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AddnewParamComponent } from './addnew-param/addnew-param.component';

@Component({
  selector: 'app-loadspecification-parameter',
  templateUrl: './loadspecification-parameter.component.html',
  styleUrls: ['./loadspecification-parameter.component.css']
})
export class LoadspecificationParameterComponent implements OnInit {

  constructor(public dialog: MatDialog, private http: HttpClient) { }
  openloadaddnewparam(): void {
    const dialogRef = this.dialog.open(AddnewParamComponent, {
      width: '30%', height: '30%', disableClose: true
    });
  }
  ngOnInit() {
  }
}
