import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Containers/Home/Home';
import ContactForm from './Components/ContactForm/ContactForm';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ContactForm />
    </div>
  );
}

export default App;
