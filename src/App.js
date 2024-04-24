import DogCard, {Image} from './DogCard';
// import Person from './Person';
import './App.css';
import Button from './Button';
import Header from './Header';
import List from './List';


function App() {
  return (
    <>
      <DogCard name="bruno" image="https://th.bing.com/th/id/OIP.2Zj3WtIb3-iFQjAqYJbnlwHaFA?rs=1&pid=ImgDetMain" name1 ="Rjnish Pandey" age = "28" />

      <Button text="Click me!" onlyClick={() => console.log("Button clicked")} />

      <Header title = "Welcome to my website!"/>

      <List item= {['apple', 'banana','orange']}/>
    </>
  );
}

export default App;
