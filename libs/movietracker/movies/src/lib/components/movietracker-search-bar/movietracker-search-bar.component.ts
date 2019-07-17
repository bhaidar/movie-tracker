import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { MtAction } from '@mt/movietracker/core';
import {
  tap,
  map,
  debounceTime,
  distinctUntilChanged,
  takeUntil
} from 'rxjs/operators';

@Component({
  selector: 'mt-movietracker-search-bar',
  templateUrl: './movietracker-search-bar.component.html',
  styleUrls: ['./movietracker-search-bar.component.scss']
})
export class MovietrackerSearchBarComponent implements OnInit, OnDestroy {
  private searchInput: HTMLInputElement;
  private onDestroy$ = new Subject();

  @ViewChild('searchInputEl', { static: true }) searchInputEl: ElementRef<
    HTMLInputElement
  >;

  @Output() public action: EventEmitter<MtAction> = new EventEmitter();

  ngOnInit(): void {
    this.searchInput = this.searchInputEl.nativeElement;

    fromEvent(this.searchInput, 'keyup')
      .pipe(
        tap((event: any) => {
          if (event.key === 'Escape') {
            this.searchInput.value = '';
          }
        }),
        map(() => this.searchInput.value),
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.onDestroy$)
      )
      .subscribe(event => this.action.emit({ type: 'search', payload: event }));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  public reset(): void {
    this.searchInput.value = '';
  }
}
