import { useState} from 'react';

function Counter(){

  // const [x, setX] = useState(0);

  const [todos, setTodos] = useState(['todo 1', 'todo 2']);

  return (
    // <>
    // Count x: {x} is {(x % 2 == 0) ? 'Even' : 'Odd'}
    // <button onClick={() => setX(x+1)}>Inc</button>
    // <button onClick={() => setX(x-1)}>Dec</button> 

    // {
    //   (isEditing) ? <input /> : <p>Some todo</p>
    // }
    // <br/>
    // <button onClick={() => setIsediting(!isEditing)}>Click</button>

    <ul>
      {todos.map((todo) => <li>{todo}</li>)}
      <button onClick={() => setTodos([...todos, 'anothre one'])}>Click</button>
    </ul>
    // </>
  )
}

export default Counter;