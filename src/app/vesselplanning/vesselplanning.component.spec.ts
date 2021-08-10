import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselplanningComponent } from './vesselplanning.component';

describe('VesselplanningComponent', () => {
  let component: VesselplanningComponent;
  let fixture: ComponentFixture<VesselplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
