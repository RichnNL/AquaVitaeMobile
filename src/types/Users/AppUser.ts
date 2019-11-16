import User from './User';
type AppUser = User & {
   email: string;
   friends: string[];
}

export default AppUser;