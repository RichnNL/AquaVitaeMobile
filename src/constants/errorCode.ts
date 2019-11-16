const ERRORCODE = {
    signIn: {
        isCanceled: {
           code: -10,
           message: 'User canceled sign in process' 
        },
        noAccessToken: {
            code: -11,
            message: 'Failed to acquire access token' 
         },
         loginFailed: {
            code: 0,
            message: 'Login failed' 
         },
    },
    register: {
       screenNameTooShort: {
          code: -20,
          message: 'Provide a longer screen name'
       },
    },
    database: {
       write: {
          code: -30,
          message: 'Error writing to database'
       }
    },
    authentication: {
       loggedOut: {
          code: -40,
          message: 'Please Log in'
       }
    }
}

export default ERRORCODE;