import React, { useState, useEffect } from 'react';
import { useLanguageStore } from '../../state/stores/Language';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { CountryType } from '../../constants/countries';
import { StyledRowCenterView } from '../../styles/components/StyledView';
import { Colors } from '../../styles/theme/colors';
import retrieveCities from '../../util/API/GooglePlacesAutoComplete';
import SearchableDropDownItemType from '../../types/Misc/SearchableDropDownItem';
import Validation from '../../util/Validation';


type Props = {
    citySelected: (city: string)=> any;
    value: string | null;
    country: CountryType;
 }

const CityPicker: React.FC<Props> = (props)=> {
    useEffect(()=> {
      return ()=> {
        if(timeout) {
          clearTimeout(timeout);
        }
      }
    }, []);
    const language = useLanguageStore();
    const [cities, setCities] = useState<SearchableDropDownItemType[]>([]);
    const [timeout, setTimeOutState] = useState<any>(null);
    const [valid, setValid] = useState(true);
    const validator = Validation;
    const autoCompleteCities = (text: string) => {
          if(timeout) {
            clearTimeout(timeout);
          }
          const time = timeout ? 400 : 0;
          setValid(validator.containsOnlyLetters(text))
          if(valid) {
            const timeOut = setTimeout(async ()=> {
              const results: SearchableDropDownItemType[] = await retrieveCities(text, language.currentLang.slice(0,2), props.country!.latitude,
              props.country!.longitude);
              if(results.length > 0) {
                setCities(results);
              }
              }, time);
            setTimeOutState(timeOut);
          }
          
    }
  return (
    <StyledRowCenterView border={true}>
    <SearchableDropdown
      multi={false}
      onItemSelect={(item) => {
        props.citySelected(item.name);
      }}
      containerStyle={{ padding: 5,  
        alignSelf: 'flex-start', 
        flex: 1,
         }}
      itemStyle={{
        padding: 2,
        marginTop: 2,
        color: Colors.text.default,
        borderColor: '#bbb',
        borderWidth: 1,
      }}
      itemTextStyle={{ color: Colors.text.default }}
      itemsContainerStyle={{ flex: 1 }}
      items={cities}
      defaultIndex={0}
      chip={true}
      resetValue={false}
      textInputProps={
        {
          placeholder: language.textData.registration.city,
          underlineColorAndroid: Colors.primary.default,
          style: {
              padding: 2,
          },
          onTextChange: text => autoCompleteCities(text),
        }
      }
      listProps={
        {
          nestedScrollEnabled: false,
          backgroundColor: valid ? Colors.light.light : Colors.accent.dark,
        }
      }
    />
</StyledRowCenterView>
  );
}

export default CityPicker;