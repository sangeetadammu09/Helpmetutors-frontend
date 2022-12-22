import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingJobsComponent } from './teaching-jobs.component';

describe('TeachingJobsComponent', () => {
  let component: TeachingJobsComponent;
  let fixture: ComponentFixture<TeachingJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachingJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
