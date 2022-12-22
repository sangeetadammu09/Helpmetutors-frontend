import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherslistComponent } from './teacherslist.component';

describe('TeacherslistComponent', () => {
  let component: TeacherslistComponent;
  let fixture: ComponentFixture<TeacherslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
