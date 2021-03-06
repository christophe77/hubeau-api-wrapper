import { HubeauResponse } from '../types/communs';
import { ChroniquesParams, ReferentielOuvragesParams, ReferentielPointsPrelevementParams } from '../types/prelevements';
declare const prelevements: {
    chroniques: (params?: ChroniquesParams | undefined) => Promise<HubeauResponse>;
    chroniquesCsv: (params?: ChroniquesParams | undefined) => Promise<string>;
    referentielOuvrages: (params?: ReferentielOuvragesParams | undefined) => Promise<HubeauResponse>;
    referentielOuvragesCsv: (params?: ReferentielOuvragesParams | undefined) => Promise<string>;
    referentielPointsPrelevement: (params?: ReferentielPointsPrelevementParams | undefined) => Promise<HubeauResponse>;
    referentielPointsPrelevementCsv: (params?: ReferentielPointsPrelevementParams | undefined) => Promise<string>;
};
export default prelevements;
