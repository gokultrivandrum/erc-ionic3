import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationPage } from './location';
import { SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [
    LocationPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationPage),
    SharedModule
  ],
})
export class LocationPageModule {}
