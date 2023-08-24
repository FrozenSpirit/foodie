
import './App.css';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Specials from './components/Specials';

function App() {
  return (
    <div >
      <Navbar/>
      <Banner/>
      <Offers/>
      <Specials/>
      <Categories/>

    </div>
  );
}

export default App;
