import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Chart} from 'chart.js';
import {Api} from "../../providers/api/api";
import * as xml2js from "xml2js";
import {DatePipe} from "@angular/common";

/**
 * Generated class for the DeputePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-depute',
  templateUrl: 'depute.html',
})
export class DeputePage {

  // @ViewChild('last_activ_canvas') last_activ_canvas;
  // @ViewChild('last_remu_canvas') last_remu_canvas;

  depute: any;
  barChart: any;
  last_month: Date;
  activite_last_month: any;
  remuneration_last_month: any;
  test: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: Api, public datePipe: DatePipe) {
    this.depute = this.navParams.get('depute');
    this.last_month = new Date();
    this.get_last_activite();
    this.get_last_remuneration();
  }

  get_last_activite() {
    let tmp;
    let datas;
    if (this.last_month.getMonth() == 0) {
      tmp = 12;
      this.last_month.setFullYear(this.last_month.getFullYear() - 1, 11)

    } else {
      this.last_month.setMonth(this.last_month.getMonth() - 1);
      tmp = this.datePipe.transform(this.last_month, 'MM');
    }

    this.api.get('synthese/' + this.last_month.getFullYear() + tmp + '/json').subscribe((data: any) => {
      this.activite_last_month = data.deputes[this.depute.depute.id - 1];
      console.log(this.activite_last_month);
      datas = [this.activite_last_month.depute.semaines_presence, this.activite_last_month.depute.hemicycle_interventions
      , this.activite_last_month.depute.questions_orales, this.activite_last_month.depute.comission_presences
      , this.activite_last_month.depute.amendements_proposes];

      // this.print_canvas(datas, this.last_activ_canvas);

    }, (err) => {
      console.log(err);
    });

  }

  get_last_remuneration() {
    this.api.deputes_hatvp.forEach((item) => {
      if (item.nom.toUpperCase() === this.depute.depute.nom_de_famille.toUpperCase()) {
        this.api.getHATVP(item.open_data).subscribe((dataXML) => {
          xml2js.parseString(dataXML, (err, result) => {
            if (result.declaration.mandatElectifDto[0].neant[0] == "true") {
              console.log("pas de thunes");
            } else {
              this.test = result.declaration.mandatElectifDto[0].items[0].items;
              for (let item of result.declaration.mandatElectifDto[0].items[0].items) {
                if(item.descriptionMandat[0].toUpperCase() == "DEPUTE") this.remuneration_last_month = item;
                console.log(item);
              }
            }
          });
        });
      }
    });
  }

  print_canvas(data: any, canvas: any) {
    this.barChart = new Chart(canvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Présences semaine', 'Interventions hémycicles', 'Questions orales', 'Présences commission', 'Amendements proposés'],
        datasets: [{
          label: 'Nombre',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });
  }
}
