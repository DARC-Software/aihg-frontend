import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { callOutline, locationOutline, timeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-locations',
  templateUrl: 'locations.page.html',
  styleUrls: ['locations.page.scss'],
  imports: [IonIcon, IonButton, IonCardContent, IonCardHeader, IonCard, IonCol, IonRow, IonGrid, IonHeader, IonToolbar, IonContent],
})
export class LocationsPage {
  constructor() {
    addIcons({
      locationOutline,
      callOutline,
      timeOutline
    })
  }
}
