import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedepartamentosComponent } from './homedepartamentos.component';

describe('HomedepartamentosComponent', () => {
  let component: HomedepartamentosComponent;
  let fixture: ComponentFixture<HomedepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomedepartamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomedepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
