import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { carOutline, cashOutline } from 'ionicons/icons';
import { IonIcon, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, IonIcon, IonItem],
  template: `
    <ion-item>
      <div class="notification">
        <div class="icon">
          @if(notification.type === TYPE_NOTIFICATION.DELIVERY){
          <ion-icon name="car-outline" />
          } @else if(notification.type === TYPE_NOTIFICATION.BUDGET){
          <ion-icon name="cash-outline" />
          }
        </div>
        <div class="info">
          <h3>{{ notification.title }}</h3>
          <p>{{ notification.desc }}</p>
        </div>
        <div class="date">
          <p>{{ notification.date | date : 'dd/MM/yyyy' }}</p>
          <time>{{ notification.date | date : 'HH:mm' }}</time>
        </div>
      </div>
    </ion-item>
  `,
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  @Input() notification = new NotificationItem();

  TYPE_NOTIFICATION = TYPE_NOTIFICATION;

  constructor() {
    addIcons({ carOutline, cashOutline });
  }
}

export class NotificationItem {
  constructor(
    public type = TYPE_NOTIFICATION.BUDGET,
    public title = '',
    public desc = '',
    public date = new Date()
  ) {}
}

export enum TYPE_NOTIFICATION {
  DELIVERY,
  BUDGET,
}
