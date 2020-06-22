export function formatResponse(message: string, success: boolean, data?: any, extraData?: any): IResponse {
  const response: IResponse = {
    data,
    extraData,
    message,
    success,
  };

  return response;
}

export function formatError(error: string): IResponse {
  const response: IResponse = {
    message: error,
    success: false,
  };

  return response;
}

export interface IResponse {
  message: string;
  success: boolean;
  data?: any;
  extraData?: any;
}
