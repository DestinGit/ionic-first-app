import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CurrencyConverterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-currency-converter',
  templateUrl: 'currency-converter.html',
})
export class CurrencyConverterPage {

  public currency = 1;
  public selectedVal = 'Euro';
  public conv = {
    'Euro': 1.17847,
    'Dollar': 0.848741
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrencyConverterPage');
  }

}
