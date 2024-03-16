import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssinanteComponent } from './assinante.component';

describe('AssinanteComponent', () => {
  let component: AssinanteComponent;
  let fixture: ComponentFixture<AssinanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssinanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssinanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
