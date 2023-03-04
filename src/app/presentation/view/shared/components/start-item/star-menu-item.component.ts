import { Component, Input } from '@angular/core';

@Component({
  selector: 'alios-star-menu-item',
  templateUrl: './star-menu-item.component.html',
  styleUrls: ['./star-menu-item.component.scss'],
  providers: []
})
export class StarMenuItemComponent {
 @Input()
 size: number = 60;
}
