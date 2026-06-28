import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contatti } from './contatti';

describe('Contatti', () => {
  let component: Contatti;
  let fixture: ComponentFixture<Contatti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contatti],
    }).compileComponents();

    fixture = TestBed.createComponent(Contatti);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
