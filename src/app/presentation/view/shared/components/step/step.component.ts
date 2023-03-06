import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'alios-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  providers: []
})
export class StepComponent { 
  @Input() 
  steps: string[] = [];

  @Input() 
  stepIndex: number = 0;  

  @Output() stepIndexChange = new EventEmitter<number>();

  @Input() 
  public tap: Function | undefined;  

}
