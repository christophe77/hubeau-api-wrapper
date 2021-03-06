# HUBEAU API wrapper

HUBEAU API wrapper JS.<br/>

Wrapper de l'api Hubeau en typescript.<br />
Fonctionne dans tout type d'application javascript.<br />

Plus d'infos sur l'API HUBEAU : https://hubeau.eaufrance.fr/page/apis<br/>

## Installation

    yarn add hubeau-api

ou <br />

    npm install --save hubeau-api

ensuite importation de la dépendance : <br />

ESM :<br />

    import { hydrometrie, etatPiscicole , ... } from "hubeau-api";

CommonJs : <br />

    const hubeauApi = require('hubeau-api');

## Commandes disponibles

### Etat piscicole

_code espèce poisson_<br/>
_lieux pêche_<br/>
_poissons_<br/>

Exemples :<br/>
CommonJS : [./exemples/cjs/etatPiscicole.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/cjs/etatPiscicole.js)<br/>
ESM : [./exemples/esm/etatPiscicole.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/esm/etatPiscicole.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-poisson<br/>

### Indicateurs services

_communes_<br/>
_indicateurs_<br/>
_services_<br/>

Exemples :<br/>
CommonJS : [./exemples/cjs/indicateursServices.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/cjs/indicateursServices.js)<br/>
ESM : [./exemples/esm/indicateursServices.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/esm/indicateursServices.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-indicateurs-services<br/>

### Piezométrie - Niveaux nappes

_chroniques_<br/>
_chroniques temps réel_<br/>
_stations_<br/>

Exemples :<br/>
CommonJS : [./exemples/cjs/piezometrie.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/cjs/piezometrie.js)<br/>
ESM : [./exemples/esm/piezometrie.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/esm/piezometrie.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-piezometrie<br/>

### Qualité nappes

_analyses_<br/>
_stations_<br/>

Exemples :<br/>
CommonJS : [./exemples/cjs/qualiteNappes.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/cjs/qualiteNappes.js)<br/>
ESM : [./exemples/esm/qualiteNappes.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/esm/qualiteNappes.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-qualite-nappes<br/>

### Qualité cours d'eau

_analyse physicochimique_<br/>
_station physicochimique_<br/>
_operation physicochimique_<br/>
_conditions environnementales physicochimique_<br/>

Exemples :<br/>
CommonJS : [./exemples/cjs/qualiteRivieres.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/cjs/qualiteRivieres.js)<br/>
ESM : [./exemples/esm/qualiteRivieres.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/esm/qualiteRivieres.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-qualite-cours-deau<br/>

### Température des cours d'eau en continu

_chronique_<br/>
_station_<br/>

Exemples :<br/>
CommonJS : [./exemples/cjs/temperature.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/cjs/temperature.js)<br/>
ESM : [./exemples/esm/temperature.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/esm/temperature.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-temperature-continu<br/>

### Hydrométrie

_observations_<br/>
_observations élaborées_<br/>
_référentiel sites_<br/>
_référentiel stations_<br/>

Exemples :<br/>
CommonJS : [./exemples/cjs/hydrometrie.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/cjs/hydrometrie.js)<br/>
ESM : [./exemples/esm/hydrometrie.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/esm/hydrometrie.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-hydrometrie<br/>

### Prélèvements en eau

_chroniques_<br/>
_référentiel ouvrages_<br/>
_référentiel points de prélèvement_<br/>

Exemples :<br/>
CommonJS : [./exemples/cjs/prelevements.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/cjs/prelevements.js)<br/>
ESM : [./exemples/esm/prelevements.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/esm/prelevements.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-prelevements-eau<br/>

### Hydrobiologie

_indices_<br/>
_stations hydrobiologie_<br/>
_taxons_<br/>

Exemples :<br/>
CommonJS : [./exemples/cjs/hydrobio.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/cjs/hydrobio.js)<br/>
ESM : [./exemples/esm/hydrobio.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/esm/hydrobio.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-hydrobiologie<br/>

### Surveillance du Littoral

_contaminants chimiques_<br/>
_lieux de surveillance_<br/>

Exemples :<br/>
CommonJS : [./exemples/cjs/surveillanceLittoral.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/cjs/surveillanceLittoral.js)<br/>
ESM : [./exemples/esm/surveillanceLittoral.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/esm/surveillanceLittoral.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-surveillance-littoral<br/>

### Qualité Eau Potable

_communes et UDI_<br/>
_résultats_<br/>

Exemples :<br/>
CommonJS : [./exemples/cjs/qualiteEauPotable.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/cjs/qualiteEauPotable.js)<br/>
ESM : [./exemples/esm/qualiteEauPotable.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/esm/qualiteEauPotable.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-qualite-eau-potable<br/>
