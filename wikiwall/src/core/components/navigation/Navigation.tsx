import CategoriesBar from "./CategoriesBar";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import SloganContainer from "./SloganContainer";
import styles from "./css/Navigation.module.css";


function Navigation() {
  const [language, setLanguage] = useState("");

  return (
    <div className={styles.navigation}>
      <div className={styles.navigationTopLeftContainer}>
        <Link to={"/"}>
          <img
            className={styles.faviconLogo}
            src="./assets/images/wikiwall_favicon.png"
            alt=""
          />
        </Link>
        <select
          defaultValue={language}
          placeholder="test"
          className={styles.languageOptions}
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        >
          <option value="ENG">ENG</option>
          <option value="FR">FR</option>
          <option value="NL">NL</option>
        </select>
      </div>
      <div className={styles.navigationTopRightContainer}>
        <button>Create</button>
        <button>Profile</button>
      </div>
      <div className={styles.navigationBottomContainer}>
        <img
          src="./assets/images/wikiwall_logo.png"
          alt="wikiwall_logo"
          className={styles.logo}
        />
        <SearchBar />
        <CategoriesBar />
        <SloganContainer/>
      </div>
    </div>
  );
}

export default Navigation;
