
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-supplier-listing',
  templateUrl: './supplier-listing.component.html',
  styleUrls: ['./supplier-listing.component.css']
})
export class SupplierListingComponent implements OnInit {
  dataresultLoadSupplier: any;
  isLoading = true;
  issearchform: boolean = false;
  SupplierKey: string;
  sname: string;
  suppliercode: any;
  address: any;
  Email: any;
  phone: any;
  approved: any;
  rating: any;
  searchitems: any[];
  dialogRef: any;
  dataresultLoadManufacturer: Object;
  ManufacturerKey: string;
  name: string;
  city: string;
  state: string;
  country: string;
    Manufacturer: any;
    Mname: any;
    MCity: any;
    MState: any;
    MCountry: any;
    MZip: any;
    Memail: any;

  constructor(public dialog: MatDialog, private http: HttpClient) { }

  LoadSupplier() {
    var Supplier: string = this.SupplierKey;
    var suppliername: string = this.sname;
    let params1 = new HttpParams().set('SupplierKey', Supplier).set('suppliername', suppliername);

    return this.http.get("https://supplierlistloadwebservices.azurewebsites.net/suppliersearchload", { params: params1 });
  }
  setvaluessupplier(SupplierList_search) {
    this.suppliercode = SupplierList_search.code;
    this.SupplierKey = SupplierList_search.SupplierKey;
    this.sname = SupplierList_search.sname;
    this.address = SupplierList_search.Address;
    this.Email = SupplierList_search.email;
    this.phone = SupplierList_search.phoneNumber;
    this.approved = SupplierList_search.Approved;
    this.rating = SupplierList_search.Rating;


    this.searchitems = [this.suppliercode, this.SupplierKey, this.sname, this.address, this.Email, this.phone, this.approved,this.rating]
  }
  closesupplier() {

    this.dialogRef.close(this.searchitems);

  }

  LoadManufacturer() {
    var Manufacturer: string = this.ManufacturerKey;
    var Mname: string = this.name;
    var Mcity: string = this.city;
    var Mstate: string = this.state;
    var Mcountry: string = this.country;
    let params1 = new HttpParams().set('ManufacturerKey', Manufacturer).set('name', Mname)
      .set('city', Mcity).set('state', Mstate).set('country', Mcountry);
    return this.http.get("https://supplierlistloadwebservices.azurewebsites.net/Manufacturersearchload", { params: params1 });
  }
  setvaluesManufacturer(Manufacturer_search) {
    this.Manufacturer = Manufacturer_search.ManufacturerKey;
    this.Mname = Manufacturer_search.name;
    this.MCity = Manufacturer_search.City;
    this.MState = Manufacturer_search.State;
    this.MCountry = Manufacturer_search.Country;
    this.MZip = Manufacturer_search.Zip;
    this.phone = Manufacturer_search.phoneNumber;
    this.Memail = Manufacturer_search.email;


    this.searchitems = [this.Manufacturer, this.Mname, this.MCity, this.MState, this.MCountry, this.MZip, this.phone, this.Memail]
  }
  close() {

    this.dialogRef.close(this.searchitems);

  }


  ngOnInit() {
    this.LoadSupplier().subscribe((resultLoadSupplier) => {
      this.isLoading = false;
      console.warn("resultLoadSupplier", resultLoadSupplier)
      this.dataresultLoadSupplier = resultLoadSupplier
    })
    this.LoadManufacturer().subscribe((resultLoadManufacturer) => {
      this.isLoading = false;
      console.warn("resultLoadManufacturer", resultLoadManufacturer)
      this.dataresultLoadManufacturer = resultLoadManufacturer
    })
  }

}
