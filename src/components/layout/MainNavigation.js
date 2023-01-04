import { Link } from "react-router-dom";
import { useContext } from "react";
// importing so that we can access context to show the number of favorites by the nav button

import classes from "./MainNavigation.module.css";
// ^ classes is a booger object that will contain all of the props in css file
import FavoritesContext from "../../store/favorites-context";
// importing the context object so that we can extract the total number of favorites

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      {/* ^ pulling the header styling prop out of the classes object */}
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
