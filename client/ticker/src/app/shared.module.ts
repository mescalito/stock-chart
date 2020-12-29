import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const importAndExport = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  imports: [...importAndExport],
  exports: [...importAndExport],
})
export class SharedModule {}
