import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Containers/Home/Home';
import ContactForm from './Components/ContactForm/ContactForm';
import ArrowTop from './Components/ArrowTop/ArrowTop';

const App = () => {
  return (
    <div className="App">
      <ArrowTop />
      <Navbar />
      <Home />
      <ContactForm />
    </div >
  );
}

export default App;
