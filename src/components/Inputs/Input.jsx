export const Input = ({
  type = "text",
  name = "",
  handleInput = () => {},
  value = "",
  customClasses = "",
  parentClasses = "",
  placeHolder = "Please enter a value",
  label = "",
  labelCustomClasses = "",
}) => {
  return (
    <div className={parentClasses}>
      {label ? (
        <div className="">
          <label className={labelCustomClasses} htmlFor={name}>
            {label}
          </label>
        </div>
      ) : null}
      <input
        className={`focus:outline-none ${customClasses}`}
        type={type}
        id={name}
        name={name}
        onChange={handleInput}
        value={value}
        placeholder={placeHolder}
      />
    </div>
  );
};
