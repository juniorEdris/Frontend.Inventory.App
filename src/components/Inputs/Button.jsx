export const Button = ({
  children,
  className = "",
  type = "submit",
  handleClick = () => {},
}) => {
  return (
    <button
      type={type}
      className={`inline-flex items-center px-4 py-2 bg-primary border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-primary-hover focus:outline-none transition ease-in-out duration-150 ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
