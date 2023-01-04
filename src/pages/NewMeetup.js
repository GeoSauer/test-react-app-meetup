import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();
  // ^ use the useHistory hook to access browser history

  function onAddMeetupHandler(meetupData) {
    fetch(
      "https://react-demo-meetup-45b10-default-rtdb.firebaseio.com/meetups.json",
      // ^ using the built in js fetch function to send requests to our firebase. We add /meetups at the end of the url so firebase creates a meetups collection in the database.  We also add .json at the end because that's just a firebase api thing
      {
        method: "POST",
        // ^ to change the method of the api request from the default GET to POST, we add a second argument to our fetch which is an object that lets us configure our http request.
        body: JSON.stringify(meetupData),
        // ^ You add the data that you want to store in the request in the body as json
        headers: {
          "Content-Type": "application/json",
        },
        // ^ adds meta data to the request making it clear that the request carries json data, some apis require this header to work
      }
    ).then(() => {
      // ^ we use the fact that fetch returns a promise that resolves as soon as it is done and add a then block and define a function that executes as soon as the promise is resolved
      history.replace("/");
      // ^ we use the replace method so that we navigate away and the back button won't take us back to the form submission
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
