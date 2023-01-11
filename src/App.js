
import Navbar from './layout/Navbar';
import Intro from './layout/Intro';
import Latest from './layout/Latest';
import Certified from './layout/Certified';
import About from './layout/About';
import Contact from './layout/Contact'
import Footer from './layout/Footer';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Intro />
      <Latest />
      <Certified />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
