import { Component, Input } from '@angular/core';

@Component({
  selector: 'alios-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  providers: []
})
export class MenuItemComponent {
 @Input()
 size: number = 60;
}
