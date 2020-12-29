import { Injectable } from '@angular/core';
import { StockWishlist } from '@st/interfaces';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';

const queryWishlist = gql`
  query stocks {
    stocks {
      id
      exchange
      symbol
      polling
      isActive
      last
      open
      close
    }
  }
`;

const addStock = gql`
  mutation addStock($symbol: String!) {
    addStock(symbol: $symbol) {
      id
      exchange
      symbol
      polling
      isActive
      last
      open
      close
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private apollo: Apollo) {}

  getList() {
    return this.apollo
      .query<{ stocks: StockWishlist[] }>({ query: queryWishlist })
      .pipe(map(({ data }) => (data?.stocks?.length ? data.stocks : [])));
  }

  addStock(variables: { symbol: string }) {
    return this.apollo
      .mutate<{ addStock: StockWishlist }>({ mutation: addStock, variables })
      .pipe(map(({ data }) => data?.addStock));
  }
}
