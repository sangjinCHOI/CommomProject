export default function MainCard({ children, height }) {
  return (
    <div className="bg-white w-100" style={{ height: height }}>
      {children}
    </div>
  );
}
