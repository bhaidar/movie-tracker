import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTrackerMoviesListComponent } from './movietracker-movies-list.component';

describe('MovieTrackerMoviesListComponent', () => {
  let component: MovieTrackerMoviesListComponent;
  let fixture: ComponentFixture<MovieTrackerMoviesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieTrackerMoviesListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTrackerMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
