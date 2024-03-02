import { ResponceData, SuccessData } from '../types';

export const isSuccess = <T extends Record<string, unknown>>(
  data?: ResponceData<T>,
): data is SuccessData<T> => {
  if (!data) return false;
  return data.status === 'ok';
};
