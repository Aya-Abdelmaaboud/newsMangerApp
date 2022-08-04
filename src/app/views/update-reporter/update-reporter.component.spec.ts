import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReporterComponent } from './update-reporter.component';

describe('UpdateReporterComponent', () => {
  let component: UpdateReporterComponent;
  let fixture: ComponentFixture<UpdateReporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReporterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateReporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
