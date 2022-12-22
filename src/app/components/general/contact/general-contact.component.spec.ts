import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralContactComponent } from './general-contact.component';

describe('GeneralContactComponent', () => {
  let component: GeneralContactComponent;
  let fixture: ComponentFixture<GeneralContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
