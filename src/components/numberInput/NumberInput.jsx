import PropTypes from "prop-types";
import styles from "./NumberInput.module.css";

const NumberInput = ({ label, name, placeholder, step = 1, min = 0 }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label} </label>
      <input
        id={name}
        className={styles["input-field"]}
        type="number"
        min={min}
        step={step}
        placeholder={placeholder}
      />
    </div>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  step: PropTypes.number,
  min: PropTypes.number,
};

export default NumberInput;
