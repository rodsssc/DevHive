import Navbar from "./components/navbar";
import MyRoute from "./route";
function App() {
  return (
      <>
        <Navbar/>
        <MyRoute/>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-extrabold text-red-600 tracking-wide drop-shadow-lg font-[Poppins]">
  Hello, Tailwind!
</h1>

    </div>
      </>
  );
}

export default App;
