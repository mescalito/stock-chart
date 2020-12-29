import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppStatus } from '@st/interfaces';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  appStatus$ = <Observable<AppStatus>>this.http.get('v1');

  constructor(private http: HttpClient) {}
}
