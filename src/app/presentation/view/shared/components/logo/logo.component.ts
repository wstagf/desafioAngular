import { Component, Input } from '@angular/core';

@Component({
  selector: 'alios-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  providers: []
})
export class LogoComponent {
 @Input()
 size: number = 60;


}
