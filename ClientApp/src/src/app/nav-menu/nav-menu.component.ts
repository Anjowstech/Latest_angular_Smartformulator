import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { NavItem } from 'src/app/nav-item';
import { MatMenuTrigger } from '@angular/material';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  data: any;
  constructor(private postData: PostsService) { }
  version = VERSION;
  panelOpenState = false;
  navItems: NavItem[] = [
    {

      displayName: 'Projects/PDR',

      children: [
        {
          displayName: 'General',

          route: 'PDRManagement'

        },
        {
          displayName: 'Requirements'


        },
        {
          displayName: 'Product Dev.Brief',

          route: 'formularestriction'
        },
        {
          displayName: 'Assigning Users',
          route: 'feedback'
        },
        {
          displayName: '21 CFR Part 11 Approvers List',
          route: 'feedback'
        },
        {
          displayName: 'Stage Gate Settings',
          route: 'feedback'
        },
        {
          displayName: 'Documents',
          route: 'feedback'
        },
        {
          displayName: 'Assigned Formulas',
          route: 'feedback'
        },
        {
          displayName: 'Products',
          route: 'feedback'
        },
        {
          displayName: 'Change Requests',
          route: 'feedback'
        },
        {
          displayName: 'Customer Communications',
          route: 'feedback'
        },
        {
          displayName: 'Specifications',
          route: 'feedback'
        },
        {
          displayName: 'Audit Tracking',
          route: 'feedback'
        }

      ]
    },
    {
      displayName: ' Formulation',
      children: [
        {
          displayName: 'Formula Listing',
          route: 'Formulalisting'
          //children: [
          //  {
          //    displayName: 'All Listing',

          //  },
          //  {
          //    displayName: 'My Formulas',

          //  },
          //  {
          //    displayName: 'Products',

          //  },
          //  {
          //    displayName: 'Company Owned',

          //  },
          //  {
          //    displayName: 'Customer Owned',

          //  },
          //  {
          //    displayName: 'Generic',

          //  },
          //  {
          //    displayName: 'LabNoteBook',

          //  },
          //  {
          //    displayName: 'By Customer',

          //  },
          //  {
          //    displayName: 'Stability',
          //    children: [
          //      {
          //        displayName: 'Stab Listing',
          //      },
          //      {
          //        displayName: 'Daily Testing Schedule',
          //      }



          //    ]
          //  }

          //]

        },
        {
          displayName: 'Formula Lookup',
          route: 'Formulalookup'

          //children: [
          //  {
          //    displayName: 'General',


          //  },
          //  {
          //    displayName: 'Formula',


          //  },
          //  {
          //    displayName: 'Scalability Factor',


          //  },
          //  {
          //    displayName: 'QC',


          //  },
          //  {
          //    displayName: 'Phy.Stability',


          //  },
          //  {
          //    displayName: 'Product Testing',


          //  },

          //  {
          //    displayName: 'Regulatory',


          //  },
          //  {
          //    displayName: 'IL/QIL',


          //  },
          //  {
          //    displayName: 'Formula Specs',


          //  },
          //  {
          //    displayName: 'Marketing Artifects',


          //  },
          //  {
          //    displayName: 'Formula Notes',


          //  },
          //  {
          //    displayName: ' /Lab Batches',


          //  },
          //  {
          //    displayName: 'COA',


          //  },
          //  {
          //    displayName: 'Workflow',


          //  },
          //  {
          //    displayName: 'Product(s)',


          //  },
          //  {
          //    displayName: 'Audit Tracking',


          //  },
          //]
        },

      ]
    },


    {
      displayName: 'Sample Management',
      children: [
        {
          displayName: 'Sample Management',
          route: 'SampleManagement'


        },
        {
          displayName: 'Customer Details',

        },
        {
          displayName: 'PDR Listing',
          route: ''
        },
        {
          displayName: 'PDR Listing by Date',
          route: ''
        },
        {
          displayName: 'Disclaimers',
          route: ''
        },
        {
          displayName: 'Documents',
          route: ''
        },
        {
          displayName: 'Document Audit Tracking',
          route: ''
        },
        {
          displayName: 'Audit Tracking',
          route: ''
        }
      ]
    },

    {
      displayName: 'Productization',

      children: [
        {
          displayName: 'Product',

        },
        {
          displayName: 'Label',

        },
        {
          displayName: 'Packaging',
          route: ''
        },
        {
          displayName: 'ArtWork',
          route: ''
        },
        {
          displayName: 'Bulk/',
          route: ''
        },

        {
          displayName: 'Prod.Regn Approvals',
          route: ''
        },
        {
          displayName: 'Prod.Technical Data Specs',
          route: ''
        },
        {
          displayName: 'Commerialization Checklist',

          route: ''
        },
        {
          displayName: 'PIF',
          route: ''
        },
        {
          displayName: 'CMO',
          route: ''
        },
        {
          displayName: 'Audit',
          route: ''
        }

      ]
    },
    {
      displayName: 'Raw Materials',
      route: 'RawMaterial'
      //children: [
      //  {
      //    displayName: 'Raw Materials',
      //    route: 'RawMaterial'

      //  }
      //]
    },

    {
      displayName: 'Suppliers',
      route: 'AddSupplier'
      //route: 'SupplierListing'

    },
    {
      displayName: 'Customers',
      route: 'CustomerDetails'

    },
    {
      displayName: 'Product Portfolio',

      children: [
        {
          displayName: 'Product Portfolio',

        }
      ]
    }, {
      displayName: 'Global Search',

      children: [
        {
          displayName: 'Global Search',

        }
      ]
    },
    {
      displayName: 'FormulaStatus',
      route: 'FormulaListStatus'


    },
    {
      displayName: 'Miscellaneous',

      children: [

        {
          displayName: 'Unit Of Measure',
          route: 'Unitofmeasure'
        },
        {
          displayName: 'quality control',
          route: 'qualitycontrol'
        },
      ]
    }



  ];
  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  recheckIfInMenu: boolean;
  isShowing: boolean = true;

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  ngOnInit() {

    this.postData.getPosts().subscribe((result) => {
      console.warn("result", result)
      this.data = result
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
}
