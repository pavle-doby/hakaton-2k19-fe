import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeMapComponent } from './bee-map.component';

describe('BeeMapComponent', () => {
  let component: BeeMapComponent;
  let fixture: ComponentFixture<BeeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
