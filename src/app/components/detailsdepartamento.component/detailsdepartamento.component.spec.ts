import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsdepartamentoComponent } from './detailsdepartamento.component';

describe('DetailsdepartamentoComponent', () => {
  let component: DetailsdepartamentoComponent;
  let fixture: ComponentFixture<DetailsdepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsdepartamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsdepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
