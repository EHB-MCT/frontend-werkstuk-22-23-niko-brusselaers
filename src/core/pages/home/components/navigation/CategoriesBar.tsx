import { useState } from "react";
import styles from "./css/CategoriesBar.module.css";
import { motion } from "framer-motion";
import { navVariants } from "../../../../shared/variants/navVariants";

function CatagoriesBar({ isCollapsed }: { isCollapsed: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState("Design");
  const categories = [
    "All",
    "Fashion",
    "Culture",
    "Art",
    "Science",
    "History",
    "Sports",
    "Technology",
    "Geology",
  ];

  return (
    <motion.div
      className={styles.categoriesBar}
      animate={isCollapsed ? "closed" : "open"}
      variants={navVariants.catagoriesBar}
    >
      {categories.map((category, key) => {
        if (category === selectedCategory) {
          return (
            <button
              key={key}
              onClick={(e) => {
                setSelectedCategory(e.currentTarget.innerHTML);
              }}
              className={styles.isSelected}
            >
              {category}
            </button>
          );
        } else {
          return (
            <button
              key={key}
              onClick={(e) => {
                setSelectedCategory(e.currentTarget.innerHTML);
              }}
            >
              {category}
            </button>
          );
        }
      })}
    </motion.div>
  );
}

export default CatagoriesBar;
