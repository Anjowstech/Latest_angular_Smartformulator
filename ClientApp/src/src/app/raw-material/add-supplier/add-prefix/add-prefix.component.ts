import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-add-prefix',
  templateUrl: './add-prefix.component.html',
  styleUrls: ['./add-prefix.component.css']
})
export class AddPrefixComponent implements OnInit {
  abb: string = '';
  abbdescription: string = '';
  formname: string;
  datasaveabbraw: any;
  defaultdataprefix:any
  constructor(private http: HttpClient) { }
  saveabbrawmaterials(abbrawmat: string, abbrawdescription: string) {
    var abbraw: string = abbrawmat;
    var descraw: string = abbrawdescription;
    let params1 = new HttpParams().set('abb', abbraw).
      set('formname', "Raw Materials").
      set('abbdescription', descraw);
    return this.http.get("http://localhost/SmartFormulator_Webservice/saveabbreviation", { params: params1 });

  }
  defaultsettingdata() {


    return this.http.get("http://localhost/SmartFormulator_Webservice/defaultsettingsdata");
  }
  saverawprefix(abbrawform, abbdescriptionrawform) {

    return this.saveabbrawmaterials(abbrawform, abbdescriptionrawform).subscribe((result6) => {
      console.warn("resultsaveraw", result6)
      this.datasaveabbraw = result6
    })

  }
  ngOnInit() {
    this.saveabbrawmaterials(this.abb, this.abbdescription).subscribe((result6) => {
      console.warn("resultsaveraw", result6)
      this.datasaveabbraw = result6
    })
  
   this.defaultsettingdata().subscribe((result4) => {
     console.warn("result", result4)
     this.defaultdataprefix = result4



   })
  }

}
