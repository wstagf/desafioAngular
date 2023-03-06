import { async, ComponentFixture, TestBed } from '@angular/core/testing';

 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { RegisterDataStepComponent } from './register-data-step.component';
describe('RegisterDataStepComponent', () => {
  let component: RegisterDataStepComponent;
  let fixture: ComponentFixture<RegisterDataStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDataStepComponent ],
      imports: [ 
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDataStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o component', () => {
    expect(component).toBeTruthy();
  });

  
});
