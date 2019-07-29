import { async, TestBed } from '@angular/core/testing';
import { MovietrackerAuthModule } from './movietracker-auth.module';

describe('MovietrackerAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MovietrackerAuthModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MovietrackerAuthModule).toBeDefined();
  });
});
