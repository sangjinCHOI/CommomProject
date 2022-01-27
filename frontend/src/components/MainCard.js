export default function MainCard({ children, height, border, margin, padding, rounded }) {
  return (
    <div
      className={`bg-white w-100 ${border} ${margin} ${padding} ${rounded}`}
      style={{ height: height }}
    >
      {children}
    </div>
  );
}
