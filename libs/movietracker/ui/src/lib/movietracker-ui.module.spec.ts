import { async, TestBed } from '@angular/core/testing';
import { MovietrackerUiModule } from './movietracker-ui.module';

describe('MovietrackerUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MovietrackerUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MovietrackerUiModule).toBeDefined();
  });
});
