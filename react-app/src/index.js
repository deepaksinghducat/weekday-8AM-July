import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseEffect from './components/UseEffect';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import ContextApi from './components/ContextApi';
import {TodoContextProvider} from './store/TodoContent';
import ReactMemo from './optimization/ReactMemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <TodoContext.Provider value={{
//     name: "sfdafsafsafsafsafsadfsadafasdfsaf"
//   }}>
//     <ContextApi />
//   </TodoContext.Provider>
// );

root.render(
  // <TodoContextProvider>
    <ReactMemo />
  // </TodoContextProvider> 
);

