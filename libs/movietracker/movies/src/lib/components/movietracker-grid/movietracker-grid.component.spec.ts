import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovietrackerGridComponent } from './movietracker-grid.component';

describe('MovietrackerGridComponent', () => {
  let component: MovietrackerGridComponent;
  let fixture: ComponentFixture<MovietrackerGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovietrackerGridComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovietrackerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
