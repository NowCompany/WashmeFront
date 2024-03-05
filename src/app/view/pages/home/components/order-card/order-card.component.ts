import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { addIcons } from 'ionicons';
import { search, water } from 'ionicons/icons';
import { IonIcon, IonBadge, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [CommonModule, IonIcon, IonBadge, IonItem],
  template: `
    <ion-item>
      <div class="order-card">
        @if(order.status === ORDER_STATUS.PENDING) {
        <ion-icon name="search" />
        } @if(order.status === ORDER_STATUS.IN_PROGRESS) {
        <ion-icon name="water" />
        }
        <div class="order-content">
          <p>{{ order.title }}</p>
          <time>{{ order.date | date : 'dd/MM/yyyy HH:mm' }}</time>
        </div>
        @if(order.status === ORDER_STATUS.PENDING) {
        <ion-badge>{{ order.budgets }}</ion-badge>
        }
      </div>
    </ion-item>
  `,
  styleUrl: './order-card.component.scss',
})
export class OrderCardComponent {
  @Input() order = new OrderCard();

  ORDER_STATUS = ORDER_STATUS;

  constructor() {
    addIcons({ search, water });
  }
}

export class OrderCard {
  constructor(
    public status = ORDER_STATUS.PENDING,
    public title = '',
    public date = new Date(),
    public budgets?: number
  ) {}
}

export enum ORDER_STATUS {
  PENDING,
  IN_PROGRESS,
}
