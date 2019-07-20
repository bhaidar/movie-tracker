import { async, TestBed } from '@angular/core/testing';
import { MovietrackerCoreModule } from './movietracker-core.module';

describe('MovietrackerCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MovietrackerCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MovietrackerCoreModule).toBeDefined();
  });
});
