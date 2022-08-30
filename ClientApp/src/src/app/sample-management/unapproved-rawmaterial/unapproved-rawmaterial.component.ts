import { Component, OnInit } from '@angular/core';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DialogData } from 'src/app/formula-lookup/formula-lookup.component';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RawMaterialComponent } from  'src/app/raw-material/raw-material.component';


@Component({
  selector: 'app-unapproved-rawmaterial',
  templateUrl: './unapproved-rawmaterial.component.html',
  styleUrls: ['./unapproved-rawmaterial.component.css']
})
export class UnapprovedRawmaterialComponent implements OnInit {
  SaveSamplestatus: any;
 // Unapprovedrawmat: boolean = true;
  //UnApproved: boolean = true;
  formulacode: string = '';
  username: string = '';
  GeneralItemCod: string = '';
  ItemCod: string = '';
  INCINam: string = '';
  suppliernam: string = '';
  Approvedrawmat: string = "";
  TradeNam: string = '';
  SupplierCod: string = '';
  searchitems: any;
  isLoading = true;
  unapproverawmatlist: unapproverawmat[];

    dataresultLoadunapproverawmatlist: any;
  displaydata: any;







  constructor(public dialog: MatDialog, private http: HttpClient, public dialogRef: MatDialogRef<UnapprovedRawmaterialComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }


  unapproverawmaterials() {
    const dialogRef = this.dialog.open(UnapprovedRawmaterialComponent, {
      width: '80%', height: '90%', disableClose: true

    });
  }

  GotoRawmaterial() {
  
    var Rawmaterial: any = [this.GeneralItemCod, this.ItemCod, this.INCINam, this.TradeNam, this.suppliernam, this.SupplierCod  ]
    const dialogRef = this.dialog.open(RawMaterialComponent, {
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
      panelClass: 'full-screen-modal', data: { displaydata: Rawmaterial }, disableClose: true
      });
    }
  

  ApproveSampleStatus() {
    //var Unapprovedrawmat: boolean = this.UnApproved;
    var FormulaCode1: string = this.formulacode;
    var username1: string = "admin";
    
    let params1 = new HttpParams().set('FormulaCode', FormulaCode1).set('username', username1);
    return this.http.get("https://samplemanagementloadwebservice.azurewebsites.net/ApproverawmaterialSelect", { params: params1, responseType: 'text' })
  }

  ApproveSelect() {

    this.ApproveSampleStatus(
    ).subscribe((SaveSamplestatus) => {
      console.warn("SaveSamplestatus", SaveSamplestatus)
      this.SaveSamplestatus = SaveSamplestatus
      if ( this.SaveSamplestatus == "Sample cant be created without approving all raw materials.") {
        this.dialog.open(MessageBoxComponent, {
          width: '40%', height: '15%', data: {
            displaydata: "Sample cant be created without approving all raw materials."
          }
        });
        this.unapproverawmaterials();
      }
    
      if ( this.SaveSamplestatus == "Sucessfully approved all raw materials.") {
        this.dialog.open(MessageBoxComponent, {
          width: '40%', height: '15%', data: {
            displaydata: "Sucessfully approved all raw materials."
          }
        });
      }

    });
  }

  //triggerapproved(event: any) {
  //  this.Approvedrawmat = " 1 ";
  //}


  Loadunapproverawmatlist() {
    var FormulaCode: string = this.formulacode;
   
    let params1 = new HttpParams().set('FormulaCOde', FormulaCode);

    return this.http.get("https://samplemanagementramatwebservice.azurewebsites.net/rawmaterialload", { params: params1 });
  }

  
  setvalues(rawmaterialapprove_search) {
    this.GeneralItemCod = rawmaterialapprove_search.GeneralItemCode;
    this.ItemCod = rawmaterialapprove_search.ItemCode;
    this.INCINam = rawmaterialapprove_search.INCIName;
    this.TradeNam = rawmaterialapprove_search.TradeName;
    this.suppliernam = rawmaterialapprove_search.suppliername;
    this.Approvedrawmat = rawmaterialapprove_search.Approved;
    this.SupplierCod = rawmaterialapprove_search.SupplierCode;
    this.searchitems = [this.GeneralItemCod, this.ItemCod, this.INCINam, this.TradeNam, this.suppliernam, this.Approvedrawmat, this.SupplierCod]
  }
  close() {

    this.dialogRef.close(this.searchitems);

  }
  getunapproverawmatlist() {
    this.unapproverawmatlist = [
      this.dataresultLoadunapproverawmatlist
    ]
  }
  onchangerawmat(event: any) {
    this.Approvedrawmat = "1";
  }
 
  ngOnInit() {

    this.formulacode = this.data.displaydata[0];

    this.Loadunapproverawmatlist().subscribe((resultLoadunapproverawmatlist) => {
      this.isLoading = false;
      console.warn("resultLoadunapproverawmatlist", resultLoadunapproverawmatlist)
      this.dataresultLoadunapproverawmatlist = resultLoadunapproverawmatlist
    })
  }
  
}

class unapproverawmat {
  GeneralItemCode: string;
  ItemCode: string;
  INCIName: string;
  TradeName: string;
  suppliername: string;
  Approved: boolean = false;
  SupplierCode: string;

}
