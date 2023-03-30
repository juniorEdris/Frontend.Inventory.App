export const ChartHeading = ({ children, className = "" }) => {
  return (
    <h1 className={`font-medium text-primary ${className}`}>
      {children}
    </h1>
  );
};
