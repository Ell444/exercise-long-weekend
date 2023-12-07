import { useState } from 'react'
import './App.css'
import CustomList from './components/CustomList'

function App() {

  const allLists =
    [
      {
        title: "Invitati",
        type: "ul",
        list: ["Tizio", "Caio"]
      },
      {
        title: "Organizzatori",
        type: "ol",
        list: ["Laura", "Massimo"]
      }
    ]

  return (
    <>
      <h2>Lista ordinata</h2>
      <CustomList
        type='ol'
        list={['Tizio', 'Caio', 'Sempronio']}
      />

      <h2>Lista non ordinata</h2>
      <CustomList
        type='ul'
        list={['Sempronio', 'Tizio', 'Caio']}
      />

      {allLists.map((item, i) =>
        <section key={i}>
          <div>{item.title}</div>
          <CustomList type={item.type} list={item.list} />
        </section>
      )}

    </>

  );
}

export default App
