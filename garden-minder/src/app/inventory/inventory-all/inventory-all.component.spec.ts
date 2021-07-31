import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAllComponent } from './inventory-all.component';

describe('InventoryAllComponent', () => {
  let component: InventoryAllComponent;
  let fixture: ComponentFixture<InventoryAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
