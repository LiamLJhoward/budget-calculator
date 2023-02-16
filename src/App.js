import './App.css';
import Navigation from './components/Navigation/Navigation';
import Calculator from './components/Calculator Page/Calculator';
import { Balance } from './components/Calculator Page/Balance';

function App() {
  return (
    <div>
      <Navigation />
      <Calculator />
      <Balance />
    </div>
  );
}

export default App;
