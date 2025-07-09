import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraPagina } from './primeira-pagina';

describe('PrimeiraPagina', () => {
  let component: PrimeiraPagina;
  let fixture: ComponentFixture<PrimeiraPagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimeiraPagina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiraPagina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
