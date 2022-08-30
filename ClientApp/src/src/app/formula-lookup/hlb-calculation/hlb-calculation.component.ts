import { Component, OnInit } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';

@Component({
  selector: 'app-hlb-calculation',
  templateUrl: './hlb-calculation.component.html',
  styleUrls: ['./hlb-calculation.component.css']
})
export class HlbCalculationComponent implements OnInit {
  formuladetails: string[];
  PDRNohlb: string='' ;
  formulacodehlb: string='' ;
  formulanamehlb: string='' ;
  constructor(private Datashare: DataShareServiceService) { }

  ngOnInit() {
    this.formuladetails = this.Datashare.getformuladetails()
    this.PDRNohlb = this.formuladetails[0];
    this.formulacodehlb = this.formuladetails[1];
    this.formulanamehlb = this.formuladetails[2];
  }

}
