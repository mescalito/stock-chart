import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStatus } from '@st/interfaces';
import { filter } from 'rxjs/operators';
import { GeneralService } from './_services/general.service';

@Component({
  selector: 'st-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  appStatus$: Observable<AppStatus> = this.generalService.appStatus$;

  constructor(private generalService: GeneralService) {
    this.appStatus$.pipe(filter(val => !!val)).subscribe(status => {
      console.info(status?.message);
    });
  }
}
