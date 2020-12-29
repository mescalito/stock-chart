import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StockWishlist } from '@st/interfaces';
import { Color } from 'client/shared/src/lib/controls/controls.enum';
import { ListItem } from 'client/shared/src/lib/controls/controls.interface';
import { filter } from 'rxjs/operators';
import { AddStock, LoadWishlist } from '../+state/stock.action';
import { SelectWishlist } from '../+state/stock.selector';

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
  wishList$ = this.store.select(SelectWishlist);
  wishList: ListItem[] = [];

  constructor(private fb: FormBuilder, private store: Store) {
    this.wishList$
      .pipe(
        filter(val => {
          if (!val) {
            this.store.dispatch(LoadWishlist());
          }
          return !!val;
        }),
      )
      .subscribe((data: StockWishlist[]) => {
        this.wishList = data.map(({ symbol, exchange, last, open, close }) => ({
          title: `${symbol} - ${last}`,
          description: `Open: ${open} Close: ${close}`,
          heroTitle: exchange,
          color: Color.GENTLE,
        }));
      });
  }

  ngOnInit(): void {
    this.wishlistForm = this.fb.group({
      symbol: '',
    });
  }

  onSubmit() {
    const value = this.wishlistForm.value;
    if (value.symbol) {
      this.store.dispatch(AddStock(value));
      this.wishlistForm.setValue({ symbol: '' });
    }
  }
}
