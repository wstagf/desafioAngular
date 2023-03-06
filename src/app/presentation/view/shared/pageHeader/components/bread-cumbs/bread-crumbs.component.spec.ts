import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { BreadCumbsComponent } from './bread-crumbs.component';

describe('BreadCumbsComponent', () => {
  let component: BreadCumbsComponent;
  let fixture: ComponentFixture<BreadCumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadCumbsComponent ],
      imports: [ 
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o component', () => {
    expect(component).toBeTruthy();
  });

  it('deve conter o breads', () => { 
    const breadsComponent: HTMLElement = fixture.nativeElement;
    expect(breadsComponent.textContent).toContain('Cadastro');
    expect(breadsComponent.textContent).toContain('Admissão do Cooperado');
    expect(breadsComponent.textContent).toContain('Nova Admisão de Cooperado');
    expect(breadsComponent.textContent).toContain('Cadastro');
  });

});
