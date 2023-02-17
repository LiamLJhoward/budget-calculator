import './App.css';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import CTA from './components/CTA Section/CTA';
import Calculator from './components/Calculator/Calculator';
import Balance from './components/Calculator/Balance/Balance';
import Reviews from './components/Reviews/Reviews';


function App() {
  return (
    <div>
      <Navigation />
      {/* <Calculator /> */}
      <Hero />
      <CTA />
      <Reviews />
    </div>
  );
}

export default App;
