const ERRORCODE = {
   authentication: {
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
         loggedOut: {
            code: -40,
            message: 'Please Log in'
         },
         newUser: {
            code: 2,
            message: 'New User'
         }
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
       },
       countIsZero: {
          code: -40,
          message: 'No items found'
       },
       read: {
          code: -50,
          message: 'Error reading database'
       }
    },
}

export default ERRORCODE;