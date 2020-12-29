import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../_services/general.service';

@Component({
  selector: 'st-slidenav',
  templateUrl: './slidenav.component.html',
  styleUrls: ['./slidenav.component.scss'],
})
export class SlidenavComponent implements OnInit {
  darkTheme = false;
  constructor(private general: GeneralService) {}

  ngOnInit(): void {
    this.general.darkTheme$.subscribe(value => (this.darkTheme = value));
  }

  changeTheme() {
    this.darkTheme = !this.darkTheme;
    this.general.setDarkTheme(this.darkTheme);
  }

  toggleSlider(ref: string) {
    this.general.setSliderToggle(ref);
  }

  logout() {}
}
