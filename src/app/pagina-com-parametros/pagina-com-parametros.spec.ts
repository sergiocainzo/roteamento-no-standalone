import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaComParametros } from './pagina-com-parametros';

describe('PaginaComParametros', () => {
  let component: PaginaComParametros;
  let fixture: ComponentFixture<PaginaComParametros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaComParametros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaComParametros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
