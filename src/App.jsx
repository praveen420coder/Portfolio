import { About, Skills, Testimonial, Header, Footer, Work } from './containers';
import { Navbar } from './components';
import './App.scss';

function App() {

  return (
   <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
   </div>
  )
}

export default App;
