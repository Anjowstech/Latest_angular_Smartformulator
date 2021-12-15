import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchCustomerComponent } from 'src/app/formula-lookup/customer-details/search-customer/search-customer.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  
  customerkey: string;
  custmrcode: string;
  customername: string;
  customercode: string;
  cusData: any;
  custgrid: any
  
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
  contacttmail: string;
  cc1: string;
  cc2: string;
  cc3: string;
  fillinginstruction: string;
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
  countrydatalo_data: any;
  termsdatalo_data: any;
  statedatalo_data: any;
  creditcarddatalo_data: any;
  salesrepdatalo_data: any;
  Customer_save_data: any;
  cstmerdata: any = [];
  selectedRowIndex = -1;
  login_form: FormGroup;
  rowData: any = [];
  i: number;
  j: number;
  dataList: string[][] = [];
  Customer_pref_data: any;
  constructor(public dialog: MatDialog, private http: HttpClient, fb: FormBuilder) {
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
      }
      this.customerload(this.customercode).subscribe((customrload) => {
        console.warn("customerload", customrload)
        this.cusData = customrload
        this.customerdata(this.cusData)

      })


    });

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
      this.contacttmail = item.ContactTEmail;
      this.semail = item.SEmail
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

    }

  }
  customerload(customercode: string) {
    var custcode = customercode;

    let params1 = new HttpParams().set('cuscode', custcode);
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/displaydetails", { params: params1, })

  }
  setvalues2(customer_searchdata2: any) {
    this.i = 0;
    this.j = 0;
    
    for (let search of customer_searchdata2) {
    
      this.dataList[this.i] = ([
        "sam:100",
        search.item,
        search.INCIName,
        search.usage,
        search.foa,
        search.comments,
        search.banned,
      ]);
      this.i++;

    }
    
  }
  addRow() {
    this.dataGrid.instance.addRow();
  }
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
    this.markFormTouched(this.login_form);
    if (this.login_form.valid) {
      // You will get form value if your form is valid
      var formValues = this.login_form.getRawValue;
      var custcode: string = "";
      var operation: string = "Save";
      /*this.customercode = "";*/
      /*this.cstmerdata = [custkey, custnam, this.customercode]*/
      //this.Customer_saveup( custcode, custnam, custkey,operation).subscribe((Customer_save) => {
      //  console.warn("Customer_save", Customer_save)
      //  this.Customer_save_data = Customer_save
      //})
      this.Customer_preferences(custcode, custnam).subscribe((Customer_pref) => {
        console.warn("Customer_pref", Customer_pref)
        this.Customer_pref_data = Customer_pref
      })

    } else {
      this.login_form.controls['terms'].setValue(false);
    }
  };
  Customer_Update(custkey: string, custnam: string) {
    this.dataList = [];
    this.setvalues2(this.rowData);
    this.markFormTouched(this.login_form);
    if (this.login_form.valid) {
      var cuscode: string = this.customercode;
      var operation: string = "Update";
      //this.Customer_saveup(cuscode, custnam, custkey, operation).subscribe((Customer_update) => {
      //  console.warn("Customer_update", Customer_update)
      //  this.Customer_save_data = Customer_update
      //})
      this.Customer_preferences(cuscode, custnam).subscribe((Customer_pref) => {
        console.warn("Customer_pref", Customer_pref)
        this.Customer_pref_data = Customer_pref
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
    var datalistdata: any = this.dataList;
    /* var custcode: string = custCode;*
    /* var cstmrdetail: any = cstmerdata;*/
    let params1 = new HttpParams()

      .set('customerpreference', JSON.stringify(this.dataList))
      .set('code', cstmrcode).set('name', cstmrname).set('username', username);
    return this.http.get("https://smartformulatorcustomerwebservice2.azurewebsites.net/insertcustomerpreferences", { params: params1 })
  }
  Customer_saveup(custcode, custnam, custkey,  operation) {

    var cstmrcode: string = custcode;
    var cstmrkey: string = custkey;
    var cstmrname: string = custnam;
    var oper: string = operation;

    var datalistdata: any = this.dataList;
    /* var custcode: string = custCode;*/
    /* var cstmrdetail: any = cstmerdata;*/
    let params1 = new HttpParams().set('customerpreference', datalistdata).set('CusCode', cstmrcode).set('CusName', cstmrname).set('CustomerKey', cstmrkey).set('operation', oper);
    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/update_save_customer", { params: params1 })
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

  }
}
export class Data {
  cust1: string;
  custname1: string;


}
