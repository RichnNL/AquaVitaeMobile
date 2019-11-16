import Orientation from  'react-native-orientation-locker';
export interface IThemeStore {
    theme: string;
    layout: string;
    toggleTheme(): any;
    toggleLayout(): any; 
    isPortrait: boolean;
    locked: boolean;
    lockPortrait(lock: boolean): any;
    test: string;
}

const ThemeStore: IThemeStore = {
  test: 'nothing',
  theme: "light",
  layout: "cozy",
  isPortrait: true,
  locked: false,
  lockPortrait(lock: boolean) {
    this.locked = lock;
    if(lock) {
    Orientation.lockToPortrait();
      this.isPortrait = true;
    } else {
      this.locked = false;
    Orientation.unlockAllOrientations();
    } 
  },
  toggleTheme() {
    if(this.theme === "light") {
        this.theme = "dark"
    } else {
        this.theme = "light";
    }
  },
  toggleLayout() {
    if(this.layout === "cozy") {
        this.layout = "compact";
    } else {
        this.layout = "cozy"
    }
  }

}
const createThemeStore = () => {
  const store = {
    ...ThemeStore
  };

  return store;
};

export default createThemeStore;
export type ThemeStoreType = ReturnType<typeof createThemeStore>;

