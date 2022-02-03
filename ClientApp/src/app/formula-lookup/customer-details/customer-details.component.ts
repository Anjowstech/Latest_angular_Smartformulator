import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchCustomerComponent } from 'src/app/formula-lookup/customer-details/search-customer/search-customer.component';
import { SearchINCINameComponent } from 'src/app/raw-material/search-inci-name/search-inci-name.component';
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

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
  @NgModule({
    imports: [
    
      DxDataGridModule
    
    ],
    declarations: [ DatagridcomponentComponent],
    
  })
export class CustomerDetailsComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

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
  customername: string;
  customercode: string;
  customercodepref: string;
  cusData: any;
  custgrid: any
  dataloadaudittrialcustomer: any;
  /* custkey: string;*/
  custname: string;
  fax: string;
  cuskey: string;
  /* custnam: string;*/
  address: string;
  customertype: string;
  phone: string;
  email: string;
  addeddt: string;
  addedby: string;
  updateddt: string;
  updatedby: string;
  caabrevation: string;
  contactfperson: string;
  contactsperson: string;
  contacttperson: string;
  contactfmail: string;
  contactsmail: string;
  contacttmail: string;
  cc1: string;
  cc2: string;
  cc3: string;
 
  fillinginstruction: string;
  labelinginstruction: string;
  specialinstruction: string;
  attachment: string;
  terms: string;
  fob: string;
  shipvia: string;
  salesperson: string;
  creditcardno: string;
  creditcardtype: string;
  expirydate: string;
  creditlimit: string;
  salesregion: string;
  salesrepinitial: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  custmrkey: string;
  saddress: string;
  semail: string;
  notes: string;
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
  selectedRowIndexvali=-1;
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
  Customerdetail: any=[];
  searchitems: any = [];
  shippingdata: any;
  Customer_pref_data: any;
  locationname: string;
  Address: string;
  City: string;
  clientid: string;
  customcode: string;
  State: string;
  Country: string;
  zipcode: string;
  contactno: string;
  contactperson: string;
  Email: string;
  Fax: string;
  locationnote: string;
  telepho: string;
  delclient_loc_data: any;
  default: string;
  salespersondatalo_data: any;
  erpproductscoa: any;
  rowData6: any = [];
  selectedRowIndexListinggrid = -1;
  pricedetailgrid_data: any;
  retail_wholesale_rowdata: any = [];
  retailwholeData: any;
  pricentryrowdata: any = [];
  priclistingrowdata: any = [];
  bindcustomerprefdata: any;
  erpunitload_data: any;
  selectedRowsData: any = [];
  selectedtier1: string= 'Tier1';
  selectedtier2: string = 'Tier2';
  selectedtier3: string = 'Tier3';
  selectedtier4: string = 'Tier4';
  VPdetailrowdata: any;
  TieredProduct_Id: string;
  volumePricingloadlistdetails_data: any;
  FillingAttachment: string;
  FillingAttachment2: string;
  LabelAttachment: string;
  SCity: string;
  SContactNo: string;
  SContactPerson: string;
  SCountry: string;
  SEmail: string;
  SFax: string;
  SPhoneNo: string;
  SState: string;
  SZip: string;
  Shiptolocation: string;
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
  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder, private datashare: DataShareServiceService) {
    this.login_form = fb.group({
      'custokey': ['', Validators.required],
      'custoname': ['', Validators.required],
     
      'terms': [false]
    }); }
  Opencustomer(): void {
    const dialogRef = this.dialog.open(SearchCustomerComponent, {
      width: '60%', height: '70%', disableClose: true
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != "") {
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
     


    });

  }
  DeleteClient_location() {
    this.DeleteClient_locationdlt().subscribe((DeleteClient_Loc) => {
      console.warn("SaveClient_Loc", DeleteClient_Loc)
      this.delclient_loc_data = DeleteClient_Loc
    })
    this.shippinglocationload(this.customercode).subscribe((shippingload) => {
      console.warn("shippingload", shippingload)
      this.shippingdata = shippingload
    })

  }
  sendcustcode(customercode) {
    this.datashare.sendcustomercode(customercode);
  }
  DeleteClient_locationdlt() {
    var clid = this.clientid;
    let params1 = new HttpParams().set('CLId', clid);
    return this.http.get("https://smartformulatorcustomerwebservice3.azurewebsites.net/deleteclientlocation", { params: params1 })
  }
  bindcustomerprefer(bindcustomerprefdata) {
    for (let item of bindcustomerprefdata) {
     var ban:string = item.banned;
    
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
      this.email = item.Email;
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
      this.expirydate = item.ExpiryDate;
      this.country = item.Country;
      this.custmrkey = item.CustomerKey;
      this.saddress = item.SAddress;
      this.semail = item.SEmail;

      this.FillingAttachment=item.FillingAttachment;
      this.FillingAttachment2 = item.FillingAttachment2;
      this.LabelAttachment = item.LabelAttachment;  
      this.SCity = item.SCity;
      this.SContactNo = item.SContactNo;
      this.SContactPerson = item.SContactPerson;
      this.SCountry = item.SCountry;
      this.SEmail = item.SEmail;
      this.SFax = item.SFax;
      this.SPhoneNo = item.SPhoneNo;
      this.SState = item.SState;
      this.SZip = item.SZip;
      this.Shiptolocation = item.Shiptolocation;
      this.Tier1 = item.Tier1;
      this.Tier2 = item.Tier2;
      this.Tier3 = item.Tier3;
      this.Tier4 = item.Tier4;
      this.Document1=item.Document1
      this.Document2=item.Document2
      this.Document3=item.Document3
      this.Document4=item.Document4
      this.Document5=item.Document5
      this.Document6=item.Document6
      this.Document7=item.Document7
      this.Document8=item.Document8
      this.Document9=item.Document9
      this.Document10=item.Document10
      this.Document11=item.Document11
      this.Document12=item.Document12
      this.Document13=item.Document13
      this.Document14=item.Document14
      this.Document15=item.Document15
      this.Document16=item.Document16
      this.Document17=item.Document17
      this.Document18=item.Document18
      this.Document19=item.Document19
      this.Document20=item.Document20

    }

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
    this.Tier4Range = 'Above ' + this.Tier3Range;
  }
  setvalues2(customer_searchdata2: any) {
    this.i = 0;
    this.j = 0;
    
    for (let search of customer_searchdata2) {
    
      this.dataList[this.i] = ([{
        cuscodedata: search.incicode,
        itemdata: search.item,
        incinamedata: search.INCIName,
        usagedata: search.usage,
        foadata: search.foa,
        commentsdata: search.comments,
        banneddata: search.banned,
      }]);
      this.i++;

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
        DateFormatOld: search.DateFormatOld,
      }]);
      this.i++;

    }

  }
  setvaluespricewhole(customer_pricewhole: any) {
    this.i = 0;
    this.j = 0;

    for (let search of customer_pricewhole) {

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
    this.dataGrid.instance.cellValue(this.selectedRowIndex, "Tier1Range", this.Tier1Range);
    this.dataGrid.instance.cellValue(this.selectedRowIndex, "Tier2Range", this.Tier2Range);
    this.dataGrid.instance.cellValue(this.selectedRowIndex, "Tier3Range", this.Tier3Range);
    this.dataGrid.instance.cellValue(this.selectedRowIndex, "Tier4Range", this.Tier4Range);
   
    this.dataGrid.instance.saveEditData();


  }
  insert_tiers2() {
    this.dataGrid.instance.addRow();
    this.dataGrid.instance.saveEditData();
  }
  selectedChangedtier(e)
  {
    this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
    this.selectedtier1 = 'Upto ' + this.dataGrid.instance.getSelectedRowsData()[0].Tier1Range + ' Units $';
    var tierdata2: Number = Number(this.dataGrid.instance.getSelectedRowsData()[0].Tier1Range) + 1;
    this.selectedtier2 = tierdata2.toString() + ' - ' + this.dataGrid.instance.getSelectedRowsData()[0].Tier2Range + ' Units $';
    var tierdata3: Number = Number(this.dataGrid.instance.getSelectedRowsData()[0].Tier2Range) + 1;
    this.selectedtier3 = tierdata3.toString() + ' - ' + this.dataGrid.instance.getSelectedRowsData()[0].Tier3Range +  ' Units $';
    this.selectedtier4 = this.dataGrid.instance.getSelectedRowsData()[0].Tier4Range + ' Units $';
    var sampledat: any = this.dataGrid.instance.getSelectedRowsData()[0].TieredProduct_id;
    this.focusrowkey = Number(sampledat);
    this.pricingdetailgrid(this.customercode, sampledat).subscribe((pricedetailgrid) => {
      console.warn("pricedetailgrid", pricedetailgrid)
      this.pricedetailgrid_data = pricedetailgrid
    })
  }
 
  pricingdetailgrid(customerc,sampledat) {
   
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
    this.dataGrid.instance.deselectAll();
  }
  selectedChangedwholeretail(e) { this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]); }

  deleteRow() {
    this.dataGrid.instance.deleteRow(this.selectedRowIndex);
    this.dataGrid.instance.deselectAll();
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
 

  
  Customer_saveupdate(custkey: string, custnam: string) {
    // for (let v in this.login_form.controls) {
    //   this.login_form.controls[v].markAsTouched();
    // }
    this.dataList = [];
    this.setvalues2(this.rowData);
    this.setvalueserp(this.rowData6);
    this.setvaluesvalidatedbatches(this.rowData4);
    this.setvaluespricewhole(this.retail_wholesale_rowdata);
    this.setvaluesvolupricing(this.volumePricingloadlistdetails_data);
   // this.setvalueserp(this.rowData6);
    this.markFormTouched(this.login_form);
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
      this.Customer_saveup( custcode, custnam, custkey,operation).subscribe((Customer_save) => {
        console.warn("Customer_save", Customer_save)
        this.Customer_save_data = Customer_save
      })
      

    } else {
      this.login_form.controls['terms'].setValue(false);
    }
  };
  Customer_Update(custkey: string, custnam: string) {
    this.dataList = [];
    this.setvalues2(this.rowData);
    this.setvalueserp(this.rowData6);
    this.setvaluesvalidatedbatches(this.rowData4);
    this.setvaluespricewhole(this.retail_wholesale_rowdata);
    this.setvaluesvolupricing(this.volumePricingloadlistdetails_data);
    this.markFormTouched(this.login_form);
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
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/insertcustomerpreferences", { params: params1, responseType: 'text'})
  }
  Customer_saveup(custcode, custnam, custkey,  operation) {
    //var customerdetail: string = [];
    this.Customerdetail[0] = custkey;
    this.Customerdetail[1] = custnam;
    this.Customerdetail[2] = custcode;
    this.Customerdetail[3] = this.address;
    this.Customerdetail[4] = this.customertype;
    this.Customerdetail[5] = this.phone;
    this.Customerdetail[6] = this.fax;
    this.Customerdetail[7] = this.caabrevation;
    this.Customerdetail[8] = this.contactfperson;
    this.Customerdetail[9] = this.contactsperson;
    this.Customerdetail[10] = this.contacttperson;
    this.Customerdetail[11] = this.terms;
    this.Customerdetail[12] = this.fob;
    this.Customerdetail[13] = this.creditcardtype;
    this.Customerdetail[14] = this.salesperson;
    this.Customerdetail[15] = this.notes;
    this.Customerdetail[16] = this.city;
    this.Customerdetail[17] = this.state;
    this.Customerdetail[18] = this.zip;
    this.Customerdetail[19] = this.country;
    this.Customerdetail[20] = this.email;
    this.Customerdetail[21] = this.contactfmail;
    this.Customerdetail[22] = this.contactsmail;
    this.Customerdetail[23] = this.contacttmail;
    this.Customerdetail[24] = this.salesregion;
    this.Customerdetail[25] = this.shipvia ;
    this.Customerdetail[26] = this.creditcardno;
    this.Customerdetail[27] = null;// ExpiryDate
    this.Customerdetail[28] = this.salesrepinitial;
    this. Customerdetail[29] = "1"; //CreditLimit
    // Customerdetail[30] = ""; not found
    this.Customerdetail[31] = "";// not found
    this.Customerdetail[32] = ""; //not found
    this.Customerdetail[33] = this.fillinginstruction;
    this.Customerdetail[34] = this.labelinginstruction;
    this.Customerdetail[35] = this.attachment;
    this.Customerdetail[36] = this.Address;
    this.Customerdetail[37] = this.Email;
    this.Customerdetail[38] = this.telepho;
    this.Customerdetail[39] = this.Fax;
    this.Customerdetail[40] = this.City;
    this.Customerdetail[41] = this.State;
    this.Customerdetail[42] = this.Country;
    this.Customerdetail[43] = this.zipcode;
    this.Customerdetail[44] = this.contactno;
    this.Customerdetail[45] = this.contactperson;
    this.Customerdetail[46] = this.FillingAttachment;
    this.Customerdetail[47] = ""; //Not Found
    this.Customerdetail[48] = ""; //Not Found
    this.Customerdetail[49] = this.Tier1; //Tier1
    this.Customerdetail[50] = this.Tier2; //Tier2
    this.Customerdetail[51] = this.Tier3; //Tier3
    this.Customerdetail[52] = this.Tier4; //Tier4
    this. Customerdetail[53] = this.Document1;
    this.Customerdetail[54] = this.Document2;
    this.Customerdetail[55] = this.Document3;
    this.Customerdetail[56] = this.Document4;
    this.Customerdetail[57] = this.Document5;
    this.Customerdetail[58] = this.Document6;
    this.Customerdetail[59] = this.Document7;
    this.Customerdetail[60] = this.Document8;
    this.Customerdetail[61] = this.Document9;
    this.Customerdetail[62] = this.Document10;
    this. Customerdetail[63] = "";
    this.Customerdetail[64] = "";
    this. Customerdetail[65] = "";
    this. Customerdetail[66] = "";
    this.Customerdetail[67] = "";
    this. Customerdetail[68] = "";
    this. Customerdetail[69] = "";
    this. Customerdetail[70] = "";
    this. Customerdetail[71] = "";
    this. Customerdetail[72] = "";
    this.Customerdetail[73] = ""; //Not found
    this.Customerdetail[74] = this.labelinginstruction;
    this.Customerdetail[75] = this.specialinstruction;
    this.Customerdetail[76] = this.creditcardtype;
    this.Customerdetail[77] = this.LabelAttachment ;
    this.Customerdetail[78] = this.FillingAttachment2;
    this.Customerdetail[79] = this.Shiptolocation;
    this. Customerdetail[80] = ""; //username
    this. Customerdetail[81] = "admin";
    this. Customerdetail[82] = "";
    //var erpproducts:string json
    var cstmrcode: string = custcode;
    var cstmrkey: string = custkey;
    var cstmrname: string = custnam;
    var oper: string = operation;
    //string[] Customerdetail, string operation, string customerpreference, string erpproducts, string pricing, string validatedbatches, string volumepricingjson, string tier1, string tier2, string tier3, string tier4
    var datalistdata: any = JSON.stringify(this.dataList);
    var datalisterpdata: any = JSON.stringify(this.DataListerp);
    var datavalidatedbatches: any = JSON.stringify(this.Datavalidatedbatches);
    var datapricewhole: any = JSON.stringify(this.Datapricewhole);
    var datavolumepricing: any = JSON.stringify(this.Datavolumepricing);
    /* var custcode: string = custCode;*/
    var cstmrdetail: any = this.Customerdetail;
    let params1 = new HttpParams().set('Customerdetail', cstmrdetail).set('operation', oper).set('customerpreference', datalistdata).set('erpproducts', datalisterpdata).set('pricing', datapricewhole).set('validatedbatches', datavalidatedbatches).set('pricingdetails', datavolumepricing).set('tier1', this.Tier1).set('tier2', this.Tier2).set('tier3', this.Tier3).set('tier4', this.Tier4);
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/update_save_customer", { params: params1 })
  }
  //public string SaveUpdateCustomer(string[] Customerdetail, string operation, string customerpreference, string erpproducts, string pricing, string validatedbatches, string volumepricingjson, string tier1, string tier2, string tier3, string tier4) {

  //}
  insertrowvalidatedbatch() {
    this.dataGrid.instance.addRow();
    this.dataGrid.instance.saveEditData();
  }
  deleterowvalidatedbatch() {
    this.dataGrid.instance.deleteRow(this.selectedRowIndexvali);
    this.dataGrid.instance.deselectAll();
  }
  selectedChangedvalid(e) {
    this.selectedRowIndexvali = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
  }
ClearData()
{
  this.customerkey = '';
  this.customercode = '';
  this.customername = '';
  this.address = '';
  this.customertype ='';
  this.phone = '';
  this.email = '';
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
  this.salesperson = '';
  this.creditcardno = '';
  this.creditcardtype = '';
  this.expirydate = '';
  this.country = '';
  this.custmrkey = '';
  this.saddress = '';

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
  audittrialloadfunction() {



    return this.http.get("https://smartformulatorcustomerwebservice3.azurewebsites.net/loadAuditcustomeraudit");



  }
  OpenAddClientLocation(): void {
    const dialogRef = this.dialog.open(AddClientLocationComponent, {
      width: '60%', height: '70%', disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      this.shippinglocationload(this.customercode).subscribe((shippingload) => {
        console.warn("shippingload", shippingload)
        this.shippingdata = shippingload

      })


    });

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
    this.audittrialloadfunction().subscribe((loadcustomeraudittrial) => {
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

