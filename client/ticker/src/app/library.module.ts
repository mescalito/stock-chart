import { NgModule } from '@angular/core';
import { LibModule } from 'client/shared/src/lib/lib.module';

const importAndExport = [LibModule];

@NgModule({
  imports: [...importAndExport],
  exports: [...importAndExport],
})
export class LibraryModule {}
