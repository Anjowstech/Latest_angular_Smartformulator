import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-message-box-yesno',
  templateUrl: './message-box-yesno.component.html',
  styleUrls: ['./message-box-yesno.component.css']
})
export class MessageBoxYesnoComponent implements OnInit {
  public isVisible: boolean = false;
  public isVisible2: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
