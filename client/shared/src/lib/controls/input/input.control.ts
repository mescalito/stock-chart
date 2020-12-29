import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ControlAbstract } from '../common.control';

@Component({
  selector: 'st-input',
  templateUrl: './input.control.html',
  styleUrls: ['./input.control.scss'],
})
export class InputControl extends ControlAbstract implements OnInit {
  @Input() telCode: string;
  @Input() matComplete = false;
  @Input() stocks: Array<any> = [];
  filteredStocks: Observable<any[]>;

  hide = false;

  ngOnInit(): void {
    super.ngOnInit();
    this.hide = this.type === 'password';
    if (this.matComplete) {
      this.filteredStocks = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value)),
      );
    }
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.stocks.filter(
      ({ value, displayValue }) =>
        this._normalizeValue(value).includes(filterValue) ||
        this._normalizeValue(displayValue).includes(filterValue),
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
