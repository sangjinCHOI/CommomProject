export default function MainCard({ children, height }) {
  return (
    <div className="bg-white w-100 rounded border-2 mb-4" style={{ height: height }}>
      {children}
    </div>
  );
}
