import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraveMagazineComponent } from './brave-magazine.component';

describe('BraveMagazineComponent', () => {
  let component: BraveMagazineComponent;
  let fixture: ComponentFixture<BraveMagazineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BraveMagazineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BraveMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
