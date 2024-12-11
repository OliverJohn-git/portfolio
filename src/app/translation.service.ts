import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/http-loader';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang ('en');
  }

  public switchLanguage(language: string):void{
    this.translate.use(language);
  }
}
