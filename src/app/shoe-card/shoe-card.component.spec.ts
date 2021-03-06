import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeCardComponent } from './shoe-card.component';

describe('ShoeCardComponent', () => {
  let component: ShoeCardComponent;
  let fixture: ComponentFixture<ShoeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
