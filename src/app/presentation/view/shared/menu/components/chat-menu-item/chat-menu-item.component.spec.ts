import { async, ComponentFixture, TestBed } from '@angular/core/testing';

 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatMenuItemComponent } from './chat-menu-item.component';

describe('ChatMenuItemComponent', () => {
  let component: ChatMenuItemComponent;
  let fixture: ComponentFixture<ChatMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMenuItemComponent ],
      imports: [ 
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMenuItemComponent);
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
