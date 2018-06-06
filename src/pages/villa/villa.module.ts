import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VillaPage } from './villa';

@NgModule({
  declarations: [
    VillaPage,
  ],
  imports: [
    IonicPageModule.forChild(VillaPage),
  ],
})
export class VillaPageModule {}
