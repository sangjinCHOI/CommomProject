import Navbar from "./Navbar";
import SettingSideBar from "./SettingSideBar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main class="grid grid-cols-4 gap-x-4">
        <div class="col-span-1"></div>
        <div class="col-span-2">{children}</div>
        <div class="col-span-1"></div>
      </main>
    </>
  );
}
