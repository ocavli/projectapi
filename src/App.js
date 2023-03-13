import "./App.css";
import Menu from "./components/Menu";
import Orders from "./components/Orders";
import Search from "./components/Search";
import data from "./data";
import data1 from "./data1";
import Status from "./components/Status";

function App() {
  const status = data1.map((orderData) => {
    return <Status data={orderData} />;
  });

  const orders = data.map((orderData) => {
    return <Orders data={orderData} />;
  });

  return (
    <div className="App">
      
      <div className="menu">
      <Menu />
      </div>
      
      <div className="content">
        <Search className="search" />
        <section>{status}</section>

        <section>{orders}</section>
      </div>
    </div>
  );
}

export default App;
