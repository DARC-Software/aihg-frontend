import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecialsPage } from './specials.page';

describe('SpecialsPage', () => {
  let component: SpecialsPage;
  let fixture: ComponentFixture<SpecialsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
