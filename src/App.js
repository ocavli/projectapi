
import './App.css';
import Menu from './components/Menu';
import Orders from './components/Orders';
import Status from './components/Status';
import data from './data';

function App() {
  const orders = data.map(orderData => {
    return (
      <Orders data={orderData} />
    )
  })

  const status = data.map(statusData => {
    return (
      <Status data={statusData} />
    )
  })

  return (
    <div className="App">
      <Menu/>
      <section>
          {orders}
        </section>
        <section>
          {status}
        </section>

    </div>
  );
}

export default App;
