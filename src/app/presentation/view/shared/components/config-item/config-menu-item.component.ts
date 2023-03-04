import { Component, Input } from '@angular/core';

@Component({
  selector: 'alios-config-menu-item',
  templateUrl: './config-menu-item.component.html',
  styleUrls: ['./config-menu-item.component.scss'],
  providers: []
})
export class ConfigMenuItemComponent {
 @Input()
 size: number = 60;
}
