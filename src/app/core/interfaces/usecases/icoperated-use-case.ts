import { Observable } from 'rxjs'; 
import { CoperatedEntity } from '../../domain/entities/cooperated-entity'

export abstract class ICoperatedUseCase {
  abstract getCooperatedByCPF(cpf: string): Observable<CoperatedEntity>; 
}
