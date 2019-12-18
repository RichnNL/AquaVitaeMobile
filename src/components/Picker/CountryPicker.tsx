import React, { useState, useEffect } from 'react';
import { useLanguageStore } from '../../state/stores/Language';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { StyledColCenterView, StyledRowCenterView } from '../../styles/components/StyledView';
import {Text, TextInput, View} from 'react-native';
import { Colors } from '../../styles/theme/colors';
import { StyledValidationText, StyledSubText } from '../../styles/components/StyledText';
import { normalizeText } from '../../util/Measurements';
import AutoLocation from './AutoLocation';
import LocationType from '../../types/Misc/LocationType';
type Props = {
   showCountryPicker: (extended: boolean)=> any;
   country: string;
   showPicker: (show: boolean) => any;
   city?: string | null;
   showCityPicker: (show: boolean)=> any;
   setCurrentLocation: (location: LocationType) => any;
   
}


const  CountryPicker: React.FC<Props> = (props) => { 
 const languageStore = useLanguageStore();
 const [countryFontSize, setCountryFontSize] = useState(15);
 const [cityFontSize, setCityFontSize] = useState(15);
 useEffect(()=> {
  if(props.country){
    if(props.country.length < 12) {
      setCountryFontSize(15);
    }else if (props.country.length >= 12 && props.country.length < 18  ) {
      setCountryFontSize(13); 
    } else {
      setCountryFontSize(10);
    }
  }

  if(props.city) {
    if(props.city.length < 7) {
      setCityFontSize(15);
    }
    else if(props.city.length >= 7 && props.city.length < 12) {
      setCityFontSize(12);
    } else {
      setCityFontSize(10);
    }
  }
 }, [props.country, props.city])
 

 const fontColor = props.country ? Colors.accent.light : Colors.accent.dark;

      return (
        <StyledColCenterView>
        <StyledRowCenterView pos='space-between' border={true}>
          <View style={{flexDirection: 'row', flex: 1,flexGrow: 2}}>
                    <Text style={{marginRight: 0}}> * </Text>
                      <Text
                      style={{color: fontColor,  fontFamily: 'OpenSans',fontSize: normalizeText(countryFontSize),
                      flex: 1 ,padding: 2, borderBottomColor: Colors.primary.default, marginLeft: 0,
                      borderBottomWidth: props.country ? 0 : 1 }}
                      onPress={()=> props.showCountryPicker(true)}>
                      {props.country ? props.country : languageStore.textData.registration.country }
                    </Text>
          </View>
            {props.country ? <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Text
                  style={{color: fontColor,  fontFamily: 'OpenSans',fontSize: normalizeText(cityFontSize),flex: 1 ,padding: 2, 
                  borderBottomColor: Colors.primary.default, 
                  borderBottomWidth: props.country ? 0 : 1  }}
                  onPress={()=> props.showCityPicker(true)}>
                  {props.city ? props.city : languageStore.textData.registration.city }
                </Text>
            </View>
            : null }
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                 <AutoLocation setCurrentLocation={props.setCurrentLocation}/>
            </View>
        </StyledRowCenterView>
      
        <StyledRowCenterView pos='space-between'>
          <Text style={{alignSelf: 'flex-start',flexGrow: 2, flex: 1, fontFamily: 'OpenSans-Italic',  
                        marginLeft: 10, fontSize: normalizeText(10), 
                        }} onPress={()=> props.showPicker(true)}>
            {languageStore.textData.registration.pickHighestDrinkingCountries} 
          </Text>
          {props.country ? <Text style={{alignSelf: 'flex-start',flexGrow: 1, flex: 1, fontFamily: 'OpenSans-Italic',  
                        marginLeft: 10, fontSize: normalizeText(10), 
                        }} >
            {languageStore.textData.registration.optional}  
          </Text>
          : null }
          <Text style={{alignSelf: 'flex-start', flex: 1, fontFamily: 'OpenSans-Italic',  
                        marginRight: 5, fontSize: normalizeText(10), 
                        }} onPress={()=> props.showPicker(true)}>
            {languageStore.textData.registration.useCurrentLocation} 
          </Text>
        </StyledRowCenterView>
      </StyledColCenterView>
      )
    }

    CountryPicker.defaultProps = {
    
};

  export default CountryPicker;