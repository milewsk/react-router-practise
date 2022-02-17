import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainHeader() {
  return (
    <div className={classes.header}>
      <h1 className={classes.logo}>Logo</h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/quotes">
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/addQuote">
              Add new Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainHeader;
