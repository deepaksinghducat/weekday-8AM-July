import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/layouts/Header";
import Router from "./routes/Router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Fragment>
        <Header />
        <ToastContainer />
        <Container>
          <Router />
        </Container>
    </Fragment>
  );
}

export default App;
