import { darkTheme } from "../../theme/darkTheme";
import { lightTheme } from "../../theme/lightTheme";

export interface ITheme {
    theme: string,
    toggleTheme: () => void,
}

export interface IThemeProvider {
    children: JSX.Element
}

export enum ETheme {
    light = "light",
    dark = "dark",
}

export const Themes = {
    dark: darkTheme,
    light: lightTheme,
};