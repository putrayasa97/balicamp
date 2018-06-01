import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LocationPage } from '../location/location';
import { Keyboard } from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';
import { ServicePage } from '../service/service';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  valueforngif = false;
  tabHome = HomePage;
  tabAbout = AboutPage;
  tabContact = ContactPage;
  tabLocation = LocationPage;
  tabGallery = GalleryPage;
  tabService = ServicePage;

  constructor(public keyboard: Keyboard) {
    //this.keyboard.isOpen().subscribe(()=>{this.valueforngif=false});
    //this.keyboard.close().subscribe((value)=>{this.valueforngif=true});
  }
  ionViewDidLoad(){
    
  }
}


