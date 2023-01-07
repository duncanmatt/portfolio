
import Navbar from './layout/Navbar';
import Intro from './layout/Intro';
import Latest from './layout/Latest';
import Footer from './layout/Footer';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Intro />
      <Latest />
      <Footer />
    </div>
  );
}

export default App;
