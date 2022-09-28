import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AddnewParamComponent } from './addnew-param/addnew-param.component';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-loadspecification-parameter',
  templateUrl: './loadspecification-parameter.component.html',
  styleUrls: ['./loadspecification-parameter.component.css']
})
export class LoadspecificationParameterComponent implements OnInit {
  loadspecdetails: any;
  pdrno: string;
  loadpdrno: string;
  selecteduserspecification: string;
  selectedspecification: string;
  finalspecification: string;
  specificationvalue: string;
  deletespecdetails: any;
  userna: string = "";
  i: any;
  j: any;
  SpecdataList: data3[][] = [];
  Spec_save_data: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog, private http: HttpClient, public datashare: DataShareServiceService) { }
  openloadaddnewparam(): void {
    const dialogRef = this.dialog.open(AddnewParamComponent, {
      width: '30%', height: '25%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.loadpdrno = this.datashare.getpdrno();
      this.loadspecificationparams(this.loadpdrno).subscribe((loadspecs) => {
        console.warn("loadspec", loadspecs)
        this.loadspecdetails = loadspecs
      })



    });
  }
  deletespec() {
    this.deletespecification(this.finalspecification).subscribe((deletespec) => {
      console.warn("deletespec", deletespec)
      this.deletespecdetails = deletespec
    })
    this.loadspecificationparams(this.loadpdrno).subscribe((loadspecs) => {
      console.warn("loadspec", loadspecs)
      this.loadspecdetails = loadspecs
    })
  }
  deletespecification(description: string) {
    var desc = description;
    let params1 = new HttpParams().set('Description', desc);
    return this.http.get("https://smartformulatorpdrwebservice5.azurewebsites.net/deletespecificationparams", { params: params1 })
  }
  setvalues(loadspecdata: any) {
    this.i = 0;
    this.j = 0;



    for (let search of loadspecdata) {



      this.SpecdataList[this.i] = ([{

        Specification: search.Specification,
        SpecificationValue: search.SpecificationValue,

      }]);
      this.i++;



    }
  }
 
  SaveSpecifications() {
    this.setvalues(this.loadspecdetails);
    this.Specsaveup(this.loadpdrno).subscribe((Specda_save) => {
      console.warn("save_specification", Specda_save)
      this.Spec_save_data = Specda_save
    })
  }
  Specsaveup(pdrno: string) {
    var pdrnum = pdrno;
    var datalistdata: any = JSON.stringify(this.SpecdataList);
    var Username = this.userna;
    var Projectname = this.data.pdrname;



    let params1 = new HttpParams().set('PDRNo', pdrnum).set('ProjectName', Projectname).set('specdatajson', datalistdata).set('username', Username);
    return this.http.get("https://smartformulatorpdrwebservice5.azurewebsites.net/SavePDRSpecification", { params: params1 })
  }
  selecteduserdet(specificationloading: string) {
    this.selecteduserspecification = specificationloading;
    //this.finalproperty = this.selecteduserProperty[0];
  }
  highlightRow(loadspecdatadetailspop) {
    this.finalspecification = this.selectedspecification = loadspecdatadetailspop.Specification;
    this.specificationvalue = loadspecdatadetailspop.SpecificationValue;
  }
  loadspecificationparams(pdrno: string) {
    var pdrnum = pdrno;
    let params1 = new HttpParams().set('PDRNo', pdrnum);
    return this.http.get("https://smartformulatorpdrwebservice5.azurewebsites.net/loadspecspopup", { params: params1 })
  }
  ngOnInit() {
    this.userna = this.datashare.getlogin();
    this.loadpdrno = this.datashare.getpdrno();
    this.loadspecificationparams(this.loadpdrno).subscribe((loadspecs) => {
      console.warn("loadspec", loadspecs)
      this.loadspecdetails = loadspecs
    })
  }
}
export class data3 {
  Specification: string;
  SpecificationValue: string;
}
