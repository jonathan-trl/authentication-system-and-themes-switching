import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ETheme } from "../../context/ThemeContext/types";
import { Input, Label, Switch } from "./ButtonSwitchTheme.styles";

const ButtonSwitchTheme = () => {
    const { toggleTheme, theme } = useContext(ThemeContext);

    const isDarkMode = theme === ETheme.dark;

    return (
        <Label>
            <Input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleTheme}
            />
            <Switch />
        </Label>
    );
};

export default ButtonSwitchTheme;
