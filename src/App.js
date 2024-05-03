import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store/store';
import Navbar from './components/navbar';
import Container from './components/container';
import CardLoader from './components/cardLoader';
// import Card from './components/card';
function App() {
  return (
    <>
    <Provider store={store}>
      <Navbar/>
      <Container/>
    {/* <CardLoader/> */}
      </Provider> </>
  );
}

export default App;
