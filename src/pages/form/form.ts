// import { FormPage } from './form';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the FormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  public pageTitle:String = "Mon super formulaire";
  public elementColor = 'danger';
  public userName:String = 'Tycho Brahé';
  public profession:Array<String>;

  public now = new Date();
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
  }

  submitData() {
    this.events.publish('event.data', this.userName);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

}
