import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  IonContent,
  IonList,
  IonListHeader,
  IonIcon,
  IonModal,
  IonItem,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { search, water, arrowBack, checkmark, close } from 'ionicons/icons';

import {
  ORDER_STATUS,
  OrderCard,
  OrderCardComponent,
} from './components/order-card/order-card.component';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonIcon,
    IonList,
    IonContent,
    IonListHeader,
    IonModal,
    MatButtonModule,
    OrderCardComponent,
  ],
})
export class HomePage {
  pendingOrders = [
    new OrderCard(ORDER_STATUS.PENDING, 'Pedido N° - 12', new Date(), 10),
  ];
  inProgressOrders = [
    new OrderCard(ORDER_STATUS.IN_PROGRESS, 'Pedido N° - 13', new Date()),
  ];

  constructor() {
    addIcons({ search, water, arrowBack, checkmark, close });
  }
}
