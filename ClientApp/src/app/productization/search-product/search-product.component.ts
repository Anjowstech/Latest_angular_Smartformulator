import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/formula-lookup/formula-lookup.component';
import { Inject } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  dataraw_search: any;
  lcount: string;
  formulacodedata: string = '';
  formulanamedata: string = '';
  lbnotedata: string = '';
  formulacodedataval: string = '';
  formulanamedataval: string = '';
  lbnotedataval: string = '';
  getformcod: string = "";
  searchitems: any = [];
  Pdrdata: string = '';
  isLoading = true;
  FormulaCode: any = '';
  FormulaName: any = '';
  ProductCode: any = '';
  ProductName: any = '';
  ProductDate: any = '';
  BrandName: any = '';
  Warnings: any = '';
  Directions: any = '';
  artworkIIPath: any = '';
  Miscellaneous: any = '';
  Questions: any = '';
  BarCodeImage: any = '';
  BarCodeNumber: any = '';
  Uses: any = '';
  artworkI: any = '';
  artworkIPath: any = '';
  artworkII: any = '';
  artworkIII: any = '';
  artworkVPath: any = '';
  artworkIIIPath: any = '';
  artworkIV: any = '';
  artworkIVPath: any = '';
  artworkV: any = '';
  US: any = '';
  EU: any = '';
  California: any = '';
  Japan: any = '';
  Australia: any = '';
  productimage: any = '';
  ImageDescription: any = '';
  SpecificGravity: any = '';
  FillWeight: any = '';
  China: any = '';
  EUDoc: any = '';
  ProductDescription: any = '';
  FillingInstruction: any = '';
  AnimalTestData: any = '';
  CompanyProductNo: any = '';
  FillingAttachment2: any = '';
  LabelAttachment: any = '';
  FillingAttachment: any = '';
  LastExportedDate: any = '';
  LastExported: any = '';
  Classificationid: any = '';
  applicationid: any = '';
  ExportedBy: any = '';
  catid: any = '';
  brandid: any = '';
  ClassId: any = '';
  ProductLineId: any = '';
  LabelingInstruction: any = '';
  File1: any = '';
  File2: any = '';
  File3: any = '';
  USDoc: any = '';
  ResponsiblePerson: any = '';
  File4: any = '';
  File5: any = '';
  active: any = '';
  File6: any = '';
  Attachment: any = '';
  SpecialInstruction: any = '';
  OEMId: any = '';
  Caldoc: any = '';
  ProofandClaims: any = '';
  CASNo: any = '';
  EinecsNo: any = '';
  FillSize: any = '';
  Applications: any = '';
  Technicalinformation: any = '';
  ProductNumber: any = '';
  PdtDescription: any = '';
  CosmeticPdtReport: any = '';
  ManuFacturingDesc: any = '';
  Japandoc: any = '';
  Ausdoc: any = '';
  Chinadoc: any = '';
  Notes: any = '';
  filterMetadata = { count:0 };
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<SearchProductComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private Datashare: DataShareServiceService) { }

  Loadsearchformula() {

    return this.http.get("https://formulaproductization3.azurewebsites.net/loadproduct");
  }
  


  //setvaluessingle(raw_search) {

  //  this.formulacodedataval = raw_search.FormulaCode;
  //  this.formulanamedataval = raw_search.Description;
  //  this.lbnotedataval = raw_search.LabRefNo;
  //  this.Pdrdata = raw_search.PDRNo;
  //  this.searchitems = [this.formulacodedata, this.formulanamedata, this.lbnotedata]
  //}
  setvalues(raw_search) {
    this.FormulaCode = raw_search.FormulaCode;
    this.FormulaName = raw_search.FormulaName;
    this.ProductNumber = raw_search.ProductNumber;
    this.ProductName = raw_search.ProductName;
    this.ProductDate = raw_search.ProductDate;
    this.BrandName = raw_search.BrandName;
    this.Warnings = raw_search.Warnings;
    this.Directions = raw_search.Directions;
    this.Questions = raw_search.Questions;
    this.Miscellaneous = raw_search.Miscellaneous;
    this.BarCodeImage = raw_search.BarCodeImage;
    this.BarCodeNumber = raw_search.BarCodeNumber;
    this.Uses = raw_search.Uses;
    this.artworkI = raw_search.ArtworkI;
    this.artworkIPath = raw_search.ArtworkIPath;
    this.artworkII = raw_search.ArtworkII;
    this.artworkIIPath = raw_search.ArtworkIIPath;
    this.artworkIII = raw_search.ArtworkIII;
    this.artworkIIIPath = raw_search.ArtworkIIIPath;
    this.artworkIV = raw_search.ArtworkIV;
    this.artworkIVPath = raw_search.ArtworkIVPath;
    this.artworkV = raw_search.ArtworkV;
    this.artworkVPath = raw_search.ArtworkVPath;
    this.US = raw_search.US;
    this.EU = raw_search.EU;
    this.California = raw_search.California;
    this.Japan = raw_search.Japan;
    this.Australia = raw_search.Australia;
    this.China = raw_search.China;
    this.USDoc = raw_search.USdoc;
    this.EUDoc = raw_search.EUdoc;
    this.Caldoc = raw_search.Caldoc;
    this.Japandoc = raw_search.Japandoc;
    this.Ausdoc = raw_search.Ausdoc;
    this.Chinadoc = raw_search.chinadoc;
    this.Notes = raw_search.Notes;

    this.CASNo = raw_search.CASNo;
    this.EinecsNo = raw_search.EinecsNo;
    this.FillSize = raw_search.FillSize;
    this.ProductDescription = raw_search.ProductDescription;
    this.Applications = raw_search.Applications;
    this.Technicalinformation = raw_search.Technicalinformation;
    this.CompanyProductNo = raw_search.CompanyProductNo;
    this.ProductNumber = raw_search.ProductNumber;
    this.PdtDescription = raw_search.PdtDescription;
    this.CosmeticPdtReport = raw_search.CosmeticPdtReport;
    this.ManuFacturingDesc = raw_search.ManuFacturingDesc;
    this.ProofandClaims = raw_search.ProofandClaims;
    this.AnimalTestData = raw_search.AnimalTestData;
    this.ResponsiblePerson = raw_search.ResponsiblePerson;
    this.File1 = raw_search.File1;
    this.File2 = raw_search.File2;
    this.File3 = raw_search.File3;
    this.File4 = raw_search.File4;
    this.File5 = raw_search.File5;
    this.File6 = raw_search.File6;
    this.active = raw_search.active;
    this.Attachment = raw_search.Attachment;
    this.FillingInstruction = raw_search.FillingInstruction;
    this.LabelingInstruction = raw_search.LabelingInstruction;
    this.SpecialInstruction = raw_search.SpecialInstruction;
    this.ProductLineId = raw_search.ProductLineId;
    this.OEMId = raw_search.OEMId;
    this.ClassId = raw_search.ClassId;
    this.Classificationid = raw_search.Classificationid;
    this.catid = raw_search.catid;
    this.brandid = raw_search.brandid
    this.applicationid = raw_search.applicationid;
    this.LastExported = raw_search.LastExported;
    this.LastExportedDate = raw_search.LastExportedDate;
    this.ExportedBy = raw_search.ExportedBy;
    this.FillingAttachment = raw_search.FillingAttachment;
    this.LabelAttachment = raw_search.LabelAttachment;
    this.LabelAttachment = raw_search.LabelAttachment;
 

    this.productimage = raw_search.productimage;
    this.ImageDescription = raw_search.ImageDescription;
    this.SpecificGravity = raw_search.SpecificGravity;
    this.FillWeight = raw_search.FillWeight;


    this.searchitems = [
      this.FormulaCode,
    this.FormulaName,
     this.ProductNumber,
    this.ProductName,
    this.ProductDate,
    this.BrandName,
    this.Warnings,
    this.Directions,
    this.Questions,
    this.Miscellaneous,
    this.BarCodeImage,
    this.BarCodeNumber,
    this.Uses,
    this.artworkI,
    this.artworkIPath,
    this.artworkII,
    this.artworkIIPath,
    this.artworkIII,
    this.artworkIIIPath,
    this.artworkIV,
    this.artworkIVPath,
    this.artworkV,
    this.artworkVPath,
    this.US,
    this.EU,
    this.California,
    this.Japan,
    this.Australia,
    this.China,
    this.USDoc,
    this.EUDoc,
    this.Caldoc,
    this.Japandoc,
    this.Ausdoc,
    this.Chinadoc,
    this.Notes,

    this.CASNo,
    this.EinecsNo,
    this.FillSize,
    this.ProductDescription,
    this.Applications,
    this.Technicalinformation,
    this.CompanyProductNo,
    this.ProductNumber,
    this.PdtDescription,
    this.CosmeticPdtReport,
    this.ManuFacturingDesc,
    this.ProofandClaims,
    this.AnimalTestData,
    this.ResponsiblePerson,
    this.File1,
    this.File2,
    this.File3,
    this.File4,
    this.File5,
    this.File6,
    this.active,
    this.Attachment,
    this.FillingInstruction,
    this.LabelingInstruction,
    this.SpecialInstruction,
    this.ProductLineId,
    this.OEMId,
    this.ClassId,
    this.Classificationid,
    this.catid,
    this.brandid,
    this.applicationid,
    this.LastExported,
    this.LastExportedDate,
    this.ExportedBy,
    this.FillingAttachment,
    this.LabelAttachment,
    this.FillingAttachment2,
   
    this.productimage,
    this.ImageDescription,
    this.SpecificGravity,
    this.FillWeight    ]
  }
  close() {
    // this.searchitems = [this.formulacodedata, this.formulanamedata, this.lbnotedata]
    this.dialogRef.close(this.searchitems);

  }
  applyFilter(filterValue: string) {
    let filterValueLower = filterValue.toLowerCase();
    if (filterValue === '') {
      this.dataraw_search
    } else {
      this.dataraw_search = this.dataraw_search.filter((formula) =>

        formula.Description.toLowerCase().includes(filterValueLower));

    }
  }

  ngOnInit() {

    this.Loadsearchformula().subscribe((resultraw_search) => {
      this.isLoading = false;
      console.warn("resultraw_search", resultraw_search)
      this.dataraw_search = resultraw_search
      this.lcount = this.dataraw_search.length;
    })
  }

}
