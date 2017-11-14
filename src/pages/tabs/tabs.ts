import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import {DeputesList, GroupesList} from '../pages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  groupesList: any = GroupesList;
  deputesList: any = DeputesList;

  deputesListTitle = "Députés";
  groupesListTitle= "Groupes";

  constructor(public navCtrl: NavController) {
  }
}
