import './App.css';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import CTA from './components/CTA Section/CTA';
import Calculator from './components/Calculator/Calculator';
import Balance from './components/Calculator/Balance/Balance';
import Testimonials from './components/Reviews/Testimonials';


function App() {
  return (
    <div>
      <Navigation />
      {/* <Calculator /> */}
      <Hero />
      <CTA />
      <Testimonials />
    </div>
  );
}

export default App;
