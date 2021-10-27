import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <div className='middle-nav'></div>
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
