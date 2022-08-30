import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';


@Component({
  selector: 'app-new-property',
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.css']
})
export class NewPropertyComponent implements OnInit {
  acceptPropertyvalue: any;
  clraprpdata: any;
  PropertyName: string;
  constructor(private http: HttpClient, public dialog: MatDialog) { }

  AddProperty() {
    this.PropertyCreation().subscribe((result7) => {
      console.warn("resultsavesProperty", result7)
      this.acceptPropertyvalue = result7
    
      if (this.acceptPropertyvalue=="Inserted") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Property' + ' ' + this.PropertyName+' is saved successfully' } });
      }
      this.clraprpdata = '';
      
    })
  }
  PropertyCreation() {
    var SPropertyName: string = this.PropertyName;
    var operation1: string = "property";
    let parms = new HttpParams().set('Description', SPropertyName).set('operation', operation1);
    return this.http.get("https://smartformulatorrawmaterialswebservice3.azurewebsites.net/new_properties", { params: parms,responseType:'text' });
   
  }
  cleardata() {
    this.PropertyName = '';
  }
  loadProperty() {
    return this.http.get("https://smartformulatorrawmaterialswebservice3.azurewebsites.net/loadproperty");
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
