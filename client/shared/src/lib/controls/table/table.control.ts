import { Component, OnInit, Input } from '@angular/core';
import { KeyValue } from '@st/interfaces';

@Component({
  selector: 'st-table',
  templateUrl: './table.control.html',
  styleUrls: ['./table.control.scss'],
})
export class TableControl implements OnInit {
  @Input() dataSource: Array<KeyValue> = [];
  @Input() displayedColumns: Array<keyof KeyValue> = [];
  @Input() columnDefinitions: Array<KeyValue> = [];

  constructor() {}
  ngOnInit(): void {}
}
