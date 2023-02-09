import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiDominioComponent } from './mi-dominio.component';

describe('MiDominioComponent', () => {
  let component: MiDominioComponent;
  let fixture: ComponentFixture<MiDominioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiDominioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiDominioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
