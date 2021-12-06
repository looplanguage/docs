import React from "react";
import useThemeContext from "@theme/hooks/useThemeContext";
import SearchBar from "@theme/SearchBar";
import styles from "../css/navbar.module.css";

// Loop logos
import lightLoopLogo from "../components/img/loopLogoBlack.png";
import darkLoopLogo from "../components/img/loopLogoWhite.png";


// Github logos
import lightGithub from "../components/img/GitHubWhite.png";
import darkGithub from "../components/img/GitHub.png";

// mousedown event 
// input value checked true or false 
// checked means (whatever value you give) that it's true 
// togglemenu function 


function Navbar() {
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();

  function toggleTheme() {
    console.log(isDarkTheme);
    if (isDarkTheme) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  }

  function toggleMenu() { 
  const isChecked = document.getElementById("checkMenu").checked; 

    if (isChecked){
        document.getElementById("checkMenu").checked = false;
    }
  }

  return (
    <nav className={`${styles.lightModeNavBar} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
      <ul className={`${styles.navItemsLeft} ${styles.resDesk}`}>
        <img className={`${styles.loopLogo} ${styles.logoSize}`} src={isDarkTheme ? darkLoopLogo : lightLoopLogo} />
        <a className={`${styles.navItem}`} href="/docs/intro">
          <li className={`${styles.leftNavBar}`}>Docs</li>
        </a>
        <a className={`${styles.navItem}`} href="/blog">
          <li>Updates</li>
        </a>
      

      {/* Right Side of the Navbar */}
      <div className={`${styles.navbar__items} ${styles.navItemsRight}`}>         

        {/* search bar docusaurus */}

        <SearchBar />
        <a className={`${styles.navItem}`} href="https://github.com/looplanguage">
          <img src={isDarkTheme ? lightGithub : darkGithub} className={`${styles.logoSize} ${styles.githubLogo}`} />
        </a>

        {/* Toggle Switch */}

        <div className={`${styles.LNSwitch} ${styles.r} ${styles.LNSwitchNight}`}>
            <input onClick={toggleTheme} type="checkbox" className={`${styles.checkbox}`} />
            <div className={`${styles.knobs}`}></div>
            <div className={`${styles.layer}`}></div>
        </div>

      </div>
      </ul>



      {/* Mobile Resp Menu - Temp Shutdown */}

      <nav role="navigation" className={`${styles.resMob}`}>
        <div className={`${styles.menuToggle}`}>

            {/* Checkbox Menu open or Close. */}

          <input type="checkbox" id="checkMenu" />
          <span></span>
          <span></span>
          <span></span>
          
        {/* Fold Menu */}

          <ul className={isDarkTheme ? styles.menuDark : styles.menu}>

              <div className={`${styles.logoCheckbox}`}>
          <a href="/">
          <img className={`${styles.logoSize}`} src={isDarkTheme ? darkLoopLogo : lightLoopLogo} />
          </a>
          <div className={`${styles.LNSwitch} ${styles.r} ${styles.LNSwitchNight}`}>
              {/* Checkbox Day / Night Switch  */}
            <input onClick={toggleTheme} type="checkbox" className={`${styles.checkbox}`} />
            <div className={`${styles.knobs}`}></div>
            <div className={`${styles.layer}`}></div>
        </div> 
        </div>
            <a className={`${styles.navItem}`} href="/docs/intro">
              <li>Docs</li>
            </a>
            <a className={`${styles.navItem}`} href="/blog">
              <li>Updates</li>
            </a>
            {/* <a class="navItem" href="#"><li>About</li></a> */}
            <a className={`${styles.navItem}`} href="https://github.com/looplanguage">
              <li>
                <img src={isDarkTheme ? lightGithub : darkGithub} className={`${styles.logoSize} ${styles.githubLogo}`} />
              </li>
            </a>
            <div onClick={toggleMenu} className={`${styles.overlay}`}></div>

          </ul>
          </div>
          {/* End folded out UL */}

        <div className={`${styles.mobMenu}`}>
          <a href="/">
          <img className={`${styles.loopLogo} ${styles.logoSize}`} src={isDarkTheme ? darkLoopLogo : lightLoopLogo} />
          </a>
          <SearchBar />
        </div>
      </nav>
    </nav>
  );
}

export default Navbar;
