const FormRow = ({ name, type, value, handleChange }) => {
  return (
    <>
      <label className="form-label" htmlFor={name}>
        {name}
      </label>
      <input
        type={type}
        className="form-input"
        name={name}
        value={value}
        onChange={(event) => handleChange(event)}
      ></input>
    </>
  );
};
export default FormRow;
