import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context";
// ^ we import FavoritesContextProvider in {} because it is a named function, if we didn't use them then it would simply import FavoritesContext renamed as FavoritesContextProvider since FavoritesContext is the default export

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
  // ^ wrapping the entire app in the FavoritesContextProvider gives the entire app the ability to interact with the context object
);
