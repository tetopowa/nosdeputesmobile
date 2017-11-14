import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {

  deputes_hatvp: any = [
    {
      "prenom": "Adrien",
      "nom": "MORENAS",
      "type_mandat": "depute",
      "open_data": "morenas-adrien-dia4165-depute-84.xml"
    },
    {
      "prenom": "Adrien",
      "nom": "QUATENNENS",
      "type_mandat": "depute",
      "open_data": "quatennens-adrien-dia4011-depute-59.xml"
    },
    {
      "prenom": "Adrien",
      "nom": "TAQUET",
      "type_mandat": "depute",
      "open_data": "taquet-adrien-dia4072-depute-92.xml"
    },
    {
      "prenom": "Agnès",
      "nom": "FIRMIN LE BODO",
      "type_mandat": "depute",
      "open_data": "firmin-le-bodo-agnes-dia3765-depute-76.xml"
    },
    {
      "prenom": "Agnès",
      "nom": "THILL",
      "type_mandat": "depute",
      "open_data": "thill-agnes-dia4078-depute-60.xml"
    },
    {
      "prenom": "Aina",
      "nom": "KURIC",
      "type_mandat": "depute",
      "open_data": "kuric-aina-dia3852-depute-51.xml"
    },
    {
      "prenom": "Alain",
      "nom": "BRUNEEL",
      "type_mandat": "depute",
      "open_data": "bruneel-alain-dia3605-depute-59.xml"
    },
    {
      "prenom": "Alain",
      "nom": "DAVID",
      "type_mandat": "depute",
      "open_data": "david-alain-dia3699-depute-33.xml"
    },
    {
      "prenom": "Alain",
      "nom": "PEREA",
      "type_mandat": "depute",
      "open_data": "perea-alain-dia3980-depute-11.xml"
    },
    {
      "prenom": "Alain",
      "nom": "RAMADIER",
      "type_mandat": "depute",
      "open_data": "ramadier-alain-dia4016-depute-93.xml"
    },
    {
      "prenom": "Alain",
      "nom": "TOURRET",
      "type_mandat": "depute",
      "open_data": "tourret-alain-dia4084-depute-14.xml"
    },
    {
      "prenom": "Albane",
      "nom": "GAILLOT",
      "type_mandat": "depute",
      "open_data": "gaillot-albane-dia3775-depute-94.xml"
    },
    {
      "prenom": "Alexandra",
      "nom": "LOUIS",
      "type_mandat": "depute",
      "open_data": "louis-alexandra-dia3899-depute-13.xml"
    },
    {
      "prenom": "Alexandra",
      "nom": "VALETTA ARDISSON",
      "type_mandat": "depute",
      "open_data": "valetta-ardisson-alexandra-diam4446-depute-06.xml"
    },
    {
      "prenom": "Alexandre",
      "nom": "FRESCHI",
      "type_mandat": "depute",
      "open_data": "freschi-alexandre-dia4268-depute-47.xml"
    },
    {
      "prenom": "Alexandre",
      "nom": "HOLROYD",
      "type_mandat": "depute",
      "open_data": "holroyd-alexandre-dia3818-depute-099.xml"
    },
    {
      "prenom": "Alexis",
      "nom": "CORBIÈRE",
      "type_mandat": "depute",
      "open_data": "corbiere-alexis-dia3687-depute-93.xml"
    },
    {
      "prenom": "Alice",
      "nom": "THOUROT",
      "type_mandat": "depute",
      "open_data": "thourot-alice-dia4081-depute-26.xml"
    },
    {
      "prenom": "Amal-Amélia",
      "nom": "LAKRAFI",
      "type_mandat": "depute",
      "open_data": "lakrafi-amal-amelia-dia3863-depute-099.xml"
    },
    {
      "prenom": "Amélie",
      "nom": "DE MONTCHALIN",
      "type_mandat": "depute",
      "open_data": "de-montchalin-amelie-dia3709-depute-91.xml"
    },
    {
      "prenom": "André",
      "nom": "CHASSAIGNE",
      "type_mandat": "depute",
      "open_data": "chassaigne-andre-dia3667-depute-63.xml"
    },
    {
      "prenom": "André",
      "nom": "VILLIERS",
      "type_mandat": "depute",
      "open_data": "villiers-andre-dia4113-depute-89.xml"
    },
    {
      "prenom": "Anissa",
      "nom": "KHEDHER",
      "type_mandat": "depute",
      "open_data": "khedher-anissa-diam4282-depute-69.xml"
    },
    {
      "prenom": "Annaïg",
      "nom": "LE MEUR",
      "type_mandat": "depute",
      "open_data": "le-meur-annaig-dia3888-depute-29.xml"
    },
    {
      "prenom": "Anne",
      "nom": "BLANC",
      "type_mandat": "depute",
      "open_data": "blanc-anne-dia3432-depute-12.xml"
    },
    {
      "prenom": "Anne",
      "nom": "BRUGNERA",
      "type_mandat": "depute",
      "open_data": "brugnera-anne-dia3602-depute-69.xml"
    },
    {
      "prenom": "Anne-Christine",
      "nom": "LANG",
      "type_mandat": "depute",
      "open_data": "lang-anne-christine-dia3864-depute-75.xml"
    },
    {
      "prenom": "Anne-France",
      "nom": "BRUNET",
      "type_mandat": "depute",
      "open_data": "brunet-anne-france-dia3606-depute-44.xml"
    },
    {
      "prenom": "Anne",
      "nom": "GENETET",
      "type_mandat": "depute",
      "open_data": "genetet-anne-dia3782-depute-099.xml"
    },
    {
      "prenom": "Anne-Laure",
      "nom": "CATTELOT",
      "type_mandat": "depute",
      "open_data": "cattelot-anne-laure-dia3659-depute-59.xml"
    },
    {
      "prenom": "Anne-Laurence",
      "nom": "PETEL",
      "type_mandat": "depute",
      "open_data": "petel-anne-laurence-dia3984-depute-13.xml"
    },
    {
      "prenom": "Annie",
      "nom": "CHAPELIER",
      "type_mandat": "depute",
      "open_data": "chapelier-annie-dia3663-depute-30.xml"
    },
    {
      "prenom": "Annie",
      "nom": "GENEVARD",
      "type_mandat": "depute",
      "open_data": "genevard-annie-dia3783-depute-25.xml"
    },
    {
      "prenom": "Annie",
      "nom": "VIDAL",
      "type_mandat": "depute",
      "open_data": "vidal-annie-dia4107-depute-76.xml"
    },
    {
      "prenom": "Anthony",
      "nom": "CELLIER",
      "type_mandat": "depute",
      "open_data": "cellier-anthony-dia3660-depute-30.xml"
    },
    {
      "prenom": "Antoine",
      "nom": "HERTH",
      "type_mandat": "depute",
      "open_data": "herth-antoine-dia3819-depute-67.xml"
    },
    {
      "prenom": "Arnaud",
      "nom": "VIALA",
      "type_mandat": "depute",
      "open_data": "viala-arnaud-dia4104-depute-12.xml"
    },
    {
      "prenom": "Aude",
      "nom": "AMADOU",
      "type_mandat": "depute",
      "open_data": "amadou-aude-dia3275-depute-44.xml"
    },
    {
      "prenom": "Aude",
      "nom": "BONO-VANDORME",
      "type_mandat": "depute",
      "open_data": "bono-vandorme-aude-dia3454-depute-02.xml"
    },
    {
      "prenom": "Aude",
      "nom": "LUQUET",
      "type_mandat": "depute",
      "open_data": "luquet-aude-diam4270-depute-77.xml"
    },
    {
      "prenom": "Audrey",
      "nom": "DUFEU SCHUBERT",
      "type_mandat": "depute",
      "open_data": "dufeu-schubert-audrey-dia3732-depute-44.xml"
    },
    {
      "prenom": "Aurélien",
      "nom": "PRADIÉ",
      "type_mandat": "depute",
      "open_data": "pradie-aurelien-diam4443-depute-46.xml"
    },
    {
      "prenom": "Aurélien",
      "nom": "TACHÉ",
      "type_mandat": "depute",
      "open_data": "tache-aurelien-diam4445-depute-95.xml"
    },
    {
      "prenom": "Aurore",
      "nom": "BERGÉ",
      "type_mandat": "depute",
      "open_data": "berge-aurore-diam4193-depute-78.xml"
    },
    {
      "prenom": "Barbara",
      "nom": "BESSOT BALLOT",
      "type_mandat": "depute",
      "open_data": "bessot-ballot-barbara-dia4131-depute-70.xml"
    },
    {
      "prenom": "Barbara",
      "nom": "POMPILI",
      "type_mandat": "depute",
      "open_data": "pompili-barbara-dia4001-depute-80.xml"
    },
    {
      "prenom": "Bastien",
      "nom": "LACHAUD",
      "type_mandat": "depute",
      "open_data": "lachaud-bastien-dia3857-depute-93.xml"
    },
    {
      "prenom": "Béatrice",
      "nom": "DESCAMPS",
      "type_mandat": "depute",
      "open_data": "descamps-beatrice-dia4267-depute-59.xml"
    },
    {
      "prenom": "Béatrice",
      "nom": "PIRON",
      "type_mandat": "depute",
      "open_data": "piron-beatrice-dia3997-depute-78.xml"
    },
    {
      "prenom": "Belkhir",
      "nom": "BELHADDAD",
      "type_mandat": "depute",
      "open_data": "belhaddad-belkhir-dia3319-depute-57.xml"
    },
    {
      "prenom": "Bénédicte",
      "nom": "PEYROL",
      "type_mandat": "depute",
      "open_data": "peyrol-benedicte-dia3990-depute-03.xml"
    },
    {
      "prenom": "Bénédicte",
      "nom": "TAURINE",
      "type_mandat": "depute",
      "open_data": "taurine-benedicte-dia4272-depute-09.xml"
    },
    {
      "prenom": "Benjamin",
      "nom": "DIRX",
      "type_mandat": "depute",
      "open_data": "dirx-benjamin-dia3723-depute-71.xml"
    },
    {
      "prenom": "Benoit",
      "nom": "POTTERIE",
      "type_mandat": "depute",
      "open_data": "potterie-benoit-diam4287-depute-62.xml"
    },
    {
      "prenom": "Benoit",
      "nom": "SIMIAN",
      "type_mandat": "depute",
      "open_data": "simian-benoit-dia4060-depute-33.xml"
    },
    {
      "prenom": "Bérangère",
      "nom": "ABBA",
      "type_mandat": "depute",
      "open_data": "abba-berangere-dia3268-depute-52.xml"
    },
    {
      "prenom": "Bérangère",
      "nom": "COUILLARD",
      "type_mandat": "depute",
      "open_data": "couillard-berangere-dia3690-depute-33.xml"
    },
    {
      "prenom": "Bérengère",
      "nom": "POLETTI",
      "type_mandat": "depute",
      "open_data": "poletti-berengere-dia4000-depute-08.xml"
    },
    {
      "prenom": "Bernard",
      "nom": "BROCHAND",
      "type_mandat": "depute",
      "open_data": "brochand-bernard-dia3599-depute-06.xml"
    },
    {
      "prenom": "Bernard",
      "nom": "DEFLESSELLES",
      "type_mandat": "depute",
      "open_data": "deflesselles-bernard-dia3700-depute-13.xml"
    },
    {
      "prenom": "Bernard",
      "nom": "PERRUT",
      "type_mandat": "depute",
      "open_data": "perrut-bernard-dia3983-depute-69.xml"
    },
    {
      "prenom": "Bernard",
      "nom": "REYNÈS",
      "type_mandat": "depute",
      "open_data": "reynes-bernard-dia4171-depute-13.xml"
    },
    {
      "prenom": "Bertrand",
      "nom": "BOUYX",
      "type_mandat": "depute",
      "open_data": "bouyx-bertrand-dia3560-depute-14.xml"
    },
    {
      "prenom": "Bertrand",
      "nom": "PANCHER",
      "type_mandat": "depute",
      "open_data": "pancher-bertrand-dia3971-depute-55.xml"
    },
    {
      "prenom": "Bertrand",
      "nom": "SORRE",
      "type_mandat": "depute",
      "open_data": "sorre-bertrand-dia4063-depute-50.xml"
    },
    {
      "prenom": "Blandine",
      "nom": "BROCARD",
      "type_mandat": "depute",
      "open_data": "brocard-blandine-diam4347-depute-69.xml"
    },
    {
      "prenom": "Boris",
      "nom": "VALLAUD",
      "type_mandat": "depute",
      "open_data": "vallaud-boris-dia4095-depute-40.xml"
    },
    {
      "prenom": "Brahim",
      "nom": "HAMMOUCHE",
      "type_mandat": "depute",
      "open_data": "hammouche-brahim-dia3813-depute-57.xml"
    },
    {
      "prenom": "Brigitte",
      "nom": "BOURGUIGNON",
      "type_mandat": "depute",
      "open_data": "bourguignon-brigitte-dia4166-depute-62.xml"
    },
    {
      "prenom": "Brigitte",
      "nom": "KUSTER",
      "type_mandat": "depute",
      "open_data": "kuster-brigitte-dia3854-depute-75.xml"
    },
    {
      "prenom": "Brigitte",
      "nom": "LISO",
      "type_mandat": "depute",
      "open_data": "liso-brigitte-diam4278-depute-59.xml"
    },
    {
      "prenom": "Bruno Nestor",
      "nom": "AZEROT",
      "type_mandat": "depute",
      "open_data": "azerot-bruno-nestor-dia3291-depute-972.xml"
    },
    {
      "prenom": "Bruno",
      "nom": "BILDE",
      "type_mandat": "depute",
      "open_data": "bilde-bruno-dia3430-depute-62.xml"
    },
    {
      "prenom": "Bruno",
      "nom": "BONNELL",
      "type_mandat": "depute",
      "open_data": "bonnell-bruno-dia3558-depute-69.xml"
    },
    {
      "prenom": "Bruno",
      "nom": "DUVERGÉ",
      "type_mandat": "depute",
      "open_data": "duverge-bruno-dia3744-depute-62.xml"
    },
    {
      "prenom": "Bruno",
      "nom": "FUCHS",
      "type_mandat": "depute",
      "open_data": "fuchs-bruno-dia3770-depute-68.xml"
    },
    {
      "prenom": "Bruno",
      "nom": "JONCOUR",
      "type_mandat": "depute",
      "open_data": "joncour-bruno-dia3835-depute-22.xml"
    },
    {
      "prenom": "Bruno",
      "nom": "MILLIENNE",
      "type_mandat": "depute",
      "open_data": "millienne-bruno-dia3940-depute-78.xml"
    },
    {
      "prenom": "Bruno",
      "nom": "QUESTEL",
      "type_mandat": "depute",
      "open_data": "questel-bruno-dia4014-depute-27.xml"
    },
    {
      "prenom": "Bruno",
      "nom": "STUDER",
      "type_mandat": "depute",
      "open_data": "studer-bruno-dia4065-depute-67.xml"
    },
    {
      "prenom": "Buon",
      "nom": "TAN",
      "type_mandat": "depute",
      "open_data": "tan-buon-dia4070-depute-75.xml"
    },
    {
      "prenom": "Carole",
      "nom": "BUREAU-BONNARD",
      "type_mandat": "depute",
      "open_data": "bureau-bonnard-carole-dia4190-depute-60.xml"
    },
    {
      "prenom": "Carole",
      "nom": "GRANDJEAN",
      "type_mandat": "depute",
      "open_data": "grandjean-carole-dia3799-depute-54.xml"
    },
    {
      "prenom": "Caroline",
      "nom": "ABADIE",
      "type_mandat": "depute",
      "open_data": "abadie-caroline-dia3267-depute-38.xml"
    },
    {
      "prenom": "Caroline",
      "nom": "FIAT",
      "type_mandat": "depute",
      "open_data": "fiat-caroline-dia4132-depute-54.xml"
    },
    {
      "prenom": "Caroline",
      "nom": "JANVIER",
      "type_mandat": "depute",
      "open_data": "janvier-caroline-dia3831-depute-45.xml"
    },
    {
      "prenom": "Catherine",
      "nom": "FABRE",
      "type_mandat": "depute",
      "open_data": "fabre-catherine-dia3748-depute-33.xml"
    },
    {
      "prenom": "Catherine",
      "nom": "KAMOWSKI",
      "type_mandat": "depute",
      "open_data": "kamowski-catherine-dia3841-depute-38.xml"
    },
    {
      "prenom": "Catherine",
      "nom": "OSSON",
      "type_mandat": "depute",
      "open_data": "osson-catherine-dia3966-depute-59.xml"
    },
    {
      "prenom": "Cathy",
      "nom": "RACON-BOUZON",
      "type_mandat": "depute",
      "open_data": "racon-bouzon-cathy-dia4015-depute-13.xml"
    },
    {
      "prenom": "Cécile",
      "nom": "MUSCHOTTI",
      "type_mandat": "depute",
      "open_data": "muschotti-cecile-dia4162-depute-83.xml"
    },
    {
      "prenom": "Cécile",
      "nom": "RILHAC",
      "type_mandat": "depute",
      "open_data": "rilhac-cecile-diam4371-depute-95.xml"
    },
    {
      "prenom": "Cécile",
      "nom": "UNTERMAIER",
      "type_mandat": "depute",
      "open_data": "untermaier-cecile-dia4091-depute-71.xml"
    },
    {
      "prenom": "Cédric",
      "nom": "ROUSSEL",
      "type_mandat": "depute",
      "open_data": "roussel-cedric-dia4043-depute-06.xml"
    },
    {
      "prenom": "Cédric",
      "nom": "VILLANI",
      "type_mandat": "depute",
      "open_data": "villani-cedric-dia4112-depute-91.xml"
    },
    {
      "prenom": "Célia",
      "nom": "DE LAVERGNE",
      "type_mandat": "depute",
      "open_data": "de-lavergne-celia-dia3706-depute-26.xml"
    },
    {
      "prenom": "Céline",
      "nom": "CALVEZ",
      "type_mandat": "depute",
      "open_data": "calvez-celine-dia3610-depute-92.xml"
    },
    {
      "prenom": "Cendra",
      "nom": "MOTIN",
      "type_mandat": "depute",
      "open_data": "motin-cendra-dia3946-depute-38.xml"
    },
    {
      "prenom": "Charles",
      "nom": "DE COURSON",
      "type_mandat": "depute",
      "open_data": "de-courson-charles-dia3696-depute-51.xml"
    },
    {
      "prenom": "Charles",
      "nom": "DE LA VERPILLIÈRE",
      "type_mandat": "depute",
      "open_data": "de-la-verpilliere-charles-dia3705-depute-01.xml"
    },
    {
      "prenom": "Charlotte",
      "nom": "LECOCQ",
      "type_mandat": "depute",
      "open_data": "lecocq-charlotte-dia3878-depute-59.xml"
    },
    {
      "prenom": "Christelle",
      "nom": "DUBOS",
      "type_mandat": "depute",
      "open_data": "dubos-christelle-diam4341-depute-33.xml"
    },
    {
      "prenom": "Christian",
      "nom": "HUTIN",
      "type_mandat": "depute",
      "open_data": "hutin-christian-dia3825-depute-59.xml"
    },
    {
      "prenom": "Christian",
      "nom": "JACOB",
      "type_mandat": "depute",
      "open_data": "jacob-christian-dia3829-depute-77.xml"
    },
    {
      "prenom": "Christine",
      "nom": "CLOAREC",
      "type_mandat": "depute",
      "open_data": "cloarec-christine-dia3681-depute-35.xml"
    },
    {
      "prenom": "Christine",
      "nom": "HENNION",
      "type_mandat": "depute",
      "open_data": "hennion-christine-dia3812-depute-92.xml"
    },
    {
      "prenom": "Christine",
      "nom": "PIRES BEAUNE",
      "type_mandat": "depute",
      "open_data": "pires-beaune-christine-dia3995-depute-63.xml"
    },
    {
      "prenom": "Christophe",
      "nom": "AREND",
      "type_mandat": "depute",
      "open_data": "arend-christophe-dia3283-depute-57.xml"
    },
    {
      "prenom": "Christophe",
      "nom": "BLANCHET",
      "type_mandat": "depute",
      "open_data": "blanchet-christophe-dia3433-depute-14.xml"
    },
    {
      "prenom": "Christophe",
      "nom": "BOUILLON",
      "type_mandat": "depute",
      "open_data": "bouillon-christophe-dia3460-depute-76.xml"
    },
    {
      "prenom": "Christophe",
      "nom": "DI POMPEO",
      "type_mandat": "depute",
      "open_data": "di-pompeo-christophe-dia3719-depute-59.xml"
    },
    {
      "prenom": "Christophe",
      "nom": "EUZET",
      "type_mandat": "depute",
      "open_data": "euzet-christophe-dia3750-depute-34.xml"
    },
    {
      "prenom": "Christophe",
      "nom": "JERRETIE",
      "type_mandat": "depute",
      "open_data": "jerretie-christophe-diam4451-depute-19.xml"
    },
    {
      "prenom": "Christophe",
      "nom": "LEJEUNE",
      "type_mandat": "depute",
      "open_data": "lejeune-christophe-dia3887-depute-70.xml"
    },
    {
      "prenom": "Christophe",
      "nom": "NAEGELEN",
      "type_mandat": "depute",
      "open_data": "naegelen-christophe-dia3951-depute-88.xml"
    },
    {
      "prenom": "Claire",
      "nom": "GUION-FIRMIN",
      "type_mandat": "depute",
      "open_data": "guion-firmin-claire-dia3807-depute-977.xml"
    },
    {
      "prenom": "Claire",
      "nom": "O'PETIT",
      "type_mandat": "depute",
      "open_data": "o-petit-claire-dia3964-depute-27.xml"
    },
    {
      "prenom": "Claire",
      "nom": "PITOLLAT",
      "type_mandat": "depute",
      "open_data": "pitollat-claire-dia3998-depute-13.xml"
    },
    {
      "prenom": "Claude",
      "nom": "DE GANAY",
      "type_mandat": "depute",
      "open_data": "de-ganay-claude-dia3701-depute-45.xml"
    },
    {
      "prenom": "Claude",
      "nom": "GOASGUEN",
      "type_mandat": "depute",
      "open_data": "goasguen-claude-dia3793-depute-75.xml"
    },
    {
      "prenom": "Clémentine",
      "nom": "AUTAIN",
      "type_mandat": "depute",
      "open_data": "autain-clementine-dia3288-depute-93.xml"
    },
    {
      "prenom": "Constance",
      "nom": "LE GRIP",
      "type_mandat": "depute",
      "open_data": "le-grip-constance-dia3883-depute-92.xml"
    },
    {
      "prenom": "Coralie",
      "nom": "DUBOST",
      "type_mandat": "depute",
      "open_data": "dubost-coralie-dia4192-depute-34.xml"
    },
    {
      "prenom": "Corinne",
      "nom": "VIGNON",
      "type_mandat": "depute",
      "open_data": "vignon-corinne-dia4111-depute-31.xml"
    },
    {
      "prenom": "Cyrille",
      "nom": "ISAAC-SIBILLE",
      "type_mandat": "depute",
      "open_data": "isaac-sibille-cyrille-dia3827-depute-69.xml"
    },
    {
      "prenom": "Damien",
      "nom": "ABAD",
      "type_mandat": "depute",
      "open_data": "abad-damien-diam3657-depute-01.xml"
    },
    {
      "prenom": "Damien",
      "nom": "ADAM",
      "type_mandat": "depute",
      "open_data": "adam-damien-dia3271-depute-76.xml"
    },
    {
      "prenom": "Damien",
      "nom": "PICHEREAU",
      "type_mandat": "depute",
      "open_data": "pichereau-damien-dia3993-depute-72.xml"
    },
    {
      "prenom": "Danièle",
      "nom": "CAZARIAN",
      "type_mandat": "depute",
      "open_data": "cazarian-daniele-dia3615-depute-69.xml"
    },
    {
      "prenom": "Danièle",
      "nom": "HÉRIN",
      "type_mandat": "depute",
      "open_data": "herin-daniele-diam4440-depute-11.xml"
    },
    {
      "prenom": "Danièle",
      "nom": "OBONO",
      "type_mandat": "depute",
      "open_data": "obono-daniele-dia3963-depute-75.xml"
    },
    {
      "prenom": "Daniel",
      "nom": "FASQUELLE",
      "type_mandat": "depute",
      "open_data": "fasquelle-daniel-dia3755-depute-62.xml"
    },
    {
      "prenom": "Daniel",
      "nom": "LABARONNE",
      "type_mandat": "depute",
      "open_data": "labaronne-daniel-dia3856-depute-37.xml"
    },
    {
      "prenom": "Danielle",
      "nom": "BRULEBOIS",
      "type_mandat": "depute",
      "open_data": "brulebois-danielle-dia3603-depute-39.xml"
    },
    {
      "prenom": "David",
      "nom": "HABIB",
      "type_mandat": "depute",
      "open_data": "habib-david-dia3806-depute-64.xml"
    },
    {
      "prenom": "David",
      "nom": "LORION",
      "type_mandat": "depute",
      "open_data": "lorion-david-dia3898-depute-974.xml"
    },
    {
      "prenom": "Delphine",
      "nom": "BAGARRY",
      "type_mandat": "depute",
      "open_data": "bagarry-delphine-dia3370-depute-04.xml"
    },
    {
      "prenom": "Delphine",
      "nom": "BATHO",
      "type_mandat": "depute",
      "open_data": "batho-delphine-dia3440-depute-79.xml"
    },
    {
      "prenom": "Delphine",
      "nom": "O",
      "type_mandat": "depute",
      "open_data": "o-delphine-dia3961-depute-75.xml"
    },
    {
      "prenom": "Denis",
      "nom": "MASSÉGLIA",
      "type_mandat": "depute",
      "open_data": "masseglia-denis-dia3918-depute-49.xml"
    },
    {
      "prenom": "Denis",
      "nom": "SOMMER",
      "type_mandat": "depute",
      "open_data": "sommer-denis-dia4061-depute-25.xml"
    },
    {
      "prenom": "Didier",
      "nom": "BAICHÈRE",
      "type_mandat": "depute",
      "open_data": "baichere-didier-dia3295-depute-78.xml"
    },
    {
      "prenom": "Didier",
      "nom": "LE GAC",
      "type_mandat": "depute",
      "open_data": "le-gac-didier-dia3884-depute-29.xml"
    },
    {
      "prenom": "Didier",
      "nom": "MARTIN",
      "type_mandat": "depute",
      "open_data": "martin-didier-dia3917-depute-21.xml"
    },
    {
      "prenom": "Didier",
      "nom": "PARIS",
      "type_mandat": "depute",
      "open_data": "paris-didier-dia3976-depute-21.xml"
    },
    {
      "prenom": "Didier",
      "nom": "QUENTIN",
      "type_mandat": "depute",
      "open_data": "quentin-didier-dia4013-depute-17.xml"
    },
    {
      "prenom": "Dimitri",
      "nom": "HOUBRON",
      "type_mandat": "depute",
      "open_data": "houbron-dimitri-dia3821-depute-59.xml"
    },
    {
      "prenom": "Dino",
      "nom": "CINIERI",
      "type_mandat": "depute",
      "open_data": "cinieri-dino-dia3676-depute-42.xml"
    },
    {
      "prenom": "Dominique",
      "nom": "DA SILVA",
      "type_mandat": "depute",
      "open_data": "da-silva-dominique-dia3695-depute-95.xml"
    },
    {
      "prenom": "Dominique",
      "nom": "DAVID",
      "type_mandat": "depute",
      "open_data": "david-dominique-dia3698-depute-33.xml"
    },
    {
      "prenom": "Dominique",
      "nom": "POTIER",
      "type_mandat": "depute",
      "open_data": "potier-dominique-dia4002-depute-54.xml"
    },
    {
      "prenom": "Élisabeth",
      "nom": "TOUTUT-PICARD",
      "type_mandat": "depute",
      "open_data": "toutut-picard-elisabeth-diam4447-depute-31.xml"
    },
    {
      "prenom": "Élise",
      "nom": "FAJGELES",
      "type_mandat": "depute",
      "open_data": "fajgeles-elise-dia3751-depute-75.xml"
    },
    {
      "prenom": "Élodie",
      "nom": "JACQUIER-LAFORGE",
      "type_mandat": "depute",
      "open_data": "jacquier-laforge-elodie-diam4369-depute-38.xml"
    },
    {
      "prenom": "Elsa",
      "nom": "FAUCILLON",
      "type_mandat": "depute",
      "open_data": "faucillon-elsa-dia3754-depute-92.xml"
    },
    {
      "prenom": "Émilie",
      "nom": "BONNIVARD",
      "type_mandat": "depute",
      "open_data": "bonnivard-emilie-dia3453-depute-73.xml"
    },
    {
      "prenom": "Émilie",
      "nom": "CARIOU",
      "type_mandat": "depute",
      "open_data": "cariou-emilie-diam4437-depute-55.xml"
    },
    {
      "prenom": "Émilie",
      "nom": "CHALAS",
      "type_mandat": "depute",
      "open_data": "chalas-emilie-dia3662-depute-38.xml"
    },
    {
      "prenom": "Émilie",
      "nom": "GUEREL",
      "type_mandat": "depute",
      "open_data": "guerel-emilie-dia3805-depute-83.xml"
    },
    {
      "prenom": "Emmanuelle",
      "nom": "ANTHOINE",
      "type_mandat": "depute",
      "open_data": "anthoine-emmanuelle-dia3281-depute-26.xml"
    },
    {
      "prenom": "Emmanuelle",
      "nom": "FONTAINE-DOMEIZEL",
      "type_mandat": "depute",
      "open_data": "fontaine-domeizel-emmanuelle-dia3767-depute-04.xml"
    },
    {
      "prenom": "Emmanuelle",
      "nom": "MÉNARD",
      "type_mandat": "depute",
      "open_data": "menard-emmanuelle-dia3927-depute-34.xml"
    },
    {
      "prenom": "Emmanuel",
      "nom": "MAQUET",
      "type_mandat": "depute",
      "open_data": "maquet-emmanuel-dia3911-depute-80.xml"
    },
    {
      "prenom": "Éric",
      "nom": "ALAUZET",
      "type_mandat": "depute",
      "open_data": "alauzet-eric-dia3452-depute-25.xml"
    },
    {
      "prenom": "Éric",
      "nom": "BOTHOREL",
      "type_mandat": "depute",
      "open_data": "bothorel-eric-dia3457-depute-22.xml"
    },
    {
      "prenom": "Éric",
      "nom": "CIOTTI",
      "type_mandat": "depute",
      "open_data": "ciotti-eric-dia3675-depute-06.xml"
    },
    {
      "prenom": "Éric",
      "nom": "COQUEREL",
      "type_mandat": "depute",
      "open_data": "coquerel-eric-dia3678-depute-93.xml"
    },
    {
      "prenom": "Éric",
      "nom": "DIARD",
      "type_mandat": "depute",
      "open_data": "diard-eric-dia3720-depute-13.xml"
    },
    {
      "prenom": "Éric",
      "nom": "GIRARDIN",
      "type_mandat": "depute",
      "open_data": "girardin-eric-dia3787-depute-51.xml"
    },
    {
      "prenom": "Ericka",
      "nom": "BAREIGTS",
      "type_mandat": "depute",
      "open_data": "bareigts-ericka-dia3302-depute-974.xml"
    },
    {
      "prenom": "Éric",
      "nom": "PAUGET",
      "type_mandat": "depute",
      "open_data": "pauget-eric-dia3975-depute-06.xml"
    },
    {
      "prenom": "Éric",
      "nom": "POULLIAT",
      "type_mandat": "depute",
      "open_data": "poulliat-eric-dia4006-depute-33.xml"
    },
    {
      "prenom": "Éric",
      "nom": "STRAUMANN",
      "type_mandat": "depute",
      "open_data": "straumann-eric-dia4064-depute-68.xml"
    },
    {
      "prenom": "Éric",
      "nom": "WOERTH",
      "type_mandat": "depute",
      "open_data": "woerth-eric-dia4118-depute-60.xml"
    },
    {
      "prenom": "Erwan",
      "nom": "BALANANT",
      "type_mandat": "depute",
      "open_data": "balanant-erwan-dia3299-depute-29.xml"
    },
    {
      "prenom": "Fabien",
      "nom": "DI FILIPPO",
      "type_mandat": "depute",
      "open_data": "di-filippo-fabien-dia3721-depute-57.xml"
    },
    {
      "prenom": "Fabien",
      "nom": "GOUTTEFARDE",
      "type_mandat": "depute",
      "open_data": "gouttefarde-fabien-dia3798-depute-27.xml"
    },
    {
      "prenom": "Fabien",
      "nom": "LAINÉ",
      "type_mandat": "depute",
      "open_data": "laine-fabien-dia3862-depute-40.xml"
    },
    {
      "prenom": "Fabien",
      "nom": "MATRAS",
      "type_mandat": "depute",
      "open_data": "matras-fabien-dia3924-depute-83.xml"
    },
    {
      "prenom": "Fabienne",
      "nom": "COLBOC",
      "type_mandat": "depute",
      "open_data": "colboc-fabienne-dia3679-depute-37.xml"
    },
    {
      "prenom": "Fabien",
      "nom": "ROUSSEL",
      "type_mandat": "depute",
      "open_data": "roussel-fabien-diam4448-depute-59.xml"
    },
    {
      "prenom": "Fabrice",
      "nom": "BRUN",
      "type_mandat": "depute",
      "open_data": "brun-fabrice-dia3604-depute-07.xml"
    },
    {
      "prenom": "Fabrice",
      "nom": "LE VIGOUREUX",
      "type_mandat": "depute",
      "open_data": "le-vigoureux-fabrice-dia3895-depute-14.xml"
    },
    {
      "prenom": "Fadila",
      "nom": "KHATTABI",
      "type_mandat": "depute",
      "open_data": "khattabi-fadila-dia3847-depute-21.xml"
    },
    {
      "prenom": "Fannette",
      "nom": "CHARVIER",
      "type_mandat": "depute",
      "open_data": "charvier-fannette-diam3666-depute-25.xml"
    },
    {
      "prenom": "Fiona",
      "nom": "LAZAAR",
      "type_mandat": "depute",
      "open_data": "lazaar-fiona-dia3874-depute-95.xml"
    },
    {
      "prenom": "Florence",
      "nom": "GRANJUS",
      "type_mandat": "depute",
      "open_data": "granjus-florence-dia3802-depute-78.xml"
    },
    {
      "prenom": "Florence",
      "nom": "LASSERRE-DAVID",
      "type_mandat": "depute",
      "open_data": "lasserre-david-florence-dia3869-depute-64.xml"
    },
    {
      "prenom": "Florent",
      "nom": "BOUDIÉ",
      "type_mandat": "depute",
      "open_data": "boudie-florent-dia3459-depute-33.xml"
    },
    {
      "prenom": "Florian",
      "nom": "BACHELIER",
      "type_mandat": "depute",
      "open_data": "bachelier-florian-dia3292-depute-35.xml"
    },
    {
      "prenom": "Francis",
      "nom": "VERCAMER",
      "type_mandat": "depute",
      "open_data": "vercamer-francis-diam4102-depute-59.xml"
    },
    {
      "prenom": "Franck",
      "nom": "MARLIN",
      "type_mandat": "depute",
      "open_data": "marlin-franck-dia3915-depute-91.xml"
    },
    {
      "prenom": "Franck",
      "nom": "RIESTER",
      "type_mandat": "depute",
      "open_data": "riester-franck-dia4028-depute-77.xml"
    },
    {
      "prenom": "François",
      "nom": "ANDRÉ",
      "type_mandat": "depute",
      "open_data": "andre-francois-dia3441-depute-35.xml"
    },
    {
      "prenom": "François",
      "nom": "CORMIER-BOULIGEON",
      "type_mandat": "depute",
      "open_data": "cormier-bouligeon-francois-diam4289-depute-18.xml"
    },
    {
      "prenom": "François",
      "nom": "CORNUT-GENTILLE",
      "type_mandat": "depute",
      "open_data": "cornut-gentille-francois-dia3685-depute-52.xml"
    },
    {
      "prenom": "François",
      "nom": "DE RUGY",
      "type_mandat": "depute",
      "open_data": "de-rugy-francois-dia3711-depute-44.xml"
    },
    {
      "prenom": "Françoise",
      "nom": "DUMAS",
      "type_mandat": "depute",
      "open_data": "dumas-francoise-diam4126-depute-30.xml"
    },
    {
      "prenom": "François",
      "nom": "JOLIVET",
      "type_mandat": "depute",
      "open_data": "jolivet-francois-dia3834-depute-36.xml"
    },
    {
      "prenom": "François-Michel",
      "nom": "LAMBERT",
      "type_mandat": "depute",
      "open_data": "lambert-francois-michel-dia4172-depute-13.xml"
    },
    {
      "prenom": "François",
      "nom": "PUPPONI",
      "type_mandat": "depute",
      "open_data": "pupponi-francois-dia4010-depute-95.xml"
    },
    {
      "prenom": "François",
      "nom": "RUFFIN",
      "type_mandat": "depute",
      "open_data": "ruffin-francois-dia4045-depute-80.xml"
    },
    {
      "prenom": "Frédéric",
      "nom": "BARBIER",
      "type_mandat": "depute",
      "open_data": "barbier-frederic-dia3301-depute-25.xml"
    },
    {
      "prenom": "Frédéric",
      "nom": "DESCROZAILLE",
      "type_mandat": "depute",
      "open_data": "descrozaille-frederic-dia3714-depute-94.xml"
    },
    {
      "prenom": "Frédéric",
      "nom": "PETIT",
      "type_mandat": "depute",
      "open_data": "petit-frederic-dia3985-depute-099.xml"
    },
    {
      "prenom": "Frédéric",
      "nom": "REISS",
      "type_mandat": "depute",
      "open_data": "reiss-frederic-dia4024-depute-67.xml"
    },
    {
      "prenom": "Frédérique",
      "nom": "DUMAS",
      "type_mandat": "depute",
      "open_data": "dumas-frederique-dia3734-depute-92.xml"
    },
    {
      "prenom": "Frédérique",
      "nom": "LARDET",
      "type_mandat": "depute",
      "open_data": "lardet-frederique-dia3866-depute-74.xml"
    },
    {
      "prenom": "Frédérique",
      "nom": "MEUNIER",
      "type_mandat": "depute",
      "open_data": "meunier-frederique-dia3934-depute-19.xml"
    },
    {
      "prenom": "Frédérique",
      "nom": "TUFFNELL",
      "type_mandat": "depute",
      "open_data": "tuffnell-frederique-dia4090-depute-17.xml"
    },
    {
      "prenom": "Gabriel",
      "nom": "ATTAL",
      "type_mandat": "depute",
      "open_data": "attal-gabriel-dia3284-depute-92.xml"
    },
    {
      "prenom": "Gabriel",
      "nom": "SERVILLE",
      "type_mandat": "depute",
      "open_data": "serville-gabriel-dia4164-depute-973.xml"
    },
    {
      "prenom": "Gaël",
      "nom": "LE BOHEC",
      "type_mandat": "depute",
      "open_data": "le-bohec-gael-dia3876-depute-35.xml"
    },
    {
      "prenom": "Geneviève",
      "nom": "LEVY",
      "type_mandat": "depute",
      "open_data": "levy-genevieve-dia3893-depute-83.xml"
    },
    {
      "prenom": "George",
      "nom": "PAU-LANGEVIN",
      "type_mandat": "depute",
      "open_data": "pau-langevin-george-dia3977-depute-75.xml"
    },
    {
      "prenom": "Géraldine",
      "nom": "BANNIER",
      "type_mandat": "depute",
      "open_data": "bannier-geraldine-dia3300-depute-53.xml"
    },
    {
      "prenom": "Gérard",
      "nom": "CHERPION",
      "type_mandat": "depute",
      "open_data": "cherpion-gerard-dia3670-depute-88.xml"
    },
    {
      "prenom": "Gérard",
      "nom": "MENUEL",
      "type_mandat": "depute",
      "open_data": "menuel-gerard-dia3929-depute-10.xml"
    },
    {
      "prenom": "Gilbert",
      "nom": "COLLARD",
      "type_mandat": "depute",
      "open_data": "collard-gilbert-dia3682-depute-30.xml"
    },
    {
      "prenom": "Gilles",
      "nom": "CARREZ",
      "type_mandat": "depute",
      "open_data": "carrez-gilles-dia3612-depute-94.xml"
    },
    {
      "prenom": "Gilles",
      "nom": "LE GENDRE",
      "type_mandat": "depute",
      "open_data": "le-gendre-gilles-dia3882-depute-75.xml"
    },
    {
      "prenom": "Gilles",
      "nom": "LURTON",
      "type_mandat": "depute",
      "open_data": "lurton-gilles-dia3902-depute-35.xml"
    },
    {
      "prenom": "Gisèle",
      "nom": "BIÉMOURET",
      "type_mandat": "depute",
      "open_data": "biemouret-gisele-dia3431-depute-32.xml"
    },
    {
      "prenom": "Graziella",
      "nom": "MELCHIOR",
      "type_mandat": "depute",
      "open_data": "melchior-graziella-dia3926-depute-29.xml"
    },
    {
      "prenom": "Grégory",
      "nom": "BESSON-MOREAU",
      "type_mandat": "depute",
      "open_data": "besson-moreau-gregory-dia3434-depute-10.xml"
    },
    {
      "prenom": "Grégory",
      "nom": "GALBADON",
      "type_mandat": "depute",
      "open_data": "galbadon-gregory-dia3790-depute-50.xml"
    },
    {
      "prenom": "Guillaume",
      "nom": "CHICHE",
      "type_mandat": "depute",
      "open_data": "chiche-guillaume-dia3671-depute-79.xml"
    },
    {
      "prenom": "Guillaume",
      "nom": "GAROT",
      "type_mandat": "depute",
      "open_data": "garot-guillaume-dia3778-depute-53.xml"
    },
    {
      "prenom": "Guillaume",
      "nom": "GOUFFIER-CHA",
      "type_mandat": "depute",
      "open_data": "gouffier-cha-guillaume-dia3796-depute-94.xml"
    },
    {
      "prenom": "Guillaume",
      "nom": "KASBARIAN",
      "type_mandat": "depute",
      "open_data": "kasbarian-guillaume-dia3842-depute-28.xml"
    },
    {
      "prenom": "Guillaume",
      "nom": "LARRIVÉ",
      "type_mandat": "depute",
      "open_data": "larrive-guillaume-dia3868-depute-89.xml"
    },
    {
      "prenom": "Guillaume",
      "nom": "PELTIER",
      "type_mandat": "depute",
      "open_data": "peltier-guillaume-dia3979-depute-41.xml"
    },
    {
      "prenom": "Guillaume",
      "nom": "VUILLETET",
      "type_mandat": "depute",
      "open_data": "vuilletet-guillaume-dia4115-depute-95.xml"
    },
    {
      "prenom": "Guy",
      "nom": "BRICOUT",
      "type_mandat": "depute",
      "open_data": "bricout-guy-dia3565-depute-59.xml"
    },
    {
      "prenom": "Guy",
      "nom": "TEISSIER",
      "type_mandat": "depute",
      "open_data": "teissier-guy-dia4073-depute-13.xml"
    },
    {
      "prenom": "Gwendal",
      "nom": "ROUILLARD",
      "type_mandat": "depute",
      "open_data": "rouillard-gwendal-dia4039-depute-56.xml"
    },
    {
      "prenom": "Hélène",
      "nom": "VAINQUEUR-CHRISTOPHE",
      "type_mandat": "depute",
      "open_data": "vainqueur-christophe-helene-dia4092-depute-971.xml"
    },
    {
      "prenom": "Hélène",
      "nom": "ZANNIER",
      "type_mandat": "depute",
      "open_data": "zannier-helene-dia4122-depute-57.xml"
    },
    {
      "prenom": "Hervé",
      "nom": "BERVILLE",
      "type_mandat": "depute",
      "open_data": "berville-herve-dia3328-depute-22.xml"
    },
    {
      "prenom": "Hervé",
      "nom": "PELLOIS",
      "type_mandat": "depute",
      "open_data": "pellois-herve-dia3978-depute-56.xml"
    },
    {
      "prenom": "Hervé",
      "nom": "SAULIGNAC",
      "type_mandat": "depute",
      "open_data": "saulignac-herve-dia4053-depute-07.xml"
    },
    {
      "prenom": "Hubert",
      "nom": "JULIEN-LAFERRIERE",
      "type_mandat": "depute",
      "open_data": "julien-laferriere-hubert-dia3837-depute-69.xml"
    },
    {
      "prenom": "Hubert",
      "nom": "WULFRANC",
      "type_mandat": "depute",
      "open_data": "wulfranc-hubert-dia4121-depute-76.xml"
    },
    {
      "prenom": "Hugues",
      "nom": "RENSON",
      "type_mandat": "depute",
      "open_data": "renson-hugues-dia4029-depute-75.xml"
    },
    {
      "prenom": "Huguette",
      "nom": "BELLO",
      "type_mandat": "depute",
      "open_data": "bello-huguette-dia3436-depute-974.xml"
    },
    {
      "prenom": "Huguette",
      "nom": "TIEGNA",
      "type_mandat": "depute",
      "open_data": "tiegna-huguette-dia4082-depute-46.xml"
    },
    {
      "prenom": "Ian",
      "nom": "BOUCARD",
      "type_mandat": "depute",
      "open_data": "boucard-ian-dia3456-depute-90.xml"
    },
    {
      "prenom": "Isabelle",
      "nom": "FLORENNES",
      "type_mandat": "depute",
      "open_data": "florennes-isabelle-diam4281-depute-92.xml"
    },
    {
      "prenom": "Isabelle",
      "nom": "MULLER-QUOY",
      "type_mandat": "depute",
      "open_data": "muller-quoy-isabelle-dia3950-depute-95.xml"
    },
    {
      "prenom": "Isabelle",
      "nom": "RAUCH",
      "type_mandat": "depute",
      "open_data": "rauch-isabelle-dia4018-depute-57.xml"
    },
    {
      "prenom": "Isabelle",
      "nom": "VALENTIN",
      "type_mandat": "depute",
      "open_data": "valentin-isabelle-dia4093-depute-43.xml"
    },
    {
      "prenom": "Jacqueline",
      "nom": "MAQUET",
      "type_mandat": "depute",
      "open_data": "maquet-jacqueline-dia3912-depute-62.xml"
    },
    {
      "prenom": "Jacques",
      "nom": "CATTIN",
      "type_mandat": "depute",
      "open_data": "cattin-jacques-dia3614-depute-68.xml"
    },
    {
      "prenom": "Jacques",
      "nom": "KRABAL",
      "type_mandat": "depute",
      "open_data": "krabal-jacques-dia3851-depute-02.xml"
    },
    {
      "prenom": "Jacques",
      "nom": "MAIRE",
      "type_mandat": "depute",
      "open_data": "maire-jacques-diam4285-depute-92.xml"
    },
    {
      "prenom": "Jacques",
      "nom": "MARILOSSIAN",
      "type_mandat": "depute",
      "open_data": "marilossian-jacques-dia3913-depute-92.xml"
    },
    {
      "prenom": "Jacques",
      "nom": "SAVATIER",
      "type_mandat": "depute",
      "open_data": "savatier-jacques-dia4054-depute-86.xml"
    },
    {
      "prenom": "Jean François",
      "nom": "MBAYE",
      "type_mandat": "depute",
      "open_data": "mbaye-jean-francois-dia3925-depute-94.xml"
    },
    {
      "prenom": "Jean-Baptiste",
      "nom": "DJEBBARI",
      "type_mandat": "depute",
      "open_data": "djebbari-jean-baptiste-dia3724-depute-87.xml"
    },
    {
      "prenom": "Jean-Baptiste",
      "nom": "MOREAU",
      "type_mandat": "depute",
      "open_data": "moreau-jean-baptiste-dia3945-depute-23.xml"
    },
    {
      "prenom": "Jean-Bernard",
      "nom": "SEMPASTOUS",
      "type_mandat": "depute",
      "open_data": "sempastous-jean-bernard-dia4056-depute-65.xml"
    },
    {
      "prenom": "Jean-Carles",
      "nom": "GRELIER",
      "type_mandat": "depute",
      "open_data": "grelier-jean-carles-diam4342-depute-72.xml"
    },
    {
      "prenom": "Jean-Charles",
      "nom": "COLAS-ROY",
      "type_mandat": "depute",
      "open_data": "colas-roy-jean-charles-dia3677-depute-38.xml"
    },
    {
      "prenom": "Jean-Charles",
      "nom": "LARSONNEUR",
      "type_mandat": "depute",
      "open_data": "larsonneur-jean-charles-dia3870-depute-29.xml"
    },
    {
      "prenom": "Jean-Charles",
      "nom": "TAUGOURDEAU",
      "type_mandat": "depute",
      "open_data": "taugourdeau-jean-charles-dia4076-depute-49.xml"
    },
    {
      "prenom": "Jean-Christophe",
      "nom": "LAGARDE",
      "type_mandat": "depute",
      "open_data": "lagarde-jean-christophe-dia3859-depute-93.xml"
    },
    {
      "prenom": "Jean-Claude",
      "nom": "BOUCHET",
      "type_mandat": "depute",
      "open_data": "bouchet-jean-claude-dia3458-depute-84.xml"
    },
    {
      "prenom": "Jean-Claude",
      "nom": "LECLABART",
      "type_mandat": "depute",
      "open_data": "leclabart-jean-claude-dia4269-depute-80.xml"
    },
    {
      "prenom": "Jean-Félix",
      "nom": "ACQUAVIVA",
      "type_mandat": "depute",
      "open_data": "acquaviva-jean-felix-dia3269-depute-2b.xml"
    },
    {
      "prenom": "Jean-François",
      "nom": "CESARINI",
      "type_mandat": "depute",
      "open_data": "cesarini-jean-francois-dia3661-depute-84.xml"
    },
    {
      "prenom": "Jean-François",
      "nom": "ELIAOU",
      "type_mandat": "depute",
      "open_data": "eliaou-jean-francois-dia3746-depute-34.xml"
    },
    {
      "prenom": "Jean-François",
      "nom": "PARIGI",
      "type_mandat": "depute",
      "open_data": "parigi-jean-francois-dia3970-depute-77.xml"
    },
    {
      "prenom": "Jean-François",
      "nom": "PORTARRIEU",
      "type_mandat": "depute",
      "open_data": "portarrieu-jean-francois-dia4168-depute-31.xml"
    },
    {
      "prenom": "Jean-Hugues",
      "nom": "RATENON",
      "type_mandat": "depute",
      "open_data": "ratenon-jean-hugues-dia4020-depute-974.xml"
    },
    {
      "prenom": "Jeanine",
      "nom": "DUBIÉ",
      "type_mandat": "depute",
      "open_data": "dubie-jeanine-dia3727-depute-65.xml"
    },
    {
      "prenom": "Jean-Jacques",
      "nom": "BRIDEY",
      "type_mandat": "depute",
      "open_data": "bridey-jean-jacques-diam4277-depute-94.xml"
    },
    {
      "prenom": "Jean-Jacques",
      "nom": "FERRARA",
      "type_mandat": "depute",
      "open_data": "ferrara-jean-jacques-dia4175-depute-2a.xml"
    },
    {
      "prenom": "Jean-Jacques",
      "nom": "GAULTIER",
      "type_mandat": "depute",
      "open_data": "gaultier-jean-jacques-diam4452-depute-88.xml"
    },
    {
      "prenom": "Jean",
      "nom": "LASSALLE",
      "type_mandat": "depute",
      "open_data": "lassalle-jean-dia4181-depute-64.xml"
    },
    {
      "prenom": "Jean-Louis",
      "nom": "BOURLANGES",
      "type_mandat": "depute",
      "open_data": "bourlanges-jean-louis-dia3461-depute-92.xml"
    },
    {
      "prenom": "Jean-Louis",
      "nom": "BRICOUT",
      "type_mandat": "depute",
      "open_data": "bricout-jean-louis-dia3566-depute-02.xml"
    },
    {
      "prenom": "Jean-Louis",
      "nom": "MASSON",
      "type_mandat": "depute",
      "open_data": "masson-jean-louis-dia3919-depute-83.xml"
    },
    {
      "prenom": "Jean-Louis",
      "nom": "TOURAINE",
      "type_mandat": "depute",
      "open_data": "touraine-jean-louis-diam4280-depute-69.xml"
    },
    {
      "prenom": "Jean-Luc",
      "nom": "FUGIT",
      "type_mandat": "depute",
      "open_data": "fugit-jean-luc-dia3771-depute-69.xml"
    },
    {
      "prenom": "Jean-Luc",
      "nom": "LAGLEIZE",
      "type_mandat": "depute",
      "open_data": "lagleize-jean-luc-diam4344-depute-31.xml"
    },
    {
      "prenom": "Jean-Luc",
      "nom": "MÉLENCHON",
      "type_mandat": "depute",
      "open_data": "melenchon-jean-luc-dia3928-depute-13.xml"
    },
    {
      "prenom": "Jean-Luc",
      "nom": "REITZER",
      "type_mandat": "depute",
      "open_data": "reitzer-jean-luc-dia4025-depute-68.xml"
    },
    {
      "prenom": "Jean-Luc",
      "nom": "WARSMANN",
      "type_mandat": "depute",
      "open_data": "warsmann-jean-luc-dia4116-depute-08.xml"
    },
    {
      "prenom": "Jean-Marc",
      "nom": "ZULESI",
      "type_mandat": "depute",
      "open_data": "zulesi-jean-marc-dia4119-depute-13.xml"
    },
    {
      "prenom": "Jean-Marie",
      "nom": "FIÉVET",
      "type_mandat": "depute",
      "open_data": "fievet-jean-marie-dia3763-depute-79.xml"
    },
    {
      "prenom": "Jean-Marie",
      "nom": "SERMIER",
      "type_mandat": "depute",
      "open_data": "sermier-jean-marie-dia4057-depute-39.xml"
    },
    {
      "prenom": "Jean-Michel",
      "nom": "CLÉMENT",
      "type_mandat": "depute",
      "open_data": "clement-jean-michel-dia3673-depute-86.xml"
    },
    {
      "prenom": "Jean-Michel",
      "nom": "FAUVERGUE",
      "type_mandat": "depute",
      "open_data": "fauvergue-jean-michel-dia3757-depute-77.xml"
    },
    {
      "prenom": "Jean-Michel",
      "nom": "JACQUES",
      "type_mandat": "depute",
      "open_data": "jacques-jean-michel-dia3828-depute-56.xml"
    },
    {
      "prenom": "Jean-Michel",
      "nom": "MIS",
      "type_mandat": "depute",
      "open_data": "mis-jean-michel-dia3942-depute-42.xml"
    },
    {
      "prenom": "Jean-Noël",
      "nom": "BARROT",
      "type_mandat": "depute",
      "open_data": "barrot-jean-noel-dia3303-depute-78.xml"
    },
    {
      "prenom": "Jean-Paul",
      "nom": "DUFRÈGNE",
      "type_mandat": "depute",
      "open_data": "dufregne-jean-paul-dia4178-depute-03.xml"
    },
    {
      "prenom": "Jean-Paul",
      "nom": "LECOQ",
      "type_mandat": "depute",
      "open_data": "lecoq-jean-paul-dia3877-depute-76.xml"
    },
    {
      "prenom": "Jean-Paul",
      "nom": "MATTEI",
      "type_mandat": "depute",
      "open_data": "mattei-jean-paul-dia3921-depute-64.xml"
    },
    {
      "prenom": "Jean-Philippe",
      "nom": "ARDOUIN",
      "type_mandat": "depute",
      "open_data": "ardouin-jean-philippe-diam4170-depute-17.xml"
    },
    {
      "prenom": "Jean-Philippe",
      "nom": "NILOR",
      "type_mandat": "depute",
      "open_data": "nilor-jean-philippe-dia3958-depute-972.xml"
    },
    {
      "prenom": "Jean-Pierre",
      "nom": "CUBERTAFON",
      "type_mandat": "depute",
      "open_data": "cubertafon-jean-pierre-diam4368-depute-24.xml"
    },
    {
      "prenom": "Jean-Pierre",
      "nom": "DOOR",
      "type_mandat": "depute",
      "open_data": "door-jean-pierre-dia3726-depute-45.xml"
    },
    {
      "prenom": "Jean-Pierre",
      "nom": "PONT",
      "type_mandat": "depute",
      "open_data": "pont-jean-pierre-dia4004-depute-62.xml"
    },
    {
      "prenom": "Jean-Pierre",
      "nom": "VIGIER",
      "type_mandat": "depute",
      "open_data": "vigier-jean-pierre-dia4108-depute-43.xml"
    },
    {
      "prenom": "Jean-René",
      "nom": "CAZENEUVE",
      "type_mandat": "depute",
      "open_data": "cazeneuve-jean-rene-diam4340-depute-32.xml"
    },
    {
      "prenom": "Jean",
      "nom": "TERLIER",
      "type_mandat": "depute",
      "open_data": "terlier-jean-dia4074-depute-81.xml"
    },
    {
      "prenom": "Jean-Yves",
      "nom": "BONY",
      "type_mandat": "depute",
      "open_data": "bony-jean-yves-dia3455-depute-15.xml"
    },
    {
      "prenom": "Jennifer",
      "nom": "DE TEMMERMAN",
      "type_mandat": "depute",
      "open_data": "de-temmerman-jennifer-dia3718-depute-59.xml"
    },
    {
      "prenom": "Jérôme",
      "nom": "LAMBERT",
      "type_mandat": "depute",
      "open_data": "lambert-jerome-dia3860-depute-16.xml"
    },
    {
      "prenom": "Jérôme",
      "nom": "NURY",
      "type_mandat": "depute",
      "open_data": "nury-jerome-dia3960-depute-61.xml"
    },
    {
      "prenom": "Jimmy",
      "nom": "PAHUN",
      "type_mandat": "depute",
      "open_data": "pahun-jimmy-dia3967-depute-56.xml"
    },
    {
      "prenom": "Joachim",
      "nom": "SON-FORGET",
      "type_mandat": "depute",
      "open_data": "son-forget-joachim-diam4449-depute-099.xml"
    },
    {
      "prenom": "Joaquim",
      "nom": "PUEYO",
      "type_mandat": "depute",
      "open_data": "pueyo-joaquim-diam4284-depute-61.xml"
    },
    {
      "prenom": "Joël",
      "nom": "AVIRAGNET",
      "type_mandat": "depute",
      "open_data": "aviragnet-joel-dia3290-depute-31.xml"
    },
    {
      "prenom": "Joël",
      "nom": "GIRAUD",
      "type_mandat": "depute",
      "open_data": "giraud-joel-dia3789-depute-05.xml"
    },
    {
      "prenom": "José",
      "nom": "EVRARD",
      "type_mandat": "depute",
      "open_data": "evrard-jose-dia3749-depute-62.xml"
    },
    {
      "prenom": "Josette",
      "nom": "MANIN",
      "type_mandat": "depute",
      "open_data": "manin-josette-dia3910-depute-972.xml"
    },
    {
      "prenom": "Josiane",
      "nom": "CORNELOUP",
      "type_mandat": "depute",
      "open_data": "corneloup-josiane-dia3686-depute-71.xml"
    },
    {
      "prenom": "Josy",
      "nom": "POUEYTO",
      "type_mandat": "depute",
      "open_data": "poueyto-josy-dia4005-depute-64.xml"
    },
    {
      "prenom": "Julien",
      "nom": "AUBERT",
      "type_mandat": "depute",
      "open_data": "aubert-julien-dia3442-depute-84.xml"
    },
    {
      "prenom": "Julien",
      "nom": "BOROWCZYK",
      "type_mandat": "depute",
      "open_data": "borowczyk-julien-dia4265-depute-42.xml"
    },
    {
      "prenom": "Julien",
      "nom": "DIVE",
      "type_mandat": "depute",
      "open_data": "dive-julien-dia3722-depute-02.xml"
    },
    {
      "prenom": "Justine",
      "nom": "BENIN",
      "type_mandat": "depute",
      "open_data": "benin-justine-dia3323-depute-971.xml"
    },
    {
      "prenom": "Laetitia",
      "nom": "AVIA",
      "type_mandat": "depute",
      "open_data": "avia-laetitia-dia3289-depute-75.xml"
    },
    {
      "prenom": "Laëtitia",
      "nom": "ROMEIRO DIAS",
      "type_mandat": "depute",
      "open_data": "romeiro-dias-laetitia-dia4036-depute-91.xml"
    },
    {
      "prenom": "Laetitia",
      "nom": "SAINT-PAUL",
      "type_mandat": "depute",
      "open_data": "saint-paul-laetitia-dia4050-depute-49.xml"
    },
    {
      "prenom": "Laure",
      "nom": "DE LA RAUDIÈRE",
      "type_mandat": "depute",
      "open_data": "de-la-raudiere-laure-diam4439-depute-28.xml"
    },
    {
      "prenom": "Laurence",
      "nom": "DUMONT",
      "type_mandat": "depute",
      "open_data": "dumont-laurence-dia3736-depute-14.xml"
    },
    {
      "prenom": "Laurence",
      "nom": "GAYTE",
      "type_mandat": "depute",
      "open_data": "gayte-laurence-dia3784-depute-66.xml"
    },
    {
      "prenom": "Laurence",
      "nom": "MAILLART-MÉHAIGNERIE",
      "type_mandat": "depute",
      "open_data": "maillart-mehaignerie-laurence-dia3907-depute-35.xml"
    },
    {
      "prenom": "Laurence",
      "nom": "TRASTOUR-ISNART",
      "type_mandat": "depute",
      "open_data": "trastour-isnart-laurence-diam4279-depute-06.xml"
    },
    {
      "prenom": "Laurence",
      "nom": "VANCEUNEBROCK-MIALON",
      "type_mandat": "depute",
      "open_data": "vanceunebrock-mialon-laurence-diam4352-depute-03.xml"
    },
    {
      "prenom": "Laurence",
      "nom": "VICHNIEVSKY",
      "type_mandat": "depute",
      "open_data": "vichnievsky-laurence-dia4106-depute-63.xml"
    },
    {
      "prenom": "Laurent",
      "nom": "FURST",
      "type_mandat": "depute",
      "open_data": "furst-laurent-dia3773-depute-67.xml"
    },
    {
      "prenom": "Laurent",
      "nom": "GARCIA",
      "type_mandat": "depute",
      "open_data": "garcia-laurent-dia3777-depute-54.xml"
    },
    {
      "prenom": "Laurent",
      "nom": "PIETRASZEWSKI",
      "type_mandat": "depute",
      "open_data": "pietraszewski-laurent-dia3994-depute-59.xml"
    },
    {
      "prenom": "Laurent",
      "nom": "SAINT-MARTIN",
      "type_mandat": "depute",
      "open_data": "saint-martin-laurent-dia4049-depute-94.xml"
    },
    {
      "prenom": "Laurianne",
      "nom": "ROSSI",
      "type_mandat": "depute",
      "open_data": "rossi-laurianne-dia4038-depute-92.xml"
    },
    {
      "prenom": "Lénaïck",
      "nom": "ADAM",
      "type_mandat": "depute",
      "open_data": "adam-lenaick-dia3270-depute-973.xml"
    },
    {
      "prenom": "Liliana",
      "nom": "TANGUY",
      "type_mandat": "depute",
      "open_data": "tanguy-liliana-dia4071-depute-29.xml"
    },
    {
      "prenom": "Lionel",
      "nom": "CAUSSE",
      "type_mandat": "depute",
      "open_data": "causse-lionel-diam4174-depute-40.xml"
    },
    {
      "prenom": "Lise",
      "nom": "MAGNIER",
      "type_mandat": "depute",
      "open_data": "magnier-lise-diam3905-depute-51.xml"
    },
    {
      "prenom": "Loïc",
      "nom": "DOMBREVAL",
      "type_mandat": "depute",
      "open_data": "dombreval-loic-dia4163-depute-06.xml"
    },
    {
      "prenom": "Loïc",
      "nom": "KERVRAN",
      "type_mandat": "depute",
      "open_data": "kervran-loic-dia3846-depute-18.xml"
    },
    {
      "prenom": "Loïc",
      "nom": "PRUD'HOMME",
      "type_mandat": "depute",
      "open_data": "prud-homme-loic-dia4009-depute-33.xml"
    },
    {
      "prenom": "Louis",
      "nom": "ALIOT",
      "type_mandat": "depute",
      "open_data": "aliot-louis-dia3274-depute-66.xml"
    },
    {
      "prenom": "Luc",
      "nom": "CARVOUNAS",
      "type_mandat": "depute",
      "open_data": "carvounas-luc-dia4173-depute-94.xml"
    },
    {
      "prenom": "Ludovic",
      "nom": "MENDES",
      "type_mandat": "depute",
      "open_data": "mendes-ludovic-dia3932-depute-57.xml"
    },
    {
      "prenom": "Ludovic",
      "nom": "PAJOT",
      "type_mandat": "depute",
      "open_data": "pajot-ludovic-dia3968-depute-62.xml"
    },
    {
      "prenom": "Maina",
      "nom": "SAGE",
      "type_mandat": "depute",
      "open_data": "sage-maina-dia4048-depute-987.xml"
    },
    {
      "prenom": "Mansour",
      "nom": "KAMARDINE",
      "type_mandat": "depute",
      "open_data": "kamardine-mansour-dia3840-depute-976.xml"
    },
    {
      "prenom": "Manuel",
      "nom": "VALLS",
      "type_mandat": "depute",
      "open_data": "valls-manuel-dia4096-depute-91.xml"
    },
    {
      "prenom": "Marc",
      "nom": "DELATTE",
      "type_mandat": "depute",
      "open_data": "delatte-marc-dia3702-depute-02.xml"
    },
    {
      "prenom": "Marc",
      "nom": "FESNEAU",
      "type_mandat": "depute",
      "open_data": "fesneau-marc-dia3762-depute-41.xml"
    },
    {
      "prenom": "Marc",
      "nom": "LE FUR",
      "type_mandat": "depute",
      "open_data": "le-fur-marc-dia3881-depute-22.xml"
    },
    {
      "prenom": "Marguerite",
      "nom": "DEPREZ-AUDEBERT",
      "type_mandat": "depute",
      "open_data": "deprez-audebert-marguerite-dia3712-depute-62.xml"
    },
    {
      "prenom": "Marianne",
      "nom": "DUBOIS",
      "type_mandat": "depute",
      "open_data": "dubois-marianne-dia3730-depute-45.xml"
    },
    {
      "prenom": "Marie-Ange",
      "nom": "MAGNE",
      "type_mandat": "depute",
      "open_data": "magne-marie-ange-dia3903-depute-87.xml"
    },
    {
      "prenom": "Marie-Christine",
      "nom": "DALLOZ",
      "type_mandat": "depute",
      "open_data": "dalloz-marie-christine-dia3692-depute-39.xml"
    },
    {
      "prenom": "Marie-Christine",
      "nom": "VERDIER-JOUCLAS",
      "type_mandat": "depute",
      "open_data": "verdier-jouclas-marie-christine-diam4345-depute-81.xml"
    },
    {
      "prenom": "Marie-France",
      "nom": "LORHO",
      "type_mandat": "depute",
      "open_data": "lorho-marie-france-diam4288-depute-84.xml"
    },
    {
      "prenom": "Marie-George",
      "nom": "BUFFET",
      "type_mandat": "depute",
      "open_data": "buffet-marie-george-dia3607-depute-93.xml"
    },
    {
      "prenom": "Marie",
      "nom": "GUÉVENOUX",
      "type_mandat": "depute",
      "open_data": "guevenoux-marie-dia3808-depute-91.xml"
    },
    {
      "prenom": "Marie",
      "nom": "LEBEC",
      "type_mandat": "depute",
      "open_data": "lebec-marie-diam4350-depute-78.xml"
    },
    {
      "prenom": "Marielle",
      "nom": "DE SARNEZ",
      "type_mandat": "depute",
      "open_data": "de-sarnez-marielle-dia3713-depute-75.xml"
    },
    {
      "prenom": "Marie-Noëlle",
      "nom": "BATTISTEL",
      "type_mandat": "depute",
      "open_data": "battistel-marie-noelle-diam4454-depute-38.xml"
    },
    {
      "prenom": "Marie-Pierre",
      "nom": "RIXAIN",
      "type_mandat": "depute",
      "open_data": "rixain-marie-pierre-dia4031-depute-91.xml"
    },
    {
      "prenom": "Marie",
      "nom": "TAMARELLE-VERHAEGHE",
      "type_mandat": "depute",
      "open_data": "tamarelle-verhaeghe-marie-dia4069-depute-27.xml"
    },
    {
      "prenom": "Marietta",
      "nom": "KARAMANLI",
      "type_mandat": "depute",
      "open_data": "karamanli-marietta-dia3843-depute-72.xml"
    },
    {
      "prenom": "Marine",
      "nom": "BRENIER",
      "type_mandat": "depute",
      "open_data": "brenier-marine-dia3563-depute-06.xml"
    },
    {
      "prenom": "Marine",
      "nom": "LE PEN",
      "type_mandat": "depute",
      "open_data": "le-pen-marine-diam4274-depute-62.xml"
    },
    {
      "prenom": "Marion",
      "nom": "LENNE",
      "type_mandat": "depute",
      "open_data": "lenne-marion-dia3885-depute-74.xml"
    },
    {
      "prenom": "Marjolaine",
      "nom": "MEYNIER-MILLEFERT",
      "type_mandat": "depute",
      "open_data": "meynier-millefert-marjolaine-dia3933-depute-38.xml"
    },
    {
      "prenom": "Martial",
      "nom": "SADDIER",
      "type_mandat": "depute",
      "open_data": "saddier-martial-diam4450-depute-74.xml"
    },
    {
      "prenom": "Martine",
      "nom": "LEGUILLE-BALLOY",
      "type_mandat": "depute",
      "open_data": "leguille-balloy-martine-dia3886-depute-85.xml"
    },
    {
      "prenom": "Martine",
      "nom": "WONNER",
      "type_mandat": "depute",
      "open_data": "wonner-martine-dia4120-depute-67.xml"
    },
    {
      "prenom": "Mathilde",
      "nom": "PANOT",
      "type_mandat": "depute",
      "open_data": "panot-mathilde-dia3973-depute-94.xml"
    },
    {
      "prenom": "Matthieu",
      "nom": "ORPHELIN",
      "type_mandat": "depute",
      "open_data": "orphelin-matthieu-dia3965-depute-49.xml"
    },
    {
      "prenom": "Maud",
      "nom": "PETIT",
      "type_mandat": "depute",
      "open_data": "petit-maud-dia3986-depute-94.xml"
    },
    {
      "prenom": "Maurice",
      "nom": "LEROY",
      "type_mandat": "depute",
      "open_data": "leroy-maurice-dia3892-depute-41.xml"
    },
    {
      "prenom": "Maxime",
      "nom": "MINOT",
      "type_mandat": "depute",
      "open_data": "minot-maxime-dia3939-depute-60.xml"
    },
    {
      "prenom": "Max",
      "nom": "MATHIASIN",
      "type_mandat": "depute",
      "open_data": "mathiasin-max-dia3920-depute-971.xml"
    },
    {
      "prenom": "Meyer",
      "nom": "HABIB",
      "type_mandat": "depute",
      "open_data": "habib-meyer-dia3809-depute-099.xml"
    },
    {
      "prenom": "Michel",
      "nom": "CASTELLANI",
      "type_mandat": "depute",
      "open_data": "castellani-michel-dia3613-depute-2b.xml"
    },
    {
      "prenom": "Michel",
      "nom": "DELPON",
      "type_mandat": "depute",
      "open_data": "delpon-michel-dia3707-depute-24.xml"
    },
    {
      "prenom": "Michèle",
      "nom": "CROUZET",
      "type_mandat": "depute",
      "open_data": "crouzet-michele-dia3688-depute-89.xml"
    },
    {
      "prenom": "Michèle",
      "nom": "DE VAUCOULEURS",
      "type_mandat": "depute",
      "open_data": "de-vaucouleurs-michele-dia3716-depute-78.xml"
    },
    {
      "prenom": "Michèle",
      "nom": "PEYRON",
      "type_mandat": "depute",
      "open_data": "peyron-michele-dia3992-depute-77.xml"
    },
    {
      "prenom": "Michèle",
      "nom": "TABAROT",
      "type_mandat": "depute",
      "open_data": "tabarot-michele-dia4067-depute-06.xml"
    },
    {
      "prenom": "Michel",
      "nom": "FANGET",
      "type_mandat": "depute",
      "open_data": "fanget-michel-dia3753-depute-63.xml"
    },
    {
      "prenom": "Michel",
      "nom": "HERBILLON",
      "type_mandat": "depute",
      "open_data": "herbillon-michel-dia3815-depute-94.xml"
    },
    {
      "prenom": "Michel",
      "nom": "LARIVE",
      "type_mandat": "depute",
      "open_data": "larive-michel-dia3867-depute-09.xml"
    },
    {
      "prenom": "Michel",
      "nom": "LAUZZANA",
      "type_mandat": "depute",
      "open_data": "lauzzana-michel-diam4161-depute-47.xml"
    },
    {
      "prenom": "Michel",
      "nom": "VIALAY",
      "type_mandat": "depute",
      "open_data": "vialay-michel-dia4105-depute-78.xml"
    },
    {
      "prenom": "Michel",
      "nom": "ZUMKELLER",
      "type_mandat": "depute",
      "open_data": "zumkeller-michel-diam4286-depute-90.xml"
    },
    {
      "prenom": "Mickaël",
      "nom": "NOGAL",
      "type_mandat": "depute",
      "open_data": "nogal-mickael-dia3959-depute-31.xml"
    },
    {
      "prenom": "Mireille",
      "nom": "CLAPOT",
      "type_mandat": "depute",
      "open_data": "clapot-mireille-dia3674-depute-26.xml"
    },
    {
      "prenom": "Mireille",
      "nom": "ROBERT",
      "type_mandat": "depute",
      "open_data": "robert-mireille-dia4034-depute-11.xml"
    },
    {
      "prenom": "M'jid",
      "nom": "EL GUERRAB",
      "type_mandat": "depute",
      "open_data": "el-guerrab-m-jid-dia3743-depute-099.xml"
    },
    {
      "prenom": "Moetai",
      "nom": "BROTHERSON",
      "type_mandat": "depute",
      "open_data": "brotherson-moetai-dia3600-depute-987.xml"
    },
    {
      "prenom": "Mohamed",
      "nom": "LAQHILA",
      "type_mandat": "depute",
      "open_data": "laqhila-mohamed-dia3865-depute-13.xml"
    },
    {
      "prenom": "Monica",
      "nom": "MICHEL",
      "type_mandat": "depute",
      "open_data": "michel-monica-dia3935-depute-13.xml"
    },
    {
      "prenom": "Monique",
      "nom": "IBORRA",
      "type_mandat": "depute",
      "open_data": "iborra-monique-dia3824-depute-31.xml"
    },
    {
      "prenom": "Monique",
      "nom": "LIMON",
      "type_mandat": "depute",
      "open_data": "limon-monique-dia3894-depute-38.xml"
    },
    {
      "prenom": "Muriel",
      "nom": "RESSIGUIER",
      "type_mandat": "depute",
      "open_data": "ressiguier-muriel-dia4026-depute-34.xml"
    },
    {
      "prenom": "Mustapha",
      "nom": "LAABID",
      "type_mandat": "depute",
      "open_data": "laabid-mustapha-diam4275-depute-35.xml"
    },
    {
      "prenom": "Nadia",
      "nom": "ESSAYAN",
      "type_mandat": "depute",
      "open_data": "essayan-nadia-dia3745-depute-18.xml"
    },
    {
      "prenom": "Nadia",
      "nom": "HAI",
      "type_mandat": "depute",
      "open_data": "hai-nadia-dia3810-depute-78.xml"
    },
    {
      "prenom": "Nadia",
      "nom": "RAMASSAMY",
      "type_mandat": "depute",
      "open_data": "ramassamy-nadia-dia4191-depute-974.xml"
    },
    {
      "prenom": "Naïma",
      "nom": "MOUTCHOU",
      "type_mandat": "depute",
      "open_data": "moutchou-naima-dia3947-depute-95.xml"
    },
    {
      "prenom": "Napole",
      "nom": "POLUTELE",
      "type_mandat": "depute",
      "open_data": "polutele-napole-dia3999-depute-986.xml"
    },
    {
      "prenom": "Natalia",
      "nom": "POUZYREFF",
      "type_mandat": "depute",
      "open_data": "pouzyreff-natalia-diam4442-depute-78.xml"
    },
    {
      "prenom": "Nathalie",
      "nom": "BASSIRE",
      "type_mandat": "depute",
      "open_data": "bassire-nathalie-diam4188-depute-974.xml"
    },
    {
      "prenom": "Nathalie",
      "nom": "ELIMAS",
      "type_mandat": "depute",
      "open_data": "elimas-nathalie-dia3747-depute-95.xml"
    },
    {
      "prenom": "Nathalie",
      "nom": "SARLES",
      "type_mandat": "depute",
      "open_data": "sarles-nathalie-dia4052-depute-42.xml"
    },
    {
      "prenom": "Nicolas",
      "nom": "DÉMOULIN",
      "type_mandat": "depute",
      "open_data": "demoulin-nicolas-dia3708-depute-34.xml"
    },
    {
      "prenom": "Nicolas",
      "nom": "DUPONT-AIGNAN",
      "type_mandat": "depute",
      "open_data": "dupont-aignan-nicolas-dia3741-depute-91.xml"
    },
    {
      "prenom": "Nicolas",
      "nom": "FORISSIER",
      "type_mandat": "depute",
      "open_data": "forissier-nicolas-dia3768-depute-36.xml"
    },
    {
      "prenom": "Nicolas",
      "nom": "TURQUOIS",
      "type_mandat": "depute",
      "open_data": "turquois-nicolas-dia4089-depute-86.xml"
    },
    {
      "prenom": "Nicole",
      "nom": "DUBRÉ-CHIRAT",
      "type_mandat": "depute",
      "open_data": "dubre-chirat-nicole-dia3731-depute-49.xml"
    },
    {
      "prenom": "Nicole",
      "nom": "LE PEIH",
      "type_mandat": "depute",
      "open_data": "le-peih-nicole-dia3889-depute-56.xml"
    },
    {
      "prenom": "Nicole",
      "nom": "SANQUER",
      "type_mandat": "depute",
      "open_data": "sanquer-nicole-diam4444-depute-987.xml"
    },
    {
      "prenom": "Nicole",
      "nom": "TRISSE",
      "type_mandat": "depute",
      "open_data": "trisse-nicole-dia4087-depute-57.xml"
    },
    {
      "prenom": "Olga",
      "nom": "GIVERNET",
      "type_mandat": "depute",
      "open_data": "givernet-olga-dia3788-depute-01.xml"
    },
    {
      "prenom": "Olivia",
      "nom": "GREGOIRE",
      "type_mandat": "depute",
      "open_data": "gregoire-olivia-dia3800-depute-75.xml"
    },
    {
      "prenom": "Olivier",
      "nom": "BECHT",
      "type_mandat": "depute",
      "open_data": "becht-olivier-diam4429-depute-68.xml"
    },
    {
      "prenom": "Olivier",
      "nom": "DAMAISIN",
      "type_mandat": "depute",
      "open_data": "damaisin-olivier-dia3691-depute-47.xml"
    },
    {
      "prenom": "Olivier",
      "nom": "DASSAULT",
      "type_mandat": "depute",
      "open_data": "dassault-olivier-dia3694-depute-60.xml"
    },
    {
      "prenom": "Olivier",
      "nom": "DUSSOPT",
      "type_mandat": "depute",
      "open_data": "dussopt-olivier-diam3737-depute-07.xml"
    },
    {
      "prenom": "Olivier",
      "nom": "FALORNI",
      "type_mandat": "depute",
      "open_data": "falorni-olivier-dia3752-depute-17.xml"
    },
    {
      "prenom": "Olivier",
      "nom": "FAURE",
      "type_mandat": "depute",
      "open_data": "faure-olivier-dia3756-depute-77.xml"
    },
    {
      "prenom": "Olivier",
      "nom": "GAILLARD",
      "type_mandat": "depute",
      "open_data": "gaillard-olivier-dia3774-depute-30.xml"
    },
    {
      "prenom": "Olivier",
      "nom": "MARLEIX",
      "type_mandat": "depute",
      "open_data": "marleix-olivier-dia3914-depute-28.xml"
    },
    {
      "prenom": "Olivier",
      "nom": "SERVA",
      "type_mandat": "depute",
      "open_data": "serva-olivier-dia4059-depute-971.xml"
    },
    {
      "prenom": "Olivier",
      "nom": "VÉRAN",
      "type_mandat": "depute",
      "open_data": "veran-olivier-dia4099-depute-38.xml"
    },
    {
      "prenom": "Pacôme",
      "nom": "RUPIN",
      "type_mandat": "depute",
      "open_data": "rupin-pacome-dia4046-depute-75.xml"
    },
    {
      "prenom": "Pascal",
      "nom": "BOIS",
      "type_mandat": "depute",
      "open_data": "bois-pascal-dia3443-depute-60.xml"
    },
    {
      "prenom": "Pascale",
      "nom": "BOYER",
      "type_mandat": "depute",
      "open_data": "boyer-pascale-dia3561-depute-05.xml"
    },
    {
      "prenom": "Pascale",
      "nom": "FONTENEL-PERSONNE",
      "type_mandat": "depute",
      "open_data": "fontenel-personne-pascale-dia3769-depute-72.xml"
    },
    {
      "prenom": "Patrice",
      "nom": "ANATO",
      "type_mandat": "depute",
      "open_data": "anato-patrice-dia3276-depute-93.xml"
    },
    {
      "prenom": "Patrice",
      "nom": "PERROT",
      "type_mandat": "depute",
      "open_data": "perrot-patrice-dia3981-depute-58.xml"
    },
    {
      "prenom": "Patrice",
      "nom": "VERCHÈRE",
      "type_mandat": "depute",
      "open_data": "verchere-patrice-dia4097-depute-69.xml"
    },
    {
      "prenom": "Patricia",
      "nom": "GALLERNEAU",
      "type_mandat": "depute",
      "open_data": "gallerneau-patricia-dia3776-depute-85.xml"
    },
    {
      "prenom": "Patricia",
      "nom": "MIRALLÈS",
      "type_mandat": "depute",
      "open_data": "miralles-patricia-diam4441-depute-34.xml"
    },
    {
      "prenom": "Patrick",
      "nom": "HETZEL",
      "type_mandat": "depute",
      "open_data": "hetzel-patrick-dia3820-depute-67.xml"
    },
    {
      "prenom": "Patrick",
      "nom": "MIGNOLA",
      "type_mandat": "depute",
      "open_data": "mignola-patrick-dia3938-depute-73.xml"
    },
    {
      "prenom": "Patrick",
      "nom": "VIGNAL",
      "type_mandat": "depute",
      "open_data": "vignal-patrick-dia4110-depute-34.xml"
    },
    {
      "prenom": "Paula",
      "nom": "FORTEZA",
      "type_mandat": "depute",
      "open_data": "forteza-paula-dia3772-depute-099.xml"
    },
    {
      "prenom": "Paul-André",
      "nom": "COLOMBANI",
      "type_mandat": "depute",
      "open_data": "colombani-paul-andre-dia4169-depute-2a.xml"
    },
    {
      "prenom": "Paul",
      "nom": "CHRISTOPHE",
      "type_mandat": "depute",
      "open_data": "christophe-paul-dia3672-depute-59.xml"
    },
    {
      "prenom": "Paul",
      "nom": "MOLAC",
      "type_mandat": "depute",
      "open_data": "molac-paul-dia3943-depute-56.xml"
    },
    {
      "prenom": "Perrine",
      "nom": "GOULET",
      "type_mandat": "depute",
      "open_data": "goulet-perrine-dia3797-depute-58.xml"
    },
    {
      "prenom": "Philippe",
      "nom": "BERTA",
      "type_mandat": "depute",
      "open_data": "berta-philippe-dia3327-depute-30.xml"
    },
    {
      "prenom": "Philippe",
      "nom": "BOLO",
      "type_mandat": "depute",
      "open_data": "bolo-philippe-dia3444-depute-49.xml"
    },
    {
      "prenom": "Philippe",
      "nom": "CHALUMEAU",
      "type_mandat": "depute",
      "open_data": "chalumeau-philippe-dia3664-depute-37.xml"
    },
    {
      "prenom": "Philippe",
      "nom": "CHASSAING",
      "type_mandat": "depute",
      "open_data": "chassaing-philippe-dia3668-depute-24.xml"
    },
    {
      "prenom": "Philippe",
      "nom": "DUNOYER",
      "type_mandat": "depute",
      "open_data": "dunoyer-philippe-dia3735-depute-988.xml"
    },
    {
      "prenom": "Philippe",
      "nom": "FOLLIOT",
      "type_mandat": "depute",
      "open_data": "folliot-philippe-dia3766-depute-81.xml"
    },
    {
      "prenom": "Philippe",
      "nom": "GOMÈS",
      "type_mandat": "depute",
      "open_data": "gomes-philippe-diam3791-depute-988.xml"
    },
    {
      "prenom": "Philippe",
      "nom": "GOSSELIN",
      "type_mandat": "depute",
      "open_data": "gosselin-philippe-dia3794-depute-50.xml"
    },
    {
      "prenom": "Philippe",
      "nom": "HUPPÉ",
      "type_mandat": "depute",
      "open_data": "huppe-philippe-dia3823-depute-34.xml"
    },
    {
      "prenom": "Philippe",
      "nom": "LATOMBE",
      "type_mandat": "depute",
      "open_data": "latombe-philippe-diam3871-depute-85.xml"
    },
    {
      "prenom": "Philippe",
      "nom": "MICHEL-KLEISBAUER",
      "type_mandat": "depute",
      "open_data": "michel-kleisbauer-philippe-dia3936-depute-83.xml"
    },
    {
      "prenom": "Philippe",
      "nom": "VIGIER",
      "type_mandat": "depute",
      "open_data": "vigier-philippe-dia4109-depute-28.xml"
    },
    {
      "prenom": "Pierre-Alain",
      "nom": "RAPHAN",
      "type_mandat": "depute",
      "open_data": "raphan-pierre-alain-dia4019-depute-91.xml"
    },
    {
      "prenom": "Pierre",
      "nom": "CABARÉ",
      "type_mandat": "depute",
      "open_data": "cabare-pierre-dia3609-depute-31.xml"
    },
    {
      "prenom": "Pierre",
      "nom": "CORDIER",
      "type_mandat": "depute",
      "open_data": "cordier-pierre-dia3683-depute-08.xml"
    },
    {
      "prenom": "Pierre",
      "nom": "DHARRÉVILLE",
      "type_mandat": "depute",
      "open_data": "dharreville-pierre-dia3717-depute-13.xml"
    },
    {
      "prenom": "Pierre-Henri",
      "nom": "DUMONT",
      "type_mandat": "depute",
      "open_data": "dumont-pierre-henri-dia3738-depute-62.xml"
    },
    {
      "prenom": "Pierre",
      "nom": "HENRIET",
      "type_mandat": "depute",
      "open_data": "henriet-pierre-dia3816-depute-85.xml"
    },
    {
      "prenom": "Pierre",
      "nom": "MOREL-À-L'HUISSIER",
      "type_mandat": "depute",
      "open_data": "morel-a-l-huissier-pierre-dia3948-depute-48.xml"
    },
    {
      "prenom": "Pierre",
      "nom": "PERSON",
      "type_mandat": "depute",
      "open_data": "person-pierre-dia3982-depute-75.xml"
    },
    {
      "prenom": "Pierre",
      "nom": "VATIN",
      "type_mandat": "depute",
      "open_data": "vatin-pierre-dia4098-depute-60.xml"
    },
    {
      "prenom": "Pierre-Yves",
      "nom": "BOURNAZEL",
      "type_mandat": "depute",
      "open_data": "bournazel-pierre-yves-dia3559-depute-75.xml"
    },
    {
      "prenom": "Pieyre-Alexandre",
      "nom": "ANGLADE",
      "type_mandat": "depute",
      "open_data": "anglade-pieyre-alexandre-dia3280-depute-099.xml"
    },
    {
      "prenom": "Ramlati",
      "nom": "ALI",
      "type_mandat": "depute",
      "open_data": "ali-ramlati-dia3273-depute-976.xml"
    },
    {
      "prenom": "Raphaël",
      "nom": "GAUVAIN",
      "type_mandat": "depute",
      "open_data": "gauvain-raphael-dia3779-depute-71.xml"
    },
    {
      "prenom": "Raphaël",
      "nom": "GÉRARD",
      "type_mandat": "depute",
      "open_data": "gerard-raphael-dia3785-depute-17.xml"
    },
    {
      "prenom": "Raphaël",
      "nom": "SCHELLENBERGER",
      "type_mandat": "depute",
      "open_data": "schellenberger-raphael-diam4453-depute-68.xml"
    },
    {
      "prenom": "Régis",
      "nom": "JUANICO",
      "type_mandat": "depute",
      "open_data": "juanico-regis-dia3838-depute-42.xml"
    },
    {
      "prenom": "Rémi",
      "nom": "DELATTE",
      "type_mandat": "depute",
      "open_data": "delatte-remi-dia4129-depute-21.xml"
    },
    {
      "prenom": "Rémy",
      "nom": "REBEYROTTE",
      "type_mandat": "depute",
      "open_data": "rebeyrotte-remy-dia4022-depute-71.xml"
    },
    {
      "prenom": "Richard",
      "nom": "FERRAND",
      "type_mandat": "depute",
      "open_data": "ferrand-richard-diam3760-depute-29.xml"
    },
    {
      "prenom": "Richard",
      "nom": "LIOGER",
      "type_mandat": "depute",
      "open_data": "lioger-richard-dia3897-depute-57.xml"
    },
    {
      "prenom": "Richard",
      "nom": "RAMOS",
      "type_mandat": "depute",
      "open_data": "ramos-richard-dia4021-depute-45.xml"
    },
    {
      "prenom": "Robin",
      "nom": "REDA",
      "type_mandat": "depute",
      "open_data": "reda-robin-dia4023-depute-91.xml"
    },
    {
      "prenom": "Rodrigue",
      "nom": "KOKOUENDO",
      "type_mandat": "depute",
      "open_data": "kokouendo-rodrigue-diam4346-depute-77.xml"
    },
    {
      "prenom": "Roland",
      "nom": "LESCURE",
      "type_mandat": "depute",
      "open_data": "lescure-roland-diam4348-depute-099.xml"
    },
    {
      "prenom": "Romain",
      "nom": "GRAU",
      "type_mandat": "depute",
      "open_data": "grau-romain-dia3801-depute-66.xml"
    },
    {
      "prenom": "Sabine",
      "nom": "RUBIN",
      "type_mandat": "depute",
      "open_data": "rubin-sabine-dia4044-depute-93.xml"
    },
    {
      "prenom": "Sabine",
      "nom": "THILLAYE",
      "type_mandat": "depute",
      "open_data": "thillaye-sabine-dia4079-depute-37.xml"
    },
    {
      "prenom": "Sacha",
      "nom": "HOULIÉ",
      "type_mandat": "depute",
      "open_data": "houlie-sacha-dia3822-depute-86.xml"
    },
    {
      "prenom": "Saïd",
      "nom": "AHAMADA",
      "type_mandat": "depute",
      "open_data": "ahamada-said-dia3272-depute-13.xml"
    },
    {
      "prenom": "Samantha",
      "nom": "CAZEBONNE",
      "type_mandat": "depute",
      "open_data": "cazebonne-samantha-diam4438-depute-099.xml"
    },
    {
      "prenom": "Sandra",
      "nom": "MARSAUD",
      "type_mandat": "depute",
      "open_data": "marsaud-sandra-dia3916-depute-16.xml"
    },
    {
      "prenom": "Sandrine",
      "nom": "JOSSO",
      "type_mandat": "depute",
      "open_data": "josso-sandrine-dia3836-depute-44.xml"
    },
    {
      "prenom": "Sandrine",
      "nom": "LE FEUR",
      "type_mandat": "depute",
      "open_data": "le-feur-sandrine-dia3879-depute-29.xml"
    },
    {
      "prenom": "Sandrine",
      "nom": "MÖRCH",
      "type_mandat": "depute",
      "open_data": "morch-sandrine-dia3944-depute-31.xml"
    },
    {
      "prenom": "Sarah",
      "nom": "EL HAÏRY",
      "type_mandat": "depute",
      "open_data": "el-hairy-sarah-dia3742-depute-44.xml"
    },
    {
      "prenom": "Sébastien",
      "nom": "CAZENOVE",
      "type_mandat": "depute",
      "open_data": "cazenove-sebastien-dia3618-depute-66.xml"
    },
    {
      "prenom": "Sébastien",
      "nom": "CHENU",
      "type_mandat": "depute",
      "open_data": "chenu-sebastien-dia3669-depute-59.xml"
    },
    {
      "prenom": "Sébastien",
      "nom": "HUYGHE",
      "type_mandat": "depute",
      "open_data": "huyghe-sebastien-dia3826-depute-59.xml"
    },
    {
      "prenom": "Sébastien",
      "nom": "JUMEL",
      "type_mandat": "depute",
      "open_data": "jumel-sebastien-dia3839-depute-76.xml"
    },
    {
      "prenom": "Sébastien",
      "nom": "LECLERC",
      "type_mandat": "depute",
      "open_data": "leclerc-sebastien-dia3873-depute-14.xml"
    },
    {
      "prenom": "Sébastien",
      "nom": "NADOT",
      "type_mandat": "depute",
      "open_data": "nadot-sebastien-dia3949-depute-31.xml"
    },
    {
      "prenom": "Sereine",
      "nom": "MAUBORGNE",
      "type_mandat": "depute",
      "open_data": "mauborgne-sereine-dia3922-depute-83.xml"
    },
    {
      "prenom": "Serge",
      "nom": "LETCHIMY",
      "type_mandat": "depute",
      "open_data": "letchimy-serge-dia3896-depute-972.xml"
    },
    {
      "prenom": "Séverine",
      "nom": "GIPSON",
      "type_mandat": "depute",
      "open_data": "gipson-severine-dia3786-depute-27.xml"
    },
    {
      "prenom": "Sira",
      "nom": "SYLLA",
      "type_mandat": "depute",
      "open_data": "sylla-sira-dia4066-depute-76.xml"
    },
    {
      "prenom": "Sonia",
      "nom": "KRIMI",
      "type_mandat": "depute",
      "open_data": "krimi-sonia-dia3855-depute-50.xml"
    },
    {
      "prenom": "Sophie",
      "nom": "AUCONIE",
      "type_mandat": "depute",
      "open_data": "auconie-sophie-dia4189-depute-37.xml"
    },
    {
      "prenom": "Sophie",
      "nom": "BEAUDOUIN-HUBIERE",
      "type_mandat": "depute",
      "open_data": "beaudouin-hubiere-sophie-dia3371-depute-87.xml"
    },
    {
      "prenom": "Sophie",
      "nom": "ERRANTE",
      "type_mandat": "depute",
      "open_data": "errante-sophie-dia4266-depute-44.xml"
    },
    {
      "prenom": "Sophie",
      "nom": "METTE",
      "type_mandat": "depute",
      "open_data": "mette-sophie-dia3931-depute-33.xml"
    },
    {
      "prenom": "Sophie",
      "nom": "PANONACLE",
      "type_mandat": "depute",
      "open_data": "panonacle-sophie-dia3972-depute-33.xml"
    },
    {
      "prenom": "Stanislas",
      "nom": "GUERINI",
      "type_mandat": "depute",
      "open_data": "guerini-stanislas-diam4283-depute-75.xml"
    },
    {
      "prenom": "Stella",
      "nom": "DUPONT",
      "type_mandat": "depute",
      "open_data": "dupont-stella-dia3739-depute-49.xml"
    },
    {
      "prenom": "Stéphane",
      "nom": "BUCHOU",
      "type_mandat": "depute",
      "open_data": "buchou-stephane-diam4431-depute-85.xml"
    },
    {
      "prenom": "Stéphane",
      "nom": "CLAIREAUX",
      "type_mandat": "depute",
      "open_data": "claireaux-stephane-dia4160-depute-975.xml"
    },
    {
      "prenom": "Stéphane",
      "nom": "DEMILLY",
      "type_mandat": "depute",
      "open_data": "demilly-stephane-dia3710-depute-80.xml"
    },
    {
      "prenom": "Stéphane",
      "nom": "LE FOLL",
      "type_mandat": "depute",
      "open_data": "le-foll-stephane-dia4124-depute-72.xml"
    },
    {
      "prenom": "Stéphane",
      "nom": "MAZARS",
      "type_mandat": "depute",
      "open_data": "mazars-stephane-diam4455-depute-12.xml"
    },
    {
      "prenom": "Stéphane",
      "nom": "PEU",
      "type_mandat": "depute",
      "open_data": "peu-stephane-dia3991-depute-93.xml"
    },
    {
      "prenom": "Stéphane",
      "nom": "TESTÉ",
      "type_mandat": "depute",
      "open_data": "teste-stephane-dia4075-depute-93.xml"
    },
    {
      "prenom": "Stéphane",
      "nom": "TROMPILLE",
      "type_mandat": "depute",
      "open_data": "trompille-stephane-dia4088-depute-01.xml"
    },
    {
      "prenom": "Stéphane",
      "nom": "VIRY",
      "type_mandat": "depute",
      "open_data": "viry-stephane-dia4114-depute-88.xml"
    },
    {
      "prenom": "Stéphanie",
      "nom": "DO",
      "type_mandat": "depute",
      "open_data": "do-stephanie-dia3725-depute-77.xml"
    },
    {
      "prenom": "Stéphanie",
      "nom": "KERBARH",
      "type_mandat": "depute",
      "open_data": "kerbarh-stephanie-dia3844-depute-76.xml"
    },
    {
      "prenom": "Stéphanie",
      "nom": "RIST",
      "type_mandat": "depute",
      "open_data": "rist-stephanie-diam4351-depute-45.xml"
    },
    {
      "prenom": "Sylvain",
      "nom": "MAILLARD",
      "type_mandat": "depute",
      "open_data": "maillard-sylvain-dia3906-depute-75.xml"
    },
    {
      "prenom": "Sylvain",
      "nom": "WASERMAN",
      "type_mandat": "depute",
      "open_data": "waserman-sylvain-dia4117-depute-67.xml"
    },
    {
      "prenom": "Sylvia",
      "nom": "PINEL",
      "type_mandat": "depute",
      "open_data": "pinel-sylvia-dia3996-depute-82.xml"
    },
    {
      "prenom": "Sylvie",
      "nom": "CHARRIÈRE",
      "type_mandat": "depute",
      "open_data": "charriere-sylvie-dia3665-depute-93.xml"
    },
    {
      "prenom": "Thibault",
      "nom": "BAZIN",
      "type_mandat": "depute",
      "open_data": "bazin-thibault-diam4128-depute-54.xml"
    },
    {
      "prenom": "Thierry",
      "nom": "BENOIT",
      "type_mandat": "depute",
      "open_data": "benoit-thierry-dia3324-depute-35.xml"
    },
    {
      "prenom": "Thierry",
      "nom": "MICHELS",
      "type_mandat": "depute",
      "open_data": "michels-thierry-dia3937-depute-67.xml"
    },
    {
      "prenom": "Thierry",
      "nom": "ROBERT",
      "type_mandat": "depute",
      "open_data": "robert-thierry-dia4032-depute-974.xml"
    },
    {
      "prenom": "Thierry",
      "nom": "SOLÈRE",
      "type_mandat": "depute",
      "open_data": "solere-thierry-dia4058-depute-92.xml"
    },
    {
      "prenom": "Thomas",
      "nom": "GASSILLOUD",
      "type_mandat": "depute",
      "open_data": "gassilloud-thomas-dia3780-depute-69.xml"
    },
    {
      "prenom": "Thomas",
      "nom": "MESNIER",
      "type_mandat": "depute",
      "open_data": "mesnier-thomas-dia3930-depute-16.xml"
    },
    {
      "prenom": "Thomas",
      "nom": "RUDIGOZ",
      "type_mandat": "depute",
      "open_data": "rudigoz-thomas-dia4041-depute-69.xml"
    },
    {
      "prenom": "Typhanie",
      "nom": "DEGOIS",
      "type_mandat": "depute",
      "open_data": "degois-typhanie-dia3704-depute-73.xml"
    },
    {
      "prenom": "Ugo",
      "nom": "BERNALICIS",
      "type_mandat": "depute",
      "open_data": "bernalicis-ugo-dia3326-depute-59.xml"
    },
    {
      "prenom": "Valéria",
      "nom": "FAURE-MUNTIAN",
      "type_mandat": "depute",
      "open_data": "faure-muntian-valeria-dia3759-depute-42.xml"
    },
    {
      "prenom": "Valérie",
      "nom": "BAZIN-MALGRAS",
      "type_mandat": "depute",
      "open_data": "bazin-malgras-valerie-diam4290-depute-10.xml"
    },
    {
      "prenom": "Valérie",
      "nom": "BEAUVAIS",
      "type_mandat": "depute",
      "open_data": "beauvais-valerie-dia3317-depute-51.xml"
    },
    {
      "prenom": "Valérie",
      "nom": "BOYER",
      "type_mandat": "depute",
      "open_data": "boyer-valerie-dia3658-depute-13.xml"
    },
    {
      "prenom": "Valérie",
      "nom": "GOMEZ-BASSAC",
      "type_mandat": "depute",
      "open_data": "gomez-bassac-valerie-dia3795-depute-83.xml"
    },
    {
      "prenom": "Valérie",
      "nom": "LACROUTE",
      "type_mandat": "depute",
      "open_data": "lacroute-valerie-dia3858-depute-77.xml"
    },
    {
      "prenom": "Valérie",
      "nom": "OPPELT",
      "type_mandat": "depute",
      "open_data": "oppelt-valerie-dia3962-depute-44.xml"
    },
    {
      "prenom": "Valérie",
      "nom": "PETIT",
      "type_mandat": "depute",
      "open_data": "petit-valerie-dia3987-depute-59.xml"
    },
    {
      "prenom": "Valérie",
      "nom": "RABAULT",
      "type_mandat": "depute",
      "open_data": "rabault-valerie-dia4017-depute-82.xml"
    },
    {
      "prenom": "Valérie",
      "nom": "THOMAS",
      "type_mandat": "depute",
      "open_data": "thomas-valerie-dia4080-depute-63.xml"
    },
    {
      "prenom": "Véronique",
      "nom": "HAMMERER",
      "type_mandat": "depute",
      "open_data": "hammerer-veronique-diam4343-depute-33.xml"
    },
    {
      "prenom": "Véronique",
      "nom": "LOUWAGIE",
      "type_mandat": "depute",
      "open_data": "louwagie-veronique-dia3900-depute-61.xml"
    },
    {
      "prenom": "Véronique",
      "nom": "RIOTTON",
      "type_mandat": "depute",
      "open_data": "riotton-veronique-dia4030-depute-74.xml"
    },
    {
      "prenom": "Vincent",
      "nom": "BRU",
      "type_mandat": "depute",
      "open_data": "bru-vincent-dia3601-depute-64.xml"
    },
    {
      "prenom": "Vincent",
      "nom": "DESCOEUR",
      "type_mandat": "depute",
      "open_data": "descoeur-vincent-dia3715-depute-15.xml"
    },
    {
      "prenom": "Vincent",
      "nom": "LEDOUX",
      "type_mandat": "depute",
      "open_data": "ledoux-vincent-dia3880-depute-59.xml"
    },
    {
      "prenom": "Vincent",
      "nom": "ROLLAND",
      "type_mandat": "depute",
      "open_data": "rolland-vincent-diam4370-depute-73.xml"
    },
    {
      "prenom": "Vincent",
      "nom": "THIÉBAUT",
      "type_mandat": "depute",
      "open_data": "thiebaut-vincent-dia4077-depute-67.xml"
    },
    {
      "prenom": "Virginie",
      "nom": "DUBY-MULLER",
      "type_mandat": "depute",
      "open_data": "duby-muller-virginie-dia3733-depute-74.xml"
    },
    {
      "prenom": "Xavier",
      "nom": "BATUT",
      "type_mandat": "depute",
      "open_data": "batut-xavier-dia3439-depute-76.xml"
    },
    {
      "prenom": "Xavier",
      "nom": "BRETON",
      "type_mandat": "depute",
      "open_data": "breton-xavier-dia3564-depute-01.xml"
    },
    {
      "prenom": "Xavier",
      "nom": "PALUSZKIEWICZ",
      "type_mandat": "depute",
      "open_data": "paluszkiewicz-xavier-dia3969-depute-54.xml"
    },
    {
      "prenom": "Xavier",
      "nom": "ROSEREN",
      "type_mandat": "depute",
      "open_data": "roseren-xavier-dia4037-depute-74.xml"
    },
    {
      "prenom": "Yaël",
      "nom": "BRAUN-PIVET",
      "type_mandat": "depute",
      "open_data": "braun-pivet-yael-dia3562-depute-78.xml"
    },
    {
      "prenom": "Yannick",
      "nom": "FAVENNEC BECOT",
      "type_mandat": "depute",
      "open_data": "favennec-becot-yannick-dia3758-depute-53.xml"
    },
    {
      "prenom": "Yannick",
      "nom": "HAURY",
      "type_mandat": "depute",
      "open_data": "haury-yannick-dia3814-depute-44.xml"
    },
    {
      "prenom": "Yannick",
      "nom": "KERLOGOT",
      "type_mandat": "depute",
      "open_data": "kerlogot-yannick-dia3845-depute-22.xml"
    },
    {
      "prenom": "Yolaine",
      "nom": "DE COURSON",
      "type_mandat": "depute",
      "open_data": "de-courson-yolaine-diam4291-depute-21.xml"
    },
    {
      "prenom": "Yves",
      "nom": "BLEIN",
      "type_mandat": "depute",
      "open_data": "blein-yves-dia3435-depute-69.xml"
    },
    {
      "prenom": "Yves",
      "nom": "DANIEL",
      "type_mandat": "depute",
      "open_data": "daniel-yves-dia3693-depute-44.xml"
    },
    {
      "prenom": "Yves",
      "nom": "JÉGO",
      "type_mandat": "depute",
      "open_data": "jego-yves-dia3832-depute-77.xml"
    },
    {
      "prenom": "Zivka",
      "nom": "PARK",
      "type_mandat": "depute",
      "open_data": "park-zivka-dia3974-depute-95.xml"
    }
  ];

  url: string = 'https://www.nosdeputes.fr';
  constructor(public http: HttpClient) {
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  getHATVP(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }
  // ,
  //   "proxies": [{
  //     "path": "/api",
  //     "proxyUrl": "http://hatvp.fr"
  //   }]

    // return this.http.get('http://localhost:8100/api/livraison/dossiers/' + endpoint, {responseType: 'text'});
    return this.http.get('http://www.hatvp.fr/livraison/dossiers/' + endpoint, {responseType: 'text'});
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }
}
