import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { MessageBoxYesnoComponent } from '../../message-box-yesno/message-box-yesno.component';

@Component({
  selector: 'app-rm-vp',
  templateUrl: './rm-vp.component.html',
  styleUrls: ['./rm-vp.component.css']
})
export class RMVPComponent implements OnInit {
  defaultUOMload_data: any;
  vpsaveup_data: any;
  vpload_data: any;
  vpdelete_data: any;
  vpdetails: string[];
  vpdlt: string;
  inciname: string;
  itemcode: string;
  supplier: string = '';
  tradename: string = '';
  vpID: string = '';
  quantity: string = '0.00000';
  volprice: string = '0.00';
  leadtime: string = '';
  comments: string = '';
  qtyunit: string = 'Kg';
  vpunit: string = 'Kg';
  constructor(public dialog: MatDialog, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  defaultUOMload() {
    return this.http.get("https://smarformulatorrawmaterialswebservice2.azurewebsites.net/UnitTableLoad")
  }
  VPload() {
    var inci: string = this.inciname;
    var itemcode: string = this.itemcode;
    var trade: string = this.tradename;
    let params1 = new HttpParams().set('INCIName', inci).set('GeneralItemCode', itemcode).set('TradeName', trade);
    return this.http.get("https://smartformulatorrawmaterialvolumepricingwebservice.azurewebsites.net/DisplayVOCAerosol", { params: params1 })
  }
  setvpvalues(vpload: any) {
    this.vpID = vpload.VolumepricingID;
    this.inciname = vpload.INCIName;
    this.quantity = vpload.Quantity;
    this.qtyunit = vpload.Qtyunit;
    this.volprice = vpload.price;
    this.vpunit = vpload.priceunit;
    this.leadtime = vpload.Leadtime;
    this.comments = vpload.Comments;
  }
  blurclick(event: any) {
    this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Please double click the VP and then delete.' } });
  }
  Volumepricing_saveupdate() {
    if (this.quantity <= "0.00000") {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter a quantity.' } });
    }
    else if (this.volprice <= "0.00") {
      this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'Enter a price.' } });
    }
    else {
      this.VPsaveupdate().subscribe((vpsaveupdate) => {
        console.warn("vpsaveupdate", vpsaveupdate)
        this.vpsaveup_data = vpsaveupdate

        if (this.vpsaveup_data == "Inserted") {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'RM Volume pricing details added successfully.' } });
        }
        else if (this.vpsaveup_data == "Updated") {
          this.dialog.open(MessageBoxComponent, { width: '20%', height: '15%', data: { displaydata: 'RM Volume pricing details updated successfully.' } });
        }
        this.VPload().subscribe((vpload) => {
          console.warn("vpload", vpload)
          this.vpload_data = vpload
        })

      })
    }
  }
  VPsaveupdate() {
    var id: string = this.vpID;
    var inci: string = this.inciname;
    var item: string = this.itemcode;
    var tradename: string = this.tradename;
    var quantity: string = this.quantity;
    var qtyunit: string = this.qtyunit;
    var volprice: string = this.volprice;
    var priceunit: string = this.vpunit;
    var comments: string = this.comments;
    var leadtime: string = this.leadtime;
    var supplier: string = this.supplier;

    let params1 = new HttpParams().set('VolumepricingId', id).set('inciname', inci).set('GenItemCode', item).set('IngredientTradeName', tradename).set('Qty', quantity).set('QtyUnit', qtyunit).set('txtvolumeprice', volprice).set('PriceUnit', priceunit).set('txtcomments', comments).set('txtLeadtime', leadtime).set('txtSupplier', supplier);
    return this.http.get("https://smartformulatorrawmaterialvolumepricingwebservice.azurewebsites.net/VPPricingSaveUpdate", { params: params1, responseType: 'text' })
  }
  Volumepricing_delete() {
    let dialogRef = this.dialog.open(MessageBoxYesnoComponent, { width: '35%', height: '15%', data: { displaydatagrid: 'Do you want to DELETE this Volume Pricing for this RM?' }, disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ${result}');
      this.vpdlt = result;

      if (this.vpdlt == "false") { }
      else {

        this.VPdelete().subscribe((vpdelete) => {
          console.warn("vpdelete", vpdelete)
          this.vpdelete_data = vpdelete

          if (this.vpdelete_data == "Deleted") {
            this.dialog.open(MessageBoxComponent, {
              width: '20%', height: '15%', data: {
                displaydata: 'Volume pricing for this Raw Material ' + this.inciname + ' ' + ' is deleted successfully.'
              }
            });
          }
          this.VPload().subscribe((vpload) => {
            console.warn("vpload", vpload)
            this.vpload_data = vpload
          })

        })
      }
    });


  }
  VPdelete() {
    var id: string = this.vpID;
    let params1 = new HttpParams().set('VolumepricingId', id);
    return this.http.get("https://smartformulatorrawmaterialvolumepricingwebservice.azurewebsites.net/DeleteVP", { params: params1, responseType: 'text' })
  }
  Cleardata() {
    this.quantity = '0.00000';
    this.volprice = '0.00';
    this.qtyunit = 'Kg';
    this.vpunit = 'Kg';
    this.leadtime = '';
    this.comments = '';
  }
  ngOnInit() {
    this.vpdetails = this.data.displaydata;
    this.inciname = this.vpdetails[0];
    this.itemcode = this.vpdetails[1];
    this.supplier = this.vpdetails[2];
    this.tradename = this.vpdetails[3];
    this.defaultUOMload().subscribe((defaultUOMload) => {
      console.warn("defaultUOMload", defaultUOMload)
      this.defaultUOMload_data = defaultUOMload
    })
    this.VPload().subscribe((vpload) => {
      console.warn("vpload", vpload)
      this.vpload_data = vpload
    })

  }

}
