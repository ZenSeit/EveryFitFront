import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-state',
  templateUrl: './order-state.component.html',
  styleUrls: ['./order-state.component.scss']
})
export class OrderStateComponent {

  @Input() orderState: string = '';

}
