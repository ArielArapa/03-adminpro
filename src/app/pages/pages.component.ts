import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunction(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {


  constructor(private settingsSerivce: SettingsService) { }

  ngOnInit(): void {
    customInitFunction();
  }

  date = new Date().getFullYear();

}
