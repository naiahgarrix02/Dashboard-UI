import "./App.css";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 ml-70 flex flex-col">
        <Topbar />
        <Body />
      </div>
    </div>
  );
}

export default App;
