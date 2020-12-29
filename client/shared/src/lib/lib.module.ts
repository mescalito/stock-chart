import { NgModule } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from 'client/ticker/src/app/shared.module';
import {
  ButtonControl,
  ButtonToggleControl,
} from './controls/button/button.control';
import { CheckboxControl } from './controls/checkbox/checkbox.control';
import { DisableControlDirective } from './controls/common.control';
import { InputControl } from './controls/input/input.control';
import {
  ListControl,
  ListSelectionControl,
} from './controls/list/list.control';
import { LoaderControl } from './controls/loader/loader.control';
import { SelectControl } from './controls/select/select.control';
import { SpinnerControl } from './controls/spinner/spinner.control';
import { TabControl } from './controls/tab/tab.control';
import { TextareaControl } from './controls/textarea/textarea.control';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { CardControl } from './controls/card/card.control';

const declareAndExport = [
  LogoComponent,
  InputControl,
  ButtonControl,
  ButtonToggleControl,
  // ModalControl,
  // TableControl,
  TabControl,
  SelectControl,
  // RadioControl,
  // LevelControl,
  // ChipControl,
  CardControl,
  // ChipListControl,
  // DateControl,
  // DateRangeControl,
  TextareaControl,
  CheckboxControl,
  LoaderControl,
  SpinnerControl,
  // ExpandControl,
  ListControl,
  ListSelectionControl,
  DisableControlDirective,
];

const importAndExport = [
  SharedModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSidenavModule,
  RouterModule,
];

@NgModule({
  declarations: [...declareAndExport],
  imports: [...importAndExport, MaterialModule],
  exports: [...importAndExport, ...declareAndExport],
})
export class LibModule {}
