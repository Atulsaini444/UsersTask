import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { userInfoReducer } from './redux/reducers';
import './App.css';
import Screen1 from './components/Screen1';
import { ChakraProvider } from '@chakra-ui/react'
import Screen2 from './components/Screen2';


const rootReducer = combineReducers({
  userInfo: userInfoReducer,
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter >
        <Routes>
          <Route path='/' element={<Screen1/>}/>
          <Route path='/users' element={<Screen2/>}/>
        </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
