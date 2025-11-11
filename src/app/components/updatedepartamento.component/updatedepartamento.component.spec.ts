import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedepartamentoComponent } from './updatedepartamento.component';

describe('UpdatedepartamentoComponent', () => {
  let component: UpdatedepartamentoComponent;
  let fixture: ComponentFixture<UpdatedepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatedepartamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
