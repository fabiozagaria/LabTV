import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { Ricerca } from './ricerca';

describe('Ricerca', () => {
  let component: Ricerca;
  let fixture: ComponentFixture<Ricerca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ricerca],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Ricerca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
