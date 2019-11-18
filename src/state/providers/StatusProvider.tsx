import React, { useEffect, useState } from 'react';
import  createStatusStore  from '../stores/Status/StatusStore';
import StatusContext from '../context/StatusContext';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import { View, Image } from 'react-native';
import { useAuthenticationStore } from '../stores/Authentication';
import useDatabaseStore from '../hooks/DatabaseHook';


export interface IStatusProvider {
  children?: React.ReactNode | any; 
}

export const StatusProvider: React.FC<IStatusProvider> = ({children}) => { 
    const [StatusStore, setStatusStore] =  useState(createStatusStore);
    const authenticationLoading = useAuthenticationStore().isLoading;
    const dataLoading = useDatabaseStore().isLoading;
    useEffect(()=> {
        if(authenticationLoading || dataLoading) {
            setStatusStore({loading: true})
        } else {
            setStatusStore({loading: false})
        }
  }, [authenticationLoading, dataLoading]);

  return  (
    <StatusContext.Provider value={StatusStore}>
        <OrientationLoadingOverlay
          visible={StatusStore.loading}
          >
          <View>
            <Image
              source={require('../../../assets/img/bottle_breath.svg')}
              />
          </View>
        </OrientationLoadingOverlay>
          {children}
    </StatusContext.Provider>
  
  )
}

export default StatusProvider;