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
  required = false,
}) => {
  return (
    <div className={parentClasses}>
      {label ? (
        <div className="">
          <label className={labelCustomClasses} htmlFor={name}>
            {label}{required ? <span className="text-red-500">*</span> : null}
          </label>
        </div>
      ) : null}
      <input
        className={`w-full border border-stone-400 text-dark placeholder:text-gray-600 px-2 py-2 rounded-md focus:outline-none ${customClasses}`}
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
