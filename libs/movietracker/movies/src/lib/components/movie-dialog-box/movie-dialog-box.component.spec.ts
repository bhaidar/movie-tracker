import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDialogBoxComponent } from './movie-dialog-box.component';

describe('MovieDialogBoxComponent', () => {
  let component: MovieDialogBoxComponent;
  let fixture: ComponentFixture<MovieDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDialogBoxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
