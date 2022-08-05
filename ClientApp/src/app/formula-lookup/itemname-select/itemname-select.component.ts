import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataShareServiceService } from 'src/app/data-share-service.service';
//import { DataShareServiceService } from 'src/app/data-share-service.service';

@Component({
  selector: 'app-itemname-select',
  templateUrl: './itemname-select.component.html',
  styleUrls: ['./itemname-select.component.css']
})
export class ItemnameSelectComponent implements OnInit {
  private selectedLink: string = "startwith"; 
  resultraw_searchinci_data: any;
  getgriddata: string;
  griditem: any;
  gridinciname: any;
  gridtradename: any;
  gridIngredientCode: any;
  gridp: any;
  gridsuppliername: any;
  incicost: any;
  uniname: any
  getrawtable: any;
  p: number = 1
  searchgrid: any = [];
  pageStart: number = 0;
  pageEnd: number = 100;
  pageHeight: number = 30;
  pageBuffer: number = 100;
  getlabels: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private http: HttpClient, private Datashare: DataShareServiceService, public dialogRef: MatDialogRef<ItemnameSelectComponent>) { }
  Loadsearchraw() {

    return this.http.get("https://smartformulatorformulalookupwebservice6.azurewebsites.net/dgFormulation_Loadsubgrid");
  }
  setradiofilter(e: string): void {

    this.selectedLink = e;

  }

  isSelected(name: string): boolean {

    if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
      return false;
    }

    return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
  }  
  setvalues(inci_search) {
    this.gridinciname = inci_search.INCIName;
    this.griditem = inci_search.ItemNo;
    this.gridtradename = inci_search.TradeName;
    this.gridp = inci_search.P;
    this.gridsuppliername = inci_search.supplier;

    this.uniname = inci_search.Unit;
    this.incicost = inci_search.Unitcost;
    this.gridIngredientCode = inci_search.IngredientCode;
    this.searchgrid = [this.gridinciname, this.griditem, this.gridtradename, this.gridp, this.gridsuppliername, this.incicost, this.uniname, this.gridIngredientCode]
  }
  close() {
    // this.searchitems = [this.formulacodedata, this.formulanamedata, this.lbnotedata]
    this.dialogRef.close(this.searchgrid);

  }
  applyFilter(filterValue: string) {
    let filterValueLower = filterValue.toLowerCase();
    if (filterValue === '') {
      this.resultraw_searchinci_data
    } else {
      this.resultraw_searchinci_data = this.resultraw_searchinci_data.filter((formula) =>

        formula.Description.toLowerCase().includes(filterValueLower));

    }
  }
  onScroll(event, doc) {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const offsetHeight = event.target.offsetHeight;
    const scrollPosition = scrollTop + offsetHeight;
    const scrollTreshold = scrollHeight - this.pageHeight;
    if (scrollPosition > scrollTreshold) {
      this.pageEnd += this.pageBuffer;
    }
  }
  ngOnInit() {
    this.getgriddata = this.data.displaydata
    this.getrawtable = this.Datashare.getrawtable()

    this.getlabels = this.Datashare.getlabel()
  }

}
