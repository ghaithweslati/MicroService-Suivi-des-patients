import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDossierComponent } from './liste-dossier.component';

describe('ListeDossierComponent', () => {
  let component: ListeDossierComponent;
  let fixture: ComponentFixture<ListeDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
