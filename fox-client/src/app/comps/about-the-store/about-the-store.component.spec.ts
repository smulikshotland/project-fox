import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutTheStoreComponent } from './about-the-store.component';

describe('AboutTheStoreComponent', () => {
  let component: AboutTheStoreComponent;
  let fixture: ComponentFixture<AboutTheStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTheStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTheStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
