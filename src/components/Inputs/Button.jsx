export const Button = ({
  children,
  customClasses = "",
  type = "submit",
  handleClick = () => {},
}) => {
  return (
    <button type={type} className={customClasses} onClick={handleClick}>
      {children}
    </button>
  );
};
