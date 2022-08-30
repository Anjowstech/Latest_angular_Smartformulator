import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-marketing-callouts',
  templateUrl: './marketing-callouts.component.html',
  styleUrls: ['./marketing-callouts.component.css']
})
export class MarketingCalloutsComponent implements OnInit {
  Marketing_call_data: any;
  BenefitNo: string
  IngredientTradeName: string
  marketingindicator: string;
  INCIName: string;
  Benefits: string;
  Country: string;
  Marketing_save_data: any;
  Marketing_del_data: any;
  constructor(private http: HttpClient) { }
  Marketing_callouts() {



    return this.http.get("https://smartformulatorformulalookupwebservice6.azurewebsites.net/MarketingLoadCallout");
  }
  setvalues(datas) {
    this.marketingindicator = datas.MarketingIndicator;
    this.BenefitNo = datas.BenefitNo
    this.IngredientTradeName = datas.IngredientTradeName
    this.INCIName = datas.INCIName
    this.Benefits = datas.Benefits
    this.Country = datas.Country
  }
  applyFilter(filterValue: string) {
    let filterValueLower = filterValue.toLowerCase();
    if (filterValue === '') {
      this.Marketing_call_data
    } else {
      this.Marketing_call_data = this.Marketing_call_data.filter((formula) =>



        formula.Description.toLowerCase().includes(filterValueLower));



    }
  }



  Marketing_saveupdate(Benfitn: string, IngredientTradeNam: string, INCINam: string, Benefit: string, Countr: string) {
    this.Marketing_saveup(Benfitn, IngredientTradeNam, INCINam, Benefit, Countr).subscribe((Marketing_save) => {
      console.warn("Marketing_save", Marketing_save)
      this.Marketing_save_data = Marketing_save
    })
    this.Marketing_callouts().subscribe((Marketing_call) => {
      console.warn("Marketing_call", Marketing_call)
      this.Marketing_call_data = Marketing_call
    })
  }



  Marketing_saveup(Benfitn: string, IngredientTradeNam: string, INCINam: string, Benefit: string, Countr: string) {
    if (Benfitn == "") {
      var Benfin: string = "";
    }
    else {
      var Benfin: string = Benfitn;
    }
    var IngredientTradeN: string = IngredientTradeNam;
    var INCINa: string = INCINam;
    var Benefi: string = Benefit;
    var Count: string = this.Country;



    let params1 = new HttpParams().set('BenefitNo', Benfin).set('IngredientTradeName', IngredientTradeN).set('INCIName', INCINa).set('Benefits', Benefi).set('Country', Count);
    return this.http.get("https://smartformulatorformulalookupwebservice6.azurewebsites.net/btnUpdateMarketingCallOut", { params: params1, responseType: 'text' })



  }
  Marketing_delete(Benfitn: string) {
    this.Marketing_dlt(Benfitn).subscribe((Marketing_Del) => {
      console.warn("Marketing_Del", Marketing_Del)
      this.Marketing_del_data = Marketing_Del
    })
    this.Marketing_callouts().subscribe((Marketing_call) => {
      console.warn("Marketing_call", Marketing_call)
      this.Marketing_call_data = Marketing_call
    })
  }



  Marketing_dlt(Benfitn: string) {
    var Benfin: string = Benfitn;




    let params1 = new HttpParams().set('BenefitNo', Benfin);
    return this.http.get("https://smartformulatorformulalookupwebservice6.azurewebsites.net/btnDelete_Click_MarketingCallOut", { params: params1, responseType: 'text' })



  }



  ngOnInit() {
    this.Marketing_callouts().subscribe((Marketing_call) => {
      console.warn("Marketing_call", Marketing_call)
      this.Marketing_call_data = Marketing_call
    })
  }

}
