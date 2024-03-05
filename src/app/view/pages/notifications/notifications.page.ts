import { Component } from '@angular/core';
import { IonContent, IonList } from '@ionic/angular/standalone';

import {
  NotificationItem,
  TYPE_NOTIFICATION,
  NotificationComponent,
} from './components/notification/notification.component';

@Component({
  selector: 'app-notifications-page',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss'],
  standalone: true,
  imports: [IonContent, IonList, NotificationComponent],
})
export class NotificationsPage {
  notifications = [
    new NotificationItem(
      TYPE_NOTIFICATION.BUDGET,
      'Novo orçamento',
      'O pedido N°12 recebeu uma nova  proposta',
      new Date()
    ),
    new NotificationItem(
      TYPE_NOTIFICATION.DELIVERY,
      'Em progresso',
      'O pedido N°12 está a caminho da lavanderia',
      new Date()
    ),
  ];

  constructor() {}
}
