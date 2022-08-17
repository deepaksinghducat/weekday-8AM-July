import { useEffect } from "react";
import { useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type:'add-task-one'})
  
  }, [])
  
  return (
    <div className="">
    </div>
  );
}

export default App;
