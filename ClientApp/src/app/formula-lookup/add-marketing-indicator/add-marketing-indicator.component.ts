import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-add-marketing-indicator',
  templateUrl: './add-marketing-indicator.component.html',
  styleUrls: ['./add-marketing-indicator.component.css']
})
export class AddMarketingIndicatorComponent implements OnInit {
  market_indi_data: any;
  marketingindicator: string;
  marketingid: string;
  Marketingindicator__Update: any;
  Marketingind_dlt: any;
  constructor(private http: HttpClient) { }
  Marketing_indicator() {



    return this.http.get("https://smartformulatorformulalookupwebservice5.azurewebsites.net/FrmMarketingIndicator_Load");
  }
  setvalues(datas) {
    this.marketingid = datas.MarketingId;
    this.marketingindicator = datas.MarketingIndicator;
  }
  Marketingindicator_Update(marketingID: string, marketingindica: string) {
    this.Marketing_save(marketingID, marketingindica).subscribe((Marketingind_save) => {
      console.warn("Marketingind_save", Marketingind_save)
      this.Marketingindicator__Update = Marketingind_save
    })



    this.Marketing_indicator().subscribe((market_indi) => {
      console.warn("market_indi", market_indi)
      this.market_indi_data = market_indi
    })



  }



  Marketing_save(marketingID: string, marketingindica: string) {



    var MarketId: string = marketingID;
    var MarketIndicator: string = marketingindica;




    let params1 = new HttpParams().set('RecID', MarketId).set('txtIndicator', MarketIndicator);
    return this.http.get("https://smartformulatorformulalookupwebservice6.azurewebsites.net/BtnSave_AddMarketIndicator", { params: params1, responseType: 'text' })



  }
  Marketingind_delete(marketingindica: string) {
    this.Marketingindc_dlt(marketingindica).subscribe((Marketingind_Del) => {
      console.warn("Marketingind_Del", Marketingind_Del)
      this.Marketingind_dlt = Marketingind_Del
    })
    this.Marketing_indicator().subscribe((market_indi) => {
      console.warn("market_indi", market_indi)
      this.market_indi_data = market_indi
    })
  }



  Marketingindc_dlt(marketingindica: string) {
    var MarketIndicator: string = marketingindica;



    let params1 = new HttpParams().set('txtIndicator', MarketIndicator);
    return this.http.get("https://smartformulatorformulalookupwebservice6.azurewebsites.net/btnDelete_AddMarketIndicator", { params: params1, responseType: 'text' })



  }




  ngOnInit() {
    this.Marketing_indicator().subscribe((market_indi) => {
      console.warn("market_indi", market_indi)
      this.market_indi_data = market_indi
    })
  }
}
