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
  constructor(private http: HttpClient) { }
  Marketing_indicator() {

    return this.http.get("https://smartformulatorformulalookupwebservice5.azurewebsites.net/FrmMarketingIndicator_Load");
  }
  setvalues(datas) {
    this.marketingindicator = datas.MarketingIndicator;
  }

  ngOnInit() {
    this.Marketing_indicator().subscribe((market_indi) => {
      console.warn("market_indi", market_indi)
      this.market_indi_data = market_indi
    })
  }
}
