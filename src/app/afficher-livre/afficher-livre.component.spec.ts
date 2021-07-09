import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherLivreComponent } from './afficher-livre.component';

describe('AfficherLivreComponent', () => {
  let component: AfficherLivreComponent;
  let fixture: ComponentFixture<AfficherLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
