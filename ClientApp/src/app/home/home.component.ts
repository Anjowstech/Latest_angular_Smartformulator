import { Component } from '@angular/core';
import { ModulesList } from '../../app/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  modulesList: Array<any>;

  constructor() {
    this.modulesList = ModulesList;
  }
}
