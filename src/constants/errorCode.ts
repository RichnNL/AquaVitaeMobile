import PATH from "./pathData"

const ERRORCODE: ErrorCodeType = {
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
       screenNameLength: {
          code: -21,
          message: 'screenNameIncorrectLength'
       },
       screenNameBeginSytax: {
         code: -22,
          message: 'mustBeginWithLetters'
       },
       mottoLength: {
         code: -23,
         message: 'mottoTooLong'
      },
      mottoHasSpecialChars: {
         code: -24,
         message: 'mottoContainsSpecialCharacters'
      },
      screenNameContainsSpeicalChars: {
         code: -25,
         message: 'containsSpecialCharacters'
      }
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

export type ErrorCodeType = {
   authentication: {
      isCanceled: ErrorType
      noAccessToken: ErrorType,
      loginFailed: ErrorType,
      loggedOut: ErrorType,
      newUser: ErrorType
    },
    register: {
      screenNameTooShort: ErrorType,
      screenNameLength: ErrorType,
      screenNameBeginSytax: ErrorType,
      mottoLength: ErrorType,
      mottoHasSpecialChars: ErrorType,
      screenNameContainsSpeicalChars: ErrorType
    },
    database: {
      write: ErrorType,
      countIsZero: ErrorType,
      read: ErrorType
    },
}

export type ErrorType = {
   code: number;
   message: string;
}

export const getCodeMessage = (code: number, Error: Object = ERRORCODE) => {
   let message = ''; 
   try {
      if(Error.hasOwnProperty('code') && Error['code'] === code ) {
         message = Error['message'];
      } else {
         const keys = Object.keys(Error);
         for(let i = 0; i < keys.length; i++) {
            if(keys[i] !== undefined ||keys[i] !== null) {
               const children = Object.keys(Error[keys[i]]);
               if(children.length > 0) {
                  message += getCodeMessage(code, Error[keys[i]]);
               } else {
                  return;
               }
            }
         }
      }
   } catch {
      return '';
   } finally {
      return message;
   }
}

export default ERRORCODE;