import CategoriesBar from "./CategoriesBar";
import SearchBar from "./SearchBar";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SloganContainer from "./SloganContainer";
import styles from "./css/Navigation.module.css";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navVariants } from "../../shared/variants/navVariants";




function Navigation() {
  const [language, setLanguage] = useState("");
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true)
  const [onHomePage, setOnHomePage] = useState<boolean>(false)
  const scrollYProgress = useScroll().scrollY
  const location = useLocation()

  //if we are on homepage, set OnHomPage true else set navigation to collapsed state
  useEffect(() => {
    if (location.pathname === "/") {
      setOnHomePage(true);
      setIsCollapsed(false);
    } else{
      
    }
  }, [location]);

  // if user scroll above certain value on homepage, collapse navigation else open navigation
  useMotionValueEvent(scrollYProgress, "change", () => { 
           
    if (onHomePage) {
      if (scrollYProgress.get() > 300) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    }    
  });

  return (
    <>
      <motion.div
        className={styles.navigation}
        style={isCollapsed ? { position: "fixed" } : { position: "relative" }}
        transition={{ duration: 0.5 }}
      >
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
        <motion.div
          className={styles.navigationBottomContainer}
          animate={isCollapsed ? "closed" : "open"}
          variants={navVariants.bottomContainer}
          transition={{ duration: 1.25 }}
        >
          <motion.img
            animate={isCollapsed ? "closed" : "open"}
            variants={navVariants.show}
            transition={{ duration: 1.5 }}
            src="./assets/images/wikiwall_logo.png"
            alt="wikiwall_logo"
            className={styles.logo}
          />
          <SearchBar />
          <CategoriesBar isCollapsed={isCollapsed} />
          <SloganContainer isCollapsed={isCollapsed} />
        </motion.div>
        <div className={styles.backgroundColorContainer}></div>
      </motion.div>
    </>
  );
}

export default Navigation;
