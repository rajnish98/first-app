// export function Image () {
//   return  <img src ="https://th.bing.com/th/id/OIP.2Zj3WtIb3-iFQjAqYJbnlwHaFA?rs=1&pid=ImgDetMain"/>
// }
import Image from "./Image";
import Name  from "./Name";
import Person from "./Person";
function DogCard(props) {
  let title = "This is a dog card"
  return (
    <>
    <h2 style={
    {
      fontSize :'60px',
      color: 'blue'
    }
    }>
      {title}
    </h2>
    <Name>
    <h3>{props.name}</h3>
    </Name>
      <Image src={props.image} />
      <Person>
        <h1>{props.name1} is {props.age} years old.</h1>
      </Person>
    </>
  )
}

export default DogCard;