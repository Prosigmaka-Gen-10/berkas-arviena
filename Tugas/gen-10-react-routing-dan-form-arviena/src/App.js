import "./App.css";

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Selamat Datang!</h1>

      <hr />

      <Outlet />
    </div>
  );
}

export default App;
