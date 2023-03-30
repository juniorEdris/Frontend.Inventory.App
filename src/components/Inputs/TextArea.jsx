export const TextArea = ({
  parentClasses = "",
  customClasses = "",
  labelCustomClasses = "",
  id = "",
  name = "",
  rows = "4",
  handleTextArea = () => {},
  value = "",
  label = "",
  placeHolder = "",
  required=false
}) => (
  <div className={`grid gap-1 w-full rounded-md ${parentClasses}`}>
    {label ? (
      <label className={`capitalize ${labelCustomClasses}`} htmlFor={id}>
        {label}{required ? <span className="text-red-500">*</span> : null}
      </label>
    ) : null}
    <textarea
      className={`rounded-md border border-stone-400 text-dark placeholder:text-gray-600 resize-none w-full px-2 py-2 focus:outline-none ${customClasses}`}
      id={id}
      name={name}
      rows={rows}
      onChange={handleTextArea}
      value={value}
      placeholder={placeHolder}
    />
  </div>
);
