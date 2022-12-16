import { Format, Sort } from './communs';
export type AnalysePcParams = {
    code_station?: string[];
    libelle_station?: string[];
    code_parametre?: string[];
    libelle_parametre?: string[];
    code_groupe_parametres?: string[];
    nom_groupe_parametres?: string[];
    code_support?: string[];
    libelle_support?: string[];
    code_commune?: string[];
    libelle_commune?: string[];
    code_departement?: string[];
    libelle_departement?: string[];
    code_region?: string[];
    libelle_region?: string[];
    code_cours_eau?: string[];
    nom_cours_eau?: string[];
    code_bassin_dce?: string[];
    nom_bassin_dce?: string[];
    code_sous_bassin?: string[];
    nom_sous_bassin?: string[];
    bbox?: number[];
    size?: number;
    field?: string;
    page?: number;
    date_debut_prelevement?: string;
    date_fin_prelevement?: string;
    longitude?: number;
    latitude?: number;
    distance?: number;
    sort?: Sort;
};
export type StationPcParams = {
    code_station?: string[];
    libelle_station?: string[];
    code_parametre?: string[];
    libelle_parametre?: string[];
    code_groupe_parametres?: string[];
    nom_groupe_parametres?: string[];
    code_support?: string[];
    libelle_support?: string[];
    code_commune?: string[];
    libelle_commune?: string[];
    code_departement?: string[];
    libelle_departement?: string[];
    code_region?: string[];
    libelle_region?: string[];
    code_cours_eau?: string[];
    nom_cours_eau?: string[];
    code_bassin_dce?: string[];
    nom_bassin_dce?: string[];
    code_sous_bassin?: string[];
    nom_sous_bassin?: string[];
    bbox?: number[];
    size?: number;
    field?: string;
    page?: number;
    date_debut_prelevement?: string;
    date_fin_prelevement?: string;
    longitude?: number;
    latitude?: number;
    distance?: number;
    sort?: Sort;
    exact_count?: boolean;
    format?: Format;
};
export type OperationPcParams = {
    code_station?: string[];
    libelle_station?: string[];
    code_parametre?: string[];
    libelle_parametre?: string[];
    code_groupe_parametres?: string[];
    nom_groupe_parametres?: string[];
    code_support?: string[];
    libelle_support?: string[];
    code_commune?: string[];
    libelle_commune?: string[];
    code_departement?: string[];
    libelle_departement?: string[];
    code_region?: string[];
    libelle_region?: string[];
    code_cours_eau?: string[];
    nom_cours_eau?: string[];
    code_bassin_dce?: string[];
    nom_bassin_dce?: string[];
    code_sous_bassin?: string[];
    nom_sous_bassin?: string[];
    bbox?: number[];
    size?: number;
    field?: string;
    page?: number;
    date_debut_prelevement?: string;
    date_fin_prelevement?: string;
    longitude?: number;
    latitude?: number;
    distance?: number;
    sort?: Sort;
    exact_count?: boolean;
    format?: Format;
};
export type ConditionEnvironnementaleParams = {
    code_station?: string[];
    libelle_station?: string[];
    code_parametre?: string[];
    libelle_parametre?: string[];
    code_groupe_parametres?: string[];
    nom_groupe_parametres?: string[];
    code_support?: string[];
    libelle_support?: string[];
    code_commune?: string[];
    libelle_commune?: string[];
    code_departement?: string[];
    libelle_departement?: string[];
    code_region?: string[];
    libelle_region?: string[];
    code_cours_eau?: string[];
    nom_cours_eau?: string[];
    code_bassin_dce?: string[];
    nom_bassin_dce?: string[];
    code_sous_bassin?: string[];
    nom_sous_bassin?: string[];
    bbox?: number[];
    size?: number;
    field?: string;
    page?: number;
    date_debut_prelevement?: string;
    date_fin_prelevement?: string;
    longitude?: number;
    latitude?: number;
    distance?: number;
    sort?: Sort;
    exact_count?: boolean;
    format?: Format;
};
