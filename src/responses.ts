export function formatResponse(
  message: string,
  success: boolean,
  data?: any,
  extraData?: any,
) {
  const response: IResponse = {
    data,
    extraData,
    message,
    success,
  };

  return response;
}

export function formatError(error: string) {
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
