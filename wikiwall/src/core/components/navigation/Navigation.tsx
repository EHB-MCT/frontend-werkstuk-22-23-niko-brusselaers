import CategoriesBar from "./CategoriesBar";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import SloganContainer from "./SloganContainer";
import styles from "./css/Navigation.module.css";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navVariants } from "./variants/navVariants";




function Navigation() {
  const [language, setLanguage] = useState("");
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const scrollYProgress = useScroll().scrollY

  useMotionValueEvent(scrollYProgress, "change", () => {
    console.log(scrollYProgress.get());
    
    if (scrollYProgress.get() > 300) {
      setIsCollapsed(true)
    } else{
      setIsCollapsed(false)
    }
  });

  return (
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
        transition={{ duration: 0.5 }}
      >
        <motion.img
          animate={isCollapsed ? "closed" : "open"}
          variants={navVariants.show}
          transition={{ duration: 0.5 }}
          src="./assets/images/wikiwall_logo.png"
          alt="wikiwall_logo"
          className={styles.logo}
        />
        <SearchBar />
        <CategoriesBar />
        <SloganContainer isCollapsed={isCollapsed} />
      </motion.div>
      <div className={styles.backgroundColorContainer}></div>
    </motion.div>
  );
}

export default Navigation;
