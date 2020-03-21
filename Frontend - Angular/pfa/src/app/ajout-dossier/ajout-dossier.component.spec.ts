import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDossierComponent } from './ajout-dossier.component';

describe('AjoutDossierComponent', () => {
  let component: AjoutDossierComponent;
  let fixture: ComponentFixture<AjoutDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
