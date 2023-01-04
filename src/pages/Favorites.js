import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  // ^ again we define a variable to store the context object

  let content;
  // creating a helper variable so that the screen isn't blank if you have no favorites

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>Nothing to display, add some Favorites!</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
      {/* <MeetupList meetups={favoritesCtx.favorites} /> */}
      {/* we move this ^ line up to our if/else statement so that it can conditionally show a no favorites message, and replace it with our content variable */}
    </section>
  );
}

export default FavoritesPage;
