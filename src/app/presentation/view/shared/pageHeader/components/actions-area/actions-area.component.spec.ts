import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';   
import { ActionsAreaComponent } from './actions-area.component';

describe('ActionsAreaComponent', () => {
  let component: ActionsAreaComponent;
  let fixture: ComponentFixture<ActionsAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsAreaComponent ],
      imports: [ 
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o component', () => {
    expect(component).toBeTruthy();
  });

  it('should render Notifications Component', () => {
    const fixture = TestBed.createComponent(ActionsAreaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('alios-notifications-alert')?.DOCUMENT_NODE).toBeTruthy();
  });

  it('should render Button of Company', () => {
    const fixture = TestBed.createComponent(ActionsAreaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button-company-area')?.DOCUMENT_NODE).toBeTruthy();
  });

  it('should render Icon of Perfil', () => {
    const fixture = TestBed.createComponent(ActionsAreaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('alios-perfil-config')?.DOCUMENT_NODE).toBeTruthy();
  });

});
