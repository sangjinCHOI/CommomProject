export default function MainCard({ children }) {
  return (
    <div className="bg-white w-100 rounded-lg border mb-4 p-4" style={{ height: "800px" }}>
      {children}
    </div>
  );
}
