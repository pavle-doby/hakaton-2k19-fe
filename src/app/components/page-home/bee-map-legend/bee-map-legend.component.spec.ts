import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeMapLegendComponent } from './bee-map-legend.component';

describe('BeeMapLegendComponent', () => {
  let component: BeeMapLegendComponent;
  let fixture: ComponentFixture<BeeMapLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeMapLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeMapLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
