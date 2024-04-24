function List(props) {
  const listItem = props.item.map ((item ) => 
  <li key={item}>{item}</li>
)

return (
  <ul>{listItem}</ul>
)
}

export default List;