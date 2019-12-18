import React, {Fragment} from 'react';
import PATH from '../../constants/pathData';
import {Container} from '../../styles/components/StyledView';
import StyledStatusBar from '../../styles/components/StyledStatusBar';
import VariantType from '../../types/style/Variant';
import {StyledImageBackground} from '../../styles/components/StyledBackground';
import { ImageBackground } from 'react-native';
type Props  = VariantType & {
  source?: any,
  styled?: boolean,
}


const  BackgroundView: React.FC<Props> = (props) => { 
  return (
        <Fragment>
            <StyledStatusBar variant={props.variant}/>
            {props.source ? 
            ( props.styled ? 
                (<StyledImageBackground source={props.source}>
                  {props.children}
                </StyledImageBackground> ) :
                (<ImageBackground source={props.source} style={{width: '100%', height: '100%'}}>
                   {props.children}
                </ImageBackground>)
                
            ) : (
              <Container variant={props.variant}>
                {props.children}
              </Container>
            )}
                
        </Fragment>   )
  }

  BackgroundView.defaultProps = {
    variant: 'primary',
    styled: true
  };

  export default BackgroundView;