import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Api} from "../../providers/api/api";

/**
 * Generated class for the GroupesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groupes',
  templateUrl: 'groupes.html',
})
export class GroupesPage {

  groupesList: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: Api) {
    this.api.get('organismes/groupe/json').subscribe(
      (data: any) => {
        this.groupesList = data.organismes;
      }
    );
  }

  openGroup(group: string){
    this.navCtrl.push('DeputesPage', {
      group: group
    });
  }


}
