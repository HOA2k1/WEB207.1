import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Albums from './components/Albums';
import Footer from './components/Footer';

function App() {
  const name = 'DO THI PHUONG HOA';
  const age = 20;
  const sum = (a,b) =>{
    return a+b;
  }
  return (
    <div className="App">
      {/* <div className="container">
        My name is <span className="text-danger" >{name}</span>. I'm <span className="text-danger" >{age}</span> years old.
      </div> */}
      <div>
        <Header />
        <main>
          <Banner />
          <Albums/>
        </main>
        <Footer/>
      </div>
    </div>
  );
}
export default App;
