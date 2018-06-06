import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingRoomPage } from './meeting-room';

@NgModule({
  declarations: [
    MeetingRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingRoomPage),
  ],
})
export class MeetingRoomPageModule {}
