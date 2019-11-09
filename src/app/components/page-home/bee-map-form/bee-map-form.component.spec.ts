import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeMapFormComponent } from './bee-map-form.component';

describe('BeeMapFormComponent', () => {
  let component: BeeMapFormComponent;
  let fixture: ComponentFixture<BeeMapFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeMapFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeMapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
