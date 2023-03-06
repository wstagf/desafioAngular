import { Component, Input } from '@angular/core';

@Component({
  selector: 'alios-white-button',
  templateUrl: './white-button.component.html',
  styleUrls: ['./white-button.component.scss'],
  providers: []
})
export class WhiteButtonComponent { 
  @Input() 
  label: String = '';
 

  @Input() 
  public tap: Function | undefined;  

  @Input() 
  height: number = 48;
}
