import { TestBed } from '@angular/core/testing';
 
import { ICoperatedUseCase } from 'src/app/core/interfaces/usecases/icoperated-use-case';
import { CoperatedControllerService } from './coperated-controller.service';

describe('CoperatedControllerService', () => {
  let usuarioController: CoperatedControllerService;
  let usuarioUseCase: jasmine.SpyObj<ICoperatedUseCase>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ICoperatedUseCase', ['getData',]);

    TestBed.configureTestingModule({
      providers: [
        { provide: ICoperatedUseCase, useValue: spy }
      ]
    });

    usuarioController = TestBed.get(CoperatedControllerService);
    usuarioUseCase = TestBed.get(ICoperatedUseCase);
  });

  it('deve ser criado', () => {
    expect(usuarioController).toBeTruthy();
  });

  it('deve chamar o metodo getData', () => {

    usuarioController.getData("000.000.000.000-00");

    expect(usuarioUseCase.getData.calls.count()).toBe(1);
  });
});
