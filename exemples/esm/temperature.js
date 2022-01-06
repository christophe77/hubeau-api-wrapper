import { temperature } from '../../dist/esm';

async function chronique() {
  const params = {
    nom_cours_eau: ['odet'],
    date_debut_prelevement: '2021-05-30',
    size: 5,
    sort: 'asc',
  };
  try {
    const results = await temperature.chronique(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function chroniqueCsv() {
  const params = {
    nom_cours_eau: ['odet'],
    date_debut_prelevement: '2021-05-30',
    size: 5,
    sort: 'asc',
  };
  try {
    const results = await temperature.chroniqueCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function station() {
  const params = {
    libelle_region: ['bretagne'],
    date_debut_prelevement: '2021-05-30',
    size: 1,
  };
  try {
    const results = await temperature.station(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function stationCsv() {
  const params = {
    libelle_region: ['bretagne'],
    date_debut_prelevement: '2021-05-30',
    size: 1,
  };
  try {
    const results = await temperature.stationCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
