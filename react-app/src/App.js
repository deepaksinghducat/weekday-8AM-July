import style from './App.module.css'
import HelloWorld from './components/HelloWorld';

import Child from './components/Child';

function App() {

  // const name = "fasfasfsadf"

  // const fullName = () => {
  //   console.log("full Name function called");
  // }

  return (
    <div className={style.container}>
      {/* <HelloWorld name={name} fullName={fullName}/> */}

      <HelloWorld><Child /></HelloWorld>
    </div>
  );
}

export default App;
