const Input = (props) => {
  return (
    <div>
      <label>{props.title}</label>
      <input type={props.type} />
    </div>
  );
};

export default Input;
