import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
  // ^ we add these empty functions to the context object just to make autocomplete better later on, they do nothing else here
});
// context is a js object, we store it in a constant that is capitalized because in the end it will contain a react component
// createContext takes an argument which is the initial value for the context object

export function FavoritesContextProvider(props) {
  // ^ make sure to export this function so it is available elsewhere
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
      // concat is like push but instead of adding to an array it creates a new array, so here we take the current user favorites, add the newly clicked favorite, and create a new array for updating state
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
      // filter also creates a new array but with only the elements you tell it to look for.
      // here it executes for every item in the prevUserFavorites array on the meetup object and evaluates true or false.  We want it to be true if meetup.id equals meetupId so that it removes that favorite from the array.  Basically a deleteById using the filter method
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
    // some is a built in method that takes a function and applies it to everything in the array, and if at least one item in the array returns true or false, some overall will return true or false
    // here it just checks meetup.id to meetupId
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  // ^ here we are updating our context object with state
  // lower down we can add an addFavorite key which stores a pointer for the addFavoriteHandler function. Notice that it is just pointing at the function, not actually executing it due to the lack of ()

  return (
    <FavoritesContext.Provider value={context}>
      {/* ^ and here we pass the context object in as the value so that whenever it is updated it updates every component that is listening */}
      {props.children}
    </FavoritesContext.Provider>
  );
}
// ^ we create a component that will provide context to any other components that need it
// .Provider is a component that FavoritesContext has built in, and it needs to wrap around all the components that are interested in interacting with this context
// eventually we will want to wrap FavoritesContextProvider around our entire app in index.js, so we let it accept props
// then we let our FavoritesContext.Provider wrap {props.children} so that we can wrap FavoritesContextProvider component around any other component, and those components will be wrapped by context automatically

export default FavoritesContext;
// ^ exporting the context so it is available elsewhere
