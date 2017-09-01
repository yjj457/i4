import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  cucumber: boolean;

  constructor(public navCtrl: NavController) {

  }

  aaa(){
    console.log('Jon Snow new state:' + this.cucumber);


  }

}
