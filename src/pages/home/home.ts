import { AnimalsPage } from './../animals/animals';
import { FormPage } from './../form/form';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public connecteduser:String;

  constructor(public navCtrl: NavController, public events: Events) {
    events.subscribe('event.data', (data)=>{
      this.connecteduser = data;
    });
  }

  goToForm() {
    this.navCtrl.push(FormPage)

  }

  goToAnimals() {
    this.navCtrl.push('animals-screen', {origin:'Je viens de home'})
    // this.navCtrl.push(AnimalsPage, {origin:'Je viens de home'})
  }

  

}
