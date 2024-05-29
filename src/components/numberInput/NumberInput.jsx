import PropTypes from "prop-types";
import styles from "./NumberInput.module.css";

const NumberInput = ({
  label,
  name,
  placeholder,
  step = 1,
  min = 0,
  isValid = undefined,
  handleBlur,
  errorMsg,
}) => {
  let validStyle = "";

  if (typeof isValid === "boolean") {
    validStyle = isValid ? styles["valid"] : styles["invalid"];
  }

  return (
    <div className={styles.input}>
      <label htmlFor={name} className={styles["input-label"]}>
        {label}{" "}
      </label>
      <input
        id={name}
        className={`${styles["input-field"]} ${validStyle}`}
        type="number"
        min={min}
        step={step}
        placeholder={placeholder}
        onBlur={handleBlur}
      />
      {errorMsg && typeof isValid === "boolean" && !isValid && (
        <span className={styles["input-error"]}>{errorMsg}</span>
      )}
    </div>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  step: PropTypes.number,
  min: PropTypes.number,
  isValid: PropTypes.bool,
  handleBlur: PropTypes.func,
  errorMsg: PropTypes.string,
};

export default NumberInput;
