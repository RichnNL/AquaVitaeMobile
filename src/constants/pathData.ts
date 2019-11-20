

export const PATH: IPath = {
    Landing: 'Landing',
    Home: 'Home',
    Register: 'Register',
    LogoImage: require('../../assets/img/logo.png'),
    TermsofService: 'https://www.iubenda.com/privacy-policy/51508783',
    FacebookIcon: require('../../assets/img/fbIcon.jpg'),
    GoogleIcon: require('../../assets/img/googleIcon.jpg'),
}

export interface IPath {
    Landing: string;
    Home: string;
    Register: string;
    LogoImage: string;
    TermsofService: string;
    FacebookIcon: any;
    GoogleIcon: any;
}

export default PATH;