import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchSupplierComponent } from './search-supplier/search-supplier.component';
import { TermsMasterComponent } from './terms-master/terms-master.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
import themes from 'devextreme/ui/themes';




@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  public isVisible: boolean = false;
  public isVisible2: boolean = false;
  public isVisible4: boolean = false;
  Supplierkey: string;
  Suppliername: string;
  SupplierCode: string;
  supData: any;
  code: string ="";
  name: string ="";
  phoneNumber: string ="";
  address: string="";
  customertype: string;
  phone: string ="";
  email: string= "";
  fax: string= "";
  addedby: string;
  website: string="";
  SAbbreviation: string="";
  ContactPerson: string ="";
  Distributor: string ="";
  ContactNo: string ="";
  Notes: string="";
  City: string="";
  State: string="";
  Country: string="";
  Zip: string="";
  SupplierKey: string;
  Rating: string;
  Approved: string="false";
  Approv: boolean;
  Prefered: string;
  Prefer: boolean;
  FOB: string="";
  fob: string="";
  Supplier_deletedata: any;
  Terms: string ="";
  ShipVia: string="";
  ExpenseAccount: string="";
  SupplierStatus: string="";
  OtherShipVia: string="";
  shipto: string="";
  operation: string;
  suplrdata: any = [];
  Supplier_save_data: any
  stars: number[] = [1, 2, 3, 4, 5];
  checkBoxesMode: string;
  selectedValuerating: number; termsdatalo_data: any;
  componentData: any;
  formuladetails: any;
  auditrialdetails: any;
  dataloadsupplierallrm: any;
  dataloadsupplierapprovedrm: any;
  dataloadsupplierunapprovedrm: any;
  i: number;
  j: number;
  finisheddataList: Data2[][] = [];
  dataList: Data[][] = [];
  RMdataList: Data1[][] = [];
  searchitems: any = [];
  Starrating: string = "0";
  finishedproductData: any;
  rowData: any = [];
  finished_save_data: any;
  login_formsupp: FormGroup;
  selectedRowIndex = -1;
  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder) {
    this.checkBoxesMode = themes.current().startsWith('material') ? 'always' : 'always';
    this.login_formsupp = fb.group({
      'suppokey': ['', Validators.required],
      'supponame': ['', Validators.required],

      'terms': [false]
    });
  }

  //Searchsupplierpopup() {
  //  //width: '940px', height: '850px', disableClose: true
  //  const dialogConfig = new MatDialogConfig();
  //  dialogConfig.disableClose = true;
  //  dialogConfig.width = '1900%';
  //  const dialogRef = this.dialog.open(SearchSupplierComponent)
  //}
  Searchsupplierpopup(): void {

    const dialogRef = this.dialog.open(SearchSupplierComponent, {
      width: '60%', height: '70%', disableClose: true
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {
        this.Supplierkey = result[0];
        this.Suppliername = result[1];
        this.SupplierCode = result[2];

        this.supplierload(this.SupplierCode).subscribe((supplierload) => {
          console.warn("supplierload", supplierload)
          this.supData = supplierload
          this.Supplierdata(this.supData)
        })

        this.Componentload(this.SupplierCode).subscribe((componentload) => {
          console.warn("componentload", componentload)
          this.componentData = componentload

        })



        this.Formuladetailsload(this.Suppliername).subscribe((Formuladataload) => {
          console.warn("Formuladataload", Formuladataload)
          this.formuladetails = Formuladataload



        })
        this.Audittrialload(this.SupplierCode).subscribe((Auditdataload) => {
          console.warn("Auditdataload", Auditdataload)
          this.auditrialdetails = Auditdataload



        })
        this.loadallrm(this.SupplierCode).subscribe((loadrmsupplierall) => {
          console.warn("loadrmsupplierall", loadrmsupplierall)
          this.dataloadsupplierallrm = loadrmsupplierall
        })
        this.loadallrmApproved(this.SupplierCode).subscribe((loadrmsupplierapproved) => {
          console.warn("loadrmsupplierapproved", loadrmsupplierapproved)
          this.dataloadsupplierapprovedrm = loadrmsupplierapproved
        })
        this.loadUnapprovedrm(this.SupplierCode).subscribe((loadrmsupplierunapproved) => {
          console.warn("loadrmsupplierall", loadrmsupplierunapproved)
          this.dataloadsupplierunapprovedrm = loadrmsupplierunapproved
        })
        this.finishedproductload(this.SupplierCode).subscribe((finishedpdctload) => {
          console.warn("finishedpdctload", finishedpdctload)
          this.finishedproductData = finishedpdctload
          this.rowData = this.finishedproductData
        })
      }

    });
  }
  Supplierdata(suplrdata: any) {
    for (let item of suplrdata) {
      this.SupplierCode = item.code;
      this.Suppliername = item.name;
      this.address = item.Address;
      this.email = item.email;
      this.phoneNumber = item.phoneNumber;
      this.fax = item.fax;
      this.website = item.website;
      this.SAbbreviation = item.SAbbreviation;
      this.ContactPerson = item.ContactPerson;
      this.Distributor = item.Distributor;
      this.ContactNo = item.ContactNo;
      this.Notes = item.Notes;
      this.City = item.City;
      this.State = item.State;
      this.Country = item.Country;
      this.Zip = item.Zip;
      this.Supplierkey = item.SupplierKey;
      this.selectedValuerating = item.Rating
      this.Approved = item.Approved;
      if (this.Approved == "True") {
        this.Approv = true
      }
      else {
        this.Approv = false
      }
      this.Prefered = item.Prefered;
      if (this.Prefered == "true") {
        this.Prefer = true
      }
      else {
        this.Prefer = false
      }
      this.FOB = item.FOB;
      this.Terms = item.Terms;
      this.ShipVia = item.ShipVia;
      this.ExpenseAccount = item.ExpenseAccount;
      this.SupplierStatus = item.SupplierStatus;
      this.OtherShipVia = item.OtherShipVia;
      this.shipto = item.shipto;

    }
  }
  OpenTermsMaster(): void {
    const dialogRef = this.dialog.open(TermsMasterComponent, {
      width: '60%', height: '70%', disableClose: true
    });
  }
  deleteRow() {
    this.dataGrid.instance.deleteRow(this.selectedRowIndex);
    this.dataGrid.instance.deselectAll();
  }
  addRow() {
    this.dataGrid.instance.addRow();
    this.dataGrid.instance.saveEditData();
  }
  onValueChanged(e) {
    this.selectedRowIndex = e.rowIndex;
    this.dataGrid.instance.cellValue(this.selectedRowIndex, "check", false);
  }
  onRowPrepared(e) {



    this.selectedRowIndex = e.rowIndex;
    this.dataGrid.instance.cellValue(this.selectedRowIndex, "check", false);
  }

  selectedChanged(e) {
    this.selectedRowIndex = e.component.getRowIndexBykey(e.selectedRowKeys[0]);

  }
  deletesupplier(suppliername) {
    this.Supplier_delete(suppliername).subscribe((Supplierr_dlt) => {
      console.warn("Supplierr_deletedata", Supplierr_dlt)
      this.Supplier_deletedata = Supplierr_dlt
      this.showAlert4()
    })
  }
  updatesupplier(supplierkey: string, suppliername: string, supplieraddress: string) {
    var a = supplierkey;
    var b = suppliername;
    var c = supplieraddress;

  }
  supplierload(SupplierCodeda: string) {
    var splrcode = SupplierCodeda;
    let params1 = new HttpParams().set('SupplierCode', splrcode);
    return this.http.get("https://smartformulatorsupplierwebservice.azurewebsites.net/LoadSupplier", { params: params1, })

  }
  Componentload(SupplierCodeda: string) {
    var splrcode = SupplierCodeda;
    let params1 = new HttpParams().set('code', splrcode);
    return this.http.get("https://smartformulatorsupplierwebsevices2.azurewebsites.net/LoadComponent", { params: params1, })
  }



  Formuladetailsload(Suppliername: string) {
    var splrname = Suppliername;
    let params1 = new HttpParams().set('SupplierName', splrname);
    return this.http.get("https://smartformulatorsupplierwebsevices2.azurewebsites.net/LoadFormula", { params: params1, })
  }
  Audittrialload(SupplierCodeda: string) {
    var splrcode = SupplierCodeda;
    let params1 = new HttpParams().set('code', splrcode);
    return this.http.get("https://smartformulatorsupplierwebsevices2.azurewebsites.net/LoadSupplierAudit", { params: params1, })
  }
  loadallrm(SupplierCode) {
    var suppliercode = SupplierCode;
    let params1 = new HttpParams().set('code', suppliercode);
    return this.http.get("https://smartformulatorsupplierwebsevices2.azurewebsites.net/LoadAllRM", { params: params1, })
  }
  loadallrmApproved(SupplierCode) {
    var suppliercode = SupplierCode;
    let params1 = new HttpParams().set('code', suppliercode);
    return this.http.get("https://smartformulatorsupplierwebsevices2.azurewebsites.net/LoadApprovedRM", { params: params1, })
  }
  loadUnapprovedrm(SupplierCode) {
    var suppliercode = SupplierCode;
    let params1 = new HttpParams().set('code', suppliercode);
    return this.http.get("https://smartformulatorsupplierwebsevices2.azurewebsites.net/LoadUNApprovedRM", { params: params1, })
  }
  Supplier_delete(suppliername) {
    var suppliercode = this.SupplierCode;
    var suppliername = suppliername;
    let params1 = new HttpParams().set('code', suppliercode).set('name', suppliername);
    return this.http.get("https://smartformulatorsupplierwebservice.azurewebsites.net/Supplier_DeleteBtn", { params: params1, })
  }
  ClearData() {
    this.SupplierCode = '';
    this.Suppliername = '';
    this.address = '';
    this.email = '';
    this.phoneNumber ='';
    this.fax = '';
    this.website = '';
    this.SAbbreviation = '';
    this.ContactPerson = '';
    this.Distributor = '';
    this.ContactNo = '';
    this.Notes = '';
    this.City ='';
    this.State = '';
    this.Country = '';
    this.Zip = '';
    this.Supplierkey = '';
    this.Rating = ''
    this.Approved = '';
   
      this.Approv = false
  
    this.FOB = '';
    this.Terms = '';
    this.ShipVia = '';
    this.ExpenseAccount = '';
    this.SupplierStatus ='';
    this.OtherShipVia = '';
    this.shipto = '';
    this.auditrialdetails = '';
    this.dataloadsupplierallrm = '';
    this.dataloadsupplierapprovedrm=
    this.dataloadsupplierunapprovedrm = '';
    this.rowData = '';
    this.formuladetails = '';
  }
  showAlert(): void {
    if (this.isVisible) {
      return;
    }
    this.isVisible = true;
    setTimeout(() => this.isVisible = false, 5000)
  }
  showAlert2(): void {
    if (this.isVisible2) {
      return;
    }
    this.isVisible2 = true;
    setTimeout(() => this.isVisible2 = false, 5000)
  }
  showAlert4(): void {
    this.isVisible4 = true;
    setTimeout(() => this.isVisible4 = false, 5000)
  }
  setvalues(finished_searchdata: any) {
    this.i = 0;
    this.j = 0;

    for (let search of finished_searchdata) {
      this.finisheddataList[this.i] = ([{
        ProductNumber: search.ProductNumber,
        ProductName: search.ProductName,
        Category: search.Category,

      }]);
      this.i++;
    }
  }
  savefinishedpdt() {
    this.finisheddataList = [];
    this.setvalues(this.rowData);
    this.finished_saveup().subscribe((finished_save) => {
      console.warn("finished_save", finished_save)
      this.finished_save_data = finished_save
    })
  }
  finished_saveup() {
    var spplrcode = this.SupplierCode;
    var spplrname = this.Suppliername;
    var datalistdata: any = JSON.stringify(this.finisheddataList);
    let params1 = new HttpParams().set('SupplierFPjson', datalistdata).set('code', spplrcode).set('SupplierName', spplrname);
    return this.http.get("https://smartformulatorsupplierwebsevices2.azurewebsites.net/SaveFinishedProduct", { params: params1, responseType: 'text' })
  }
  finishedproductload(SupplierCode: string) {
    var splrcode = SupplierCode;
    let params1 = new HttpParams().set('code', splrcode);
    return this.http.get("https://smartformulatorsupplierwebsevices2.azurewebsites.net/LoadFinishedProducts", { params: params1, })
  }
  setvalues2(Rmsupplier_rmall: any) {
    this.i = 0;
    this.j = 0;

    for (let itemdata of Rmsupplier_rmall) {

      this.RMdataList[this.i] = ([{
        ItemCode: itemdata.ItemCode,
        GeneralItemCode: itemdata.GeneralItemCode,
        Description: itemdata.Description,
        IngredientTradeName: itemdata.IngredientTradeName,
        INNName: itemdata.INNName,
        UnitCost: itemdata.UnitCost,
        UnitName: itemdata.UnitName,
        Approved: itemdata.Approved,
        oldvalue: itemdata.oldvalue,
        ApprovalCode: itemdata.ApprovalCode,
      }]);
      this.i++;
    }
  }

  Suppliersupdate(supplierkey: string, suppliername: string) {



    this.markFormTouched(this.login_formsupp);
    if (this.login_formsupp.valid) {
      var formValues = this.login_formsupp.getRawValue;
      var operat: string = "Update";



      this.RMdataList = [];
      this.setvalues2(this.dataloadsupplierallrm);



      this.dataList[0] = ([{
        code: this.SupplierCode,
        name: suppliername,
        Address: this.address,
        email: this.email,
        phoneNumber: this.phoneNumber,
        fax: this.fax,
        website: this.website,
        SAbbreviation: this.SAbbreviation,
        ContactPerson: this.ContactPerson,
        ContactNo: this.ContactNo,
        Distributor: this.Distributor,
        Notes: this.Notes,
        Approved: this.Approved,
        City: this.City,
        State: this.State,
        Country: this.Country,
        Zip: this.Zip,
        SupplierKey: supplierkey,
        FOB: this.FOB,
        Terms: this.Terms,
        ShipVia: this.ShipVia,
        ExpenseAccount: this.ExpenseAccount,
        SupplierStatus: this.SupplierStatus,
        Prefered: 'false',
        OtherShipVia: this.OtherShipVia,
        Rating: this.Starrating,
        shipto: this.shipto,
      }]);
      this.Supplier_saveup(operat).subscribe((Supplierr_save) => {
        console.warn("Supplierr_save", Supplierr_save)
        this.Supplier_save_data = Supplierr_save
      })
      this.showAlert()
    }
    else {
      this.login_formsupp.controls['terms'].setValue(false);
    }
  }
  Suppliersaveupdate(supplierkey: string, suppliername: string, suppliercod) {

    this.markFormTouched(this.login_formsupp);
    if (this.login_formsupp.valid) {
      // You will get form value if your form is valid
      var formValues = this.login_formsupp.getRawValue;
      var operat: string = "Save";

      this.dataList[0] = ([{
        code: suppliercod,
        name: suppliername,
        Address: this.address,
        email: this.email,
        phoneNumber: this.phoneNumber,
        fax: this.fax,
        website: this.website,
        SAbbreviation: '',
        ContactPerson: this.ContactPerson,
        ContactNo: this.ContactNo,
        Distributor: this.Distributor,
        Notes: this.Notes,
        Approved: this.Approved,
        City: this.City,
        State: this.State,
        Country: this.Country,
        Zip: this.Zip,
        SupplierKey: supplierkey,
        FOB: this.FOB,
        Terms: this.Terms,
        ShipVia: this.ShipVia,
        ExpenseAccount: this.ExpenseAccount,
        SupplierStatus: this.SupplierStatus,
        Prefered: 'false',
        OtherShipVia: '',
        Rating: this.Starrating,
        shipto: this.shipto,



      }]);
      this.Supplier_saveup(operat).subscribe((Supplierr_save) => {
        console.warn("Supplierr_save", Supplierr_save)
        this.Supplier_save_data = Supplierr_save
      })
      this.showAlert()
    }
    else {
      this.login_formsupp.controls['terms'].setValue(false);
    }
  }
  markFormTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) { control.markAsTouched(); this.markFormTouched(control); }
      else { control.markAsTouched(); };
    });
  };
  Supplier_saveup(operat) {
    var username = "admin";
    var datalistdata: any = null;
     datalistdata = JSON.stringify(this.dataList);
    var RMdatalistdata: any = JSON.stringify(this.RMdataList);
    let params1 = new HttpParams().set('SupplierDetailjson', datalistdata).set('username', username).set('RMListjson', RMdatalistdata).set('Operation', operat);
    return this.http.get("https://smartformulatorsupplierwebsevices2.azurewebsites.net/SupplierSaveorUpdate", { params: params1, responseType: 'text' })
  }
  termsdataload() {
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/loadterms");
  }
  countStar(star) {

    this.selectedValuerating = star;
    this.Starrating = this.selectedValuerating.toString();
    console.log('Value of star', star);
  }
  approvedChange(event) {
    this.Approved = event.target.checked.toString();
    if (this.Approved == "true") {
      this.Approved="true"
      this.Approv = true
    }
    else {
      this.Approved = "false"; 
      this.Approv = false
    }
  }

  ngOnInit() {
    this.termsdataload().subscribe((termsdatalo) => {
      console.warn("termsdatalo", termsdatalo)
      this.termsdatalo_data = termsdatalo
    })

  }
}
export class Data {
  code: string;
  name: string;
  Address: string;
  email: string;
  phoneNumber: string;
  fax: string;
  website: string;
  SAbbreviation: string;
  ContactPerson: string;
  ContactNo: string;
  Distributor: string;
  Notes: string;
  Approved: string;
  City: string;
  State: string;
  Country: string;

  Zip: string;
  SupplierKey: string;
  FOB: string;
  Terms: string;
  ShipVia: string;
  ExpenseAccount: string
  SupplierStatus: string;
  Prefered: string;

  OtherShipVia: string;
  Rating: string;
  shipto: string;

}
export class Data1 {
  ItemCode: string;
  GeneralItemCode: string;
  Description: string;
  IngredientTradeName: string;
  INNName: string;
  UnitCost: string;
  UnitName: string;
  Approved: string;
  oldvalue: string;
  ApprovalCode: string;
}
export class Data2 {
  ProductNumber: string;
  ProductName: string;
  Category: string;

}
