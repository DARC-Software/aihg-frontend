import { Component, Input, input, OnInit } from '@angular/core';
import { IonToolbar, IonTitle } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [IonToolbar, CommonModule]
})
export class ToolbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
