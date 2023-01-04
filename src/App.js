import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
// import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      {/* ^ here we replace the original wrapping div with the Layout component */}
      {/* <div> */}
      {/* <MainNavigation /> */}
      {/* ^ we removed this from here when we added it to the Layout component */}
      <Switch>
        <Route path="/" exact>
          {/* ^ adding exact makes it look for just the / instead of any route beginning with /.  Does the same thing as moving your / route below all other routes */}
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
      {/* </div> */}
    </Layout>
  );
}

export default App;
