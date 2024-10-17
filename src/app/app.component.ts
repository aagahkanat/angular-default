import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from './services/data.service';
import { Language } from './models/language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'c-prot-links';

  constructor(private _translate: TranslateService,
    public matIconRegistry: MatIconRegistry,
    public domSanitizer: DomSanitizer,
    private _dataService: DataService) {
    _translate.addLangs(['en', 'tr']);

    if (localStorage.getItem('lang')) {
      localStorage.getItem('lang') == 'tr' ? _translate.use('tr') : _translate.use('en');
    } else if (_translate.getBrowserLang()?.includes('tr')) {
      this._dataService.setLanguage(Language.Turkish);
    } else {
      this._dataService.setLanguage(Language.English);
    }
  }
}
