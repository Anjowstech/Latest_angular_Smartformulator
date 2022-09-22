import { Component, OnInit, Inject } from '@angular/core';
import { DataShareServiceService } from 'src/app/data-share-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/raw-material/raw-material.component';

@Component({
  selector: 'app-safty-phrases',
  templateUrl: './safty-phrases.component.html',
  styleUrls: ['./safty-phrases.component.css']
})
export class SaftyPhrasesComponent implements OnInit {
  titlename: string = '';
  SelectedItemList = [];
  masterSelectedtrue: boolean = true;
  masterSelectedfalse: boolean = false;
  checklist: any;
  checkedList: any;
  list: any;

 
  constructor(private Datashare: DataShareServiceService, public dialogRef: MatDialogRef<SaftyPhrasesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.list = [{
      id: 'User1',
      title: 'S1 Keep locked up.',
      checked: false
    },
    {
      id: 'User2',
      title: 'S2 Keep out of the reach of children.',
      checked: false
    },
    {
      id: 'User3',
      title: 'S3 Keep in a cool place.',
      checked: false
    },
    {
      id: 'User4',
      title: 'S4 Keep away from living quarters.',
      checked: false
    },
    {
      id: 'User5',
      title: 'S5 Keep contents under ...(there follows the name of a liquid).',
      checked: false
    },
    {
      id: 'User6',
      title: 'S6 Keep under ... (there follows the name of an inert gas).',
      checked: false
    },
    {
      id: 'User7',
      title: 'S7 Keep container tightly closed.',
      checked: false
    },

    {
      id: 'User8',
      title: 'S8 Keep container dry.',
      checked: false
    },

    {
      id: 'User9',
      title: 'S9 Keep container in a well-ventilated place.',
      checked: false
    },

    {
      id: 'User2',
      title: 'S2 Keep out of the reach of children.',
      checked: false
    },

    {
      id: 'User12',
      title: 'S12 Do not keep the container sealed.',
      checked: false
    },

    {
      id: 'User13',
      title: 'S13 Keep away from food, drink and animal foodstuffs.',
      checked: false
    },

    {
      id: 'User14',
      title: 'S14 Keep away from ... (a list of incompatible materials will follow).',
      checked: false
    },
    {
      id: 'User15',
      title: 'S15 Keep away from heat.',
      checked: false
    },

    {
      id: 'User16',
      title: 'S16 Keep away from sources of ignition.',
      checked: false
    },

    {
      id: 'User17',
      title: 'S17 Keep away from combustible material.',
      checked: false
    },

    {
      id: 'User18',
      title: 'S18 Handle and open container with care.',
      checked: false
    },

    {
      id: 'User20',
      title: 'S20 When using, do not eat or drink.',
      checked: false
    },

    {
      id: 'User21',
      title: 'S21 When using do not smoke.',
      checked: false
    },

    {
      id: 'User22',
      title: 'S22 Do not breathe dust.',
      checked: false
    },

    {
      id: 'User23',
      title: 'S23 Do not breathe vapour.',
      checked: false
    },

    {
      id: 'User24',
      title: 'S24 Avoid contact with skin.',
      checked: false
    },

    {
      id: 'User25',
      title: 'S25 Avoid contact with eyes.',
      checked: false
    },

    {
      id: 'User26',
      title: 'S26 In case of contact with eyes, rinse immediately with plenty of water and seek medical advice .',
      checked: false
    },
    {
      id: 'User27',
      title: 'S27 Take off immediately all contaminated clothing.',
      checked: false
    },
    {
      id: 'User28',
      title: '28 After contact with skin, wash immediately with plenty of soap-suds.',
      checked: false
    },

    {
      id: 'User29',
      title: 'S29 Do not empty into drains.',
      checked: false
    },

    {
      id: 'User30',
      title: 'S30 Never add water to this product.',
      checked: false
    },

    {
      id: 'User33',
      title: 'S33 Take precautionary measures against static discharges.',
      checked: false
    },

    {
      id: 'User35',
      title: 'S35 This material and its container must be disposed of in a safe way.',
      checked: false
    },
    {
      id: 'User36',
      title: 'S36 Wear suitable protective clothing.',
      checked: false
    },

    {
      id: 'User37',
      title: 'S37 Wear suitable gloves.',
      checked: false
    },
    {
      id: 'User38',
      title: 'S38 In case of insufficient ventilation, wear suitable respiratory equipment.',
      checked: false
    },
    {
      id: 'User40',
      title: 'S40 To clean the floor and all objects contaminated by this material, use .... (there follows suitable cleaning material).',
      checked: false
    },
    {
      id: 'User41',
      title: 'S41 In case of fire and / or explosion do not breathe fumes.',
      checked: false
    },
    {
      id: 'User423',
      title: 'S43 In case of fire use. (there follows the type of fire-fighting equipment to be used.)',
      checked: false
    },

    {
      id: 'User45',
      title: 'S45 In case of accident or if you feel unwell, seek medical advice immediately (show the label whenever possible.)',
      checked: false
    },
    {
      id: 'User46',
      title: 'S46 If swallowed, seek medical advice immediately and show this container or label.',
      checked: false
    },

    {
      id: 'User47',
      title: 'S47 Keep at temperature not exceeding...',
      checked: false
    },

    {
      id: 'User48',
      title: 'S48 To be kept wet with (there follows a material name)',
      checked: false
    },

    {
      id: 'User49',
      title: 'S49 Keep only in the original container.',
      checked: false
    },

    {
      id: 'User50',
      title: 'S50 Do not mix with',
      checked: false
    },
    {
      id: 'User51',
      title: 'S51 Use only in well ventilated areas.',
      checked: false
    },
    {
      id: 'User52',
      title: 'S52 Not recommended for interior use on large surface areas.',
      checked: false
    },
    {
      id: 'User53',
      title: 'S53 Avoid exposure - obtain special instructions before use.',
      checked: false
    },
    {
      id: 'User56',
      title: 'S56 Dispose of this material and its container at hazardous or special waste collection point.',
      checked: false
    },
    {
      id: 'User57',
      title: 'S57 Use appropriate container to avoid environmental contamination.',
      checked: false
    },
    {
      id: 'User59',
      title: 'S59 Refer to manufacturer / supplier for information on recovery / recycling.',
      checked: false
    },
    {
      id: 'User2',
      title: 'S2 Keep out of the reach of children.',
      checked: false
    },
    {
      id: 'User60',
      title: 'S60 This material and its container must be disposed of as hazardous waste..',
      checked: false
    },
    {
      id: 'User61',
      title: 'S61 Avoid release to the environment. Refer to special instructions / safety data sheets.',
      checked: false
    },

    {
      id: 'User62',
      title: 'S62 If swallawed, do not induce vomitting; seek medical advice immediately and show this container or late.',
      checked: false
    }]
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
      this.titlename = this.titlename + '\n' + item.title;
    }

    this.dialogRef.close(this.titlename);
  }
  selectedcheckbox() {
    this.SelectedItemList;
    this.searchItemlist(this.SelectedItemList);
  }
  searchItemlist(itemlist: any) {

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
