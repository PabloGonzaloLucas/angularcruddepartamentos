import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedepartamentoComponent } from './createdepartamento.component';

describe('CreatedepartamentoComponent', () => {
  let component: CreatedepartamentoComponent;
  let fixture: ComponentFixture<CreatedepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatedepartamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
