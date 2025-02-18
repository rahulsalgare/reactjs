export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.image} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
