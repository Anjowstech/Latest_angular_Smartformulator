import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-new-property',
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.css']
})
export class NewPropertyComponent implements OnInit {
  acceptPropertyvalue: any;
  constructor(private http: HttpClient, public dialog: MatDialog) { }

  AddProperty(PropertyName: string) {
    this.PropertyCreation(PropertyName).subscribe((result7) => {
      console.warn("resultsavesProperty", result7)
      this.acceptPropertyvalue = result7
    })
  }
  PropertyCreation(CPropertyName: string) {
    var SPropertyName: string = CPropertyName;
    var operation1: string = "property";
    let parms = new HttpParams().set('Description', SPropertyName).set('operation', operation1);
    return this.http.get("http://localhost/RawMaterial1.2/new_properties", { params: parms });
    this.loadProperty()
  }
  loadProperty() {
    return this.http.get("http://localhost/RawMaterial1.2/loadproperty");
  }
  opennewproperty(): void {
    const dialogRef = this.dialog.open(NewPropertyComponent, {
      width: '30%', height: '30%', disableClose: true
    });
  }
  closedialog() {
    this.dialog.closeAll();
  }
  ngOnInit() {
  }

}
