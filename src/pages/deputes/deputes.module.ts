import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeputesPage } from './deputes';

@NgModule({
  declarations: [
    DeputesPage,
  ],
  imports: [
    IonicPageModule.forChild(DeputesPage),
  ],
})
export class DeputesPageModule {}
