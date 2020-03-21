import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherDossierComponent } from './afficher-dossier.component';

describe('AfficherDossierComponent', () => {
  let component: AfficherDossierComponent;
  let fixture: ComponentFixture<AfficherDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
