import "@material-tailwind/react/tailwind.css";
import Button from "@material-tailwind/react/Button";
import Alert from "@material-tailwind/react/Alert";
import ClosingAlert from "@material-tailwind/react/ClosingAlert";

function App() {
  return (
    <div>
      <Button>frontend</Button>

      <div class="flex flex-wrap items-end gap-x-2 gap-y-8">
        <button class="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-1.5 px-4 text-xs leading-normal text-white bg-red-500 hover:bg-light-blue-700 focus:bg-light-blue-400 active:bg-light-blue-800 shadow-md-light-blue hover:shadow-lg-light-blue undefined">
          small_test
        </button>
        <button class="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-2.5 px-6 text-xs leading-normal text-white bg-light-blue-500 hover:bg-orange-700 focus:bg-light-blue-400 active:bg-light-blue-800 shadow-md-light-blue hover:shadow-lg-light-blue undefined">
          regular_test
        </button>
        <button class="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-3 px-7 text-sm leading-relaxed text-white bg-green-500 hover:bg-light-blue-700 focus:bg-blue-400 active:bg-light-blue-800 shadow-md-light-blue hover:shadow-lg-light-blue undefined">
          large_test
        </button>
      </div>
      <br />
      <Alert color="green">LOGIN SUCCESS</Alert>
      <ClosingAlert color="red">LOGIN FAILED</ClosingAlert>
      
    </div>
  );
}

export default App;
