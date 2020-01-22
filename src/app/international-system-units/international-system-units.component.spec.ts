import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalSystemUnitsComponent } from './international-system-units.component';

describe('InternationalSystemUnitsComponent', () => {
  let component: InternationalSystemUnitsComponent;
  let fixture: ComponentFixture<InternationalSystemUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalSystemUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalSystemUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
