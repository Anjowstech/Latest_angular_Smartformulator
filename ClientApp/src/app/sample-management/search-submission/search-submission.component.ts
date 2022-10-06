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
  cstmrname: any;
  CustomerCode: any;
  LabOpenStatus: any;
  DueDate: any;
  ApprovedDate: any;
  PDRDate: any;
  REP: any;
  qty: any;
  unit: any;
  Price: any;
  Priority: any;
  noofpieces: any;
  Purpose: any;
  Approved: any;
  ApprovedBy: any;
  Fax: any;
  FaxPerson: any;
  ReportComments: any;
  ApprovedComments: any;
  PersonTitle: any;
  CustomerComments: any;
  cc1: any;
  cc2: any;
  cc3: any;
  Disclaimers: any;

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<SearchSubmissionComponent>) { }

  setvalues(Submission_search) {
    this.SubmissionNum = Submission_search.SubmissionNo;
    this.Pdrdata = Submission_search.PDRNo;
    this.PDRDate = Submission_search.PDRDate;
    this.cstmrname = Submission_search.CusName;
    this.CustomerCode = Submission_search.CusCode;
    this.formulacodedata = Submission_search.FormulaCode;
    this.Descriptionname = Submission_search.Description;
    this.PDRStatusdata = Submission_search.PDRStatus;
    this.LabOpenStatus = Submission_search.LabOpenStatus;
    this.ApprovedDate = Submission_search.ApprovedDate;
    this.DueDate = Submission_search.DueDate;
    this.REP = Submission_search.REP;
    this.qty = Submission_search.Qty;
    this.unit = Submission_search.Unit;
    this.Price = Submission_search.Price;
    this.Priority = Submission_search.Priority;
    this.Purpose = Submission_search.Purpose;
    this.noofpieces = Submission_search.noofpieces;
    this.Approved = Submission_search.Approved;
    this.ApprovedBy = Submission_search.ApprovedBy;
    this.Fax = Submission_search.Fax;
    this.FaxPerson = Submission_search.FaxPerson;
    this.ReportComments = Submission_search.ReportComments;
    this.ApprovedComments = Submission_search.ApprovedComments;
    this.PersonTitle = Submission_search.PersonTitle;
    this.CustomerComments = Submission_search.CustomerComments;
    this.cc1 = Submission_search.cc1;
    this.cc2 = Submission_search.cc2;
    this.cc3 = Submission_search.cc3;
    this.Disclaimers = Submission_search.Disclaimers;

    this.searchitems = [this.SubmissionNum, this.Pdrdata, this.PDRDate, this.DueDate,
    this.ApprovedDate, this.cstmrname, this.CustomerCode, this.formulacodedata, this.Descriptionname,
    this.PDRStatusdata, this.LabOpenStatus, this.REP, this.qty, this.unit, this.Price, this.Priority,
    this.Purpose, this.noofpieces, this.Approved, this.ApprovedBy, this.Fax, this.FaxPerson, this.ReportComments,
    this.ApprovedComments, this.PersonTitle, this.CustomerComments, this.cc1, this.cc2, this.cc3, this.Disclaimers]
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

