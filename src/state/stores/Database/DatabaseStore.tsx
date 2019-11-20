import Firebase from '../../../services/Firebase/Firebase';
import LocalStorage from '../../../util/LocalStorage';
import {STORAGEKEY} from '../../../constants/storageKey';
import UserType from '../../../types/Users/User';




export interface IDatabaseStore  {
 isLoading: boolean;
}

export interface IDatabase  {
  registerUser(user: UserType): Promise<number>;
  updateScreenName(screenName: string): Promise<number>;
  searchScreenName(searchName: string, maxCount: number): Promise<UserType[]>;
}

//const database: IDatabase = Firebase;

const DatabaseStore: IDatabaseStore =  {
  isLoading: false,
}

const createDatabaseStore = () => {
  const store = {
    ...DatabaseStore
  };

  return store;
};

export default createDatabaseStore;
export type DatabaseStoreType = ReturnType<typeof createDatabaseStore>;



