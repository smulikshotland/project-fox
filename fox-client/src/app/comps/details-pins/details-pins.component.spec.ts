import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPinsComponent } from './details-pins.component';

describe('DetailsPinsComponent', () => {
  let component: DetailsPinsComponent;
  let fixture: ComponentFixture<DetailsPinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
