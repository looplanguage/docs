import React from "react"
import useThemeContext from "@theme/hooks/useThemeContext"
import SearchBar from "@theme/SearchBar"

function Navbar(){
    const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();

    function toggleTheme() {
        var darkModeCSS = document.getElementById("lightMode");
        console.log(isDarkTheme)
        if ( isDarkTheme ) {
            darkModeCSS.classList.remove("darkMode");  
            setLightTheme();
            document.getElementsByClassName('loopLogo')[0].src="../../static/img/logoLightMode.svg"; 
            document.getElementById('mobLogo').src="../../static/img/logoLightMode.svg";
            document.getElementsByClassName('githubLogo')[0].src="../../static/img/Github.png"; 
        } else {
            setDarkTheme();
            document.getElementsByClassName('loopLogo')[0].src="../../static/img/logoDarkMode.svg"; 
            document.getElementById('mobLogo').src="../../static/img/logoDarkMode.svg";
            document.getElementsByClassName('githubLogo')[0].src="../../static/img/GithubWhite.png"; 
            darkModeCSS.classList.add("darkMode");
        }
    }

// dark toevoegen aan classname = click on toggletheme moet -dark


return <nav id="lightMode">
    <div id="topNav" class="navbar__items navbar__items--right navItemsRight">
        <p id="textDayNight">Appearance</p>                
    <div class="LNSwitch r" id="LNSwitch-1">
          <input onClick={ toggleTheme } type="checkbox" class="checkbox" />
          <div class="knobs"></div>
          <div class="layer"></div>
    </div>

    </div>
    {/* Left Navbar */}
    <ul id="navItemsLeft" class="navbar__items--left resMob">
    <img class="loopLogo logoSize" src="../../static/img/logoLightMode.svg"/>
        <a class="navItem" href="https://looplang.org/docs/intro"><li>Docs</li></a>
        <a class="navItem" href="https://looplang.org/blog"><li>Updates</li></a>
        {/* <a class="navItem" href="#"><li>About</li></a> */}
    </ul>

    {/* Right Navbar */}
    <div class="navbar__items navbar__items--right navItemsRight resMob">
        {/* search bar docusaurus */}
        <SearchBar id="searchBar"/>
        <a class="navItem" href="https://github.com/looplanguage"><img src="../../static/img/Github.png" class="githubLogo logoSize"/></a>   
    </div>

    {/* Test Mobile Resp Menu */}

    <nav role="navigation" id="resHide">

            <div id="menuToggle">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            <ul id="menu">
            <a class="navItem" href="https://looplang.org/docs/intro"><li>Docs</li></a>
            <a class="navItem" href="https://looplang.org/blog"><li>Updates</li></a>
            {/* <a class="navItem" href="#"><li>About</li></a> */}
        <a class="navItem" href="https://github.com/looplanguage"><li><img src="../../static/img/Github.png" class="githubLogo logoSize"/></li></a>  
            </ul>
           </div>
           <div id="mobMenu">
    <img id="mobLogo" class="navItem loopLogo logoSize" src="../../static/img/logoLightMode.svg"/>
    <SearchBar id="searchBar"/>
    </div>
    </nav>
    

</nav>
}

export default Navbar; 