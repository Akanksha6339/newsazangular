import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewselementComponent } from './newselement.component';

describe('NewselementComponent', () => {
  let component: NewselementComponent;
  let fixture: ComponentFixture<NewselementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewselementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewselementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
