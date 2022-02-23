import { Component, OnInit, Inject } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/raw-material/raw-material.component';

@Component({
  selector: 'app-risk-phrases',
  templateUrl: './risk-phrases.component.html',
  styleUrls: ['./risk-phrases.component.css']
})
export class RiskPhrasesComponent implements OnInit {
  titlename: string = '';
  
  SelectedItemList = [];
  masterSelectedtrue: boolean = true;
  masterSelectedfalse: boolean = false;
  checklist: any;
  checkedList: any;
  list: any;
  constructor(private Datashare: DataShareServiceService, public dialogRef: MatDialogRef<RiskPhrasesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    //this.masterSelected = false;
    this.list = [{
      id: 'User1',
      title: 'R1 Explosives when dry',
      checked: false
    },
    {
      id: 'User2',
      title: 'R2 Risk of Explosion by shock, friction,fire, or other source of ignition',
      checked: false
    },
    {
      id: 'User3',
      title: 'R3 Extreme risk of Explosion by shock, friction,fire or other source of ignition',
      checked: false
    },
    {
      id: 'User4',
      title: 'R4 Forms very senstive explosive metallic compound',
      checked: false
    },
    {
      id: 'User5',
      title: 'R5 Heating may cause an explosion',
      checked: false
    }]
    //this.getCheckedItemList();
  }

  ngOnInit() {
    this.fetchSelectedItems()
    
   
  }
 
    isAllSelected() {
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].checked = this.masterSelectedtrue;
      }
    
   
  }
  isAllunSelected() {
    for (var i = 0; i < this.list.length; i++) {
      this.list[i].checked = this.masterSelectedfalse;
    }


  }

  onNoClick(): void {
    for (let item of this.SelectedItemList) {
      this.titlename = this.titlename + '\n'+ item.title;
    }
      
    this.dialogRef.close(this.titlename);
  }
  selectedcheckbox() {
    this.SelectedItemList;
   this.searchItemlist(this.SelectedItemList);
  }
  searchItemlist(itemlist:any) {

    var catename: string = itemlist;  

    //    GroupName1: this.clickeddata1


    this.Datashare.searchItemlist(catename);


  }
  changeSelection() {
    this.fetchSelectedItems()
  }
  fetchSelectedItems() {
    this.SelectedItemList = this.list.filter((value, index) => { return value.checked });
  }

}
