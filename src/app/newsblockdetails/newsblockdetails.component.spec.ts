import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsblockdetailsComponent } from './newsblockdetails.component';

describe('NewsblockdetailsComponent', () => {
  let component: NewsblockdetailsComponent;
  let fixture: ComponentFixture<NewsblockdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsblockdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsblockdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
