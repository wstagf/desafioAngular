import { Observable } from 'rxjs';
import { CoperatedEntity } from '../../domain/entities/cooperated-entity'; 

export abstract class ICoperatedController {
  abstract getCooperatedByCPF(cpf: string): Observable<CoperatedEntity>; 
}
