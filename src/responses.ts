export function formatResponse(response:any) {
  return {
    success: response.data.success,
    message: response.data.message,
    data: response.data.data,
  };
}

export function formatError(error:any) {
  return {
    success: false,
    message: error,
  };
}
