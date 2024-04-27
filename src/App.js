import DogCard, {Image} from './DogCard';
// import Person from './Person';
import './App.css';
import Button from './Button';
import Header from './Header';
import List from './List';
import Counter from './Counter';
import Avatar from './Avatar';
import { useState } from 'react';


function App() {

  const [todos] = useState(['todo 1', 'todo 2']);

  const obj = {
    src: "https://st2.depositphotos.com/2331871/5679/i/950/depositphotos_56793127-stock-photo-waterfall-in-deep-rain-forest.jpg",
      width:"100px",
      height:"100px"
  }
  return (
    <>
      <DogCard name="bruno" image="https://th.bing.com/th/id/OIP.2Zj3WtIb3-iFQjAqYJbnlwHaFA?rs=1&pid=ImgDetMain" name1 ="Rjnish Pandey" age = "28" />

      <Button text="Click me!" onlyClick={() => console.log("Button clicked")} />

      <Header title = "Welcome to my website!"/>

      <List item= {['apple', 'banana','orange']}/>

      <Counter />

      <Avatar
      {...obj} 
       />
      <Avatar 
      src= "https://st.depositphotos.com/1006065/2004/i/950/depositphotos_20041987-stock-photo-sunset-beach-this-photo-made.jpg" 
      width="100px"
      height="100px" />

      {todos.map((v, idx) => <li key={idx}>{v}</li>)}

    </>
  );
}

export default App;
