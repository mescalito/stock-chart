import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppStatus } from '@st/interfaces';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  appStatus$ = <Observable<AppStatus>>this.http.get('v1');
  darkTheme$ = new BehaviorSubject<boolean>(false);
  slider$ = new BehaviorSubject<boolean | string>(false);

  constructor(private http: HttpClient) {}

  setDarkTheme(isDarkTheme: boolean): void {
    this.darkTheme$.next(isDarkTheme);
  }

  setSliderToggle(sliderTarget: boolean | string): void {
    this.slider$.next(sliderTarget);
  }
}
