import React, { useState } from 'react';
import { useLanguageStore } from '../../state/stores/Language';
import countries ,{countriesData, CountryType} from '../../constants/countries';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { StyledColCenterView, StyledRowCenterView } from '../../styles/components/StyledView';
import { Colors } from '../../styles/theme/colors';
type Props = {
   countrySelected: (country: CountryType )=> any;
   value: string;
}


const  CountryDropDown: React.FC<Props> = (props) => { 
 const languageStore = useLanguageStore();
      return (
        <StyledRowCenterView border={true}>
              <SearchableDropdown
                multi={false}
                onItemSelect={(item) => {
                  const country = countries.find(value => value!.id === item!.id );
                  if(country) {
                      props.countrySelected(country);
                  }
                }}
                containerStyle={{ padding: 5,  
                  alignSelf: 'flex-start', 
                  flex: 1
                   }}
                itemStyle={{
                  padding: 2,
                  marginTop: 2,
                  color: Colors.text.default,
                  borderColor: '#bbb',
                  borderWidth: 1,
                }}
                itemTextStyle={{ color: Colors.text.default }}
                itemsContainerStyle={{ height: '100%' }}
                items={countriesData}
                defaultIndex={0}
                chip={true}
                resetValue={false}
                textInputProps={
                  {
                    placeholder: languageStore.textData.registration.country,
                    underlineColorAndroid: Colors.primary.default,
                    style: {
                        padding: 2,
                    },
                    defaultValue: props.value,
                    autoFocus: true,
                  }
                }
                listProps={
                  {
                    nestedScrollEnabled: false,
                    backgroundColor: Colors.light.light,
                  }
                }
              />
        </StyledRowCenterView>
     
      )
    }

    CountryDropDown.defaultProps = {
    
};

  export default CountryDropDown;