import React, { useState, useEffect } from 'react';
import {Keyboard, Text, View} from "react-native";
import { ScreenNameInput } from '../../components/Input/ScreenNameInput';
import { useAuthenticationStore } from '../../state/stores/Authentication';
import BackgroundView from '../../components/Views/BackgroundView';
import CountryPicker from '../../components/Picker/CountryPicker';
import Avatar from '../../components/Images/Avatar';
import { percentWidth } from '../../util/Measurements';
import {Row, Grid } from "react-native-easy-grid";
import { StyledHeaderText, StyledText } from '../../styles/components/StyledText';
import { useLanguageStore } from '../../state/stores/Language';
import { StyledColCenterView } from '../../styles/components/StyledView';
import { MottoInput } from '../../components/Input/MottoInput';
import PATH from '../../constants/pathData';
import CountryDropDown from '../../components/Picker/CountryDropDown';
import { CountryType } from '../../constants/countries';
import countries ,{countriesData, popularCountriesData} from '../../constants/countries';
import { Colors } from '../../styles/theme/colors';
import CityPicker from '../../components/Picker/CityPicker';
import CountryWheelPicker from '../../components/Picker/CountryWheelPicker';
import useKeyboard from '../../util/Hooks/useKeyboard';
import useBackButton from '../../util/Hooks/useBackButton';
import LocationType from '../../types/Misc/LocationType';
import { ButtonAV } from '../../components/Buttons/ButtonAV';
type Props =  {
  navigation: any;
}

const  RegisterScreen: React.FC<Props> = (props) => {
  const authenticationStore = useAuthenticationStore();
  const name = authenticationStore.userName; 
  const source = authenticationStore.picture;
  const avatarSize = percentWidth(30);
  const languageStore = useLanguageStore();
  const [background, setBackground] = useState(PATH.Backgrounds.IcecubeGraient);
  const [selectingCountry, setSelectingCountry] = useState(false);
  const [selectingCity, setSelectingCity] = useState(false);
  const [country, setCountry] = useState<CountryType>(null);
  const [city, setCity] = useState<string | null>(null);
  const [screenName, setScreenName] = useState<string | null>(null);
  const [showWheelPicker, setShowWheelPicker] = useState(false);
  const currentScreen = JSON.stringify(props.navigation.state);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [mottoText, setMottoText] = useState('');
  const _currentLocation = (location: LocationType) => {
    if(location) {
      const country: CountryType = {
        id: 0,
        name: location.country,
        latitude: 0,
        longitude: 0
      };
      setCountry(country);
      if(location.city) {
        setCity(location.city);
      }
    }
  };
  
  const _keyboardEventShow = (event)=> {
    setKeyboardOpen(true);
    setBackground(PATH.Backgrounds.IcecubeGraientPushed);
  };
  const _keyboardEventHide = (event)=> {
    setKeyboardOpen(false);
    setBackground(PATH.Backgrounds.IcecubeGraient);
  };
  
  const _countrySelected = (selectedCountry: CountryType)=> {
   
    if(country && selectedCountry) {
        if(country.name !== selectedCountry.name) {
          setCity(null);
        }
    }
    if(selectedCountry) {
      setCountry(selectedCountry);
    }
    if(selectingCountry) {
      setSelectingCountry(false);
    }
    if(showWheelPicker) {
      setShowWheelPicker(false);
    }
    
    
  };

  const _citySelected = (city: string)=> {
    setCity(city);
    setSelectingCity(false);
  }

  const _screenNameSelected = (screenName: string) => {
      setScreenName(screenName);
  };

  const _submit = ()=> {

  }

  const _handleBackButton = () => {
    if(!keyboardOpen) {
        if(selectingCity) {
        setSelectingCity(false);
      } else if(selectingCountry) {
        setSelectingCountry(false);
      } else if(showWheelPicker) {
        setShowWheelPicker(false);
      } else {
        if(props.navigation.state.routeName === PATH.Screens.LoggedOut.Register) {
          
        }
      }
      return true;
    } else {
      return true;
    }
  }

  useKeyboard(_keyboardEventShow, _keyboardEventHide);
  useBackButton(_handleBackButton);
     return (
     <BackgroundView variant='primary' source={background} styled={false}>
              <Grid>
                <Row size={18}/>
                {selectingCountry ? 
                  <Row size={60}>
                    <CountryDropDown value={country ? country.name : '' } countrySelected={_countrySelected} /> 
                  </Row>
                : null}
                {selectingCity ? 
                  <Row size={60}>
                   <CityPicker country={country} value={city} citySelected={_citySelected}/>
                  </Row>
                : null}
                {keyboardOpen || selectingCity || selectingCountry ? null :
                <Row size={10}>
                  <StyledColCenterView>
                    <StyledHeaderText variant='secondary'>
                      {languageStore.textData.registration.register}
                    </StyledHeaderText>
                  </StyledColCenterView>
                </Row>
                }
                 {keyboardOpen || selectingCity || selectingCountry ? null : <Row size={13}>
                  <StyledColCenterView>
                    <Avatar size={avatarSize} source={source} name={name} />
                  </StyledColCenterView>
                </Row>
                }
                 {keyboardOpen || selectingCity || selectingCountry ? null : <Row size={10} >
                  <StyledColCenterView>
                    <StyledColCenterView size={percentWidth(65)}>
                      <StyledText >
                        {languageStore.textData.registration.welcome}
                        {currentScreen}
                      </StyledText>
                    </StyledColCenterView>
                  </StyledColCenterView>
                </Row>
                }
                 {selectingCountry || selectingCity? null : <Row size={10} >
                  <ScreenNameInput  defaultValid={screenName ? true : false}
                                    validScreenNameSelected={_screenNameSelected}
                                    defaultName={screenName ? screenName : name}/>
                </Row>
                }
                {selectingCountry || selectingCity || showWheelPicker ? null :
                <Row size={selectingCountry ? 35 : 10} >
                  <CountryPicker city={city ? city : ''} 
                   setCurrentLocation={_currentLocation}
                   showCityPicker={(show: boolean)=> setSelectingCity(show)}
                   showPicker={(show: boolean)=> setShowWheelPicker(show)} 
                   showCountryPicker={(show: boolean)=> setSelectingCountry(show)} 
                   country={country ? country.name : '' } /> 
                </Row> 
                }
                {selectingCountry || selectingCity ? null : showWheelPicker ?
                <Row size={35} > 
                  <View style={{marginTop: 15 ,alignItems: 'center', flex: 1}} >
                    <CountryWheelPicker countrySelected={_countrySelected} />
                  </View>
                </Row>
                  :
                <Row size={15} > 
                  <MottoInput 
                    defaultValue={mottoText ? mottoText : ''}
                    setMottoText={(text: string)=> setMottoText(text)}/>
                </Row>
                }
                {!keyboardOpen ? null : 
                <Row size={55}/>
                }
                {selectingCountry || selectingCity ? <Row size={12}/> : 
                <Row size={10}>
                  {screenName && country ?
                  <StyledColCenterView>
                      <ButtonAV onPress={_submit} title={languageStore.textData.registration.submit}/>
                  </StyledColCenterView>
                   :
                  null}
                </Row> 
                }
                </Grid>
            </BackgroundView>  
          )
  }

  RegisterScreen.defaultProps = {
    
  };

  export default RegisterScreen;