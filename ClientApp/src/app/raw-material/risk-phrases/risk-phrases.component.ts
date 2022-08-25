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
      },
      {
        id: 'User6',
        title: 'R6 Explosives with or without conatact with air',
        checked: false
      },
      {
        id: 'User7',
        title: 'R7 May cause fire ',
        checked: false
      },
      {
        id: 'User8',
        title: 'R8 Contact with combustable material may cause fire',
        checked: false
      },
      {
        id: 'User9',
        title: 'R9 Explosive when mixed with combustable material ',
        checked: false
      },

      {
        id: 'User10',
        title: 'R10 Flammable',
        checked: false
      },
      {
        id: 'User11',
        title: 'R11 Highly flammable',
        checked: false
      },
      {
        id: 'User12',
        title: 'R12 Extremely flammable',
        checked: false
      },
      {
        id: 'User13',
        title: 'R13 Extremely flammable liquified gas',
        checked: false
      },
      {
        id: 'User14',
        title: 'R14 Reacts violently with water ',
        checked: false
      },
     
      {
        id: 'User15',
        title: 'R15 Contact with water liberates extremely flammable gases',
        checked: false
      },
      {
        id: 'User16',
        title: 'R16 Explosive when mixed with oxidizing substances',
        checked: false
      },
      {
        id: 'User17',
        title: 'R17 Spontaneously flammable in air ',
        checked: false
      },
      {
        id: 'User18',
        title: 'R18 In use, may form inflammable/explosive vapour-air mixture',
        checked: false
      },
      {
        id: 'User19',
        title: 'R19 May form explosive peroxides',
        checked: false
      },
      {
        id: 'User20',
        title: 'R20 Harmful by inhalation',
        checked: false
      },
      {
        id: 'User21',
        title: 'R21 Harmful in contact with skin',
        checked: false
      },
      {
        id: 'User22',
        title: 'R22 Harmful if swallowed',
        checked: false
      },
      {
        id: 'User23',
        title: 'R23 Toxic by inhalation',
        checked: false
      },
      {
        id: 'User24',
        title: 'R24 Toxic in contact with skin',
        checked: false
      },
      {
        id: 'User25',
        title: 'R25 Toxic if swallowed',
        checked: false
      },
      {
        id: 'User26',
        title: 'R26 Very toxic by inhalation',
        checked: false
      },
      {
        id: 'User27',
        title: 'R27 Very toxic in contact with skin',
        checked: false
      },
      {
        id: 'User28',
        title: 'R28 Very toxic if swallowed',
        checked: false
      },
      {
        id: 'User29',
        title: 'R29 Contact with water liberates toxic gas',
        checked: false
      },
      {
        id: 'User30',
        title: 'R30 Can come highly flammable in use',
        checked: false
      },
      {
        id: 'User31',
        title: 'R31 Contact with acid liberates toxic gas',
        checked: false
      },
      {
        id: 'User32',
        title: 'R32 Contact with acid liberates very toxic gas',
        checked: false
      },
      {
        id: 'User33',
        title: 'R33 Danger of cumulative effects',
        checked: false
      },
      {
        id: 'User34',
        title: 'R34 Causes burns',
        checked: false
      },
      {
        id: 'User35',
        title: 'R35 Causes Severe burns  ',
        checked: false
      },
      {
        id: 'User36',
        title: 'R36 Irritating to eyes',
        checked: false
      },
      {
        id: 'User37',
        title: 'R37 Irritative to respiratory system',
        checked: false
      },
      {
        id: 'User38',
        title: 'R38 Irritating to skin',
        checked: false
      },
      {
        id: 'User39',
        title: 'R39 Danger of very serious irreversible effects',
        checked: false
      },
      {
        id: 'User40',
        title: 'R40 Limited evidence of a carcinogenic effect',
        checked: false
      },
    ]
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
