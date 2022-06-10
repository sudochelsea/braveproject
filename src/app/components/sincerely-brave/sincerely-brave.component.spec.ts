import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SincerelyBraveComponent } from './sincerely-brave.component';

describe('SincerelyBraveComponent', () => {
  let component: SincerelyBraveComponent;
  let fixture: ComponentFixture<SincerelyBraveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SincerelyBraveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SincerelyBraveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
