import { NgModule } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
import { DatagridcomponentComponent } from 'src/app/formula-lookup/customer-details/datagridcomponent/datagridcomponent.component';

@Component({
  selector: 'app-componentimport',
  templateUrl: './componentimport.component.html',
  styleUrls: ['./componentimport.component.css']
})

@NgModule({
  imports: [

    DxDataGridModule

  ],
  declarations: [DatagridcomponentComponent],

})
export class ComponentimportComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
    word3: string;

  constructor() { }
  addRow() {
    this.dataGrid.instance.addRow();
    this.dataGrid.instance.saveEditData();

  }
  handleFileInput3(files: FileList) {
    var filebrowse = files.item.length;
    this.word3 = files.item(0).name;
  }
  ngOnInit() {
  }

}
