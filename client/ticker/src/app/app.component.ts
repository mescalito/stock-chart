import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStatus } from '@st/interfaces';
import { filter } from 'rxjs/operators';
import { SelectStatus } from './setting/+state/config.selector';
import { LoadConfig } from './setting/+state/config.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'st-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  appStatus$: Observable<AppStatus> = this.store.select(SelectStatus);

  constructor(private store: Store) {
    this.appStatus$.pipe(filter(val => !!val)).subscribe(status => {
      console.info(status?.message);
    });
  }

  ngOnInit() {
    this.store.dispatch(LoadConfig());
  }
}
