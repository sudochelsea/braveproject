import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualSummitComponent } from './annual-summit.component';

describe('AnnualSummitComponent', () => {
  let component: AnnualSummitComponent;
  let fixture: ComponentFixture<AnnualSummitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualSummitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualSummitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
