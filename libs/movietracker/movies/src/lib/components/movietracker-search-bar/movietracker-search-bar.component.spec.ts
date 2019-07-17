import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovietrackerSearchBarComponent } from './movietracker-search-bar.component';

describe('MovietrackerSearchBarComponent', () => {
  let component: MovietrackerSearchBarComponent;
  let fixture: ComponentFixture<MovietrackerSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovietrackerSearchBarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovietrackerSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
