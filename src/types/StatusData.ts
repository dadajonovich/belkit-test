export type StatusData<T extends Record<string, unknown> = {}> = {
  status: 'ok';
} & T;
