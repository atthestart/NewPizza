import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzashopComponent } from './pizzashop.component';

describe('PizzashopComponent', () => {
  let component: PizzashopComponent;
  let fixture: ComponentFixture<PizzashopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzashopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzashopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
