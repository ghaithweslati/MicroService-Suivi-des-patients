import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatComponent } from './etat.component';

describe('EtatComponent', () => {
  let component: EtatComponent;
  let fixture: ComponentFixture<EtatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
