import { async, TestBed } from '@angular/core/testing';
import { MovieTrackerCoreModule } from './movietracker-core.module';

describe('MovietrackerCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MovieTrackerCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MovieTrackerCoreModule).toBeDefined();
  });
});
