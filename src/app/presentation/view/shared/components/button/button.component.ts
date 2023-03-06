import { Component, Input } from '@angular/core';

@Component({
  selector: 'alios-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers: []
})
export class ButtonComponent { 
  @Input() 
  label: String = '';

  @Input() 
  variant: String = 'white';

  @Input() 
  public tap: Function | undefined;  

  @Input() 
  heightButton: number = 100;
}
