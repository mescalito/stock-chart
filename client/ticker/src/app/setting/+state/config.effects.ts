import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GeneralService } from '../../_services/general.service';
import { LoadConfig, SuccessLoadConfig } from './config.action';
import { map, mergeMap } from 'rxjs/operators';
import { AppStatus } from '@st/interfaces';

@Injectable()
export class ConfigEffects {
  loadConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadConfig),
      mergeMap(() =>
        this.general.appStatus$.pipe(
          map((status: AppStatus) =>
            SuccessLoadConfig({ payload: { status } }),
          ),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private general: GeneralService) {}
}
