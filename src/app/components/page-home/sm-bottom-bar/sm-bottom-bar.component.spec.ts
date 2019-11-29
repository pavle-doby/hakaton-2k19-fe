import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmBottomBarComponent } from './sm-bottom-bar.component';

describe('SmBottomBarComponent', () => {
  let component: SmBottomBarComponent;
  let fixture: ComponentFixture<SmBottomBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmBottomBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmBottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
