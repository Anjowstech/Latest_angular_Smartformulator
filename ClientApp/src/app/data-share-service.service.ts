import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Createuser } from './createuser';
import { IItem } from './IItem';
   


@Injectable({
  providedIn: 'root'
})
export class DataShareServiceService {
  Url: string;
  // private _items: IItem[] = [1];
  itemvalue: string = '';
  itemvalue1: string = '';
  itemvalue2: string = '';
  itemvalue3: string = '';
  itemvalue4: string = '';
  itemvalue5: string = '';
  itemvalue6: string = '';
  itemvalue7: string = '';
  itemvalue8: string = '';
  Temppass: string = "";
  itemlist1: string = "";
  itemcate: string = '';
  itemcateid: string = '';
  formco: string = "";
  gridinciname: string = "";
  formcodeinstruction: string = '';
  formcodeinstructiondata: string = '';
  itemrisklist = [];
  formuladetails = [];
  backtoformul = [];
  restrictdetails = [];
  rawtable: any;
  datasharepdr: any;
  selectddata: any;
  itemcodetoraw: any;
  labelvalues: string;
  itemcodeval: string;
  suppna: any
  datashareitemcode: any;
  datasharecasdata: any;
  custocod
  datashareclientlocation: any = [];
  senditemtoraw(itemda: string) {
    this.itemcodetoraw = itemda;
  }
  senditemtosupplier(suppl: string) {
    this.suppna = suppl;
  }
  sendcustomercode(ccode: string) {
    this.custocod = ccode;
  }
  sendpdrno(pdrno: string) {
    this.datasharepdr = pdrno
  }
  senditemcode(itemcode: string) {
    this.itemcodeval = itemcode;
  }
  sendlabel(incilabel:string) {
    this.labelvalues = incilabel
  }
  sendrestrictiondetails(formularestrictiondetails: string[]) {
    this.restrictdetails = formularestrictiondetails
  }
  sendaddlocation(searchlocation: string[]) {
    this.datashareclientlocation = searchlocation
  }
  sendItemcodeno(itemcode: string) {
    this.datashareitemcode = itemcode
  }

  backtoformuladetails(backtoform: string[]) {
    this.backtoformul = backtoform
  }
  sendformuladetails(formuladetailsvalues: string[]) {
    this.formuladetails = formuladetailsvalues
  }
  sendforminstruction(formulacodeinstruction: string) {
    this.formcodeinstruction = formulacodeinstruction

  }
  sendgridinciname(inciname:string) {
    this.gridinciname = inciname
  }
  sendforminstdata(formuladatainstr:string) {
    this.formcodeinstructiondata = formuladatainstr
  }
  sendrawtable(rawgrid: string) {
    this.rawtable = rawgrid;
  }

  sendformcode(formcode: string) {
    this.formco = formcode;
  }
  searchItemname(item1: string) {
    this.itemcate = item1;
   


  }

  searchItemlist(item1: any) {
    this.itemrisklist = item1;



  }
  sendcasdata(searchcas: string[]) {
    this.datasharecasdata = searchcas
  }
  searchItemid(item2: string) {
    this.itemcateid = item2;
  }
  addItem(item: string) {
    this.itemvalue = item


  }
  addItem1(item: string, item1: string, item2: string, item3: string, item4: string, item5: string, item6: string, item7: string, item8: string) {
    this.itemvalue = item
    this.itemvalue1 = item1
    this.itemvalue2 = item2
    this.itemvalue3 = item3
    this.itemvalue4 = item4
    this.itemvalue5 = item5
    this.itemvalue6 = item6
    this.itemvalue7 = item7
    this.itemvalue8 = item8



  }
  //DatashareTempPass(itempass: string) {
  //  this.Temppass = itempass
  //}
  getitemcode(): string {
    return this.itemcodeval;
  }
getitemtosupplier(): string {
  return this.suppna;
  }
  getitemcoderaw(): string {
    return this.itemcodetoraw;
  }

 


  getitemcode1(): string {
    return this.datashareitemcode;
  }
  getcustocode(): string {
    return this.custocod;
  }
  DatashareTempPass(): any {
    var itemlist1: [string] = [this.itemlist1]
    return itemlist1;
  }
  getclientlocation(): string[] {
    return this.datashareclientlocation;
  }
  getlabel():string {
    return this.labelvalues;
  }
  getcasdata(): string[] {
    return this.datasharecasdata;
  }
  getpdrno(): string {
    return this.datasharepdr;
  }
  getrestrictiondetails(): any {
    return this.restrictdetails ;
  }
  getbackformdetails(): any {
    return this.backtoformul;
  }
  getformuladetails(): any {
    return this.formuladetails;
  }
  getsendforminstruction(): string {
    return this.formcodeinstruction;
  }
  getrawtable(): string {
    return this.rawtable;
  }
  getsendforminstdata():string {
    return this.formcodeinstructiondata;
  }
  getformcode(): string{
  return this.formco;
  }

  getgridinciname(): string {
    return this.gridinciname;
  }

  getcate(): string {


    return this.itemcate;
    

  }
  getitemlist(): any {
    return this.itemrisklist;
  }
  getcateid(): string{
  return this.itemcateid;
  }
  clean(){
    this.itemcate = '';
    this.itemcateid = '';
  }

  getItems(): string {
    return this.itemvalue;



  }
  getItems1(): any {



    var itemList: [string, string, string, string, string, string, string, string, string] = [this.itemvalue, this.itemvalue1, this.itemvalue2, this.itemvalue3, this.itemvalue4, this.itemvalue5, this.itemvalue6, this.itemvalue7, this.itemvalue8]
    return

    itemList;



  }
  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:52060';
  }



  private _listners = new Subject<any>();
  listen(): Observable<any> {
    return this._listners.asObservable();
  }
  filter(filterBy: string) {
    this._listners.next(filterBy);
  }
  EditUserService() {



  }



  
}
