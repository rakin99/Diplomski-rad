import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Content />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
