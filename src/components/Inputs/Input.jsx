export const Input = ({
  type = "text",
  name = "",
  handleInput = () => {},
  value = "",
  customClasses = "",
  parentClasses = "",
  placeHolder = "Please enter a value",
  label = "",
  labelCustomClasses = "capitalize",
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
        className={`w-full border border-stone-400 text-dark placeholder:text-gray-600 px-2 py-2 rounded focus:outline-none ${customClasses}`}
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
