import { Component, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Movie } from '@mt/api-services';

export interface MovieDialogBoxOptions {
  movie?: Movie;
  action: string;
}

@Component({
  selector: 'mt-movie-dialog-box',
  templateUrl: './movie-dialog-box.component.html',
  styleUrls: ['./movie-dialog-box.component.scss']
})
export class MovieDialogBoxComponent {
  public action: string;
  public movie: Movie;

  constructor(
    public dialogRef: MatDialogRef<MovieDialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: MovieDialogBoxOptions
  ) {
    this.movie = data.movie;
    this.action = data.action;
  }

  doAction() {
    this.dialogRef.close({ type: this.action, payload: this.movie });
  }

  closeDialog() {
    this.dialogRef.close({ type: 'Cancel' });
  }
}
