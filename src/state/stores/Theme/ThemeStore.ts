export interface IThemeStore {
    theme: string;
    layout: string;
    toggleTheme(): any;
    toggleLayout(): any; 
}

const ThemeStore: IThemeStore = {
  theme: "light",
  layout: "cozy",
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

