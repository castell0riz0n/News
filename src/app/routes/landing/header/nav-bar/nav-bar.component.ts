import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../../core/settings/settings.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    public settings: SettingsService
  ) { }

  ngOnInit() {
  }

  toggleCollapsedSideabar() {
    this.settings.toggleLayoutSetting('isCollapsed');
}

isCollapsedText() {
  return this.settings.getLayoutSetting('isCollapsedText');
}

}
