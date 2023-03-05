import { async, ComponentFixture, TestBed } from '@angular/core/testing';

 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { BankinkMenuItemComponent } from './banking-menu-item.component';

describe('BankinkMenuItemComponent', () => {
  let component: BankinkMenuItemComponent;
  let fixture: ComponentFixture<BankinkMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankinkMenuItemComponent ],
      imports: [ 
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankinkMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o component', () => {
    expect(component).toBeTruthy();
  });

  it('image should have width of 60px', () => {
    let image: HTMLElement = fixture.nativeElement.querySelector("img");
    expect(image.getAttribute("width")).toEqual("60"); 
  });
});
