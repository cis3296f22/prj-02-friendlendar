//import logo from './logo.svg';
import './App.css';
//import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import CreateEventModal from './CreateEventModal';


function App() {
  const [date, setDate] = useState(new Date());
  // const [showTime, setShowTime] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const [eventData, setEventData] = useState([])
  const dateClicked = (value) => {
    setShowModal(true)
    setDate(value)
  }
  //const dataArray = [{date: "jan 1", filledIn: true}, {}, {}]

  //Pulling from user database
  // const getDateInfoForAll = () => {
  //   //call api to get the stuff => Data
  //   setEventData(Data)
  // }

  // useEffect(() => {
  //   getDateInfoForAll()
  // }, [])
  
  const [toggle,toggleOn]=useState(true)

  return (
    
    <div className="App">{
      toggle?<h1 className="App-header">Friendlendar</h1>:null
    }{
      toggle?<CreateEventModal date={date} closeModal={setShowModal} open={showModal}></CreateEventModal>:null
    }{
      toggle?<div className="centered">
       <Calendar onChange={setDate} value={date} onClickDay={(value) => dateClicked(value)}/>
      </div>:null
    }
      <div class="buttonHolder">
      <button onClick={()=> toggleOn(!toggle)}>Toggle</button>
      </div>
    </div>
     );

}

export default App;
