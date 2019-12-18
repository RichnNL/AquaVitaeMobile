

import {GOOGLE_API_KEY} from 'react-native-dotenv';
export const PATH: IPath = {
    Screens: {
        LoggedIn: {
            default: 'Application',
            Home: 'Home',
        },
        LoggedOut: {
            default: 'Authentication',
            Landing: 'Landing',
            Register: 'Register',
        },
    },
    LogoImage: require('../../assets/img/logo.png'),
    TermsofService: 'https://www.iubenda.com/privacy-policy/51508783',
    Icons: {
        FacebookIcon: require('../../assets/img/fbIcon.png'),
        GoogleIcon: require('../../assets/img/googleIcon.png'),
        Barrel: require('../../assets/img/barrel.png'),
        Distil: require('../../assets/img/distil.png'),
        Fermation: require('../../assets/img/fermation.png'),
        Glass: require('../../assets/img/glass.png'),
        Logo: require('../../assets/img/logo.png'),
        Wheat: require('../../assets/img/wheat.png'),
        Bottle: require('../../assets/img/whisky.png'),
        Monk: require('../../assets/img/monk.png'),
        Location: require('../../assets/img/location.png')
    },
    Backgrounds: {
        BlueGradient: require('../../assets/img/backgroundBlueGradient.png'),
        BrownGradient: require('../../assets/img/backgroundBrownGradient.png'),
        IcecubeGraient: require('../../assets/img/Icecubebackground.png'),
        IcecubeGraientPushed: require('../../assets/img/IcecubebackgroundPushed.png'),
    },
    Regions: {
        campbeltTown: require('../../assets/img/campbelttown.png'),
        canada:  require('../../assets/img/canada.png'),
        highlands:  require('../../assets/img/highlands.png'),
        ireland:  require('../../assets/img/ireland.png'),
        islandOfMull:  require('../../assets/img/island_of_mull.png'),
        islay:  require('../../assets/img/islay.png'),
        isleOfArran: require('../../assets/img/isle_of_arran.png'),
        isleOfJura:  require('../../assets/img/isle_of_jura.png'),
        isleOfLewisAndHarris: require('../../assets/img/isle_of_lewis_harris.png'),
        isleOfSkype:  require('../../assets/img/isle_of_skype.png'),
        japan:  require('../../assets/img/japan.png'),
        kentucky:  require('../../assets/img/kentucky.png'),
        lowlands:  require('../../assets/img/lowlands.png'),
        orkney:  require('../../assets/img/orkney.png'),
        speyside:  require('../../assets/img/speyside.png'),
        tennessee:  require('../../assets/img/tennessee.png')
    },
    APIs: {
        googlePlaces(searchText: string, language: string, lat: number, long: number) {
            const api = 
            'https://maps.googleapis.com/maps/api/place/autocomplete/json?'
            + 'input=' + searchText 
            + '&types=(cities)' 
            + '&language=' + language
            + '&key=' + GOOGLE_API_KEY 
            + '&location=' + lat + ',' + long
            + '&radius=12000'
            + '&rankby=distance'
            ;
            return api;
        },
        googleSearch(language: string, lat: number, long: number) {
            const api = 
            'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
            + 'type=address'
            + '&location=' + lat + ',' + long 
            + '&language=' + language
            + '&key=' + GOOGLE_API_KEY 
            + '&radius=20'
            ;
            return api;
        },
        googleDetails(language: string, placeId: string) {
            const api =
            'https://maps.googleapis.com/maps/api/place/details/json?'
            + '&fields=address_component'
            + '&place_id=' + placeId
            + '&language=' + language
            + '&key=' + GOOGLE_API_KEY 
            ;

            return api;

        }
    }
}

export interface IPath {
    Screens: {
        LoggedIn: {
            default: string;
            Home: string;
        }
        LoggedOut: {
            default: string;
            Landing: string;
            Register: string;
        }
    },
    LogoImage: string;
    TermsofService: string;
    Icons: {
        FacebookIcon: any;
        GoogleIcon: any;
        Barrel: any;
        Distil: any;
        Fermation: any;
        Glass: any;
        Logo: any;
        Wheat: any;
        Bottle: any;
        Monk: any;
        Location: any;
    },
    Backgrounds: {
        BlueGradient: any;
        BrownGradient: any;
        IcecubeGraient: any;
        IcecubeGraientPushed: any;
    },
    Regions: {
        campbeltTown: string;
        canada:  string;
        highlands:  string;
        ireland: string;
        islandOfMull:  string;
        islay:  string;
        isleOfArran: string;
        isleOfJura:  string;
        isleOfLewisAndHarris: string;
        isleOfSkype:  string;
        japan:  string;
        kentucky: string;
        lowlands:  string;
        orkney:  string;
        speyside:  string;
        tennessee:  string;
    },
    APIs: {
        googlePlaces: (city: string, language: string, lat: number, long: number)=> any;
        googleSearch: (language: string, lat: number, long: number) => any;
        googleDetails: (language: string, placeId: string) => any;
    }
}

export default PATH;