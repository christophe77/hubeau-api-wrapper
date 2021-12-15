import { entryPoints } from '../constants';
import getRequest from '../http';
import { objectToStringParameters } from '../utils/utils';
import {
  CommunesParams,
  IndicateursParams,
  ServicesParams
} from '../types/indicateursServices';

const indicateursServices = () => {
  return {
    communes: async (params?: CommunesParams): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.indicateursServices,
        `/communes?${formattedParams}`,
      );
      return datas;
    },
    communesCsv: async (params?: CommunesParams): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.indicateursServices,
        `/communes.csv?${formattedParams}`,
      );
      return datas;
    },
    indicateurs: async (params?: IndicateursParams): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.indicateursServices,
        `/indicateurs?${formattedParams}`,
      );
      return datas;
    },
    indicateursCsv: async (params?: IndicateursParams): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.indicateursServices,
        `/indicateurs.csv?${formattedParams}`,
      );
      return datas;
    },
    services: async (params?: ServicesParams): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.indicateursServices,
        `/services?${formattedParams}`,
      );
      return datas;
    },
    servicesCsv: async (params?: ServicesParams): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.indicateursServices,
        `/services.csv?${formattedParams}`,
      );
      return datas;
    },
  };
};

export default indicateursServices;