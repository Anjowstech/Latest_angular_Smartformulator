import { Component, OnInit } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-new-instruction',
  templateUrl: './new-instruction.component.html',
  styleUrls: ['./new-instruction.component.css']
})
export class NewInstructionComponent implements OnInit {
  formulacodeinstruction: string = "";
  formuladatainstr: string = "";
  formcod: string = '';
  fordat: string = '';
  getforminstruct: string = '';
  getformdata: string = '';
  data_newinstruction: any = '';
  data_saveinstruction: any = '';
  result_deleteinstruction: any = '';
  constructor(private Datashare: DataShareServiceService, private http: HttpClient) { }
  Newinstruction() {
    return this.http.get("https://smartformulatorformulalookupwebservice.azurewebsites.net/DisplayInstrcode");
  }

savefrminstruction(formulainstruct: string, formuladat: string) {

  this.saveinstruction(formulainstruct, formuladat).subscribe((result_saveinstruction) => {
    console.warn("result_newinstruction", result_saveinstruction)
    this.data_saveinstruction = result_saveinstruction

  }
  )
  }
  Deleteinstruction(formulainstruct: string) {

    this.Deletinstruction(formulainstruct).subscribe((result_deleteinstruction) => {
      console.warn("result_deleteinstruction", result_deleteinstruction)
      this.result_deleteinstruction = result_deleteinstruction

    }
    )
  }
  Deletinstruction(formulainstruct: string) {
     var formulainstruction = formulainstruct;
    //var formuladatavalue = formuladat;
    
    let params1 = new HttpParams().set('InstrCode', formulainstruction);
    return this.http.get("https://smartformulatorformulalookupwebservice.azurewebsites.net/Deleteinstruction", { params: params1 });
  }


  saveinstruction(formulainstruct:string, formuladat:string)
{
  var formulainstruction = formulainstruct;
  var formuladatavalue = formuladat;
    let params1 = new HttpParams().set('InstrCode', formulainstruction).set('InstrText', formuladatavalue);
    return this.http.get("https://smartformulatorformulalookupwebservice.azurewebsites.net/Saveupdateinstruction", { params: params1 });
}



  ngOnInit() {

    this.getformdata = this.Datashare.getsendforminstdata();
    this.getforminstruct = this.Datashare.getsendforminstruction()
    if (this.getforminstruct == "") {
      this.Newinstruction().subscribe((result_newinstruction) => {
        console.warn("result_newinstruction", result_newinstruction)
        this.data_newinstruction = result_newinstruction
        this.getforminstruct = this.data_newinstruction
      }
      )
    };
  }
  
}
    
