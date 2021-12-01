import { Component, OnInit } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-rawmaterial-restriction',
  templateUrl: './rawmaterial-restriction.component.html',
  styleUrls: ['./rawmaterial-restriction.component.css']
})
export class RawmaterialRestrictionComponent implements OnInit {
  restrictiondetails: string[];
  restrictioncountryname: string = '';
  restrictionformulaname: string = '';
  percentageallowed: string = '';
  fieldname: string = '';
  username: string = 'admin'
  inciname: string = '';
  operation: string = ''
  restrictionload: any;
  Conditionsdata: string;
  Countrydata: string;
  FieldofApplndata: string;
  INCINamedata: string;
  Inciiddata: string;
  IngredientCodedata: string;
  Maximumdata: string;
  OtherLimitationsdata: string;
  Percentagedata: string;
  Sourceinfodata: string;
  maxpercentagedata: string;
  constructor(private Datashare: DataShareServiceService, private http: HttpClient) { }

  restrictionloadpopup(username: string, fieldname: string, inciname: string, operation: string) {
    var user: string = username;
    var field: string = fieldname;
    var inci: string = inciname
    var operat: string = operation;
   
   
    let params1 = new HttpParams().set('username', user)
      .set('FieldOfAppln', field)
      .set('INCIName', inci)
      .set('operation', operat);
    return this.http.get("https://formularestrictionwebservice2.azurewebsites.net/RestrictionDoubleClick", { params: params1})
  }
  restrictiondata(restrictdata: any) {

    for (let item of restrictdata) {


      this.Conditionsdata = item.Conditions
      this.Countrydata = item.Country
      this.FieldofApplndata = item.FieldofAppln
      this.INCINamedata = item.INCIName
      this.Inciiddata = item.Inciid
      this.IngredientCodedata = item.IngredientCode
      this.Maximumdata = item.Maximum
      this.OtherLimitationsdata = item.OtherLimitations
      this.Percentagedata = item.Percentage
      this.Sourceinfodata = item.Sourceinfo
      this.maxpercentagedata = item.maxpercentage
    }
  }
  ngOnInit() {

    this.restrictiondetails = this.Datashare.getrestrictiondetails()

    this.restrictioncountryname = this.restrictiondetails[0];
    this.restrictionformulaname = this.restrictiondetails[1];
    this.fieldname = this.restrictiondetails[2];
    this.percentageallowed = this.restrictiondetails[3];
    this.inciname = this.restrictiondetails[4];
    this.operation = this.restrictiondetails[5];
    this.restrictionloadpopup(this.username, this.fieldname, this.inciname, this.operation).subscribe((restrictionload) => {
    
      console.warn("restrictionload",restrictionload)
      this.restrictionload = restrictionload
      this.restrictiondata(this.restrictionload)
    })  
  }

}
