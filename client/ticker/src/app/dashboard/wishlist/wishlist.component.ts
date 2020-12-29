import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  selectOptions = [
    { value: 'AAPL', displayValue: 'Apple Inc' },
    { value: 'GOOGL', displayValue: 'Alphabet Inc Class A' },
    { value: 'AMZN', displayValue: 'Amazon.com, Inc.' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
