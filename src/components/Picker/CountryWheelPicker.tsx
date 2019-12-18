import React, { useState, useEffect } from 'react';
import { useLanguageStore } from '../../state/stores/Language';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { StyledColCenterView, StyledRowCenterView } from '../../styles/components/StyledView';
import {Text, TextInput, View} from 'react-native';
import { Colors } from '../../styles/theme/colors';
import { StyledValidationText, StyledSubText } from '../../styles/components/StyledText';
import { normalizeText } from '../../util/Measurements';
import AutoLocation from './AutoLocation';
import { WheelPicker} from 'react-native-wheel-picker-android';
import countries ,{countriesData, popularCountriesData, CountryType} from '../../constants/countries';
type Props = {
   countrySelected: (country: CountryType )=> any;
}


const  CountryWheelPicker: React.FC<Props> = (props) => { 
 
      return (
            <WheelPicker 
            isCyclic={true}
            selectedItemTextFontFamily='OpenSans'
            itemTextFontFamily='OpenSans'
            selectedItemTextColor={Colors.accent.light}
            data={popularCountriesData} 
            itemTextSize={24}
            selectedItemTextSize={24}
            onItemSelected={(item)=> {
            const foundCountry = countries.find((value)=> value!.name === popularCountriesData[item]);
            if(foundCountry) {
            props.countrySelected(foundCountry);
            }
            }}/>
      )
    }

    CountryWheelPicker.defaultProps = {
    
};

  export default CountryWheelPicker;