import React, { useState, Fragment, useRef, useCallback } from 'react';
import { useLanguageStore } from '../../state/stores/Language';
import {Text, Image, Picker, TextInput, View, InteractionManager} from 'react-native';
import PATH from '../../constants/pathData';
import { GOOGLE_API_KEY} from 'react-native-dotenv'
import { StyledColCenterView, StyledRowCenterView } from '../../styles/components/StyledView';
import {popularCountries} from '../../constants/countries';
import Geolocation from '@react-native-community/geolocation';
import { StyledSubText } from '../../styles/components/StyledText';
import { TouchableOpacity, State, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Animation from '../../util/Animation';
import colors from '../../styles/theme/colors';
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated from 'react-native-reanimated';
import {onGestureEvent} from 'react-native-redash';
import retrieveCurrentLocation from '../../util/API/GooglePlacesSearchLocation';
import LocationType from '../../types/Misc/LocationType';
import retrieveDetails from '../../util/API/GooglePlaceDetails';
import useStatusStore from '../../state/hooks/StatusHook';
import useDatabaseStore from '../../state/hooks/DatabaseHook';
type Props = {
  setCurrentLocation: (location: LocationType) => any;
 }


const  AutoLocation: React.FC<Props> = (props) => { 
  const source: any = PATH.Icons.Location;
  const size = 30;
  const currentLanguage = useLanguageStore().currentLang.slice(0,2);
  const gestureStateRef = useRef(new Animated.Value<any>(State.UNDETERMINED));
  const loading = useDatabaseStore();
  const onGestureEvent = useCallback(
		Animated.event(
			[{
				nativeEvent: {
					state: gestureStateRef.current
				},
			}],
			{ useNativeDriver: true },
		),
		[],
  );
  


  const backgroundColor = new Animation().getOpacityBounce(350, colors.Colors.primary.default, gestureStateRef.current )
  const setLocation = useCallback(
		() => {
          Geolocation.getCurrentPosition(async (position: any) => {
            loading.isLoading = true;
            const currentLatitube = position.coords.latitude;
              const currentLongitude = position.coords.longitude;
              try {
                const placeID: string | null = await retrieveCurrentLocation(
                  currentLanguage,
                  currentLatitube, 
                  currentLongitude);
                  if(placeID) {
                    const location: LocationType = await retrieveDetails(currentLanguage, placeID);
                    if(location) {
                      props.setCurrentLocation(location);
                    }
                  }
                } catch {
              } finally {
                loading.isLoading = false;
              }
            }
             ,
              error => {
                loading.isLoading = false;
              },
              { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
            );
          },[],
  );
      return (
          <View>
            <TapGestureHandler
            onHandlerStateChange={onGestureEvent}
            minPointers={1} 
           >
             <TouchableWithoutFeedback onPress={setLocation}>
                <Animated.View style={{width: size, height: size, 
                                backgroundColor: backgroundColor,
                                borderRadius: 10,
                                borderColor: colors.Colors.primary.default,
                                }}>
                  <Image 
                    style={{width: size, height: size, }}
                    source={source}/> 
                  </Animated.View>
             </TouchableWithoutFeedback>
              
            </TapGestureHandler>
          </View>
       
              
          
            
      )
    }

    AutoLocation.defaultProps = {
    
};

  export default AutoLocation;