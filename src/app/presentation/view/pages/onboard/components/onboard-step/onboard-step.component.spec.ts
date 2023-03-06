import { async, ComponentFixture, TestBed } from '@angular/core/testing';

 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { OnboardStepComponent } from './onboard-step.component';
describe('OnboardStepComponent', () => {
  let component: OnboardStepComponent;
  let fixture: ComponentFixture<OnboardStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardStepComponent ],
      imports: [ 
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o component', () => {
    expect(component).toBeTruthy();
  });

  
});
