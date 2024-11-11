import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <div className="bg-yellow-50 text-black font-mono">
    <Navigation/>
    <Hero />
    <FeaturedProducts />
    <About />
    <Footer />
  </div>
  );
}
