import CategoriesBar from "./CategoriesBar";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import SloganContainer from "./SloganContainer";
import style from "./css/Navigation.module.css";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navVariants } from "../../../../shared/variants/navVariants";




function Navigation() {
  const [language, setLanguage] = useState("");
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const scrollYProgress = useScroll().scrollY

  // if user scroll above certain value on homepage, collapse navigation else open navigation
  useMotionValueEvent(scrollYProgress, "change", () => { 
      if (scrollYProgress.get() > 300) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
  });

  return (
    <>
      <motion.div
        className={style.navigation}
        style={isCollapsed ? { position: "fixed" } : { position: "relative" }}
        transition={{ duration: 0.5 }}
      >
        <div className={style.navigationTopLeftContainer}>
          <Link to={"/"}>
            <img
              className={style.faviconLogo}
              src="./assets/images/wikiwall_favicon.png"
              alt=""
            />
          </Link>
          <select
            defaultValue={language}
            placeholder="test"
            className={style.languageOptions}
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
          >
            <option value="ENG">ENG</option>
            <option value="FR">FR</option>
            <option value="NL">NL</option>
          </select>
        </div>
        <div className={style.navigationTopRightContainer}>
          <button>Create</button>
          <button>Profile</button>
        </div>
        <motion.div
          className={style.navigationBottomContainer}
          animate={isCollapsed ? "closed" : "open"}
          variants={navVariants.bottomContainer}
          transition={{ duration: .25 }}
        >
          <motion.img
            animate={isCollapsed ? "closed" : "open"}
            variants={navVariants.show}
            transition={{ duration: 1.5 }}
            src="./assets/images/wikiwall_logo.png"
            alt="wikiwall_logo"
            className={style.logo}
          />
          <SearchBar />
          <CategoriesBar isCollapsed={isCollapsed} />
          <SloganContainer isCollapsed={isCollapsed} />
        </motion.div>
        <div className={style.backgroundColorContainer}></div>
      </motion.div>
    </>
  );
}

export default Navigation;
