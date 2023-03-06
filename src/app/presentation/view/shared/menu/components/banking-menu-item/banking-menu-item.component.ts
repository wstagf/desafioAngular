import { Component, Input } from '@angular/core';

@Component({
  selector: 'alios-banking-menu-item',
  templateUrl: './banking-menu-item.component.html',
  styleUrls: ['./banking-menu-item.component.scss'],
  providers: []
})
export class BankinkMenuItemComponent {
 @Input()
 size: number = 60;
}
