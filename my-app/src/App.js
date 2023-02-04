import {useState, useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDos((current) => [...current, toDo]);
    setToDo("");
  }
  const deleteBtn = (index) => {
    setToDos((curToDos) => curToDos.filter((_, curIndex) => 
    curIndex !== index));
  }
  
  return <div>
    <h1>Hi There! ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input
        value={toDo}
        onChange={onChange}
        type="text"
        placeholder="write something please"
      />
      <button>submit it</button>
    </form>
    <hr />
    <ul>
      {toDos.map((item, index) => <li key={index}>{item}
      <button onClick={() => deleteBtn(index)}>💕</button>
      </li>)}
    </ul>
  </div>
}

export default App;