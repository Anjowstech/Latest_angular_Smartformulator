import { HttpClient, HttpParams } from '@angular/common/http';
import { NgModule,Component, OnInit,} from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewPropertyComponent } from './new-property/new-property.component';
import { DataShareServiceService } from 'src/app/data-share-service.service';

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
  itemcod: string = '';
  pop = "% Wt Solids";
  i: number;
  j: number;
  SpecdataList: data3[][] = [];
  datarawpropertyloadrprop: any;
  constructor(public dialog: MatDialog, private http: HttpClient, private Datashare: DataShareServiceService) {
   
  



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
  public highlightRow(propertyloadingraw) {
    this.finalproperty = this.selectedproperty = propertyloadingraw.propname;
    this.myusername = propertyloadingraw.propvalue;
  }
  opennewproperty(): void {
    const dialogRef = this.dialog.open(NewPropertyComponent, {
      width: '30%', height: '30%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.itemcod = this.Datashare.getitemcode();
      this.rawpropertyloadrprp(this.itemcod).subscribe((rawpropertyload) => {
        console.warn("rawpropertyload", rawpropertyload)
        this.datarawpropertyloadrprop = rawpropertyload
      });


    });
  }
  loadProperty() {
    return this.http.get("https://smartformulatorrawmaterialswebservice3.azurewebsites.net/loadproperty");
  }
  closedialog() {
    this.dialog.closeAll();
  }
  setvalues(loadspecdata: any) {
    this.i = 0;
    this.j = 0;
    for (let search of loadspecdata) {
      this.SpecdataList[this.i] = ([{
        propname: search.propname,
        propvalue: search.propvalue,
      }]);
      this.i++;
    }
  }
  SaveProperty() {
    var itemco = this.Datashare.getitemcode();
    this.setvalues(this.datarawpropertyloadrprop);
    this.PropertySave(this.myusername, itemco).subscribe((result7) => {
      console.warn("resultsavesProperty", result7)
      this.acceptPropertyvalue = result7
    })
  }
  PropertySave(WebValue1: string,itemcode:string) {    
    this.WebvValue = WebValue1;
    var loadproperty: any = JSON.stringify(this.SpecdataList);
    var operation: string = "Insert";
    let parms = new HttpParams().set('Propertjson', loadproperty).set('itemcode', itemcode).set('operation', operation);
    return this.http.get("https://smartformulatorrawmaterialswebservice3.azurewebsites.net/update_save_Properties", { params: parms, responseType: 'text' });
  }
  PropertyDelete() {
    var RMVolPricingId1: string = this.finalproperty
    let param = new HttpParams().set('PropertyName', this.finalproperty).set('Description', this.myusername);
    return this.http.get("https://smartformulatorrawmaterialswebservice3.azurewebsites.net/deleteProperties", { params: param });
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

    return this.http.get("https://smartformulatorrawmaterialswebservice3.azurewebsites.net/loadrawproperty", { params: params1 });

  }
  ngOnInit() {
    //this.loadProperty().subscribe((result) => {
    //  console.warn("resultProperty", result)
    //  this.Propertyloaddata = result
    //})
    this.itemcod = this.Datashare.getitemcode();
    this.rawpropertyloadrprp(this.itemcod).subscribe((rawpropertyload) => {
      console.warn("rawpropertyload", rawpropertyload)
      this.datarawpropertyloadrprop = rawpropertyload
    });
  }
}
export class data3 {
  propname: string;
  propvalue: string;
}

