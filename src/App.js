import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store/store';
import Navbar from './components/navbar';
import Container from './components/container';
function App() {
  return (
    <>
    <Provider store={store}>
      <Navbar/>
      <Container/>
      </Provider> </>
  );
}

export default App;
