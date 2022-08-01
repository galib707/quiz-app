function Option(props) {
  console.log(props.id);
  return (
    <button
      className="square"
      style={{ backgroundColor: props.bgColor }}
      onClick={() => {
        props.handleClick(props.id);
      }}
    >
      {props.text}
    </button>
  );
}

export default Option;
