import { Component, Input } from '@angular/core';

@Component({
  selector: 'alios-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss'],
  providers: []
})
export class PageFooterComponent { 

  @Input() 
  onboarding: boolean = true;

  tapTips() {
    alert('Clicou em Dicas');
  }

  tapNewOnboard() {
    alert('Clicou em Iniciar');
  }
}
