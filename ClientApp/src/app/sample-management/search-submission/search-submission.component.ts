import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DialogData } from 'src/app/formula-lookup/formula-lookup.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-search-submission',
  templateUrl: './search-submission.component.html',
  styleUrls: ['./search-submission.component.css']
})
export class SearchSubmissionComponent implements OnInit {
  filterMetadata = { count: 0 };
  dataresultsearchSubmission: any;
  formulacodedata: string = '';
  Pdrdata: string = '';
  PDRStatusdata: string = '';
  SubmissionNum: string = '';
  Descriptionname: string = '';
  searchitems: any = [];
  isLoading = true;
    countrecords: any;
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<SearchSubmissionComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  setvalues(Submission_search) {
    this.SubmissionNum = Submission_search.SubmissionNo;
    this.Pdrdata = Submission_search.PDRNo;
    this.formulacodedata = Submission_search.FormulaCode;
    this.Descriptionname = Submission_search.Description;
    this.PDRStatusdata = Submission_search.PDRStatus;
    this.searchitems = [this.SubmissionNum, this.formulacodedata, this.Pdrdata, this.PDRStatusdata, this.Descriptionname]
  }
  close() {
   
    this.dialogRef.close(this.searchitems);

  }
  applyFilter(filterValue: string) {
    let filterValueLower = filterValue.toLowerCase();
    if (filterValue === '') {
      this.dataresultsearchSubmission
    } else {
      this.dataresultsearchSubmission = this.dataresultsearchSubmission.filter((submission) =>

        submission.Description.toLowerCase().includes(filterValueLower));

    }
  }
  Loadsearchpdr() {

    return this.http.get("https://samplemanagementloadwebservice.azurewebsites.net/SubmissionList");
  }
  ngOnInit() {
    this.Loadsearchpdr().subscribe((resultsearchSubmission) => {
      this.isLoading = false;
      console.warn("resultsearchSubmission", resultsearchSubmission)
      this.dataresultsearchSubmission = resultsearchSubmission
      this.countrecords = this.dataresultsearchSubmission.length

    })
  }

}

