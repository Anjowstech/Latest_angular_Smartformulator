import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { SearchCustomerComponent } from 'src/app/formula-lookup/customer-details/search-customer/search-customer.component';
import { SearchINCINameComponent } from 'src/app/raw-material/search-inci-name/search-inci-name.component';
import { SearchProductsComponent } from 'src/app/formula-lookup/customer-details/search-products/search-products.component';
import { AddClientLocationComponent } from 'src/app/formula-lookup/customer-details/add-client-location/add-client-location.component';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { DatagridcomponentComponent } from './datagridcomponent/datagridcomponent.component';
import { SalesRepNameComponent } from './sales-rep-name/sales-rep-name.component';
import { TermsMasterComponent} from 'src/app/raw-material/add-supplier/terms-master/terms-master.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DatePipe } from '@angular/common';


import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { formatDate } from '@angular/common';
import { MessageBoxYesnoComponent } from '../../message-box-yesno/message-box-yesno.component';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
@NgModule({
  imports: [

    DxDataGridModule

  ],
  declarations: [DatagridcomponentComponent],

})
export class CustomerDetailsComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  Dateforma = [
    { dateform: "MM/dd/yyyy" },
    { dateform: "MM/dd/yyy" },
    { dateform: "MM/dd/y" },
    { dateform: "No Expiry Date" },
  ];
  Unitforma = [
    { Unitform: "Kg" },
    { Unitform: "Lb" },
  ];
  issearchcustomer: boolean = true;
  issearchcustomersave: boolean = false;
  isstateus: boolean = false;
  tier1: string;
  tier2: string;
  tier3: string;
  tier4: string;
  focusrowkey: Number = 1;
  Tier1Range: string;
  Tier2Range: string;
  Tier3Range: string;
  Tier4Range: string;
  customerkey: string;
  custmrcode: string;
  ProductName: string;
  FormulaCode: string;
  customername: string;
  customercode: string="";
  customercodepref: string;
  ProductCode: string;
  cusData: any;
  custgrid: any;
  active: any = '1';
  dataloadaudittrialcustomer: any=null;
  /* custkey: string;*/
  custname: string;
  fax: string = "";
  cuskey: string;
  /* custnam: string;*/
  address: string = "";
  customertype: string;
  phone: string = "";
  emailref: string = "";
  addeddt: string = "";
  addedby: string = "";
  updateddt: string = "";
  updatedby: string = "";
  caabrevation: string = "";
  contactfperson: string = "";
  contactsperson: string = "";
  contacttperson: string = "";
  contactfmail: string = "";
  contactsmail: string = "";
  contacttmail: string = "";
  cc1: string;
  cc2: string;
  cc3: string;
  FormulaName: string;
  ProductNumber: string;
  fillinginstruction: string = "";
  labelinginstruction: string = "";
  specialinstruction: string = "";
  attachment: string = "";
  terms: string = "";
  fob: string = "";
  shipvia: string = "";
  salesperson: string = "N/A";
  creditcardno: string = "";
  creditcardtype: string = "";
  expirydate: string = Date.now().toString();
 
  creditlimit: string = '0';
  salesregion: string = "";
  salesrepinitial: string = "";
  city: string = "";
  state: string = "";
  country: string = "United States of America";

  zip: string = "";
  custmrkey: string = "";
  saddress: string = "";
  semail: string = "";
  notes: string = "";
  custocode: string;
  item: string;
  Inciname: string;
  countrydatalo_data: any;
  termsdatalo_data: any;
  statedatalo_data: any;
  creditcarddatalo_data: any;
  salesrepdatalo_data: any;
  Customer_save_data: any;
  loadbatchszizes: any;
  rowData4: any = [];
  cstmerdata: any = [];
  selectedRowIndex = -1;
  selectedRowIndexvali = -1;
  login_form: FormGroup;
  rowData: any = [];
  rowData1: any = [];
  i: number;
  j: number;
  dataList: Data[][] = [];
  DataListerp: erpData[][] = [];
  Datavalidatedbatches: validatedbatchesdata[][] = [];
  Datapricewhole: pricewholedata[][] = [];
  Datavolumepricing: volumepricingdata[][] = [];
  Datamaincustomer: customerdatamain[][] = [];
  Customerdetail: any = [];
  searchitems: any = [];
  shippingdata: any;
  Customer_pref_data: any;
  locationname: string = "";
  Address: string = "";
  City: string = "";
  clientid: string;
  customcode: string;
  State: string = "";
  Country: string = "";
  zipcode: string = "";
  contactno: string = "";
  contactperson: string = "";
  Email: string = "";
  Fax: string = "";
  locationnote: string = "";
  ValidatedSize: string = "";
  telepho: string = "";
  delclient_loc_data: any;
  default: string;
  salespersondatalo_data: any;
  erpproductscoa: any;
  rowData6: any = [];
  selectedRowIndexListinggrid = -1;
  pricedetailgrid_data: any=[];
  retail_wholesale_rowdata: any = [];
  retailwholeData: any;
  pricentryrowdata: any = [];
  priclistingrowdata: any = [];
  bindcustomerprefdata: any;
  erpunitload_data: any;
  selectedRowsData: any = [];
  selectedtier1: string = 'Tier1';
  selectedtier2: string = 'Tier2';
  selectedtier3: string = 'Tier3';
  selectedtier4: string = 'Tier4';
  VPdetailrowdata: any;
  TieredProduct_Id: string = '0';
  volumePricingloadlistdetails_data: any;
  FillingAttachment: string = "";
  FillingAttachment2: string = "";
  LabelAttachment: string = "";
  SCity: string = "";
  SContactNo: string = "";
  SContactPerson: string = "";
  SCountry: string = "";
  SEmail: string = "";
  SFax: string = "";
  SPhoneNo: string = "";
  SState: string = "";
  SZip: string = "";
  Shiptolocation: string = "";
  Tier1: string = '0';
  Tier2: string = '0';
  Tier3: string = '0';
  Tier4: string = '0';
  Document1: string = "";
  Document2: string = "";
  Document3: string = "";
  Document4: string = "";
  Document5: string = "";
  Document6: string = "";
  Document7: string = "";
  Document8: string = "";
  Document9: string = "";
  Document10: string = "";
  Document11: string = "";
  Document12: string = "";
  Document13: string = "";
  Document14: string = "";
  Document15: string = "";
  Document16: string = "";
  Document17: string = "";
  Document18: string = "";
  Document19: string = "";
  Document20: string = "";
  Customer_deletedata: any;
  loadcustomerstate: any;
  Statefull: string;
  loadsalesrepinitial: any;
  deleteddata: string;
  deleterowdelete: string;
  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService) {
    this.login_form = fb.group({
      'custokey': ['', Validators.required],
      'custoname': ['', Validators.required],

      'terms': [false]

    });
  }
  handleFileInput(files: FileList) {
    var filebrowse = files.item.length;
    this.Document1 = files.item(0).name;
  }
  handleFileInput2(files: FileList) {
    var filebrowse = files.item.length;
    this.Document2 = files.item(0).name;
  }
  handleFileInput3(files: FileList) {
    var filebrowse = files.item.length;
    this.Document3 = files.item(0).name;
  }
  handleFileInput4(files: FileList) {
    var filebrowse = files.item.length;
    this.Document4 = files.item(0).name;
  }
  handleFileInput5(files: FileList) {
    var filebrowse = files.item.length;
    this.Document5 = files.item(0).name;
  }
  handleFileInput6(files: FileList) {
    var filebrowse = files.item.length;
    this.Document6 = files.item(0).name;
  }
  handleFileInput7(files: FileList) {
    var filebrowse = files.item.length;
    this.Document7 = files.item(0).name;
  }
  handleFileInput8(files: FileList) {
    var filebrowse = files.item.length;
    this.Document8 = files.item(0).name;
  }
  handleFileInput9(files: FileList) {
    var filebrowse = files.item.length;
    this.Document9 = files.item(0).name;
  }
  handleFileInput10(files: FileList) {
    var filebrowse = files.item.length;
    this.Document10 = files.item(0).name;
  }
  handleFileInput11(files: FileList) {
    var filebrowse = files.item.length;
    this.Document11 = files.item(0).name;
  }
  handleFileInput12(files: FileList) {
    var filebrowse = files.item.length;
    this.Document12 = files.item(0).name;
  }
  handleFileInput13(files: FileList) {
    var filebrowse = files.item.length;
    this.Document13 = files.item(0).name;
  }
  handleFileInput14(files: FileList) {
    var filebrowse = files.item.length;
    this.Document14 = files.item(0).name;
  }
  handleFileInput15(files: FileList) {
    var filebrowse = files.item.length;
    this.Document15 = files.item(0).name;
  }
  handleFileInput16(files: FileList) {
    var filebrowse = files.item.length;
    this.Document16 = files.item(0).name;
  }
  handleFileInput17(files: FileList) {
    var filebrowse = files.item.length;
    this.Document18 = files.item(0).name;
  }
  handleFileInput19(files: FileList) {
    var filebrowse = files.item.length;
    this.Document19 = files.item(0).name;
  }
  handleFileInput20(files: FileList) {
    var filebrowse = files.item.length;
    this.Document20 = files.item(0).name;
  }
  handleFileInputattachment(files: FileList) {
    var filebrowse = files.item.length;
    this.attachment = files.item(0).name;
  }
  handleFileInputattachmentLabelAttachment(files: FileList) {
    var filebrowse = files.item.length;
    this.LabelAttachment = files.item(0).name;
  }
  handleFileInputattachmentFillingAttachment1(files: FileList) {
    var filebrowse = files.item.length;
    this.FillingAttachment = files.item(0).name;
  }
  handleFileInputattachmentFillingAttachment2(files: FileList) {
    var filebrowse = files.item.length;
    this.FillingAttachment2 = files.item(0).name;
  }
 
  Opencustomer(): void {
    const dialogRef = this.dialog.open(SearchCustomerComponent, {
      width: '60%', height: '70%', disableClose: true
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {

        this.issearchcustomer = false;
        this.issearchcustomersave = true;
        this.customerkey = result[0];
        this.customername = result[1];
        this.customercode = result[2];
        this.sendcustcode(this.customercode);
      }
      this.customerload(this.customercode).subscribe((customrload) => {
        console.warn("customerload", customrload)
        this.cusData = customrload
        this.customerdata(this.cusData)

      })
      this.loadvalidatedotcbatchsizes(this.customercode).subscribe((finishedpdctload) => {
        console.warn("finishedpdctload", finishedpdctload)
        this.loadbatchszizes = finishedpdctload
        this.rowData4 = this.loadbatchszizes
      })
      this.shippinglocationload(this.customercode).subscribe((shippingload) => {
        console.warn("shippingload", shippingload)
        this.shippingdata = shippingload
        this.shipdata(this.shippingdata)

      })
      this.loaderpproductscoaexpirydate(this.customercode).subscribe((erpproducts) => {
        console.warn("erpproductcoaexpiry", erpproducts)
        this.erpproductscoa = erpproducts
        this.rowData6 = this.erpproductscoa
      })
      this.bindcustomerpre(this.customercode).subscribe((bindcustomerpref) => {
        console.warn("bindcustomerpref", bindcustomerpref)
        this.bindcustomerprefdata = bindcustomerpref
        this.rowData = this.bindcustomerprefdata
        //this.bindcustomerprefer(this.bindcustomerprefdata);
      })
      this.retalewholesaleload(this.customercode).subscribe((retailwholeload) => {
        console.warn("retailwholeload", retailwholeload)
        this.retailwholeData = retailwholeload
        this.retail_wholesale_rowdata = this.retailwholeData
      })
      this.erpunitload().subscribe((erpunitload) => {
        console.warn("erpunitload", erpunitload)
        this.erpunitload_data = erpunitload
      })
      this.VolumePricingdetails(this.customercode).subscribe((volumePricingdetails) => {
        console.warn("volumePricingdetails", volumePricingdetails)
        this.VPdetailrowdata = volumePricingdetails

      })

      this.TieredVolumePricing(this.customercode).subscribe((volumePricingload) => {
        console.warn("volumePricingload", volumePricingload)
        this.pricentryrowdata = volumePricingload

      })
      this.bindtiredvolumpricelist(this.customercode).subscribe((volumePricingloadlistdetails) => {
        console.warn("volumePricingloadlistdetails", volumePricingloadlistdetails)
        this.volumePricingloadlistdetails_data = volumePricingloadlistdetails

      })
      this.audittrialloadfunction(this.customercode).subscribe((loadcustomeraudittrial) => {
        console.warn("loadcustomeraudittrial", loadcustomeraudittrial)
        this.dataloadaudittrialcustomer = loadcustomeraudittrial
      })


    });

  }
  deletetierrange() {
    this.dataGrid.instance.deleteRow(this.selectedRowIndex);
    if (this.selectedRowIndex == -1) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Select a row to delete.' } });
    }
    this.dataGrid.instance.deselectAll();
   
  }
  DeleteClient_location() {
    if (this.customerkey == "" || this.customerkey == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Enter Customerkey.' } });
    }
    else if (this.customername == "" || this.customername == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Enter Customername.' } });
    }
    else {
      let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '30%', height: '15%', data: { displaydatagrid: 'This will delete the entry.Do you really want to delete this entry?' }, disableClose: true });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed: ${result}');
        this.deleteddata = result;
        if (this.deleteddata == "false") { }
        else {
          this.DeleteClient_locationdlt().subscribe((DeleteClient_Loc) => {
            console.warn("SaveClient_Loc", DeleteClient_Loc)
            this.delclient_loc_data = DeleteClient_Loc
            if (this.delclient_loc_data == "Client location details are deleted successfully") {
              this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Client location details are deleted successfully.' } });
            }
          })
          this.wait(3000);
          this.shippinglocationload(this.customercode).subscribe((shippingload) => {
            console.warn("shippingload", shippingload)
            this.shippingdata = shippingload
          })
        }




      });
    }
  }
  sendcustcode(customercode) {
    this.datashare.sendcustomercode(customercode);
  }
  DeleteClient_locationdlt() {
    var clid = this.clientid;
    let params1 = new HttpParams().set('CLId', clid);
    return this.http.get("https://smartformulatorcustomerwebservice3.azurewebsites.net/deleteclientlocation", { params: params1, responseType:'text' })
  }
  bindcustomerprefer(bindcustomerprefdata) {
    for (let item of bindcustomerprefdata) {
      var ban: string = item.banned;

    }
  }
  Opensalesperson(): void {
    const dialogRef = this.dialog.open(SalesRepNameComponent, {
      width: '60%', height: '70%', disableClose: true
    });
  }
  OpenTermsMaster(): void {
    const dialogRef = this.dialog.open(TermsMasterComponent, {
      width: '60%', height: '70%', disableClose: true
    });
  }
  onRowPrepared2(e) {

  }
  retalewholesaleload(cstmrCode: string) {
    var custcode = cstmrCode;
    let params1 = new HttpParams().set('cuscode', custcode);
    return this.http.get("https://smartformulatorcustomerwebservice3.azurewebsites.net/CustomerPP", { params: params1, })
  }
  TieredVolumePricing(cstmrCode: string) {
    var custcode = cstmrCode;
    let params1 = new HttpParams().set('CusCode', custcode);
    return this.http.get("https://smartformulatorcustomerwebservice4.azurewebsites.net/BindVolumePricingMaster", { params: params1, })
  }
  VolumePricingdetails(cstmrCode: string) {
    var custcode = cstmrCode;
    var Product_Id = this.TieredProduct_Id;

    let params1 = new HttpParams().set('CusCode', custcode).set('TieredProduct_id ', Product_Id);
    return this.http.get("https://smartformulatorcustomerwebservice4.azurewebsites.net/BindVolumePricingDetails", { params: params1, })
  }
  erpunitload() {
    return this.http.get("https://smartformulatorcustomerwebservice3.azurewebsites.net/LoadUnits");
  }
  customerdata(cstmrdata: any) {
    for (let item of cstmrdata) {
      this.customerkey = item.CustomerKey;
      this.customercode = item.CusCode;
      this.customername = item.CusName;
      this.address = item.Address;
      this.customertype = item.CustomerType;
      this.phone = item.Phone;
      this.emailref = item.Email;
      this.fax = item.FAX;
      this.contactfperson = item.ContactFPerson;
      this.contactsperson = item.ContactSPerson;
      this.contacttperson = item.ContactTPerson;
      this.fob = item.FOB;
      this.city = item.City;
      this.zip = item.Zip;
      this.state = item.State;
      this.salesregion = item.SalesRegion;
      this.contactfmail = item.ContactFEmail;
      this.contactsmail = item.ContactSEmail;
      this.contacttmail = item.ContactTEmail;
      this.salesrepinitial = item.SalesRepInitial;
      this.creditlimit = item.CreditLimit;
      this.notes = item.Notes;
      this.addeddt = item.AddedDT;
      this.addedby = item.AddedBy;
      this.updateddt = item.UpdatedDT;
      this.updatedby = item.UpdatedBy;
      this.caabrevation = item.CAbbreviation;
      this.cc1 = item.cc1;
      this.cc2 = item.cc2;
      this.cc3 = item.cc3;
      this.fillinginstruction = item.FillingInstruction;
      this.labelinginstruction = item.LabelingInstruction;
      this.specialinstruction = item.SpecialInstruction;
      this.attachment = item.Attachment;
      this.terms = item.Terms;
      this.shipvia = item.Shipvia;
      this.salesperson = item.SalesPerson;
      this.creditcardno = item.CreditCardNo;
      this.creditcardtype = item.CreditCardType;
    
      this.expirydate = new DatePipe('en-US').transform(item.ExpiryDate, 'yyyy-MM');


      this.country = item.Country;
      if (this.country == "United States of America") {
        this.isstateus = false;
      }
      else {
        this.isstateus = true;
      }
      this.custmrkey = item.CustomerKey;
      this.saddress = item.SAddress;
      this.semail = item.SEmail;

      this.FillingAttachment = item.FillingAttachment;
      this.FillingAttachment2 = item.FillingAttachment2;
      this.LabelAttachment = item.LabelAttachment;
      this.City = item.SCity;
      this.contactno = item.SContactNo;
      this.contactperson = item.SContactPerson;
      this.Country = item.SCountry;
      this.Email = item.SEmail;
      this.Fax = item.SFax;
      this.telepho = item.SPhoneNo;
      this.State = item.SState;
      this.Statefull = item.stateabbrv;
      this.zipcode = item.SZip;
      this.Shiptolocation = item.Shiptolocation;
      this.Tier1 = item.Tier1;
      this.Tier2 = item.Tier2;
      this.Tier3 = item.Tier3;
      this.Tier4 = item.Tier4;
      this.Document1 = item.Document1
      this.Document2 = item.Document2
      this.Document3 = item.Document3
      this.Document4 = item.Document4
      this.Document5 = item.Document5
      this.Document6 = item.Document6
      this.Document7 = item.Document7
      this.Document8 = item.Document8
      this.Document9 = item.Document9
      this.Document10 = item.Document10
      this.Document11 = item.Document11
      this.Document12 = item.Document12
      this.Document13 = item.Document13
      this.Document14 = item.Document14
      this.Document15 = item.Document15
      this.Document16 = item.Document16
      this.Document17 = item.Document17
      this.Document18 = item.Document18
      this.Document19 = item.Document19
      this.Document20 = item.Document20

    }

  }
  setstates(event) {
    var state = event.target.value;
    this.stateloadfunction(state).subscribe((loadcustomerstate) => {
      console.warn("loadcustomerstate", loadcustomerstate)
      this.loadcustomerstate = loadcustomerstate
      this.Statefull = this.loadcustomerstate
    })
  }
  setsalesrepinitial(event) {
    var staterepinitial = event.target.value;
    this.salesrepinitialloadfunction(staterepinitial).subscribe((loadsalesrepini) => {
      console.warn("loadsalesrepini", loadsalesrepini)
      this.loadsalesrepinitial = loadsalesrepini
      this.salesrepinitial = this.loadsalesrepinitial
    })
  }
  setcountry(event) {
    this.Statefull = "";
    this.country = event.target.value;
    if (this.country == "United States of America") {
      this.isstateus = false;
    }
    else {
      this.isstateus = true;
    }
  }
  stateloadfunction(state: string) {
    var stateabbr: any = state;
    let params1 = new HttpParams().set('stateabbrv', stateabbr);
    return this.http.get("https://formulalookupwebservice12.azurewebsites.net/customerstateload", { params: params1, responseType: 'text' });
  }
  salesrepinitialloadfunction(salesrep: string) {
    var salesrepinitial: any = salesrep;
    let params1 = new HttpParams().set('salesrepname', salesrepinitial);
    return this.http.get("https://smarformulatorformulalookupwebservice3.azurewebsites.net/salesrepnameload", { params: params1, responseType: 'text' });
  }
  customerload(customercode: string) {
    var custcode = customercode;

    let params1 = new HttpParams().set('cuscode', custcode);
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/displaydetails", { params: params1, })

  }
  setvalues(shippingdata_search) {
    this.clientid = shippingdata_search.CLId;
    this.customcode = shippingdata_search.CusCode;
    this.locationname = shippingdata_search.LocationName;
    this.Address = shippingdata_search.Address;
    this.City = shippingdata_search.City;
    this.State = shippingdata_search.State;
    this.Country = shippingdata_search.Country;
    this.zipcode = shippingdata_search.ZipCode;
    this.contactno = shippingdata_search.Contactno;
    this.contactperson = shippingdata_search.Contactperson;
    this.Email = shippingdata_search.Emailid;
    this.Fax = shippingdata_search.Fax;
    this.locationnote = shippingdata_search.LocationNotes;
    this.telepho = shippingdata_search.Telephone;
    this.searchitems = [this.locationname, this.Address, this.City, this.State, this.Country, this.zipcode, this.clientid, this.customcode, this.contactno, this.contactperson, this.Email, this.Fax, this.locationnote, this.telepho];
    this.datashare.sendaddlocation(this.searchitems);
    this.OpenAddClientLocation();
  }

  insert_tier4() {
    this.Tier4Range = 'Above ' + this.Tier3;
    this.Tier4 = 'Above ' + this.Tier3;
  }
  setvalues2(customer_searchdata2: any) {
    this.i = 0;
    this.j = 0;

    for (let search of customer_searchdata2) {
      if (search.CusCode == undefined) {
        search.CusCode = this.customercode;
        this.dataList[this.i] = ([{
          cuscodedata: search.CusCode,
          itemdata: search.incicode,
          incinamedata: search.INCIName,
          usagedata: search.usage,
          foadata: search.foa,
          commentsdata: search.comments,
          banneddata: search.banned,
        }]);
        this.i++;
      }
      else if (search.comments == undefined) {
        this.dataList[this.i] = ([{
          cuscodedata: search.CusCode,
          itemdata: search.incicode,
          incinamedata: search.INCIName,
          usagedata: search.usage,
          foadata: search.foa,
          commentsdata: "",
          banneddata: search.banned,
        }]);
        this.i++;
      }
      else if (search.foa == undefined) {
        this.dataList[this.i] = ([{
          cuscodedata: search.CusCode,
          itemdata: search.incicode,
          incinamedata: search.INCIName,
          usagedata: search.usage,
          foadata: "",
          commentsdata: search.comments,
          banneddata: search.banned,
        }]);
        this.i++;
      }
      else {
        this.dataList[this.i] = ([{
          cuscodedata: search.CusCode,
          itemdata: search.incicode,
          incinamedata: search.INCIName,
          usagedata: search.usage,
          foadata: search.foa,
          commentsdata: search.comments,
          banneddata: search.banned,
        }]);
        this.i++;
      }
      

    }

  }
  setvalueserp(customer_searcherpdata: any) {
    this.i = 0;
    this.j = 0;

    for (let search of customer_searcherpdata) {

      this.DataListerp[this.i] = ([{
        productcode: search.ProductCode,
        productnumber: search.ProductNumber,
        productname: search.ProductName,
        formulacode: search.FormulaCode,
        formulaname: search.FormulaName,
        COADTFORMAT: search.COADTFORMAT,
        DateFormatOld: search.COADTFORMAT,
        // DateFormatOld: search.DateFormatOld,
      }]);
      this.i++;

    }

  }
  setvaluespricewhole(customer_pricewhole: any) {
    this.i = 0;
    this.j = 0;

    for (let search of customer_pricewhole) {
      if (search.CPP_Id == undefined || search.CPP_Id == null) {
        search.CPP_Id = '0';
      }
      this.Datapricewhole[this.i] = ([{
        productcode: search.ProductCode,
        productnumber: search.ProductNumber,
        productname: search.ProductName,
        unit: search.Unit,
        unitsize: search.UnitSize,
        wholesalecost: search.WholesaleCost,
        retailcost: search.RetailCost,
        distributorcost: search.DistributorCost,
        soledistributorcost: search.SoleDistributorCost,
        cppid: search.CPP_Id,
        linenumber: search.Linenumber,

      }]);
      this.i++;

    }

  }
  setvaluesvalidatedbatches(customer_validatedbatches: any) {
    this.i = 0;
    this.j = 0;

    for (let search of customer_validatedbatches) {

      this.Datavalidatedbatches[this.i] = ([{
        productcode: search.ProductCode,
        productnumber: search.ProductNumber,
        productname: search.ProductName,
        unit: search.Unit,
        validatedsize: search.ValidatedSize,

      }]);
      this.i++;

    }

  }
  setvaluesvolupricing(customer_volumepricing: any) {
    this.i = 0;
    this.j = 0;

    for (let search of customer_volumepricing) {

      this.Datavolumepricing[this.i] = ([{
        cpp_id: '0',
        productcode: '0',
        productnumber: search.ProductNumber,
        productname: search.ProductName,
        unit: search.Unit,
        unitsize: search.UnitSize,
        tier1value: search.Tier1Value,
        tier2value: search.Tier2Value,
        tier3value: search.Tier3Value,
        tier4value: search.Tier4Value,
        TieredProduct_id: search.TieredProduct_id,
        linenumber: search.linenumber,

      }]);
      this.i++;

    }

  }

  setvalues3(shippingdata_search) {
    this.clientid = shippingdata_search.CLId;
    this.customcode = shippingdata_search.CusCode;
    this.locationname = shippingdata_search.LocationName;
    this.Address = shippingdata_search.Address;
    this.City = shippingdata_search.City;
    this.State = shippingdata_search.State;
    this.Country = shippingdata_search.Country;
    this.zipcode = shippingdata_search.ZipCode;
    this.contactno = shippingdata_search.Contactno;
    this.contactperson = shippingdata_search.Contactperson;
    this.Email = shippingdata_search.Emailid;
    this.Fax = shippingdata_search.Fax;
    this.locationnote = shippingdata_search.LocationNotes;
    this.telepho = shippingdata_search.Telephone;
  }
  shipdata(shipdetails: any) {
    for (let item of shipdetails) {
      if (item.DefaultLocation == "True") {
        this.default = item.DefaultLocation;
        this.locationname = item.LocationName;
        this.Address = item.Address;
        this.City = item.City;
        this.State = item.State;
        this.Country = item.Country;
        this.zipcode = item.ZipCode;
        this.contactno = item.Contactno;
        this.contactperson = item.Contactperson;
        this.Email = item.Emailid;
        this.Fax = item.Fax;
        this.locationnote = item.LocationNotes;
        this.telepho = item.Telephone;
      }
      else {



      }
    }
  }
  addRow() {
    this.dataGrid.instance.addRow();
    this.dataGrid.instance.saveEditData();


    // this.dataGrid.instance.cellValue(this.selectedRowIndex, "check", false);
  }
  updateCell(rowIndex, dataField, value) {
    this.dataGrid.instance.cellValue(rowIndex, dataField, value);
    // this.dataGrid.instance.saveEditData();
  }
  Opensearchproducts(e): void {
    var indexdataprod: any = e.rowIndex;

    const dialogRef = this.dialog.open(SearchProductsComponent, {
      width: '70%', height: '80%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {



        this.ProductCode = result[0];

        this.ProductName = result[2];
        this.FormulaCode = result[4];
        this.FormulaName = result[5];
        // this.COADTFORMAT = result[2];
        this.item = result[1];
        this.selectedRowIndex = indexdataprod;
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "ProductCode", this.ProductCode);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "ProductNumber", this.item);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "ProductName", this.ProductName);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "FormulaCode", this.FormulaCode);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "FormulaName", this.FormulaName);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "COADTFORMAT", 'MM/dd/yyyy');
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "Unit", 'Kg');
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "RetailCost", '0.00000');
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "DistributorCost", '0.00000');
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "SoleDistributorCost", '0.00000');
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "WholesaleCost", '0.00000');
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "ValidatedSize", '0.00');
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "banned", false);
        this.dataGrid.instance.saveEditData();
      }
    });




  }
  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
  Opensearchproductspricing(e): void {
    var indexdataprod: any = e.rowIndex;

    const dialogRef = this.dialog.open(SearchProductsComponent, {
      width: '70%', height: '80%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {



        this.ProductCode = result[0];

        this.ProductName = result[2];
        this.FormulaCode = result[4];
        this.FormulaName = result[5];
        // this.COADTFORMAT = result[2];
        this.item = result[1];
        this.selectedRowIndex = indexdataprod;
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "ProductCode", this.ProductCode);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "ProductNumber", this.item);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "ProductName", this.ProductName);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "FormulaCode", this.FormulaCode);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "FormulaName", this.FormulaName);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "COADTFORMAT", '');
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "Unit", 'Kg');
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "UnitSize", '0.00');
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "RetailCost", '0.00000');
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "DistributorCost", '0.00000');
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "SoleDistributorCost", '0.00000');
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "WholesaleCost", '0.00000');
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "ValidatedSize", '0.00');
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "banned", false);
        this.dataGrid.instance.saveEditData();
      }
    });




  }

  Opensearchproductsforotcvalidate(e): void {
    var indexdataprod: any = e.rowIndex;

    const dialogRef = this.dialog.open(SearchProductsComponent, {
      width: '60%', height: '70%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {



        this.ProductNumber = result[0];
        this.ProductName = result[2];
        this.ValidatedSize = result[3];
        //this.FormulaCode = result[4];
        //this.FormulaName = result[5];
        //this.item = result[1];
        this.item = result[1];
        this.selectedRowIndex = indexdataprod;
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "ProductCode", this.ProductNumber);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "ProductNumber", this.item);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "ProductName", this.ProductName);
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "ValidatedSize", '0.00');
        this.dataGrid.instance.cellValue(this.selectedRowIndex, "Unit", 'Kg');
        this.dataGrid.instance.saveEditData();
      }
    });




  }
  addRowerp() {
    this.dataGrid.instance.addRow();
    this.dataGrid.instance.saveEditData();


    // this.dataGrid.instance.cellValue(this.selectedRowIndex, "check", false);
  }
  deleteRowerp() {
    this.dataGrid.instance.deleteRow(this.selectedRowIndex);
    if (this.selectedRowIndex == -1) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Select a row to delete.' } });
    }     
    this.dataGrid.instance.deselectAll();
    //let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '30%', height: '15%', data: { displaydatagrid: 'Are you sure you want to DELETE?' }, disableClose: true });
    //dialogRef.afterClosed().subscribe(result => {
    //  console.log('The dialog was closed: ${result}');
    //  this.deleterowdelete = result;
    //  if (this.deleterowdelete == "false") { }
    //  else {
    //    this.dataGrid.instance.deleteRow(this.selectedRowIndex);
    //    if (this.selectedRowIndex == -1) {
    //      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Select a row to delete.' } });
    //    }
    //    this.dataGrid.instance.deselectAll();
    //  }
    //});
  }
  selectedChangederp(e) {
    this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
  }
  openrawmaterialserach(e): void {
    if (e.column.dataField === "INCIName") {
      const dialogRef = this.dialog.open(SearchINCINameComponent, {
        width: '70%', height: '80%', disableClose: true
      });


      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        if (result != "") {

          this.custocode = result[4];
          this.Inciname = result[0];
          this.customercodepref = result[2];
          this.item = result[1];
          this.selectedRowIndex = e.rowIndex;
          this.dataGrid.instance.cellValue(this.selectedRowIndex, "check", false);
          this.dataGrid.instance.cellValue(this.selectedRowIndex, "incicode", this.custocode);
          this.dataGrid.instance.cellValue(this.selectedRowIndex, "INCIName", this.Inciname);
          this.dataGrid.instance.cellValue(this.selectedRowIndex, "item", this.item);
          this.dataGrid.instance.cellValue(this.selectedRowIndex, "usage", "0.00000");
          this.dataGrid.instance.cellValue(this.selectedRowIndex, "banned", false);
          this.dataGrid.instance.saveEditData();


        }
        //  this.customerload(this.customercode).subscribe((customrload) => {
        //    console.warn("customerload", customrload)
        //    this.cusData = customrload
        //    this.customerdata(this.cusData)

        //  })


      });
    }

  }
  //onRowPreparedtierlist(e) {
  //  this.selectedRowIndexListinggrid = e.rowIndex;
  //  this.dataGrid.instance.addRow();

  //}
  insert_tiers() {
    this.selectedRowIndex = 0;
    this.dataGrid.instance.addRow();
    this.dataGrid.instance.cellValue(this.selectedRowIndex, "Tier1Range", this.Tier1);
    this.dataGrid.instance.cellValue(this.selectedRowIndex, "Tier2Range", this.Tier2);
    this.dataGrid.instance.cellValue(this.selectedRowIndex, "Tier3Range", this.Tier3);
    this.dataGrid.instance.cellValue(this.selectedRowIndex, "Tier4Range", this.Tier4);

    this.dataGrid.instance.saveEditData();


  }
  insert_tiers2() {
    this.dataGrid.instance.addRow();
    this.dataGrid.instance.saveEditData();
  }
  selectedChangedtier(e) {
    this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
    this.selectedtier1 = 'Upto ' + this.dataGrid.instance.getSelectedRowsData()[0].Tier1Range + ' Units $';
    var tierdata2: Number = Number(this.dataGrid.instance.getSelectedRowsData()[0].Tier1Range) + 1;
    this.selectedtier2 = tierdata2.toString() + ' - ' + this.dataGrid.instance.getSelectedRowsData()[0].Tier2Range + ' Units $';
    var tierdata3: Number = Number(this.dataGrid.instance.getSelectedRowsData()[0].Tier2Range) + 1;
    this.selectedtier3 = tierdata3.toString() + ' - ' + this.dataGrid.instance.getSelectedRowsData()[0].Tier3Range + ' Units $';
    this.selectedtier4 = this.dataGrid.instance.getSelectedRowsData()[0].Tier4Range + ' Units $';
    var sampledat: any = this.dataGrid.instance.getSelectedRowsData()[0].TieredProduct_id;
    this.focusrowkey = Number(sampledat);
    this.pricingdetailgrid(this.customercode, sampledat).subscribe((pricedetailgrid) => {
      console.warn("pricedetailgrid", pricedetailgrid)
      this.pricedetailgrid_data = pricedetailgrid
    })
  }

  pricingdetailgrid(customerc, sampledat) {

    var productid = sampledat;
    var custcod = customerc;
    let params1 = new HttpParams().set('CusCode', custcod).set('TieredProduct_id', productid);
    return this.http.get("https://smartformulatorcustomerwebservice4.azurewebsites.net/BindVolumePricingDetails", { params: params1, })

  }
  insert_tiersListinggrid() {
    this.selectedRowIndexListinggrid = 0;
    this.dataGrid.instance.addRow();
    this.dataGrid.instance.cellValue(this.selectedRowIndexListinggrid, "product", "0.00");
    this.dataGrid.instance.cellValue(this.selectedRowIndexListinggrid, "productname", "0.00");
    this.dataGrid.instance.cellValue(this.selectedRowIndexListinggrid, "unitsize", "0.00");
    this.dataGrid.instance.cellValue(this.selectedRowIndexListinggrid, "unit", "0.00");

    this.dataGrid.instance.saveEditData();


  }
  retailwholsaleinsert() {
    this.dataGrid.instance.addRow();
    this.dataGrid.instance.saveEditData();

  }
  retailwholsaledelete() {
    this.dataGrid.instance.deleteRow(this.selectedRowIndex);
    (this.selectedRowIndex);
    if (this.selectedRowIndex == -1) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Select a row to delete.' } });
    }
    this.dataGrid.instance.deselectAll();
    //let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '30%', height: '15%', data: { displaydatagrid: 'Are you sure you want to DELETE?' }, disableClose: true });
    //dialogRef.afterClosed().subscribe(result => {
    //  console.log('The dialog was closed: ${result}');
    //  this.deleterowdelete = result;
    //  if (this.deleterowdelete == "false") { }
    //  else {
    //    this.dataGrid.instance.deleteRow(this.selectedRowIndex);
    //    if (this.selectedRowIndex == -1) {
    //      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Select a row to delete.' } });
    //    }
    //    this.dataGrid.instance.deselectAll();
    //  }
    //});
  }
  selectedChangedwholeretail(e) { this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]); }

  deleteRow() {
    this.dataGrid.instance.deleteRow(this.selectedRowIndex);
    (this.selectedRowIndex);
    if (this.selectedRowIndex == -1) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Select a row to delete.' } });
    }
    this.dataGrid.instance.saveEditData();
    this.dataGrid.instance.deselectAll();
    //let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '30%', height: '15%', data: { displaydatagrid: 'Are you sure you want to DELETE?' }, disableClose: true });
    //dialogRef.afterClosed().subscribe(result => {
    //  console.log('The dialog was closed: ${result}');
    //  this.deleterowdelete = result;
    //  if (this.deleterowdelete == "false") { }
    //  else {
    //    this.dataGrid.instance.deleteRow(this.selectedRowIndex);
    //    if (this.selectedRowIndex == -1) {
    //      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Select a row to delete.' } });
    //    }
    //     this.dataGrid.instance.saveEditData();
    //     this.dataGrid.instance.deselectAll();
    //  }
    //});
  }
  selectedChanged(e) {
    this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
  }
  countrydataload() {
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/loadcountries");
  }
  termsdataload() {
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/loadterms");
  }
  statedataload() {
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/loadstates");
  }

  dateChangeexp(event) {
    this.expirydate = event.target.value;

  }

  Customer_saveupdate(custkey: string, custnam: string) {
    // for (let v in this.login_form.controls) {
    // this.login_form.controls[v].markAsTouched();
    // }
    this.dataList = [];
    this.setvalues2(this.rowData);
    this.setvalueserp(this.rowData6);
    this.setvaluesvalidatedbatches(this.rowData4);
    this.setvaluespricewhole(this.retail_wholesale_rowdata);
    //this.setvaluesvolupricing(this.volumePricingloadlistdetails_data);
    // this.setvalueserp(this.rowData6);
    this.Datavolumepricing[0] = ([{
      cpp_id: '0',
      productcode: '0',
      productnumber: '0',
      productname: '0',
      unit: '0',
      unitsize: '0',
      tier1value: '0',
      tier2value: '0',
      tier3value: '0',
      tier4value: '0',
      TieredProduct_id: '0',
      linenumber: '0',



    }]);
    this.Datamaincustomer[0] = ([{



      AddedDT: this.addeddt,
      AddedBy: 'admin',
      CAbbreviation: this.caabrevation,
      CusCode: this.customercode,
      CusName: this.customername,
      Address: this.address,
      Phone: this.phone,
      Email: this.emailref,
      FAX: this.fax,
      ContactFPerson: this.contactfperson,
      ContactSPerson: this.contactsperson,
      ContactTPerson: this.contacttperson,
      ContactFEmail: this.contactfmail,
      ContactSEmail: this.contactsmail,
      ContactTEmail: this.contacttmail,
      FillingInstruction: this.fillinginstruction,
      LabelingInstruction: this.labelinginstruction,
      SpecialInstruction: this.specialinstruction,
      Attachment: this.attachment,
      Terms: this.terms,
      FOB: this.fob,
      Shipvia: this.shipvia,
      SalesPerson: this.salesperson,
      CreditCardNo: this.creditcardno,
      CreditCardType: this.creditcardtype,
      ExpiryDate: this.expirydate,
      CreditLimit: this.creditlimit,
      SalesRegion: this.salesregion,
      SalesRepInitial: this.salesrepinitial,
      City: this.city,
      State: this.state,
      Country: this.country,
      Zip: this.zip,
      CustomerKey: this.customerkey,
      SAddress: this.saddress,
      SEmail: this.Email,
      SPhoneNo: this.telepho,
      SFax: this.Fax,
      SCity: this.City,
      SState: this.State,
      SCountry: this.Country,
      Szip: this.zipcode,
      SContactNo: this.contactno,
      SContactPerson: this.contactperson,
      Notes: this.notes,
      LabelAttachment: this.LabelAttachment,
      FillingAttachment: this.FillingAttachment,
      FillingAttachment2: this.FillingAttachment2,
      ShiptoLocation: this.Shiptolocation,
      CustomerType: this.customertype,
      Tier1: this.Tier1,
      Tier2: this.Tier2,
      Tier3: this.Tier3,
      Tier4: this.Tier4,
      Document1: this.Document1,
      Document2: this.Document2,
      Document3: this.Document3,
      Document4: this.Document4,
      Document5: this.Document5,
      Document6: this.Document6,
      Document7: this.Document7,
      Document8: this.Document8,
      Document9: this.Document9,
      Document10: this.Document10,
      Document11: this.Document11,
      Document12: this.Document12,
      Document13: this.Document13,
      Document14: this.Document14,
      Document15: this.Document15,
      Document16: this.Document16,
      Document17: this.Document17,
      Document18: this.Document18,
      Document19: this.Document19,
      Document20: this.Document20,
      username: 'admin'
    }])



    this.markFormTouched(this.login_form);
    if (this.customerkey == "" || this.customerkey == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Please Enter Customer key' } });

    }
    
    else if   (this.customername == "" || this.customername == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Please Enter Customer Name' } });
    }
   
   //else if (this.emailref == '' && this.contactfmail == '' && this.contactsmail == '' && this.contacttmail == '' && this.Email=='') {

   //   this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Please Enter Email ID' } });
   // }
    else {



     
        if (this.login_form.valid) {
          // You will get form value if your form is valid
          var formValues = this.login_form.getRawValue;
          var custcode: string = this.customercode;
          var operation: string = "Save";
          /*this.customercode = "";*/
          /*this.cstmerdata = [custkey, custnam, this.customercode]*/



          this.Customer_preferences(custcode, custnam).subscribe((Customer_pref) => {
            console.warn("Customer_pref", Customer_pref)
            this.Customer_pref_data = Customer_pref
          })
          this.Customer_saveup(custcode, custnam, custkey, operation).subscribe((Customer_save) => {
            console.warn("Customer_save", Customer_save)
            this.Customer_save_data = Customer_save
            if (this.Customer_save_data == "Inserted") {
              this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Customer " + " " + this.customername + " is " + this.Customer_save_data + " " + "Successfully" } });
              
              this.audittrialloadfunction(this.customercode).subscribe((loadcustomeraudittrial) => {
                console.warn("loadcustomeraudittrial", loadcustomeraudittrial)
                this.dataloadaudittrialcustomer = loadcustomeraudittrial
              })
              this.Customer_save_data = ""
            }
            else if (this.Customer_save_data == "Customer Key") {
              this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Customer key and Customer name already exists. Choose another one." } });
              this.Customer_save_data = ""
            }
            else if (this.Customer_save_data == "CustomerKey") {
              this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Customer key already exists. Choose another one." } });
              this.Customer_save_data = ""
            }
           

           
          })
         



        } else {
          this.login_form.controls['terms'].setValue(false);
        }
      }
     
    
    }
  validemail(event) {
    var val: any = event.target.value;
    if (val != "") {
      var regexp = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
      var serchfind = regexp.test(val);
      if (serchfind == false) {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'invalid email' } });
        this.emailref = '';
      }
    }
  }
  validemail1(event) {
    var val: any = event.target.value;
    if (val != "") {
      var regexp = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
      var serchfind = regexp.test(val);
      if (serchfind == false) {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'invalid email' } });
        this.contactfmail = '';
      }
    }
  }
  validemail2(event) {
    var val: any = event.target.value;
    if (val != "") {
      var regexp = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
      var serchfind = regexp.test(val);
      if (serchfind == false) {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'invalid email' } });
        this.contactsmail = '';
      }
    }
  }
  validemail3(event) {
    var val: any = event.target.value;
    if (val != "") {
      var regexp = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
      var serchfind = regexp.test(val);
      if (serchfind == false) {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'invalid email' } });
        this.contacttmail = '';
      }
    }
  }
  validemail4(event) {
    var val: any = event.target.value;
    if (val != "") {
      var regexp = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
      var serchfind = regexp.test(val);
      if (serchfind == false) {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'invalid email' } });
        this.Email = '';
      }
    }
  }

  

  Customer_Update(custkey: string, custnam: string) {
    this.dataList = [];
    this.setvalues2(this.rowData);
    this.setvalueserp(this.rowData6);
    this.setvaluesvalidatedbatches(this.rowData4);
    this.setvaluespricewhole(this.retail_wholesale_rowdata);
    //this.setvaluesvolupricing(this.volumePricingloadlistdetails_data);
    this.Datavolumepricing[0] = ([{
      cpp_id: '0',
      productcode: '0',
      productnumber: '0',
      productname: '0',
      unit: '0',
      unitsize: '0',
      tier1value: '0',
      tier2value: '0',
      tier3value: '0',
      tier4value: '0',
      TieredProduct_id: '0',
      linenumber: '0',



    }]);
    this.Datamaincustomer[0] = ([{



      AddedDT: this.addeddt,
      AddedBy: 'admin',
      CAbbreviation: this.caabrevation,
      CusCode: this.customercode,
      CusName: this.customername,
      Address: this.address,
      Phone: this.phone,
      Email: this.emailref,
      FAX: this.fax,
      ContactFPerson: this.contactfperson,
      ContactSPerson: this.contactsperson,
      ContactTPerson: this.contacttperson,
      ContactFEmail: this.contactfmail,
      ContactSEmail: this.contactsmail,
      ContactTEmail: this.contacttmail,
      FillingInstruction: this.fillinginstruction,
      LabelingInstruction: this.labelinginstruction,
      SpecialInstruction: this.specialinstruction,
      Attachment: this.attachment,
      Terms: this.terms,
      FOB: this.fob,
      Shipvia: this.shipvia,
      SalesPerson: this.salesperson,
      CreditCardNo: this.creditcardno,
      CreditCardType: this.creditcardtype,
      ExpiryDate: this.expirydate,
      CreditLimit: this.creditlimit,
      SalesRegion: this.salesregion,
      SalesRepInitial: this.salesrepinitial,
      City: this.city,
      State: this.state,
      Country: this.country,
      Zip: this.zip,
      CustomerKey: this.customerkey,
      SAddress: this.saddress,
      SEmail: this.Email,
      SPhoneNo: this.telepho,
      SFax: this.Fax,
      SCity: this.City,
      SState: this.State,
      SCountry: this.Country,
      Szip: this.zipcode,
      SContactNo: this.contactno,
      SContactPerson: this.contactperson,
      Notes: this.notes,
      LabelAttachment: this.LabelAttachment,
      FillingAttachment: this.FillingAttachment,
      FillingAttachment2: this.FillingAttachment2,
      ShiptoLocation: this.Shiptolocation,
      CustomerType: this.customertype,
      Tier1: this.Tier1,
      Tier2: this.Tier2,
      Tier3: this.Tier3,
      Tier4: this.Tier4,
      Document1: this.Document1,
      Document2: this.Document2,
      Document3: this.Document3,
      Document4: this.Document4,
      Document5: this.Document5,
      Document6: this.Document6,
      Document7: this.Document7,
      Document8: this.Document8,
      Document9: this.Document9,
      Document10: this.Document10,
      Document11: this.Document11,
      Document12: this.Document12,
      Document13: this.Document13,
      Document14: this.Document14,
      Document15: this.Document15,
      Document16: this.Document16,
      Document17: this.Document17,
      Document18: this.Document18,
      Document19: this.Document19,
      Document20: this.Document20,
      username: 'admin',
    }])



    this.markFormTouched(this.login_form);
    
    //if (this.emailref == '' && this.contactfmail == '' && this.contactsmail == '' && this.contacttmail == '' && this.Email=='') {

    //  this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Please Enter Email ID' } });
    //}
  
     

     
        if (this.login_form.valid) {
          var cuscode: string = this.customercode;
          var operation: string = "Update";
          this.Customer_preferences(cuscode, custnam).subscribe((Customer_pref) => {
            console.warn("Customer_pref", Customer_pref)
            this.Customer_pref_data = Customer_pref
          })
          this.Customer_saveup(cuscode, custnam, custkey, operation).subscribe((Customer_update) => {
            console.warn("Customer_update", Customer_update)
            this.Customer_save_data = Customer_update

            this.wait(3000);
            this.audittrialloadfunction(this.customercode).subscribe((loadcustomeraudittrial) => {
              console.warn("loadcustomeraudittrial", loadcustomeraudittrial)
              this.dataloadaudittrialcustomer = loadcustomeraudittrial
            })

            if (this.Customer_save_data == "Updated") {
              this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'updated successfully' } });
            }

          })
        }
        else {
          this.login_form.controls['terms'].setValue(false);
        }
     
     
    
  }
  markFormTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) { control.markAsTouched(); this.markFormTouched(control); }
      else { control.markAsTouched(); };
    });
  };


  Customer_preferences(custcode, custnam) {
    var username: string = "admin";
    var cstmrcode: string = custcode;
  //  var cstmrkey: string = custkey;
    var cstmrname: string = custnam;
    //  var oper: string = operation;
    var datalistdata: any = JSON.stringify(this.dataList);
    //var datalisterpdata: any = JSON.stringify(this.DataListerp);
    //var datavalidatedbatches: any = JSON.stringify(this.Datavalidatedbatches);
    //var datapricewhole: any = JSON.stringify(this.Datapricewhole);
    //var datavolumepricing: any = JSON.stringify(this.Datavolumepricing);
    /* var cstmrdetail: any = cstmerdata;*/
    let params1 = new HttpParams()

      .set('customerpreference', datalistdata)
      .set('code', cstmrcode).set('name', cstmrname).set('username', username);
    return this.http.get("https://smartformulatorcustomerwebservice4.azurewebsites.net/insertcustomerpreferences", { params: params1, responseType: 'text'})
  }
  Customer_saveup(custcode, custnam, custkey, operation) {

    var cstmrcode: string = custcode;
    var cstmrkey: string = custkey;
    var cstmrname: string = custnam;
    var oper: string = operation;
    //string[] Customerdetail, string operation, string customerpreference, string erpproducts, string pricing, string validatedbatches, string volumepricingjson, string tier1, string tier2, string tier3, string tier4
    var maindatacus: any = JSON.stringify(this.Datamaincustomer);
    var datalistdata: any = JSON.stringify(this.dataList);
    var datalisterpdata: any = JSON.stringify(this.DataListerp);
    var datavalidatedbatches: any = JSON.stringify(this.Datavalidatedbatches);
    var datapricewhole: any = JSON.stringify(this.Datapricewhole);
    var datavolumepricing: any = JSON.stringify(this.Datavolumepricing);



    var cstmrdetail: any = this.Customerdetail;
    let params1 = new HttpParams().set('Customerdetailjson', maindatacus).set('operation', oper).set('customerpreference', datalistdata).set('erpproducts', datalisterpdata).set('pricing', datapricewhole).set('validatedbatches', datavalidatedbatches).set('volumepricingjson', datavolumepricing).set('tier1', this.Tier1).set('tier2', this.Tier2).set('tier3', this.Tier3).set('tier4', this.Tier4);
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/update_save_customer", { params: params1, responseType: 'text' })
  }
  //public string SaveUpdateCustomer(string[] Customerdetail, string operation, string customerpreference, string erpproducts, string pricing, string validatedbatches, string volumepricingjson, string tier1, string tier2, string tier3, string tier4) {

  //}
  deletecustomer() {
    let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '30%', height: '15%', data: { displaydatagrid: 'This will delete the entry.Do you really want to delete this entry?' }, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ${result}');
      this.deleteddata = result;

      if (this.deleteddata == "false") { }
      else {
        this.Customer_delete().subscribe((Customer_dlt) => {
          console.warn("Customer_deletedata", Customer_dlt)
          this.Customer_deletedata = Customer_dlt

          if (this.Customer_deletedata == "Deleted") {
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Customer:" + " " + this.customername + " is " + this.Customer_deletedata + " " + "Successfully" } });
            this.Customer_deletedata = ""
          }
          else if (this.Customer_deletedata == "ProjectMain") {
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "This customer is assigned to a project. So it cannot be deleted." } });
            this.Customer_deletedata = ""
          }
          else if (this.Customer_deletedata == "SampleManagement") {
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "This customer is assigned to a sample management. So it cannot be deleted." } });
            this.Customer_deletedata = ""
          }
          else if (this.Customer_deletedata == "BatchMain") {
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "This customer is assigned to a batch. So it cannot be deleted." } });
            this.Customer_deletedata = ""
          }
          else if (this.Customer_deletedata == "COAMain") {
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "This customer is assigned to a COA. So it cannot be deleted" } });
            this.Customer_deletedata = ""
          }
          else if (this.Customer_deletedata == "ProductPackageMaster") {
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "This customer is assigned to a BOM-Product Packaging entry. So it cannot be deleted" } });
            this.Customer_deletedata = ""
          }
          else if (this.Customer_deletedata == "CustomerPurchaseOrder") {
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "This customer is assigned to a customer PO entry. So it cannot be deleted" } });
            this.Customer_deletedata = ""
          }
          else if (this.Customer_deletedata == "SaleInvoice" || this.Customer_deletedata == "SalesInvoiceMaster") {
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "This customer is assigned to a sale invoice entry. So it cannot be deleted." } });
            this.Customer_deletedata = ""
          }
          else if (this.Customer_deletedata == "Failed") {
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "Deletion of customer is failed" } });
            this.Customer_deletedata = ""
          }
          this.active = '1';
          this.ClearData();

        })
      }
    });
  }
  Customer_delete() {
    var customercode = this.customercode;
    var customername = this.customername;
    let params1 = new HttpParams().set('CustCode', customercode).set('CustName', customername);
    return this.http.get("https://smartformulatorpdrwebservice5.azurewebsites.net/deletecustomer", { params: params1,responseType:'text' })
  }
  insertrowvalidatedbatch() {
    this.dataGrid.instance.addRow();
    this.dataGrid.instance.saveEditData();
  }
  deleterowvalidatedbatch() {
    this.dataGrid.instance.deleteRow(this.selectedRowIndexvali);
    (this.selectedRowIndex);
    if (this.selectedRowIndex == -1) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Select a row to delete.' } });
    }
    this.dataGrid.instance.deselectAll();
    //let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '30%', height: '15%', data: { displaydatagrid: 'Are you sure you want to DELETE?' }, disableClose: true });
    //dialogRef.afterClosed().subscribe(result => {
    //  console.log('The dialog was closed: ${result}');
    //  this.deleterowdelete = result;
    //  if (this.deleterowdelete == "false") { }
    //  else {
    //    this.dataGrid.instance.deleteRow(this.selectedRowIndexvali);
    //    if (this.selectedRowIndexvali == -1) {
    //      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Select a row to delete.' } });
    //    }
    //    this.dataGrid.instance.deselectAll();
    //  }
    //});
  }
  selectedChangedvalid(e) {
    this.selectedRowIndexvali = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
  }
ClearData()
{
  this.active = '1';
  this.issearchcustomer = true;
  this.issearchcustomersave = false;
  this.customerkey = '';
  this.customercode = '';
  this.customername = '';
  this.address = '';
  this.customertype ='';
  this.phone = '';
  this.emailref = '';
  this.fax = '';
  this.contactfperson = '';
  this.contactsperson = '';
  this.contacttperson ='';
  this.fob = '';
  this.city = '';
  this.zip = '';
  this.state = '';
  this.salesregion ='';
  this.contactfmail = '';
  this.contactsmail = '';
  this.contacttmail ='';
  this.semail = '';
  this.salesrepinitial = '';
  this.creditlimit ='';
  this.notes = '';

  this.addeddt = '';
  this.addedby = '';
  this.updateddt = '';
  this.updatedby = '';
  this.caabrevation = '';
  this.cc1 = '';
  this.cc2 = '';
  this.cc3 = '';
  this.fillinginstruction = '';
  this.labelinginstruction='';
  this.specialinstruction = '';
  this.attachment = '';
  this.terms = '';
  this.shipvia = '';
  this.salesperson = 'N/A';
  this.creditcardno = '';
  this.creditcardtype = '';
  this.expirydate = Date.now().toString();
  this.country = 'United States of America';
  this.isstateus = false;
  this.custmrkey = '';
  this.saddress = '';
  this.dataloadaudittrialcustomer = '';
  this.loadbatchszizes = '';
  this.erpproductscoa = '';
  this.shippingdata = '';
  this.retailwholeData = '';
  this.rowData4 = [];
  this.rowData = [];
  this.retail_wholesale_rowdata = [];
  this.rowData6 = [];
  
  this.locationname = '';
  this.Address = '';
  this.telepho = '';
  this.Fax = '';
  this.contactperson = '';
  this.City = '';
  this.State = '';
  this.zipcode = '';
  this.Country = '';
  this.Email = '';
  this.contactno = '';
  this.Shiptolocation = '';
  this.Statefull = '';

  this.Document1 = "";
  this.Document2 = "";
  this.Document3 = "";
  this.Document4 = "";
  this.Document5 = "";
  this.Document6 = "";
  this.Document7 = "";
  this.Document8 = "";
  this.Document9 = "";
  this.Document10 = "";
  this.Document11 = "";
  this.Document12 = "";
  this.Document13 = "";
  this.Document14 = "";
  this.Document15 = "";
  this.Document16 = "";
  this.Document17 = "";
  this.Document18 = "";
  this.Document19 = "";
  this.Document20 = "";
  this.FillingAttachment = "";
  this.FillingAttachment2 = "";
  this.LabelAttachment = "";
  this.attachment = "";
    }
  termChange(event) {
    this.terms = event.target.value;
}
  custtextgrid() {

    return this.http.get("https://smartformulatorformulalookupwebservice.azurewebsites.net/displayformulation.json");
  }
  loadvalidatedotcbatchsizes(SupplierCode: string) {
    var splrcode = SupplierCode;
    let params1 = new HttpParams().set('cuscode', splrcode);
    return this.http.get("https://smartformulatorcustomerwebservice3.azurewebsites.net/otcvalidatedbatchesbind", { params: params1, })
  }
  audittrialloadfunction(custcode:string) {

    var cucode:any= custcode;
    let params1 = new HttpParams().set('CusCode', cucode);
    return this.http.get("https://smartformulatorcustomerwebservice3.azurewebsites.net/loadAuditcustomeraudit", { params: params1, });
  }
  OpenAddClientLocation(): void {

    if (this.customerkey == "" || this.customerkey == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter customer key' } });
    }
    else if (this.customername == "" || this.customername == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter customer name' } });
    }
    else {
      this.datashare.sendcustomercode(this.customercode);
      const dialogRef = this.dialog.open(AddClientLocationComponent, {
        width: '60%', height: '70%', disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        this.wait(3000);
        this.shippinglocationload(this.customercode).subscribe((shippingload) => {
          console.warn("shippingload", shippingload)
          this.shippingdata = shippingload
        })
        this.searchitems = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];
        this.datashare.sendaddlocation(this.searchitems);
      });
    }

  }
  shippinglocationload(customercode: string) {
    var custcode = customercode;

    let params1 = new HttpParams().set('CustCode', custcode);
    return this.http.get("https://smartformulatorcustomerwebservice3.azurewebsites.net/loctabledataload", { params: params1, })

  }
  loaderpproductscoaexpirydate(SupplierCode: string) {
    var splrcode = SupplierCode;
    let params1 = new HttpParams().set('cuscode', splrcode);
    return this.http.get("https://smartformulatorcustomerwebservice3.azurewebsites.net/customerproducts", { params: params1, })
  }
  bindcustomerpre(customercode: string) {
    var custcode = customercode;

    let params1 = new HttpParams().set('CusCode', custcode);
    return this.http.get("https://smartformulatorcustomerwebservice3.azurewebsites.net/BindCustomerPreferences", { params: params1, })

  }
  bindtiredvolumpricelist(customercode: string) {
    var custcode = customercode;

    let params1 = new HttpParams().set('CusCode', custcode);
    return this.http.get("https://smartformulatorcustomerwebservice4.azurewebsites.net/LoadProductTieredDetails", { params: params1, })

  }
  Salesperson() {
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/loadsalesperson");
  }
 
  ngOnInit() {
   //var cuscode = this.data.displaydata;
    var cuscode = null;
    if (cuscode != null && cuscode != undefined) {
      this.customerload(cuscode).subscribe((customrload) => {
        console.warn("customerload", customrload)
        this.cusData = customrload
        this.customerdata(this.cusData)

      })

    }


    this.countrydataload().subscribe((countrydatalo) => {
      console.warn("countrydatalo", countrydatalo)
      this.countrydatalo_data = countrydatalo
    })
    this.termsdataload().subscribe((termsdatalo) => {
      console.warn("termsdatalo", termsdatalo)
      this.termsdatalo_data = termsdatalo
    })
    this.statedataload().subscribe((statedatalo) => {
      console.warn("statedatalo", statedatalo)
      this.statedatalo_data = statedatalo
    })
    this.custtextgrid().subscribe((custtextgrid) => {
      console.warn("custtextgrid", custtextgrid)
      this.custgrid = custtextgrid
    })
    this.audittrialloadfunction(this.customercode).subscribe((loadcustomeraudittrial) => {
      console.warn("loadcustomeraudittrial", loadcustomeraudittrial)
      this.dataloadaudittrialcustomer = loadcustomeraudittrial
    })
    this.Salesperson().subscribe((salespersondata) => {
      console.warn("salespersondata", salespersondata)
      this.salespersondatalo_data = salespersondata
    })
  }
}
export class Data {
  cuscodedata: string;
  itemdata: string;
  incinamedata: string;
  usagedata: string;
  foadata: string;
  commentsdata: string;
  banneddata: string;

}
export class erpData {
  productcode: string;
  productnumber: string;
  productname: string;
  formulacode: string;
  formulaname: string;
  COADTFORMAT: string;
  DateFormatOld: string;

}

export class validatedbatchesdata {
  productcode: string;
  productnumber: string;
  productname: string;
 unit: string;
 validatedsize: string;
  

}
export class pricewholedata {
  productcode: string;
  productnumber: string;
  productname: string;
  unit: string;
  unitsize: string;
  wholesalecost: string;
  retailcost: string;
  distributorcost: string;
  soledistributorcost: string;
  cppid: string;
  linenumber: string;


}
export class volumepricingdata {
  cpp_id: string;
  productcode: string;
  productnumber: string;
  productname: string;
  unit: string;
  unitsize: string;
  tier1value: string;
  tier2value: string;
  tier3value: string;
  tier4value: string;
  TieredProduct_id: string;
  linenumber: string;


}
export class customerdatamain {
  AddedDT: string;
  AddedBy: string;
  CAbbreviation: string;
  CusCode: string;
  CusName: string;
  Address: string;
  Phone: string;
  Email: string;
  FAX: string;
  ContactFPerson: string;
  ContactSPerson: string;
  ContactTPerson: string;
  ContactFEmail: string;
  ContactSEmail: string;
  ContactTEmail: string;
  FillingInstruction: string;
  LabelingInstruction: string;
  SpecialInstruction: string;
  Attachment: string;
  Terms: string;
  FOB: string;
  Shipvia: string;
  SalesPerson: string;
  CreditCardNo: string;
  CreditCardType: string;
  ExpiryDate: string;
  CreditLimit: string;
  SalesRegion: string;
  SalesRepInitial: string;
  City: string;
  State: string;
  Country: string;
  Zip: string;
  CustomerKey: string;
  SAddress: string;
  SEmail: string;
  SPhoneNo: string;
  SFax: string;
  SCity: string;
  SState: string;
  SCountry: string;
  Szip: string;
  SContactNo: string;
  SContactPerson: string;
  Notes: string;
  LabelAttachment: string;
  FillingAttachment: string;
  FillingAttachment2: string;
  ShiptoLocation: string;
  CustomerType: string;
  Tier1: string;
  Tier2: string;
  Tier3: string;
  Tier4: string;
  Document1: string;
  Document2: string;
  Document3: string;
  Document4: string;
  Document5: string;
  Document6: string;
  Document7: string;
  Document8: string;
  Document9: string;
  Document10: string;
  Document11: string;
  Document12: string;
  Document13: string;
  Document14: string;
  Document15: string;
  Document16: string;
  Document17: string;
  Document18: string;
  Document19: string;
  Document20: string;
  username: string;

}

