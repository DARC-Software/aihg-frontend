import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-events',
  templateUrl: 'events.page.html',
  styleUrls: ['events.page.scss'],
  imports: [IonIcon, IonCardContent, IonCardHeader, IonCard, IonCol, IonRow, IonHeader, IonToolbar, IonContent]
})
export class EventsPage {

  constructor() {}

}
