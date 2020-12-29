import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: QuickViewComponent,
  },
];

@NgModule({
  declarations: [QuickViewComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
