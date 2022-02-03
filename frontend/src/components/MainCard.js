export default function MainCard({ children, height, classes }) {
  return (
    <div className={`bg-white w-100 ${classes}`} style={{ height: height }}>
      {children}
    </div>
  );
}
