import { Component } from '@angular/core';
import { IonHeader, IonContent, IonToolbar, IonRow, IonCol, IonCard, IonIcon, IonCardContent, IonCardHeader, IonButton } from '@ionic/angular/standalone';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { addIcons } from 'ionicons';
import { calendarClearOutline, timeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCardHeader, IonCardContent, IonIcon, IonCard, IonCol, IonRow, IonToolbar, IonHeader, IonContent, ToolbarComponent],
})
export class HomePage {

  constructor() {
    addIcons({
      timeOutline,
      calendarClearOutline
    })
  }
}
