import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FormPage } from './../pages/form/form';
import { CurrencyConverterPage } from './../pages/currency-converter/currency-converter';
import { AnimalsPage } from './../pages/animals/animals';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = AnimalsPage;
 rootPage:any = HomePage;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

