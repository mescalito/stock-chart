import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './content/header/header.component';
import { SlidenavComponent } from './content/slidenav/slidenav.component';
import { SubnavComponent } from './content/subnav/subnav.component';
import { ViewportComponent } from './content/viewport/viewport.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared.module';
import { LibraryModule } from '../library.module';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    ContentComponent,
    HeaderComponent,
    SubnavComponent,
    SlidenavComponent,
    NotFoundComponent,
    ViewportComponent,
  ],
  imports: [SharedModule, LibraryModule],
})
export class LayoutModule {}
