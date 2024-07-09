import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import data from './data';
import './App.css';

function App() {
  const components = data.map((item) => <MainSection {...item} />);
  return (
    <div>
      <Header />
      <main>{components}</main>
      <Footer />
    </div>
  );
}

export default App;