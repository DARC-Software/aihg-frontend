import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ToolbarComponent } from "../components/toolbar/toolbar.component";

@Component({
  selector: 'app-locations',
  templateUrl: 'locations.page.html',
  styleUrls: ['locations.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ToolbarComponent],
})
export class LocationsPage {
  constructor() {}
}
