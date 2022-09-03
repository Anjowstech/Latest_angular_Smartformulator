import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageBoxComponent } from '../../../message-box/message-box.component';
import { MessageBoxYesnoComponent } from '../../../message-box-yesno/message-box-yesno.component';



@Component({
  selector: 'app-terms-master',
  templateUrl: './terms-master.component.html',
  styleUrls: ['./terms-master.component.css']
})
export class TermsMasterComponent implements OnInit {
  Termsdata: any;
  filterMetadata = { count: 0 };
  TermCode: string;
  Terms: string;
  searchitems: any = [];
  Term_Data: any;
  operate: string;
  oldTerms: string;
  deleteddata: string;
  TermsdataLength: string;
  issearchterms: boolean = true;
  issearchtermssave: boolean = false;
  constructor(public dialog: MatDialog,private http: HttpClient, public dialogRef: MatDialogRef<TermsMasterComponent>) { }
  Salespersondata() {



    return this.http.get("https://smartformulatorcustomerwebservice1.azurewebsites.net/loadterms");
  }

  setvalues(Termmastersdata) {
    
    this.TermCode = Termmastersdata.TermCode;
    this.Terms = Termmastersdata.Terms;
    this.oldTerms = Termmastersdata.Terms;
    this.searchitems = [this.TermCode, this.Terms];

    this.issearchterms = false;
    this.issearchtermssave = true;
  }
  close() {



    this.dialogRef.close(this.searchitems);



  }



  Termsmastersave(termcode: string, termsdata: string) {
    if (this.TermCode == "" || this.TermCode == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter Term code' } });
    }
    else if (this.Terms == "" || this.Terms == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter Terms' } });
    }
    else {
      this.operate = "Save";
      this.Terms_saveup(termcode, termsdata, this.operate).subscribe((Term_Details) => {
        console.warn("Term_Details", Term_Details)
        this.Term_Data = Term_Details



        if (this.Term_Data == "Inserted") {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Terms:' + this.Terms + '' + ' is saved successfully.' } });
        }
        else if (this.Term_Data == "TermCode") {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Termcode already exists.Enter another one.' } });
        }
        this.Salespersondata().subscribe((Terms_Details) => {
          console.warn("cus_search", Terms_Details)
          this.Termsdata = Terms_Details
          this.TermsdataLength = this.Termsdata.length;
        })
      })
    }


  }
  Termsmasterupdate(termcode: string, termsdata: string) {
    this.operate = "Update";
    this.Terms_saveup(termcode, termsdata, this.operate).subscribe((Term_Details) => {
      console.warn("Term_Details", Term_Details)
      this.Term_Data = Term_Details

      if (this.Term_Data == "Updated") {
        this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Terms:' + this.Terms + '' + ' is updated successfully.' } });
      }
      this.Salespersondata().subscribe((Terms_Details) => {
        console.warn("cus_search", Terms_Details)
        this.Termsdata = Terms_Details
        this.TermsdataLength = this.Termsdata.length;
      })
    })



  }



  Terms_saveup(termcode, termsdata, operate) {



    var Termcode = termcode;
    var Terms = termsdata;
    var oldterms = this.oldTerms;



    let params1 = new HttpParams().set('TermCode', Termcode).set('Terms', Terms).set('oldTerms', oldterms).set('Operation', operate);
    return this.http.get("https://smartformulatorsupplierwebservice.azurewebsites.net/SaveTerms", { params: params1, responseType: 'text'  })
  }



  Termsmasterdelete(termsdata: string) {
    let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '30%', height: '15%', data: { displaydatagrid: 'This will delete the entry.Do you really want to delete this entry?' }, disableClose: true });



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ${result}');
      this.deleteddata = result;



      if (this.deleteddata == "false") { }
      else {
        this.Terms_delete(termsdata).subscribe((Term_Details) => {
          console.warn("Term_Details", Term_Details)
          this.Term_Data = Term_Details



          if (this.Term_Data == "Deleted") {
            this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Terms:' + this.Terms + ' is deleted successfully.' } });
          }
          else if (this.Term_Data == "failed") {
            this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Failed to Delete' } });
          }



          this.Salespersondata().subscribe((Terms_Details) => {
            console.warn("cus_search", Terms_Details)
            this.Termsdata = Terms_Details
            this.TermsdataLength = this.Termsdata.length;
          })
        })



      }



    });



  }



  Terms_delete(termsdata) {
    var Terms = termsdata;
    let params1 = new HttpParams().set('Terms', Terms);
    return this.http.get("https://smartformulatorsupplierwebservice.azurewebsites.net/DeleteTerms", { params: params1, responseType: 'text'  })
  }

  cleardata() {
    this.TermCode = "";
    this.Terms = "";
    this.issearchterms = true;
    this.issearchtermssave = false;
  }






  ngOnInit() {
    this.Salespersondata().subscribe((Terms_Details) => {
      console.warn("Terms_Details", Terms_Details)
      this.Termsdata = Terms_Details
      this.TermsdataLength = this.Termsdata.length;


    })
  }



}

