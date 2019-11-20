import UserType from './User';
type AppUserType = UserType & {
   email: string;
   friends: string[];
}

export default AppUserType;