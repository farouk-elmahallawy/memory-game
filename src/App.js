import { useState } from 'react';
import './App.css';
import Card from './components/Card'


function App() {
  const [name,setName] = useState('')
  const [Go,setGo] = useState(false)
  const handelSubmit = (e) =>{
    e.preventDefault()
  }
  const handelClick = (e) =>{
    setName(userName);
    setGo(!Go)
  }
  var userName;
  const handelChange = (e) =>{
     userName = e.target.value;
  }
  return (
    <div className="App">
        <div className='head'>
            <p className='name'> Welcome<span> {name ? name : 'UnKown'} </span></p>  
        </div>      
        <div className={Go ?'go':'start'}>
          <form onSubmit={(e)=>handelSubmit(e)}>
            <h1>Hi</h1>
            <p>Please Enter Your Name</p>
             <input onChange={(e) => handelChange(e)} type='name'></input>
             <button onClick={(e) => handelClick(e)}> Go </button>
          </form>
        </div>
        <div className='cardList'>
            <Card />
        </div>
    </div>
  );
}

export default App;
