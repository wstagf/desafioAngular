import { Component, Input } from '@angular/core';

@Component({
  selector: 'alios-chat-menu-item',
  templateUrl: './chat-menu-item.component.html',
  styleUrls: ['./chat-menu-item.component.scss'],
  providers: []
})
export class ChatMenuItemComponent {
 @Input()
 size: number = 60;
}
