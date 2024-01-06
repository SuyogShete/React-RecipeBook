import React from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [searchText, setSearchText] = React.useState("");

  let navigate = useNavigate();

  function handleChange(event) {
    const value = event.target.value;
    setSearchText(value);
  }

  function handleClick() {
    setSearchText("");
    let path = `/search/${searchText}`;
    navigate(path);
  }

  return (
    <header>
      <h1>
        <MaterialIcon icon="menu_book" size={35} color="#fff" /> RecipieBook
      </h1>
      <Link to="/createRecipie">new Recipie</Link>
      <Link to="*">all recipies</Link>

      <button onClick={handleClick}>Search</button>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search Recipe"
        value={searchText}
      />
    </header>
  );
}

export default Header;
