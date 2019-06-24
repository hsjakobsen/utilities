export function formatResponse(message:string, success:boolean, data:any, extraData:any) {
  let response:IResponse = {
    message,
    success,   
  }

  if (data !== undefined) {
    response.data = data;
  }

  if (extraData !== undefined) {
    response.extraData = extraData;
  }

  return response;
}

export function formatError(error: any) {
  const response:IResponse = {
    message: error,
    success: false,
  }

  return response;  
}

export interface IResponse { 
  data?:any, 
  extraData?:any,
  message:string, 
  success:boolean, 
} 