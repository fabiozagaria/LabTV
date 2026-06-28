import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ricerca } from './ricerca';

describe('Ricerca', () => {
  let component: Ricerca;
  let fixture: ComponentFixture<Ricerca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ricerca],
    }).compileComponents();

    fixture = TestBed.createComponent(Ricerca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
