import Firebase from '../../../services/Firebase/Firebase';
import LocalStorage from '../../../util/LocalStorage';
import {STORAGEKEY} from '../../../constants/storageKey';
import User from '../../../types/Users/User';




export interface IDatabaseStore  {
 
}

export interface IDatabase  {
  registerUser(user: User): Promise<number>;
  updateScreenName(screenName: string): Promise<number>;
}

//const database: IDatabase = Firebase;

const DatabaseStore: IDatabaseStore =  {

}

const createDatabaseStore = () => {
  const store = {
    ...DatabaseStore
  };

  return store;
};

export default createDatabaseStore;
export type DatabaseStoreType = ReturnType<typeof createDatabaseStore>;



