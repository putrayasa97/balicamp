import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public app: App) {

  }
  email(){
    this.app.getRootNav().push(ContactPage);
  }
  
}
