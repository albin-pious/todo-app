import './App.css';
import {useState} from 'react';

function App() {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  let day = weekday[d.getDay()];
  const [toDos,setToDos] = useState([]);
  const [toDo,setToDo] = useState('');

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" placeholder="🖊️ Add item..." value={toDo} onChange={(e)=>setToDo(e.target.value)} />
        <i className="fas fa-plus" onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])}></i>
      </div>
      <div className="todos">
        { toDos.map((obj  )=>{
          return ( 
            <div className="todo">
              <div className="left">
              <input
                type="checkbox"
                checked={obj.status}
                onChange={(e) => {
                  if (e.target.checked) {
                    const updatedToDos = toDos.filter((obj2) => obj2.id !== obj.id);
                    setToDos(updatedToDos);
                  } else {
                    const updatedToDos = toDos.map((obj2) =>
                      obj2.id === obj.id ? { ...obj2, status: e.target.checked } : obj2
                    );
                    setToDos(updatedToDos);
                  }
                }}
              />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={()=>{
                   setToDos(prevToDos => prevToDos.filter(item => item !== obj));
                }}></i>
              </div>
            </div> 
          )
        }) }
      </div>
    </div>
  );
}

export default App;
