import { Component, OnInit, Inject} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/raw-material/raw-material.component';
import { MessageBoxComponent } from '../../message-box/message-box.component';


@Component({
  selector: 'app-search-inci-name',
  templateUrl: './search-inci-name.component.html',
  styleUrls: ['./search-inci-name.component.css']
})
export class SearchINCINameComponent implements OnInit {
  datarawmaterialssearch: any;
  filterMetadata = { count: 0 };
  approve: string = '';
  dataresultquicksave: any;
  dataloadfuncsearch: any;
  dataloadcount:any;
  rmapprove: string = '';
  hazard: string = 'No';
  countrecords = '0';
  inci: string = '';
  itemli: string = '';
  supplier_name: string = '';
  traden: string = '';
  incicode: string = '';
  searchitems: any = [];
  isLoading = true;
  pageStart: number = 0;
  pageEnd: number = 100;
  pageHeight: number = 30;
  pageBuffer: number = 100;
  fun_name: string = "";
  itemc: string = "";
  supplierva: string = '';
  tradenam: string = '';
  casnum: string = '';
  suplrst: string = '';
  constructor(public dialog: MatDialog,private http: HttpClient, public dialogRef: MatDialogRef<SearchINCINameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }



  searchRawMaterials(approve: string) {

    this.rmapprove = approve;
    var approved: string = approve;
    var hazardus = this.hazard
    let params1 = new HttpParams().set('Hazardous', hazardus).set('approved', approved);
    return this.http.get("https://smartformulatorrawmaterialwebservices.azurewebsites.net/bindgridallgrid", { params: params1 });



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
  setvalues(raw_cate_search) {



    this.incicode = raw_cate_search.ingredientcode;
    this.inci = raw_cate_search.INCIName;
    this.itemli = raw_cate_search.Item;
    this.traden = raw_cate_search.TradeName;
    this.supplier_name = raw_cate_search.SupplierName;



    this.searchitems = [this.inci, this.itemli, this.traden, this.supplier_name];
    // declare variable in component.

  }
  close() {
    this.searchitems = [this.inci, this.itemli, this.traden, this.supplier_name, this.incicode];
    //var selectedfunctionListdata: [string, string] = [finalcode, finalname];
    this.dialogRef.close(this.searchitems);






  }
  loadfunction() {


    return this.http.get("https://smartformulatorrawmaterialwebservices.azurewebsites.net/functionload");

  }

  loadcount() {



    return this.http.get("https://smartformulatorformulallokupwebservice8.azurewebsites.net/Loadincinamecount");



  }
  quicksaveval(supp_status, inciname, itemcode, supplier, tradename) {
    this.quicksaveraw(supp_status, inciname, itemcode, supplier, tradename).subscribe((resultquicksave) => {
      console.warn("resultquicksave", resultquicksave)
      this.dataresultquicksave = resultquicksave

      if (this.dataresultquicksave == "Inserted") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: '' } });
      }
    })
  }

  quicksaveraw(supp_statusdata: string, inciname: string, itemcode: string, supplier: string, tradename: string) {



    var supp_stat: string = supp_statusdata;
    var incin: string = inciname;
    var itemc: string = itemcode;
    var supp: string = supplier;
    var traden: string = tradename;
    let params1 = new HttpParams().set('supplierstatus', supp_stat).set('rmapproved', "1").set('descriptionvalue', incin).set('suppliername', supp).set('tradename', traden).set('strItemCode', itemc);
    return this.http.get("https://smartformulatorrawmaterialwebservices.azurewebsites.net/quicksave", { params: params1, responseType:'text' });



  }
  PDRdata(pdrdatas: any) {
    for (let item of pdrdatas) {
      this.countrecords = item.RECORDS
    }
  }
  
  setradio(e: string): void {
    this.searchRawMaterials(e).subscribe((rawmaterialssearch) => {
      console.warn("rawmaterialssearch", rawmaterialssearch)
      this.datarawmaterialssearch = rawmaterialssearch
      this.isLoading = false;
    })
  }
  Clearaw() {
    this.inci = '';
    this.fun_name = '';
    this.itemc = '';
    this.supplierva = '';
    this.tradenam = '';
    this.casnum = '';
    this.suplrst = '';
  }

  ngOnInit() {
    
    this.searchRawMaterials("2").subscribe((rawmaterialssearch) => {
      console.warn("rawmaterialssearch", rawmaterialssearch)
      this.datarawmaterialssearch = rawmaterialssearch
      this.isLoading = false;
    })
   
    this.loadfunction().subscribe((loadfuncsearch) => {
  
      console.warn("loadfuncsearch", loadfuncsearch)
      this.dataloadfuncsearch = loadfuncsearch
      
    })
    this.loadcount().subscribe((loadcountsearch) => {

      console.warn("loadcountsearch", loadcountsearch)
      this.dataloadcount = loadcountsearch
      this.PDRdata(this.dataloadcount)
    })

  }

}
