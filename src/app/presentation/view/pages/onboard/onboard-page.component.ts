import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alios-onboard-page',
  templateUrl: './onboard-page.component.html',
  styleUrls: ['./onboard-page.component.scss'],
  providers: []
})
export class OnboardPageComponent implements OnInit{
  steps: string[] = [];

  stepIndex: number = 0;

  ngOnInit(): void {
    this.steps = [
      'Início',
      'Documentos',
      'Dados cadastrais', 
      'Admissão'
    ];
  }

  tap = (i: number) => { 
    this.stepIndex = i;
  }

}
