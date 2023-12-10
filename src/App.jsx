import { useState } from 'react'
import './App.css'
import CustomList from './components/CustomList'


let allLists =
  [
    {
      title: "Invitati",
      type: "ul",
      list: ["Tizio", "Caio"],
      userValue: "",
    },
    {
      title: "Organizzatori",
      type: "ul",
      list: ["Laura", "Massimo"],
      userValue: "",
    },
    {
      title: "Bodyguards",
      type: "ul",
      list: ["Calin", "Alex"],
      userValue: "",
    }
  ]


function App() {

  const [objectArray, setObjectArray] = useState(allLists);
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Esercizi long-weekend</h2>
      <br />
      <CustomList type={"ul"} list={["Ugo", "Gianni", "Piero"]} />
      <br /> <br />
      {allLists.map((elem, index) => {
        return (
          <div key={index} id='special-div'>
            <h3>
              {elem.title}
            </h3>
            <CustomList type={elem.type} list={elem.list} />
            <input
              type="text"
              value={elem.userValue}
              onChange={(e) => {
                const newObjectArray = [...allLists];
                const newObj = newObjectArray[index];
                newObj.userValue = e.target.value;
                setObjectArray(newObjectArray);

              }} />
            <button
              onClick={() => {
                const newObjectArray = [...allLists];
                const newObj = newObjectArray[index];
                newObj.list = [...newObj.list, elem.userValue];
                setObjectArray(newObjectArray);
                elem.userValue = '';
              }}
            >Aggiungi</button>

          </div>
        )

      })}
      <br />
      <hr />



      <div className='wrapper'>
        <h1>
          {count}
        </h1>
        <div id='button-container'>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>

      </div>

    </>
  );
}

export default App;