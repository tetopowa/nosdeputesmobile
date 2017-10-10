import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeputePage } from './depute';

@NgModule({
  declarations: [
    DeputePage,
  ],
  imports: [
    IonicPageModule.forChild(DeputePage),
  ],
})
export class DeputePageModule {}
