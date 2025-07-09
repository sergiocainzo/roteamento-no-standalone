import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaPagina } from './segunda-pagina';

describe('SegundaPagina', () => {
  let component: SegundaPagina;
  let fixture: ComponentFixture<SegundaPagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SegundaPagina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundaPagina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
