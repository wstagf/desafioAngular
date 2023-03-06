import { Component, Input } from '@angular/core';

@Component({
  selector: 'alios-start-step',
  templateUrl: './start-step.component.html',
  styleUrls: ['./start-step.component.scss'],
  providers: []
})
export class StartStepComponent {  

  cpf : string = "";

  searchByCPF( ) {
    alert(this.cpf)
  }

  changeCPF(e: any) {
    console.log(e);
  }


}
