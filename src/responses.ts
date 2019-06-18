export function formatResponse(response: any) {
  return {
    data: response.data.data,
    message: response.data.message,
    success: response.data.success,
  };
}

export function formatError(error: any) {
  return {
    message: error,
    success: false,
  };
}
