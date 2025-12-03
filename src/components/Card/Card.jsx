const Card = (props) => {
  return (
    <div>
      <div>
        {props.isSale && <p>Sale</p>}
        <h2>Product: {props.name}</h2>
        <p>Price: {props.price}£</p>
      </div>
      <div></div>
    </div>
  );
};
export default Card;
