import { Component, Input } from '@angular/core';

@Component({
  selector: 'alios-search-menu-item',
  templateUrl: './search-menu-item.component.html',
  styleUrls: ['./search-menu-item.component.scss'],
  providers: []
})
export class SearchMenuItemComponent {
 @Input()
 size: number = 60;
}
