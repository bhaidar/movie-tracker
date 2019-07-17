import { async, TestBed } from '@angular/core/testing';
import { MovietrackerMoviesModule } from './movietracker-movies.module';

describe('MovietrackerMoviesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MovietrackerMoviesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MovietrackerMoviesModule).toBeDefined();
  });
});
