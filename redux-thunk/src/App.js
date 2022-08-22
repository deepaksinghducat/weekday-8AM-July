import { Fragment } from 'react';
import Navbar from './components/Navbar';
import Router from './routes/Router';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container mt-4">
        <Router />
      </div>
    </Fragment>
  );
}

export default App;
