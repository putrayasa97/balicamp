import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LocationPage } from '../location/location';
import { GalleryPage } from '../gallery/gallery';
import { ServicePage } from '../service/service';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  valueforngif =true;
  tabHome = HomePage;
  tabAbout = AboutPage;
  tabContact = ContactPage;
  tabLocation = LocationPage;
  tabGallery = GalleryPage;
  tabService = ServicePage;

  constructor(keyboard:Keyboard) {
    keyboard.onKeyboardShow().subscribe(() => {
      document.body.classList.add('keyboard-is-open');
    });
  keyboard.onKeyboardHide().subscribe(() => {
    document.body.classList.remove('keyboard-is-open');
   });
  }
  ionViewDidLoad(){
    
  }
  ionViewDidEnter(){
    
  }
}


