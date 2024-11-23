import "./App.css";
import Content from "./layout/content/Content";
import Sidebar from "./layout/sidebar/Sidebar";

const App = () => {
  return (
    <>
      <div className="app">
        <Sidebar />
        <Content />
      </div>
    </>
  );
};

export default App;
