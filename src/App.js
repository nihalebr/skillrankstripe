import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Card from './components/Card';
import Success from './components/Success';

function App() {
  return (
    <Router>
  <Routes>
    <Route exact path="/" component={App} />
    <Route path="/success" component={Success} />
  </Routes>
  <div className='app'>
    <Nav />
    <Card />
  </div>
</Router>
    
  );
}

export default App;




