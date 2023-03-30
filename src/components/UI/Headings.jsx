export const ChartHeading = ({ children, className = "" }) => {
  return (
    <h1 className={`text-lg font-medium text-primary ${className}`}>
      {children}
    </h1>
  );
};
