import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex justify-center">
        <div className="max-w-screen-sm w-full">{children}</div>
      </main>
    </>
  );
}
