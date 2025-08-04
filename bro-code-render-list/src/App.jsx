import List from "./List";

function App(){

  const fruits = [{id: 1, name:"apple", calories:"92"},
        {id: 2, name:"orange", calories:"100"},
        {id: 3, name:"banana", calories:"74"},
        {id: 4, name:"imissyou", calories:"2712"},
    ];

  const vegetables = [{id: 5, name:"potato", calories:"123"},
      {id: 6, name:"cauliflower", calories:"1214"},
      {id: 7, name:"broccoli", calories:"1"},
      {id: 8, name:"pumpkin", calories:"212312"},
  ];

  return(
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />} 
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
  )
}

export default App