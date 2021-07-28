import { HttpClient, HttpParams } from '@angular/common/http';
import { NgModule,Component, OnInit,} from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewPropertyComponent } from './new-property/new-property.component';


@Component({
  selector: 'app-load-property',
  templateUrl: './load-property.component.html',
  styleUrls: ['./load-property.component.css']
})

export class LoadPropertyComponent implements OnInit {
  
  columnDefs = [
    {
      headerName: 'Make', field: 'make', width: 150,
      suppressSizeToFit: true,},
    {
      headerName: 'Model', field: 'model', width: 150,
      suppressSizeToFit: true, },
    {
      headerName: 'Price', field: 'price', width: 150,
      suppressSizeToFit: true, }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  Propertyloaddata: any;
  WebvProperty: string = '';
  WebvValue: string = '';
  setClickedRow: Function;
  HighlightRow: Number;
  finalproperty: any;
  selectedproperty: any;
  selecteduserProperty: any;
  acceptPropertyvalue: any;
  myusername: string = "";
  acceptdeleteproperty: any;
  val5: string = " ";
  valname: any = "";
  ingcoderprop = "RM#0";
  pop = "% Wt Solids";
  datarawpropertyloadrprop: any;
  constructor(public dialog: MatDialog, private http: HttpClient) {
   
  



    this.setClickedRow = function (index) {
      this.HighlightRow = index;
      console.log("selected index is", index);
    }
  }
  

  blurEvent(event: any) {
    this.myusername = event.target.value;
    console.log(this.myusername);
  }
  selecteduserdet(propertyloading: string) {
    this.selecteduserProperty = propertyloading;
    //this.finalproperty = this.selecteduserProperty[0];
  }
  public highlightRow(propertyloading) {
    this.finalproperty = this.selectedproperty = propertyloading.Description;
  }
  opennewproperty(): void {
    const dialogRef = this.dialog.open(NewPropertyComponent, {
      width: '30%', height: '30%', disableClose: true
    });
  }
  loadProperty() {
    return this.http.get("http://localhost/raw-sup-webservice2/loadproperty");
  }
  closedialog() {
    this.dialog.closeAll();
  }
  SaveProperty() {
    this.PropertySave(this.myusername).subscribe((result7) => {
      console.warn("resultsavesProperty", result7)
      this.acceptPropertyvalue = result7
    })
  }
  PropertySave(WebValue1: string) {    
    this.WebvValue = WebValue1;
    var operation: string = "Insert";
    let parms = new HttpParams().set('PropertyName', this.finalproperty).set('PropertyValue', this.WebvValue).set('operation', operation);
    return this.http.get("http://localhost/raw-sup-webservice2/update_save_Properties", { params: parms });
  }
  PropertyDelete() {
    var RMVolPricingId1: string = this.finalproperty
    let param = new HttpParams().set('PropertyName', this.finalproperty).set('Description', this.finalproperty);
    return this.http.get("http://localhost/RawMaterial1.2/deleteProperties", { params: param });
  }
  deleteProperty() {
    this.PropertyDelete().subscribe((result10) => {
      console.warn("resultdeleteRMValue", result10)
      this.acceptdeleteproperty = result10
    })
  }
  rawpropertyloadrprp(rawpropertyload: string) {
    var rawprop: string = rawpropertyload;

    let params1 = new HttpParams().set('itemcode', rawprop);

    return this.http.get("http://localhost/raw-sup-webservice2/loadrawproperty", { params: params1 });

  }
  ngOnInit() {
    //this.loadProperty().subscribe((result) => {
    //  console.warn("resultProperty", result)
    //  this.Propertyloaddata = result
    //})
    this.rawpropertyloadrprp(this.ingcoderprop).subscribe((rawpropertyload) => {
      console.warn("rawpropertyload", rawpropertyload)
      this.datarawpropertyloadrprop = rawpropertyload
    });
  }

}
