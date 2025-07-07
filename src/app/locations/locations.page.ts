import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-locations',
  templateUrl: 'locations.page.html',
  styleUrls: ['locations.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent],
})
export class LocationsPage {
  constructor() {}
}
