import Header from "./Components/Header";
import List from "./Pages/List";
import './index.css'

function App() {
  return (
    <>
      <div className="container-one">
        <div className="container" >
          <Header />
          <List />
        </div>
      </div>
    </>
  );
}

export default App;