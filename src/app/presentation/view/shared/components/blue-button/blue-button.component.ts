import { Component, Input } from '@angular/core';

@Component({
  selector: 'alios-blue-button',
  templateUrl: './blue-button.component.html',
  styleUrls: ['./blue-button.component.scss'],
  providers: []
})
export class BlueButtonComponent { 
  @Input() 
  label: String = '';

  @Input() 
  tap: any;  

  @Input() 
  height: number = 48;
}
