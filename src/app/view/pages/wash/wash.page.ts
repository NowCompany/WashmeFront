import { Component } from '@angular/core';
import {
  IonContent,
  IonInput,
  IonButton,
  IonIcon,
  IonRadio,
  IonRadioGroup,
  IonDatetime,
  IonLabel,
  IonTextarea,
  IonCheckbox
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForward, arrowBack } from 'ionicons/icons';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-wash-page',
  templateUrl: 'wash.page.html',
  styleUrls: ['wash.page.scss'],
  standalone: true,
  imports: [
    IonTextarea,
    IonLabel,
    IonDatetime,
    IonButton,
    IonInput,
    IonContent,
    IonIcon,
    IonRadio,
    IonRadioGroup,
    MatStepperModule,
    MatButtonModule,
    IonCheckbox
  ],
})
export class WashPage {
  minDate = new Date().toISOString();

  constructor() {
    addIcons({ arrowForward, arrowBack });
  }
}
