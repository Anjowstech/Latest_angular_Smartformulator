import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { NavItem } from './nav-item';
import { MatMenuTrigger } from '@angular/material';
import { PostsService } from './posts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  data: any;
  constructor(private postData: PostsService) { }
  version = VERSION;
  panelOpenState = false;
  navItems: NavItem[] = [
    {

      displayName: 'Projects/PDR',
      iconName: 'close',
      children: [
        {
          displayName: 'General',
          iconName: 'speaker_notes',
          route: 'counter'

        },
        {
          displayName: 'Requirements',
          iconName: 'speaker_notes',

        },
        {
          displayName: 'Product Dev.Brief',
          iconName: 'speaker_notes',
          route: 'feedback'
        },
        {
          displayName: 'Assigning Users',
          iconName: 'speaker_notes',
          route: 'feedback'
        },
        {
          displayName: '21 CFR Part 11 Approvers List',
          iconName: 'speaker_notes',
          route: 'feedback'
        },
        {
          displayName: 'Stage Gate Settings',
          iconName: 'speaker_notes',
          route: 'feedback'
        },
        {
          displayName: 'Documents',
          iconName: 'speaker_notes',
          route: 'feedback'
        },
        {
          displayName: 'Assigned Formulas',
          iconName: 'speaker_notes',
          route: 'feedback'
        },
        {
          displayName: 'Products',
          iconName: 'speaker_notes',
          route: 'feedback'
        },
        {
          displayName: 'Change Requests',
          iconName: 'speaker_notes',
          route: 'feedback'
        },
        {
          displayName: 'Customer Communications',
          iconName: 'speaker_notes',
          route: 'feedback'
        },
        {
          displayName: 'Specifications',
          iconName: 'speaker_notes',
          route: 'feedback'
        },
        {
          displayName: 'Audit Tracking',
          iconName: 'speaker_notes',
          route: 'feedback'
        }

      ]
    },
    {
      displayName: ' Formulation',
      iconName: 'close',
      children: [
        {
          displayName: 'Formula Listing',
          iconName: 'speaker_notes',
          children: [
            {
              displayName: 'All Listing',
              iconName: 'speaker_notes',

            },
            {
              displayName: 'My Formulas',
              iconName: 'speaker_notes',

            },
            {
              displayName: 'Products',
              iconName: 'speaker_notes',

            },
            {
              displayName: 'Company Owned',
              iconName: 'speaker_notes',

            },
            {
              displayName: 'Customer Owned',
              iconName: 'speaker_notes',

            },
            {
              displayName: 'Generic',
              iconName: 'speaker_notes',

            },
            {
              displayName: 'LabNoteBook',
              iconName: 'speaker_notes',

            },
            {
              displayName: 'By Customer',
              iconName: 'speaker_notes',

            },
            {
              displayName: 'Stability',
              iconName: 'speaker_notes',
              children: [
                {
                  displayName: 'Stab Listing',
                  iconName: 'speaker_notes',
                },
                {
                  displayName: 'Daily Testing Schedule',
                  iconName: 'speaker_notes',
                }



              ]
            }

          ]

        },
        {
          displayName: 'Formula Lookup',
          iconName: 'speaker_notes',
          children: [
            {
              displayName: 'General',
              iconName: 'speaker_notes',


            },
            {
              displayName: 'Formula',
              iconName: 'speaker_notes',


            },
            {
              displayName: 'Scalability Factor',
              iconName: 'speaker_notes',


            },
            {
              displayName: 'QC',
              iconName: 'speaker_notes',


            },
            {
              displayName: 'Phy.Stability',
              iconName: 'speaker_notes',


            },
            {
              displayName: 'Product Testing',
              iconName: 'speaker_notes',


            },

            {
              displayName: 'Regulatory',
              iconName: 'speaker_notes',


            },
            {
              displayName: 'IL/QIL',
              iconName: 'speaker_notes',


            },
            {
              displayName: 'Formula Specs',
              iconName: 'speaker_notes',


            },
            {
              displayName: 'Marketing Artifects',
              iconName: 'speaker_notes',


            },
            {
              displayName: 'Formula Notes',
              iconName: 'speaker_notes',


            },
            {
              displayName: ' /Lab Batches',
              iconName: 'speaker_notes',


            },
            {
              displayName: 'COA',
              iconName: 'speaker_notes',


            },
            {
              displayName: 'Workflow',
              iconName: 'speaker_notes',


            },
            {
              displayName: 'Product(s)',
              iconName: 'speaker_notes',


            },
            {
              displayName: 'Audit Tracking',
              iconName: 'speaker_notes',


            },
          ]
        },

      ]
    },


    {
      displayName: 'Sample Management',
      iconName: 'close',
      children: [
        {
          displayName: 'Sample Management',
          iconName: 'speaker_notes',

        },
        {
          displayName: 'Customer Details',
          iconName: 'speaker_notes',

        },
        {
          displayName: 'PDR Listing',
          iconName: 'speaker_notes',
          route: ''
        },
        {
          displayName: 'PDR Listing by Date',
          iconName: 'speaker_notes',
          route: ''
        },
        {
          displayName: 'Disclaimers',
          iconName: 'speaker_notes',
          route: ''
        },
        {
          displayName: 'Documents',
          iconName: 'speaker_notes',
          route: ''
        },
        {
          displayName: 'Document Audit Tracking',
          iconName: 'speaker_notes',
          route: ''
        },
        {
          displayName: 'Audit Tracking',
          iconName: 'speaker_notes',
          route: ''
        }
      ]
    },

    {
      displayName: 'Productization',

      iconName: 'close',
      children: [
        {
          displayName: 'Product',
          iconName: 'speaker_notes',

        },
        {
          displayName: 'Label',
          iconName: 'speaker_notes',

        },
        {
          displayName: 'Packaging',
          iconName: 'speaker_notes',
          route: ''
        },
        {
          displayName: 'ArtWork',
          iconName: 'speaker_notes',
          route: ''
        },
        {
          displayName: 'Bulk/',
          iconName: 'speaker_notes',
          route: ''
        },

        {
          displayName: 'Prod.Regn Approvals',
          iconName: 'speaker_notes',
          route: ''
        },
        {
          displayName: 'Prod.Technical Data Specs',
          iconName: 'speaker_notes',
          route: ''
        },
        {
          displayName: 'Commerialization Checklist',
          iconName: 'speaker_notes',
          route: ''
        },
        {
          displayName: 'PIF',
          iconName: 'speaker_notes',
          route: ''
        },
        {
          displayName: 'CMO',
          iconName: 'speaker_notes',
          route: ''
        },
        {
          displayName: 'Audit',
          iconName: 'speaker_notes',
          route: ''
        }

      ]
    },
    {
      displayName: 'Miscellaneous',

      iconName: 'close',
      children: [
        {
          displayName: 'Raw Materials',
          iconName: 'speaker_notes',

        }
        ]
    }
    
   
   
  ];
  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  recheckIfInMenu: boolean;
  ngOnInit() {
    this.postData.getPosts().subscribe((result) => { 
      console.warn("result", result)
      this.data=result
    })
    this.recheckIfInMenu = false;
  }
  openResourceMenu() {
    this.trigger.openMenu();
  }

  closeResourceMenu() {
    setTimeout(() => {
      if (this.recheckIfInMenu === false) {
        this.trigger.closeMenu();
      }
    }, 175);
  }
 
  isExpanded = false;
  collapse() {
    this.isExpanded = false;
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
