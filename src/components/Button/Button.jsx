const Button = (props) => {
  const handleClick = () => console.log("Click");
  return (
    <button onClick={handleClick} className="button">
      {props.text}
    </button>
  );
};
export default Button;
