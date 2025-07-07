import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-events',
  templateUrl: 'events.page.html',
  styleUrls: ['events.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent]
})
export class EventsPage {

  constructor() {}

}
