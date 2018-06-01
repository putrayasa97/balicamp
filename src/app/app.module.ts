import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Keyboard } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocationPage } from '../pages/location/location';
import { GoogleMaps  } from '@ionic-native/google-maps';
import { HttpModule } from '@angular/http';
import { EmailComposer } from '@ionic-native/email-composer';
import { FacilitiesPage } from '../pages/facilities/facilities';
import { ProgramsPage } from '../pages/programs/programs';
import { GalleryPage } from '../pages/gallery/gallery';
import { ServicePage } from '../pages/service/service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LocationPage,
    FacilitiesPage,
    ProgramsPage,
    GalleryPage,
    ServicePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LocationPage,
    FacilitiesPage,
    ProgramsPage,
    GalleryPage,
    ServicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    EmailComposer,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
