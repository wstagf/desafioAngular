import { async, ComponentFixture, TestBed } from '@angular/core/testing';

 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { DocumentStepComponent } from './document-step.component';
describe('DocumentStepComponent', () => {
  let component: DocumentStepComponent;
  let fixture: ComponentFixture<DocumentStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentStepComponent ],
      imports: [ 
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o component', () => {
    expect(component).toBeTruthy();
  });

  
});
