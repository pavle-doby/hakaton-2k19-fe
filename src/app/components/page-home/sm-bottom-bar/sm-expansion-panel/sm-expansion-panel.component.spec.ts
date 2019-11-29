import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmExpansionPanelComponent } from './sm-expansion-panel.component';

describe('SmExpansionPanelComponent', () => {
  let component: SmExpansionPanelComponent;
  let fixture: ComponentFixture<SmExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
