
import UserType from '../../../types/Users/User';
import Firebase from '../../../services/Firebase/Firebase';
import RULES from '../../../constants/rules';

const database: IDatabase = Firebase;


export interface IDatabaseStore  {
  isLoading: boolean;
  userNameTaken(screenName: string): Promise<boolean>;
}

export interface IDatabase  {
  registerUser(user: UserType): Promise<number>;
  updateScreenName(screenName: string): Promise<number>;
  searchScreenName(searchName: string, maxCount: number): Promise<UserType[]>;
}

//const database: IDatabase = Firebase;

const DatabaseStore: IDatabaseStore =  {
  isLoading: false,
  async userNameTaken(screenName: string) {
    try {
      const names = await database.searchScreenName(screenName, 1);
      if(names && names.length === 0) {
        return false;
      } else {

        return true;
      }

    } catch {
        return true;
    }
    
  }
}

const createDatabaseStore = () => {
  const store = {
    ...DatabaseStore
  };

  return store;
};

export default createDatabaseStore;
export type DatabaseStoreType = ReturnType<typeof createDatabaseStore>;



