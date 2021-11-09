import React from "react"
import useThemeContext from "@theme/hooks/useThemeContext"

function Navbar(){
    const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();

    function toggleTheme() {
        console.log(isDarkTheme)
        if ( isDarkTheme ) {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    }

// alles wat uitgevoerd moet worden staat voor return 
    return <div onClick={toggleTheme}>
        { isDarkTheme ? <div>DARK!</div> : "Light!"}
    </div>
}

export default Navbar; 