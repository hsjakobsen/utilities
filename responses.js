export function formatResponse(response) {    
    return {
        success: response.data.success, 
        message: response.data.message,
        data: response.data.data,
    }
}

export function formatError(error) {
    return  { 
        success: false, 
        message: error
    }
}