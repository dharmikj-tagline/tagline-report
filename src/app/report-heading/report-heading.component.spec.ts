import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportHeadingComponent } from './report-heading.component';

describe('ReportHeadingComponent', () => {
  let component: ReportHeadingComponent;
  let fixture: ComponentFixture<ReportHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
