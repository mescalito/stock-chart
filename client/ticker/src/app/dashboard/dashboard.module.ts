import { NgModule } from '@angular/core';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { RouterModule, Routes } from '@angular/router';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SharedModule } from '../shared.module';
import { LibraryModule } from '../library.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: QuickViewComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
  },
];

@NgModule({
  declarations: [QuickViewComponent, WishlistComponent],
  imports: [SharedModule, LibraryModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
