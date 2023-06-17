import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasfavoritasComponent } from './obrasfavoritas.component';

describe('ObrasfavoritasComponent', () => {
  let component: ObrasfavoritasComponent;
  let fixture: ComponentFixture<ObrasfavoritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObrasfavoritasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObrasfavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
