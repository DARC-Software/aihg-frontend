import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.page.html',
  styleUrls: ['./menus.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar]
})
export class MenusPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
