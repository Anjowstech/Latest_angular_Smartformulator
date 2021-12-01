import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchSupplierComponent } from './search-supplier/search-supplier.component';
import { TermsMasterComponent } from './terms-master/terms-master.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {
  public isVisible: boolean = false;
  public isVisible2: boolean = false;
  Supplierkey: string;
  Suppliername: string;
  SupplierCode: string;
  supData: any;
  code: string;
  name: string;
  phoneNumber: string;
  address: string;
  customertype: string;
  phone: string;
  email: string;
  fax: string;
  addedby: string;
  website: string;
  SAbbreviation: string;
  ContactPerson: string;
  Distributor: string;
  ContactNo: string;
  Notes: string;
  City: string;
  State: string;
  Country: string;
  Zip: string;
  SupplierKey: string;
  Rating: string;
  Approved: string="False";
  Approv: boolean;
  Prefered: string;
  Prefer: boolean;
  FOB: string;
  fob: string;
  Terms: string;
  ShipVia: string;
  ExpenseAccount: string;
  SupplierStatus: string;
  OtherShipVia: string;
  shipto: string;
  operation: string;
  suplrdata: any = [];
  Supplier_save_data: any;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number[] = [1, 2, 3, 4, 5];
  termsdatalo_data: any;
  login_formsupp: FormGroup;
  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder) {
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
      this.Supplierkey = result[0];
      this.Suppliername = result[1];
      this.SupplierCode = result[2];

      this.supplierload(this.SupplierCode).subscribe((supplierload) => {
        console.warn("supplierload", supplierload)
        this.supData = supplierload
        this.Supplierdata(this.supData)
      })



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
      this.Rating = item.Rating
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
  Suppliersaveupdate(supplierkey: string, suppliername: string, suppliercod) {

    this.markFormTouched(this.login_formsupp);
    if (this.login_formsupp.valid) {
      // You will get form value if your form is valid
      var formValues = this.login_formsupp.getRawValue;
      var operat: string = "Save";
      this.Supplier_saveup(supplierkey, suppliername, suppliercod, operat).subscribe((Supplierr_save) => {
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
  Supplier_saveup(supplierkey, suppliername, suppliercod,operat) {
    this.operation = operat
    var appr = this.Approved;
    var oprate = this.operation;
    var suppliekey = supplierkey;
    var supplierna = suppliername;
    var suppliecod = suppliercod;


    let params1 = new HttpParams().set('code', suppliecod).set('name', supplierna).set('SupplierKey', suppliekey).set('Approved', appr).set('Operation', oprate);
    return this.http.get("https://smartformulatorsupplierwebservice.azurewebsites.net/SupplierSaveorUpdate", { params: params1 })
  }
  Suppliersupdate(supplierkey: string, suppliername: string) {

    this.markFormTouched(this.login_formsupp);
    if (this.login_formsupp.valid) {
      var operat: string = "Update";
      this.Supplier_saveup(supplierkey, suppliername, this.SupplierCode, operat).subscribe((Supplierr_save) => {
        console.warn("Supplierr_update", Supplierr_save)
        this.Supplier_save_data = Supplierr_save
      })
      this.showAlert2();
    }
    else {
      this.login_formsupp.controls['terms'].setValue(false);
    }

  }
  
  termsdataload() {
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/loadterms");
  }
  countStar(star) {
    this.selectedValue = star;
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
