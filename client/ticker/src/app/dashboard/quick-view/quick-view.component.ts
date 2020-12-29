import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss'],
})
export class QuickViewComponent implements OnInit {
  selectOptions = [
    { value: 'AAPL', displayValue: 'Apple Inc' },
    { value: 'GOOGL', displayValue: 'Alphabet Inc Class A' },
    { value: 'AMZN', displayValue: 'Amazon.com, Inc.' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
