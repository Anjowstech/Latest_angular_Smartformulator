import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface FormulaList {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  status: string;
  createdby: string;
  date: string;

}
export interface FormulaList1 {

  position: number;


}
const ELEMENT_DATA: FormulaList[] = [
  { position: 'Formula 1002', name: '3-in-1 Ethnic shampoo', weight: '2011-1112', symbol: '3-in-1 Ethnic shampoo', status: 'productized', createdby: 'Admin', date: '7/26/2011' },
  { position: 'Formula 1002.Ver 01', name: '3-in-1 Ethnic shampoo', weight: '2011-1112', symbol: '3-in-1 Ethnic shampoo', status: 'productized', createdby: 'Admin', date: '7/26/2011' },
  { position: 'Formula 1002.Ver 02', name: '3-in-1 Ethnic shampoo', weight: '2011-1112', symbol: '3-in-1 Ethnic shampoo', status: 'WIP-Sample Submitted', createdby: 'Admin', date: '7/26/2011' },
  { position: 'Formula 1002.Ver 03', name: '3-in-1 Ethnic shampoo', weight: '2011-1112', symbol: '3-in-1 Ethnic shampoo', status: 'WIP-Sample Submitted', createdby: 'Admin', date: '7/26/2011' },
  { position: 'Formula 1002.Ver 04', name: '3-in-1 Ethnic shampoo', weight: '2011-1112', symbol: '3-in-1 Ethnic shampoo', status: 'productized', createdby: 'Admin', date: '7/26/2011' },
  { position: 'Formula 1002.Ver 05', name: '3-in-1 Ethnic shampoo', weight: '2011-1112', symbol: '3-in-1 Ethnic shampoo', status: 'A-Active', createdby: 'Admin', date: '7/26/2011' },
  { position: 'Formula 1002.Ver 06', name: '3-in-1 Ethnic shampoo', weight: '2011-1112', symbol: '3-in-1 Ethnic shampoo', status: 'N-Inactive', createdby: 'John', date: '7/26/2011' },
  { position: 'Formula 1002..Ver 07', name: '3-in-1 Ethnic shampoo', weight: '2011-1112', symbol: '3-in-1 Ethnic shampoo', status: 'WIP-Under Development', createdby: 'Admin', date: '7/26/2011' },
  { position: 'Formula 1002.Ver 08', name: '3-in-1 Ethnic shampoo', weight: '2011-1112', symbol: '3-in-1 Ethnic shampoo', status: 'productized', createdby: 'Admin', date: '7/26/2011' },
  { position: 'Formula 1002.Ver 09', name: '3-in-1 Ethnic shampoo', weight: '2011-1112', symbol: '3-in-1 Ethnic shampoo', status: 'productized', createdby: 'Admin', date: '7/26/2011' },

];
const ELEMENT_DATA1: FormulaList1[] = [
  { position: 1, },];
@Component({
  selector: 'app-formula-listing',
  templateUrl: './formula-listing.component.html',
  styleUrls: ['./formula-listing.component.css']
})
export class FormulaListingComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'status', 'createdby', 'date'];
  displayedColumns1 = ['position', 'name', 'weight', 'symbol', 'status', 'createdby', 'date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

    }
  constructor() { }

  ngOnInit() {
  }

}
