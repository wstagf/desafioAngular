import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoperatedEntity } from 'src/app/core/domain/entities/cooperated-entity';
 
import { ICoperatedController } from 'src/app/core/interfaces/controllers/icooperated-controller'; 
import { ICoperatedUseCase } from "../../core/interfaces/usecases/icoperated-use-case";

@Injectable({
  providedIn: 'root'
})
export class CoperatedControllerService implements ICoperatedController {

  constructor(
    private coperatedUseCase: ICoperatedUseCase
  ) { }
 

  
  getData(cpf: String): Observable<CoperatedEntity> {
    return this.coperatedUseCase.getData(cpf);
  }
}
