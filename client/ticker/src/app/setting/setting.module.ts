import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ConfigFeatureKey, configReducer } from './+state/config.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ConfigEffects } from './+state/config.effects';
import { GeneralComponent } from './general/general.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { LibraryModule } from '../library.module';

const routes: Routes = [
  { path: '', component: GeneralComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [GeneralComponent],
  imports: [
    SharedModule,
    LibraryModule,
    StoreModule.forFeature(ConfigFeatureKey, configReducer),
    EffectsModule.forFeature([ConfigEffects]),
    RouterModule.forChild(routes),
  ],
})
export class SettingModule {}
