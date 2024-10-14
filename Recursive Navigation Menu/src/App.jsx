import TreeView from "./components/index";
import menus from "./components/data";

function App() {
  return (
    <div>
      {" "}
      {/*tree view component/  menu UI component/ recursive navigation menu*/}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
