import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/layouts/Header";
import Router from "./routes/Router";

function App() {
  return (
    <Fragment>
        <Header />
        <Container>
          <Router />
        </Container>
    </Fragment>
  );
}

export default App;
