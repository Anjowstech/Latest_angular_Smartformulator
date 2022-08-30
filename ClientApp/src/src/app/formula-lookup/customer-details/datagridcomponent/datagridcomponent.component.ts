import { Component, Input, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-datagridcomponent',
  templateUrl: './datagridcomponent.component.html',
  styleUrls: ['./datagridcomponent.component.css']
})

export class DatagridcomponentComponent implements OnInit {
  @Input() key: string;
  customercode: string;

  volumePricingloadlistdetails_data: any;
  tasksDataSource: DataSource;

  constructor(private http: HttpClient, private datashare: DataShareServiceService) { }
  bindtiredvolumpricelist(customercode: string) {
    var custcode = customercode;

    let params1 = new HttpParams().set('CusCode', custcode);
    return this.http.get("https://smartformulatorcustomerwebservice4.azurewebsites.net/LoadProductTieredDetails", { params: params1, })

  }
  ngOnInit() {
    this.customercode = this.datashare.getcustocode();
    this.bindtiredvolumpricelist(this.customercode).subscribe((volumePricingloadlistdetails) => {
      console.warn("volumePricingloadlistdetails", volumePricingloadlistdetails)
      this.volumePricingloadlistdetails_data = volumePricingloadlistdetails
      
    
    }),
      this.tasksDataSource = new DataSource({
        store: new ArrayStore({
          data: this.volumePricingloadlistdetails_data,
      
          key: 'TieredProduct_id',
        }),
        filter: ['TieredProductDetails_id', '=', this.key],
      });
     
  }

}
