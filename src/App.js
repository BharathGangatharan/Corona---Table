
import React,{ useState,useEffect} from 'react'
import './App.css';
import DropDown  from './components/DropDown';
import Able from './components/table'

function App() {
  const[country,setCountry]=useState([]);
  //const[change,setChange]=useState([]);


  useEffect(()=>{
    fetch('https://corona.lmao.ninja/v2/countries/')
    .then(res => res.json())
    .then(data =>setCountry(data) )
},[])


  //const handChangeCountry=(country)=>{
    //setChange(country);
  //}

  return (
    <div className="App">
      <h1>Covid -19 Tracker</h1>
      <DropDown data={country}/>
      <Able/>
    </div>
  );
}

export default App;
