import { Link } from 'react-router-dom';
import CategoriesBar from '../../../components/navigation/CategoriesBar';
import SearchBar from '../../../components/navigation/SearchBar';
import styles from './NavigationHomePage.module.css'
import { useState } from 'react';

function NavigationHomePage() {
  const [language, setLanguage] = useState("");

    return (
      <div>
        <nav className={styles.navigation}>
          <div>
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
          <SearchBar />
          <div className={styles.profileContainer}>
            <button>Create</button>
            <button>Profile</button>
          </div>
        </nav>
        <CategoriesBar />
      </div>
    );
}

export default NavigationHomePage;