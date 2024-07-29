export const sendRequest = (res, status, success, message) =>{
    res.status(status).json({
        success: success,
        message:message
    })
}