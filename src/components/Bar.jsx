const Bar = (props) => {
  return (
    <div
      className="horizontal-bar"
      style={{ animationName: `${props.clicked ? "" : "decreaseBarWidth"}` }}
    ></div>
  );
};

export default Bar;
