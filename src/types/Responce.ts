export type SuccessData<T extends Record<string, unknown> = {}> = {
  status: 'ok';
} & T;

export type ErrorData = {
  status: unknown;
};

export type ResponceData<T extends Record<string, unknown> = {}> =
  | SuccessData<T>
  | ErrorData;
