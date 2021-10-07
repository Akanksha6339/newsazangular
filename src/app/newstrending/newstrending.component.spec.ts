import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstrendingComponent } from './newstrending.component';

describe('NewstrendingComponent', () => {
  let component: NewstrendingComponent;
  let fixture: ComponentFixture<NewstrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewstrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
