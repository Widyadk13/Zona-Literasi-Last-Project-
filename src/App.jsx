import './App.css';
import Navbar from './components/Navbar';
import Bookslist from './components/BooksList';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Bookslist/>
      <Footer/>
    </div>
  );
}

export default App;
