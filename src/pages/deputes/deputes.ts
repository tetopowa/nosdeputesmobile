import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Platform} from 'ionic-angular';
import {Api} from "../../providers/api/api";

/**
 * Generated class for the DeputesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-deputes',
  templateUrl: 'deputes.html'
})
export class DeputesPage {
  'use strict';

  deputesList: any;
  filteredDeputesList: any;
  title: string;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              private api: Api,
              private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles'
    });
    loading.present();

    if (this.navParams.get('group')) {
      this.title = "Députés " + this.navParams.get('group');
      this.api.get('groupe/' + this.navParams.get('group') + '/json').subscribe(
        (data: any) => {
          this.deputesList = data.deputes;
          this.filteredDeputesList = data.deputes;
          loading.dismiss();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.title = "Tous les députés";
      this.api.get('synthese/data/json').subscribe(
        (data: any) => {
          this.deputesList = data.deputes;
          this.filteredDeputesList = data.deputes;
          loading.dismiss();

        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  openDepute(depute) {
    console.log(depute);
    this.navCtrl.push('DeputePage', {
      depute: depute
    });
  }

  searchDepute(ev) {
    this.filteredDeputesList = this.deputesList;
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.filteredDeputesList = this.filteredDeputesList.filter(
        depute => depute.depute.nom.toLowerCase().indexOf(val.toLowerCase()) > -1 || depute.depute.nom_circo.toLowerCase().indexOf(val.toLowerCase()) > -1
      );
    }

  }
}
