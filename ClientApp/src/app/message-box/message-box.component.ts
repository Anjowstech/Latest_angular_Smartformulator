import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  public isVisible: boolean = false;
  public isVisible2: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {


  }
}
