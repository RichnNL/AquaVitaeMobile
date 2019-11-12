const ERRORCODE = {
    signIn: {
        isCanceled: {
           code: -10,
           message: 'User canceled sign in process' 
        },
        noAccessToken: {
            code: -20,
            message: 'Failed to acquire access token' 
         },
         loginFailed: {
            code: 0,
            message: 'Login failed' 
         },
    }
}

// export type ErrorCodeFormatType = {
//     code: number[],
//     message: string[],
// }

// export type ErrorCodeType = {
//     signIn: ErrorCodeFormatType
// }

const error = {

}

export default ERRORCODE;