import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button className="button" style={{ backgroundColor: props.backgroundColor, color: props.color }}>
        {props.name}
      </button>
    </div>
  );
};

export default Button;
