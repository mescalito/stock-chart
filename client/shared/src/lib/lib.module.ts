import { NgModule } from '@angular/core';
import { LogoComponent } from './logo/logo.component';

const declareAndExport = [LogoComponent];

@NgModule({
  exports: [...declareAndExport],
  declarations: [...declareAndExport],
})
export class LibModule {}
