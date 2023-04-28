import { useState } from "react";
import styles from "./css/CategoriesBar.module.css";

function CatagoriesBar() {
  const [selectedCategory, setSelectedCategory] = useState("Design");
  const categories = [
    "Design",
    "Architecture",
    "Art",
    "Biology",
    "Sports",
    "Authors",
    "Geology",
  ];

  return (
    <div className={styles.categoriesBar}>
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
    </div>
  );
}

export default CatagoriesBar;
