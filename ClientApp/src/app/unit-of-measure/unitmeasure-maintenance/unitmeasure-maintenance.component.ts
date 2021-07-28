import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-unitmeasure-maintenance',
  templateUrl: './unitmeasure-maintenance.component.html',
  styleUrls: ['./unitmeasure-maintenance.component.css']
})
export class UnitmeasureMaintenanceComponent implements OnInit {
  datasave_unit_measure: any;
  constructor(private http: HttpClient) { }
  savemeasure(unitname:string, description:string, basis:string, convfactor:string) {
    var unitnameval: string = unitname;
    var descriptionval: string = description;
    var basisval: string = basis;
    var convfactorval: string = convfactor;
    let params1 = new HttpParams().set('UnitName', unitnameval).
      set('Description', descriptionval).
     
      set('Basis', basisval).
      set('ConvFactor', convfactorval);

    return this.http.get("http://localhost/raw-sup-webservice2/InsertUnitofMeasures", { params: params1 });

  }

  saveunitofmeasure(unitname: string, description: string, basis: string, convfactor: string) {
    this.savemeasure(unitname, description, basis, convfactor).subscribe((save_unit_measure) => {
      console.warn("save_unit_measure", save_unit_measure)
      this.datasave_unit_measure = save_unit_measure
    })
  }

  ngOnInit() {
  }

}
