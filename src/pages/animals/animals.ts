import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the AnimalsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animals',
  templateUrl: 'animals.html',
})
export class AnimalsPage {
  animals = [
    {
      'title': 'Vache',
      'image': 'img/animals/cow-icon.png',
      'desc': 'Meugle',
      'file': '/sounds/cow.mp3',
      'playing': false
    },
    {
      'title': 'Dauphin',
      'image': 'img/animals/dolphin-icon.png',
      'desc': 'Siffle',
      'file': '/sounds/dolphin.mp3',
      'playing': false
    },
    {
      'title': 'Grenouille',
      'image': 'img/animals/frog-icon.png',
      'desc': 'Coasse',
      'file': '/sounds/frog.mp3',
      'playing': false
    },
    {
      'title': 'Oiseau',
      'image': 'img/animals/bird-icon.png',
      'desc': 'Chante',
      'file': '/sounds/bird.mp3',
      'playing': false
    },
    {
      'title': 'Cochon',
      'image': 'img/animals/pig-icon.png',
      'desc': 'Grogne',
      'file': '/sounds/pig.mp3',
      'playing': false
    },
    {
      'title': 'Chien',
      'image': 'img/animals/puppy-icon.png',
      'desc': 'Aboie',
      'file': '/sounds/dog.mp3',
      'playing': false
    },
    {
      'title': 'Chat',
      'image': 'img/animals/black-cat-icon.png',
      'desc': 'Miaule',
      'file': '/sounds/cat.mp3',
      'playing': false
    },
    {
      'title': 'Cheval',
      'image': 'img/animals/horse-icon.png',
      'desc': 'Hennit',
      'file': '/sounds/horse.wav',
      'playing': false
    },
    {
      'title': 'Ane',
      'image': 'img/animals/donkey-icon.png',
      'desc': 'Brait',
      'file': '/sounds/donkey.wav',
      'playing': false
    }
  ];

  private media:any;
  // public type:any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  playSound(evt, animal) {
    this.media = new Audio();
    this.media.src = "assets" + animal.file;
    this.media.load();
    this.media.play();     
  }

  delete(index) {
    // Création du toast, définition de son toast
    let toast = this.toastCtrl.create({
      message: this.animals[index].title + ' a été supprimé',
      duration: 1500,
      position: 'top'
    });

    // Suppression de l'animal via son index
    this.animals.splice(index, 1);
  
    // present: c'est pour afficher son toast à l'écran
    toast.present();
  }

/*   filter(choice){
    this.type = choice;
    }
 */
  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalsPage');
  }

}
