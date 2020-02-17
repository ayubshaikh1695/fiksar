import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiksarLogoComponent } from './fiksar-logo.component';

describe('FiksarLogoComponent', () => {
  let component: FiksarLogoComponent;
  let fixture: ComponentFixture<FiksarLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiksarLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiksarLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
