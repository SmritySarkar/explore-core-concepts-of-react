import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick(){
    alert('Button Clicked for first time');
  }

  const  handleClick2 = () =>{
    alert("Button clicked for second time");
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      
      <h3>React core concepts 2</h3>

      <Friends></Friends>

      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>First one</button>
      <button onClick={handleClick2}>Second one</button>
      <button onClick={()=>{ alert('Button clicked for Third time') } }>Third one</button>
      <button onClick={() => addToFive(3)}>Fourth one</button>
    </>
  )
}

export default App
