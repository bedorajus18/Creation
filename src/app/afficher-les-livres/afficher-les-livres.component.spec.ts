import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherLesLivresComponent } from './afficher-les-livres.component';

describe('AfficherLesLivresComponent', () => {
  let component: AfficherLesLivresComponent;
  let fixture: ComponentFixture<AfficherLesLivresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherLesLivresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherLesLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
