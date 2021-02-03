import React, { useState} from 'react'

function App() {

  const [count,setCount] = useState(0);
  const [user,setUser] = useState([{name: '', age: ''}]);

  const changeCount = () => {
    setCount( count+1)
  }

  const changeUser = (e,field) => {
    if(field === 'name'){
      setUser({...user,name:e.target.value})
    } else {
      setUser({...user,age:e.target.value})
    } 
  }

  return (
    <div className="App">
    <p> clicked count {count} times</p>
    <button onClick={changeCount}>Click me</button>

    <br></br>
    <input value = {user.name} onChange={(e)=> changeUser(e,'name')}></input>
    <input value={user.age} onChange={(e)=> changeUser(e,'age')}></input>
    <br></br>
     
     <p>{JSON.stringify(user.name)}</p>
     <p>{JSON.stringify(user.age)}</p>


    </div>
  );
}

export default App;
