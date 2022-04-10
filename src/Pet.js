const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.animal}</p>
      <p>{props.breed}</p>
    </div>
  );
};
export default Pet;
