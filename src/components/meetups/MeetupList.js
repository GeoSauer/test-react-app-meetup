import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
          //   meetup={meetup}
          //   ^ another approach is to define the entire meetup prop here and destructure it inside of the MeetupItem component
        />
      ))}
      {/* ^ dynamic expression where meetups is a booger because it's your component, then map every meetup into another object, a jsx element. */}
    </ul>
  );
}

export default MeetupList;
