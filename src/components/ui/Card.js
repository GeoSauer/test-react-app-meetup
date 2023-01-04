import classes from "./Card.module.css";

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
  //   ^ children is a special prop that every component recieves by default, it holds all of the content contained within opening and closing tags of the element inside of the component.  In this example is takes everything that is between the <Card></Card> tags and injects it inside of the div inside of the Card
}

export default Card;
