import { async, ComponentFixture, TestBed } from '@angular/core/testing';

 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarMenuItemComponent } from './star-menu-item.component';

describe('StarMenuItemComponent', () => {
  let component: StarMenuItemComponent;
  let fixture: ComponentFixture<StarMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarMenuItemComponent ],
      imports: [ 
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o component', () => {
    expect(component).toBeTruthy();
  });
});
