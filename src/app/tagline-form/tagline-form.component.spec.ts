import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaglineFormComponent } from './tagline-form.component';

describe('TaglineFormComponent', () => {
  let component: TaglineFormComponent;
  let fixture: ComponentFixture<TaglineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaglineFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaglineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
