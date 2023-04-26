import { useState } from "react";
import styles from './Navigation.module.css'
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import CategoriesBar from "./CategoriesBar";

function Navigation() {
  const [language, setLanguage] = useState("");

  return (
    <div>
      <nav className={styles.navigation}>
        <div>
          <Link to={"/"}>
            <img className={styles.faviconLogo} src="./assets/images/wikiwall_favicon.png" alt="" />
          </Link>
          <select defaultValue={language} placeholder="test" className={styles.languageOptions} onChange={(e) => {setLanguage(e.target.value);}}>
            <option value="ENG">ENG</option>
            <option value="FR">FR</option>
            <option value="NL">NL</option>
          </select>
        </div>
        <SearchBar />
        <div className={styles.profileContainer}>
          <button>Create</button>
          <button>Profile</button>
        </div>
      </nav>
      <CategoriesBar/>
    </div>
  );
}

export default Navigation;
