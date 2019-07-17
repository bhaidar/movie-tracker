import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRatingComponent } from './start-rating.component';

describe('StartRatingComponent', () => {
  let component: StartRatingComponent;
  let fixture: ComponentFixture<StartRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StartRatingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
