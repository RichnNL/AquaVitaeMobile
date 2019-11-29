import React, { useEffect, useState } from 'react';
import  createStatusStore  from '../stores/Status/StatusStore';
import StatusContext from '../context/StatusContext';
import Modal from 'react-native-modal';
import { useAuthenticationStore } from '../stores/Authentication';
import useDatabaseStore from '../hooks/DatabaseHook';
import Loading from '../../components/Images/Loading';
import { StyledCenterView } from '../../styles/components/StyledView';
import { useObserver } from 'mobx-react';


export interface IStatusProvider {
  children?: React.ReactNode | any; 
}

export const StatusProvider: React.FC<IStatusProvider> = ({children}) => { 
    const [StatusStore, setStatusStore] =  useState(createStatusStore);
    const authStore = useAuthenticationStore();
    const dataStore = useDatabaseStore();
    useEffect(()=> {
        if(authStore.isLoading|| dataStore.isLoading) {
            setStatusStore({loading: true})
        } else {
            setStatusStore({loading: false})
        }
  }, [authStore.isLoading,  dataStore.isLoading]);

  return useObserver(() => {
    return  <StatusContext.Provider value={StatusStore}>
      {authStore.isLoading || dataStore.isLoading || StatusStore.loading ? (
        <Modal
          isVisible={StatusStore.loading}
          backdropColor="#FFFFFF"
          animationIn="zoomIn"
          animationInTiming={50}
          animationOutTiming={600}
          animationOut="zoomOut"
          backdropOpacity={0.0}
        >
        <StyledCenterView>
          <Loading/>
        </StyledCenterView>
      </Modal>
       
      ) : (
        null
      )}
    {children}
  </StatusContext.Provider>
 });
}

export default StatusProvider;