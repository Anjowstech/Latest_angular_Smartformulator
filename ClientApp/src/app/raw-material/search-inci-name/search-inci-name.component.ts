import { Component, OnInit, Inject} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/raw-material/raw-material.component';


@Component({
  selector: 'app-search-inci-name',
  templateUrl: './search-inci-name.component.html',
  styleUrls: ['./search-inci-name.component.css']
})
export class SearchINCINameComponent implements OnInit {
  datarawmaterialssearch: any;
  approve: string = '';
  dataresultquicksave: any;
  dataloadfuncsearch: any;
  rmapprove: string = '';
  inci: string = '';
  itemli: string = '';
  supplier_name: string = '';
  traden: string = '';
  incicode: string = '';
  searchitems: any = [];

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<SearchINCINameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  searchRawMaterials(approve: string){
  
    this.rmapprove = approve;
    var approved: string = approve;
    let params1 = new HttpParams().set('approved', approved);
    return this.http.get("http://localhost/raw_sup_webservice/bindgridallgrid", { params: params1 });

  }
  setvalues(raw_cate_search) {
   

    this.incicode = raw_cate_search.ingredientcode;
    this.inci = raw_cate_search.INCIName;
    this.itemli = raw_cate_search.Item;
    this.traden = raw_cate_search.TradeName;
    this.supplier_name = raw_cate_search.SupplierName;

    this.searchitems = [this.inci, this.itemli, this.traden, this.supplier_name  ];
      // declare variable in component.
   
  }
  close() {
    this.searchitems = [this.inci, this.itemli, this.traden, this.supplier_name, this.incicode  ];
    //var selectedfunctionListdata: [string, string] = [finalcode, finalname];
    this.dialogRef.close(this.searchitems);




  }
  loadfunction() {


  
    return this.http.get("http://localhost/raw_sup_webservice/functionload");

  }
  quicksaveraw(supp_statusdata: string, inciname: string, itemcode: string, supplier: string, tradename: string) {
   
    var supp_stat: string = supp_statusdata;
    var incin: string = inciname;
    var itemc: string = itemcode;
    var supp: string = supplier;
    var traden: string = tradename;
    let params1 = new HttpParams().set('supplierstatus', supp_stat)
      .set('rmapproved', "1")
      .set('descriptionvalue', incin)
      .set('suppliername', supp)
      .set('tradename', traden)
      .set('strItemCode', itemc);
    return this.http.get("http://localhost/raw_sup_webservice/quicksave",{ params: params1 });

  }
  quicksaveval(supp_status, inciname, itemcode, supplier, tradename) {
    this.quicksaveraw(supp_status, inciname, itemcode, supplier, tradename).subscribe((resultquicksave) => {
      console.warn("resultquicksave", resultquicksave)
      this.dataresultquicksave = resultquicksave
    })
  }
  setradio(e:string): void {
    this.searchRawMaterials(e).subscribe((rawmaterialssearch) => {
      console.warn("rawmaterialssearch", rawmaterialssearch)
      this.datarawmaterialssearch = rawmaterialssearch
    })
  }
  
  ngOnInit() {
    this.searchRawMaterials("1").subscribe((rawmaterialssearch) => {
      console.warn("rawmaterialssearch", rawmaterialssearch)
      this.datarawmaterialssearch = rawmaterialssearch
    })
    
    this.loadfunction().subscribe((loadfuncsearch) => {
      console.warn("loadfuncsearch", loadfuncsearch)
      this.dataloadfuncsearch = loadfuncsearch
    })
  }

}
