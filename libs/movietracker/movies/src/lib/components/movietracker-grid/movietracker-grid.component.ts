import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '@mt/api-services';
import { MtAction } from '@mt/movietracker/core';

@Component({
  selector: 'mt-movietracker-grid',
  templateUrl: './movietracker-grid.component.html',
  styleUrls: ['./movietracker-grid.component.scss']
})
export class MovieTrackerGridComponent {
  displayedColumns: string[] = [
    'title',
    'watchedOn',
    'genre',
    'rating',
    'action'
  ];
  @Input() dataSource: Movie[];
  @Output() action: EventEmitter<MtAction> = new EventEmitter();

  public doAction(type, payload): void {
    this.action.emit({ type, payload });
  }
}
