import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
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
import { SplashPage } from '../pages/splash/splash';

import { IonicImageViewerModule } from 'ionic-img-viewer';
import { VillaPage } from '../pages/villa/villa';
import { MeetingRoomPage } from '../pages/meeting-room/meeting-room';
import { PoolPage } from '../pages/pool/pool';
import { ServMeetingPage } from '../pages/serv-meeting/serv-meeting';
import { ServVillaPage } from '../pages/serv-villa/serv-villa';

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
    ServicePage,
    SplashPage,
    VillaPage,
    MeetingRoomPage,
    PoolPage,
    ServMeetingPage,
    ServVillaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicImageViewerModule,
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
    ServicePage,
    SplashPage,
    VillaPage,
    MeetingRoomPage,
    PoolPage,
    ServMeetingPage,
    ServVillaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    EmailComposer,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
