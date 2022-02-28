const Box = (props) => {
  return (
    <div>
      <input type="checkbox" />
      <label>{props.name}</label>
    </div>
  );
};

export default Box;
