import PropTypes from "prop-types";

const Button = ({ backColor, text, onClick }) => {
  const btnStyle = {
    backgroundColor: backColor,
  };

  return (
    <button
        style={btnStyle}
        className="btn"
        onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  backColor: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
