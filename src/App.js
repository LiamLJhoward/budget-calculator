import './App.css';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import CTA from './components/CTA Section/CTA';
import Testimonials from './components/Testimonials/Testimonials';
import Tips from './components/Tips & Tricks/Tips';
import Footer from './components/Footer/Footer';
import Inpute from './components/Input/Inpute';


function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <CTA />
      <Inpute />
      <Testimonials />
      <Tips />
      <Footer />
    </div>
  );
}

export default App;