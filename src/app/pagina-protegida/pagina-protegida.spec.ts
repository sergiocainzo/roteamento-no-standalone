import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProtegida } from './pagina-protegida';

describe('PaginaProtegida', () => {
  let component: PaginaProtegida;
  let fixture: ComponentFixture<PaginaProtegida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaProtegida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaProtegida);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
