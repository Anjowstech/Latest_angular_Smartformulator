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



  //Marketing_saveupdate(IngredientTradeNam: string, INCINam: string, Benefit: string, Countr: string){
  //  this.Marketing_saveup(IngredientTradeNam, INCINam, Benefit, Countr).subscribe((Marketing_save) => {
  //    console.warn("Marketing_save", Marketing_save)
  //    this.Marketing_save_data = Marketing_save
  //  })
  
  //}
   
  
  //Marketing_saveup(IngredientTradeNam: string, INCINam: string, Benefit: string, Countr: string) {
  //  var IngredientTradeN: string = IngredientTradeNam;
  //  var INCINa: string = INCINam;
  //  var Benefi: string = Benefit;
  //  var Count: string = Countr;

  //  //let params1 = new HttpParams().set('Formulacode', formulcod);
  //  //return this.http.get("http://24.187.220.60/Smartformulator_Formulalookup_webservice/displayformulation.json", { params: params1 })

  //}

    

  ngOnInit() {
    this.Marketing_callouts().subscribe((Marketing_call) => {
      console.warn("Marketing_call", Marketing_call)
      this.Marketing_call_data = Marketing_call
    })
  }

}
