import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Banner from './components/Banner';

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Banner/>
      <ItemListContainer bienvenida={"Bienvenidos"}/>
      <Footer/>
    </div>
  );
}

export default App;
