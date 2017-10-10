import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DeputesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-deputes',
  templateUrl: 'deputes.html',
})
export class DeputesPage {

  deputesList = [{"depute":{"id":1,"nom":"C\u00e9dric Roussel","nom_de_famille":"Roussel","prenom":"C\u00e9dric","sexe":"H","date_naissance":"1972-10-10","lieu_naissance":"Brest (Finist\u00e8re)","num_deptmt":"06","nom_circo":"Alpes-Maritimes","num_circo":3,"mandat_debut":"2017-06-21","groupe_sigle":"LREM","parti_ratt_financier":"En Marche !","sites_web":[{"site":"https:\/\/fr-fr.facebook.com\/CRoussel06\/"},{"site":"http:\/\/cedricroussel.en-marche.fr"},{"site":"https:\/\/twitter.com\/CedricRoussel06"}],"emails":[{"email":"cedric.roussel@assemblee-nationale.fr"},{"email":"6circo03@en-marche.fr"}],"adresses":[{"adresse":"Assembl\u00e9e nationale, 126 Rue de l'Universit\u00e9, 75355 Paris 07 SP"}],"collaborateurs":[{"collaborateur":"M. Cyril Bertschy"},{"collaborateur":"Mme Camilia M'Hamed-Said"}],"anciens_mandats":[{"mandat":"21\/06\/2017 \/  \/ "}],"autres_mandats":[],"anciens_autres_mandats":[],"profession":"Conseiller en gestion de patrimoine ind\u00e9pendant","place_en_hemicycle":"309","url_an":"http:\/\/www2.assemblee-nationale.fr\/deputes\/fiche\/OMC_PA718902","id_an":"718902","slug":"cedric-roussel","url_nosdeputes":"https:\/\/www.nosdeputes.fr\/cedric-roussel","url_nosdeputes_api":"https:\/\/www.nosdeputes.fr\/cedric-roussel\/json","nb_mandats":1,"twitter":"CedricRoussel06"}},{"depute":{"id":2,"nom":"Nadia Hai","nom_de_famille":"Hai","prenom":"Nadia","sexe":"F","date_naissance":"1980-03-08","lieu_naissance":"Trappes (Yvelines)","num_deptmt":"78","nom_circo":"Yvelines","num_circo":11,"mandat_debut":"2017-06-21","groupe_sigle":"LREM","parti_ratt_financier":"En Marche !","sites_web":[{"site":"https:\/\/fr-fr.facebook.com\/NadiaHai7811\/"},{"site":"https:\/\/twitter.com\/NadiaHai78"},{"site":"http:\/\/www.rem-circo7811.fr"}],"emails":[{"email":"nadia.hai@en-marche.fr"},{"email":"nadia.hai@assemblee-nationale.fr"}],"adresses":[{"adresse":"Assembl\u00e9e nationale, 126 Rue de l'Universit\u00e9, 75355 Paris 07 SP"}],"collaborateurs":[{"collaborateur":"Mme Moufida Goucha"},{"collaborateur":"Mme Feriel Herlaut"},{"collaborateur":"M. Moussa Ouarouss"},{"collaborateur":"Mme Nelly Gu\u00e9ho"}],"anciens_mandats":[{"mandat":"21\/06\/2017 \/  \/ "}],"autres_mandats":[],"anciens_autres_mandats":[],"profession":"Autre cadre (secteur priv\u00e9)","place_en_hemicycle":"349","url_an":"http:\/\/www2.assemblee-nationale.fr\/deputes\/fiche\/OMC_PA722054","id_an":"722054","slug":"nadia-hai","url_nosdeputes":"https:\/\/www.nosdeputes.fr\/nadia-hai","url_nosdeputes_api":"https:\/\/www.nosdeputes.fr\/nadia-hai\/json","nb_mandats":1,"twitter":"NadiaHai78"}},{"depute":{"id":3,"nom":"Pascale Fontenel-Personne","nom_de_famille":"Fontenel-Personne","prenom":"Pascale","sexe":"F","date_naissance":"1962-05-26","lieu_naissance":"Mans (Sarthe)","num_deptmt":"72","nom_circo":"Sarthe","num_circo":3,"mandat_debut":"2017-06-21","groupe_sigle":"LREM","parti_ratt_financier":"En Marche !","sites_web":[{"site":"https:\/\/fr-fr.facebook.com\/fontenelpersonne\/"},{"site":"https:\/\/twitter.com\/f_personne"}],"emails":[{"email":"permanencedeputee7203@gmail.com"},{"email":"pascale.fontenel-personne@assemblee-nationale.fr"}],"adresses":[{"adresse":"Assembl\u00e9e nationale, 126 Rue de l'Universit\u00e9, 75355 Paris 07 SP"}],"collaborateurs":[{"collaborateur":"Mme Chantal Choupay-Bruneaud"},{"collaborateur":"M. Cyrille Crochard"},{"collaborateur":"Mme Charlotte Servais"}],"anciens_mandats":[{"mandat":"21\/06\/2017 \/  \/ "}],"autres_mandats":[],"anciens_autres_mandats":[],"profession":"Industriel-Chef d'entreprise","place_en_hemicycle":"463","url_an":"http:\/\/www2.assemblee-nationale.fr\/deputes\/fiche\/OMC_PA721384","id_an":"721384","slug":"pascale-fontenel-personne","url_nosdeputes":"https:\/\/www.nosdeputes.fr\/pascale-fontenel-personne","url_nosdeputes_api":"https:\/\/www.nosdeputes.fr\/pascale-fontenel-personne\/json","nb_mandats":1,"twitter":"f_personne"}},{"depute":{"id":4,"nom":"Laurent Pietraszewski","nom_de_famille":"Pietraszewski","prenom":"Laurent","sexe":"H","date_naissance":"1966-11-19","lieu_naissance":"Saint-Denis (Seine-Saint-Denis)","num_deptmt":"59","nom_circo":"Nord","num_circo":11,"mandat_debut":"2017-06-21","groupe_sigle":"LREM","parti_ratt_financier":"En Marche !","sites_web":[{"site":"https:\/\/twitter.com\/pietraszewski_l"},{"site":"https:\/\/fr-fr.facebook.com\/laurentpietraszewski\/"},{"site":"http:\/\/www.laurentpietraszewski.fr"},{"site":"http:\/\/www.11eme-circonscription-du-nord-en-marche.fr"}],"emails":[{"email":"laurent.pietraszewski@assemblee-nationale.fr"},{"email":"laurentpietraszewski@gmail.com"}],"adresses":[{"adresse":"Assembl\u00e9e nationale, 126 Rue de l'Universit\u00e9, 75355 Paris 07 SP"}],"collaborateurs":[{"collaborateur":"Mme Alice Bourgon"},{"collaborateur":"Mme Florence Morlighem"},{"collaborateur":"M. \u00c9ric Van Roy"}],"anciens_mandats":[{"mandat":"21\/06\/2017 \/  \/ "}],"autres_mandats":[],"anciens_autres_mandats":[],"profession":"Autre cadre (secteur priv\u00e9)","place_en_hemicycle":"371","url_an":"http:\/\/www2.assemblee-nationale.fr\/deputes\/fiche\/OMC_PA720512","id_an":"720512","slug":"laurent-pietraszewski","url_nosdeputes":"https:\/\/www.nosdeputes.fr\/laurent-pietraszewski","url_nosdeputes_api":"https:\/\/www.nosdeputes.fr\/laurent-pietraszewski\/json","nb_mandats":1,"twitter":"pietraszewski_l"}},{"depute":{"id":5,"nom":"Guillaume Kasbarian","nom_de_famille":"Kasbarian","prenom":"Guillaume","sexe":"H","date_naissance":"1987-02-28","lieu_naissance":"Marseille (Bouches-du-Rh\u00f4ne)","num_deptmt":"28","nom_circo":"Eure-et-Loir","num_circo":1,"mandat_debut":"2017-06-21","groupe_sigle":"LREM","parti_ratt_financier":"En Marche !","sites_web":[{"site":"https:\/\/fr-fr.facebook.com\/kasbarian2017\/"},{"site":"https:\/\/twitter.com\/guillaumekasba"},{"site":"http:\/\/www.guillaumekasbarian.fr"}],"emails":[{"email":"guillaume.kasbarian@en-marche.fr"},{"email":"guillaume.kasbarian@assemblee-nationale.fr"}],"adresses":[{"adresse":"Assembl\u00e9e nationale, 126 Rue de l'Universit\u00e9, 75355 Paris 07 SP"},{"adresse":"Place Marceau 29 Rue de la pie 28000 Chartres"}],"collaborateurs":[{"collaborateur":"M. GAEL Garreau"},{"collaborateur":"Mme Barbara Gombert"}],"anciens_mandats":[{"mandat":"21\/06\/2017 \/  \/ "}],"autres_mandats":[],"anciens_autres_mandats":[],"profession":"Cadre sup\u00e9rieur (secteur priv\u00e9)","place_en_hemicycle":"458","url_an":"http:\/\/www2.assemblee-nationale.fr\/deputes\/fiche\/OMC_PA719372","id_an":"719372","slug":"guillaume-kasbarian","url_nosdeputes":"https:\/\/www.nosdeputes.fr\/guillaume-kasbarian","url_nosdeputes_api":"https:\/\/www.nosdeputes.fr\/guillaume-kasbarian\/json","nb_mandats":1,"twitter":"guillaumekasba"}},{"depute":{"id":6,"nom":"Cyrille Isaac-Sibille","nom_de_famille":"Isaac-Sibille","prenom":"Cyrille","sexe":"H","date_naissance":"1958-04-30","lieu_naissance":"Lyon 6 (Rh\u00f4ne)","num_deptmt":"69","nom_circo":"Rh\u00f4ne","num_circo":12,"mandat_debut":"2017-06-21","groupe_sigle":"MODEM","parti_ratt_financier":"Mouvement D\u00e9mocrate","sites_web":[{"site":"https:\/\/twitter.com\/Cisaacsibille"},{"site":"http:\/\/legislative.isaac-sibille.fr"}],"emails":[{"email":"cyrille.isaac-sibille@assemblee-nationale.fr"}],"adresses":[{"adresse":"Assembl\u00e9e nationale, 126 Rue de l'Universit\u00e9, 75355 Paris 07 SP"}],"collaborateurs":[{"collaborateur":"Mme Carine Frappa"},{"collaborateur":"M. Mehdi Fanayar"},{"collaborateur":"Mme Jacqueline Lebrun"},{"collaborateur":"Mme Gwenaelle Tschudin"}],"anciens_mandats":[{"mandat":"21\/06\/2017 \/  \/ "}],"autres_mandats":[{"mandat":"Sainte-Foy-l\u00e8s-Lyon \/ Conseil municipal \/ membre"}],"anciens_autres_mandats":[],"profession":"M\u00e9decin","place_en_hemicycle":"184","url_an":"http:\/\/www2.assemblee-nationale.fr\/deputes\/fiche\/OMC_PA722374","id_an":"722374","slug":"cyrille-isaac-sibille","url_nosdeputes":"https:\/\/www.nosdeputes.fr\/cyrille-isaac-sibille","url_nosdeputes_api":"https:\/\/www.nosdeputes.fr\/cyrille-isaac-sibille\/json","nb_mandats":1,"twitter":"Cisaacsibille"}},{"depute":{"id":7,"nom":"Guillaume Vuilletet","nom_de_famille":"Vuilletet","prenom":"Guillaume","sexe":"H","date_naissance":"1967-06-20","lieu_naissance":"Beauvais (Oise)","num_deptmt":"95","nom_circo":"Val-d'Oise","num_circo":2,"mandat_debut":"2017-06-21","groupe_sigle":"LREM","parti_ratt_financier":"En Marche !","sites_web":[{"site":"https:\/\/twitter.com\/g_vuilletet"},{"site":"https:\/\/fr-fr.facebook.com\/guillaume.vuilletet\/"}],"emails":[{"email":"guillaume.vuilletet@assemblee-nationale.fr"}],"adresses":[{"adresse":"Assembl\u00e9e nationale, 126 Rue de l'Universit\u00e9, 75355 Paris 07 SP"}],"collaborateurs":[{"collaborateur":"Mme Isabelle Mercier"},{"collaborateur":"M. Arthur Nowicki"},{"collaborateur":"M. Franck Besson"}],"anciens_mandats":[{"mandat":"21\/06\/2017 \/  \/ "}],"autres_mandats":[],"anciens_autres_mandats":[],"profession":"Cadre sup\u00e9rieur (secteur priv\u00e9)","place_en_hemicycle":"373","url_an":"http:\/\/www2.assemblee-nationale.fr\/deputes\/fiche\/OMC_PA721262","id_an":"721262","slug":"guillaume-vuilletet","url_nosdeputes":"https:\/\/www.nosdeputes.fr\/guillaume-vuilletet","url_nosdeputes_api":"https:\/\/www.nosdeputes.fr\/guillaume-vuilletet\/json","nb_mandats":1,"twitter":"g_vuilletet"}},{"depute":{"id":8,"nom":"Olivier Faure","nom_de_famille":"Faure","prenom":"Olivier","sexe":"H","date_naissance":"1968-08-18","lieu_naissance":"La Tronche (Is\u00e8re)","num_deptmt":"77","nom_circo":"Seine-et-Marne","num_circo":11,"mandat_debut":"2017-06-21","groupe_sigle":"NG","parti_ratt_financier":"Parti Socialiste","sites_web":[{"site":"https:\/\/fr-fr.facebook.com\/olivierfaure77\/"},{"site":"http:\/\/www.olivierfaure.fr"},{"site":"https:\/\/twitter.com\/faureolivier"}],"emails":[{"email":"olivierfaure.depute77.11e@gmail.com"},{"email":"ofaure@assemblee-nationale.fr"}],"adresses":[{"adresse":"Place du Souvenir 77550 Moissy-Cramayel"},{"adresse":"Assembl\u00e9e nationale 126 Rue de l'Universit\u00e9 75355 Paris 07 SP"}],"collaborateurs":[{"collaborateur":"Mme Stephanie Le Meur"},{"collaborateur":"Mme Amandine Janiaud-Vergnaud"}],"anciens_mandats":[{"mandat":"21\/06\/2017 \/  \/ "},{"mandat":"20\/06\/2012 \/ 20\/06\/2017 \/ fin de l\u00e9gislature"}],"autres_mandats":[],"anciens_autres_mandats":[],"profession":"Cadre sup\u00e9rieur (secteur priv\u00e9)","place_en_hemicycle":"499","url_an":"http:\/\/www2.assemblee-nationale.fr\/deputes\/fiche\/OMC_PA609332","id_an":"609332","slug":"olivier-faure","url_nosdeputes":"https:\/\/www.nosdeputes.fr\/olivier-faure","url_nosdeputes_api":"https:\/\/www.nosdeputes.fr\/olivier-faure\/json","nb_mandats":1,"twitter":"faureolivier"}},{"depute":{"id":9,"nom":"Pierre-Alain Raphan","nom_de_famille":"Raphan","prenom":"Pierre-Alain","sexe":"H","date_naissance":"1983-04-06","lieu_naissance":"Choisy-le-Roi (Val-de-Marne)","num_deptmt":"91","nom_circo":"Essonne","num_circo":10,"mandat_debut":"2017-06-21","groupe_sigle":"LREM","parti_ratt_financier":"En Marche !","sites_web":[{"site":"http:\/\/www.raphan2017.fr"},{"site":"https:\/\/twitter.com\/p_a_raphan"}],"emails":[{"email":"pierre-alain.raphan@assemblee-nationale.fr"}],"adresses":[{"adresse":"Assembl\u00e9e nationale, 126 Rue de l'Universit\u00e9, 75355 Paris 07 SP"}],"collaborateurs":[{"collaborateur":"M. Bruno Lac\u00f4te"},{"collaborateur":"M. Yassin Lamaoui"},{"collaborateur":"M. Oualid Arar"},{"collaborateur":"M. Fran\u00e7ois Vial"}],"anciens_mandats":[{"mandat":"21\/06\/2017 \/  \/ "}],"autres_mandats":[],"anciens_autres_mandats":[],"profession":"Directeur d'un cabinet de conseil","place_en_hemicycle":"269","url_an":"http:\/\/www2.assemblee-nationale.fr\/deputes\/fiche\/OMC_PA721888","id_an":"721888","slug":"pierre-alain-raphan","url_nosdeputes":"https:\/\/www.nosdeputes.fr\/pierre-alain-raphan","url_nosdeputes_api":"https:\/\/www.nosdeputes.fr\/pierre-alain-raphan\/json","nb_mandats":1,"twitter":"p_a_raphan"}},{"depute":{"id":10,"nom":"Isabelle Muller-Quoy","nom_de_famille":"Muller-Quoy","prenom":"Isabelle","sexe":"F","date_naissance":"1967-11-08","lieu_naissance":"Agen (Lot-et-Garonne)","num_deptmt":"95","nom_circo":"Val-d'Oise","num_circo":1,"mandat_debut":"2017-06-21","groupe_sigle":"LREM","parti_ratt_financier":"En Marche !","sites_web":[{"site":"https:\/\/fr-fr.facebook.com\/imullerquoy\/"},{"site":"https:\/\/twitter.com\/imullerquoy"}],"emails":[{"email":"isabelle.muller-quoy@assemblee-nationale.fr"},{"email":"isabelle.muller-quoy@wanadoo.fr"}],"adresses":[{"adresse":"Assembl\u00e9e nationale, 126 Rue de l'Universit\u00e9, 75355 Paris 07 SP"}],"collaborateurs":[{"collaborateur":"Mme Nathalie Juliat"}],"anciens_mandats":[{"mandat":"21\/06\/2017 \/  \/ "}],"autres_mandats":[{"mandat":"Champagne-sur-Oise (Val-d'Oise) \/ Conseil municipal \/ adjointe au maire"}],"anciens_autres_mandats":[],"profession":"Maitre de conf\u00e9rences en droit","place_en_hemicycle":"381","url_an":"http:\/\/www2.assemblee-nationale.fr\/deputes\/fiche\/OMC_PA721254","id_an":"721254","slug":"isabelle-muller-quoy","url_nosdeputes":"https:\/\/www.nosdeputes.fr\/isabelle-muller-quoy","url_nosdeputes_api":"https:\/\/www.nosdeputes.fr\/isabelle-muller-quoy\/json","nb_mandats":1,"twitter":"imullerquoy"}}];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeputesPage');
  }

  openDepute(depute){
    console.log("vate faire enculer martin");
    this.navCtrl.push('DeputePage', {
      depute: depute
    });
  }

}
