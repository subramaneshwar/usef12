import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Search from './Components/Search';
function App() {
  const [value, setvalue] = useState("dosa")
  const [result, setresult] = useState([])
  useEffect(() => {
    const response = async()=>{
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${value}&app_id=e0519bcb&app_key=8b4d0ca87c61cf3e924f960c4fdc5e17`)
      const resp= await res.json()
      setresult(resp.hits)
  }
    response()
  },[value])
  useEffect(() => {
    return () => {
      // Cancel any pending API requests
      // Perform any other necessary cleanup
    };
  }, []);
  {console.log(result)}
  return (
    <div className="App" >
      <Search setvalue={setvalue} value={setvalue}/>
      <Card result={result}/>
    </div>
  );
}

export default App;
