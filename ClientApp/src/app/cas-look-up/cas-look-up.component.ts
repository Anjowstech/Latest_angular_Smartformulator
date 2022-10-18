import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { SearchCASComponent } from '../raw-material/add-cas-details/search-cas/search-cas.component';
import { Searchcas2Component } from './searchcas2/searchcas2.component';
import { RiskPhrasesComponent } from '../raw-material/risk-phrases/risk-phrases.component';
import { SaftyPhrasesComponent } from '../raw-material/safty-phrases/safty-phrases.component';
import { MessageBoxComponent } from '../message-box/message-box.component';
import { MessageBoxYesnoComponent } from '../message-box-yesno/message-box-yesno.component';
import { MatTooltipModule } from '@angular/material';

@Component({
  selector: 'app-cas-look-up',
  templateUrl: './cas-look-up.component.html',
  styleUrls: ['./cas-look-up.component.css']
})
export class CasLookUpComponent implements OnInit {
  private columnDefs;
  public rowSelection;
  public rowStyle;
  public rowHeight;
  casdata: any;
  CAS_saveupdate_data: any;
  CAS_deletedata: any;
  deleteddata: string;
  castooldata: any = [];
  Datatoolcas: tooldata[][] = [];
  Datamaincas: any = [];
  i: number;
  j: number;
  risklistdata: string = '';
  safetylistdata: string = '';
  casno: string;
  description: string;
  einecs: string = "";
  synonym: string = "";
  synonym1: string = "";
  synonym2: string = "";
  synonym3: string = "";
  synonym4: string = "";
  synonym5: string = "";
  synonym6: string = "";
  MSDS: string = "";
  WebAddress: string = "";
  SupressPercent: string;
  suppresspercent: boolean;
  SupMinus: string = "0";
  SupPlus: string = "0";
  IncludeonMSDS: string = 'False';
  includeonmsds: boolean;
  SuprsCas: string = 'False';
  suprscas: boolean;
  TradeSecret: string = 'False';
  tradesecret: boolean;
  TSCA: string = 'False';
  tcsa: boolean;
  EEC: string = 'False';
  eec: boolean;
  SARA: string = 'False';
  sara: boolean;
  DSL: string = 'False';
  dsl: boolean;
  Carcinogen: string = 'False';
  carcinogen: boolean;
  UpdatedBy: string;
  UpdatedDt: string;
  addedby: string = "";
  addeddt: string = "";
  Appearence: string = "";
  MeltingPoint: string = "0";
  BoilRangeLowC: string = "0";
  BoilRangeHighC: string = "0";
  SpceificGravity: string = "0";
  VaporPressure: string = "0";
  VaporPressureUOM: string = "mm Hg@25C";
  VaporDensity: string = "0";
  FlashPointF: string = "";
  FlashPointC: string = "";
  LowerExplosiveLimit: string = "0";
  UpperExplosiveLimit: string = "0";
  BoilPointFMax: string = "0";
  BoilPointFMin: string = "0";
  AutoIgTemp: string = "0";
  WaterSol: string = "";
  HMIS_Flame: string = "0";
  NFPA_Flame: string = "0";
  HMIS_Health: string = "*";
  NFPA_Health: string = "0";
  HMIS_Physical: string = "0";
  NFPA_Reactivity: string = "0";
  NFPA_Special: string = "Acid";
  HMIS_Personal: string = "A";
  FlammableGas: string = 'False';
  flammablegas: boolean;
  CombustibleLiquid: string = 'False';
  combustibleliquid: boolean;
  FlammableSolid: string = 'False';
  flammablesolid: boolean;
  Pyrophoric: string = 'False';
  pyrophoric: boolean;
  CompressedGas: string = 'False';
  compressedgas: boolean;
  IsStable: string = 'False';
  isstable: boolean;
  FlammableAerosol: string = 'False';
  flammableaerosol: boolean;
  FlammableLiquid: string = 'False';
  flammableliquid: boolean;
  Explosive: string = 'False';
  explosive: boolean;
  Organic: string = 'False';
  organic: boolean;
  Oxidizer: string = 'False';
  oxidizer: boolean;
  WaterReactive: string = 'False';
  waterreactive: boolean;
  WHMISA: string = 'False';
  whmisa: boolean;
  WHMISB: string = 'False';
  whmisb: boolean;
  WHMISC: string = 'False';
  whmisc: boolean;
  WHMISD1: string = 'False';
  whmisd1: boolean;
  WHMISD2: string = 'False';
  whmisd2: boolean;
  WHMISD3: string = 'False';
  whmisd3: boolean;
  WHMISE: string = 'False';
  whmise: boolean;
  WHMISF: string = 'False';
  whmisf: boolean;
  TOBrain: string = 'False';
  tobrain: boolean;
  TOBlood: string = 'False';
  toblood: boolean;
  TOEyes: string = 'False';
  toeyes: boolean;
  TOKidneys: string = 'False';
  tokidney: boolean;
  TOLiver: string = 'False';
  toliver: boolean;
  TOLungs: string = 'False';
  tolungs: boolean;
  TOSkin: string = 'False';
  toskin: boolean;
  EyeContact: string = 'False';
  eyecontact: boolean;
  Ingestion: string = 'False';
  ingestion: boolean;
  Inhale: string = 'False';
  inhale: boolean;
  ThroughSkin: string = 'False';
  throughskin: boolean;
  Mouth: string = 'False';
  mouth: boolean;
  TONervousSystem: string = 'False';
  tonervoussystem: boolean;
  Corrosive: string = 'False';
  corrossive: boolean;
  Irritant: string = 'False';
  irritant: boolean;
  Reproductive: string = 'False';
  reproductive: boolean;
  Toxic: string = 'False';
  toxic: boolean;
  HighlyToxic: string = 'False';
  highlytoxic: boolean;
  Sensitizer: string = 'False';
  sensitizer: boolean;
  Biohazard: string = 'False';
  biohazard: boolean;
  NuclearHazard: string = 'False';
  nuclearhazard: boolean;
  OSHAExposure: string = "";
  ACGIHExposure: string = "";
  OtherExposure: string = "";
  EURiskPhrases: string = '';
  EUSafetyPhrases: string = '';
  LC50: string = "";
  LD50: string = "";
  AdditionalCasNo: string = "";
  constructor(public dialog: MatDialog, private http: HttpClient, private datashare: DataShareServiceService) {
    this.rowSelection = 'multiple';
    this.rowStyle = { fontFamily: 'Verdana', color: 'black' };
    this.rowHeight = 10;
    this.columnDefs = this.columnDefsfortools;}

  columnDefsfortools = [
    {
      flex: 1,
      wrapText: true,     // <-- HERE
      autoHeight: true,
      editable: true,
      headerStyle: { border: 'solid', borderColor: 'black', borderRightWidth: '0.1px', borderLeftWidth: '0.1px', borderBottomWidth: '0.1px', },

      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },

      //checkboxSelection: true,
      //suppressSizeToFit: true,
      headerName: "RegulationID",
      field: 'RegID', width: 150,
      minWidth: 200,
      maxWidth: 200,
    },
    {
      flex: 1,

      wrapText: true,     // <-- HERE
      autoHeight: true,
      editable: false,
      hide: true,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      width: 150,
      minWidth: 200,
      maxWidth: 200,
      headerName: "Description", field: 'Descrptn'
    },
    {
      flex: 1,
      wrapText: true,     // <-- HERE
      autoHeight: true,
      editable: false,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      width: 150,
      minWidth: 200,
      maxWidth: 200,
      headerName: "Threshhold", field: 'Threshold'
    },
    {
      flex: 1,
      wrapText: true,     // <-- HERE
      autoHeight: true,
      editable: false,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      headerName: "ClassCode1",
      width: 150,
      minWidth: 200,
      maxWidth: 200,
      field: "Ccode1"
    },


    {
      flex: 1,
      wrapText: true,     // <-- HERE
      autoHeight: true,
      editable: false,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      width: 150,
      minWidth: 200,
      maxWidth: 200,
      headerName: "ClassCode2", field: 'Ccode2',
    },
    {
      flex: 1,
      wrapText: true,     // <-- HERE
      autoHeight: true,
      editable: false,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      width: 150,
      minWidth: 200,
      maxWidth: 200,
      headerName: "ClassCode3", field: 'Ccode3',
    },
    {
      flex: 1,
      wrapText: true,     // <-- HERE
      autoHeight: true,
      editable: false,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      width: 150,
      minWidth: 200,
      maxWidth: 200,
      headerName: "ClassCode4", field: 'Ccode4',
    },
    {
      flex: 1,
      wrapText: true,     // <-- HERE
      autoHeight: true,
      editable: false,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      width: 150,
      minWidth: 200,
      maxWidth: 200,
      headerName: "ClassCode5", field: 'Ccode5',
    },
    {
      flex: 1,
      wrapText: true,     // <-- HERE
      autoHeight: true,
      editable: false,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      width: 150,
      minWidth: 200,
      maxWidth: 200,
      headerName: "ClassCode6", field: 'Ccode6',
    },
    {
      flex: 1,
      wrapText: true,     // <-- HERE
      autoHeight: true,
      editable: false,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      width: 150,
      minWidth: 200,
      maxWidth: 200,
      headerName: "ClassCode7", field: 'Ccode7',
    },
    {
      flex: 1,
      wrapText: true,     // <-- HERE
      autoHeight: true,
      editable: false,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      width: 150,
      minWidth: 200,
      maxWidth: 200,
      headerName: "ClassCode8", field: 'Ccode8',
    },
    {
      flex: 1,
      wrapText: true,     // <-- HERE
      autoHeight: true,
      editable: false,
      cellStyle: { 'white-space': 'normal', 'line-height': 2, 'border-bottom': 'solid 1px', 'border-right': 'solid 1px', wordBreak: "normal" },
      width: 150,
      minWidth: 200,
      maxWidth: 200,
      headerName: "ClassCode9", field: 'Ccode9',
    },
  ];
  suppresspercChange(event) {       //[(ngModel)]="SupressPercent"
    this.SupressPercent = event.target.checked.toString();
  }

  //IncludeonSDS(event) {
  //  this.IncludeonMSDS = event.target.checked.toString();
  //  if (this.IncludeonMSDS == "true") {
  //    this.includeonmsds = true;
  //  }
  //  else {
  //    this.includeonmsds = false;
  //  }
  //}
  //suppresscas(event) {       //[(ngModel)]="SupressPercent"
  //  this.SuprsCas = event.target.checked.toString();
  //}
  //carcinog(event) {       //[(ngModel)]="SupressPercent"
  //  this.Carcinogen = event.target.checked.toString();
  //}
  //dsl(event) {       //[(ngModel)]="SupressPercent"
  //  this.DSL = event.target.checked.toString();
  //}
  //tradesecret(event) {       //[(ngModel)]="SupressPercent"
  //  this.TradeSecret = event.target.checked.toString();
  //}
  //tcsa(event) {       //[(ngModel)]="SupressPercent"
  //  this.TSCA = event.target.checked.toString();
  //}
  //eec(event) {       //[(ngModel)]="SupressPercent"
  //  this.EEC = event.target.checked.toString();
  //}
  //sara(event) {       //[(ngModel)]="SupressPercent"
  //  this.SARA = event.target.checked.toString();
  //}


  //combustliquid(event) {       //[(ngModel)]="SupressPercent"
  //  this.CombustibleLiquid = event.target.checked.toString();
  //}
  //combustgas(event) {       //[(ngModel)]="SupressPercent"
  //  this.combustgas = event.target.checked.toString();
  //}
  //flammaerosol(event) {       //[(ngModel)]="SupressPercent"
  //  this.FlammableAerosol = event.target.checked.toString();
  //}
  //flammegas(event) {       //[(ngModel)]="SupressPercent"
  //  this.FlammableGas = event.target.checked.toString();
  //}
  //flammesolid(event) {       //[(ngModel)]="SupressPercent"
  //  this.FlammableSolid = event.target.checked.toString();
  //}
  //xplosive(event) {       //[(ngModel)]="SupressPercent"
  //  this.Explosive = event.target.checked.toString();
  //}
  //flammeliquid(event) {       //[(ngModel)]="SupressPercent"
  //  this.FlammableLiquid = event.target.checked.toString();
  //}
  //oxidzr(event) {       //[(ngModel)]="SupressPercent"
  //  this.Oxidizer = event.target.checked.toString();
  //}
  //compregas(event) {       //[(ngModel)]="SupressPercent"
  //  this.CompressedGas = event.target.checked.toString();
  //}
  //pyrofor(event) {       //[(ngModel)]="SupressPercent"
  //  this.Pyrophoric = event.target.checked.toString();
  //}


  //classa(event) {       //[(ngModel)]="SupressPercent"
  //  this.WHMISA = event.target.checked.toString();
  //}
  //classb(event) {       //[(ngModel)]="SupressPercent"
  //  this.WHMISB = event.target.checked.toString();
  //}
  //classc(event) {       //[(ngModel)]="SupressPercent"
  //  this.WHMISC = event.target.checked.toString();
  //}
  //classd1(event) {       //[(ngModel)]="SupressPercent"
  //  this.WHMISD1 = event.target.checked.toString();
  //}
  //classd3(event) {       //[(ngModel)]="SupressPercent"
  //  this.WHMISD3 = event.target.checked.toString();
  //}
  //classd2(event) {       //[(ngModel)]="SupressPercent"
  //  this.WHMISD2 = event.target.checked.toString();
  //}
  //classe(event) {       //[(ngModel)]="SupressPercent"
  //  this.WHMISE = event.target.checked.toString();
  //}
  //classf(event) {       //[(ngModel)]="SupressPercent"
  //  this.WHMISF = event.target.checked.toString();
  //}



  //blood(event) {       //[(ngModel)]="SupressPercent"
  //  this.WHMISA = event.target.checked.toString();
  //}
  //liver(event) {       //[(ngModel)]="SupressPercent"
  //  this.WHMISB = event.target.checked.toString();
  //}
  //skin(event) {       //[(ngModel)]="SupressPercent"
  //  this.WHMISC = event.target.checked.toString();
  //}
  //nervoussystem(event) {       //[(ngModel)]="SupressPercent"
  //  this.WHMISD1 = event.target.checked.toString();
  //}
  //brain(event) {       //[(ngModel)]="SupressPercent"
  //  this.WHMISA = event.target.checked.toString();
  //}
  //eyses(event) {       //[(ngModel)]="SupressPercent"
  //  this.WHMISB = event.target.checked.toString();
  //}
  //lungs(event) {       //[(ngModel)]="SupressPercent"
  //  this.WHMISC = event.target.checked.toString();
  //}
  //kidney(event) {       //[(ngModel)]="SupressPercent"
  //  this.WHMISD1 = event.target.checked.toString();
  //}


  //corrsive(event) {       //[(ngModel)]="SupressPercent"
  //  this.Corrosive = event.target.checked.toString();
  //}
  //Irrtnt(event) {       //[(ngModel)]="SupressPercent"
  //  this.Irritant = event.target.checked.toString();
  //}
  //toxic(event) {       //[(ngModel)]="SupressPercent"
  //  this.Toxic = event.target.checked.toString();
  //}
  //Reptoxic(event) {       //[(ngModel)]="SupressPercent"
  //  this.Reproductive = event.target.checked.toString();
  //}
  //hightoxic(event) {       //[(ngModel)]="SupressPercent"
  //  this.HighlyToxic = event.target.checked.toString();
  //}
  //senstzr(event) {       //[(ngModel)]="SupressPercent"
  //  this.Sensitizer = event.target.checked.toString();
  //}
  //biohzrd(event) {       //[(ngModel)]="SupressPercent"
  //  this.Biohazard = event.target.checked.toString();
  //}
  //nuchazrd(event) {       //[(ngModel)]="SupressPercent"
  //  this.NuclearHazard = event.target.checked.toString();
  //}



  //eyecontactchange(event) {       //[(ngModel)]="SupressPercent"
  //  this.EyeContact = event.target.checked.toString();
  //}
  //mouthchnge(event) {       //[(ngModel)]="SupressPercent"
  //  this.Mouth = event.target.checked.toString();
  //}
  //skinchange(event) {       //[(ngModel)]="SupressPercent"
  //  this.ThroughSkin = event.target.checked.toString();
  //}
  //ingestionchange(event) {       //[(ngModel)]="SupressPercent"
  //  this.Ingestion = event.target.checked.toString();
  //}
  //nosechange(event) {       //[(ngModel)]="SupressPercent"
  //  this.Inhale = event.target.checked.toString();
  //}



  OpenSearchCAS(): void {
    const dialogRef = this.dialog.open(SearchCASComponent, {
      width: '60%', height: '70%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.casno = result[0];
      this.description = result[1];
      this.einecs = result[2];

      this.casload(this.casno).subscribe((casdetailsload) => {
        console.warn("casdetailsload", casdetailsload)
        this.casdata = casdetailsload
        this.casdatadetailsload(this.casdata)
      })
      this.castool(this.casno).subscribe((castoolgrid) => {
        console.warn("castoolgrid", castoolgrid)
        this.castooldata = castoolgrid
      })
    });

  }
  OpenSearchCAS2(): void {
    const dialogRef = this.dialog.open(Searchcas2Component, {
      width: '60%', height: '70%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.casno = result[0];
      this.description = result[1];
      this.einecs = result[2];
      this.synonym = result[3];
      this.synonym1 = result[4];
      this.synonym2 = result[5];
      this.synonym3 = result[6];
      this.synonym4 = result[7];
      this.synonym5 = result[8];

      this.casload(this.casno).subscribe((casdetailsload) => {
        console.warn("casdetailsload", casdetailsload)
        this.casdata = casdetailsload
        this.casdatadetailsload(this.casdata)
      })
      this.castool(this.casno).subscribe((castoolgrid) => {
        console.warn("castoolgrid", castoolgrid)
        this.castooldata = castoolgrid
      })
    });

  }
  OpenRiskPhrases(): void {
    const dialogRef = this.dialog.open(RiskPhrasesComponent, {
      width: '80%', height: '90%', disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.EURiskPhrases = result;
    });
  }
  OpenSafteyPhrases(): void {
    const dialogRef = this.dialog.open(SaftyPhrasesComponent, {
      width: '80%', height: '90%', disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.EUSafetyPhrases = result;
    });
  }
  casdatadetailsload(casdata: any) {
    for (let item of casdata) {
      this.casno = item.CASNo;
      this.description = item.Descrptn;
      this.synonym = item.Synonyms;
      this.synonym1 = item.Synonyms1;
      this.synonym2 = item.Synonyms2;
      this.synonym3 = item.Synonyms3;
      this.synonym4 = item.Synonyms4;        //[checked]="Approved == 'True' ? true : false"
      this.synonym5 = item.Synonyms5;
      this.synonym6 = item.Synonyms;
      this.MSDS = item.MSDS;
      this.WebAddress = item.WebAddress;
      this.SupressPercent = item.SupressPercent;
      if (this.SupressPercent == "True") {
        this.suppresspercent = true;
      }
      else {
        this.suppresspercent = false;
      }//check
      this.SupMinus = item.SupMinus;
      this.SupPlus = item.SupPlus;
      this.IncludeonMSDS = item.IncludeonMSDS;
      if (this.IncludeonMSDS == "Include on MSDS") {
        this.includeonmsds = true;
      }
      else {
        this.includeonmsds = false;
      }
      this.SuprsCas = item.SuprsCas;
      if (this.SuprsCas == "Suppress CAS") {
        this.suprscas = true;
      }
      else {
        this.suprscas = false;
      }
      this.TradeSecret = item.TradeSecret;
      if (this.TradeSecret == "Trade Secret") {
        this.tradesecret = true;
      }
      else {
        this.tradesecret = false;
      }//check
      this.TSCA = item.TSCA;
      if (this.TSCA == "TSCA Inventory") {
        this.tcsa = true;
      }
      else {
        this.tcsa = false;
      }
      this.EEC = item.EEC;
      if (this.EEC == "Reg EEC") {
        this.eec = true;
      }
      else {
        this.eec = false;
      }
      this.SARA = item.SARA;
      if (this.SARA == "SARA Inventory") {
        this.sara = true;
      }
      else {
        this.sara = false;
      }
      this.DSL = item.DSL;
      if (this.DSL == "Canadian DSL Inventory") {
        this.dsl = true;
      }
      else {
        this.dsl = false;
      }
      this.Carcinogen = item.Carcinogen;
      if (this.Carcinogen == "Carcinogen") {
        this.carcinogen = true;
      }
      else {
        this.carcinogen = false;
      }
      this.UpdatedBy = item.UpdatedBy;
      this.UpdatedDt = item.UpdatedDt;
      this.Appearence = item.Appearence;
      this.MeltingPoint = item.MeltingPoint;
      this.BoilRangeLowC = item.BoilRangeLowC;
      this.BoilRangeHighC = item.BoilRangeHighC;
      this.SpceificGravity = item.SpceificGravity;
      this.VaporPressure = item.VaporPressure;
      this.VaporPressureUOM = item.VaporPressureUOM
      this.VaporDensity = item.VaporDensity;
      this.FlashPointF = item.FlashPointF;
      this.FlashPointC = item.FlashPointC;
      this.LowerExplosiveLimit = item.LowerExplosiveLimit
      this.UpperExplosiveLimit = item.UpperExplosiveLimit
      this.BoilPointFMax = item.BoilPointFMax;
      this.BoilPointFMin = item.BoilPointFMin;
      this.AutoIgTemp = item.AutoIgTemp;
      this.WaterSol = item.WaterSol
      this.HMIS_Flame = item.HMIS_Flame;
      this.NFPA_Flame = item.NFPA_Flame
      this.HMIS_Health = item.HMIS_Health
      this.NFPA_Health = item.NFPA_Health;
      this.HMIS_Physical = item.HMIS_Physical;
      this.NFPA_Reactivity = item.NFPA_Reactivity;
      this.NFPA_Special = item.NFPA_Special;
      this.HMIS_Personal = item.HMIS_Personal
      this.FlammableGas = item.FlammableGas;
      if (this.FlammableGas == "Flammable Gas") {
        this.flammablegas = true;
      }
      else {
        this.flammablegas = false;
      }
      this.CombustibleLiquid = item.CombustibleLiquid;
      if (this.CombustibleLiquid == "Combustible Liquid") {
        this.combustibleliquid = true;
      }
      else {
        this.combustibleliquid = false;
      }//check
      this.FlammableSolid = item.FlammableSolid;
      if (this.FlammableSolid == "Flammable Solid") {
        this.flammablesolid = true;
      }
      else {
        this.flammablesolid = false;
      }//check
      this.Pyrophoric = item.Pyrophoric;
      if (this.Pyrophoric == "Pyrophoric") {
        this.pyrophoric = true;
      }
      else {
        this.pyrophoric = false;
      }//check
      this.CompressedGas = item.CompressedGas;
      if (this.CompressedGas == "Combusted Gas") {
        this.compressedgas = true;
      }
      else {
        this.compressedgas = false;
      }
      this.IsStable = item.IsStable;
      if (this.IsStable == "Stable") {
        this.isstable = true;
      }
      else {
        this.isstable = false;
      }//check
      this.FlammableAerosol = item.FlammableAerosol;
      if (this.FlammableAerosol == "Flammable Aerosol") {
        this.flammableaerosol = true;
      }
      else {
        this.flammableaerosol = false;
      }//check
      this.FlammableLiquid = item.FlammableLiquid;
      if (this.FlammableLiquid == "Flammable Liquid") {
        this.flammableliquid = true;
      }
      else {
        this.flammableliquid = false;
      }//check
      this.Explosive = item.Explosive;
      if (this.Explosive == "Explosive") {
        this.explosive = true;
      }
      else {
        this.explosive = false;
      }//check
      this.Organic = item.Organic;
      if (this.Organic == "Organic Peroxide") {
        this.organic = true;
      }
      else {
        this.organic = false;
      }//check
      this.Oxidizer = item.Oxidizer;
      if (this.Oxidizer == "Oxidizer") {
        this.oxidizer = true;
      }
      else {
        this.oxidizer = false;
      }//check
      this.WaterReactive = item.WaterReactive
      if (this.WaterReactive == "Water Reactive") {
        this.waterreactive = true;
      }
      else {
        this.waterreactive = false;
      }//check
      this.WHMISA = item.WHMISA;
      if (this.WHMISA == "Class A: Compressed Gas") {
        this.whmisa = true;
      }
      else {
        this.whmisa = false;
      }        //check
      this.WHMISB = item.WHMISB;
      if (this.WHMISB == "Class B:Flammable and combustible material") {
        this.whmisb = true;
      }
      else {
        this.whmisb = false;
      }      //check
      this.WHMISC = item.WHMISC;
      if (this.WHMISC == "Class C:Oxidizing material") {
        this.whmisc = true;
      }
      else {
        this.whmisc = false;
      }//check
      this.WHMISD1 = item.WHMISD1;
      if (this.WHMISD1 == "Class D-1:Materials causing immediate and serious toxic effects") {
        this.whmisd1 = true;
      }
      else {
        this.whmisd1 = false;
      }//check
      this.WHMISD2 = item.WHMISD2;
      if (this.WHMISD2 == "Class D-2:Materials causing other toxic effects") {
        this.whmisd2 = true;
      }
      else {
        this.whmisd2 = false;
      }//check
      this.WHMISD3 = item.WHMISD3;
      if (this.WHMISD3 == "Class D-3:Biohazardous infectious material") {
        this.whmisd3 = true;
      }
      else {
        this.whmisd3 = false;
      }//check
      this.WHMISE = item.WHMISE;
      if (this.WHMISE == "Class E:Corrossive material") {
        this.whmise = true;
      }
      else {
        this.whmise = false;
      }//check
      this.WHMISF = item.WHMISF;
      if (this.WHMISF == "Class F:Dangerously reactive material") {
        this.whmisf = true;
      }
      else {
        this.whmisf = false;
      }//check
      this.TOBrain = item.TOBrain;
      if (this.TOBrain == "Brain") {
        this.tobrain = true;
      }
      else {
        this.tobrain = false;
      }//check
      this.TOBlood = item.TOBlood;
      if (this.TOBlood == "Blood") {
        this.toblood = true;
      }
      else {
        this.toblood = false;
      }//check
      this.TOEyes = item.TOEyes;
      if (this.TOEyes == "Eyes") {
        this.toeyes = true;
      }
      else {
        this.toeyes = false;
      }//check
      this.TOKidneys = item.TOKidneys;
      if (this.TOKidneys == "Kidney") {
        this.tokidney = true;
      }
      else {
        this.tokidney = false;
      }//check
      this.TOLiver = item.TOLiver;
      if (this.TOLiver == "Liver") {
        this.toliver = true;
      }
      else {
        this.toliver = false;
      }//check
      this.TOLungs = item.TOLungs;
      if (this.TOLungs == "Lungs") {
        this.tolungs = true;
      }
      else {
        this.tolungs = false;
      }//check
      this.TOSkin = item.TOSkin;
      if (this.TOSkin == "Skin") {
        this.toskin = true;
      }
      else {
        this.toskin = false;
      }//check
      this.EyeContact = item.EyeContact;
      if (this.EyeContact == "EyeContact") {
        this.eyecontact = true;
      }
      else {
        this.eyecontact = false;
      }//check
      this.Ingestion = item.Ingestion;
      if (this.Ingestion == "Ingestion") {
        this.ingestion = true;
      }
      else {
        this.ingestion = false;
      }//check
      this.Inhale = item.Inhale;
      if (this.Inhale == "Nose") {
        this.inhale = true;
      }
      else {
        this.inhale = false;
      }//check
      this.ThroughSkin = item.ThroughSkin;
      if (this.ThroughSkin == "ThroughSkin") {
        this.throughskin = true;
      }
      else {
        this.throughskin = false;
      }//check
      this.Mouth = item.Mouth
      if (this.Mouth == "Mouth") {
        this.mouth = true;
      }
      else {
        this.mouth = false;
      }//check
      this.TONervousSystem = item.TONervousSystem
      if (this.TONervousSystem == "Nervous System") {
        this.tonervoussystem = true;
      }
      else {
        this.tonervoussystem = false;
      }//check
      this.Corrosive = item.Corrosive
      if (this.Corrosive == "Corrosive") {
        this.corrossive = true;
      }
      else {
        this.corrossive = false;
      }//check
      this.Irritant = item.Irritant
      if (this.Irritant == "Irritant") {
        this.irritant = true;
      }
      else {
        this.irritant = false;
      }//check
      this.Reproductive = item.Reproductive
      if (this.Reproductive == "Reproductive Toxin") {
        this.reproductive = true;
      }
      else {
        this.reproductive = false;
      }//check
      this.Toxic = item.Toxic
      if (this.Toxic == "Toxic") {
        this.toxic = true;
      }
      else {
        this.toxic = false;
      }//check
      this.HighlyToxic = item.HighlyToxic
      if (this.HighlyToxic == "Highly Toxic") {
        this.highlytoxic = true;
      }
      else {
        this.highlytoxic = false;
      }//check
      this.Sensitizer = item.Sensitizer
      if (this.Sensitizer == "Sensitizer") {
        this.sensitizer = true;
      }
      else {
        this.sensitizer = false;
      }//check
      this.Biohazard = item.Biohazard
      if (this.Biohazard == "BioHazard") {
        this.biohazard = true;
      }
      else {
        this.biohazard = false;
      }//check
      this.NuclearHazard = item.NuclearHazard
      if (this.NuclearHazard == "Nuclear Hazard") {
        this.nuclearhazard = true;
      }
      else {
        this.nuclearhazard = false;
      }//check
      this.OSHAExposure = item.OSHAExposure
      this.ACGIHExposure = item.ACGIHExposure
      this.OtherExposure = item.OtherExposure
      this.EURiskPhrases = item.EURiskPhrases
      this.EUSafetyPhrases = item.EUSafetyPhrases
      this.LC50 = item.LC50
      this.LD50 = item.LD50
      this.AdditionalCasNo = item.AdditionalCasNo
      this.addedby = item.Addedby
      this.addeddt = item.Addeddt
    }
  }
  casload(casno: string) {
    var casnumber = casno;
    let params1 = new HttpParams().set('casno', casnumber);
    return this.http.get("https://smartformulatorrawmaterialvolumepricingwebservice.azurewebsites.net/casmainload", { params: params1 })

  }
  castool(casno: string) {
    var casnumber = casno;
    let params1 = new HttpParams().set('casno', casnumber);
    return this.http.get("https://smartformulatorrawmaterialvolumepricingwebservice.azurewebsites.net/castoolsload", { params: params1 })

  }

  setvaluestooldata(cas_toolgrid_data: any) {
    this.i = 0;
    this.j = 0;

    for (let search of cas_toolgrid_data) {

      this.Datatoolcas[this.i] = ([{
        ID: search.ID,
        CASNo: search.CASNo,
        RegID: search.RegID,
        Descrptn: search.Descrptn,
        Threshold: search.Threshold,
        Ccode1: search.Ccode1,
        Ccode2: search.Ccode2,
        Ccode3: search.Ccode3,
        Ccode4: search.Ccode4,
        Ccode5: search.Ccode5,
        Ccode6: search.Ccode6,
        Ccode7: search.Ccode7,
        Ccode8: search.Ccode8,
        Ccode9: search.Ccode9,

      }]);
      this.i++;

    }

  }
  CAS_Save() {
    var val: any = this.casno;
    if (val != "") {
      var regexp = new RegExp(/^[0-9]{1,7}-[0-9]{1,2}-[0-9]$/);
      var serchfind = regexp.test(val);
    }
    if (this.einecs == undefined || this.einecs == null) {
      this.einecs = "";
    }

    this.setvaluestooldata(this.castooldata);
    this.Datamaincas[0] = ([{
      CASNo: this.casno,
      Descrptn: this.description,
      Einecs: this.einecs,
      Synonyms: this.synonym,
      Synonyms1: this.synonym1,
      Synonyms2: this.synonym3,
      Synonyms3: this.synonym3,
      Synonyms4: this.synonym4,
      Synonyms5: this.synonym5,
      Synonyms6: this.synonym6,
      MSDS: this.MSDS,
      WebAddress: this.WebAddress,
      SupressPercent: this.suppresspercent,
      SupMinus: this.SupMinus,
      SupPlus: this.SupPlus,
      IncludeonMSDS: this.includeonmsds,
      SuprsCas: this.suprscas,
      TradeSecret: this.tradesecret,
      TSCA: this.tcsa,
      EEC: this.eec,
      SARA: this.sara,
      DSL: this.dsl,
      Carcinogen: this.carcinogen,
      UpdatedBy: this.UpdatedBy,
      UpdatedDt: this.UpdatedDt,
      Appearence: this.Appearence,
      MeltingPoint: this.MeltingPoint,
      BoilRangeLowC: this.BoilRangeLowC,
      BoilRangeHighC: this.BoilRangeHighC,
      SpceificGravity: this.SpceificGravity,
      VaporPressure: this.VaporPressure,
      VaporPressureUOM: this.VaporPressureUOM,
      VaporDensity: this.VaporDensity,
      FlashPointF: this.FlashPointF,
      FlashPointC: this.FlashPointC,
      LowerExplosiveLimit: this.LowerExplosiveLimit,
      UpperExplosiveLimit: this.UpperExplosiveLimit,
      BoilPointFMax: this.BoilPointFMax,
      BoilPointFMin: this.BoilPointFMin,
      AutoIgTemp: this.AutoIgTemp,
      WaterSol: this.WaterSol,
      HMIS_Flame: this.HMIS_Flame,
      NFPA_Flame: this.NFPA_Flame,
      HMIS_Health: this.HMIS_Health,
      NFPA_Health: this.NFPA_Health,
      HMIS_Physical: this.HMIS_Physical,
      NFPA_Reactivity: this.NFPA_Reactivity,
      NFPA_Special: this.NFPA_Special,
      HMIS_Personal: this.HMIS_Personal,
      FlammableGas: this.flammablegas,
      CombustibleLiquid: this.combustibleliquid,
      FlammableSolid: this.flammablesolid,
      Pyrophoric: this.pyrophoric,
      CompressedGas: this.compressedgas,
      IsStable: this.isstable,
      FlammableAerosol: this.flammableaerosol,
      FlammableLiquid: this.flammableliquid,
      Explosive: this.explosive,
      Organic: this.organic,
      Oxidizer: this.oxidizer,
      WaterReactive: this.waterreactive,
      WHMISA: this.whmisa,
      WHMISB: this.whmisb,
      WHMISC: this.whmisc,
      WHMISD1: this.whmisd1,
      WHMISD2: this.whmisd2,
      WHMISD3: this.whmisd3,
      WHMISE: this.whmise,
      WHMISF: this.whmisf,
      TOBrain: this.tobrain,
      TOBlood: this.toblood,
      TOEyes: this.toeyes,
      TOKidneys: this.tokidney,
      TOLiver: this.toliver,
      TOLungs: this.tolungs,
      TOSkin: this.toskin,
      EyeContact: this.eyecontact,
      Ingestion: this.ingestion,
      Inhale: this.inhale,
      ThroughSkin: this.throughskin,
      Mouth: this.mouth,
      TONervousSystem: this.tonervoussystem,
      Corrosive: this.corrossive,
      Irritant: this.irritant,
      Reproductive: this.reproductive,
      Toxic: this.toxic,
      HighlyToxic: this.highlytoxic,
      Sensitizer: this.sensitizer,
      Biohazard: this.biohazard,
      NuclearHazard: this.nuclearhazard,
      OSHAExposure: this.OSHAExposure,
      ACGIHExposure: this.ACGIHExposure,
      OtherExposure: this.OtherExposure,
      EURiskPhrases: this.EURiskPhrases,
      EUSafetyPhrases: this.EUSafetyPhrases,
      LC50: this.LC50,
      LD50: this.LD50,
      AdditionalCasNo: this.AdditionalCasNo,
      Addedby: this.addedby,
      Addeddt: this.addeddt,
    }])


    if (this.casno == "" || this.casno == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Enter a CAS no.' } });

    }
    else if (this.description == "" || this.description == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Enter a description' } });
    }
    else if (serchfind == false) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Format Error' } });
    }
    else {
      var operation: string = "Save";
      this.CAS_saveup(operation).subscribe((CAS_saveupdate) => {
        console.warn("CAS_saveupdate", CAS_saveupdate)
        this.CAS_saveupdate_data = CAS_saveupdate

        if (this.CAS_saveupdate_data == "Inserted") {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'CAS' + ' ' + this.description + ' ' + 'is saved successfully' } });
          //this.issearchcustomer = false;
          //this.issearchcustomersave = true;
        }
      })

    }
  }
  CAS_saveup(operation) {
    var oper: string = operation;
    var maindataCAS: any = JSON.stringify(this.Datamaincas);
    var datalistTool: any = JSON.stringify(this.Datatoolcas);
    let params1 = new HttpParams().set('casDetailjson', maindataCAS).set('Castooldocjson', datalistTool).set('operation', oper);
    return this.http.get("https://smartformulatorrawmaterialvolumepricingwebservice.azurewebsites.net/cassaveupdate", { params: params1, responseType: 'text' })
  }
  CAS_Update() {
    var val: any = this.casno;
    if (val != "") {
      var regexp = new RegExp(/^[0-9]{1,7}-[0-9]{1,2}-[0-9]$/);
      var serchfind = regexp.test(val);
    }
    this.setvaluestooldata(this.castooldata);
    this.Datamaincas[0] = ([{
      CASNo: this.casno,
      Descrptn: this.description,
      Einecs: this.einecs,
      Synonyms: this.synonym,
      Synonyms1: this.synonym1,
      Synonyms2: this.synonym3,
      Synonyms3: this.synonym3,
      Synonyms4: this.synonym4,
      Synonyms5: this.synonym5,
      Synonyms6: this.synonym6,
      MSDS: this.MSDS,
      WebAddress: this.WebAddress,
      SupressPercent: this.suppresspercent,
      SupMinus: this.SupMinus,
      SupPlus: this.SupPlus,
      IncludeonMSDS: this.includeonmsds,
      SuprsCas: this.suprscas,
      TradeSecret: this.tradesecret,
      TSCA: this.tcsa,
      EEC: this.eec,
      SARA: this.sara,
      DSL: this.dsl,
      Carcinogen: this.carcinogen,
      UpdatedBy: this.UpdatedBy,
      UpdatedDt: this.UpdatedDt,
      Appearence: this.Appearence,
      MeltingPoint: this.MeltingPoint,
      BoilRangeLowC: this.BoilRangeLowC,
      BoilRangeHighC: this.BoilRangeHighC,
      SpceificGravity: this.SpceificGravity,
      VaporPressure: this.VaporPressure,
      VaporPressureUOM: this.VaporPressureUOM,
      VaporDensity: this.VaporDensity,
      FlashPointF: this.FlashPointF,
      FlashPointC: this.FlashPointC,
      LowerExplosiveLimit: this.LowerExplosiveLimit,
      UpperExplosiveLimit: this.UpperExplosiveLimit,
      BoilPointFMax: this.BoilPointFMax,
      BoilPointFMin: this.BoilPointFMin,
      AutoIgTemp: this.AutoIgTemp,
      WaterSol: this.WaterSol,
      HMIS_Flame: this.HMIS_Flame,
      NFPA_Flame: this.NFPA_Flame,
      HMIS_Health: this.HMIS_Health,
      NFPA_Health: this.NFPA_Health,
      HMIS_Physical: this.HMIS_Physical,
      NFPA_Reactivity: this.NFPA_Reactivity,
      NFPA_Special: this.NFPA_Special,
      HMIS_Personal: this.HMIS_Personal,
      FlammableGas: this.flammablegas,
      CombustibleLiquid: this.combustibleliquid,
      FlammableSolid: this.flammablesolid,
      Pyrophoric: this.pyrophoric,
      CompressedGas: this.compressedgas,
      IsStable: this.isstable,
      FlammableAerosol: this.flammableaerosol,
      FlammableLiquid: this.flammableliquid,
      Explosive: this.explosive,
      Organic: this.organic,
      Oxidizer: this.oxidizer,
      WaterReactive: this.waterreactive,
      WHMISA: this.whmisa,
      WHMISB: this.whmisb,
      WHMISC: this.whmisc,
      WHMISD1: this.whmisd1,
      WHMISD2: this.whmisd2,
      WHMISD3: this.whmisd3,
      WHMISE: this.whmise,
      WHMISF: this.whmisf,
      TOBrain: this.tobrain,
      TOBlood: this.toblood,
      TOEyes: this.toeyes,
      TOKidneys: this.tokidney,
      TOLiver: this.toliver,
      TOLungs: this.tolungs,
      TOSkin: this.toskin,
      EyeContact: this.eyecontact,
      Ingestion: this.ingestion,
      Inhale: this.inhale,
      ThroughSkin: this.throughskin,
      Mouth: this.mouth,
      TONervousSystem: this.tonervoussystem,
      Corrosive: this.corrossive,
      Irritant: this.irritant,
      Reproductive: this.reproductive,
      Toxic: this.toxic,
      HighlyToxic: this.highlytoxic,
      Sensitizer: this.sensitizer,
      Biohazard: this.biohazard,
      NuclearHazard: this.nuclearhazard,
      OSHAExposure: this.OSHAExposure,
      ACGIHExposure: this.ACGIHExposure,
      OtherExposure: this.OtherExposure,
      EURiskPhrases: this.EURiskPhrases,
      EUSafetyPhrases: this.EUSafetyPhrases,
      LC50: this.LC50,
      LD50: this.LD50,
      AdditionalCasNo: this.AdditionalCasNo,
      Addedby: this.addedby,
      Addeddt: this.addeddt,
    }])


    if (this.casno == "" || this.casno == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Enter a CAS no.' } });

    }
    else if (this.description == "" || this.description == undefined) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Enter a description' } });
    }
    else if (serchfind == false) {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: ' Format Error' } });
    }
    else {
      var operation: string = "Update";
      this.CAS_saveup(operation).subscribe((CAS_saveupdate) => {
        console.warn("CAS_saveupdate", CAS_saveupdate)
        this.CAS_saveupdate_data = CAS_saveupdate

        if (this.CAS_saveupdate_data == "Updated") {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'CAS' + ' ' + this.description + ' ' + 'is updated successfully' } });
          //this.issearchcustomer = false;
          //this.issearchcustomersave = true;
        }
      })

    }
  }
  deleteCAS() {
    let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '30%', height: '15%', data: { displaydatagrid: 'This will delete the CAS.Do you really want to delete this?' }, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ${result}');
      this.deleteddata = result;

      if (this.deleteddata == "false") { }
      else {
        this.CAS_delete().subscribe((CAS_dlt) => {
          console.warn("CAS_deletedata", CAS_dlt)
          this.CAS_deletedata = CAS_dlt

          if (this.CAS_deletedata == "deleted") {
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "CAS No deleted successfully!." } });
            this.CAS_deletedata = ""
          }
          else if (this.CAS_deletedata == "CASNO") {
            this.dialog.open(MessageBoxComponent, { width: '25%', height: '15%', data: { displaydata: "This CAS No is assigned to a rawmaterial so can't delete" } });
            this.CAS_deletedata = ""
          }
        })
      }
    });
  }
  CAS_delete() {
    var CasNo = this.casno;
    let params1 = new HttpParams().set('casno', CasNo);
    return this.http.get("https://smartformulatorrawmaterialvolumepricingwebservice.azurewebsites.net/DeleteCAS", { params: params1, responseType: 'text' })
  }
  ClearData() {
    this.casno = '';
    this.description = '';
    this.synonym = '';
    this.synonym1 = '';
    this.synonym2 = '';
    this.synonym3 = '';
    this.synonym4 = '';      //[checked]="Approved == 'True' ? true : false"
    this.synonym5 = '';
    this.synonym6 = '';
    this.MSDS = '';
    this.WebAddress = '';
    this.SupressPercent = '';  //check
    this.SupMinus = '0';
    this.SupPlus = '0';
    this.IncludeonMSDS = "False";           //check
    this.SuprsCas = 'False';               //check
    this.TradeSecret = 'False';          //check
    this.TSCA = 'False';     //check
    this.EEC = 'False';         //check
    this.SARA = 'False';        //check
    this.DSL = 'False';          //check
    this.Carcinogen = 'False';   //check
    this.UpdatedBy = '';
    this.UpdatedDt = '';
    this.Appearence = '';
    this.MeltingPoint = '0';
    this.BoilRangeLowC = '0';
    this.BoilRangeHighC = '0';
    this.SpceificGravity = '0';
    this.VaporPressure = '0';
    this.VaporPressureUOM = 'mm Hg@25C';
    this.VaporDensity = '';
    this.FlashPointF = '';
    this.FlashPointC = '';
    this.LowerExplosiveLimit = '0';
    this.UpperExplosiveLimit = '0';
    this.BoilPointFMax = '0';
    this.BoilPointFMin = '0';
    this.AutoIgTemp = '0';
    this.WaterSol = '0';
    this.HMIS_Flame = '0';
    this.NFPA_Flame = '0';
    this.HMIS_Health = '0';
    this.NFPA_Health = '0';
    this.HMIS_Physical = '0';
    this.NFPA_Reactivity = '0';
    this.NFPA_Special = 'Acid';
    this.HMIS_Personal = 'A';
    this.FlammableGas = 'False';
    this.CombustibleLiquid = 'False';     //check
    this.FlammableSolid = 'False';           //check
    this.Pyrophoric = 'False';                    //check
    this.CompressedGas = 'False';
    this.IsStable = 'False';          //check
    this.FlammableAerosol = 'False';      //check
    this.FlammableLiquid = 'False';        //check
    this.Explosive = 'False';             //check
    this.Organic = 'False';            //check
    this.Oxidizer = 'False';             //check
    this.WaterReactive = '';   //check
    this.WHMISA = 'False';       //check
    this.WHMISB = 'False';     //check
    this.WHMISC = 'False';   //check
    this.WHMISD1 = 'False';      //check
    this.WHMISD2 = 'False';     //check
    this.WHMISD3 = 'False';      //check
    this.WHMISE = 'False';      //check
    this.WHMISF = 'False';        //check
    this.TOBrain = 'False';//check
    this.TOBlood = 'False';     //check
    this.TOEyes = 'False';      //check
    this.TOKidneys = 'False'; //check
    this.TOLiver = 'False';     //check
    this.TOLungs = 'False'; //check
    this.TOSkin = 'False';//check
    this.EyeContact = 'False'; //check
    this.Ingestion = 'False';  //check
    this.Inhale = 'False';   //check
    this.ThroughSkin = 'False';  //check
    this.Mouth = 'False';     //check
    this.TONervousSystem = 'False';      //check
    this.Corrosive = 'False';        //check
    this.Irritant = 'False';    //check
    this.Reproductive = 'False'; //check
    this.Toxic = 'False';    //check
    this.HighlyToxic = 'False';   //check
    this.Sensitizer = 'False';    //check
    this.Biohazard = 'False';     //check
    this.NuclearHazard = 'False';   //check
    this.OSHAExposure = '';
    this.ACGIHExposure = '';
    this.OtherExposure = '';
    this.EURiskPhrases = '';
    this.EUSafetyPhrases = '';
    this.LC50 = '';
    this.LD50 = '';
    this.AdditionalCasNo = '';
    this.addedby = '';
    this.addeddt = '';
    this.suppresspercent = false;
    this.includeonmsds = false;
    this.eec = false;
    this.tcsa = false;
    this.dsl = false;
    this.sara = false;
    this.suprscas = false;
    this.tradesecret = false;
    this.carcinogen = false;
    this.flammablegas = false;
    this.combustibleliquid = false;
    this.flammablesolid = false;
    this.pyrophoric = false;
    this.compressedgas = false;
    this.isstable = false;
    this.flammableaerosol = false;
    this.flammableliquid = false;
    this.explosive = false;
    this.organic = false;
    this.oxidizer = false;
    this.waterreactive = false;
    this.whmisa = false;
    this.whmisb = false;
    this.whmisc = false;
    this.whmisd1 = false;
    this.whmisd2 = false;
    this.whmisd3 = false;
    this.whmise = false;
    this.whmisf = false;
    this.tobrain = false;
    this.toblood = false;
    this.toeyes = false;
    this.tokidney = false;
    this.toliver = false;
    this.tolungs = false;
    this.toskin = false;
    this.eyecontact = false;
    this.ingestion = false;
    this.inhale = false;
    this.throughskin = false;
    this.mouth = false;
    this.tonervoussystem = false;
    this.corrossive = false;
    this.irritant = false;
    this.reproductive = false;
    this.toxic = false;
    this.highlytoxic = false;
    this.sensitizer = false;
    this.biohazard = false;
    this.nuclearhazard = false;
  }
  ngOnInit() {
    this.casload(this.casno).subscribe((casdetailsload) => {
      console.warn("casdetailsload", casdetailsload)
      this.casdata = casdetailsload
      this.casdatadetailsload(this.casdata)
    })
    this.castool(this.casno).subscribe((castoolgrid) => {
      console.warn("castoolgrid", castoolgrid)
      this.castooldata = castoolgrid
    })
  }

}

export class CASdatamain {
  CASNo: string;
  Descrptn: string;
  Einecs: string;
  Synonyms: string;
  Synonyms1: string;
  Synonyms2: string;
  Synonyms3: string;
  Synonyms4: string;
  Synonyms5: string;
  Synonyms6: string;
  MSDS: string;
  WebAddress: string;
  SupressPercent: string;
  SupMinus: string;
  SupPlus: string;
  IncludeonMSDS: string;
  SuprsCas: string;
  TradeSecret: string;
  TSCA: string;
  EEC: string;
  SARA: string;
  DSL: string;
  Carcinogen: string;
  UpdatedBy: string;
  UpdatedDt: string;
  Appearence: string;
  MeltingPoint: string;
  BoilRangeLowC: string;
  BoilRangeHighC: string;
  SpceificGravity: string;
  VaporPressure: string;
  VaporPressureUOM: string;
  VaporDensity: string;
  FlashPointF: string;
  FlashPointC: string;
  LowerExplosiveLimit: string;
  UpperExplosiveLimit: string;
  BoilPointFMax: string;
  BoilPointFMin: string;
  AutoIgTemp: string;
  WaterSol: string;
  HMIS_Flame: string;
  NFPA_Flame: string;
  HMIS_Health: string;
  NFPA_Health: string;
  HMIS_Physical: string;
  NFPA_Reactivity: string;
  NFPA_Special: string;
  HMIS_Personal: string;
  FlammableGas: string;
  CombustibleLiquid: string;
  FlammableSolid: string;
  Pyrophoric: string;
  CompressedGas: string;
  IsStable: string;
  FlammableAerosol: string;
  FlammableLiquid: string;
  Explosive: string;
  Organic: string;
  Oxidizer: string;
  WaterReactive: string;
  WHMISA: string;
  WHMISB: string;
  WHMISC: string;
  WHMISD1: string;
  WHMISD2: string;
  WHMISD3: string;
  WHMISE: string;
  WHMISF: string;
  TOBrain: string;
  TOBlood: string;
  TOEyes: string;
  TOKidneys: string;
  TOLiver: string;
  TOLungs: string;
  TOSkin: string;
  EyeContact: string;
  Ingestion: string;
  Inhale: string;
  ThroughSkin: string;
  Mouth: string;
  TONervousSystem: string;
  Corrosive: string;
  Irritant: string;
  Reproductive: string;
  Toxic: string;
  HighlyToxic: string;
  Sensitizer: string;
  Biohazard: string;
  NuclearHazard: string;
  OSHAExposure: string;
  ACGIHExposure: string;
  OtherExposure: string;
  EURiskPhrases: string;
  EUSafetyPhrases: string;
  LC50: string;
  LD50: string;
  AdditionalCasNo: string;
  Addedby: string;
  Addeddt: string;
}
export class tooldata {
  ID: string;
  CASNo: string;
  RegID: string;
  Descrptn: string;
  Threshold: string;
  Ccode1: string;
  Ccode2: string;
  Ccode3: string;
  Ccode4: string;
  Ccode5: string;
  Ccode6: string;
  Ccode7: string;
  Ccode8: string;
  Ccode9: string;
}

