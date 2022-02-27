import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(private SettingsService: SettingsService) { }

  ngOnInit(): void {
    this.SettingsService.checkCurrentTheme();
  }

  changeThemes(theme: string) {
    this.SettingsService.changeThemes(theme);
  }

}
