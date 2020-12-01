import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxForHatComponent } from './box-for-hat.component';

describe('BoxForHatComponent', () => {
  let component: BoxForHatComponent;
  let fixture: ComponentFixture<BoxForHatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxForHatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxForHatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
