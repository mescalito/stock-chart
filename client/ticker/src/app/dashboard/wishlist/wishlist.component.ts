import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'st-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  mockStocks = [
    { value: 'AAPL', displayValue: 'Apple Inc', lastPrice: '131.97 USD' },
    {
      value: 'GOOGL',
      displayValue: 'Alphabet Inc Class A',
      lastPrice: '1,734.16 USD',
    },
    {
      value: 'AMZN',
      displayValue: 'Amazon.com, Inc.',
      lastPrice: '3,172.69 USD',
    },
  ];
  wishlistForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.wishlistForm = this.fb.group({
      symbol: '',
    });
  }
}
