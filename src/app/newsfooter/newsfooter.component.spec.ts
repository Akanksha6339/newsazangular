import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfooterComponent } from './newsfooter.component';

describe('NewsfooterComponent', () => {
  let component: NewsfooterComponent;
  let fixture: ComponentFixture<NewsfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
