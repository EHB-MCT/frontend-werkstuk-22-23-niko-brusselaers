import styles from './SearchBar.module.css'

function SearchBar() {
    return (
      <form className={styles.searchBar}>
        <label htmlFor="searchBar">
          <img src="./assets/images/search_icon.svg" alt="" />
        </label>
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Search"
        ></input>
        <button>Filters...</button>
      </form>
    );
}

export default SearchBar;