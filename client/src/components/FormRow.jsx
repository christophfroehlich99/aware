const FormRow = ({ name, type, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {labelText || name}
      </label>
      <input
        type={type}
        className="form-input"
        name={name}
        value={value}
        onChange={(event) => handleChange(event)}
      ></input>
    </div>
  );
};
export default FormRow;
