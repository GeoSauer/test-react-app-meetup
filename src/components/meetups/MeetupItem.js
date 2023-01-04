import { useContext } from "react";
// ^ this hook allows us to establish a connection between this component and the context

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  // ^ here we call useContext on the FavoritesContext that we created and store it in a variable
  // basically this is a snapshot of the current context

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  // ^ create a new variable that accesses our context through our favoritesCtx variable, access the itemIsFavorite key within the context variable which points to the itemIsFavoriteHandler function, into which we pass the meetup id property which is assigned when the meetup is rendered.  All of this returns either true or false which is stored in itemIsFavorite

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  }
  // ^ So this fairly straightforward if/else function actually kicks off a series of events that refreshes state across the app. Whatever happens a function within FavoritesContextProvider will run, which makes FavoritesContextProvider itself run, which creates a new context and updates the state globally with it

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
            {/* we make the button text dynamic and pass in our itemIsFavorite variable, if true ^ else if false ^ */}
          </button>
        </div>
      </Card>
    </li>
    // v this is just a general layout of how the component should look, img TITLE ADDRESS and DESCRIPTION will be dynamically rendered
    // <li>
    //   <div>
    //     <img src="" alt="" />
    //   </div>
    //   <div>
    //     <h3>TITLE</h3>
    //     <address>ADDRESS</address>
    //     <p>DESCRIPTION</p>
    //   </div>
    //   <div>
    //     <button>To Favorites</button>
    //   </div>
    // </li>
  );
}

export default MeetupItem;
