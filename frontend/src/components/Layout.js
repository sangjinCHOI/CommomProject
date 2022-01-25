import Navbar from "./Navbar";
import SettingSideBar from "./SettingSideBar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-4 gap-x-4">
        <div className="col-span-1"></div>
        <div className="col-span-2">{children}</div>
        <div className="col-span-1"></div>
      </main>
    </>
  );
}
