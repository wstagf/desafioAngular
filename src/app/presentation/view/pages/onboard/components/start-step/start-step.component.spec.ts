import { async, ComponentFixture, TestBed } from '@angular/core/testing';

 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { StartStepComponent } from './start-step.component';

describe('StartStepComponent', () => {
  let component: StartStepComponent;
  let fixture: ComponentFixture<StartStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartStepComponent ],
      imports: [ 
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o component', () => {
    expect(component).toBeTruthy();
  });

  
});
