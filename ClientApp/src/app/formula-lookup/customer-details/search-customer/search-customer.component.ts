import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageBoxComponent } from '../../../message-box/message-box.component';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})

export class SearchCustomerComponent implements OnInit {
  filterMetadata = { count: 0 };
  customer_searchdata: any;
  customersearchdata: string;
  searchitems: any = [];
  customerkey: string;
  customername: string;
  customercode: string = "";
  Customer_quicksave_data: any;
  Datamaincustomer: customerdatamain[][] = [];
  addeddt: string = "";
  caabrevation: string = "";
  address: string = "";
  phone: string = "";
  emailref: string = "";
  fax: string = "";
  contactfperson: string = "";
  contactsperson: string = "";
  contacttperson: string = "";
  contactfmail: string = "";
  contactsmail: string = "";
  contacttmail: string = "";
  fillinginstruction: string = "";
  labelinginstruction: string = "";
  specialinstruction: string = "";
  attachment: string = "";
  terms: string = "";
  fob: string = "";
  shipvia: string = "";
  salesperson: string = "";
  creditcardno: string = "";
  creditcardtype: string = "";
  expirydate: string = "";
  creditlimit: string = "";

  salesregion: string = "";
  salesrepinitial: string = "";
  city: string = "";
  state: string = "";
  country: string = "";
  zip: string = "";
  saddress: string = "";
  Email: string = "";
  telepho: string = "";
  Fax: string = "";
  City: string = "";
  State: string = "";
  Country: string = "";
  zipcode: string = "";
  contactno: string = "";
  contactperson: string = "";
  notes: string = "";
  LabelAttachment: string = "";

  FillingAttachment: string = "";
  FillingAttachment2: string = "";
  Shiptolocation: string = "";
  customertype: string = "";
  Tier1: string = "1";
  Tier2: string = "2";
  Tier3: string = "3";
  Tier4: string = "4";
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
  Customerqucikdata: any;
  private dataList: Data[] = [];
  countrecords: any;

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<SearchCustomerComponent>, public dialog: MatDialog) { }
  Customer_search() {

    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/SearchCustomer");
  }
  setvalues(customer_search) {
    this.customerkey = customer_search.CustomerKey;
    this.customername = customer_search.CustomerName;
    this.customercode = customer_search.CustomerCode;
    this.searchitems = [this.customerkey, this.customername, this.customercode];
  }
  setvalues2(customer_searchdata2: any) {
    for (let search of customer_searchdata2) {
      this.dataList.push({
        cust1: search.customerkey,
        custname1: search.CustomerName,


      });
    }
    // this.searchitems = [this.customerkey, this.customername, this.customercode];
  }
  close() {

    this.dialogRef.close(this.searchitems);

  }
  
  applyFilter(filterValue: string) {
    let filterValueLower = filterValue.toLowerCase();
    if (filterValue === '') {
      this.customer_searchdata
    } else {
      this.customer_searchdata = this.customer_searchdata.filter((customer) =>

        customer.Description.toLowerCase().includes(filterValueLower));

    }
  }

  Customer_Quicksave(custkey: string, custnam: string) {
    //this.Customer_saveup(custkey, custnam).subscribe((Customer_quicksave) => {
    //  console.warn("Customer_save", Customer_quicksave)
    //  this.Customer_quicksave_data = Customer_quicksave
    //})
 
    if (this.customerkey == "" || this.customerkey == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Enter CustomerKey' } });
    }
    else if (this.customername == "" || this.customername == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Enter Customername' } });
    }
    else {

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
      this.Customer_saveup(custkey, custnam).subscribe((Customerquicksave) => {
        console.warn("Customerquicksave", Customerquicksave)
        this.Customerqucikdata = Customerquicksave

        if (this.Customerqucikdata == "Inserted") {
          this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: 'Customer' + " " + this.customername + ' is saved successfully.' } });
        }
        this.Customer_search().subscribe((cus_search) => {
          console.warn("cus_search", cus_search)
          this.customer_searchdata = cus_search
          this.setvalues2(this.customer_searchdata);
        })

      })
    }
  }

  Customer_saveup(custkey, custnam) {
    var maindatacus: any = JSON.stringify(this.Datamaincustomer);
    //var custcode: string = "";
    //var cstmrcode: string = custcode;
    //var cstmrkey: string = custkey;
    //var cstmrname: string = custnam;
    let params1 = new HttpParams().set('Customerdetailjson', maindatacus);
    return this.http.get("https://smartformulatorformulallokupwebservice8.azurewebsites.net/quicksavecustomer", { params: params1, responseType: 'text' })
  }

  ngOnInit() {
    this.Customer_search().subscribe((cus_search) => {
      console.warn("cus_search", cus_search)
      this.customer_searchdata = cus_search
      this.setvalues2(this.customer_searchdata);
      this.countrecords = this.customer_searchdata.length
    })

  }
}
export class Data {
  cust1: string;
  custname1: string;


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
