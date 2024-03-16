import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAssinantesComponent } from './listagem-assinantes.component';

describe('ListagemAssinantesComponent', () => {
  let component: ListagemAssinantesComponent;
  let fixture: ComponentFixture<ListagemAssinantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemAssinantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemAssinantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
